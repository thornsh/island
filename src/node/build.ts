import { join } from 'path';
import { build as viteBuild, InlineConfig } from 'vite';
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constants/index';
import { RollupOutput } from 'rollup';
import fs from 'fs-extra';
import { pathToFileURL } from 'url';

export async function build(root: string = process.cwd()) {
  const [clientBundle, serverBundle] = await bundle(root);

  const serverEntryPath = join(root, '.temp', 'ssr-entry.js');
  const { render } = await import(serverEntryPath);

  await renderPage(render, root, clientBundle);
}

export async function bundle(root: string) {
  const resolveViteConfig = (isServer: boolean): InlineConfig => ({
    mode: 'production',
    root,
    build: {
      ssr: isServer,
      outDir: isServer ? '.temp' : 'build',
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm'
        }
      }
    }
  });

  console.log('Building client + server bundles...');

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      viteBuild(resolveViteConfig(false)),
      viteBuild(resolveViteConfig(true))
    ]);

    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {}
}

export async function renderPage(
  render: () => string,
  root: string,
  clientBundle: RollupOutput
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  );

  console.log('rendering page in server side...');
  const appHtml = render();
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
  await fs.ensureDir(join(root, 'build'));
  await fs.writeFile(join(root, 'build/index.html'), html);
  await fs.remove(join(root, '.temp'));
}
