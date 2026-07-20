import { _ as _sfc_main$3 } from "./hqowMvOn.js";
import { _ as _sfc_main$4 } from "./B59Upf_s.js";
import { B as openBlock, C as createElementBlock, D as createBaseVNode, E as toDisplayString, F as createVNode, G as withCtx, I as Fragment, J as renderList, A as useHead, K as normalizeProps, L as guardReactiveProps, l as unref } from "./BwZBAoix.js";
const _hoisted_1$1 = {
  id: "dummy",
  class: "dummy"
};
const _hoisted_2$1 = { class: "visually-hidden" };
const _hoisted_3$1 = { class: "dummy__top" };
const _hoisted_4$1 = { class: "dummy__logos" };
const _hoisted_5$1 = ["href"];
const _hoisted_6$1 = { class: "dummy__content" };
const _hoisted_7$1 = { class: "dummy__info" };
const _hoisted_8$1 = { class: "dummy__main" };
const _hoisted_9$1 = { class: "dummy__date-wrapper tablet" };
const _hoisted_10$1 = { class: "dummy__main-text" };
const _hoisted_11 = { class: "dummy__subtext" };
const _hoisted_12 = { class: "dummy__right" };
const _hoisted_13 = { class: "dummy__date-wrapper" };
const _sfc_main$2 = {
  __name: "DummyHeroSection",
  props: {
    title: { type: String, required: true },
    mainText: { type: String, default: "" },
    subText: { type: String, default: "" },
    logos: { type: Array, default: () => [] },
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
      const _component_Image = _sfc_main$3;
      const _component_Container = _sfc_main$4;
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createBaseVNode("h1", _hoisted_2$1, toDisplayString(__props.title), 1),
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4$1, [
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
                  ], 8, _hoisted_5$1);
                }), 128))
              ])
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createVNode(_component_Image, {
            class: "dummy__decor dummy__decor--left",
            src: __props.images.decorLeft,
            alt: "",
            width: "907",
            height: "940"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            class: "dummy__decor dummy__decor--top",
            src: __props.images.decorTop,
            alt: "",
            width: "859",
            height: "421"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            class: "dummy__decor dummy__decor--right",
            src: __props.images.decorRight,
            alt: "",
            width: "1031",
            height: "940"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            class: "dummy__mobile-decor",
            src: __props.images.mobileDecor,
            alt: "",
            width: "880",
            height: "947"
          }, null, 8, ["src"]),
          createVNode(_component_Image, {
            src: __props.images.bg,
            alt: "",
            class: "dummy__bg",
            width: "2216",
            height: "940"
          }, null, 8, ["src"]),
          createVNode(_component_Container, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("div", _hoisted_8$1, [
                  createVNode(_component_Image, {
                    class: "dummy__logo",
                    src: __props.images.logo,
                    alt: "",
                    width: "909",
                    height: "415"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_9$1, [
                    createVNode(_component_Image, {
                      src: __props.images.dateMobile,
                      alt: "",
                      class: "dummy__date",
                      width: "260",
                      height: "88"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(_component_Image, {
                    src: __props.images.girl,
                    alt: "",
                    class: "dummy__girl tablet",
                    width: "1523",
                    height: "1558"
                  }, null, 8, ["src"]),
                  createBaseVNode("div", _hoisted_10$1, [
                    createBaseVNode("span", null, toDisplayString(__props.mainText), 1)
                  ]),
                  createBaseVNode("div", _hoisted_11, toDisplayString(__props.subText), 1)
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_Image, {
                      src: __props.images.dateDesktop,
                      alt: "",
                      class: "dummy__date",
                      width: "431",
                      height: "145"
                    }, null, 8, ["src"])
                  ]),
                  createVNode(_component_Image, {
                    class: "dummy__girls",
                    src: __props.images.girls,
                    alt: "",
                    width: "971",
                    height: "765"
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
  id: "contest",
  class: "contest"
};
const _hoisted_2 = { class: "contest__content" };
const _hoisted_3 = { class: "contest__title" };
const _hoisted_4 = { class: "contest__text" };
const _hoisted_5 = ["href", "target"];
const _hoisted_6 = { class: "contest__title" };
const _hoisted_7 = { class: "contest__text" };
const _hoisted_8 = ["href", "target"];
const _hoisted_9 = { class: "contest__policy-links" };
const _hoisted_10 = ["href", "target"];
const _sfc_main$1 = {
  __name: "ContestSection",
  props: {
    title: { type: String, required: true },
    text: { type: String, default: "" },
    button: { type: Object, default: () => ({}) },
    title2: { type: String, required: true },
    text2: { type: String, default: "" },
    button2: { type: Object, default: () => ({}) },
    policyLinks: { type: Array, default: () => [] },
    images: {
      type: Object,
      default: () => ({
        ballLeft: "",
        ballRight: "",
        ballMobile: ""
      })
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$3;
      const _component_Container = _sfc_main$4;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Image, {
          class: "contest__decor contest__decor--left",
          src: __props.images.ballLeft,
          alt: "",
          width: "384",
          height: "372"
        }, null, 8, ["src"]),
        createVNode(_component_Image, {
          class: "contest__decor contest__decor--right",
          src: __props.images.ballRight,
          alt: "",
          width: "727",
          height: "484"
        }, null, 8, ["src"]),
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", _hoisted_3, toDisplayString(__props.title), 1),
              createBaseVNode("div", _hoisted_4, toDisplayString(__props.text), 1),
              createBaseVNode("a", {
                href: __props.button.link,
                class: "button contest__link",
                target: __props.button.target || "_self"
              }, toDisplayString(__props.button.text), 9, _hoisted_5),
              createBaseVNode("h2", _hoisted_6, toDisplayString(__props.title2), 1),
              createBaseVNode("div", _hoisted_7, toDisplayString(__props.text2), 1),
              createBaseVNode("a", {
                href: __props.button2.link,
                class: "button contest__link",
                target: __props.button2.target || "_self"
              }, toDisplayString(__props.button2.text), 9, _hoisted_8),
              createBaseVNode("div", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.policyLinks, (link, index) => {
                  return openBlock(), createElementBlock("a", {
                    key: index,
                    href: link.href,
                    target: link.target
                  }, toDisplayString(link.text), 9, _hoisted_10);
                }), 128))
              ])
            ]),
            createVNode(_component_Image, {
              class: "contest__mobile-decor",
              src: __props.images.ballMobile,
              alt: "",
              width: "750",
              height: "473"
            }, null, 8, ["src"])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const type$1 = "dummy";
const title$1 = "Фестиваль танцев и чирлидинга — 15 августа";
const mainText = "На один день Лужники превратятся в большой танцпол под открытым небом.";
const subText = "Скоро на сайте появится больше информации, расписание и подробности по всем активностям. Следите за обновлениями — будет интересно! С другими событиями вы можете ознакомиться на портале Московского спорта.";
const logos = [{ "src": "/images/dummy/major.svg", "alt": "Проект мэра", "link": "https://www.mos.ru/city/projects/", "width": 96, "height": 49 }, { "src": "/images/dummy/summer.svg", "alt": "Лето в Москве", "link": "https://leto.mos.ru/", "width": 110, "height": 47 }, { "src": "/images/dummy/dep.svg", "alt": "Департамент Москвы", "link": "https://www.mos.ru/moskomsport/", "width": 138, "height": 47 }, { "src": "/images/dummy/mossport.svg", "alt": "Московский спорт", "link": "https://sport.mos.ru", "width": 164, "height": 49 }];
const images$1 = { "decorLeft": "/images/dummy/decor-left.png", "decorTop": "/images/dummy/decor-top.png", "decorRight": "/images/dummy/decor-right.png", "mobileDecor": "/images/dummy/mobile-decor.png", "bg": "/images/dummy/bg.jpg", "logo": "/images/dummy/logo.svg", "dateDesktop": "/images/dummy/date.svg", "dateMobile": "/images/dummy/date-mobile.svg", "girl": "/images/dummy/girl.png", "girls": "/images/dummy/girls.png" };
const dummyData = {
  type: type$1,
  title: title$1,
  mainText,
  subText,
  logos,
  images: images$1
};
const type = "contest";
const title = "Конкурс танцевальных клубов";
const text = "Танцуете в команде? Покажите свой номер на главной сцене фестиваля, поборитесь за победу и призовой фонд!";
const title2 = "Состязания чирлидинг-команд";
const text2 = "Выступаете в чирлидинге? Продемонстрируйте мощную энергетику и сложные элементы на главной арене фестиваля и поборитесь за призовой фонд.";
const button = { "text": "Подать заявку", "link": "https://fest-dance-cheerleading.timepad.ru/event/4084236/", "target": "_blank" };
const button2 = { "text": "Подать заявку", "link": "#", "target": "_blank" };
const policyLinks = [{ "text": "Политика конфиденциальности", "href": "/docs/policy.pdf", "target": "_blank" }, { "text": "Регламент соревнований", "href": "/docs/reglament.pdf", "target": "_blank" }];
const images = { "ballLeft": "/images/contest/ball-left.png", "ballRight": "/images/contest/ball-right.png", "ballMobile": "/images/contest/ball-mobile.png" };
const contestData = {
  type,
  title,
  text,
  title2,
  text2,
  button,
  button2,
  policyLinks,
  images
};
const _sfc_main = {
  __name: "dummy",
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _cache) => {
      const _component_DummyHeroSection = _sfc_main$2;
      const _component_ContestSection = _sfc_main$1;
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
