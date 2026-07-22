import { _ as _sfc_main$1, a as _sfc_main$2, d as dummyData, c as contestData } from "./Co8AT8gl.js";
import { A as useHead, C as createElementBlock, F as createVNode, I as normalizeProps, J as guardReactiveProps, l as unref, B as openBlock } from "./DB-GrZ3G.js";
import "./G61y4HPH.js";
const _sfc_main = {
  __name: "dummy",
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _cache) => {
      const _component_DummyHeroSection = _sfc_main$1;
      const _component_ContestSection = _sfc_main$2;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_component_DummyHeroSection, normalizeProps(guardReactiveProps(unref(dummyData))), null, 16),
        createVNode(_component_ContestSection, normalizeProps(guardReactiveProps(unref(contestData))), null, 16)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
