import { Layout } from '../theme-default';
import { PageData } from '../shared/types/index';
import { matchRoutes } from 'react-router-dom';
import { routes } from 'island:routes';
import siteData from 'island:site-data';

export function App() {
  return <Layout />;
}

export async function initPageData(routePath: string): Promise<PageData> {
  const matched = matchRoutes(routes, routePath);

  if (matched) {
    const moduleInfo = await matched[0].route.preload();
    console.log(moduleInfo);
    return {
      pageType: 'doc',
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath
    };
  }

  return {
    pageType: '404',
    siteData,
    pagePath: routePath,
    frontmatter: {}
  };
}
