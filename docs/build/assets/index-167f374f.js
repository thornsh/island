import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-c5ebc927.js";
import Counter from "./Counter-0378f1d7.js";
const frontmatter = {
  "pageType": "home",
  "hero": {
    "name": "Island",
    "text": "基于 Vite & MDX 语法的静态站点生成器",
    "tagline": "简单、强大、高性能的现代化 SSG 方案",
    "image": {
      "src": "/island.png",
      "alt": "Island"
    },
    "actions": [{
      "theme": "brand",
      "text": "快速开始",
      "link": "/zh/guide/getting-started"
    }, {
      "theme": "alt",
      "text": "GitHub 地址",
      "link": "https://github.com/sanyuan0704/island"
    }]
  },
  "features": [{
    "title": "Vite: 极速的开发响应速度",
    "details": "基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。",
    "icon": "🚀"
  }, {
    "title": "MDX: Markdown & React 组件来写内容",
    "details": "MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。",
    "icon": "📦"
  }, {
    "title": "孤岛架构: 更高的生产性能",
    "details": "采用 Islands 架构，意味着更少的 JavaScript 代码、局部 hydration， 从而带来更好的首屏性能。",
    "icon": "✨"
  }, {
    "title": "功能丰富: 一站式解决方案",
    "details": "对全文搜索、国际化等常见功能可以做到开箱即用。",
    "icon": "🛠️"
  }, {
    "title": "TypeScript: 优秀的类型支持",
    "details": "使用 TypeScript 编写，提供了优秀的类型支持，让你的开发更加顺畅。",
    "icon": "🔑"
  }, {
    "title": "扩展性强: 提供多种自定义能力",
    "details": "通过其扩展机制，你可以轻松的扩展 Island 的主题 UI 和构建能力。",
    "icon": "🎨"
  }]
};
const toc = [{
  "id": "autolink",
  "text": "Autolink",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "gfm",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#gfm",
        children: "#"
      }), "GFM"]
    }), "\n", jsxs(_components.h2, {
      id: "autolink",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#autolink",
        children: "#"
      }), "Autolink"]
    }), "\n", jsxs(_components.p, {
      children: ["literals ", jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsxs(_components.div, {
      className: "language-js",
      children: [jsx(_components.span, {
        className: "lang",
        children: "js"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "console"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "log"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "1234"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", jsx(Counter, {})]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  toc
};
