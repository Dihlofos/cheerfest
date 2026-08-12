import { _ as _sfc_main$5, a as _sfc_main$6 } from "./B0QJFT1w.js";
import { N as resolveDirective, B as openBlock, C as createElementBlock, D as createBaseVNode, l as unref, R as createBlock, I as Fragment, J as renderList, Q as withDirectives, H as createTextVNode, E as toDisplayString, F as createVNode, O as normalizeClass, i as ref, o as onMounted, Z as onUnmounted, G as withCtx, d as defineComponent, $ as vShow, S as renderSlot } from "./BISDYB7G.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const navItems = [{ "label": "О событии ", "link": "#about" }, { "label": "Карта", "link": "#map" }, { "label": "Расписание", "link": "#schedule" }, { "label": "Конкурс", "link": "#dance" }, { "label": "Локации", "link": "#locations" }, { "label": "Вопросы и ответы", "link": "#faq" }, { "label": "Контакты", "link": "#footer" }];
const images = { "burger": "/images/burger.svg", "close": "/images/close.svg", "girls": "/images/hero/girls.png" };
const _hoisted_1$4 = { class: "nav__overlay" };
const _hoisted_2$2 = { class: "nav__list" };
const _hoisted_3$1 = ["href"];
const _sfc_main$4 = {
  __name: "Navigation",
  setup(__props) {
    const mobileOpen = ref(false);
    function toggleMobile() {
      mobileOpen.value = !mobileOpen.value;
    }
    function closeMobile() {
      mobileOpen.value = false;
    }
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$5;
      const _directive_anchor = resolveDirective("anchor");
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["nav", { "nav--open": unref(mobileOpen) }])
      }, [
        createBaseVNode("button", {
          class: "nav__toggle",
          onClick: toggleMobile,
          "aria-label": "Меню"
        }, [
          !unref(mobileOpen) ? (openBlock(), createBlock(_component_Image, {
            key: 0,
            src: unref(images).burger,
            alt: "Открыть меню",
            width: "44",
            height: "44"
          }, null, 8, ["src"])) : (openBlock(), createBlock(_component_Image, {
            key: 1,
            src: unref(images).close,
            alt: "Закрыть меню",
            width: "35",
            height: "35"
          }, null, 8, ["src"]))
        ]),
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("ul", _hoisted_2$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navItems), (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.link,
                class: "nav__item"
              }, [
                withDirectives((openBlock(), createElementBlock("a", {
                  href: item.link,
                  class: "nav__link",
                  onClick: closeMobile
                }, [
                  createTextVNode(toDisplayString(item.label), 1)
                ], 8, _hoisted_3$1)), [
                  [_directive_anchor]
                ])
              ]);
            }), 128))
          ]),
          createVNode(_component_Image, {
            class: "nav__girls",
            src: unref(images).girls,
            alt: "",
            width: "888",
            height: "662"
          }, null, 8, ["src"])
        ])
      ], 2);
    };
  }
};
const _hoisted_1$3 = { class: "header__inner" };
const _sfc_main$3 = {
  __name: "Header",
  setup(__props) {
    const scrolled = ref(false);
    function onScroll() {
      scrolled.value = window.scrollY > 50;
    }
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
    return (_ctx, _cache) => {
      const _component_Navigation = _sfc_main$4;
      const _component_Container = _sfc_main$6;
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["header", { "header--scrolled": unref(scrolled) }])
      }, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$3, [
              createVNode(_component_Navigation)
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6865a282"]]);
const type = "footer";
const title = "Контакты";
const contacts = [{ "label": "По вопросам регистрации", "email": "ano@mossport.ru" }, { "label": "Для СМИ", "email": "press@moscow.sport" }];
const info = { "text": "Для аккредитации на событие отправьте письмо на электронный адрес со следующей информацией:", "items": ["название СМИ и программы, планируемая дата выхода материала;", "ФИО корреспондента / всех участников съемочной группы с контактными телефонами."] };
const socials = [{ "icon": "/images/footer/icon-tg.svg", "href": "https://t.me/MoscowSportOfficial", "alt": "Telegram" }, { "icon": "/images/footer/icon-vk.svg", "href": "https://vk.com/moscowsportofficial ", "alt": "VK" }, { "icon": "/images/footer/icon-rutube.svg", "href": "https://rutube.ru/channel/24673075/", "alt": "Rutube" }, { "icon": "/images/footer/icon-max.svg", "href": "https://max.ru/MoscowSport", "alt": "Max" }];
const docs = [{ "href": "/docs/policy.pdf", "label": "Политика конфиденциальности" }, { "href": "/docs/agreement.pdf", "label": "Отказ от претензий" }, { "href": "/docs/agreement-child.pdf", "label": "Отказ от претензий ребенка" }, { "href": "/docs/reglament3.pdf", "label": "Регламент соревнований" }];
const footerData = {
  type,
  title,
  contacts,
  info,
  socials,
  docs
};
const _hoisted_1$2 = {
  class: "footer",
  id: "footer"
};
const _hoisted_2$1 = { class: "footer__wrapper" };
const _hoisted_3 = { class: "footer__content" };
const _hoisted_4 = { class: "footer__title" };
const _hoisted_5 = { class: "footer__contacts" };
const _hoisted_6 = { class: "footer__contacts-label" };
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "footer__info" };
const _hoisted_9 = { class: "footer__info-text" };
const _hoisted_10 = { class: "footer__bottom" };
const _hoisted_11 = { class: "footer__socials" };
const _hoisted_12 = ["href"];
const _hoisted_13 = ["src", "alt"];
const _hoisted_14 = { class: "footer__docs" };
const _hoisted_15 = ["href"];
const _sfc_main$2 = {
  __name: "Footer",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Container = _sfc_main$6;
      return openBlock(), createElementBlock("footer", _hoisted_1$2, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "footer__bg" }, null, -1)),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "footer__overlay" }, null, -1)),
        createVNode(_component_Container, { wide: "" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, toDisplayString(unref(footerData).title), 1),
                createBaseVNode("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).contacts, (contact) => {
                    return openBlock(), createElementBlock("div", {
                      key: contact.email,
                      class: "footer__contacts-item"
                    }, [
                      createBaseVNode("div", _hoisted_6, toDisplayString(contact.label), 1),
                      createBaseVNode("a", {
                        href: "mailto:" + contact.email,
                        target: "_blank",
                        class: "footer__contacts-link"
                      }, toDisplayString(contact.email), 9, _hoisted_7)
                    ]);
                  }), 128))
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("p", _hoisted_9, toDisplayString(unref(footerData).info.text), 1),
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).info.items, (item, i) => {
                      return openBlock(), createElementBlock("li", { key: i }, toDisplayString(item), 1);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).socials, (social) => {
                      return openBlock(), createElementBlock("a", {
                        key: social.alt,
                        href: social.href,
                        target: "_blank",
                        class: "footer__socials-link"
                      }, [
                        createBaseVNode("img", {
                          src: social.icon,
                          alt: social.alt,
                          class: "footer__socials-icon"
                        }, null, 8, _hoisted_13)
                      ], 8, _hoisted_12);
                    }), 128))
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).docs, (doc) => {
                      return openBlock(), createElementBlock("a", {
                        key: doc.href,
                        href: doc.href,
                        target: "_blank",
                        class: "footer__docs-link"
                      }, toDisplayString(doc.label), 9, _hoisted_15);
                    }), 128))
                  ])
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-227fb415"]]);
const _hoisted_1$1 = { class: "cookie-modal" };
const STORAGE_KEY = "cheerfest-cookie-modal-shown";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CookieModal",
  setup(__props) {
    const isVisible = ref(false);
    onMounted(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        isVisible.value = true;
      }
    });
    function accept() {
      isVisible.value = false;
      localStorage.setItem(STORAGE_KEY, "true");
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "cookie-modal__text" }, [
          createBaseVNode("p", null, " Продолжая пользоваться сайтом, вы соглашаетесь с условиями обработки cookie-файлов. Это необходимо для качественной работы сайта. Если вы не согласны, то установите специальные настройки в браузере. ")
        ], -1)),
        createBaseVNode("button", {
          class: "cookie-modal__close",
          onClick: accept
        }, " Ok ")
      ], 512)), [
        [vShow, isVisible.value]
      ]);
    };
  }
});
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3c2c8c69"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "page" };
const _hoisted_2 = { class: "top" };
function _sfc_render(_ctx, _cache) {
  const _component_Image = _sfc_main$5;
  const _component_Header = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  const _component_CookieModal = __nuxt_component_3;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Image, {
      class: "body-bg",
      src: "/images/bg.svg",
      alt: "",
      width: "1920",
      height: "10264"
    }),
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_Header)
    ]),
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    createVNode(_component_Footer),
    createVNode(_component_CookieModal)
  ]);
}
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2dbc6084"]]);
export {
  _default as default
};
