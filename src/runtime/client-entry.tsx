import { createRoot } from 'react-dom/client';
import siteData from 'island:site-data';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

function renderInBrowser() {
  const containerEl = document.getElementById('root');
  if (!containerEl) {
    throw new Error('#root element not found');
  }

  console.log(siteData);

  createRoot(containerEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

renderInBrowser();
