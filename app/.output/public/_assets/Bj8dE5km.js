import { _ as _sfc_main$4 } from "./DxNTI2lQ.js";
import { _ as _sfc_main$5 } from "./0qfk64xl.js";
import { B as openBlock, C as createElementBlock, F as createVNode, G as withCtx, D as createBaseVNode, E as toDisplayString, I as Fragment, J as renderList, M as renderSlot, N as normalizeClass, O as createBlock, H as createTextVNode, A as useHead, K as normalizeProps, L as guardReactiveProps, l as unref } from "./CL6YHsGD.js";
const _hoisted_1$2 = {
  id: "about",
  class: "about"
};
const _hoisted_2$2 = { class: "about__title title" };
const _hoisted_3$1 = { class: "about__text" };
const _hoisted_4$1 = { class: "about__items" };
const _hoisted_5$1 = { class: "about__item-left" };
const _hoisted_6$1 = { class: "about__item-title" };
const _hoisted_7$1 = { class: "about__item-text" };
const _hoisted_8$1 = { class: "about__item-image-wrap" };
const _sfc_main$3 = {
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
      const _component_Image = _sfc_main$4;
      const _component_Container = _sfc_main$5;
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
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
            createBaseVNode("h2", _hoisted_2$2, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.paragraphs, (paragraph, index) => {
                return openBlock(), createElementBlock("p", { key: index }, toDisplayString(paragraph), 1);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.bullets, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: "about__item",
                  key: index
                }, [
                  createBaseVNode("div", _hoisted_5$1, [
                    createBaseVNode("div", _hoisted_6$1, toDisplayString(item.title), 1),
                    createBaseVNode("div", _hoisted_7$1, toDisplayString(item.text), 1)
                  ]),
                  createBaseVNode("div", _hoisted_8$1, [
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
const _hoisted_1$1 = ["href"];
const _hoisted_2$1 = ["disabled", "type"];
const _sfc_main$2 = {
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
      ], 10, _hoisted_1$1)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_2$1));
    };
  }
};
const _hoisted_1 = {
  id: "hero",
  class: "hero"
};
const _hoisted_2 = { class: "visually-hidden" };
const _hoisted_3 = { class: "hero__content" };
const _hoisted_4 = { class: "hero__info" };
const _hoisted_5 = { class: "hero__main" };
const _hoisted_6 = { class: "hero__logos" };
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "hero__date-wrapper tablet" };
const _hoisted_9 = { class: "hero__links" };
const _hoisted_10 = { class: "hero__right" };
const _hoisted_11 = { class: "hero__date-wrapper" };
const _sfc_main$1 = {
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
      const _component_Image = _sfc_main$4;
      const _component_Button = _sfc_main$2;
      const _component_Container = _sfc_main$5;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createBaseVNode("h1", _hoisted_2, toDisplayString(__props.title), 1),
        createBaseVNode("div", _hoisted_3, [
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
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
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
                      ], 8, _hoisted_7);
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
                      return openBlock(), createBlock(_component_Button, {
                        key: index,
                        class: normalizeClass(["hero__button", link.class]),
                        href: link.href
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(link.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["class", "href"]);
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
const type$1 = "hero";
const title$1 = "Фестиваль танцев и чирлидинга — 15 августа";
const links = [{ "text": "Смотреть программу", "class": "magenta", "href": "#programm" }, { "text": "Участвовать в конкурсе", "class": "white", "href": "#contest" }];
const logos = [{ "src": "/images/Hero/major.svg", "alt": "Проект мэра", "link": "https://www.mos.ru/city/projects/", "width": 97, "height": 49 }, { "src": "/images/Hero/summer.svg", "alt": "Лето в Москве", "link": "https://leto.mos.ru/", "width": 110, "height": 47 }, { "src": "/images/Hero/dep.svg", "alt": "Департамент Москвы", "link": "https://www.mos.ru/moskomsport/", "width": 138, "height": 47 }, { "src": "/images/Hero/mossport.svg", "alt": "Московский спорт", "link": "https://sport.mos.ru", "width": 164, "height": 49 }];
const images = { "decorLeft": "/images/Hero/decor-left.png", "decorTop": "/images/Hero/decor-top.png", "decorRight": "/images/Hero/decor-right.png", "mobileDecor": "/images/Hero/mobile-decor.png", "bg": "/images/Hero/bg.jpg", "logo": "/images/Hero/logo.svg", "dateDesktop": "/images/Hero/date.svg", "dateMobile": "/images/Hero/date-mobile.svg", "girl": "/images/Hero/girl.png", "girls": "/images/Hero/girls.png" };
const heroData = {
  type: type$1,
  title: title$1,
  links,
  logos,
  images
};
const type = "about";
const title = "О событии";
const paragraphs = ["На один день Лужники превратятся в большой танцпол под открытым небом", "Переходите между площадками, пробуйте новые направления, смотрите выступления и оставайтесь на вечерний концерт."];
const decorLeft = "/images/about/decor-left.png";
const decorRight = "/images/about/decor-right.png";
const bullets = [{ "title": "5 танцевальных направлений", "text": "От бальных танцев до чирлидинга и хип-хопа", "image": "/images/about/about1.jpg" }, { "title": "Открытые мастер-классы", "text": "Со звездными танцорами и тренерами", "image": "/images/about/about2.jpg" }, { "title": "Конкурс среди танцоров", "text": "Соревнования танцевальных клубов", "image": "/images/about/about3.jpg" }, { "title": "Большой концерт", "text": "Выступления артистов и концерт NILETTO", "image": "/images/about/about4.jpg" }];
const aboutData = {
  type,
  title,
  paragraphs,
  decorLeft,
  decorRight,
  bullets
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _cache) => {
      const _component_AboutSection = _sfc_main$3;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_sfc_main$1, normalizeProps(guardReactiveProps(unref(heroData))), null, 16),
        createVNode(_component_AboutSection, normalizeProps(guardReactiveProps(unref(aboutData))), null, 16)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
