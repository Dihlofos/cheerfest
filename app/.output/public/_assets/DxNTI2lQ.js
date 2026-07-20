import { B as openBlock, C as createElementBlock, D as createBaseVNode, K as normalizeProps, L as guardReactiveProps, P as mergeProps, m as computed } from "./CL6YHsGD.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["srcset"];
const _sfc_main = {
  __name: "Image",
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    loading: { type: String, default: "lazy" },
    decoding: { type: String, default: "async" },
    fetchpriority: { type: String, default: null },
    class: { type: [String, Array, Object], default: null },
    imgAttrs: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const RASTER_EXTS = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg"]);
    function cleanPath(src) {
      return src.split("?")[0].split("#")[0];
    }
    function getExtension(src) {
      const path = cleanPath(src);
      const match = path.match(/\.(\w+)$/);
      return match ? match[1].toLowerCase() : null;
    }
    function isExternalUrl(src) {
      return /^https?:\/\//.test(src) || /^\/\//.test(src) || /^data:/.test(src);
    }
    function getWebpSrc(src) {
      const [path, rest] = src.split("?");
      const [pathOnly] = path.split("#");
      const webpPath = pathOnly.replace(/\.\w+$/, ".webp");
      return rest ? `${webpPath}?${rest}` : webpPath;
    }
    const ext = computed(() => {
      if (isExternalUrl(props.src)) return null;
      return getExtension(props.src);
    });
    const isRaster = computed(() => ext.value && RASTER_EXTS.has(`.${ext.value}`));
    const webpSrc = computed(() => isRaster.value ? getWebpSrc(props.src) : null);
    const imgBindings = computed(() => {
      const bindings = {
        src: props.src,
        alt: props.alt,
        loading: props.loading,
        decoding: props.decoding
      };
      if (props.width != null) bindings.width = props.width;
      if (props.height != null) bindings.height = props.height;
      if (props.fetchpriority) bindings.fetchpriority = props.fetchpriority;
      if (props.class) bindings.class = props.class;
      return { ...bindings, ...props.imgAttrs };
    });
    return (_ctx, _cache) => {
      return isRaster.value && webpSrc.value ? (openBlock(), createElementBlock("picture", _hoisted_1, [
        createBaseVNode("source", {
          srcset: webpSrc.value,
          type: "image/webp"
        }, null, 8, _hoisted_2),
        createBaseVNode("img", normalizeProps(guardReactiveProps(imgBindings.value)), null, 16)
      ])) : (openBlock(), createElementBlock("img", normalizeProps(mergeProps({ key: 1 }, imgBindings.value)), null, 16));
    };
  }
};
export {
  _sfc_main as _
};
