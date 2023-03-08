import { createServer as createViteDevServer } from 'vite';
// import { pluginIndexHtml } from './plugin-island/indexHtml';
// import { pluginConfig } from './plugin-island/config';
// import pluginReact from '@vitejs/plugin-react';
import { resolveConfig } from './config';
import { PACKAGE_ROOT } from './constants/index';
// import { pluginRoutes } from './plugin-routes/index';
import { createVitePlugins } from './vitePlugins';

export async function createDevServer(
  root = process.cwd(),
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development');
  console.log(config);
  return createViteDevServer({
    root: PACKAGE_ROOT,
    plugins: await createVitePlugins(config, restartServer),
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
