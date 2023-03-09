import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-42e6b572.js";
import Counter from "./Counter-cefaf07a.js";
const frontmatter = {
  "title": "island"
};
const toc = [{
  "id": "autolink-1",
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
