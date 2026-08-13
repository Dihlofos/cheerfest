import { _ as _sfc_main$g, a as _sfc_main$h } from "./pGzzZDVa.js";
import { B as openBlock, C as createElementBlock, F as createVNode, G as withCtx, D as createBaseVNode, E as toDisplayString, I as Fragment, J as renderList, M as createCommentVNode, _ as __vitePreload, N as resolveDirective, O as normalizeClass, P as normalizeStyle, l as unref, Q as withDirectives, H as createTextVNode, i as ref, m as computed, R as createBlock, S as renderSlot, T as resolveDynamicComponent, d as defineComponent, o as onMounted, U as onBeforeUpdate, V as onUpdated, c as onBeforeUnmount, W as provide, h, X as watch, Y as nextTick$1, s as shallowRef, A as useHead, K as normalizeProps, L as guardReactiveProps } from "./CvP-Pp3N.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const _hoisted_1$d = {
  id: "about",
  class: "about"
};
const _hoisted_2$d = { class: "about__title title" };
const _hoisted_3$c = { class: "about__text" };
const _hoisted_4$b = { class: "about__items" };
const _hoisted_5$9 = { class: "about__item-left" };
const _hoisted_6$8 = { class: "about__item-title" };
const _hoisted_7$8 = { class: "about__item-text" };
const _hoisted_8$5 = { class: "about__item-image-wrap" };
const _sfc_main$f = {
  __name: "AboutSection",
  props: {
    title: { type: String, required: true },
    paragraphs: { type: Array, default: () => [] },
    decorLeft: { type: String, default: "" },
    decorRight: { type: String, default: "" },
    bullets: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$d, [
        createVNode(_component_Image, {
          class: "about__decor about__decor--left",
          src: __props.decorLeft,
          alt: "",
          width: "412",
          height: "891"
        }, null, 8, ["src"]),
        createVNode(_component_Image, {
          class: "about__decor about__decor--right",
          src: __props.decorRight,
          alt: "",
          width: "325",
          height: "761"
        }, null, 8, ["src"]),
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("h2", _hoisted_2$d, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$c, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.paragraphs, (paragraph, index) => {
                return openBlock(), createElementBlock("p", { key: index }, toDisplayString(paragraph), 1);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_4$b, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.bullets, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "about__item",
                  key: index
                }, [
                  createBaseVNode("div", _hoisted_5$9, [
                    createBaseVNode("div", _hoisted_6$8, toDisplayString(item.title), 1),
                    createBaseVNode("div", _hoisted_7$8, toDisplayString(item.text), 1)
                  ]),
                  createBaseVNode("div", _hoisted_8$5, [
                    createVNode(_component_Image, {
                      class: "about__item-image",
                      src: item.image,
                      alt: "",
                      width: "239",
                      height: "187"
                    }, null, 8, ["src"])
                  ])
                ]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$c = {
  id: "map",
  class: "map"
};
const _hoisted_2$c = { class: "map__header" };
const _hoisted_3$b = { class: "map__title" };
const _hoisted_4$a = { class: "map__subtitle" };
const _hoisted_5$8 = { class: "map__content" };
const _hoisted_6$7 = { class: "map__legend-col" };
const _hoisted_7$7 = { class: "map__legend" };
const _hoisted_8$4 = { class: "map__legend-num" };
const _hoisted_9$2 = { class: "map__legend-text" };
const _hoisted_10$2 = { class: "map__legend-name" };
const _hoisted_11$1 = {
  key: 0,
  class: "map__legend-desc"
};
const _hoisted_12 = ["href"];
const _hoisted_13 = { class: "map__image-col" };
const _hoisted_14 = ["src"];
const _sfc_main$e = {
  __name: "MapSection",
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    buttons: { type: Array, default: () => [] },
    mapImage: { type: String, default: "" },
    legend: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$c, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$c, [
              createBaseVNode("h2", _hoisted_3$b, toDisplayString(__props.title), 1),
              createBaseVNode("p", _hoisted_4$a, toDisplayString(__props.subtitle), 1)
            ]),
            createBaseVNode("div", _hoisted_5$8, [
              createBaseVNode("div", _hoisted_6$7, [
                createBaseVNode("div", _hoisted_7$7, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.legend, (item) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.number,
                      class: "map__legend-item"
                    }, [
                      createBaseVNode("div", _hoisted_8$4, [
                        createBaseVNode("span", null, toDisplayString(item.number), 1)
                      ]),
                      createBaseVNode("div", _hoisted_9$2, [
                        createBaseVNode("div", _hoisted_10$2, toDisplayString(item.name), 1),
                        item.description ? (openBlock(), createElementBlock("div", _hoisted_11$1, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (btn) => {
                  return openBlock(), createElementBlock("a", {
                    key: btn.text,
                    href: btn.link,
                    class: "map__button",
                    target: "_blank"
                  }, toDisplayString(btn.text), 9, _hoisted_12);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("img", {
                  class: "map__map",
                  src: __props.mapImage,
                  alt: "",
                  width: "810",
                  height: "593"
                }, null, 8, _hoisted_14)
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
let purify = null;
{
  __vitePreload(() => import("./C3FtZLC6.js"), true ? [] : void 0, import.meta.url).then((m) => {
    purify = m.default;
  }).catch(() => {
  });
}
function sanitizeText(text2) {
  if (!text2 || typeof text2 !== "string") return "";
  if (purify) {
    return purify.sanitize(text2, { ALLOWED_TAGS: ["br"], ALLOWED_ATTR: [] });
  }
  return text2.replace(/<[^>]+>/g, "");
}
const _hoisted_1$b = {
  id: "schedule",
  class: "schedule"
};
const _hoisted_2$b = { class: "schedule__title title" };
const _hoisted_3$a = { class: "schedule__tabs" };
const _hoisted_4$9 = ["onClick"];
const _hoisted_5$7 = ["innerHTML"];
const _hoisted_6$6 = { class: "schedule__event-bottom" };
const _hoisted_7$6 = { class: "schedule__time" };
const _hoisted_8$3 = ["href"];
const _sfc_main$d = {
  __name: "ScheduleSection",
  props: {
    title: { type: String, required: true },
    tabs: { type: Array, default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(0);
    const activeTab = computed(() => props.tabs[activeIndex.value] || {});
    return (_ctx, _cache) => {
      const _component_Container = _sfc_main$h;
      const _directive_anchor = resolveDirective("anchor");
      return openBlock(), createElementBlock("section", _hoisted_1$b, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("h2", _hoisted_2$b, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$a, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab, index) => {
                return openBlock(), createElementBlock("button", {
                  key: tab.name,
                  class: normalizeClass(["schedule__tab", { "schedule__tab--active": index === activeIndex.value }]),
                  onClick: ($event) => activeIndex.value = index
                }, toDisplayString(tab.name), 11, _hoisted_4$9);
              }), 128))
            ]),
            createBaseVNode("div", {
              class: "schedule__grid",
              style: normalizeStyle({ "--cols": activeTab.value.columns })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(activeTab.value.events, (event) => {
                return openBlock(), createElementBlock("div", {
                  key: event.title,
                  class: normalizeClass(["schedule__card", { "schedule__card--reg": event.registration }])
                }, [
                  createBaseVNode("div", {
                    class: "schedule__event-title",
                    innerHTML: unref(sanitizeText)(event.title)
                  }, null, 8, _hoisted_5$7),
                  createBaseVNode("div", _hoisted_6$6, [
                    createBaseVNode("div", _hoisted_7$6, toDisplayString(event.time), 1),
                    event.registration ? withDirectives((openBlock(), createElementBlock("a", {
                      key: 0,
                      href: event.link || "#",
                      class: "schedule__reg",
                      target: "_blank"
                    }, [..._cache[0] || (_cache[0] = [
                      createTextVNode("Регистрация", -1)
                    ])], 8, _hoisted_8$3)), [
                      [_directive_anchor, event.anchor ?? void 0]
                    ]) : createCommentVNode("", true)
                  ])
                ], 2);
              }), 128))
            ], 4)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _sfc_main$c = {
  __name: "Title",
  props: {
    tag: { type: String, default: "h2" },
    white: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.tag), {
        class: normalizeClass(["title", { "title--white": __props.white }])
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
};
const _hoisted_1$a = {
  id: "contest",
  class: "clubs"
};
const _hoisted_2$a = { class: "clubs__info" };
const _hoisted_3$9 = { class: "clubs__content" };
const _hoisted_4$8 = { class: "clubs__bg" };
const _hoisted_5$6 = { class: "clubs__text-content" };
const _hoisted_6$5 = { class: "clubs__text text" };
const _hoisted_7$5 = ["href", "target"];
const _sfc_main$b = {
  __name: "ClubsSection",
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
    girl: { type: String, required: true },
    titleImg: { type: String, required: true },
    bg: { type: String, required: true },
    decorTop: { type: String, required: true },
    button: {
      type: Object,
      default: () => ({
        link: "#",
        text: "Подать заявку"
      })
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$a, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$c, { class: "clubs__title" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.title), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$a, [
              createVNode(_component_Image, {
                class: "clubs__decor",
                src: __props.decorTop,
                width: "1494",
                height: "900"
              }, null, 8, ["src"]),
              createVNode(_component_Image, {
                class: "clubs__girl",
                src: __props.girl,
                alt: "Girl",
                width: "681",
                height: "853"
              }, null, 8, ["src"]),
              createBaseVNode("div", _hoisted_3$9, [
                createVNode(_component_Image, {
                  class: "clubs__title-logo",
                  src: __props.titleImg,
                  alt: "Title"
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_4$8, [
                  createVNode(_component_Image, {
                    src: __props.bg,
                    alt: "Background",
                    width: "1400",
                    height: "352"
                  }, null, 8, ["src"])
                ]),
                createBaseVNode("div", _hoisted_5$6, [
                  createBaseVNode("h2", _hoisted_6$5, toDisplayString(__props.text), 1),
                  createBaseVNode("a", {
                    href: __props.button.link,
                    class: "clubs__button",
                    target: __props.button.target
                  }, toDisplayString(__props.button.text), 9, _hoisted_7$5)
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$9 = { class: "legend-item__icon" };
const _hoisted_2$9 = { class: "legend-item__text" };
const _hoisted_3$8 = { class: "legend-item__title" };
const _hoisted_4$7 = {
  key: 0,
  class: "legend-item__subtitle"
};
const _sfc_main$a = {
  __name: "LegendItem",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    isExtended: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["legend-item", { "legend-item--extended": __props.isExtended }])
      }, [
        createBaseVNode("div", _hoisted_1$9, [
          createVNode(_component_Image, {
            src: __props.icon,
            alt: "",
            width: __props.isExtended ? 120 : 44,
            height: __props.isExtended ? 120 : 44
          }, null, 8, ["src", "width", "height"])
        ]),
        createBaseVNode("div", _hoisted_2$9, [
          createBaseVNode("span", _hoisted_3$8, toDisplayString(__props.title), 1),
          __props.isExtended && __props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_4$7, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
};
const _hoisted_1$8 = {
  id: "nominations",
  class: "nominations"
};
const _hoisted_2$8 = { class: "nominations__header" };
const _hoisted_3$7 = { class: "nominations__title title" };
const _hoisted_4$6 = { class: "nominations__list" };
const _hoisted_5$5 = { class: "nominations__prize" };
const _hoisted_6$4 = { class: "nominations__prize-label" };
const _hoisted_7$4 = { class: "nominations__prize-amount" };
const _hoisted_8$2 = ["innerHTML"];
const _sfc_main$9 = {
  __name: "NominationsSection",
  props: {
    title: { type: String, required: true },
    nominations: { type: Array, default: () => [] },
    prizeLabel: { type: String, default: "" },
    prizeAmount: { type: String, default: "" },
    prizeNote: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_LegendItem = _sfc_main$a;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$8, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$8, [
              createBaseVNode("h2", _hoisted_3$7, toDisplayString(__props.title), 1)
            ]),
            createBaseVNode("div", _hoisted_4$6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.nominations, (item, index) => {
                return openBlock(), createBlock(_component_LegendItem, {
                  key: index,
                  icon: item.icon,
                  title: item.name
                }, null, 8, ["icon", "title"]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_5$5, [
              createBaseVNode("span", _hoisted_6$4, toDisplayString(__props.prizeLabel), 1),
              createBaseVNode("span", _hoisted_7$4, toDisplayString(__props.prizeAmount), 1),
              createBaseVNode("span", {
                class: "nominations__prize-note",
                innerHTML: unref(sanitizeText)(__props.prizeNote)
              }, null, 8, _hoisted_8$2)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
function classesToTokens(classes2 = "") {
  return classes2.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
  Object.keys(obj).forEach((key) => {
    try {
      obj[key] = null;
    } catch {
    }
    try {
      delete obj[key];
    } catch {
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  return window.getComputedStyle(el, null);
}
function getTranslate(el, axis = "x") {
  const style = getComputedStyle$1(el);
  const transform = style.transform || style.webkitTransform;
  if (!transform || transform === "none")
    return 0;
  const matrix = new DOMMatrixReadOnly(transform);
  return axis === "x" ? matrix.m41 : matrix.m42;
}
function isObject$1(o) {
  return typeof o === "object" && o !== null && o.constructor === Object && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof HTMLElement !== "undefined" && node instanceof HTMLElement)
    return true;
  return !!node && typeof node === "object" && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1(target, ...sources) {
  const to = Object(target);
  for (let i = 0; i < sources.length; i += 1) {
    const nextSource = sources[i];
    if (nextSource === void 0 || nextSource === null || isNode(nextSource))
      continue;
    const sourceObj = nextSource;
    const keysArray = Object.keys(Object(sourceObj)).filter((key) => key !== "__proto__" && key !== "constructor" && key !== "prototype");
    for (const nextKey of keysArray) {
      const desc = Object.getOwnPropertyDescriptor(sourceObj, nextKey);
      if (!desc || !desc.enumerable)
        continue;
      const sourceVal = sourceObj[nextKey];
      if (isObject$1(to[nextKey]) && isObject$1(sourceVal)) {
        if (sourceVal.__swiper__) {
          to[nextKey] = sourceVal;
        } else {
          extend$1(to[nextKey], sourceVal);
        }
      } else if (!isObject$1(to[nextKey]) && isObject$1(sourceVal)) {
        to[nextKey] = {};
        if (sourceVal.__swiper__) {
          to[nextKey] = sourceVal;
        } else {
          extend$1(to[nextKey], sourceVal);
        }
      } else {
        to[nextKey] = sourceVal;
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function elementChildren(element, selector = "") {
  const children = [...element.children];
  if (element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  return selector ? children.filter((el) => el.matches(selector)) : children;
}
function elementIsChildOfSlot(el, slot) {
  const queue = [slot];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (el === cur)
      return true;
    queue.push(...cur.children, ...cur.shadowRoot ? cur.shadowRoot.children : [], ...cur.assignedElements ? cur.assignedElements() : []);
  }
  return false;
}
function elementIsChildOf(el, parent) {
  let isChild = parent.contains(el);
  if (!isChild && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild)
      isChild = elementIsChildOfSlot(el, parent);
  }
  return isChild;
}
function showWarning(text2) {
  try {
    console.warn(text2);
  } catch {
  }
}
function createElement(tag, classes2 = []) {
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
  return el;
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  let prev = el.previousElementSibling;
  while (prev) {
    if (!selector || prev.matches(selector))
      prevEls.push(prev);
    prev = prev.previousElementSibling;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  let next = el.nextElementSibling;
  while (next) {
    if (!selector || next.matches(selector))
      nextEls.push(next);
    next = next.nextElementSibling;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  if (!el || !el.parentNode)
    return void 0;
  return [...el.parentNode.children].indexOf(el);
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    parents.push(parent);
    parent = parent.parentElement;
  }
  return parents;
}
function elementOuterSize(el, size, includeMargins) {
  {
    const style = window.getComputedStyle(el, null);
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(style.getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(style.getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function setInnerHTML(el, html = "") {
  const tt = globalThis.trustedTypes;
  if (typeof tt !== "undefined") {
    el.innerHTML = tt.createPolicy("html", { createHTML: (s) => s }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}
const paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_snapToSlideEdge",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function isObject(o) {
  if (typeof o !== "object" || o === null)
    return false;
  const obj = o;
  return !!obj.constructor && Object.prototype.toString.call(obj).slice(8, -1) === "Object" && !obj.__swiper__;
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  const t = target;
  const s = src;
  Object.keys(s).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    const srcVal = s[key];
    const targetVal = t[key];
    if (typeof targetVal === "undefined") {
      t[key] = srcVal;
    } else if (isObject(srcVal) && isObject(targetVal) && Object.keys(srcVal).length > 0) {
      if (srcVal.__swiper__) {
        t[key] = srcVal;
      } else {
        extend(targetVal, srcVal);
      }
    } else {
      t[key] = srcVal;
    }
  });
  return target;
}
function needsNavigation(params = {}) {
  const nav = params.navigation;
  if (!nav)
    return false;
  if (nav === true)
    return true;
  return typeof nav.nextEl === "undefined" && typeof nav.prevEl === "undefined";
}
function needsPagination(params = {}) {
  const pag = params.pagination;
  if (!pag)
    return false;
  if (pag === true)
    return true;
  return typeof pag.el === "undefined";
}
function needsScrollbar(params = {}) {
  const sb = params.scrollbar;
  if (!sb)
    return false;
  if (sb === true)
    return true;
  return typeof sb.el === "undefined";
}
function uniqueClasses(classNames = "") {
  const classes2 = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes2.forEach((c) => {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
function wrapperClass(className = "") {
  if (!className)
    return "swiper-wrapper";
  if (!className.includes("swiper-wrapper"))
    return `swiper-wrapper ${className}`;
  return className;
}
function updateSwiper(args) {
  let { nextEl, prevEl, scrollbarEl, paginationEl } = args;
  const { swiper, slides, passedParams, changedParams } = args;
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
  const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs } = swiper;
  const passed = passedParams;
  const current = currentParams;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  const passedThumbs = passed.thumbs;
  const currentThumbs = current.thumbs;
  if (changedParams.includes("thumbs") && isObject(passedThumbs) && passedThumbs.swiper && !passedThumbs.swiper.destroyed && isObject(currentThumbs) && (!currentThumbs.swiper || currentThumbs.swiper.destroyed)) {
    needThumbsInit = true;
  }
  const passedController = passed.controller;
  const currentController = current.controller;
  if (changedParams.includes("controller") && isObject(passedController) && passedController.control && isObject(currentController) && !currentController.control) {
    needControllerInit = true;
  }
  const passedPagination = passed.pagination;
  if (changedParams.includes("pagination") && isObject(passedPagination) && (passedPagination.el || paginationEl) && (current.pagination || current.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  const passedScrollbar = passed.scrollbar;
  if (changedParams.includes("scrollbar") && isObject(passedScrollbar) && (passedScrollbar.el || scrollbarEl) && (current.scrollbar || current.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  const passedNavigation = passed.navigation;
  if (changedParams.includes("navigation") && isObject(passedNavigation) && (passedNavigation.prevEl || prevEl) && (passedNavigation.nextEl || nextEl) && (current.navigation || current.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    const moduleInstance = swiper[mod];
    if (!moduleInstance)
      return;
    moduleInstance.destroy();
    const currentModule = current[mod];
    const currentObj = isObject(currentModule) ? currentModule : void 0;
    if (mod === "navigation") {
      if (swiper.isElement) {
        moduleInstance.prevEl?.remove();
        moduleInstance.nextEl?.remove();
      }
      if (currentObj) {
        currentObj.prevEl = void 0;
        currentObj.nextEl = void 0;
      }
      moduleInstance.prevEl = void 0;
      moduleInstance.nextEl = void 0;
    } else {
      if (swiper.isElement) {
        moduleInstance.el?.remove();
      }
      if (currentObj)
        currentObj.el = void 0;
      moduleInstance.el = void 0;
    }
  };
  if (changedParams.includes("loop") && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach((key) => {
    const currentValue = current[key];
    const passedValue = passed[key];
    if (isObject(currentValue) && isObject(passedValue)) {
      Object.assign(currentValue, passedValue);
      if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedValue && !passedValue.enabled) {
        destroyModule(key);
      }
    } else {
      if ((passedValue === true || passedValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (passedValue === false) {
          destroyModule(key);
        }
      } else {
        current[key] = passedValue;
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && isObject(currentController) && currentController.control) {
    swiper.controller.control = currentController.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual?.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  } else if (changedParams.includes("virtual") && virtual && currentParams.virtual?.enabled) {
    if (slides)
      virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes("children") && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit && thumbs) {
    const initialized = thumbs.init();
    if (initialized)
      thumbs.update(true);
  }
  if (needControllerInit && swiper.controller && isObject(currentController)) {
    swiper.controller.control = currentController.control;
  }
  if (needPaginationInit && pagination) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
      const el = document.createElement("div");
      el.classList.add("swiper-pagination");
      el.part.add("pagination");
      swiper.el.appendChild(el);
      paginationEl = el;
    }
    const paginationParams = current.pagination;
    if (paginationEl && isObject(paginationParams))
      paginationParams.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit && scrollbar) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
      const el = document.createElement("div");
      el.classList.add("swiper-scrollbar");
      el.part.add("scrollbar");
      swiper.el.appendChild(el);
      scrollbarEl = el;
    }
    const scrollbarParams = current.scrollbar;
    if (scrollbarEl && isObject(scrollbarParams))
      scrollbarParams.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit && navigation) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === "string") {
        const el = document.createElement("div");
        el.classList.add("swiper-button-next");
        setInnerHTML(el, navigation.arrowSvg);
        el.part.add("button-next");
        swiper.el.appendChild(el);
        nextEl = el;
      }
      if (!prevEl || typeof prevEl === "string") {
        const el = document.createElement("div");
        el.classList.add("swiper-button-prev");
        setInnerHTML(el, navigation.arrowSvg);
        el.part.add("button-prev");
        swiper.el.appendChild(el);
        prevEl = el;
      }
    }
    const navigationParams = current.navigation;
    if (nextEl && isObject(navigationParams))
      navigationParams.nextEl = nextEl;
    if (prevEl && isObject(navigationParams))
      navigationParams.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passed.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passed.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passed.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}
let supportCached;
function calcSupport() {
  if (typeof window === "undefined")
    return { touch: false };
  return {
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0
  };
}
function getSupport() {
  if (!supportCached)
    supportCached = calcSupport();
  return supportCached;
}
let deviceCached;
function calcDevice({ userAgent } = {}) {
  if (typeof window === "undefined")
    return { ios: false, android: false };
  const support = getSupport();
  const platform = navigator.platform;
  const ua = userAgent || navigator.userAgent;
  const device = { ios: false, android: false };
  const isAndroid = /(Android);?[\s/]+([\d.]+)?/.test(ua);
  const isIPhoneOrIPod = /(iPhone\sOS|iOS|iPod)/.test(ua);
  const isIPadDirect = /iPad/.test(ua);
  const isIPadMasquerade = platform === "MacIntel" && support.touch && navigator.maxTouchPoints > 1;
  const isIPad = isIPadDirect || isIPadMasquerade;
  const isWindows = platform === "Win32";
  if (isAndroid && !isWindows) {
    device.os = "android";
    device.android = true;
  }
  if (isIPad || isIPhoneOrIPod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached)
    deviceCached = calcDevice(overrides);
  return deviceCached;
}
let browserCached;
function calcBrowser() {
  if (typeof window === "undefined") {
    return { isSafari: false, isWebView: false, need3dFix: false };
  }
  const device = getDevice();
  const ua = navigator.userAgent;
  const uaLower = ua.toLowerCase();
  const isSafari = uaLower.includes("safari") && !uaLower.includes("chrome") && !uaLower.includes("android");
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ua);
  const need3dFix = isSafari || isWebView && device.ios;
  return { isSafari, isWebView, need3dFix };
}
function getBrowser() {
  if (!browserCached)
    browserCached = calcBrowser();
  return browserCached;
}
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  const slideSelector = () => swiper.isElement ? "swiper-slide" : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            const innerLazy = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (innerLazy && !innerLazy.lazyPreloaderManaged)
              innerLazy.remove();
          }
        });
      }
    }
    if (lazyEl && !lazyEl.lazyPreloaderManaged)
      lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index])
    return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl)
    imageEl.removeAttribute("loading");
};
const preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0)
    return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && (swiper.params.grid.rows ?? 1) > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({ length: amount }).map((_, i) => activeColumn + slidesPerView + i));
    swiper.slides.forEach((slideEl, i) => {
      if (slideEl.column !== void 0 && preloadColumns.includes(slideEl.column))
        unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView)
        unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getBreakpoint(breakpoints2, base = "window", containerEl) {
  if (!breakpoints2 || base === "container" && !containerEl)
    return void 0;
  let breakpoint = false;
  const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return { value, point };
    }
    return { value: point, point };
  });
  points.sort((a, b) => parseInt(String(a.value), 10) - parseInt(String(b.value), 10));
  for (let i = 0; i < points.length; i += 1) {
    const { point, value } = points[i];
    if (base === "window") {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
const isGridEnabled = (swiper, params) => {
  return !!(swiper.grid && params.grid && params.grid.rows > 1);
};
function setBreakpoint() {
  const swiper = this;
  const { realIndex, initialized, params, el } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
  const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  const breakpointsRecord = breakpoints2;
  const breakpointOnlyParams = breakpoint in breakpointsRecord ? breakpointsRecord[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }
  const moduleOpt = (opts, prop) => opts[prop];
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    const bpOpts = moduleOpt(breakpointParams, prop);
    if (typeof bpOpts === "undefined")
      return;
    const paramsOpts = moduleOpt(params, prop);
    const wasModuleEnabled = typeof paramsOpts === "object" && paramsOpts !== null && paramsOpts.enabled;
    const isModuleEnabled = typeof bpOpts === "object" && bpOpts !== null && bpOpts.enabled;
    const moduleApi = swiper[prop];
    if (wasModuleEnabled && !isModuleEnabled)
      moduleApi?.disable?.();
    if (!wasModuleEnabled && isModuleEnabled)
      moduleApi?.enable?.();
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
var breakpoints = { setBreakpoint, getBreakpoint };
function checkOverflow() {
  const swiper = this;
  const { isLocked: wasLocked, params } = swiper;
  const { slidesOffsetBefore } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = { checkOverflow };
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const { classNames, params, rtl, el, device } = swiper;
  const suffixes = prepareClasses([
    "initialized",
    params.direction,
    { "free-mode": swiper.params.freeMode && params.freeMode.enabled },
    { "autoheight": params.autoHeight },
    { "rtl": rtl },
    { "grid": params.grid && params.grid.rows > 1 },
    { "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column" },
    { "android": device.android },
    { "ios": device.ios },
    { "css-mode": params.cssMode },
    { "centered": params.cssMode && params.centeredSlides },
    { "watch-progress": params.watchSlidesProgress }
  ], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const { el, classNames } = swiper;
  if (!el || typeof el === "string")
    return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = { addClasses, removeClasses };
const defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  snapToSlideEdge: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event) => {
      if (!self.eventsListeners[event])
        self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const onceHandler = function onceHandlerFn(...args) {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self, args);
    };
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (typeof handler !== "function")
      return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsAnyListeners)
      return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsListeners)
      return self;
    events2.split(" ").forEach((event) => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed)
      return self;
    if (!self.eventsListeners)
      return self;
    let events2;
    let data;
    let context;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      const opts = args[0];
      events2 = opts.events;
      data = opts.data ?? [];
      context = opts.context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event) => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function onClick(e) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  if (!swiper.enabled)
    return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks)
      e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.destroyed)
    return;
  if (swiper.documentTouchHandlerProceeded)
    return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
function onLoad(e) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
function onResize() {
  const swiper = this;
  const { params, el } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual?.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    const slidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    swiper.slideTo(slidesLength - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    const autoplay = swiper.autoplay;
    clearTimeout(autoplay.resizeTimeout);
    autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onScroll() {
  const swiper = this;
  if (swiper.destroyed)
    return;
  const { wrapperEl, rtlTranslate, enabled } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0)
    swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onTouchEnd(event) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  const data = swiper.touchEventsData;
  let e = event.originalEvent ?? event;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null)
      return;
    const pe = e;
    if (pe.pointerId !== data.pointerId)
      return;
  } else {
    const te = e;
    const found = [...te.changedTouches].find((t) => t.identifier === data.touchId);
    if (!found || found.identifier !== data.touchId)
      return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && e.pointerType === "mouse")
    return;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path ?? (e.composedPath && e.composedPath());
    swiper.updateClickedSlide(pathTree && pathTree[0], pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed)
      swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -(data.currentTranslate ?? 0);
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({ currentPos });
    return;
  }
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual?.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio)
        swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onTouchMove(event) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  const data = swiper.touchEventsData;
  const { params, touches, rtlTranslate: rtl, enabled } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  const wrapped = event;
  const e = wrapped.originalEvent ?? wrapped;
  if (e.type === "pointermove") {
    if (data.touchId !== null)
      return;
    const pe = e;
    if (pe.pointerId !== data.pointerId)
      return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    const te = e;
    const found = [...te.changedTouches].find((t) => t.identifier === data.touchId);
    if (!found || found.identifier !== data.touchId)
      return;
    targetTouch = found;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({ direction: swiper.swipeDirection });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  (/* @__PURE__ */ new Date()).getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  const startTranslate = data.startTranslate ?? 0;
  data.currentTranslate = diff + startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && true && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({ direction: "prev", setTranslate: true, activeSlideIndex: 0 });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && true && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(String(params.slidesPerView))))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && (data.currentTranslate ?? 0) < startTranslate) {
    data.currentTranslate = startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && (data.currentTranslate ?? 0) > startTranslate) {
    data.currentTranslate = startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode)
    return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate ?? 0);
}
function closestElement(selector, base) {
  function __closestFrom(el) {
    if (!el || el === document || el === window)
      return null;
    let cur = el;
    if (cur.assignedSlot)
      cur = cur.assignedSlot;
    const found = cur.closest(selector);
    if (!found && !cur.getRootNode) {
      return null;
    }
    const root = cur.getRootNode();
    return found || __closestFrom(root.host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const { params } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  const e = event.originalEvent ?? event;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    const pe2 = e;
    if (data.pointerId !== null && data.pointerId !== pe2.pointerId) {
      return;
    }
    data.pointerId = pe2.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const { params, touches, enabled } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && e.pointerType === "mouse")
    return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl))
      return;
  }
  const mouseLike = e;
  if (typeof mouseLike.which === "number" && mouseLike.which === 3)
    return;
  if (typeof mouseLike.button === "number" && mouseLike.button > 0)
    return;
  if (data.isTouched && data.isMoved)
    return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (typeof params.swipeHandler === "string" && !targetEl.closest(params.swipeHandler))
      return;
  }
  const pe = e;
  touches.currentX = pe.pageX;
  touches.currentY = pe.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0)
    data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (pe.pointerType === "mouse" || pe.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
const events = (swiper, method) => {
  const { params, el, wrapperEl, device } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  if (!el || typeof el === "string")
    return;
  document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, { passive: false });
  el[domMethod]("pointerdown", swiper.onTouchStart, { passive: false });
  document[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]("touchend", swiper.onTouchEnd, { passive: true });
  document[domMethod]("pointerup", swiper.onTouchEnd, { passive: true });
  document[domMethod]("pointercancel", swiper.onTouchEnd, { passive: true });
  document[domMethod]("touchcancel", swiper.onTouchEnd, { passive: true });
  document[domMethod]("pointerout", swiper.onTouchEnd, { passive: true });
  document[domMethod]("pointerleave", swiper.onTouchEnd, { passive: true });
  document[domMethod]("contextmenu", swiper.onTouchEnd, { passive: true });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  const subscribe = (events2) => {
    swiper[swiperMethod](events2, onResize, true);
  };
  if (params.updateOnWindowResize) {
    subscribe(device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate");
  } else {
    subscribe("observerUpdate");
  }
  el[domMethod]("load", swiper.onLoad, { capture: true });
};
function attachEvents() {
  const swiper = this;
  const { params } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const { params, slidesEl } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual?.enabled)
    return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", String(index));
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach((el) => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = (amountOfSlides) => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
  swiper.loopFix({
    slideRealIndex,
    direction: bothDirections ? void 0 : "next",
    initial
  });
}
function loopDestroy() {
  const swiper = this;
  const { params, slidesEl } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual?.enabled)
    return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const loopSlideEl = slideEl;
    const index = typeof loopSlideEl.swiperSlideIndex === "undefined" ? Number(slideEl.getAttribute("data-swiper-slide-index")) : loopSlideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
function loopFix(options = {}) {
  const { slideRealIndex, slideTo: slideTo2 = true, direction, setTranslate: setTranslate2, activeSlideIndex: activeSlideIndexParam, initial, byController, byMousewheel } = options;
  let activeSlideIndex = activeSlideIndexParam;
  const swiper = this;
  if (!swiper.params.loop)
    return;
  swiper.emit("beforeLoopFix");
  const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
  const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter, initialSlide } = params;
  const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual?.enabled) {
    if (slideTo2) {
      const virtualSlidesLength = swiper.virtual.slides.length;
      const virtualSlidesBefore = swiper.virtual.slidesBefore ?? 0;
      if (!bothDirections && swiper.snapIndex === 0) {
        swiper.slideTo(virtualSlidesLength, 0, false, true);
      } else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(virtualSlidesLength + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(virtualSlidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(String(params.slidesPerView)));
    if (bothDirections && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column ?? 0 : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (bothDirections && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let j = slides.length - 1; j >= 0; j -= 1) {
          if (slides[j].column === colIndexToPrepend)
            prependSlidesIndexes.push(j);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index)
            appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      const slideEl = slides[index];
      slideEl.swiperLoopMoveDOM = true;
      slidesEl.prepend(slideEl);
      slideEl.swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      const slideEl = slides[index];
      slideEl.swiperLoopMoveDOM = true;
      slidesEl.append(slideEl);
      slideEl.swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  const controlled = swiper.controller?.control;
  if (controlled && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(controlled)) {
      controlled.forEach((c) => {
        if (!c.destroyed && c.params.loop)
          c.loopFix({
            ...loopParams,
            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          });
      });
    } else if (controlled instanceof swiper.constructor && controlled.params.loop) {
      controlled.loopFix({
        ...loopParams,
        slideTo: controlled.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = { enabled: true };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName])
      params[moduleParamName] = { enabled: false };
    extend$1(allModulesParams, obj);
  };
}
const Observer = ({ swiper, extendParams, on }) => {
  const observers = [];
  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    if (!ObserverFunc)
      return;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__)
        return;
      if (mutations.length === 1) {
        swiper.emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        swiper.emit("observerUpdate", mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options.childList),
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer)
      return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, { attributes: false });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
};
const Resize = ({ swiper, on, emit }) => {
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window.requestAnimationFrame(() => {
        const { width, height } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({ contentBoxSize, contentRect, target }) => {
          if (target && target !== swiper.el)
            return;
          const box = Array.isArray(contentBoxSize) ? contentBoxSize[0] : contentBoxSize;
          newWidth = contentRect ? contentRect.width : box.inlineSize;
          newHeight = contentRect ? contentRect.height : box.blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window.removeEventListener("resize", resizeHandler);
    window.removeEventListener("orientationchange", orientationChangeHandler);
  });
};
function slideNext(speed, runCallbacks = true, internal) {
  const swiper = this;
  const { enabled, params, animating } = swiper;
  if (!enabled || swiper.destroyed)
    return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual?.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return false;
    swiper.loopFix({ direction: "next" });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks = true, internal) {
  const swiper = this;
  const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
  if (!enabled || swiper.destroyed)
    return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual?.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return false;
    swiper.loopFix({ direction: "prev" });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0)
      return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0)
      prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual?.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks = true, internal) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0)
    slideIndex = 0;
  const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex)
    direction = "next";
  else if (slideIndex < activeIndex)
    direction = "prev";
  else
    direction = "reset";
  const isVirtual = swiper.virtual && swiper.params.virtual?.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && (swiper.params.initialSlide ?? 0) > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  const browser = getBrowser();
  const isSafari = browser.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed)
          return;
        if (e.target !== this)
          return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed)
    return;
  const { params, slidesEl, clickedSlide, clickedIndex } = swiper;
  if (clickedSlide === void 0 || clickedIndex === void 0)
    return;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt(clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  if (swiper.destroyed)
    return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed)
    return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual?.enabled) {
      newIndex = newIndex + (swiper.virtual.slidesBefore ?? 0);
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        const targetSlideEl = swiper.slides.find((slideEl) => Number(slideEl.getAttribute("data-swiper-slide-index")) === slideIndex);
        targetSlideIndex = targetSlideEl?.column ?? 0;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter } = swiper.params;
      const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
      let slidesPerView;
      if (swiper.params.slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(String(swiper.params.slidesPerView)));
        if (bothDirections && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (bothDirections) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && bothDirections && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        const targetSlideEl = swiper.slides.find((slideEl) => Number(slideEl.getAttribute("data-swiper-slide-index")) === slideIndex);
        newIndex = targetSlideEl?.column ?? 0;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit({ swiper, runCallbacks, direction, step }) {
  const { activeIndex, previousIndex } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === "reset") {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const { params } = swiper;
  swiper.animating = false;
  if (params.cssMode)
    return;
  swiper.setTransition(0);
  transitionEmit({ swiper, runCallbacks, direction, step: "End" });
}
function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const { params } = swiper;
  if (params.cssMode)
    return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({ swiper, runCallbacks, direction, step: "Start" });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
  const swiper = this;
  const { params, rtlTranslate: rtl, translate: translate2, wrapperEl } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl)
    currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function minTranslate() {
  return -this.snapGrid[0];
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const { params, wrapperEl } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2)
    newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2)
    newTranslate = maxTranslate2;
  else
    newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function getActiveIndexByTranslate(swiper) {
  const { slidesGrid, params } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined")
      activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    const virtualSlides = swiper.virtual.slides;
    let realIndex2 = aIndex - (swiper.virtual.slidesBefore ?? 0);
    if (realIndex2 < 0) {
      realIndex2 = virtualSlides.length + realIndex2;
    }
    if (realIndex2 >= virtualSlides.length) {
      realIndex2 -= virtualSlides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual?.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual?.enabled) {
    if (params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else {
      realIndex = activeIndex;
    }
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual?.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual)
          break;
        const slide2 = getSlideByIndex(index);
        if (slide2)
          activeSlides.push(slide2);
      }
    }
  } else {
    const slide2 = getSlideByIndex(swiper.activeIndex);
    if (slide2)
      activeSlides.push(slide2);
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0)
    swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual?.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let { progress, isBeginning, isEnd } = swiper;
  let progressLoop = swiper.progressLoop;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded)
      progress = 0;
    if (isEndRounded)
      progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1)
      progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
    swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || "0", 10) - parseInt(elementStyle(el, "padding-right") || "0", 10);
  height = height - parseInt(elementStyle(el, "padding-top") || "0", 10) - parseInt(elementStyle(el, "padding-bottom") || "0", 10);
  if (Number.isNaN(width))
    width = 0;
  if (Number.isNaN(height))
    height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || "0");
  }
  const params = swiper.params;
  const { wrapperEl, slidesEl, rtlTranslate: rtl, wrongRTL } = swiper;
  const isVirtual = !!(swiper.virtual && params.virtual?.enabled);
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  const resolveOffset = (value) => typeof value === "function" ? value.call(swiper) : value;
  const offsetBefore = resolveOffset(params.slidesOffsetBefore);
  const offsetAfter = resolveOffset(params.slidesOffsetAfter);
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  const swiperSize = swiper.size - offsetBefore - offsetAfter;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  if (params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-slides-offset-before", `${offsetBefore}px`);
    setCSSProperty(wrapperEl, "--swiper-slides-offset-after", `${offsetAfter}px`);
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize = 0;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    const bp = params.breakpoints[key];
    return typeof bp?.slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide2 = slides[i];
    if (slide2) {
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (elementStyle(slide2, "display") === "none")
        continue;
    }
    if (isVirtual && params.slidesPerView === "auto") {
      if (params.virtual?.slidesPerViewAutoSlideSize) {
        slideSize = params.virtual.slidesPerViewAutoSlideSize;
      }
      if (slideSize && slide2) {
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        slide2.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    } else if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slide2.style[swiper.getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width") : elementOuterSize(slide2, "height");
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const { clientWidth, offsetWidth } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
      if (slide2) {
        slide2.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slide2) {
      slide2.swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3)
        slidePosition = 0;
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }
  if (!params.centeredSlides) {
    const isFractionalSlidesPerView = params.slidesPerView !== "auto" && params.slidesPerView % 1 !== 0;
    const shouldSnapToSlideEdge = params.snapToSlideEdge && !params.loop && (params.slidesPerView === "auto" || isFractionalSlidesPerView);
    let lastAllowedSnapIndex = snapGrid.length;
    if (shouldSnapToSlideEdge) {
      let minVisibleSlides;
      if (params.slidesPerView === "auto") {
        minVisibleSlides = 1;
        let accumulatedSize = 0;
        for (let i = slidesSizesGrid.length - 1; i >= 0; i -= 1) {
          accumulatedSize += slidesSizesGrid[i] + (i < slidesSizesGrid.length - 1 ? spaceBetween : 0);
          if (accumulatedSize <= swiperSize) {
            minVisibleSlides = slidesSizesGrid.length - i;
          } else {
            break;
          }
        }
      } else {
        minVisibleSlides = Math.floor(params.slidesPerView);
      }
      lastAllowedSnapIndex = Math.max(slidesLength - minVisibleSlides, 0);
    }
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths)
        slidesGridItem = Math.floor(slidesGridItem);
      if (shouldSnapToSlideEdge) {
        if (i <= lastAllowedSnapIndex) {
          newSlidesGrid.push(slidesGridItem);
        }
      } else if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      if (!shouldSnapToSlideEdge) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    const slidesBefore = swiper.virtual.slidesBefore ?? 0;
    const slidesAfter = swiper.virtual.slidesAfter ?? 0;
    const virtualLoopCount = slidesBefore + slidesAfter;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil(virtualLoopCount / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < virtualLoopCount; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0)
    snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map((snap) => {
      if (snap <= 0)
        return -offsetBefore;
      if (snap > maxSnap)
        return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow)
      swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit("slidesUpdated");
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded)
        swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const { slides, params, slidesEl, activeIndex } = swiper;
  const isVirtual = !!(swiper.virtual && params.virtual?.enabled);
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      const virtualSlides = swiper.virtual.slides;
      let slideIndex = activeIndex - (swiper.virtual.slidesBefore ?? 0);
      if (slideIndex < 0)
        slideIndex = virtualSlides.length + slideIndex;
      if (slideIndex >= virtualSlides.length)
        slideIndex -= virtualSlides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else if (gridEnabled) {
    activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
    nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
    prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach((slideEl) => {
    toggleSlideClasses$1(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses$1(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses$1(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2 = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const { slides, rtlTranslate: rtl, snapGrid } = swiper;
  if (slides.length === 0)
    return;
  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl)
    offsetCenter = translate2;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset ?? 0;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset ?? 0;
    }
    const slideSize = slide2.swiperSlideSize ?? 0;
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses(slide2, isFullyVisible, params.slideFullyVisibleClass);
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
let Swiper$1 = class Swiper {
  static extendedDefaults;
  static defaults;
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0] !== null && typeof args[0] === "object" && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params)
      params = {};
    params = extend$1({}, params);
    if (el && !params.el)
      params.el = el;
    if (params.el && typeof params.el === "string" && typeof document !== "undefined" && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend$1({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({ userAgent: params.userAgent ?? void 0 });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__ || []];
    if (params.modules && Array.isArray(params.modules)) {
      params.modules.forEach((mod) => {
        const fn = mod;
        if (typeof fn === "function" && swiper.modules.indexOf(fn) < 0) {
          swiper.modules.push(fn);
        }
      });
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend$1({}, defaults, allModulesParams);
    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params);
    if (swiper.params && swiper.params.on) {
      const onHandlers = swiper.params.on;
      Object.keys(onHandlers).forEach((eventName) => {
        const handler = onHandlers[eventName];
        if (handler)
          swiper.on(eventName, handler);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  /**
   * !INTERNAL
   */
  isHorizontal() {
    return this.params.direction === "horizontal";
  }
  isVertical() {
    return this.params.direction === "vertical";
  }
  cssOverflowAdjustment() {
    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
  }
  getSlideIndex(slideEl) {
    const { slidesEl, params } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - (firstSlideIndex ?? 0);
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find((slideEl) => Number(slideEl.getAttribute("data-swiper-slide-index")) === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === "column") {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === "row") {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const { slidesEl, params } = this;
    this.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  /**
   * Enable Swiper (if it was disabled)
   */
  enable() {
    if (this.enabled)
      return;
    this.enabled = true;
    if (this.params.grabCursor) {
      this.setGrabCursor();
    }
    this.emit("enable");
  }
  /**
   * Disable Swiper (if it was enabled). When Swiper is disabled, it will hide all navigation elements and won't respond to any events and interactions
   */
  disable() {
    if (!this.enabled)
      return;
    this.enabled = false;
    if (this.params.grabCursor) {
      this.unsetGrabCursor();
    }
    this.emit("disable");
  }
  /**
   * Set Swiper translate progress (from 0 to 1). Where 0 - its initial position (offset) on first slide, and 1 - its maximum position (offset) on last slide
   *
   * @param progress Swiper translate progress (from 0 to 1).
   * @param speed Transition duration (in ms).
   */
  setProgress(progress, speed) {
    progress = Math.min(Math.max(progress, 0), 1);
    const min = this.minTranslate();
    const max = this.maxTranslate();
    const current = (max - min) * progress + min;
    this.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    this.updateActiveIndex();
    this.updateSlidesClasses();
  }
  emitContainerClasses() {
    if (!this.params._emitClasses || !this.el)
      return;
    const cls = this.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(this.params.containerModifierClass) === 0;
    });
    this.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    if (this.destroyed)
      return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(this.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    if (!this.params._emitClasses || !this.el)
      return;
    const updates = [];
    this.slides.forEach((slideEl) => {
      const classNames = this.getSlideClasses(slideEl);
      updates.push({ slideEl, classNames });
      this.emit("_slideClass", slideEl, classNames);
    });
    this.emit("_slideClasses", updates);
  }
  /**
   * Get dynamically calculated amount of slides per view, useful only when slidesPerView set to `auto`
   */
  slidesPerViewDynamic(view = "current", exact = false) {
    const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = this;
    let spv = 1;
    if (typeof params.slidesPerView === "number")
      return params.slidesPerView;
    if (!swiperSize)
      return spv;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize ?? 0) : 0;
      let breakLoop = false;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize ?? 0);
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize ?? 0;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
    } else if (view === "current") {
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
        if (slideInView) {
          spv += 1;
        }
      }
    } else {
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
        if (slideInView) {
          spv += 1;
        }
      }
    }
    return spv;
  }
  /**
   * You should call it after you add/remove slides
   * manually, or after you hide/show it, or do any
   * custom DOM modifications with Swiper
   * This method also includes subcall of the following
   * methods which you can use separately:
   */
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    const { snapGrid, params } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode?.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slidesLength = swiper.virtual && params.virtual?.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        translated = swiper.slideTo(slidesLength - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  /**
   * Changes slider direction from horizontal to vertical and back.
   *
   * @param direction New direction. If not specified, then will automatically changed to opposite direction
   * @param needUpdate Will call swiper.update(). Default true
   */
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate)
      swiper.update();
    return swiper;
  }
  /**
   * Changes slider language
   *
   * @param direction New direction. Should be `rtl` or `ltr`
   */
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
      return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted)
      return true;
    if (typeof document === "undefined")
      return false;
    const initialEl = element ?? swiper.params.el;
    let el = null;
    if (typeof initialEl === "string") {
      el = document.querySelector(initialEl);
    } else if (initialEl instanceof HTMLElement) {
      el = initialEl;
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    const parent = el.parentNode;
    if (parent && parent.host && parent.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    const host = swiper.isElement ? el.parentNode.host : null;
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !host.slideSlots ? host : wrapperEl,
      hostEl: swiper.isElement ? host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  /**
   * Initialize slider
   */
  init(el) {
    const swiper = this;
    if (swiper.initialized)
      return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false)
      return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual?.enabled) {
      swiper.slideTo((swiper.params.initialSlide ?? 0) + (swiper.virtual.slidesBefore ?? 0), 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate(void 0, true);
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  /**
   * Destroy slider instance and detach all events listeners
   *
   * @param deleteInstance Set it to false (by default it is true) to not to delete Swiper instance
   * @param cleanStyles Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container.
   * Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const { params, el, wrapperEl, slides } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__)
      Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
};
Object.defineProperty(Swiper$1, "extendedDefaults", {
  get() {
    return extendedDefaults;
  }
});
Object.defineProperty(Swiper$1, "defaults", {
  get() {
    return defaults;
  }
});
const prototypeRecord = prototypes;
const swiperProto = Swiper$1.prototype;
Object.keys(prototypeRecord).forEach((prototypeGroup) => {
  const group = prototypeRecord[prototypeGroup];
  Object.keys(group).forEach((protoMethod) => {
    swiperProto[protoMethod] = group[protoMethod];
  });
});
Swiper$1.use([Resize, Observer]);
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams)
    return keys;
  const addKey = (key) => {
    if (keys.indexOf(key) < 0)
      keys.push(key);
  };
  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join("") !== childrenKeys.join(""))
      addKey("children");
    if (oldChildren.length !== children.length)
      addKey("children");
  }
  const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      const newVal = swiperParams[key];
      const oldVal = oldParams[key];
      if (isObject(newVal) && isObject(oldVal)) {
        const newKeys = Object.keys(newVal);
        const oldKeys = Object.keys(oldVal);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach((newKey) => {
            if (newVal[newKey] !== oldVal[newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach((oldKey) => {
            if (newVal[oldKey] !== oldVal[oldKey])
              addKey(key);
          });
        }
      } else if (newVal !== oldVal) {
        addKey(key);
      }
    }
  });
  return keys;
}
function getParams(obj = {}, splitEvents = true) {
  const params = { on: {} };
  const events2 = {};
  const passedParams = {};
  extend(params, defaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = { ...obj };
  Object.keys(plainObj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "undefined")
      return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(value)) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], value);
        extend(passedParams[key], value);
      } else {
        params[key] = value;
        passedParams[key] = value;
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof value === "function") {
      const eventName = `${key[2].toLowerCase()}${key.substring(3)}`;
      const handler = value;
      if (splitEvents) {
        events2[eventName] = handler;
      } else {
        params.on[eventName] = handler;
      }
    } else {
      rest[key] = value;
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return { params, passedParams, rest, events: events2 };
}
function mountSwiper(refs, swiperParams) {
  const { el, nextEl, prevEl, paginationEl, scrollbarEl, swiper } = refs;
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    const params = swiper.params.navigation;
    const original = swiper.originalParams.navigation;
    params.nextEl = nextEl;
    original.nextEl = nextEl;
    params.prevEl = prevEl;
    original.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}
const updateOnVirtualData = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled)
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  swiper.emit("_virtualUpdated");
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate?.();
  }
};
function getChildren(originalSlots = {}, slidesRef, oldSlidesRef) {
  const slides = [];
  const slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  const getSlidesFromElements = (els, slotName) => {
    if (!Array.isArray(els))
      return;
    let effectiveSlot = slotName === "default" ? "container-end" : slotName;
    els.forEach((vnode) => {
      const isFragment = typeof vnode.type === "symbol";
      if (isFragment && vnode.children) {
        getSlidesFromElements(vnode.children, effectiveSlot);
        return;
      }
      const typeObj = vnode.type;
      const legacyTag = vnode.componentOptions?.tag;
      if (typeObj && (typeObj.name === "SwiperSlide" || typeObj.name === "AsyncComponentWrapper") || legacyTag === "SwiperSlide") {
        slides.push(vnode);
      } else if (slots[effectiveSlot]) {
        slots[effectiveSlot].push(vnode);
      }
    });
  };
  Object.keys(originalSlots).forEach((slotName) => {
    const slotFn = originalSlots[slotName];
    if (typeof slotFn !== "function")
      return;
    const els = slotFn();
    getSlidesFromElements(els, slotName);
  });
  oldSlidesRef.value = slidesRef.value;
  slidesRef.value = slides;
  return { slides, slots };
}
function renderVirtual(swiperRef, slides, virtualData) {
  if (!virtualData)
    return null;
  const swiper = swiperRef.value;
  if (!swiper)
    return null;
  const getSlideIndex = (index) => {
    let slideIndex = index;
    if (index < 0) {
      slideIndex = slides.length + index;
    } else if (slideIndex >= slides.length) {
      slideIndex -= slides.length;
    }
    return slideIndex;
  };
  const style = swiper.isHorizontal() ? { [swiper.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px` } : { top: `${virtualData.offset}px` };
  const { from, to } = virtualData;
  const loopFrom = swiper.params.loop ? -slides.length : 0;
  const loopTo = swiper.params.loop ? slides.length * 2 : slides.length;
  const slidesToRender = [];
  for (let i = loopFrom; i < loopTo; i += 1) {
    if (i >= from && i <= to && slidesToRender.length < slides.length) {
      const slide2 = slides[getSlideIndex(i)];
      if (slide2)
        slidesToRender.push(slide2);
    }
  }
  return slidesToRender.map((slide2) => {
    const props = slide2.props ?? {};
    props.style = props.style ?? {};
    props.swiperRef = swiperRef;
    props.style = style;
    slide2.props = props;
    if (slide2.type) {
      return h(slide2.type, { ...props }, slide2.children);
    }
    if (slide2.componentOptions) {
      return h(slide2.componentOptions.Ctor, { ...props }, slide2.componentOptions.children);
    }
    return void 0;
  });
}
const SWIPER_EVENTS = [
  "_beforeBreakpoint",
  "_containerClasses",
  "_slideClass",
  "_slideClasses",
  "_swiper",
  "_freeModeNoMomentumRelease",
  "_virtualUpdated",
  "activeIndexChange",
  "afterInit",
  "autoplay",
  "autoplayStart",
  "autoplayStop",
  "autoplayPause",
  "autoplayResume",
  "autoplayTimeLeft",
  "beforeDestroy",
  "beforeInit",
  "beforeLoopFix",
  "beforeResize",
  "beforeSlideChangeStart",
  "beforeTransitionStart",
  "breakpoint",
  "changeDirection",
  "click",
  "disable",
  "doubleTap",
  "doubleClick",
  "destroy",
  "enable",
  "fromEdge",
  "hashChange",
  "hashSet",
  "init",
  "keyPress",
  "lock",
  "loopFix",
  "momentumBounce",
  "navigationHide",
  "navigationShow",
  "navigationPrev",
  "navigationNext",
  "observerUpdate",
  "orientationchange",
  "paginationHide",
  "paginationRender",
  "paginationShow",
  "paginationUpdate",
  "progress",
  "reachBeginning",
  "reachEnd",
  "realIndexChange",
  "resize",
  "scroll",
  "scrollbarDragEnd",
  "scrollbarDragMove",
  "scrollbarDragStart",
  "setTransition",
  "setTranslate",
  "slidesUpdated",
  "slideChange",
  "slideChangeTransitionEnd",
  "slideChangeTransitionStart",
  "slideNextTransitionEnd",
  "slideNextTransitionStart",
  "slidePrevTransitionEnd",
  "slidePrevTransitionStart",
  "slideResetTransitionStart",
  "slideResetTransitionEnd",
  "sliderMove",
  "sliderFirstMove",
  "slidesLengthChange",
  "slidesGridLengthChange",
  "snapGridLengthChange",
  "snapIndexChange",
  "swiper",
  "tap",
  "toEdge",
  "touchEnd",
  "touchMove",
  "touchMoveOpposite",
  "touchStart",
  "transitionEnd",
  "transitionStart",
  "unlock",
  "update",
  "virtualUpdate",
  "zoomChange"
];
const Swiper2 = defineComponent({
  name: "Swiper",
  props: {
    tag: { type: String, default: "div" },
    wrapperTag: { type: String, default: "div" },
    modules: { type: Array, default: void 0 },
    init: { type: Boolean, default: void 0 },
    direction: {
      type: String,
      default: void 0
    },
    oneWayMovement: { type: Boolean, default: void 0 },
    swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
    touchEventsTarget: {
      type: String,
      default: void 0
    },
    initialSlide: { type: Number, default: void 0 },
    speed: { type: Number, default: void 0 },
    cssMode: { type: Boolean, default: void 0 },
    updateOnWindowResize: { type: Boolean, default: void 0 },
    resizeObserver: { type: Boolean, default: void 0 },
    nested: { type: Boolean, default: void 0 },
    focusableElements: { type: String, default: void 0 },
    width: { type: Number, default: void 0 },
    height: { type: Number, default: void 0 },
    preventInteractionOnTransition: { type: Boolean, default: void 0 },
    userAgent: { type: String, default: void 0 },
    url: { type: String, default: void 0 },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: void 0
    },
    edgeSwipeThreshold: { type: Number, default: void 0 },
    autoHeight: { type: Boolean, default: void 0 },
    setWrapperSize: { type: Boolean, default: void 0 },
    virtualTranslate: { type: Boolean, default: void 0 },
    effect: { type: String, default: void 0 },
    breakpoints: { type: Object, default: void 0 },
    breakpointsBase: { type: String, default: void 0 },
    spaceBetween: {
      type: [Number, String],
      default: void 0
    },
    slidesPerView: {
      type: [Number, String],
      default: void 0
    },
    maxBackfaceHiddenSlides: { type: Number, default: void 0 },
    slidesPerGroup: { type: Number, default: void 0 },
    slidesPerGroupSkip: { type: Number, default: void 0 },
    slidesPerGroupAuto: { type: Boolean, default: void 0 },
    centeredSlides: { type: Boolean, default: void 0 },
    centeredSlidesBounds: { type: Boolean, default: void 0 },
    slidesOffsetBefore: { type: Number, default: void 0 },
    slidesOffsetAfter: { type: Number, default: void 0 },
    normalizeSlideIndex: { type: Boolean, default: void 0 },
    centerInsufficientSlides: { type: Boolean, default: void 0 },
    watchOverflow: { type: Boolean, default: void 0 },
    roundLengths: { type: Boolean, default: void 0 },
    touchRatio: { type: Number, default: void 0 },
    touchAngle: { type: Number, default: void 0 },
    simulateTouch: { type: Boolean, default: void 0 },
    shortSwipes: { type: Boolean, default: void 0 },
    longSwipes: { type: Boolean, default: void 0 },
    longSwipesRatio: { type: Number, default: void 0 },
    longSwipesMs: { type: Number, default: void 0 },
    followFinger: { type: Boolean, default: void 0 },
    allowTouchMove: { type: Boolean, default: void 0 },
    threshold: { type: Number, default: void 0 },
    touchMoveStopPropagation: { type: Boolean, default: void 0 },
    touchStartPreventDefault: { type: Boolean, default: void 0 },
    touchStartForcePreventDefault: { type: Boolean, default: void 0 },
    touchReleaseOnEdges: { type: Boolean, default: void 0 },
    uniqueNavElements: { type: Boolean, default: void 0 },
    resistance: { type: Boolean, default: void 0 },
    resistanceRatio: { type: Number, default: void 0 },
    watchSlidesProgress: { type: Boolean, default: void 0 },
    grabCursor: { type: Boolean, default: void 0 },
    preventClicks: { type: Boolean, default: void 0 },
    preventClicksPropagation: { type: Boolean, default: void 0 },
    slideToClickedSlide: { type: Boolean, default: void 0 },
    loop: { type: Boolean, default: void 0 },
    loopedSlides: { type: Number, default: void 0 },
    loopPreventsSliding: { type: Boolean, default: void 0 },
    loopAdditionalSlides: { type: Number, default: void 0 },
    loopAddBlankSlides: { type: Boolean, default: void 0 },
    rewind: { type: Boolean, default: void 0 },
    allowSlidePrev: { type: Boolean, default: void 0 },
    allowSlideNext: { type: Boolean, default: void 0 },
    swipeHandler: { type: Boolean, default: void 0 },
    noSwiping: { type: Boolean, default: void 0 },
    noSwipingClass: { type: String, default: void 0 },
    noSwipingSelector: { type: String, default: void 0 },
    passiveListeners: { type: Boolean, default: void 0 },
    containerModifierClass: { type: String, default: void 0 },
    slideClass: { type: String, default: void 0 },
    slideActiveClass: { type: String, default: void 0 },
    slideVisibleClass: { type: String, default: void 0 },
    slideFullyVisibleClass: { type: String, default: void 0 },
    slideBlankClass: { type: String, default: void 0 },
    slideNextClass: { type: String, default: void 0 },
    slidePrevClass: { type: String, default: void 0 },
    wrapperClass: { type: String, default: void 0 },
    lazyPreloaderClass: { type: String, default: void 0 },
    lazyPreloadPrevNext: { type: Number, default: void 0 },
    runCallbacksOnInit: { type: Boolean, default: void 0 },
    observer: { type: Boolean, default: void 0 },
    observeParents: { type: Boolean, default: void 0 },
    observeSlideChildren: { type: Boolean, default: void 0 },
    a11y: {
      type: [Boolean, Object],
      default: void 0
    },
    autoplay: {
      type: [Boolean, Object],
      default: void 0
    },
    controller: {
      type: Object,
      default: void 0
    },
    coverflowEffect: {
      type: Object,
      default: void 0
    },
    cubeEffect: { type: Object, default: void 0 },
    fadeEffect: { type: Object, default: void 0 },
    flipEffect: { type: Object, default: void 0 },
    creativeEffect: {
      type: Object,
      default: void 0
    },
    cardsEffect: { type: Object, default: void 0 },
    hashNavigation: {
      type: [Boolean, Object],
      default: void 0
    },
    history: {
      type: [Boolean, Object],
      default: void 0
    },
    keyboard: {
      type: [Boolean, Object],
      default: void 0
    },
    mousewheel: {
      type: [Boolean, Object],
      default: void 0
    },
    navigation: {
      type: [Boolean, Object],
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    parallax: {
      type: [Boolean, Object],
      default: void 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: void 0
    },
    thumbs: { type: Object, default: void 0 },
    virtual: {
      type: [Boolean, Object],
      default: void 0
    },
    zoom: {
      type: [Boolean, Object],
      default: void 0
    },
    grid: { type: Object, default: void 0 },
    freeMode: {
      type: [Boolean, Object],
      default: void 0
    },
    enabled: { type: Boolean, default: void 0 }
  },
  emits: SWIPER_EVENTS,
  setup(props, { slots: originalSlots, emit }) {
    const { tag: Tag, wrapperTag: WrapperTag } = props;
    const containerClasses = ref("swiper");
    const virtualData = ref(null);
    const breakpointChanged = ref(false);
    const initializedRef = ref(false);
    const swiperElRef = ref(null);
    const swiperRef = shallowRef(null);
    const oldPassedParamsRef = ref(null);
    const slidesRef = { value: [] };
    const oldSlidesRef = { value: [] };
    const nextElRef = ref(null);
    const prevElRef = ref(null);
    const paginationElRef = ref(null);
    const scrollbarElRef = ref(null);
    const { params: swiperParams, passedParams } = getParams(props, false);
    getChildren(originalSlots, slidesRef, oldSlidesRef);
    oldPassedParamsRef.value = passedParams;
    oldSlidesRef.value = slidesRef.value;
    const onBeforeBreakpoint = () => {
      getChildren(originalSlots, slidesRef, oldSlidesRef);
      breakpointChanged.value = true;
    };
    swiperParams.onAny = (event, ...args) => {
      emit(event, ...args);
    };
    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,
      _containerClasses(_swiper, classes2) {
        containerClasses.value = classes2;
      }
    });
    const passParams = { ...swiperParams };
    delete passParams.wrapperClass;
    swiperRef.value = new Swiper$1(passParams);
    const instance = swiperRef.value;
    if (instance && instance.virtual && instance.params.virtual?.enabled) {
      instance.virtual.slides = slidesRef.value;
      const extendWith = {
        cache: false,
        slides: slidesRef.value,
        renderExternal: (data) => {
          virtualData.value = data;
        },
        renderExternalUpdate: false
      };
      extend(instance.params.virtual, extendWith);
      if (instance.originalParams.virtual)
        extend(instance.originalParams.virtual, extendWith);
    }
    onUpdated(() => {
      if (!initializedRef.value && swiperRef.value) {
        swiperRef.value.emitSlidesClasses();
        initializedRef.value = true;
      }
      const { passedParams: newPassedParams } = getParams(props, false);
      const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value, (c) => c.props ? c.props.key : void 0);
      oldPassedParamsRef.value = newPassedParams;
      if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
        updateSwiper({
          swiper: swiperRef.value,
          slides: slidesRef.value,
          passedParams: newPassedParams,
          changedParams,
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
          scrollbarEl: scrollbarElRef.value,
          paginationEl: paginationElRef.value
        });
      }
      breakpointChanged.value = false;
    });
    provide("swiper", swiperRef);
    watch(virtualData, () => {
      nextTick$1(() => {
        updateOnVirtualData(swiperRef.value);
      });
    });
    onMounted(() => {
      if (!swiperElRef.value || !swiperRef.value)
        return;
      mountSwiper({
        el: swiperElRef.value,
        nextEl: nextElRef.value,
        prevEl: prevElRef.value,
        paginationEl: paginationElRef.value,
        scrollbarEl: scrollbarElRef.value,
        swiper: swiperRef.value
      }, swiperParams);
      emit("swiper", swiperRef.value);
    });
    onBeforeUnmount(() => {
      if (swiperRef.value && !swiperRef.value.destroyed) {
        swiperRef.value.destroy(true, false);
      }
    });
    function renderSlides(slides) {
      if (swiperParams.virtual) {
        return renderVirtual(swiperRef, slides, virtualData.value);
      }
      slides.forEach((slide2, index) => {
        const slideProps = slide2.props ?? {};
        slideProps.swiperRef = swiperRef;
        slideProps.swiperSlideIndex = index;
        slide2.props = slideProps;
      });
      return slides;
    }
    return () => {
      const { slides, slots } = getChildren(originalSlots, slidesRef, oldSlidesRef);
      return h(Tag, {
        ref: swiperElRef,
        class: uniqueClasses(containerClasses.value)
      }, [
        slots["container-start"],
        h(WrapperTag, { class: wrapperClass(swiperParams.wrapperClass) }, [
          slots["wrapper-start"],
          renderSlides(slides),
          slots["wrapper-end"]
        ]),
        needsNavigation(props) && [
          h("div", { ref: prevElRef, class: "swiper-button-prev" }),
          h("div", { ref: nextElRef, class: "swiper-button-next" })
        ],
        needsScrollbar(props) && h("div", { ref: scrollbarElRef, class: "swiper-scrollbar" }),
        needsPagination(props) && h("div", { ref: paginationElRef, class: "swiper-pagination" }),
        slots["container-end"]
      ]);
    };
  }
});
const SwiperSlide = defineComponent({
  name: "SwiperSlide",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    swiperRef: { type: Object, required: false },
    swiperSlideIndex: { type: Number, default: void 0, required: false },
    zoom: {
      type: [Boolean, Number],
      default: void 0,
      required: false
    },
    lazy: { type: Boolean, default: false, required: false },
    virtualIndex: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(props, { slots }) {
    let eventAttached = false;
    const { swiperRef } = props;
    const slideElRef = ref(null);
    const slideClasses = ref("swiper-slide");
    const lazyLoaded = ref(false);
    function updateClasses(_swiper, el, classNames) {
      if (el === slideElRef.value) {
        slideClasses.value = classNames;
      }
    }
    onMounted(() => {
      if (!swiperRef || !swiperRef.value)
        return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onBeforeUpdate(() => {
      if (eventAttached || !swiperRef || !swiperRef.value)
        return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onUpdated(() => {
      if (!slideElRef.value || !swiperRef || !swiperRef.value)
        return;
      if (typeof props.swiperSlideIndex !== "undefined") {
        slideElRef.value.swiperSlideIndex = props.swiperSlideIndex;
      }
      if (swiperRef.value.destroyed) {
        if (slideClasses.value !== "swiper-slide") {
          slideClasses.value = "swiper-slide";
        }
      }
    });
    onBeforeUnmount(() => {
      if (!swiperRef || !swiperRef.value)
        return;
      swiperRef.value.off("_slideClass", updateClasses);
    });
    const slideData = computed(() => ({
      isActive: slideClasses.value.indexOf("swiper-slide-active") >= 0,
      isVisible: slideClasses.value.indexOf("swiper-slide-visible") >= 0,
      isPrev: slideClasses.value.indexOf("swiper-slide-prev") >= 0,
      isNext: slideClasses.value.indexOf("swiper-slide-next") >= 0
    }));
    provide("swiperSlide", slideData);
    const onLoad2 = () => {
      lazyLoaded.value = true;
    };
    const lazyPreloaderHook = (vnode) => {
      const el = vnode.el;
      if (el)
        el.lazyPreloaderManaged = true;
    };
    return () => h(props.tag, {
      class: uniqueClasses(`${slideClasses.value}`),
      ref: slideElRef,
      "data-swiper-slide-index": typeof props.virtualIndex === "undefined" && swiperRef && swiperRef.value && swiperRef.value.params.loop ? props.swiperSlideIndex : props.virtualIndex,
      onLoadCapture: onLoad2
    }, props.zoom ? h("div", {
      class: "swiper-zoom-container",
      "data-swiper-zoom": typeof props.zoom === "number" ? props.zoom : void 0
    }, [
      slots.default && slots.default(slideData.value),
      props.lazy && !lazyLoaded.value && h("div", {
        class: "swiper-lazy-preloader",
        onVnodeMounted: lazyPreloaderHook
      })
    ]) : [
      slots.default && slots.default(slideData.value),
      props.lazy && !lazyLoaded.value && h("div", {
        class: "swiper-lazy-preloader",
        onVnodeMounted: lazyPreloaderHook
      })
    ]);
  }
});
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const target = params ?? {};
  const original = originalParams ?? {};
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!target[key] && target.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        target[key] = element;
        original[key] = element;
      }
    });
  }
  return target;
}
const arrowSvg = `<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;
const Navigation = ({ swiper, extendParams, on, emit }) => {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      addIcons: true,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null,
    arrowSvg
  };
  function getParams2() {
    return swiper.params.navigation;
  }
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res)
        return res;
    }
    if (el) {
      if (typeof el === "string")
        res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res)
      return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = getParams2();
    const els = makeElementsArray(el);
    els.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON")
          subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const { nextEl, prevEl } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    const params = getParams2();
    if (!(params.nextEl || params.prevEl))
      return;
    const nextEl = getEl(params.nextEl);
    const prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    const nextEls = makeElementsArray(nextEl);
    const prevEls = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        if (params.addIcons && el.matches(".swiper-button-next,.swiper-button-prev") && !el.querySelector("svg")) {
          const tempEl = document.createElement("div");
          setInnerHTML(tempEl, arrowSvg);
          const svgEl = tempEl.querySelector("svg");
          if (svgEl)
            el.appendChild(svgEl);
          tempEl.remove();
        }
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEls.forEach((el) => initButton(el, "next"));
    prevEls.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    const params = getParams2();
    const { nextEl, prevEl } = swiper.navigation;
    const nextEls = makeElementsArray(nextEl);
    const prevEls = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...params.disabledClass.split(" "));
    };
    nextEls.forEach((el) => destroyButton(el, "next"));
    prevEls.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (getParams2().enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const params = getParams2();
    const { nextEl, prevEl } = swiper.navigation;
    const nextEls = makeElementsArray(nextEl);
    const prevEls = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update2();
      return;
    }
    [...nextEls, ...prevEls].filter((el) => !!el).forEach((el) => el.classList.add(params.lockClass));
  });
  on("click", (_s, e) => {
    const params = getParams2();
    const { nextEl, prevEl } = swiper.navigation;
    const nextEls = makeElementsArray(nextEl);
    const prevEls = makeElementsArray(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEls.includes(targetEl) || nextEls.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.composedPath ? e.composedPath() : [];
      if (path.length) {
        targetIsButton = path.find((pathEl) => nextEls.includes(pathEl) || prevEls.includes(pathEl));
      }
    }
    if (params.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if (nextEls.length) {
        isHidden = nextEls[0].classList.contains(params.hiddenClass);
      } else if (prevEls.length) {
        isHidden = prevEls[0].classList.contains(params.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEls, ...prevEls].filter((el) => !!el).forEach((el) => el.classList.toggle(params.hiddenClass));
    }
  });
  const enable = () => {
    const params = getParams2();
    swiper.el.classList.remove(...params.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    const params = getParams2();
    swiper.el.classList.add(...params.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
};
const _hoisted_1$7 = { class: "slider" };
const _hoisted_2$7 = {
  key: 0,
  class: "slider__desktop"
};
const _hoisted_3$6 = { class: "slider__viewport" };
const _hoisted_4$5 = {
  key: 1,
  class: "slider__native"
};
const _sfc_main$8 = {
  __name: "Slider",
  props: {
    items: { type: Array, required: true },
    arrowLeft: { type: String, required: true },
    arrowRight: { type: String, required: true },
    /** @type {number} Ширина экрана в px, выше которой включается Swiper-слайдер */
    desktopBreakpoint: { type: Number, default: 1025 }
  },
  setup(__props) {
    const props = __props;
    const isDesktop = ref(false);
    let mql = null;
    function checkBreakpoint() {
      isDesktop.value = window.innerWidth >= props.desktopBreakpoint;
    }
    onMounted(() => {
      checkBreakpoint();
      mql = window.matchMedia(`(min-width: ${props.desktopBreakpoint}px)`);
      mql.addEventListener("change", checkBreakpoint);
    });
    onBeforeUnmount(() => {
      if (mql) mql.removeEventListener("change", checkBreakpoint);
    });
    const prevRef = ref(null);
    const nextRef = ref(null);
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        isDesktop.value ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
          createBaseVNode("button", {
            ref_key: "prevRef",
            ref: prevRef,
            class: "slider__arrow slider__arrow--left",
            type: "button",
            "aria-label": "Назад"
          }, [
            createVNode(_component_Image, {
              src: __props.arrowLeft,
              alt: "",
              width: "57",
              height: "57"
            }, null, 8, ["src"])
          ], 512),
          createBaseVNode("div", _hoisted_3$6, [
            createVNode(unref(Swiper2), {
              modules: [unref(Navigation)],
              "slides-per-view": 3,
              "space-between": 24,
              "slides-per-group": 1,
              "allow-touch-move": true,
              navigation: { prevEl: prevRef.value, nextEl: nextRef.value },
              "watch-overflow": true,
              "resistance-ratio": 0
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: index,
                    class: "slider__slide"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "slide", {
                        item,
                        index
                      })
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 3
            }, 8, ["modules", "navigation"])
          ]),
          createBaseVNode("button", {
            ref_key: "nextRef",
            ref: nextRef,
            class: "slider__arrow slider__arrow--right",
            type: "button",
            "aria-label": "Вперёд"
          }, [
            createVNode(_component_Image, {
              src: __props.arrowRight,
              alt: "",
              width: "57",
              height: "57"
            }, null, 8, ["src"])
          ], 512)
        ])) : (openBlock(), createElementBlock("div", _hoisted_4$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "slider__native-slide"
            }, [
              renderSlot(_ctx.$slots, "slide", {
                item,
                index
              })
            ]);
          }), 128))
        ]))
      ]);
    };
  }
};
const _hoisted_1$6 = { class: "slider-section" };
const _hoisted_2$6 = { class: "slider-section__title title" };
const _hoisted_3$5 = { class: "slider-section__card" };
const _hoisted_4$4 = { class: "slider-section__card-name-wrap" };
const _hoisted_5$4 = { class: "slider-section__card-name" };
const _sfc_main$7 = {
  __name: "SliderSection",
  props: {
    title: { type: String, required: true },
    cards: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      const _component_Slider = _sfc_main$8;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$6, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("h2", _hoisted_2$6, toDisplayString(__props.title), 1),
            createVNode(_component_Slider, {
              items: __props.cards,
              "arrow-left": "/images/shared/arrow-left.svg",
              "arrow-right": "/images/shared/arrow-right.svg"
            }, {
              slide: withCtx(({ item }) => [
                createBaseVNode("div", _hoisted_3$5, [
                  createVNode(_component_Image, {
                    class: "slider-section__card-photo",
                    src: item.photo,
                    alt: "",
                    width: "380",
                    height: "393"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_4$4, [
                    createBaseVNode("p", _hoisted_5$4, toDisplayString(item.name), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["items"])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$5 = {
  id: "locations",
  class: "locations"
};
const _hoisted_2$5 = { class: "locations__header" };
const _hoisted_3$4 = ["innerHTML"];
const _hoisted_4$3 = ["innerHTML"];
const _hoisted_5$3 = { class: "locations__wrapper" };
const _hoisted_6$3 = {
  class: "locations__scroll",
  dir: "rtl"
};
const _hoisted_7$3 = {
  class: "locations__grid",
  dir: "ltr"
};
const _sfc_main$6 = {
  __name: "LocationsSection",
  props: {
    title: { type: String, required: true },
    timeBadge: { type: String, default: "" },
    items: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_LegendItem = _sfc_main$a;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$5, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$5, [
              createBaseVNode("h2", {
                class: "locations__title title",
                innerHTML: ("sanitizeText" in _ctx ? _ctx.sanitizeText : unref(sanitizeText))(__props.title)
              }, null, 8, _hoisted_3$4),
              createBaseVNode("span", {
                class: "locations__time-badge",
                innerHTML: ("sanitizeText" in _ctx ? _ctx.sanitizeText : unref(sanitizeText))(__props.timeBadge)
              }, null, 8, _hoisted_4$3)
            ]),
            createBaseVNode("div", _hoisted_5$3, [
              createBaseVNode("div", _hoisted_6$3, [
                createBaseVNode("div", _hoisted_7$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                    return openBlock(), createBlock(_component_LegendItem, {
                      key: index,
                      icon: item.icon,
                      title: item.name,
                      subtitle: item.description,
                      "is-extended": true
                    }, null, 8, ["icon", "title", "subtitle"]);
                  }), 128))
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$4 = {
  id: "partners",
  class: "partners"
};
const _hoisted_2$4 = { class: "partners__title title" };
const _hoisted_3$3 = { class: "partners__list" };
const _sfc_main$5 = {
  __name: "PartnersSection",
  props: {
    title: { type: String, required: true },
    logos: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$4, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("h2", _hoisted_2$4, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.logos, (logo, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "partners__logo-wrap"
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(logo.link ? "a" : "span"), {
                    href: logo.link || void 0,
                    target: logo.link ? "_blank" : void 0
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Image, {
                        class: "partners__logo",
                        src: logo.src,
                        alt: logo.alt,
                        width: "164",
                        height: "49"
                      }, null, 8, ["src", "alt"])
                    ]),
                    _: 2
                  }, 1032, ["href", "target"]))
                ]);
              }), 128))
            ]),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "partners__more" }, [
              createTextVNode("А также спортивный фестиваль в "),
              createBaseVNode("a", {
                href: "https://leto.sport.mos.ru",
                target: "_blank"
              }, "Лужниках")
            ], -1))
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$3 = {
  id: "faq",
  class: "faq"
};
const _hoisted_2$3 = { class: "faq__title title" };
const _hoisted_3$2 = { class: "faq__accordion" };
const _hoisted_4$2 = ["aria-expanded", "aria-controls", "onClick"];
const _hoisted_5$2 = ["innerHTML"];
const _hoisted_6$2 = {
  class: "faq__icon",
  "aria-hidden": "true"
};
const _hoisted_7$2 = ["src"];
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = ["id"];
const _hoisted_10$1 = ["innerHTML"];
const _sfc_main$4 = {
  __name: "Faq",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    images: {
      type: Object,
      default: () => ({
        decorLeft: "/images/faq/decor-left.svg",
        decorRight: "/images/faq/decor-right.svg",
        arrowDown: "/images/faq/arrow-down.svg",
        arrowUp: "/images/faq/arrow-up.svg"
      })
    }
  },
  setup(__props) {
    const openState = ref({});
    function toggle(index) {
      openState.value = { ...openState.value, [index]: !openState.value[index] };
    }
    function isOpen(index) {
      return !!openState.value[index];
    }
    return (_ctx, _cache) => {
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1$3, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("h2", _hoisted_2$3, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: normalizeClass(["faq__item", { active: isOpen(index) }])
                }, [
                  createBaseVNode("button", {
                    class: normalizeClass(["faq__toggler", { active: isOpen(index) }]),
                    "aria-expanded": isOpen(index),
                    "aria-controls": `faq-content-${index}`,
                    onClick: ($event) => toggle(index)
                  }, [
                    createBaseVNode("span", {
                      innerHTML: unref(sanitizeText)(item.question)
                    }, null, 8, _hoisted_5$2),
                    createBaseVNode("span", _hoisted_6$2, [
                      createBaseVNode("img", {
                        src: __props.images.arrowDown,
                        alt: "",
                        class: "faq__down",
                        width: "36",
                        height: "36"
                      }, null, 8, _hoisted_7$2),
                      createBaseVNode("img", {
                        src: __props.images.arrowUp,
                        alt: "",
                        class: "faq__up",
                        width: "36",
                        height: "36"
                      }, null, 8, _hoisted_8$1)
                    ])
                  ], 10, _hoisted_4$2),
                  createBaseVNode("div", {
                    id: `faq-content-${index}`,
                    class: normalizeClass(["faq__content", { active: isOpen(index) }]),
                    role: "region"
                  }, [
                    createBaseVNode("p", {
                      innerHTML: unref(sanitizeText)(item.answer)
                    }, null, 8, _hoisted_10$1)
                  ], 10, _hoisted_9$1)
                ], 2);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cb161013"]]);
const _hoisted_1$2 = ["href"];
const _hoisted_2$2 = ["disabled", "type"];
const _sfc_main$3 = {
  __name: "Button",
  props: {
    variant: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: false },
    to: { type: String, default: "" },
    type: { type: String, default: "button" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.to ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: __props.to,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$2)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_2$2));
    };
  }
};
const _hoisted_1$1 = {
  id: "hero",
  class: "hero"
};
const _hoisted_2$1 = { class: "visually-hidden" };
const _hoisted_3$1 = { class: "hero__content" };
const _hoisted_4$1 = { class: "hero__info" };
const _hoisted_5$1 = { class: "hero__main" };
const _hoisted_6$1 = { class: "hero__logos" };
const _hoisted_7$1 = ["href"];
const _hoisted_8 = { class: "hero__date-wrapper tablet" };
const _hoisted_9 = { class: "hero__links" };
const _hoisted_10 = { class: "hero__right" };
const _hoisted_11 = { class: "hero__date-wrapper" };
const _sfc_main$2 = {
  __name: "HeroSection",
  props: {
    title: { type: String, required: true },
    mainText: { type: String, default: "" },
    subText: { type: String, default: "" },
    logos: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] },
    images: {
      type: Object,
      default: () => ({
        decorLeft: "",
        decorTop: "",
        decorRight: "",
        mobileDecor: "",
        bg: "",
        logo: "",
        dateDesktop: "",
        dateMobile: "",
        girl: "",
        girls: ""
      })
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      const _component_Button = _sfc_main$3;
      const _component_Container = _sfc_main$h;
      const _directive_anchor = resolveDirective("anchor");
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createBaseVNode("h1", _hoisted_2$1, toDisplayString(__props.title), 1),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(_component_Image, {
            class: "hero__decor hero__decor--left",
            src: __props.images.decorLeft,
            alt: "",
            width: "907",
            height: "940"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            class: "hero__decor hero__decor--top",
            src: __props.images.decorTop,
            alt: "",
            width: "859",
            height: "421"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            class: "hero__decor hero__decor--right",
            src: __props.images.decorRight,
            alt: "",
            width: "1031",
            height: "940"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            class: "hero__mobile-decor",
            src: __props.images.mobileDecor,
            alt: "",
            width: "880",
            height: "947"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            src: __props.images.bg,
            alt: "",
            class: "hero__bg",
            width: "1920",
            height: "808"
          }, null, 8, ["src"]),
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("div", _hoisted_5$1, [
                  createBaseVNode("div", _hoisted_6$1, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.logos, (logo, index) => {
                      return openBlock(), createElementBlock("a", {
                        key: index,
                        href: logo.link,
                        target: "_blank"
                      }, [
                        createVNode(_component_Image, {
                          src: logo.src,
                          alt: logo.alt,
                          width: logo.width,
                          height: logo.height
                        }, null, 8, ["src", "alt", "width", "height"])
                      ], 8, _hoisted_7$1);
                    }), 128))
                  ]),
                  createVNode(_component_Image, {
                    class: "hero__logo",
                    src: __props.images.logo,
                    alt: "",
                    width: "739",
                    height: "337"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(_component_Image, {
                      src: __props.images.dateMobile,
                      alt: "",
                      class: "hero__date",
                      width: "260",
                      height: "88"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(_component_Image, {
                    src: __props.images.girl,
                    alt: "",
                    class: "hero__girl tablet",
                    width: "1523",
                    height: "1558"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_9, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, (link, index) => {
                      return withDirectives((openBlock(), createBlock(_component_Button, {
                        key: index,
                        class: normalizeClass([link.class, "hero__button"]),
                        href: link.href
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(link.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["class", "href"])), [
                        [_directive_anchor]
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_Image, {
                      src: __props.images.dateDesktop,
                      alt: "",
                      class: "hero__date",
                      width: "431",
                      height: "145"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(_component_Image, {
                    class: "hero__girls",
                    src: __props.images.girls,
                    alt: "",
                    width: "888",
                    height: "662"
                  }, null, 8, ["src"])
                ])
              ])
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const _hoisted_1 = {
  id: "dance",
  class: "dance"
};
const _hoisted_2 = { class: "dance__info" };
const _hoisted_3 = { class: "dance__content" };
const _hoisted_4 = { class: "dance__bg" };
const _hoisted_5 = { class: "dance__text-content" };
const _hoisted_6 = { class: "dance__text text" };
const _hoisted_7 = ["href", "target"];
const _sfc_main$1 = {
  __name: "DanceSection",
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
    titleImg: { type: String, required: true },
    girl: { type: String, required: true },
    bg: { type: String, required: true },
    decorTop: { type: String, required: true },
    button: {
      type: Object,
      default: () => ({
        link: "#",
        text: "Подать заявку"
      })
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$g;
      const _component_Container = _sfc_main$h;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$c, {
              class: "dance__title",
              white: ""
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.title), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_Image, {
                class: "dance__decor",
                src: __props.decorTop,
                width: "1494",
                height: "900"
              }, null, 8, ["src"]),
              createVNode(_component_Image, {
                class: "dance__girls",
                src: __props.girl,
                alt: "Girls",
                width: "681",
                height: "853"
              }, null, 8, ["src"]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_Image, {
                    src: __props.bg,
                    alt: "Background",
                    width: "1400",
                    height: "352"
                  }, null, 8, ["src"])
                ]),
                createVNode(_component_Image, {
                  class: "dance__title-logo",
                  src: __props.titleImg,
                  alt: "Title"
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("p", _hoisted_6, toDisplayString(__props.text), 1),
                  createBaseVNode("a", {
                    href: __props.button.link,
                    class: "dance__button",
                    target: __props.button.target
                  }, toDisplayString(__props.button.text), 9, _hoisted_7)
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const type$9 = "hero";
const title$a = "Фестиваль танцев и чирлидинга — 15 августа";
const links = [{ "text": "Смотреть программу", "class": "magenta", "href": "#schedule" }, { "text": "Участвовать в конкурсе", "class": "white", "href": "#dance" }];
const logos$1 = [{ "src": "/images/hero/major.svg", "alt": "Проект мэра", "link": "https://www.mos.ru/city/projects/", "width": 97, "height": 49 }, { "src": "/images/hero/summer.svg", "alt": "Лето в Москве", "link": "https://leto.mos.ru/", "width": 110, "height": 47 }, { "src": "/images/hero/dep.svg", "alt": "Департамент Москвы", "link": "https://www.mos.ru/moskomsport/", "width": 138, "height": 47 }, { "src": "/images/hero/mossport.svg", "alt": "Московский спорт", "link": "https://sport.mos.ru", "width": 164, "height": 49 }];
const images$1 = { "decorLeft": "/images/hero/decor-left.png", "decorTop": "/images/hero/decor-top.png", "decorRight": "/images/hero/decor-right.png", "mobileDecor": "/images/hero/mobile-decor.png", "bg": "/images/hero/bg.jpg", "logo": "/images/hero/logo.svg", "dateDesktop": "/images/hero/date.svg", "dateMobile": "/images/hero/date-mobile.svg", "girl": "/images/hero/girl.png", "girls": "/images/hero/girls.png" };
const heroData = {
  type: type$9,
  title: title$a,
  links,
  logos: logos$1,
  images: images$1
};
const type$8 = "about";
const title$9 = "О событии";
const paragraphs = ["На один день Лужники превратятся в большой танцпол под открытым небом", "Переходите между площадками, пробуйте новые направления, смотрите выступления и оставайтесь на вечерний концерт."];
const decorLeft = "/images/about/decor-left.png";
const decorRight = "/images/about/decor-right.png";
const bullets = [{ "title": "5 танцевальных направлений", "text": "От K-Pop до чирлидинга и хип-хопа", "image": "/images/about/about5.jpg" }, { "title": "Открытые мастер-классы", "text": "Со звездными танцорами и тренерами", "image": "/images/about/about2.jpg" }, { "title": "Конкурс среди танцоров", "text": "Соревнования танцевальных клубов", "image": "/images/about/about3.jpg" }, { "title": "Большой концерт", "text": "Выступления артистов и концерт NILETTO", "image": "/images/about/about4.jpg" }];
const aboutData = {
  type: type$8,
  title: title$9,
  paragraphs,
  decorLeft,
  decorRight,
  bullets
};
const type$7 = "map";
const title$8 = "Карта";
const subtitle = "Все площадки фестиваля на одной карте";
const buttons = [{ "text": "Построить маршрут", "link": "https://yandex.com/maps/-/CTV3MZJw" }];
const mapImage = "/images/map/map.jpg";
const legend = [{ "number": 1, "name": "Главная сцена", "description": "мастер-классы, соревнования, выступление хедлайнера" }, { "number": 2, "name": "Зона чирлидинга и соревнования" }, { "number": 3, "name": "Зона современных танцев и пространство для батлов" }, { "number": 4, "name": "Акробатическая дорожка" }, { "number": 5, "name": "Каток" }, { "number": 6, "name": "Зона танцевального мэйкапа и кастомизация костюмов" }, { "number": 7, "name": "Место для судей" }];
const mapData = {
  type: type$7,
  title: title$8,
  subtitle,
  buttons,
  mapImage,
  legend
};
const title$7 = "расписание";
const tabs = [{ "name": "Главная сцена", "columns": 3, "events": [{ "title": "Мастер-класс по&nbsp;уличным танцам с&nbsp;участием певицы Нюши", "time": "12:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128185/" }, { "title": "Мастер-класс с&nbsp;хореографом Артемом Глотовым и&nbsp;студией ART FORCE", "time": "13:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128187/" }, { "title": "Соревнования танцевальных клубов (сольное исполнение)", "time": "14:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4138707/" }, { "title": "Соревнования танцевальных клубов (групповое исполнение)", "time": "15:20", "registration": true, "anchor": true, "link": "#dance" }, { "title": "КЕД концерт: танцевальное шоу от&nbsp;участников проекта &laquo;Танцы на&nbsp;ТНТ&raquo;", "time": "16:40", "registration": false }, { "title": "Награждение победителей соревнований: танцы и&nbsp;чирлидинг", "time": "17:10", "registration": false }, { "title": "Выступление солиста российского Театра танца Todes Ильдара Гайнутдинова", "time": "17:30", "registration": false }, { "title": "Соревнования чирлидеров: финал", "time": "17:40" }, { "title": "Награждение победителей соревнований: чирлидинг", "time": "18:20" }, { "title": "Массовый танец &laquo;Танцпол везде&raquo; с&nbsp;блогером и&nbsp;актрисой Анной Немченко", "time": "18:30", "registration": false }, { "title": "Концерт NILETTO", "time": "19:15", "registration": false }] }, { "name": "Малая сцена", "columns": 3, "events": [{ "title": "Proтанцы. Север: выступления команд и&nbsp;мастер-класс с&nbsp;Романом Суптели", "time": "11:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128188/" }, { "title": "Танцевальная студия GSS: мастер-класс по&nbsp;кей-попу и&nbsp;показательные выступления", "time": "12:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128196/" }, { "title": "Танцевальная студия GSS: мастер-класс по&nbsp;хип-хопу и&nbsp;показательные выступления", "time": "13:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128195/" }, { "title": "Танцевальная студия DANCO: показательный номер по&nbsp;кей-попу и&nbsp;мастер-класс", "time": "14:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128198/" }, { "title": "Аня Тихая и&nbsp;Егор Хлебников: мастер-класс по&nbsp;хип-хопу с&nbsp;участниками проекта &laquo;Танцы на&nbsp;ТНТ&raquo;", "time": "15:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128199/" }, { "title": "Ева Уварова: мастер-класс по&nbsp;контемпорари и&nbsp;сольное выступление", "time": "16:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128200/" }, { "title": "Ronin и&nbsp;Loony Boy: мастер-класс с&nbsp;участниками шоу &laquo;Танцы на&nbsp;ТНТ&raquo;", "time": "17:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128202/" }, { "title": "OBC crew: шоу-кейсы и&nbsp;мастер-класс с&nbsp;победителями международных чемпионатов по&nbsp;брейкингу", "time": "18:10", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128203/" }] }, { "name": "Зона чирлидинга", "columns": 3, "events": [{ "title": "Показательное выступление", "time": "12:00" }, { "title": "Активности с гостями и фото с чирлидерами", "time": "12:30" }, { "title": "Соревнования чирлидеров", "time": "14:00", "registration": true, "anchor": true, "link": "#contest" }, { "title": "Показательное выступление", "time": "16:30", "registration": false }, { "title": "Активности с гостями и фото с чирлидерами", "time": "17:00" }, { "title": "Активности с гостями и фото с чирлидерами", "time": "18:10" }] }, { "name": "Акробатическая дорожка", "columns": 4, "events": [{ "title": "Разминка", "time": "11:00", "registration": false }, { "title": "Показательные опорные прыжки", "time": "12:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "13:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "14:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "15:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "16:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "17:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "18:30", "registration": false }] }, { "name": "Каток", "columns": 3, "events": [{ "title": "Свободное катание", "time": "11:00", "registration": false }, { "title": "Свободное катание", "time": "12:30", "registration": false }, { "title": "Мастер-класс с&nbsp;фигуристами Александрой Бойковой и&nbsp;Дмитрием Козловским", "time": "14:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128204/" }, { "title": "Свободное катание", "time": "16:00", "registration": false }, { "title": "Свободное катание", "time": "18:00", "registration": false }, { "title": "Свободное катание", "time": "19:15", "registration": false }] }, { "name": "Кибер-бар", "columns": 3, "events": [{ "title": "Аквагрим, блестки и&nbsp;переводные татуировки для детей и&nbsp;взрослых", "time": "Весь день", "registration": false }, { "title": "Мастер-класс по&nbsp;созданию помпона", "time": "11:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128205/" }, { "title": "Кастомизация футболок", "time": "13:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128210/" }, { "title": "Мастер-класс по&nbsp;созданию помпона", "time": "15:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128206/" }, { "title": "Кастомизация футболок", "time": "17:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128211/" }] }];
const scheduleData = {
  title: title$7,
  tabs
};
const type$6 = "clubs";
const title$6 = "Состязания чирлидинг-команд";
const text$1 = "Продемонстрируйте мощную энергетику и сложные элементы на главной арене фестиваля и поборитесь за призовой фонд";
const button$1 = { "link": "https://fest-dance-cheerleading.timepad.ru/event/4099869/", "text": "Подать заявку", "target": "_blank" };
const girl$1 = "/images/clubs/girl.png";
const titleImg$1 = "/images/clubs/title.svg";
const bg$1 = "/images/clubs/bg.png";
const decorTop$1 = "/images/clubs/decor-top.png";
const clubsData = {
  type: type$6,
  title: title$6,
  text: text$1,
  button: button$1,
  girl: girl$1,
  titleImg: titleImg$1,
  bg: bg$1,
  decorTop: decorTop$1
};
const type$5 = "dance";
const title$5 = "Конкурс танцевальных клубов";
const text = "Покажите свой номер на главной сцене фестиваля и поборитесь за победу в одной из пяти номинаций. Победителей определяет звездное жюри, а лучшие команды получают денежные призы";
const titleImg = "/images/dance/title.svg";
const button = { "link": "https://fest-dance-cheerleading.timepad.ru/event/4084236/", "text": "Подать заявку", "target": "_blank" };
const girl = "/images/dance/girls.png";
const bg = "/images/dance/bg.png";
const decorTop = "/images/dance/decor-top.png";
const danceData = {
  type: type$5,
  title: title$5,
  text,
  titleImg,
  button,
  girl,
  bg,
  decorTop
};
const type$4 = "nominations";
const title$4 = "Номинации";
const nominations = [{ "name": "Современный танец", "icon": "/images/shared/icon-main-stage.svg" }, { "name": "Спортивный танец", "icon": "/images/shared/icon-children.svg" }, { "name": "Уличный танец", "icon": "/images/shared/icon-stretch.svg" }, { "name": "Чирлидинг", "icon": "/images/shared/icon-cheerleading.svg" }];
const prizeLabel = "ПРИЗОВОЙ ФОНД";
const prizeAmount = "350 000 ₽";
const prizeNote = "Подробности в&nbsp;регламенте мероприятия";
const nominationsData = {
  type: type$4,
  title: title$4,
  nominations,
  prizeLabel,
  prizeAmount,
  prizeNote
};
const type$3 = "slider";
const title$3 = "Звездное жюри";
const cards = [{ "name": "Артем Глотов", "photo": "/images/jury/glotov.jpg" }, { "name": "Гарик Рудник", "photo": "/images/jury/rudnik.jpg" }, { "name": "Ильдар Гайнутдинов", "photo": "/images/jury/ildar.jpg" }, { "name": "DASHI", "photo": "/images/jury/dashi.jpg" }, { "name": "Александр Гиренко", "photo": "/images/jury/girenko.jpg" }, { "name": "Александр Сычугов", "photo": "/images/jury/sichugov.jpg" }, { "name": "Михаил и Алёна Нехолены", "photo": "/images/jury/nekholeny.jpg" }, { "name": "Инна Некоровская", "photo": "/images/jury/nekorovskaya.jpg" }, { "name": "Андрей Крылов", "photo": "/images/jury/krylov.jpg" }, { "name": "Никита Мусатов", "photo": "/images/jury/musatov.jpg" }];
const juryData = {
  type: type$3,
  title: title$3,
  cards
};
const type$2 = "locations";
const title$2 = "локации";
const timeBadge = "C 11:00 до 20:00";
const items$1 = [{ "name": "Зона чирлидинга", "description": "Показательные выступления и соревнования", "icon": "/images/shared/icon-cheerleading.svg" }, { "name": "Зона спортивных танцев", "description": "Хип-хоп, контемпорари, K-Pop, брейкин", "icon": "/images/shared/icon-children.svg" }, { "name": "Пространство для батлов", "description": "Соревнования среди любителей", "icon": "/images/shared/icon-swords.svg" }, { "name": "Мейкап и кастомизация костюмов", "description": "Бьюти-зона для создания танцевального образа", "icon": "/images/shared/icon-costumes.svg" }, { "name": "Зона мастер-классов на льду", "description": "Сеансы свободного катания и мастер-класс", "icon": "/images/shared/icon-ice.svg" }, { "name": "Фотозоны", "description": "Тематические локации для фотографий", "icon": "/images/shared/icon-photo.svg" }];
const locationsData = {
  type: type$2,
  title: title$2,
  timeBadge,
  items: items$1
};
const type$1 = "partners";
const title$1 = "Организаторы и партнеры";
const logos = [{ "src": "/images/partners/dep.svg", "alt": "Департамент спорта" }, { "src": "/images/partners/mossport.svg", "alt": "Мосспорт" }, { "src": "/images/partners/fahrenheit.png", "alt": "Fahrenheit", "link": "https://fahrenheit-plus.ru/" }];
const partnersData = {
  type: type$1,
  title: title$1,
  logos
};
const type = "faq";
const title = "Вопросы и ответы";
const images = { "decorLeft": "/images/faq/decor-left.svg", "decorRight": "/images/faq/decor-right.svg", "arrowDown": "/images/faq/arrow-down.svg", "arrowUp": "/images/faq/arrow-up.svg" };
const items = [{ "question": "Нужно&nbsp;ли регистрироваться, чтобы посетить фестиваль?", "answer": "Нет, фестиваль открыт для всех желающих." }, { "question": "Можно ли участвовать в мастер-классах без подготовки?", "answer": "Да, большинство мастер-классов рассчитаны на&nbsp;участников любого уровня подготовки." }, { "question": "Как принять участие в конкурсе танцевальных клубов?", "answer": "Необходимо заранее зарегистрировать команду. Для этого подайте заявку на&nbsp;участие, получите подтверждение от&nbsp;организаторов и&nbsp;выступите на&nbsp;сцене фестиваля 15&nbsp;августа." }, { "question": "Можно ли приходить с детьми?", "answer": "Да, на фестивале предусмотрены активности для гостей всех возрастов." }, { "question": "Можно ли прийти только на концерт?", "answer": "Да, вы можете прийти на любое событие программы. " }];
const faqData = {
  type,
  title,
  images,
  items
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _cache) => {
      const _component_AboutSection = _sfc_main$f;
      const _component_MapSection = _sfc_main$e;
      const _component_ScheduleSection = _sfc_main$d;
      const _component_ClubsSection = _sfc_main$b;
      const _component_NominationsSection = _sfc_main$9;
      const _component_SliderSection = _sfc_main$7;
      const _component_LocationsSection = _sfc_main$6;
      const _component_PartnersSection = _sfc_main$5;
      const _component_Faq = __nuxt_component_8;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_sfc_main$2, normalizeProps(guardReactiveProps(unref(heroData))), null, 16),
        createVNode(_component_AboutSection, normalizeProps(guardReactiveProps(unref(aboutData))), null, 16),
        createVNode(_component_MapSection, normalizeProps(guardReactiveProps(unref(mapData))), null, 16),
        createVNode(_component_ScheduleSection, normalizeProps(guardReactiveProps(unref(scheduleData))), null, 16),
        createVNode(_sfc_main$1, normalizeProps(guardReactiveProps(unref(danceData))), null, 16),
        createVNode(_component_ClubsSection, normalizeProps(guardReactiveProps(unref(clubsData))), null, 16),
        createVNode(_component_NominationsSection, normalizeProps(guardReactiveProps(unref(nominationsData))), null, 16),
        createVNode(_component_SliderSection, normalizeProps(guardReactiveProps(unref(juryData))), null, 16),
        createVNode(_component_LocationsSection, normalizeProps(guardReactiveProps(unref(locationsData))), null, 16),
        createVNode(_component_PartnersSection, normalizeProps(guardReactiveProps(unref(partnersData))), null, 16),
        createVNode(_component_Faq, normalizeProps(guardReactiveProps(unref(faqData))), null, 16)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
