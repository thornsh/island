import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Content } from '../../runtime/Content';
import 'uno.css';
import { usePageData } from '../../runtime';
import '../styles/base.css';
import '../styles/vars.css';
import { Nav } from '../components/Nav/index';
import { HomeLayout } from './HomeLayout/index';
import { DocLayout } from './DocLayout';
import '../styles/doc.css';

export function Layout() {
  const pageData = usePageData();
  console.log(pageData, '---------');

  const { pageType } = pageData;

  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />;
    } else if (pageType === 'doc') {
      return <DocLayout />;
    } else {
      return <div>404 页面</div>;
    }
  };

  return (
    <div>
      <Nav />
      <section style={{ paddingTop: 'var(--island-nav-height)' }}>
        {getContent()}
      </section>
    </div>
  );
}
