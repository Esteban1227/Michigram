/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  var e = {
      824: (e) => {
        var t, n, i;
        e.exports =
          ((n = String.prototype.split),
          (i = /()??/.exec("")[1] === t),
          function (e, o, a) {
            if ("[object RegExp]" !== Object.prototype.toString.call(o))
              return n.call(e, o, a);
            var r,
              s,
              c,
              l,
              d = [],
              u =
                (o.ignoreCase ? "i" : "") +
                (o.multiline ? "m" : "") +
                (o.extended ? "x" : "") +
                (o.sticky ? "y" : ""),
              f = 0;
            for (
              o = new RegExp(o.source, u + "g"),
                e += "",
                i || (r = new RegExp("^" + o.source + "$(?!\\s)", u)),
                a = a === t ? -1 >>> 0 : a >>> 0;
              (s = o.exec(e)) &&
              !(
                (c = s.index + s[0].length) > f &&
                (d.push(e.slice(f, s.index)),
                !i &&
                  s.length > 1 &&
                  s[0].replace(r, function () {
                    for (var e = 1; e < arguments.length - 2; e++)
                      arguments[e] === t && (s[e] = t);
                  }),
                s.length > 1 &&
                  s.index < e.length &&
                  Array.prototype.push.apply(d, s.slice(1)),
                (l = s[0].length),
                (f = c),
                d.length >= a)
              );

            )
              o.lastIndex === s.index && o.lastIndex++;
            return (
              f === e.length
                ? (!l && o.test("")) || d.push("")
                : d.push(e.slice(f)),
              d.length > a ? d.slice(0, a) : d
            );
          });
      },
      71: (e, t, n) => {
        var i = n(355);
        function o(e) {
          return !!e;
        }
        e.exports = function (e) {
          var t = e.classList;
          if (t) return t;
          var n = {
            add: a,
            remove: r,
            contains: s,
            toggle: function (e) {
              return s(e) ? (r(e), !1) : (a(e), !0);
            },
            toString: function () {
              return e.className;
            },
            length: 0,
            item: function (e) {
              return c()[e] || null;
            },
          };
          return n;
          function a(e) {
            var t = c();
            i(t, e) > -1 || (t.push(e), l(t));
          }
          function r(e) {
            var t = c(),
              n = i(t, e);
            -1 !== n && (t.splice(n, 1), l(t));
          }
          function s(e) {
            return i(c(), e) > -1;
          }
          function c() {
            return (function (e, t) {
              for (var n = [], i = 0; i < e.length; i++)
                t(e[i]) && n.push(e[i]);
              return n;
            })(e.className.split(" "), o);
          }
          function l(t) {
            var i = t.length;
            (e.className = t.join(" ")), (n.length = i);
            for (var o = 0; o < t.length; o++) n[o] = t[o];
            delete t[i];
          }
        };
      },
      789: (e, t, n) => {
        var i = n(824),
          o = n(71),
          a = "undefined" == typeof window ? n(525) : window,
          r = a.document,
          s = a.Text;
        function c() {
          var e = [];
          function t() {
            var t = [].slice.call(arguments),
              n = null;
            function a(t) {
              var c, f;
              if (null == t);
              else if ("string" == typeof t)
                n
                  ? n.appendChild((c = r.createTextNode(t)))
                  : ((f = i(t, /([\.#]?[^\s#.]+)/)),
                    /^\.|#/.test(f[1]) && (n = r.createElement("div")),
                    d(f, function (e) {
                      var t = e.substring(1, e.length);
                      e &&
                        (n
                          ? "." === e[0]
                            ? o(n).add(t)
                            : "#" === e[0] && n.setAttribute("id", t)
                          : (n = r.createElement(e)));
                    }));
              else if (
                "number" == typeof t ||
                "boolean" == typeof t ||
                t instanceof Date ||
                t instanceof RegExp
              )
                n.appendChild((c = r.createTextNode(t.toString())));
              else if (u(t)) d(t, a);
              else if (l(t)) n.appendChild((c = t));
              else if (t instanceof s) n.appendChild((c = t));
              else if ("object" == typeof t)
                for (var m in t)
                  if ("function" == typeof t[m])
                    /^on\w+/.test(m)
                      ? (function (t, i) {
                          n.addEventListener
                            ? (n.addEventListener(t.substring(2), i[t], !1),
                              e.push(function () {
                                n.removeEventListener(t.substring(2), i[t], !1);
                              }))
                            : (n.attachEvent(t, i[t]),
                              e.push(function () {
                                n.detachEvent(t, i[t]);
                              }));
                        })(m, t)
                      : ((n[m] = t[m]()),
                        e.push(
                          t[m](function (e) {
                            n[m] = e;
                          })
                        ));
                  else if ("style" === m)
                    if ("string" == typeof t[m]) n.style.cssText = t[m];
                    else
                      for (var h in t[m])
                        !(function (i, o) {
                          if ("function" == typeof o)
                            n.style.setProperty(i, o()),
                              e.push(
                                o(function (e) {
                                  n.style.setProperty(i, e);
                                })
                              );
                          else var a = t[m][i].match(/(.*)\W+!important\W*$/);
                          a
                            ? n.style.setProperty(i, a[1], "important")
                            : n.style.setProperty(i, t[m][i]);
                        })(h, t[m][h]);
                  else if ("attrs" === m)
                    for (var p in t[m]) n.setAttribute(p, t[m][p]);
                  else
                    "data-" === m.substr(0, 5)
                      ? n.setAttribute(m, t[m])
                      : (n[m] = t[m]);
              else
                "function" == typeof t &&
                  ((p = t()),
                  n.appendChild((c = l(p) ? p : r.createTextNode(p))),
                  e.push(
                    t(function (e) {
                      l(e) && c.parentElement
                        ? (c.parentElement.replaceChild(e, c), (c = e))
                        : (c.textContent = e);
                    })
                  ));
              return c;
            }
            for (; t.length; ) a(t.shift());
            return n;
          }
          return (
            (t.cleanup = function () {
              for (var t = 0; t < e.length; t++) e[t]();
              e.length = 0;
            }),
            t
          );
        }
        function l(e) {
          return e && e.nodeName && e.nodeType;
        }
        function d(e, t) {
          if (e.forEach) return e.forEach(t);
          for (var n = 0; n < e.length; n++) t(e[n], n);
        }
        function u(e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        }
        (e.exports = c()).context = c;
      },
      355: (e) => {
        var t = [].indexOf;
        e.exports = function (e, n) {
          if (t) return e.indexOf(n);
          for (var i = 0; i < e.length; ++i) if (e[i] === n) return i;
          return -1;
        };
      },
      525: () => {},
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var a = (t[i] = { exports: {} });
    return e[i](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = [...document.querySelectorAll(".nav__right--containerCounter")],
        t = document.getElementById("iconLogo"),
        i = document.getElementById("randomMichis"),
        o = document.getElementById("favoriteMichis"),
        a = document.getElementById("menuMobilContainer"),
        r = document.getElementById("btnMenuMobile"),
        s = document.getElementById("btnMenuMobileClose"),
        c = [...document.querySelectorAll(".nav__right--iconHome")],
        l = [...document.querySelectorAll(".nav__right--iconFav")];
      function d() {
        const e = document.documentElement.scrollTop || document.body.scrollTop;
        e > 0 &&
          (window.requestAnimationFrame(d), window.scrollTo(0, e - e / 5));
      }
      function u(e) {
        a.classList.remove("inactive"),
          a.classList.add("fadeInDown"),
          a.classList.remove("fadeInUp"),
          r.removeEventListener("click", u),
          r.addEventListener("click", f),
          (s.style.display = "block"),
          (r.style.display = "none");
      }
      function f(e) {
        "btnMenuMobile" !== e.target.id &&
          "menuMobilContainer" !== e.target.id &&
          (a.classList.remove("fadeInDown"),
          a.classList.add("fadeInUp"),
          r.removeEventListener("click", f),
          r.addEventListener("click", u),
          (s.style.display = "none"),
          (r.style.display = "block"),
          setTimeout(() => {
            a.classList.add("inactive");
          }, 500));
      }
      function m() {
        location.hash.startsWith("#favorite")
          ? (d(),
            i.classList.add("inactive"),
            o.classList.remove("inactive"),
            i.classList.remove("smoothTopToBottom"))
          : location.hash.startsWith("#home") &&
            (d(), i.classList.remove("inactive"), o.classList.add("inactive"));
      }
      r.addEventListener("click", u),
        l.forEach((e) => {
          e.addEventListener("click", (e) => {
            e.preventDefault(), (location.hash = "favorite"), d(), f(e);
          });
        }),
        c.forEach((e) => {
          e.addEventListener("click", (e) => {
            e.preventDefault(), (location.hash = "home"), d(), f(e);
          });
        }),
        t.addEventListener("click", (e) => {
          e.preventDefault(), (location.hash = "home"), d(), f(e);
        }),
        document.body.addEventListener("click", (e) => f(e)),
        document.body.addEventListener("keyup", (e) => {
          27 === e.keyCode && f(e);
        });
      const h = "https://api.thecatapi.com/v1",
        p = "53747e00-36d1-4c03-b6a6-5c31dfb1157e";
      function v(e, t) {
        return Math.floor(Math.random() * (t - e)) + e;
      }
      var g = n(789),
        y = n.n(g);
      async function _() {
        const e = await fetch(`${h}/favourites`, {
            method: "GET",
            headers: { "X-API-KEY": p },
          }),
          t = await e.json();
        (o.innerHTML = ""),
          o.append(
            y()(
              "div.mainContainerFavorites__container-h2",
              y()("h2", "Tus Michis Favoritos:")
            )
          );
        const n = [],
          i = [];
        t.forEach((e) => {
          i.includes(e.image_id)
            ? console.log("ya esta el michi")
            : i.push(e.image_id);
        }),
          console.log(i),
          0 === t.length
            ? o.append(
                y()(
                  "div.mainContainerFavorites__noMichi",
                  y()("img.mainContainerFavorites__noMichi--imgMichiSad", {
                    src: "./assets/image/emojione_crying-cat-face.svg",
                    alt: "Emoji de michi triste",
                  }),
                  y()(
                    "span.mainContainerFavorites__noMichi--spanText",
                    "Al parecer no tienes ningun michi favorito"
                  ),
                  y()(
                    "button.mainContainerFavorites__noMichi--btn",
                    "Buscar Michis",
                    {
                      onclick: function () {
                        (location.hash = "home"), d();
                      },
                    }
                  )
                )
              )
            : (t.forEach((e) => {
                n.push(
                  ((e) =>
                    y()(
                      "article",
                      {
                        classList:
                          "mainContainer__containerCard mainContainer__containerCards--cardFav",
                      },
                      y()(
                        "div",
                        {
                          classList:
                            "mainContainer__containerInfoUser mainContainer__infoUser--flex-end",
                        },
                        y()("img", {
                          classList:
                            "mainContainer__containerInfoUser--iconDelete iconSizeBig",
                          src: "./assets/image/ant-design_delete-filled.svg",
                          alt: "Icono de borrar tus michis favoritos",
                          onclick: () => {
                            !(async function (e) {
                              const t = await fetch(
                                ((e) =>
                                  `https://api.thecatapi.com/v1/favourites/${e}`)(
                                  e
                                ),
                                {
                                  method: "DELETE",
                                  headers: { "X-API-KEY": p },
                                }
                              );
                              await t.json(), _();
                            })(e.id);
                          },
                        })
                      ),
                      y()(
                        "div",
                        {
                          classList:
                            "mainContainer__containerImgUser mainContainer__containerImgUser--height",
                        },
                        y()("img", {
                          classList:
                            "mainContainer__containerImgUser--imgMichi mainContainer__containerImgUser--imgMichi--size",
                          src: `${e.image.url}`,
                          alt: "Foto de michi en favoritos",
                          loading: "lazi",
                        })
                      )
                    ))(e)
                );
              }),
              o.append(...n)),
          ((e) => {
            const t = document.querySelectorAll(".counterFav"),
              n = [];
            n.push(...t),
              n.forEach((t) => {
                t.innerHTML = e.length;
              });
          })(n);
      }
      addEventListener;
      const E = (e) => e.isIntersecting,
        L = (e) => {
          const t = e.target,
            n = e.target.getAttribute("data-set");
          e.target.setAttribute("src", n), b.unobserve(t);
        },
        b = new IntersectionObserver((e) => {
          e.filter(E).forEach(L);
        });
      window.addEventListener("DOMContentLoaded", m, !1),
        window.addEventListener("hashchange", m, !1),
        (location.hash = ""),
        (async function () {
          const t = await fetch(`${h}/images/search?limit=10`, {
              method: "GET",
              headers: { "X-API-KEY": p },
            }),
            n = await t.json(),
            o = await fetch(
              "https://randomuser.me/api/1.3/?results=20&inc=name,picture"
            ),
            { results: a } = await o.json();
          i.innerHTML = "";
          const r = [];
          n.forEach((t) => {
            r.push(
              ((t, n) =>
                y()(
                  "article.mainContainer__containerCard",
                  y()(
                    "div.mainContainer__containerInfoUser",
                    y()("img.mainContainer__containerInfoUser--iconUser", {
                      src: `${n[v(1, 20)].picture.thumbnail}`,
                      alt: "Icono del usuario",
                    }),
                    y()(
                      "span.mainContainer__containerInfoUser--nameUser",
                      `${n[v(1, 20)].name.first}`
                    )
                  ),
                  y()(
                    "div.mainContainer__containerImgUser",
                    y()("img.mainContainer__containerImgUser--imgMichi", {
                      "data-set": `${t.url}`,
                      alt: "Foto de michi",
                    })
                  ),
                  y()(
                    "div.mainContainer__containerButtons",
                    y()("img", {
                      classList:
                        "mainContainer__containerButtons--iconLike iconSizeBig",
                      src: "./assets/image/heartLikeVector.svg",
                      alt: "Icono para darle like a la foto del michi",
                    }),
                    y()("img", {
                      classList:
                        "mainContainer__containerButtons--iconFav iconSizeBig",
                      src: "./assets/image/saveVector.svg",
                      alt: "Icono para darle like a la foto del michi",
                      onclick: () => {
                        !(async function (e) {
                          const t = await fetch(`${h}/favourites`, {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                                "X-API-KEY": p,
                              },
                              body: JSON.stringify({ image_id: e }),
                            }),
                            n = await t.json();
                          console.log(n), _();
                        })(t.id),
                          e.forEach((e) => {
                            e.classList.add("hardMoveRotate"),
                              setTimeout(() => {
                                e.classList.remove("hardMoveRotate");
                              }, 1500);
                          });
                      },
                    })
                  )
                ))(t, a)
            );
          }),
            r.forEach((e) => {
              const t = e.children[1].children[0];
              t.addEventListener("error", () => {
                t.setAttribute("src", "./assets/images/image0011.jpg");
              }),
                ((e) => {
                  b.observe(e);
                })(t);
            }),
            i.append(...r);
        })(),
        _();
    })();
})();
