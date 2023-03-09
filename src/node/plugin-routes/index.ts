import { PageModule } from 'shared/types';
import { Plugin } from 'vite';
import { RouteService } from './RouteService';

interface PluginOptions {
  root: string;
  isSSR?: boolean;
}

export interface Route {
  path: string;
  element: React.ReactElement;
  filePath: string;
  preload: () => Promise<PageModule>;
}

export const CONVENTIONAL_ROUTE_ID = 'island:routes';

export function pluginRoutes(options: PluginOptions): Plugin {
  const routeService = new RouteService(options.root);

  return {
    name: 'island:routes',
    async configResolved() {
      await routeService.init();
    },
    resolveId(id: string) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return '\0' + id;
      }
    },
    load(id: string) {
      if (id === '\0' + CONVENTIONAL_ROUTE_ID) {
        return routeService.generateRoutesCode(options.isSSR || false);
      }
    }
  };
}
