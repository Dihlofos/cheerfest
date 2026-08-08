import { _ as _sfc_main$e, a as _sfc_main$f } from "./CDIlPZcQ.js";
import { B as openBlock, C as createElementBlock, F as createVNode, G as withCtx, D as createBaseVNode, E as toDisplayString, I as Fragment, J as renderList, M as createCommentVNode, _ as __vitePreload, N as resolveDirective, O as normalizeClass, P as normalizeStyle, l as unref, Q as withDirectives, H as createTextVNode, i as ref, m as computed, R as createBlock, S as renderSlot, T as resolveDynamicComponent, A as useHead, K as normalizeProps, L as guardReactiveProps } from "./C_21koLZ.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const _hoisted_1$b = {
  id: "about",
  class: "about"
};
const _hoisted_2$b = { class: "about__title title" };
const _hoisted_3$a = { class: "about__text" };
const _hoisted_4$9 = { class: "about__items" };
const _hoisted_5$8 = { class: "about__item-left" };
const _hoisted_6$8 = { class: "about__item-title" };
const _hoisted_7$8 = { class: "about__item-text" };
const _hoisted_8$5 = { class: "about__item-image-wrap" };
const _sfc_main$d = {
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
      const _component_Image = _sfc_main$e;
      const _component_Container = _sfc_main$f;
      return openBlock(), createElementBlock("section", _hoisted_1$b, [
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
            createBaseVNode("h2", _hoisted_2$b, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$a, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.paragraphs, (paragraph, index) => {
                return openBlock(), createElementBlock("p", { key: index }, toDisplayString(paragraph), 1);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_4$9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.bullets, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "about__item",
                  key: index
                }, [
                  createBaseVNode("div", _hoisted_5$8, [
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
const _hoisted_1$a = {
  id: "map",
  class: "map"
};
const _hoisted_2$a = { class: "map__header" };
const _hoisted_3$9 = { class: "map__title" };
const _hoisted_4$8 = { class: "map__subtitle" };
const _hoisted_5$7 = { class: "map__content" };
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
const _sfc_main$c = {
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
      const _component_Container = _sfc_main$f;
      return openBlock(), createElementBlock("section", _hoisted_1$a, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$a, [
              createBaseVNode("h2", _hoisted_3$9, toDisplayString(__props.title), 1),
              createBaseVNode("p", _hoisted_4$8, toDisplayString(__props.subtitle), 1)
            ]),
            createBaseVNode("div", _hoisted_5$7, [
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
const _hoisted_1$9 = {
  id: "schedule",
  class: "schedule"
};
const _hoisted_2$9 = { class: "schedule__title title" };
const _hoisted_3$8 = { class: "schedule__tabs" };
const _hoisted_4$7 = ["onClick"];
const _hoisted_5$6 = ["innerHTML"];
const _hoisted_6$6 = { class: "schedule__event-bottom" };
const _hoisted_7$6 = { class: "schedule__time" };
const _hoisted_8$3 = ["href"];
const _sfc_main$b = {
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
      const _component_Container = _sfc_main$f;
      const _directive_anchor = resolveDirective("anchor");
      return openBlock(), createElementBlock("section", _hoisted_1$9, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("h2", _hoisted_2$9, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$8, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab, index) => {
                return openBlock(), createElementBlock("button", {
                  key: tab.name,
                  class: normalizeClass(["schedule__tab", { "schedule__tab--active": index === activeIndex.value }]),
                  onClick: ($event) => activeIndex.value = index
                }, toDisplayString(tab.name), 11, _hoisted_4$7);
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
                  }, null, 8, _hoisted_5$6),
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
const _sfc_main$a = {
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
const _hoisted_1$8 = {
  id: "contest",
  class: "clubs"
};
const _hoisted_2$8 = { class: "clubs__info" };
const _hoisted_3$7 = { class: "clubs__content" };
const _hoisted_4$6 = { class: "clubs__bg" };
const _hoisted_5$5 = { class: "clubs__text-content" };
const _hoisted_6$5 = { class: "clubs__text text" };
const _hoisted_7$5 = ["href", "target"];
const _sfc_main$9 = {
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
      const _component_Image = _sfc_main$e;
      const _component_Container = _sfc_main$f;
      return openBlock(), createElementBlock("section", _hoisted_1$8, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$a, { class: "clubs__title" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.title), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_2$8, [
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
              createBaseVNode("div", _hoisted_3$7, [
                createVNode(_component_Image, {
                  class: "clubs__title-logo",
                  src: __props.titleImg,
                  alt: "Title"
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_4$6, [
                  createVNode(_component_Image, {
                    src: __props.bg,
                    alt: "Background",
                    width: "1400",
                    height: "352"
                  }, null, 8, ["src"])
                ]),
                createBaseVNode("div", _hoisted_5$5, [
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
const _hoisted_1$7 = { class: "legend-item__icon" };
const _hoisted_2$7 = { class: "legend-item__text" };
const _hoisted_3$6 = { class: "legend-item__title" };
const _hoisted_4$5 = {
  key: 0,
  class: "legend-item__subtitle"
};
const _sfc_main$8 = {
  __name: "LegendItem",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    isExtended: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$e;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["legend-item", { "legend-item--extended": __props.isExtended }])
      }, [
        createBaseVNode("div", _hoisted_1$7, [
          createVNode(_component_Image, {
            src: __props.icon,
            alt: "",
            width: __props.isExtended ? 120 : 44,
            height: __props.isExtended ? 120 : 44
          }, null, 8, ["src", "width", "height"])
        ]),
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("span", _hoisted_3$6, toDisplayString(__props.title), 1),
          __props.isExtended && __props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_4$5, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
};
const _hoisted_1$6 = {
  id: "nominations",
  class: "nominations"
};
const _hoisted_2$6 = { class: "nominations__header" };
const _hoisted_3$5 = { class: "nominations__title title" };
const _hoisted_4$4 = { class: "nominations__list" };
const _hoisted_5$4 = { class: "nominations__prize" };
const _hoisted_6$4 = { class: "nominations__prize-label" };
const _hoisted_7$4 = { class: "nominations__prize-amount" };
const _hoisted_8$2 = ["innerHTML"];
const _sfc_main$7 = {
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
      const _component_LegendItem = _sfc_main$8;
      const _component_Container = _sfc_main$f;
      return openBlock(), createElementBlock("section", _hoisted_1$6, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$6, [
              createBaseVNode("h2", _hoisted_3$5, toDisplayString(__props.title), 1)
            ]),
            createBaseVNode("div", _hoisted_4$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.nominations, (item, index) => {
                return openBlock(), createBlock(_component_LegendItem, {
                  key: index,
                  icon: item.icon,
                  title: item.name
                }, null, 8, ["icon", "title"]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_5$4, [
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
      const _component_LegendItem = _sfc_main$8;
      const _component_Container = _sfc_main$f;
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
      const _component_Image = _sfc_main$e;
      const _component_Container = _sfc_main$f;
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
            ])
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
      const _component_Container = _sfc_main$f;
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
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cb161013"]]);
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
      const _component_Image = _sfc_main$e;
      const _component_Button = _sfc_main$3;
      const _component_Container = _sfc_main$f;
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
      const _component_Image = _sfc_main$e;
      const _component_Container = _sfc_main$f;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$a, {
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
const type$8 = "hero";
const title$9 = "Фестиваль танцев и чирлидинга — 15 августа";
const links = [{ "text": "Смотреть программу", "class": "magenta", "href": "#schedule" }, { "text": "Участвовать в конкурсе", "class": "white", "href": "#dance" }];
const logos$1 = [{ "src": "/images/hero/major.svg", "alt": "Проект мэра", "link": "https://www.mos.ru/city/projects/", "width": 97, "height": 49 }, { "src": "/images/hero/summer.svg", "alt": "Лето в Москве", "link": "https://leto.mos.ru/", "width": 110, "height": 47 }, { "src": "/images/hero/dep.svg", "alt": "Департамент Москвы", "link": "https://www.mos.ru/moskomsport/", "width": 138, "height": 47 }, { "src": "/images/hero/mossport.svg", "alt": "Московский спорт", "link": "https://sport.mos.ru", "width": 164, "height": 49 }];
const images$1 = { "decorLeft": "/images/hero/decor-left.png", "decorTop": "/images/hero/decor-top.png", "decorRight": "/images/hero/decor-right.png", "mobileDecor": "/images/hero/mobile-decor.png", "bg": "/images/hero/bg.jpg", "logo": "/images/hero/logo.svg", "dateDesktop": "/images/hero/date.svg", "dateMobile": "/images/hero/date-mobile.svg", "girl": "/images/hero/girl.png", "girls": "/images/hero/girls.png" };
const heroData = {
  type: type$8,
  title: title$9,
  links,
  logos: logos$1,
  images: images$1
};
const type$7 = "about";
const title$8 = "О событии";
const paragraphs = ["На один день Лужники превратятся в большой танцпол под открытым небом", "Переходите между площадками, пробуйте новые направления, смотрите выступления и оставайтесь на вечерний концерт."];
const decorLeft = "/images/about/decor-left.png";
const decorRight = "/images/about/decor-right.png";
const bullets = [{ "title": "5 танцевальных направлений", "text": "От K-Pop до чирлидинга и хип-хопа", "image": "/images/about/about5.jpg" }, { "title": "Открытые мастер-классы", "text": "Со звездными танцорами и тренерами", "image": "/images/about/about2.jpg" }, { "title": "Конкурс среди танцоров", "text": "Соревнования танцевальных клубов", "image": "/images/about/about3.jpg" }, { "title": "Большой концерт", "text": "Выступления артистов и концерт NILETTO", "image": "/images/about/about4.jpg" }];
const aboutData = {
  type: type$7,
  title: title$8,
  paragraphs,
  decorLeft,
  decorRight,
  bullets
};
const type$6 = "map";
const title$7 = "Карта";
const subtitle = "Все площадки фестиваля на одной карте";
const buttons = [{ "text": "Построить маршрут", "link": "https://yandex.com/maps/-/CTV3MZJw" }];
const mapImage = "/images/map/map.webp";
const legend = [{ "number": 1, "name": "Главная сцена", "description": "мастер-классы, соревнования, выступление хедлайнера" }, { "number": 2, "name": "Зона чирлидинга и соревнования" }, { "number": 3, "name": "Зона современных танцев и пространство для батлов" }, { "number": 4, "name": "Акробатическая дорожка" }, { "number": 5, "name": "Каток" }, { "number": 6, "name": "Зона танцевального мэйкапа и кастомизация костюмов" }, { "number": 7, "name": "Место для судей" }, { "number": 8, "name": "Фотозоны" }, { "number": 9, "name": "Зона разминки" }, { "number": 10, "name": "Раздевалки" }];
const mapData = {
  type: type$6,
  title: title$7,
  subtitle,
  buttons,
  mapImage,
  legend
};
const title$6 = "расписание";
const tabs = [{ "name": "Главная сцена", "columns": 3, "events": [{ "title": "Мастер-класс по&nbsp;уличным танцам с&nbsp;участием певицы Нюши", "time": "11:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128185/" }, { "title": "Отборочные соревнования танцевальных клубов", "time": "12:30", "registration": true, "anchor": true, "link": "#dance" }, { "title": "КЕД концерт: танцевальное шоу от&nbsp;участников проекта &laquo;Танцы на&nbsp;ТНТ&raquo;", "time": "13:30", "registration": false }, { "title": "Отборочные соревнования танцевальных клубов", "time": "14:00", "registration": true, "anchor": true, "link": "#dance" }, { "title": "Мастер-класс с&nbsp;хореографом Артемом Глотовым и&nbsp;студией ART FORCE", "time": "15:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128187/" }, { "title": "Отборочные соревнования танцевальных клубов", "time": "16:00", "registration": true, "anchor": true, "link": "#dance" }, { "title": "Выступление солиста российского Театра танца Todes Ильдара Гайнутдинова", "time": "17:00", "registration": false }, { "title": "Соревнования танцевальных клубов: полуфинал 20&nbsp;команд", "time": "17:30", "registration": true, "anchor": true, "link": "#dance" }, { "title": "Соревнования танцевальных клубов: финал 10&nbsp;команд", "time": "18:10", "registration": true, "anchor": true, "link": "#dance" }, { "title": "Награждение победителей соревнований: танцы и&nbsp;чирлидинг", "time": "18:30", "registration": false }, { "title": "Массовый танец &laquo;Танцпол везде&raquo; с&nbsp;блогером и&nbsp;актрисой Анной Немченко", "time": "19:00", "registration": false }, { "title": "Концерт NILETTO", "time": "19:15", "registration": false }] }, { "name": "Малая сцена", "columns": 3, "events": [{ "title": "Proтанцы. Север: выступления команд и&nbsp;мастер-класс с&nbsp;Романом Суптели", "time": "11:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128188/" }, { "title": "Танцевальная студия GSS: мастер-класс по&nbsp;хип-хопу и&nbsp;показательные выступления", "time": "12:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128195/" }, { "title": "Танцевальная студия GSS: мастер-класс по&nbsp;кей-попу и&nbsp;показательные выступления", "time": "13:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128196/" }, { "title": "Танцевальная студия DANCO: показательный номер по&nbsp;кей-попу и&nbsp;мастер-класс", "time": "14:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128198/" }, { "title": "Аня Тихая и&nbsp;Егор Хлебников: мастер-класс по&nbsp;хип-хопу с&nbsp;участниками проекта &laquo;Танцы на&nbsp;ТНТ&raquo;", "time": "15:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128199/" }, { "title": "Ева Уварова: мастер-класс по&nbsp;контемпорари и&nbsp;сольное выступление", "time": "16:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128200/" }, { "title": "Ronin и&nbsp;Loony Boy: мастер-класс с&nbsp;участниками шоу &laquo;Танцы на&nbsp;ТНТ&raquo;", "time": "17:00", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128202/" }, { "title": "OBC crew: шоу-кейсы и&nbsp;мастер-класс с&nbsp;победителями международных чемпионатов по&nbsp;брейкингу", "time": "18:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128203/" }] }, { "name": "Зона чирлидинга", "columns": 3, "events": [{ "title": "Показательное выступление", "time": "12:00" }, { "title": "Соревнования чирлидеров", "time": "12:30", "registration": true, "anchor": true, "link": "#contest" }, { "title": "Показательное выступление", "time": "13:30", "registration": false }, { "title": "Соревнования чирлидеров", "time": "14:00", "registration": true, "anchor": true, "link": "#contest" }, { "title": "Показательное выступление", "time": "14:30", "registration": false }, { "title": "Соревнования чирлидеров", "time": "15:00", "registration": true, "anchor": true, "link": "#contest" }, { "title": "Показательное выступление", "time": "16:00" }, { "title": "Соревнования чирлидеров", "time": "16:30", "registration": true, "anchor": true, "link": "#contest" }, { "title": "Показательное выступление", "time": "17:30", "registration": false }, { "title": "Соревнования чирлидеров", "time": "18:00", "registration": true, "anchor": true, "link": "#contest" }] }, { "name": "Акробатическая дорожка", "columns": 4, "events": [{ "title": "Разминка", "time": "11:00", "registration": false }, { "title": "Показательные опорные прыжки", "time": "12:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "13:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "14:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "15:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "16:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "17:30", "registration": false }, { "title": "Показательные опорные прыжки", "time": "18:30", "registration": false }] }, { "name": "Каток", "columns": 3, "events": [{ "title": "Свободное катание", "time": "11:00", "registration": false }, { "title": "Свободное катание", "time": "12:30", "registration": false }, { "title": "Мастер-класс с&nbsp;фигуристами Александрой Бойковой и&nbsp;Дмитрием Козловским", "time": "14:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128204/" }, { "title": "Свободное катание", "time": "16:00", "registration": false }, { "title": "Свободное катание", "time": "18:00", "registration": false }, { "title": "Свободное катание", "time": "19:15", "registration": false }] }, { "name": "Кибер-бар", "columns": 3, "events": [{ "title": "Аквагрим, блестки и&nbsp;переводные татуировки для детей и&nbsp;взрослых", "time": "Весь день", "registration": false }, { "title": "Мастер-класс по&nbsp;созданию помпона", "time": "11:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128205/" }, { "title": "Кастомизация футболок", "time": "13:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128210/" }, { "title": "Мастер-класс по&nbsp;созданию помпона", "time": "15:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128206/" }, { "title": "Кастомизация футболок", "time": "17:30", "registration": true, "link": "https://fest-dance-cheerleading.timepad.ru/event/4128211/" }] }];
const scheduleData = {
  title: title$6,
  tabs
};
const type$5 = "clubs";
const title$5 = "Состязания чирлидинг-команд";
const text$1 = "Продемонстрируйте мощную энергетику и сложные элементы на главной арене фестиваля и поборитесь за призовой фонд";
const button$1 = { "link": "https://fest-dance-cheerleading.timepad.ru/event/4099869/", "text": "Подать заявку", "target": "_blank" };
const girl$1 = "/images/clubs/girl.png";
const titleImg$1 = "/images/clubs/title.svg";
const bg$1 = "/images/clubs/bg.png";
const decorTop$1 = "/images/clubs/decor-top.png";
const clubsData = {
  type: type$5,
  title: title$5,
  text: text$1,
  button: button$1,
  girl: girl$1,
  titleImg: titleImg$1,
  bg: bg$1,
  decorTop: decorTop$1
};
const type$4 = "dance";
const title$4 = "Конкурс танцевальных клубов";
const text = "Покажите свой номер на главной сцене фестиваля и поборитесь за победу в одной из пяти номинаций. Победителей определяет звездное жюри, а лучшие команды получают денежные призы";
const titleImg = "/images/dance/title.svg";
const button = { "link": "https://fest-dance-cheerleading.timepad.ru/event/4084236/", "text": "Подать заявку", "target": "_blank" };
const girl = "/images/dance/girls.png";
const bg = "/images/dance/bg.png";
const decorTop = "/images/dance/decor-top.png";
const danceData = {
  type: type$4,
  title: title$4,
  text,
  titleImg,
  button,
  girl,
  bg,
  decorTop
};
const type$3 = "nominations";
const title$3 = "Номинации";
const nominations = [{ "name": "Современный танец", "icon": "/images/shared/icon-main-stage.svg" }, { "name": "Спортивный танец", "icon": "/images/shared/icon-children.svg" }, { "name": "Уличный танец", "icon": "/images/shared/icon-stretch.svg" }, { "name": "Чирлидинг", "icon": "/images/shared/icon-cheerleading.svg" }];
const prizeLabel = "ПРИЗОВОЙ ФОНД";
const prizeAmount = "350 000 ₽";
const prizeNote = "команде-победителю в&nbsp;каждой номинации";
const nominationsData = {
  type: type$3,
  title: title$3,
  nominations,
  prizeLabel,
  prizeAmount,
  prizeNote
};
const type$2 = "locations";
const title$2 = "локации";
const timeBadge = "C 11:00 до 22:00";
const items$1 = [{ "name": "Зона разминки", "description": "Подготовка к мастер-классам и выступлениям", "icon": "/images/shared/icon-stretch.svg" }, { "name": "Зона чирлидинга", "description": "Показательные выступления и соревнования", "icon": "/images/shared/icon-cheerleading.svg" }, { "name": "Зона спортивных танцев", "description": "Хип-хоп, контемпорари, K-Pop, брейкин", "icon": "/images/shared/icon-children.svg" }, { "name": "Пространство для батлов", "description": "Соревнования среди любителей", "icon": "/images/shared/icon-swords.svg" }, { "name": "Мейкап и кастомизация костюмов", "description": "Бьюти-зона для создания танцевального образа", "icon": "/images/shared/icon-costumes.svg" }, { "name": "Зона мастер-классов на льду", "description": "Сеансы свободного катания и мастер-класс", "icon": "/images/shared/icon-ice.svg" }, { "name": "Фотозоны", "description": "Тематические локации для фотографий", "icon": "/images/shared/icon-photo.svg" }];
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
      const _component_AboutSection = _sfc_main$d;
      const _component_MapSection = _sfc_main$c;
      const _component_ScheduleSection = _sfc_main$b;
      const _component_ClubsSection = _sfc_main$9;
      const _component_NominationsSection = _sfc_main$7;
      const _component_LocationsSection = _sfc_main$6;
      const _component_PartnersSection = _sfc_main$5;
      const _component_Faq = __nuxt_component_7;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_sfc_main$2, normalizeProps(guardReactiveProps(unref(heroData))), null, 16),
        createVNode(_component_AboutSection, normalizeProps(guardReactiveProps(unref(aboutData))), null, 16),
        createVNode(_component_MapSection, normalizeProps(guardReactiveProps(unref(mapData))), null, 16),
        createVNode(_component_ScheduleSection, normalizeProps(guardReactiveProps(unref(scheduleData))), null, 16),
        createVNode(_sfc_main$1, normalizeProps(guardReactiveProps(unref(danceData))), null, 16),
        createVNode(_component_ClubsSection, normalizeProps(guardReactiveProps(unref(clubsData))), null, 16),
        createVNode(_component_NominationsSection, normalizeProps(guardReactiveProps(unref(nominationsData))), null, 16),
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
