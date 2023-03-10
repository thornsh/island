declare module 'island:site-data' {
  import type { UserConfig } from 'shared/types';

  const siteData: UserConfig;
  export default siteData;
}

declare module 'island:routes' {
  import { Route } from 'node/plugin-routes/index';
  const routes: Route[];
  export { routes };
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@runtime' {
  export * from 'runtime';
}
