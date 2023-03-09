import { r as reactExports, a as jsxs, j as jsx } from "./client-entry-42e6b572.js";
function Counter() {
  const [count, setCount] = reactExports.useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: count }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCount((count2) => count2 + 1), children: "点击加1" })
  ] });
}
export {
  Counter as default
};
