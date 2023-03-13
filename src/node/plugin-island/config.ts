import path, { relative, join } from 'path';
import { SiteConfig } from 'shared/types/index';
import { Plugin } from 'vite';
import { PACKAGE_ROOT } from '../constants/index';
import fs from 'fs-extra';
import sirv from 'sirv';
const SITE_DATA_ID = 'island:site-data';

export function pluginConfig(
  config: SiteConfig,
  restartServer: () => Promise<void>
): Plugin {
  return {
    name: 'island:config',
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            '@runtime': join(PACKAGE_ROOT, 'src', 'runtime', 'index.ts')
          }
        },
        css: {
          modules: {
            localsConvention: 'camelCaseOnly'
          }
        }
      };
    },
    configureServer(server) {
      const publicDir = path.join(config.root, 'public');
      // if (fs.pathExistsSync(publicDir)) {
      server.middlewares.use(sirv(publicDir));
      // }
    },
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [config.configPath];
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file));
      if (include(ctx.file)) {
        console.log(
          `\n${relative(config.root, ctx.file)} changed, restarting server...`
        );

        await restartServer();
      }
    }
  };
}
