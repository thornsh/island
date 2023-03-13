import { dirname, join } from 'path';
import { build as viteBuild, InlineConfig } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constants/index';
import { RollupOutput } from 'rollup';
import fs from 'fs-extra';
import { pathToFileURL } from 'url';
import { SiteConfig } from 'shared/types';
import pluginReact from '@vitejs/plugin-react';
import { pluginConfig } from './plugin-island/config';
import { createVitePlugins } from './vitePlugins';
import { Route } from './plugin-routes/index';
import path from 'path';

export async function build(root: string = process.cwd(), config: SiteConfig) {
  const [clientBundle, serverBundle] = await bundle(root, config);

  const serverEntryPath = join(root, '.temp', 'ssr-entry.js');
  const { render, routes } = await import(serverEntryPath);

  try {
    await renderPage(render, routes, root, clientBundle);
  } catch {
    //
  }
}

export async function bundle(root: string, config: SiteConfig) {
  const resolveViteConfig = async (
    isServer: boolean
  ): Promise<InlineConfig> => ({
    mode: 'production',
    root,
    build: {
      minify: false,
      ssr: isServer,
      outDir: isServer ? path.join(root, '.temp') : path.join(root, 'build'),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm'
        }
      }
    },
    plugins: await createVitePlugins(config, undefined, isServer),
    ssr: {
      // 注意加上这个配置，防止 cjs 产物中 require ESM 的产物，因为 react-router-dom 的产物为 ESM 格式
      noExternal: ['react-router-dom', 'lodash-es']
    }
  });

  console.log('Building client + server bundles...');

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      viteBuild(await resolveViteConfig(false)),
      viteBuild(await resolveViteConfig(true))
    ]);

    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    //
  }
}

export async function renderPage(
  render: (url: string) => string,
  routes: Route[],
  root: string,
  clientBundle: RollupOutput
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  );

  console.log('rendering page in server side...');

  return Promise.all(
    routes.map(async (route) => {
      const routePath = route.path;
      const appHtml = await render(routePath);
      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root">${appHtml}</div>
  <script type="module" src="/${clientChunk?.fileName}"></script>
</body>
</html>
  `.trim();
      const fileName = routePath.endsWith('/')
        ? `${routePath}index.html`
        : `${routePath}.html`;
      await fs.ensureDir(join(root, 'build', dirname(fileName)));
      await fs.writeFile(join(root, 'build', fileName), html);
      // await fs.remove(join(root, '.temp'));
    })
  );
}
