!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 39));
})([
  function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        Function("return this")();
    }.call(this, n(47)));
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    var i = n(1);
    e.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    var i = n(3),
      r = n(6),
      o = n(20);
    e.exports = i
      ? function (e, t, n) {
          return r.f(e, t, o(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var i = n(3),
      r = n(25),
      o = n(7),
      a = n(24),
      s = Object.defineProperty;
    t.f = i
      ? s
      : function (e, t, n) {
          if ((o(e), (t = a(t, !0)), o(n), r))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var i = n(4);
    e.exports = function (e) {
      if (!i(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  },
  function (e, t, n) {
    var i = n(0),
      r = n(19).f,
      o = n(5),
      a = n(49),
      s = n(10),
      l = n(53),
      c = n(59);
    e.exports = function (e, t) {
      var n,
        u,
        d,
        T,
        h,
        f = e.target,
        S = e.global,
        b = e.stat;
      if ((n = S ? i : b ? i[f] || s(f, {}) : (i[f] || {}).prototype))
        for (u in t) {
          if (
            ((T = t[u]),
            (d = e.noTargetGet ? (h = r(n, u)) && h.value : n[u]),
            !c(S ? u : f + (b ? "." : "#") + u, e.forced) && void 0 !== d)
          ) {
            if (typeof T == typeof d) continue;
            l(T, d);
          }
          (e.sham || (d && d.sham)) && o(T, "sham", !0), a(n, u, T, e);
        }
    };
  },
  function (e, t, n) {
    var i = n(21),
      r = n(23);
    e.exports = function (e) {
      return i(r(e));
    };
  },
  function (e, t, n) {
    var i = n(0),
      r = n(5);
    e.exports = function (e, t) {
      try {
        r(i, e, t);
      } catch (n) {
        i[e] = t;
      }
      return t;
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var i = n(55),
      r = n(0),
      o = function (e) {
        return "function" == typeof e ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2
        ? o(i[e]) || o(r[e])
        : (i[e] && i[e][t]) || (r[e] && r[e][t]);
    };
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t, n) {
    var i = n(0),
      r = n(30),
      o = n(2),
      a = n(31),
      s = n(38),
      l = n(65),
      c = r("wks"),
      u = i.Symbol,
      d = l ? u : (u && u.withoutSetter) || a;
    e.exports = function (e) {
      return (
        o(c, e) || (s && o(u, e) ? (c[e] = u[e]) : (c[e] = d("Symbol." + e))),
        c[e]
      );
    };
  },
  function (e, t, n) {
    var i = n(3),
      r = n(1),
      o = n(2),
      a = Object.defineProperty,
      s = {},
      l = function (e) {
        throw e;
      };
    e.exports = function (e, t) {
      if (o(s, e)) return s[e];
      t || (t = {});
      var n = [][e],
        c = !!o(t, "ACCESSORS") && t.ACCESSORS,
        u = o(t, 0) ? t[0] : l,
        d = o(t, 1) ? t[1] : void 0;
      return (s[e] =
        !!n &&
        !r(function () {
          if (c && !i) return !0;
          var e = { length: -1 };
          c ? a(e, 1, { enumerable: !0, get: l }) : (e[1] = 1), n.call(e, u, d);
        }));
    };
  },
  function (e, t, n) {
    var i = n(0),
      r = n(37),
      o = Function.call;
    e.exports = function (e, t, n) {
      return r(o, i[e].prototype[t], n);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                i = e[3];
              if (!i) return n;
              if (t && "function" == typeof btoa) {
                var r =
                    ((a = i),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                      " */"),
                  o = i.sources.map(function (e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */";
                  });
                return [n].concat(o).concat([r]).join("\n");
              }
              var a;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var i = {}, r = 0; r < this.length; r++) {
            var o = this[r][0];
            null != o && (i[o] = !0);
          }
          for (r = 0; r < e.length; r++) {
            var a = e[r];
            (null != a[0] && i[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              t.push(a));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    var i,
      r,
      o = {},
      a =
        ((i = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === r && (r = i.apply(this, arguments)), r;
        }),
      s = function (e, t) {
        return t ? t.querySelector(e) : document.querySelector(e);
      },
      l = (function (e) {
        var t = {};
        return function (e, n) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var i = s.call(this, e, n);
            if (
              window.HTMLIFrameElement &&
              i instanceof window.HTMLIFrameElement
            )
              try {
                i = i.contentDocument.head;
              } catch (e) {
                i = null;
              }
            t[e] = i;
          }
          return t[e];
        };
      })(),
      c = null,
      u = 0,
      d = [],
      T = n(85);
    function h(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n],
          r = o[i.id];
        if (r) {
          r.refs++;
          for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
          for (; a < i.parts.length; a++) r.parts.push(m(i.parts[a], t));
        } else {
          var s = [];
          for (a = 0; a < i.parts.length; a++) s.push(m(i.parts[a], t));
          o[i.id] = { id: i.id, refs: 1, parts: s };
        }
      }
    }
    function f(e, t) {
      for (var n = [], i = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          a = t.base ? o[0] + t.base : o[0],
          s = { css: o[1], media: o[2], sourceMap: o[3] };
        i[a] ? i[a].parts.push(s) : n.push((i[a] = { id: a, parts: [s] }));
      }
      return n;
    }
    function S(e, t) {
      var n = l(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var i = d[d.length - 1];
      if ("top" === e.insertAt)
        i
          ? i.nextSibling
            ? n.insertBefore(t, i.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          d.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n ()\n"
          );
        var r = l(e.insertAt.before, n);
        n.insertBefore(t, r);
      }
    }
    function b(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = d.indexOf(e);
      t >= 0 && d.splice(t, 1);
    }
    function p(e) {
      var t = document.createElement("style");
      if (
        (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce)
      ) {
        var i = (function () {
          0;
          return n.nc;
        })();
        i && (e.attrs.nonce = i);
      }
      return g(t, e.attrs), S(e, t), t;
    }
    function g(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }
    function m(e, t) {
      var n, i, r, o;
      if (t.transform && e.css) {
        if (
          !(o =
            "function" == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function () {};
        e.css = o;
      }
      if (t.singleton) {
        var a = u++;
        (n = c || (c = p(t))),
          (i = A.bind(null, n, a, !1)),
          (r = A.bind(null, n, a, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function (e) {
              var t = document.createElement("link");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                g(t, e.attrs),
                S(e, t),
                t
              );
            })(t)),
            (i = G.bind(null, n, t)),
            (r = function () {
              b(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = p(t)),
            (i = P.bind(null, n)),
            (r = function () {
              b(n);
            }));
      return (
        i(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            i((e = t));
          } else r();
        }
      );
    }
    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = f(e, t);
      return (
        h(n, t),
        function (e) {
          for (var i = [], r = 0; r < n.length; r++) {
            var a = n[r];
            (s = o[a.id]).refs--, i.push(s);
          }
          e && h(f(e, t), t);
          for (r = 0; r < i.length; r++) {
            var s;
            if (0 === (s = i[r]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete o[s.id];
            }
          }
        }
      );
    };
    var v,
      M =
        ((v = []),
        function (e, t) {
          return (v[e] = t), v.filter(Boolean).join("\n");
        });
    function A(e, t, n, i) {
      var r = n ? "" : i.css;
      if (e.styleSheet) e.styleSheet.cssText = M(t, r);
      else {
        var o = document.createTextNode(r),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
    function P(e, t) {
      var n = t.css,
        i = t.media;
      if ((i && e.setAttribute("media", i), e.styleSheet))
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function G(e, t, n) {
      var i = n.css,
        r = n.sourceMap,
        o = void 0 === t.convertToAbsoluteUrls && r;
      (t.convertToAbsoluteUrls || o) && (i = T(i)),
        r &&
          (i +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
            " */");
      var a = new Blob([i], { type: "text/css" }),
        s = e.href;
      (e.href = URL.createObjectURL(a)), s && URL.revokeObjectURL(s);
    }
  },
  function (e, t, n) {
    var i = n(3),
      r = n(48),
      o = n(20),
      a = n(9),
      s = n(24),
      l = n(2),
      c = n(25),
      u = Object.getOwnPropertyDescriptor;
    t.f = i
      ? u
      : function (e, t) {
          if (((e = a(e)), (t = s(t, !0)), c))
            try {
              return u(e, t);
            } catch (e) {}
          if (l(e, t)) return o(!r.f.call(e, t), e[t]);
        };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    var i = n(1),
      r = n(22),
      o = "".split;
    e.exports = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == r(e) ? o.call(e, "") : Object(e);
        }
      : Object;
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    var i = n(4);
    e.exports = function (e, t) {
      if (!i(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, n) {
    var i = n(3),
      r = n(1),
      o = n(26);
    e.exports =
      !i &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var i = n(0),
      r = n(4),
      o = i.document,
      a = r(o) && r(o.createElement);
    e.exports = function (e) {
      return a ? o.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var i = n(28),
      r = Function.toString;
    "function" != typeof i.inspectSource &&
      (i.inspectSource = function (e) {
        return r.call(e);
      }),
      (e.exports = i.inspectSource);
  },
  function (e, t, n) {
    var i = n(0),
      r = n(10),
      o = i["__core-js_shared__"] || r("__core-js_shared__", {});
    e.exports = o;
  },
  function (e, t, n) {
    var i = n(30),
      r = n(31),
      o = i("keys");
    e.exports = function (e) {
      return o[e] || (o[e] = r(e));
    };
  },
  function (e, t, n) {
    var i = n(52),
      r = n(28);
    (e.exports = function (e, t) {
      return r[e] || (r[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: i ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t) {
    var n = 0,
      i = Math.random();
    e.exports = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++n + i).toString(36)
      );
    };
  },
  function (e, t, n) {
    var i = n(2),
      r = n(9),
      o = n(33).indexOf,
      a = n(11);
    e.exports = function (e, t) {
      var n,
        s = r(e),
        l = 0,
        c = [];
      for (n in s) !i(a, n) && i(s, n) && c.push(n);
      for (; t.length > l; ) i(s, (n = t[l++])) && (~o(c, n) || c.push(n));
      return c;
    };
  },
  function (e, t, n) {
    var i = n(9),
      r = n(34),
      o = n(57),
      a = function (e) {
        return function (t, n, a) {
          var s,
            l = i(t),
            c = r(l.length),
            u = o(a, c);
          if (e && n != n) {
            for (; c > u; ) if ((s = l[u++]) != s) return !0;
          } else
            for (; c > u; u++)
              if ((e || u in l) && l[u] === n) return e || u || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (e, t, n) {
    var i = n(35),
      r = Math.min;
    e.exports = function (e) {
      return e > 0 ? r(i(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
    };
  },
  function (e, t, n) {
    var i = n(37),
      r = n(21),
      o = n(62),
      a = n(34),
      s = n(63),
      l = [].push,
      c = function (e) {
        var t = 1 == e,
          n = 2 == e,
          c = 3 == e,
          u = 4 == e,
          d = 6 == e,
          T = 5 == e || d;
        return function (h, f, S, b) {
          for (
            var p,
              g,
              m = o(h),
              v = r(m),
              M = i(f, S, 3),
              A = a(v.length),
              P = 0,
              G = b || s,
              y = t ? G(h, A) : n ? G(h, 0) : void 0;
            A > P;
            P++
          )
            if ((T || P in v) && ((g = M((p = v[P]), P, m)), e))
              if (t) y[P] = g;
              else if (g)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return p;
                  case 6:
                    return P;
                  case 2:
                    l.call(y, p);
                }
              else if (u) return !1;
          return d ? -1 : c || u ? u : y;
        };
      };
    e.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
    };
  },
  function (e, t, n) {
    var i = n(61);
    e.exports = function (e, t, n) {
      if ((i(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t, n) {
    var i = n(1);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      });
  },
  function (e, t, n) {
    "use strict";
    n(40), n(43), n(83), n(86);
    var i = o(n(88)),
      r = o(n(89));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    n(90),
      i.default.registerLanguage("javascript", r.default),
      i.default.initHighlightingOnLoad();
    var a = document.getElementById("spinner");
    document.getElementById("main").classList.add("active"),
      (a.style.display = "none");
  },
  function (e, t, n) {
    "use strict";
    var i,
      r = n(41);
    if (
      new ((i = r) && i.__esModule ? i : { default: i }).default(
        window.navigator.userAgent
      ).mobile()
    ) {
      for (
        var o = document.querySelectorAll(".no-mobile"),
          a = document.getElementById("mercedes-360-view"),
          s = 0;
        o.length > s;
        s++
      ) {
        var l = o[s];
        l.parentNode.removeChild(l);
      }
      a.setAttribute(
        "data-folder",
        ""
      ),
        a.setAttribute("data-ratio", "0.666"),
        a.setAttribute("data-bottom-circle-offset", "22");
    }
  },
  function (e, t, n) {
    (e.exports
      ? function (t) {
          e.exports = t();
        }
      : n(42))(function () {
      "use strict";
      var e,
        t = {
          mobileDetectRules: {
            phones: {
              iPhone: "\\biPhone\\b|\\biPod\\b",
              BlackBerry:
                "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
              HTC:
                "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
              Nexus:
                "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
              Dell:
                "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
              Motorola:
                "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
              Samsung:
                "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
              LG:
                "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
              Sony:
                "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
              Asus: "Asus.*Galaxy|PadFone.*Mobile",
              NokiaLumia: "Lumia [0-9]{3,4}",
              Micromax:
                "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
              Palm: "PalmSource|Palm",
              Vertu:
                "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
              Pantech:
                "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
              Fly:
                "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
              Wiko:
                "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
              iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
              SimValley:
                "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
              Wolfgang:
                "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
              Alcatel: "Alcatel",
              Nintendo: "Nintendo (3DS|Switch)",
              Amoi: "Amoi",
              INQ: "INQ",
              OnePlus: "ONEPLUS",
              GenericPhone:
                "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
            },
            tablets: {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              GoogleTablet: "Android.*Pixel C",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet:
                "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet:
                "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet:
                "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet:
                "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
              ToshibaTablet:
                "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet:
                "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet:
                "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
              DellTablet:
                "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet:
                "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet:
                "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet:
                "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet:
                "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
              PhilipsTablet:
                "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet:
                "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet:
                "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet:
                "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet:
                "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet:
                "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet:
                "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet:
                "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet:
                "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android.*\\bG1\\b(?!\\))",
              MicromaxTablet:
                "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet:
                "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet:
                "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet:
                "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet:
                "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet:
                "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet:
                "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet:
                "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet:
                "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9|TECNO DP8D",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet:
                "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet:
                "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet:
                "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet:
                "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet:
                "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet:
                "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MediacomTablet:
                "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet:
                "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
            },
            oss: {
              AndroidOS: "Android",
              BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
              PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
              SymbianOS:
                "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
              WindowsMobileOS:
                "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
              WindowsPhoneOS:
                "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
              iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
              iPadOS: "CPU OS 13",
              MeeGoOS: "MeeGo",
              MaemoOS: "Maemo",
              JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
              webOS: "webOS|hpwOS",
              badaOS: "\\bBada\\b",
              BREWOS: "BREW",
            },
            uas: {
              Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
              Dolfin: "\\bDolfin\\b",
              Opera:
                "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
              Skyfire: "Skyfire",
              Edge: "Mobile Safari/[.0-9]* Edge",
              IE: "IEMobile|MSIEMobile",
              Firefox:
                "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
              Bolt: "bolt",
              TeaShark: "teashark",
              Blazer: "Blazer",
              Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
              WeChat: "\\bMicroMessenger\\b",
              UCBrowser: "UC.*Browser|UCWEB",
              baiduboxapp: "baiduboxapp",
              baidubrowser: "baidubrowser",
              DiigoBrowser: "DiigoBrowser",
              Mercury: "\\bMercury\\b",
              ObigoBrowser: "Obigo",
              NetFront: "NF-Browser",
              GenericBrowser:
                "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
              PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
            },
            props: {
              Mobile: "Mobile/[VER]",
              Build: "Build/[VER]",
              Version: "Version/[VER]",
              VendorID: "VendorID/[VER]",
              iPad: "iPad.*CPU[a-z ]+[VER]",
              iPhone: "iPhone.*CPU[a-z ]+[VER]",
              iPod: "iPod.*CPU[a-z ]+[VER]",
              Kindle: "Kindle/[VER]",
              Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
              Coast: ["Coast/[VER]"],
              Dolfin: "Dolfin/[VER]",
              Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
              Fennec: "Fennec/[VER]",
              Edge: "Edge/[VER]",
              IE: [
                "IEMobile/[VER];",
                "IEMobile [VER]",
                "MSIE [VER];",
                "Trident/[0-9.]+;.*rv:[VER]",
              ],
              NetFront: "NetFront/[VER]",
              NokiaBrowser: "NokiaBrowser/[VER]",
              Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
              "Opera Mini": "Opera Mini/[VER]",
              "Opera Mobi": "Version/[VER]",
              UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
              MQQBrowser: "MQQBrowser/[VER]",
              MicroMessenger: "MicroMessenger/[VER]",
              baiduboxapp: "baiduboxapp/[VER]",
              baidubrowser: "baidubrowser/[VER]",
              SamsungBrowser: "SamsungBrowser/[VER]",
              Iron: "Iron/[VER]",
              Safari: ["Version/[VER]", "Safari/[VER]"],
              Skyfire: "Skyfire/[VER]",
              Tizen: "Tizen/[VER]",
              Webkit: "webkit[ /][VER]",
              PaleMoon: "PaleMoon/[VER]",
              Gecko: "Gecko/[VER]",
              Trident: "Trident/[VER]",
              Presto: "Presto/[VER]",
              Goanna: "Goanna/[VER]",
              iOS: " \\bi?OS\\b [VER][ ;]{1}",
              Android: "Android [VER]",
              BlackBerry: [
                "BlackBerry[\\w]+/[VER]",
                "BlackBerry.*Version/[VER]",
                "Version/[VER]",
              ],
              BREW: "BREW [VER]",
              Java: "Java/[VER]",
              "Windows Phone OS": [
                "Windows Phone OS [VER]",
                "Windows Phone [VER]",
              ],
              "Windows Phone": "Windows Phone [VER]",
              "Windows CE": "Windows CE/[VER]",
              "Windows NT": "Windows NT [VER]",
              Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
              webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            },
            utils: {
              Bot:
                "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
              MobileBot:
                "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
              DesktopMode: "WPDesktop",
              TV: "SonyDTV|HbbTV",
              WebKit: "(webkit)[ /]([\\w.]+)",
              Console:
                "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
              Watch: "SM-V700",
            },
          },
          detectMobileBrowsers: {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i,
          },
        },
        n = Object.prototype.hasOwnProperty;
      function i(e, t) {
        return null != e && null != t && e.toLowerCase() === t.toLowerCase();
      }
      function r(e, t) {
        var n,
          i,
          r = e.length;
        if (!r || !t) return !1;
        for (n = t.toLowerCase(), i = 0; i < r; ++i)
          if (n === e[i].toLowerCase()) return !0;
        return !1;
      }
      function o(e) {
        for (var t in e) n.call(e, t) && (e[t] = new RegExp(e[t], "i"));
      }
      function a(e, t) {
        (this.ua = (function (e) {
          return (e || "").substr(0, 500);
        })(e)),
          (this._cache = {}),
          (this.maxPhoneWidth = t || 600);
      }
      return (
        (t.FALLBACK_PHONE = "UnknownPhone"),
        (t.FALLBACK_TABLET = "UnknownTablet"),
        (t.FALLBACK_MOBILE = "UnknownMobile"),
        (e =
          "isArray" in Array
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              }),
        (function () {
          var i,
            r,
            a,
            s,
            l,
            c,
            u = t.mobileDetectRules;
          for (i in u.props)
            if (n.call(u.props, i)) {
              for (
                r = u.props[i], e(r) || (r = [r]), l = r.length, s = 0;
                s < l;
                ++s
              )
                (c = (a = r[s]).indexOf("[VER]")) >= 0 &&
                  (a =
                    a.substring(0, c) + "([\\w._\\+]+)" + a.substring(c + 5)),
                  (r[s] = new RegExp(a, "i"));
              u.props[i] = r;
            }
          o(u.oss),
            o(u.phones),
            o(u.tablets),
            o(u.uas),
            o(u.utils),
            (u.oss0 = {
              WindowsPhoneOS: u.oss.WindowsPhoneOS,
              WindowsMobileOS: u.oss.WindowsMobileOS,
            });
        })(),
        (t.findMatch = function (e, t) {
          for (var i in e) if (n.call(e, i) && e[i].test(t)) return i;
          return null;
        }),
        (t.findMatches = function (e, t) {
          var i = [];
          for (var r in e) n.call(e, r) && e[r].test(t) && i.push(r);
          return i;
        }),
        (t.getVersionStr = function (e, i) {
          var r,
            o,
            a,
            s,
            l = t.mobileDetectRules.props;
          if (n.call(l, e))
            for (a = (r = l[e]).length, o = 0; o < a; ++o)
              if (null !== (s = r[o].exec(i))) return s[1];
          return null;
        }),
        (t.getVersion = function (e, n) {
          var i = t.getVersionStr(e, n);
          return i ? t.prepareVersionNo(i) : NaN;
        }),
        (t.prepareVersionNo = function (e) {
          var t;
          return (
            1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]),
            t.length > 1 && ((e = t[0] + "."), t.shift(), (e += t.join(""))),
            Number(e)
          );
        }),
        (t.isMobileFallback = function (e) {
          return (
            t.detectMobileBrowsers.fullPattern.test(e) ||
            t.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
          );
        }),
        (t.isTabletFallback = function (e) {
          return t.detectMobileBrowsers.tabletPattern.test(e);
        }),
        (t.prepareDetectionCache = function (e, n, i) {
          if (
            /*!mobile-detect v1.4.4 2019-09-21*/
            /*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
            void 0 === e.mobile
          ) {
            var r, o, s;
            if ((o = t.findMatch(t.mobileDetectRules.tablets, n)))
              return (e.mobile = e.tablet = o), void (e.phone = null);
            if ((r = t.findMatch(t.mobileDetectRules.phones, n)))
              return (e.mobile = e.phone = r), void (e.tablet = null);
            t.isMobileFallback(n)
              ? void 0 === (s = a.isPhoneSized(i))
                ? ((e.mobile = t.FALLBACK_MOBILE), (e.tablet = e.phone = null))
                : s
                ? ((e.mobile = e.phone = t.FALLBACK_PHONE), (e.tablet = null))
                : ((e.mobile = e.tablet = t.FALLBACK_TABLET), (e.phone = null))
              : t.isTabletFallback(n)
              ? ((e.mobile = e.tablet = t.FALLBACK_TABLET), (e.phone = null))
              : (e.mobile = e.tablet = e.phone = null);
          }
        }),
        (t.mobileGrade = function (e) {
          var t = null !== e.mobile();
          return (e.os("iOS") && e.version("iPad") >= 4.3) ||
            (e.os("iOS") && e.version("iPhone") >= 3.1) ||
            (e.os("iOS") && e.version("iPod") >= 3.1) ||
            (e.version("Android") > 2.1 && e.is("Webkit")) ||
            e.version("Windows Phone OS") >= 7 ||
            (e.is("BlackBerry") && e.version("BlackBerry") >= 6) ||
            e.match("Playbook.*Tablet") ||
            (e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi")) ||
            e.match("hp.*TouchPad") ||
            (e.is("Firefox") && e.version("Firefox") >= 12) ||
            (e.is("Chrome") &&
              e.is("AndroidOS") &&
              e.version("Android") >= 4) ||
            (e.is("Skyfire") &&
              e.version("Skyfire") >= 4.1 &&
              e.is("AndroidOS") &&
              e.version("Android") >= 2.3) ||
            (e.is("Opera") &&
              e.version("Opera Mobi") > 11 &&
              e.is("AndroidOS")) ||
            e.is("MeeGoOS") ||
            e.is("Tizen") ||
            (e.is("Dolfin") && e.version("Bada") >= 2) ||
            ((e.is("UC Browser") || e.is("Dolfin")) &&
              e.version("Android") >= 2.3) ||
            e.match("Kindle Fire") ||
            (e.is("Kindle") && e.version("Kindle") >= 3) ||
            (e.is("AndroidOS") && e.is("NookTablet")) ||
            (e.version("Chrome") >= 11 && !t) ||
            (e.version("Safari") >= 5 && !t) ||
            (e.version("Firefox") >= 4 && !t) ||
            (e.version("MSIE") >= 7 && !t) ||
            (e.version("Opera") >= 10 && !t)
            ? "A"
            : (e.os("iOS") && e.version("iPad") < 4.3) ||
              (e.os("iOS") && e.version("iPhone") < 3.1) ||
              (e.os("iOS") && e.version("iPod") < 3.1) ||
              (e.is("Blackberry") &&
                e.version("BlackBerry") >= 5 &&
                e.version("BlackBerry") < 6) ||
              (e.version("Opera Mini") >= 5 &&
                e.version("Opera Mini") <= 6.5 &&
                (e.version("Android") >= 2.3 || e.is("iOS"))) ||
              e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
              (e.version("Opera Mobi") >= 11 && e.is("SymbianOS"))
            ? "B"
            : (e.version("BlackBerry") < 5 ||
                e.match("MSIEMobile|Windows CE.*Mobile") ||
                e.version("Windows Mobile"),
              "C");
        }),
        (t.detectOS = function (e) {
          return (
            t.findMatch(t.mobileDetectRules.oss0, e) ||
            t.findMatch(t.mobileDetectRules.oss, e)
          );
        }),
        (t.getDeviceSmallerSide = function () {
          return window.screen.width < window.screen.height
            ? window.screen.width
            : window.screen.height;
        }),
        (a.prototype = {
          constructor: a,
          mobile: function () {
            return (
              t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.mobile
            );
          },
          phone: function () {
            return (
              t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.phone
            );
          },
          tablet: function () {
            return (
              t.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
              this._cache.tablet
            );
          },
          userAgent: function () {
            return (
              void 0 === this._cache.userAgent &&
                (this._cache.userAgent = t.findMatch(
                  t.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgent
            );
          },
          userAgents: function () {
            return (
              void 0 === this._cache.userAgents &&
                (this._cache.userAgents = t.findMatches(
                  t.mobileDetectRules.uas,
                  this.ua
                )),
              this._cache.userAgents
            );
          },
          os: function () {
            return (
              void 0 === this._cache.os &&
                (this._cache.os = t.detectOS(this.ua)),
              this._cache.os
            );
          },
          version: function (e) {
            return t.getVersion(e, this.ua);
          },
          versionStr: function (e) {
            return t.getVersionStr(e, this.ua);
          },
          is: function (e) {
            return (
              r(this.userAgents(), e) ||
              i(e, this.os()) ||
              i(e, this.phone()) ||
              i(e, this.tablet()) ||
              r(t.findMatches(t.mobileDetectRules.utils, this.ua), e)
            );
          },
          match: function (e) {
            return (
              e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
            );
          },
          isPhoneSized: function (e) {
            return a.isPhoneSized(e || this.maxPhoneWidth);
          },
          mobileGrade: function () {
            return (
              void 0 === this._cache.grade &&
                (this._cache.grade = t.mobileGrade(this)),
              this._cache.grade
            );
          },
        }),
        "undefined" != typeof window && window.screen
          ? (a.isPhoneSized = function (e) {
              return e < 0 ? void 0 : t.getDeviceSmallerSide() <= e;
            })
          : (a.isPhoneSized = function () {}),
        (a._impl = t),
        (a.version = "1.4.4 2019-09-21"),
        a
      );
    });
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  function (e, t, n) {
    "use strict";
    n(44), n(67), n(73);
    var i,
      r = n(81),
      o = (i = r) && i.__esModule ? i : { default: i };
    function a() {
      var e = [],
        t = document.querySelectorAll(".cloudimage-360:not(.initialized)");
      [].slice.call(t).forEach(function (t) {
        e.push(new o.default(t));
      }),
        (window.CI360._viewers = e);
    }
    function s() {
      return !(window.CI360._viewers && window.CI360._viewers.length > 0);
    }
    (window.CI360 = window.CI360 || {}),
      (window.CI360.init = a),
      (window.CI360.destroy = function () {
        s() ||
          (window.CI360._viewers.forEach(function (e) {
            e.destroy();
          }),
          (window.CI360._viewers = []));
      }),
      (window.CI360.getActiveIndexByID = function (e) {
        if (!s()) {
          var t = window.CI360._viewers.filter(function (t) {
            return t.id === e;
          })[0];
          return t && t.activeImage - 1;
        }
      }),
      window.CI360.notInitOnLoad || a();
  },
  function (e, t, n) {
    var i = n(45);
    e.exports = i;
  },
  function (e, t, n) {
    n(46);
    var i = n(16);
    e.exports = i("Array", "forEach");
  },
  function (e, t, n) {
    "use strict";
    var i = n(8),
      r = n(60);
    i({ target: "Array", proto: !0, forced: [].forEach != r }, { forEach: r });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      r = Object.getOwnPropertyDescriptor,
      o = r && !i.call({ 1: 2 }, 1);
    t.f = o
      ? function (e) {
          var t = r(this, e);
          return !!t && t.enumerable;
        }
      : i;
  },
  function (e, t, n) {
    var i = n(0),
      r = n(5),
      o = n(2),
      a = n(10),
      s = n(27),
      l = n(50),
      c = l.get,
      u = l.enforce,
      d = String(String).split("String");
    (e.exports = function (e, t, n, s) {
      var l = !!s && !!s.unsafe,
        c = !!s && !!s.enumerable,
        T = !!s && !!s.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof t || o(n, "name") || r(n, "name", t),
        (u(n).source = d.join("string" == typeof t ? t : ""))),
        e !== i
          ? (l ? !T && e[t] && (c = !0) : delete e[t],
            c ? (e[t] = n) : r(e, t, n))
          : c
          ? (e[t] = n)
          : a(t, n);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && c(this).source) || s(this);
    });
  },
  function (e, t, n) {
    var i,
      r,
      o,
      a = n(51),
      s = n(0),
      l = n(4),
      c = n(5),
      u = n(2),
      d = n(29),
      T = n(11),
      h = s.WeakMap;
    if (a) {
      var f = new h(),
        S = f.get,
        b = f.has,
        p = f.set;
      (i = function (e, t) {
        return p.call(f, e, t), t;
      }),
        (r = function (e) {
          return S.call(f, e) || {};
        }),
        (o = function (e) {
          return b.call(f, e);
        });
    } else {
      var g = d("state");
      (T[g] = !0),
        (i = function (e, t) {
          return c(e, g, t), t;
        }),
        (r = function (e) {
          return u(e, g) ? e[g] : {};
        }),
        (o = function (e) {
          return u(e, g);
        });
    }
    e.exports = {
      set: i,
      get: r,
      has: o,
      enforce: function (e) {
        return o(e) ? r(e) : i(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!l(t) || (n = r(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  function (e, t, n) {
    var i = n(0),
      r = n(27),
      o = i.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(r(o));
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var i = n(2),
      r = n(54),
      o = n(19),
      a = n(6);
    e.exports = function (e, t) {
      for (var n = r(t), s = a.f, l = o.f, c = 0; c < n.length; c++) {
        var u = n[c];
        i(e, u) || s(e, u, l(t, u));
      }
    };
  },
  function (e, t, n) {
    var i = n(12),
      r = n(56),
      o = n(58),
      a = n(7);
    e.exports =
      i("Reflect", "ownKeys") ||
      function (e) {
        var t = r.f(a(e)),
          n = o.f;
        return n ? t.concat(n(e)) : t;
      };
  },
  function (e, t, n) {
    var i = n(0);
    e.exports = i;
  },
  function (e, t, n) {
    var i = n(32),
      r = n(13).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return i(e, r);
      };
  },
  function (e, t, n) {
    var i = n(35),
      r = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      var n = i(e);
      return n < 0 ? r(n + t, 0) : o(n, t);
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var i = n(1),
      r = /#|\.prototype\./,
      o = function (e, t) {
        var n = s[a(e)];
        return n == c || (n != l && ("function" == typeof t ? i(t) : !!t));
      },
      a = (o.normalize = function (e) {
        return String(e).replace(r, ".").toLowerCase();
      }),
      s = (o.data = {}),
      l = (o.NATIVE = "N"),
      c = (o.POLYFILL = "P");
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var i = n(36).forEach,
      r = n(66),
      o = n(15),
      a = r("forEach"),
      s = o("forEach");
    e.exports =
      a && s
        ? [].forEach
        : function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    };
  },
  function (e, t, n) {
    var i = n(23);
    e.exports = function (e) {
      return Object(i(e));
    };
  },
  function (e, t, n) {
    var i = n(4),
      r = n(64),
      o = n(14)("species");
    e.exports = function (e, t) {
      var n;
      return (
        r(e) &&
          ("function" != typeof (n = e.constructor) ||
          (n !== Array && !r(n.prototype))
            ? i(n) && null === (n = n[o]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    };
  },
  function (e, t, n) {
    var i = n(22);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == i(e);
      };
  },
  function (e, t, n) {
    var i = n(38);
    e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, n) {
    "use strict";
    var i = n(1);
    e.exports = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        i(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (e, t, n) {
    var i = n(68);
    e.exports = i;
  },
  function (e, t, n) {
    n(69);
    var i = n(16);
    e.exports = i("Array", "filter");
  },
  function (e, t, n) {
    "use strict";
    var i = n(8),
      r = n(36).filter,
      o = n(70),
      a = n(15),
      s = o("filter"),
      l = a("filter");
    i(
      { target: "Array", proto: !0, forced: !s || !l },
      {
        filter: function (e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (e, t, n) {
    var i = n(1),
      r = n(14),
      o = n(71),
      a = r("species");
    e.exports = function (e) {
      return (
        o >= 51 ||
        !i(function () {
          var t = [];
          return (
            ((t.constructor = {})[a] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    };
  },
  function (e, t, n) {
    var i,
      r,
      o = n(0),
      a = n(72),
      s = o.process,
      l = s && s.versions,
      c = l && l.v8;
    c
      ? (r = (i = c.split("."))[0] + i[1])
      : a &&
        (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = a.match(/Chrome\/(\d+)/)) &&
        (r = i[1]),
      (e.exports = r && +r);
  },
  function (e, t, n) {
    var i = n(12);
    e.exports = i("navigator", "userAgent") || "";
  },
  function (e, t, n) {
    var i = n(74);
    e.exports = i;
  },
  function (e, t, n) {
    n(75);
    var i = n(16);
    e.exports = i("Array", "includes");
  },
  function (e, t, n) {
    "use strict";
    var i = n(8),
      r = n(33).includes,
      o = n(76);
    i(
      {
        target: "Array",
        proto: !0,
        forced: !n(15)("indexOf", { ACCESSORS: !0, 1: 0 }),
      },
      {
        includes: function (e) {
          return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o("includes");
  },
  function (e, t, n) {
    var i = n(14),
      r = n(77),
      o = n(6),
      a = i("unscopables"),
      s = Array.prototype;
    null == s[a] && o.f(s, a, { configurable: !0, value: r(null) }),
      (e.exports = function (e) {
        s[a][e] = !0;
      });
  },
  function (e, t, n) {
    var i,
      r = n(7),
      o = n(78),
      a = n(13),
      s = n(11),
      l = n(80),
      c = n(26),
      u = n(29),
      d = u("IE_PROTO"),
      T = function () {},
      h = function (e) {
        return "<script>" + e + "</script>";
      },
      f = function () {
        try {
          i = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        f = i
          ? (function (e) {
              e.write(h("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(i)
          : (((t = c("iframe")).style.display = "none"),
            l.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(h("document.F=Object")),
            e.close(),
            e.F);
        for (var n = a.length; n--; ) delete f.prototype[a[n]];
        return f();
      };
    (s[d] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((T.prototype = r(e)),
                (n = new T()),
                (T.prototype = null),
                (n[d] = e))
              : (n = f()),
            void 0 === t ? n : o(n, t)
          );
        });
  },
  function (e, t, n) {
    var i = n(3),
      r = n(6),
      o = n(7),
      a = n(79);
    e.exports = i
      ? Object.defineProperties
      : function (e, t) {
          o(e);
          for (var n, i = a(t), s = i.length, l = 0; s > l; )
            r.f(e, (n = i[l++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var i = n(32),
      r = n(13);
    e.exports =
      Object.keys ||
      function (e) {
        return i(e, r);
      };
  },
  function (e, t, n) {
    var i = n(12);
    e.exports = i("document", "documentElement");
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      r = n(82);
    var o = (function () {
      function e(t, n, i) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.container = t),
          (this.activeImage = 1),
          (this.movementStart = 0),
          (this.isClicked = !1),
          (this.loadedImages = 0),
          (this.imagesLoaded = !1),
          (this.reversed = !1),
          (this.fullScreenView = !!n),
          (this.ratio = i),
          (this.images = []),
          (this.devicePixelRatio = Math.round(window.devicePixelRatio || 1)),
          (this.isMobile = !(
            !("ontouchstart" in window) && !navigator.msMaxTouchPoints
          )),
          (this.id = t.id),
          this.init(t);
      }
      return (
        i(e, [
          {
            key: "mousedown",
            value: function (e) {
              e.preventDefault(),
                this.imagesLoaded &&
                  (this.glass && this.closeMagnifier(),
                  this.view360Icon && this.remove360ViewIcon(),
                  (this.autoplay || this.loopTimeoutId) &&
                    (this.stop(), (this.autoplay = !1)),
                  (this.movementStart = e.pageX),
                  (this.isClicked = !0),
                  (this.container.style.cursor = "grabbing"));
            },
          },
          {
            key: "mouseup",
            value: function () {
              this.imagesLoaded &&
                ((this.movementStart = 0),
                (this.isClicked = !1),
                (this.container.style.cursor = "grab"),
                this.bottomCircle && this.show360ViewCircleIcon());
            },
          },
          {
            key: "mousemove",
            value: function (e) {
              this.isClicked && this.imagesLoaded && this.onMove(e.pageX);
            },
          },
          {
            key: "touchstart",
            value: function (e) {
              this.imagesLoaded &&
                (this.glass && this.closeMagnifier(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) &&
                  (this.stop(), (this.autoplay = !1)),
                (this.movementStart = e.touches[0].clientX),
                (this.isClicked = !0));
            },
          },
          {
            key: "touchend",
            value: function () {
              this.imagesLoaded &&
                ((this.movementStart = 0),
                (this.isClicked = !1),
                this.bottomCircle && this.show360ViewCircleIcon());
            },
          },
          {
            key: "touchmove",
            value: function (e) {
              this.isClicked &&
                this.imagesLoaded &&
                this.onMove(e.touches[0].clientX);
            },
          },
          {
            key: "keydownGeneral",
            value: function () {
              this.imagesLoaded && this.glass && this.closeMagnifier();
            },
          },
          {
            key: "keydown",
            value: function (e) {
              this.imagesLoaded &&
                (this.glass && this.closeMagnifier(),
                -1 !== [37, 39].indexOf(e.keyCode) &&
                  (37 === e.keyCode
                    ? this.reversed
                      ? this.prev()
                      : this.next()
                    : 39 === e.keyCode &&
                      (this.reversed ? this.next() : this.prev()),
                  this.onSpin()));
            },
          },
          {
            key: "onSpin",
            value: function () {
              this.bottomCircle && this.hide360ViewCircleIcon(),
                this.view360Icon && this.remove360ViewIcon(),
                (this.autoplay || this.loopTimeoutId) &&
                  (this.stop(), (this.autoplay = !1));
            },
          },
          {
            key: "keyup",
            value: function (e) {
              this.imagesLoaded &&
                -1 !== [37, 39].indexOf(e.keyCode) &&
                this.onFinishSpin();
            },
          },
          {
            key: "onFinishSpin",
            value: function () {
              this.bottomCircle && this.show360ViewCircleIcon();
            },
          },
          {
            key: "onMove",
            value: function (e) {
              if (e - this.movementStart >= this.speedFactor) {
                var t =
                  Math.floor((e - this.movementStart) / this.speedFactor) || 1;
                (this.movementStart = e),
                  this.spinReverse
                    ? this.moveActiveIndexDown(t)
                    : this.moveActiveIndexUp(t),
                  this.bottomCircle && this.hide360ViewCircleIcon(),
                  this.update();
              } else if (this.movementStart - e >= this.speedFactor) {
                var n =
                  Math.floor((this.movementStart - e) / this.speedFactor) || 1;
                (this.movementStart = e),
                  this.spinReverse
                    ? this.moveActiveIndexUp(n)
                    : this.moveActiveIndexDown(n),
                  this.bottomCircle && this.hide360ViewCircleIcon(),
                  this.update();
              }
            },
          },
          {
            key: "moveActiveIndexUp",
            value: function (e) {
              var t = this.controlReverse
                ? !this.spinReverse
                : this.spinReverse;
              this.stopAtEdges
                ? this.activeImage + e >= this.amount
                  ? ((this.activeImage = this.amount),
                    (t ? this.prevElem : this.nextElem) &&
                      (0, r.addClass)(
                        t ? this.prevElem : this.nextElem,
                        "not-active"
                      ))
                  : ((this.activeImage += e),
                    this.nextElem &&
                      (0, r.removeClass)(this.nextElem, "not-active"),
                    this.prevElem &&
                      (0, r.removeClass)(this.prevElem, "not-active"))
                : (this.activeImage =
                    (this.activeImage + e) % this.amount || this.amount);
            },
          },
          {
            key: "moveActiveIndexDown",
            value: function (e) {
              var t = this.controlReverse
                ? !this.spinReverse
                : this.spinReverse;
              this.stopAtEdges
                ? this.activeImage - e <= 1
                  ? ((this.activeImage = 1),
                    (t ? this.nextElem : this.prevElem) &&
                      (0, r.addClass)(
                        t ? this.nextElem : this.prevElem,
                        "not-active"
                      ))
                  : ((this.activeImage -= e),
                    this.prevElem &&
                      (0, r.removeClass)(this.prevElem, "not-active"),
                    this.nextElem &&
                      (0, r.removeClass)(this.nextElem, "not-active"))
                : this.activeImage - e < 1
                ? (this.activeImage = this.amount + (this.activeImage - e))
                : (this.activeImage -= e);
            },
          },
          {
            key: "loop",
            value: function (e) {
              e ? this.prev() : this.next();
            },
          },
          {
            key: "next",
            value: function () {
              this.moveActiveIndexUp(1), this.update();
            },
          },
          {
            key: "prev",
            value: function () {
              this.moveActiveIndexDown(1), this.update();
            },
          },
          {
            key: "update",
            value: function () {
              var e = this.images[this.activeImage - 1],
                t = this.canvas.getContext("2d");
              if (
                (t.scale(this.devicePixelRatio, this.devicePixelRatio),
                this.fullScreenView)
              ) {
                (this.canvas.width = window.innerWidth * this.devicePixelRatio),
                  (this.canvas.style.width = window.innerWidth + "px"),
                  (this.canvas.height =
                    window.innerHeight * this.devicePixelRatio),
                  (this.canvas.style.height = window.innerHeight + "px");
                var n = (0, r.contain)(
                    this.canvas.width,
                    this.canvas.height,
                    e.width,
                    e.height
                  ),
                  i = n.offsetX,
                  o = n.offsetY,
                  a = n.width,
                  s = n.height;
                t.drawImage(e, i, o, a, s);
              } else
                (this.canvas.width =
                  this.container.offsetWidth * this.devicePixelRatio),
                  (this.canvas.style.width = this.container.offsetWidth + "px"),
                  (this.canvas.height =
                    ((this.container.offsetWidth * this.devicePixelRatio) /
                      e.width) *
                    e.height),
                  (this.canvas.style.height =
                    (this.container.offsetWidth / e.width) * e.height + "px"),
                  t.drawImage(e, 0, 0, this.canvas.width, this.canvas.height);
            },
          },
          {
            key: "updatePercentageInLoader",
            value: function (e) {
              this.loader && (this.loader.style.width = e + "%"),
                this.view360Icon && (this.view360Icon.innerText = e + "%");
            },
          },
          {
            key: "onAllImagesLoaded",
            value: function () {
              if (
                ((this.imagesLoaded = !0),
                (this.container.style.cursor = "grab"),
                this.removeLoader(),
                this.fullScreenView)
              ) {
                var e =
                    this.container.offsetHeight / this.container.offsetWidth,
                  t = this.container.offsetWidth;
                this.ratio > e &&
                  (t = this.container.offsetHeight / this.ratio),
                  (this.speedFactor =
                    Math.floor(
                      ((((this.dragSpeed / 150) * 36) / this.amount) * 25 * t) /
                        1500
                    ) || 1);
              } else
                this.speedFactor =
                  Math.floor(
                    ((((this.dragSpeed / 150) * 36) / this.amount) *
                      25 *
                      this.container.offsetWidth) /
                      1500
                  ) || 1;
              this.autoplay && this.play(),
                this.view360Icon &&
                  ((this.view360Icon.innerText = ""),
                  (0, r.setView360Icon)(this.view360Icon, this.logoSrc)),
                this.initControls();
            },
          },
          {
            key: "onFirstImageLoaded",
            value: function (e) {
              var t = this;
              if (
                (this.hide360Logo || this.add360ViewIcon(), this.fullScreenView)
              ) {
                (this.canvas.width = window.innerWidth * this.devicePixelRatio),
                  (this.canvas.style.width = window.innerWidth + "px"),
                  (this.canvas.height =
                    window.innerHeight * this.devicePixelRatio),
                  (this.canvas.style.height = window.innerHeight + "px");
                var n = this.canvas.getContext("2d"),
                  i = (0, r.contain)(
                    this.canvas.width,
                    this.canvas.height,
                    e.target.width,
                    e.target.height
                  ),
                  o = i.offsetX,
                  a = i.offsetY,
                  s = i.width,
                  l = i.height;
                n.drawImage(e.target, o, a, s, l);
              } else {
                (this.canvas.width =
                  this.container.offsetWidth * this.devicePixelRatio),
                  (this.canvas.style.width = this.container.offsetWidth + "px"),
                  (this.canvas.height =
                    ((this.container.offsetWidth * this.devicePixelRatio) /
                      e.target.width) *
                    e.target.height),
                  (this.canvas.style.height =
                    (this.container.offsetWidth / e.target.width) *
                      e.target.height +
                    "px"),
                  this.canvas
                    .getContext("2d")
                    .drawImage(
                      e.target,
                      0,
                      0,
                      this.canvas.width,
                      this.canvas.height
                    );
              }
              this.lazyload &&
                !this.fullScreenView &&
                this.images.forEach(function (e, n) {
                  0 !== n
                    ? e.getAttribute("data-src") &&
                      (e.src = e.getAttribute("data-src"))
                    : t.innerBox.removeChild(t.lazyloadInitImage);
                }),
                this.ratio && (this.container.style.minHeight = "auto"),
                this.magnifier && !this.fullScreenView && this.addMagnifier(),
                this.boxShadow && !this.fullScreenView && this.addBoxShadow(),
                this.bottomCircle &&
                  !this.fullScreenView &&
                  this.add360ViewCircleIcon(),
                this.fullScreen && !this.fullScreenView
                  ? this.addFullScreenIcon()
                  : this.fullScreenView && this.addCloseFullScreenView();
            },
          },
          {
            key: "onImageLoad",
            value: function (e, t) {
              var n = Math.round((this.loadedImages / this.amount) * 100);
              (this.loadedImages += 1),
                this.updatePercentageInLoader(n),
                this.loadedImages === this.amount
                  ? this.onAllImagesLoaded(t)
                  : 0 === e && this.onFirstImageLoaded(t);
            },
          },
          {
            key: "addCloseFullScreenView",
            value: function () {
              var e = document.createElement("div");
              (0, r.setCloseFullScreenViewStyles)(e),
                (e.onclick = this.closeFullScreenModal.bind(this)),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "add360ViewIcon",
            value: function () {
              var e = document.createElement("div");
              (0, r.set360ViewIconStyles)(e),
                (e.innerText = "0%"),
                (this.view360Icon = e),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "addFullScreenIcon",
            value: function () {
              var e = document.createElement("div");
              (0, r.setFullScreenIconStyles)(e),
                (e.onclick = this.openFullScreenModal.bind(this)),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "addMagnifier",
            value: function () {
              var e = document.createElement("div");
              (0, r.setMagnifyIconStyles)(e, this.fullScreen),
                (e.onclick = this.magnify.bind(this)),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "getOriginalSrc",
            value: function () {
              var e = this.images[this.activeImage - 1],
                t = e.src.lastIndexOf("//");
              return t > 10 ? e.src.slice(t) : e.src;
            },
          },
          {
            key: "magnify",
            value: function () {
              var e = this,
                t = new Image(),
                n = this.getOriginalSrc();
              (t.src = n),
                (t.onload = function () {
                  e.glass && (e.glass.style.cursor = "none");
                }),
                (this.glass = document.createElement("div")),
                (this.container.style.overflow = "hidden"),
                (0, r.magnify)(
                  this.container,
                  n,
                  this.glass,
                  this.magnifier || 3
                );
            },
          },
          {
            key: "closeMagnifier",
            value: function () {
              this.glass &&
                ((this.container.style.overflow = "visible"),
                this.container.removeChild(this.glass),
                (this.glass = null));
            },
          },
          {
            key: "openFullScreenModal",
            value: function () {
              var t = document.createElement("div");
              (0, r.setFullScreenModalStyles)(t);
              var n = this.container.cloneNode(),
                i = this.images[0],
                o = i.height / i.width;
              (n.style.height = "100%"),
                (n.style.maxHeight = "100%"),
                t.appendChild(n),
                window.document.body.appendChild(t),
                new e(n, !0, o);
            },
          },
          {
            key: "closeFullScreenModal",
            value: function () {
              document.body.removeChild(this.container.parentNode);
            },
          },
          {
            key: "add360ViewCircleIcon",
            value: function () {
              var e = new Image();
              (0, r.set360ViewCircleIconStyles)(e, this.bottomCircleOffset),
                (this.view360CircleIcon = e),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "hide360ViewCircleIcon",
            value: function () {
              this.view360CircleIcon &&
                (this.view360CircleIcon.style.opacity = "0");
            },
          },
          {
            key: "show360ViewCircleIcon",
            value: function () {
              this.view360CircleIcon &&
                (this.view360CircleIcon.style.opacity = "1");
            },
          },
          {
            key: "remove360ViewCircleIcon",
            value: function () {
              this.view360CircleIcon &&
                (this.innerBox.removeChild(this.view360CircleIcon),
                (this.view360CircleIcon = null));
            },
          },
          {
            key: "addLoader",
            value: function () {
              var e = document.createElement("div");
              (0, r.setLoaderStyles)(e),
                (this.loader = e),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "addBoxShadow",
            value: function () {
              var e = document.createElement("div");
              (0, r.setBoxShadowStyles)(e, this.boxShadow),
                this.innerBox.appendChild(e);
            },
          },
          {
            key: "removeLoader",
            value: function () {
              this.loader &&
                (this.innerBox.removeChild(this.loader), (this.loader = null));
            },
          },
          {
            key: "remove360ViewIcon",
            value: function () {
              this.view360Icon &&
                (this.innerBox.removeChild(this.view360Icon),
                (this.view360Icon = null));
            },
          },
          {
            key: "play",
            value: function () {
              var e = this;
              this.bottomCircle && this.hide360ViewCircleIcon(),
                this.remove360ViewIcon(),
                (this.loopTimeoutId = window.setInterval(function () {
                  e.loop(e.reversed);
                }, this.autoplaySpeed));
            },
          },
          {
            key: "stop",
            value: function () {
              this.bottomCircle && this.show360ViewCircleIcon(),
                window.clearTimeout(this.loopTimeoutId);
            },
          },
          {
            key: "getSrc",
            value: function (e, t, n, i, o) {
              var a = o.ciSize,
                s = o.ciToken,
                l = o.ciOperation,
                c = o.ciFilters,
                u = "" + n + i;
              if (e) {
                var d = t.offsetWidth;
                if (this.fullScreenView) {
                  var T = t.offsetHeight / t.offsetWidth;
                  this.ratio > T && (d = t.offsetHeight / this.ratio);
                }
                u =
                  "" +                  
                  u;
              }
              return u;
            },
          },
          {
            key: "preloadImages",
            value: function (e, t, n, i, o, a, s) {
              var l = this;
              if (this.imageList)
                try {
                  var c = JSON.parse(this.imageList);
                  (this.amount = c.length),
                    c.forEach(function (e, t) {
                      var r = /(http(s?)):\/\//gi.test(e) ? "" : l.folder,
                        c = l.getSrc(a, o, r, e, s);
                      l.addImage(c, n, i, t);
                    });
                } catch (e) {
                  console.error(
                    "Wrong format in image-list attribute: " + e.message
                  );
                }
              else
                []
                  .concat(
                    (function (e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                          n[t] = e[t];
                        return n;
                      }
                      return Array.from(e);
                    })(new Array(e))
                  )
                  .map(function (e, o) {
                    var a = (0, r.pad)(o + 1, l.indexZeroBase),
                      s = t.replace("{index}", a);
                    l.addImage(s, n, i, o);
                  });
            },
          },
          {
            key: "addImage",
            value: function (e, t, n, i) {
              var r = new Image();
              t && !this.fullScreenView
                ? (r.setAttribute("data-src", e),
                  (r.className = r.className.length
                    ? r.className + " " + n
                    : n),
                  0 === i &&
                    ((this.lazyloadInitImage = r),
                    (r.style.position = "absolute"),
                    (r.style.top = "0"),
                    (r.style.left = "0"),
                    this.innerBox.appendChild(r)))
                : (r.src = e),
                (r.onload = this.onImageLoad.bind(this, i)),
                (r.onerror = this.onImageLoad.bind(this, i)),
                this.images.push(r);
            },
          },
          {
            key: "destroy",
            value: function () {
              stop();
              var e = this.container,
                t = e.cloneNode(!0),
                n = t.querySelector(".cloudimage-inner-box");
              (t.className = t.className.replace(" initialized", "")),
                (t.style.position = "relative"),
                (t.style.width = "100%"),
                (t.style.cursor = "default"),
                t.setAttribute("draggable", "false"),
                (t.style.minHeight = "auto"),
                t.removeChild(n),
                e.parentNode.replaceChild(t, e);
            },
          },
          {
            key: "initControls",
            value: function () {
              var e = this,
                t = this.controlReverse ? !this.spinReverse : this.spinReverse,
                n = this.container.querySelector(".cloudimage-360-prev"),
                i = this.container.querySelector(".cloudimage-360-next");
              if (n || i) {
                var o = function (t) {
                    t.stopPropagation(),
                      e.onSpin(),
                      e.prev(),
                      (e.loopTimeoutId = window.setInterval(
                        e.prev.bind(e),
                        e.autoplaySpeed
                      ));
                  },
                  a = function (t) {
                    t.stopPropagation(),
                      e.onSpin(),
                      e.next(),
                      (e.loopTimeoutId = window.setInterval(
                        e.next.bind(e),
                        e.autoplaySpeed
                      ));
                  },
                  s = function () {
                    e.onFinishSpin(), window.clearTimeout(e.loopTimeoutId);
                  },
                  l = function () {
                    e.onFinishSpin(), window.clearTimeout(e.loopTimeoutId);
                  };
                n &&
                  ((n.style.display = "block"),
                  n.addEventListener("mousedown", t ? a : o),
                  n.addEventListener("touchstart", t ? a : o),
                  n.addEventListener("mouseup", t ? l : s),
                  n.addEventListener("touchend", t ? l : s),
                  (this.prevElem = n)),
                  i &&
                    ((i.style.display = "block"),
                    i.addEventListener("mousedown", t ? o : a),
                    i.addEventListener("touchstart", t ? o : a),
                    i.addEventListener("mouseup", t ? s : l),
                    i.addEventListener("touchend", t ? s : l),
                    (this.nextElem = i)),
                  (t ? i : n) &&
                    this.stopAtEdges &&
                    (0, r.addClass)(t ? i : n, "not-active");
              }
            },
          },
          {
            key: "addInnerBox",
            value: function () {
              (this.innerBox = document.createElement("div")),
                (this.innerBox.className = "cloudimage-inner-box"),
                this.container.appendChild(this.innerBox);
            },
          },
          {
            key: "addCanvas",
            value: function () {
              (this.canvas = document.createElement("canvas")),
                (this.canvas.style.width = "100%"),
                (this.canvas.style.fontSize = "0"),
                this.ratio &&
                  ((this.container.style.minHeight =
                    this.container.offsetWidth * this.ratio + "px"),
                  (this.canvas.height = parseInt(
                    this.container.style.minHeight
                  ))),
                this.innerBox.appendChild(this.canvas);
            },
          },
          {
            key: "attachEvents",
            value: function (e, t, n) {
              e &&
                (this.container.addEventListener(
                  "mousedown",
                  this.mousedown.bind(this)
                ),
                this.container.addEventListener(
                  "mouseup",
                  this.mouseup.bind(this)
                ),
                this.container.addEventListener(
                  "mousemove",
                  this.mousemove.bind(this)
                )),
                t &&
                  (this.container.addEventListener(
                    "touchstart",
                    this.touchstart.bind(this),
                    { passive: !0 }
                  ),
                  this.container.addEventListener(
                    "touchend",
                    this.touchend.bind(this),
                    { passive: !0 }
                  ),
                  this.container.addEventListener(
                    "touchmove",
                    this.touchmove.bind(this)
                  )),
                n
                  ? (document.addEventListener(
                      "keydown",
                      this.keydown.bind(this)
                    ),
                    document.addEventListener("keyup", this.keyup.bind(this)))
                  : document.addEventListener(
                      "keydown",
                      this.keydownGeneral.bind(this)
                    );
            },
          },
          {
            key: "applyStylesToContainer",
            value: function () {
              (this.container.style.position = "relative"),
                (this.container.style.width = "100%"),
                (this.container.style.cursor = "wait"),
                this.container.setAttribute("draggable", "false"),
                (this.container.className =
                  this.container.className + " initialized");
            },
          },
          {
            key: "init",
            value: function (e) {
              var t = (0, r.get360ViewProps)(e),
                n = t.folder,
                i = t.filename,
                o = t.imageList,
                a = t.indexZeroBase,
                s = t.amount,
                l = t.draggable,
                c = void 0 === l || l,
                u = t.swipeable,
                d = void 0 === u || u,
                T = t.keys,
                h = t.bottomCircle,
                f = t.bottomCircleOffset,
                S = t.boxShadow,
                b = t.autoplay,
                p = t.speed,
                g = t.autoplayReverse,
                m = t.fullScreen,
                v = t.magnifier,
                M = t.ratio,
                A = t.responsive,
                P = t.ciToken,
                G = t.ciSize,
                y = t.ciOperation,
                E = t.ciFilters,
                C = t.lazyload,
                w = t.lazySelector,
                x = t.spinReverse,
                B = t.dragSpeed,
                I = t.stopAtEdges,
                H = t.controlReverse,
                D = t.hide360Logo,
                N = t.logoSrc,
                O = { ciSize: G, ciToken: P, ciOperation: y, ciFilters: E };
              this.addInnerBox(),
                this.addLoader(),
                (this.folder = n),
                (this.filename = i),
                (this.imageList = o),
                (this.indexZeroBase = a),
                (this.amount = s),
                (this.bottomCircle = h),
                (this.bottomCircleOffset = f),
                (this.boxShadow = S),
                (this.autoplay = b && !this.isMobile),
                (this.speed = p),
                (this.reversed = g),
                (this.fullScreen = m),
                (this.magnifier = !(this.isMobile || !v) && v),
                (this.lazyload = C),
                (this.ratio = M),
                (this.spinReverse = x),
                (this.controlReverse = H),
                (this.dragSpeed = B),
                (this.autoplaySpeed = (36 * this.speed) / this.amount),
                (this.stopAtEdges = I),
                (this.hide360Logo = D),
                (this.logoSrc = N),
                this.applyStylesToContainer(),
                this.addCanvas();
              var L = this.getSrc(A, e, n, i, O);
              this.preloadImages(s, L, C, w, e, A, O),
                this.attachEvents(c, d, T);
            },
          },
        ]),
        e
      );
    })();
    t.default = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i,
      r = function (e, t) {
        var n = o(e, t),
          i = o(e, "data-" + t);
        return (null !== n && "false" !== n) || (null !== i && "false" !== i);
      },
      o = function (e, t) {
        return e.getAttribute(t);
      },
      a =
        ((i = !0),
        function (e, t, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 1,
            a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0.5,
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : 0.5,
            l = n / r,
            c = e / t,
            u = e * o,
            d = t * o;
          return (
            (i ? l > c : l < c) ? (d = u / l) : (u = d * l),
            { width: u, height: d, offsetX: (e - u) * a, offsetY: (t - d) * s }
          );
        });
    (t.get360ViewProps = function (e) {
      return {
        folder: o(e, "folder") || o(e, "data-folder") || "/",
        filename:
          o(e, "filename") || o(e, "data-filename") || "image-{index}.jpg",
        imageList: o(e, "image-list") || o(e, "data-image-list") || null,
        indexZeroBase: parseInt(
          o(e, "index-zero-base") || o(e, "data-index-zero-base") || 0,
          10
        ),
        amount: parseInt(o(e, "amount") || o(e, "data-amount") || 36, 10),
        speed: parseInt(o(e, "speed") || o(e, "data-speed") || 80, 10),
        dragSpeed: parseInt(
          o(e, "drag-speed") || o(e, "data-drag-speed") || 150,
          10
        ),
        keys: r(e, "keys"),
        boxShadow: o(e, "box-shadow") || o(e, "data-box-shadow"),
        autoplay: r(e, "autoplay"),
        autoplayReverse: r(e, "autoplay-reverse"),
        bottomCircle: r(e, "bottom-circle"),
        fullScreen: r(e, "full-screen"),
        magnifier:
          (null !== o(e, "magnifier") || null !== o(e, "data-magnifier")) &&
          parseInt(o(e, "magnifier") || o(e, "data-magnifier"), 10),
        bottomCircleOffset: parseInt(
          o(e, "bottom-circle-offset") ||
            o(e, "data-bottom-circle-offset") ||
            5,
          10
        ),
        ratio: parseFloat(o(e, "ratio") || o(e, "data-ratio") || 0) || !1,
        responsive: r(e, "responsive"),
        ciToken: o(e, "responsive") || o(e, "data-responsive") || "demo",
        ciSize: o(e, "size") || o(e, "data-size"),
        ciOperation: o(e, "operation") || o(e, "data-operation") || "width",
        ciFilters: o(e, "filters") || o(e, "data-filters") || "q35",
        lazyload: r(e, "lazyload"),
        lazySelector:
          o(e, "lazyload-selector") ||
          o(e, "data-lazyload-selector") ||
          "lazyload",
        spinReverse: r(e, "spin-reverse"),
        controlReverse: r(e, "control-reverse"),
        stopAtEdges: r(e, "stop-at-edges"),
        hide360Logo: r(e, "hide-360-logo"),
        logoSrc:
          o(e, "logo-src") ||
          "360_view.svg",
      };
    }),
      (t.set360ViewIconStyles = function (e) {
        (e.style.position = "absolute"),
          (e.style.top = "0"),
          (e.style.bottom = "0"),
          (e.style.left = "0"),
          (e.style.right = "0"),
          (e.style.width = "100px"),
          (e.style.height = "100px"),
          (e.style.margin = "auto"),
          (e.style.backgroundColor = "rgba(255,255,255,0.8)"),
          (e.style.borderRadius = "50%"),
          (e.style.boxShadow = "rgb(255, 255, 255, 0.5) 0px 0px 4px"),
          (e.style.transition = "0.5s all"),
          (e.style.color = "rgb(80,80,80)"),
          (e.style.textAlign = "center"),
          (e.style.lineHeight = "100px"),
          (e.style.zIndex = "2");
      }),
      (t.set360ViewCircleIconStyles = function (e, t) {
        (e.src =
          ""),
          (e.style.position = "absolute"),
          (e.style.top = "auto"),
          (e.style.bottom = t + "%"),
          (e.style.left = "0"),
          (e.style.right = "0"),
          (e.style.width = "80%"),
          (e.style.height = "auto"),
          (e.style.margin = "auto"),
          (e.style.transition = "0.5s all"),
          (e.style.zIndex = "2");
      }),
      (t.setLoaderStyles = function (e) {
        (e.className = "cloudimage-360-loader"),
          (e.style.position = "absolute"),
          (e.style.zIndex = "100"),
          (e.style.top = "0"),
          (e.style.left = "0"),
          (e.style.right = "0"),
          (e.style.width = "0%"),
          (e.style.height = "8px"),
          (e.style.background = "rgb(165,175,184)");
      }),
      (t.setBoxShadowStyles = function (e, t) {
        (e.className = "cloudimage-360-box-shadow"),
          (e.style.position = "absolute"),
          (e.style.zIndex = "99"),
          (e.style.top = "0"),
          (e.style.left = "0"),
          (e.style.right = "0"),
          (e.style.bottom = "0"),
          (e.style.boxShadow = t);
      }),
      (t.setView360Icon = function (e, t) {
        e.style.background =
          "rgba(255,255,255,0.8) url('" + t + "') 50% 50% / contain no-repeat";
      }),
      (t.magnify = function (e, t, n, i) {
        var r, o;
        function a(t) {
          var a,
            s = void 0,
            l = void 0;
          t.preventDefault(),
            (a = (function (t) {
              var n,
                i = 0,
                r = 0;
              return (
                (t = t || window.event),
                (n = e.getBoundingClientRect()),
                (i = t.pageX - n.left),
                (r = t.pageY - n.top),
                (i -= window.pageXOffset),
                (r -= window.pageYOffset),
                { x: i, y: r }
              );
            })(t)),
            (s = a.x),
            (l = a.y),
            s > e.offsetWidth - r / i && (s = e.offsetWidth - r / i),
            s < r / i && (s = r / i),
            l > e.offsetHeight - o / i && (l = e.offsetHeight - o / i),
            l < o / i && (l = o / i),
            (n.style.left = s - r + "px"),
            (n.style.top = l - o + "px"),
            (n.style.backgroundPosition =
              "-" + (s * i - r + 3) + "px -" + (l * i - o + 3) + "px");
        }
        n.setAttribute("class", "img-magnifier-glass"),
          e.prepend(n),
          (n.style.backgroundColor = "#fff"),
          (n.style.backgroundImage = "url('" + t + "')"),
          (n.style.backgroundRepeat = "no-repeat"),
          (n.style.backgroundSize =
            e.offsetWidth * i + "px " + e.offsetHeight * i + "px"),
          (n.style.position = "absolute"),
          (n.style.border = "3px solid #000"),
          (n.style.borderRadius = "50%"),
          (n.style.cursor = "wait"),
          (n.style.lineHeight = "200px"),
          (n.style.textAlign = "center"),
          (n.style.zIndex = "1000"),
          (n.style.width = "250px"),
          (n.style.height = "250px"),
          (n.style.top = "-75px"),
          (n.style.right = "-85px"),
          (r = n.offsetWidth / 2),
          (o = n.offsetHeight / 2),
          n.addEventListener("mousemove", a),
          e.addEventListener("mousemove", a),
          n.addEventListener("touchmove", a),
          e.addEventListener("touchmove", a);
      }),
      (t.setMagnifyIconStyles = function (e, t) {
        (e.style.position = "absolute"),
          (e.style.top = t ? "35px" : "5px"),
          (e.style.right = "5px"),
          (e.style.width = "25px"),
          (e.style.height = "25px"),
          (e.style.zIndex = "101"),
          (e.style.cursor = "pointer"),
          (e.style.background =
            "url('");
      }),
      (t.setFullScreenModalStyles = function (e) {
        (e.style.position = "fixed"),
          (e.style.top = "0"),
          (e.style.bottom = "0"),
          (e.style.left = "0"),
          (e.style.right = "0"),
          (e.style.width = "100%"),
          (e.style.height = "100%"),
          (e.style.zIndex = "999"),
          (e.style.background = "#fff");
      }),
      (t.setFullScreenIconStyles = function (e) {
        (e.style.position = "absolute"),
          (e.style.top = "5px"),
          (e.style.right = "5px"),
          (e.style.width = "25px"),
          (e.style.height = "25px"),
          (e.style.zIndex = "101"),
          (e.style.cursor = "pointer"),
          (e.style.background =
            "url('");
      }),
      (t.setCloseFullScreenViewStyles = function (e) {
        (e.style.position = "absolute"),
          (e.style.top = "5px"),
          (e.style.right = "5px"),
          (e.style.width = "25px"),
          (e.style.height = "25px"),
          (e.style.zIndex = "101"),
          (e.style.cursor = "pointer"),
          (e.style.background =
            "url('");
      }),
      (t.getResponsiveWidthOfContainer = function (e) {
        return (t = e) <= 25
          ? "25"
          : t <= 50
          ? "50"
          : (100 * Math.ceil(t / 100)).toString();
        var t;
      }),
      (t.getSizeAccordingToPixelRatio = function (e) {
        var t = e.toString().split("x"),
          n = [];
        return (
          [].forEach.call(t, function (e) {
            n.push(e * Math.round(window.devicePixelRatio || 1));
          }),
          n.join("x")
        );
      }),
      (t.contain = a),
      (t.addClass = function (e, t) {
        e.classList ? e.classList.add(t) : (e.className += " " + t);
      }),
      (t.removeClass = function (e, t) {
        e.classList
          ? e.classList.remove(t)
          : (e.className = e.className.replace(
              new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
              " "
            ));
      }),
      (t.pad = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (e += "").length >= t
          ? e
          : new Array(t - e.length + 1).join("0") + e;
      });
  },
  function (e, t, n) {
    var i = n(84);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(18)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {
    (e.exports = n(17)(!1)).push([
      e.i,
      "body, html {\r\n  font-size: 14px;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.home {\r\n  position: relative;\r\n  border-top: 1px solid transparent;\r\n  background: #222;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.home .cloudimage-logo {\r\n  width: 200px;\r\n  position: absolute;\r\n  top: 30px;\r\n  left: 30px;\r\n}\r\n\r\n.home .logo {\r\n  font-weight: normal;\r\n  font-size: 24px;\r\n  color: #fff;\r\n}\r\n\r\n.home .logo:hover, .home .logo:active, .home .logo:visited {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.home .fork-me-on-github {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  border: 0;\r\n  width: auto;\r\n}\r\n\r\n.home h1 {\r\n  font-size: 48px;\r\n  margin-top: 40px;\r\n  margin-bottom: 30px;\r\n  font-weight: lighter;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.home h2 {\r\n  font-weight: lighter;\r\n  color: #d0d0d0;\r\n  line-height: 1.5em;\r\n  font-size: 18px;\r\n  max-width: 770px;\r\n  display: inline-block;\r\n}\r\n\r\n.home h2 strong {\r\n  color: #fff;\r\n}\r\n\r\n.home .actions-wrapper {\r\n  margin-top: 20px;\r\n}\r\n\r\n.home .robot-icon {\r\n  position: absolute;\r\n  left: 50px;\r\n  width: 200px;\r\n  top: 110px;\r\n  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */\r\n  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */\r\n  animation-name: example;\r\n  animation-duration: 4s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@media all and (max-width: 1380px) {\r\n  .home .robot-icon {\r\n    left: 45px;\r\n    width: 100px;\r\n    top: 15px;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 600px) {\r\n  .home  {\r\n    padding-top: 150px;\r\n  }\r\n\r\n  .home h1 {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .home .robot-icon {\r\n    left: 50%;\r\n    width: 100px;\r\n    margin-left: -50px;\r\n    top: 15px;\r\n  }\r\n}\r\n\r\n@keyframes example {\r\n  0%   {transform: translate(0px, 0px);}\r\n  50%  {transform: translate(5px, 2px) scale(1.02);}\r\n  100% {transform: translate(0px, 0px);}\r\n}\r\n\r\n.ready-to-start {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.ready-to-start h2 {\r\n  font-weight: lighter;\r\n  font-size: 40px;\r\n  max-width: 770px;\r\n  margin: 0 auto 30px auto;\r\n}\r\n\r\n.ready-to-start p, .ready-to-start ul {\r\n  display: block;\r\n  max-width: 850px;\r\n  margin: 0 auto;\r\n  font-weight: lighter;\r\n  line-height: 1.5em;\r\n  font-size: 18px;\r\n}\r\n\r\n.ready-to-start ul li {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.uploaded-image-container {\r\n  padding: 20px 0;\r\n}\r\n\r\n.filerobot-uploader-view-wrapper {\r\n  position: relative;\r\n  margin: 0 auto -20px;\r\n  top: 30px;\r\n  padding: 0;\r\n  max-width: 770px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  border-radius: 5px;\r\n}\r\n\r\n.filerobot-uploader-view-wrapper .filerobot-uploader-view {\r\n  width: 100%;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#image-box {\r\n  cursor: pointer;\r\n}\r\n\r\n.image-container {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  width: 50%;\r\n  height: 400px;\r\n  background-color: #222222;\r\n  border-radius: 5px;\r\n  transition: 0.3s all;\r\n}\r\n\r\n.image-container img {\r\n  max-width: calc(100% - 30px);\r\n  max-height: calc(100% - 30px);\r\n  width: auto;\r\n  height: auto;\r\n  position: absolute;\r\n  top: 15px;\r\n  bottom: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  margin: auto;\r\n}\r\n\r\n#image-description {\r\n  display: inline-block;\r\n  width: 45%;\r\n  vertical-align: top;\r\n  padding: 20px;\r\n  font-size: 18px;\r\n}\r\n\r\n#image-description ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#image-description ul li {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#image-description ul li span:first-child {\r\n  display: inline-block;\r\n  font-weight: bold;\r\n  color: #6d6d6d;\r\n}\r\n\r\n.highlight {\r\n  padding: 1.5rem;\r\n  margin-bottom: 1rem;\r\n  background-color: #f8f9fa;\r\n  display: block;\r\n}\r\n\r\n.highlight pre {\r\n  margin: 0;\r\n}\r\n\r\n.see-doc {\r\n  font-size: 14px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.on-load {\r\n  display: block !important;\r\n}\r\n\r\n.github-logo-wrapper {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n}\r\n\r\n.github-logo-wrapper .github-logo {\r\n  width: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.title-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.wrapper {\r\n  transition: 0.3s all;\r\n  opacity: 0;\r\n}\r\n\r\n.wrapper.active {\r\n  visibility: visible !important;\r\n  opacity: 1 !important;\r\n}\r\n\r\n#edit-btn {\r\n  position: relative;\r\n}\r\n\r\n.arrow {\r\n  background: url('') 50% 50% / contain no-repeat;\r\n  width: 100px;\r\n  height: 250px;\r\n  position: absolute;\r\n  top: -42px;\r\n  left: -97px;\r\n  transform: rotate(38deg);\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.action-wrapper {\r\n  text-align: left;\r\n  position: relative;\r\n  background-color: #fff;\r\n  margin: 0 0 70px 0px;\r\n  padding: 40px 40px 40px 60px;\r\n  font-size: 18px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  z-index: 1;\r\n  -webkit-transition: all 0.6s ease-in-out 0s;\r\n  -moz-transition: all 0.6s ease-in-out 0s;\r\n  -o-transition: all 0.6s ease-in-out 0s;\r\n  transition: all 0.6s ease-in-out 0s;\r\n}\r\n\r\n.action-wrapper:after {\r\n  width: 58px;\r\n  height: 58px;\r\n  line-height: 58px;\r\n  background-color: #327fc7;\r\n  border-radius: 200px;\r\n  font-size: 30px;\r\n  font-weight: 300;\r\n  color: #fff;\r\n  position: absolute;\r\n  left: -15px;\r\n  top: -15px;\r\n  text-align: center;\r\n  -webkit-backface-visibility: hidden;\r\n  z-index: 100;\r\n}\r\n\r\n.action-wrapper.first-action:after {\r\n  content: '1';\r\n}\r\n\r\n.action-wrapper.second-action:after {\r\n  content: '2';\r\n}\r\n\r\n.action-wrapper.third-action:after {\r\n  content: '3';\r\n}\r\n\r\n.action-wrapper.forth-action:after {\r\n  content: '4';\r\n}\r\n\r\n.action-wrapper p {\r\n  font-weight: lighter;\r\n}\r\n\r\n.plugin-version-switcher {\r\n  padding-bottom: 30px;\r\n  display: inline-block;\r\n}\r\n\r\n.inner-spinner {\r\n  display: none;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background: #fff;\r\n  padding-bottom: 60px;\r\n}\r\n\r\nfooter {\r\n  background: #fff;\r\n  padding-bottom: 30px;\r\n  font-weight: lighter;\r\n}\r\n\r\nfooter .copyright {\r\n  margin-top: 30px;\r\n}\r\n\r\nfooter .team-desc {\r\n  text-align: left;\r\n}\r\n\r\nfooter .footer-menu {\r\n  text-align: right;\r\n}\r\n\r\nfooter .footer-menu ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\nfooter .footer-menu ul li {\r\n  display: inline-block;\r\n  margin-left: 15px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n@media all and (max-width: 576px) {\r\n  footer .team-desc   {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  footer .footer-menu {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.twitter-share-button {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  height: 20px;\r\n  padding: 0 5px;\r\n  line-height: 18px;\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFAFBFC', endColorstr='#FFE4EBF0')\";\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n  cursor: pointer;\r\n  border-radius: 0.25em;\r\n  text-decoration: none;\r\n  vertical-align: top;\r\n  background-color: #1b95e0;\r\n  color: #fff;\r\n}\r\n\r\n.twitter-share-button i {\r\n  position: relative;\r\n  top: 2px;\r\n  display: inline-block;\r\n  width: 14px;\r\n  height: 14px;\r\n  background: transparent 0 0 no-repeat;\r\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E);\r\n  box-sizing: border-box;\r\n  padding: 1px 8px 1px 6px;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.twitter-share-button span {\r\n  vertical-align: top;\r\n}\r\n\r\n.container h1 {\r\n  margin-top: 40px;\r\n}\r\n\r\n.container h1 + p {\r\n  color: #ababab;\r\n  font-size: 22px;\r\n}\r\n\r\np.description {\r\n  margin-top: 10px;\r\n}\r\n\r\np.numbers {\r\n  font-size: 16px;\r\n  color: #4b4b4b;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .desc-wrapper-with-media-query {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n\r\ndiv.images-in-columns div:not(.container-width-box) {\r\n  margin-bottom: 15px;\r\n  font-size: 14px;\r\n}\r\n\r\npre {\r\n  padding: 1.5rem;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  border-width: .2rem;\r\n  margin: 1rem -15px 0;\r\n  border: solid #f8f9fa;\r\n}\r\n\r\npre p {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.logo {\r\n  display: inline-block;\r\n  width: auto;\r\n  margin-left: 5px;\r\n  position: relative;\r\n  margin-top: -8px;\r\n  height: 47px;\r\n}\r\n\r\n.table {\r\n  margin: 30px auto 30px auto;\r\n  max-width: 850px;\r\n}\r\n\r\n.table thead {\r\n  text-align: left;\r\n}\r\n\r\n.table thead th {\r\n  vertical-align: middle;\r\n  font-size: 16px;\r\n}\r\n\r\n.table tbody td {\r\n  font-size: 18px;\r\n}\r\n\r\n.container-width-box {\r\n  background: #222;\r\n  color: #fff;\r\n  border-top: 1px solid #6d6d6d;\r\n  border-bottom: 1px solid #6d6d6d;\r\n  text-align: center;\r\n  padding: 4px 0;\r\n}\r\n\r\n.device-pixel-ratio {\r\n  background: #222;\r\n  color: #fff;\r\n  border: 1px solid #6d6d6d;\r\n  border-radius: 4px;\r\n  padding: 4px 8px;\r\n  position: fixed;\r\n  bottom: 15px;\r\n  right: 15px;\r\n  z-index: 100;\r\n}\r\n\r\n.device-pixel-ratio span {\r\n  background: #fff;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 21px;\r\n  height: 21px;\r\n  color: #222;\r\n  text-align: center;\r\n}\r\n\r\n.ready-to-start.filerobot-ui-family {\r\n  padding-bottom: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.ready-to-start.filerobot-ui-family ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-width: none;\r\n  font-size: 16px;\r\n  text-align: left;\r\n}\r\n\r\n.ready-to-start.filerobot-ui-family h5 {\r\n  font-weight: lighter;\r\n}\r\n\r\n.ready-to-start.filerobot-ui-family ul li {\r\n  display: inline-block;\r\n  margin-right: 30px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .filerobot-ui-family-label, .filerobot-ui-family-libs {\r\n    min-width: 100% !important;\r\n  }\r\n\r\n  .ready-to-start.filerobot-ui-family h5 {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.view-360-capture {\r\n  display: block;\r\n  max-width: 850px;\r\n  margin: 0 auto;\r\n  font-weight: lighter;\r\n  line-height: 1.5em;\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.main-360-spin .cloudimage-360-box-shadow {\r\n  background: -moz-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 42%, #222 100%); /* FF3.6-15 */\r\n  background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 42%,#222 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 42%,#222 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#222', endColorstr='#222',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */\r\n}",
      "",
    ]);
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        i = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, t) {
          var r,
            o = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((r =
                0 === o.indexOf("//")
                  ? o
                  : 0 === o.indexOf("/")
                  ? n + o
                  : i + o.replace(/^\.\//, "")),
              "url(" + JSON.stringify(r) + ")");
        }
      );
    };
  },
  function (e, t, n) {
    var i = n(87);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(18)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {
    (e.exports = n(17)(!1)).push([
      e.i,
      "@font-face {\r\n  font-family: 'Helvetica Neue';\r\n  src: url('');\r\n  src: url('') format('embedded-opentype'),\r\n  url('') format('woff2'),\r\n  url('') format('woff'),\r\n  url('') format('truetype'),\r\n  url('') format('svg');\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Helvetica Neue';\r\n  src: url('');\r\n  src: url('') format('embedded-opentype'),\r\n  url('') format('woff2'),\r\n  url('') format('woff'),\r\n  url('') format('truetype'),\r\n  url('') format('svg');\r\n  font-weight: 300;\r\n  font-style: normal;\r\n}\r\n\r\n",
      "",
    ]);
  },
  function (e, t, n) {
    var i, r, o;
    (r = function (e) {
      var t = [],
        n = Object.keys,
        i = Object.create(null),
        r = Object.create(null),
        o = !0,
        a = /^(no-?highlight|plain|text)$/i,
        s = /\blang(?:uage)?-([\w-]+)\b/i,
        l = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        c =
          "Could not find the language '{}', did you forget to load/include a language module?",
        u = {
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: void 0,
        },
        d = "of and for in not or if then".split(" ");
      function T(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function h(e) {
        return e.nodeName.toLowerCase();
      }
      function f(e) {
        return a.test(e);
      }
      function S(e) {
        var t,
          n = {},
          i = Array.prototype.slice.call(arguments, 1);
        for (t in e) n[t] = e[t];
        return (
          i.forEach(function (e) {
            for (t in e) n[t] = e[t];
          }),
          n
        );
      }
      function b(e) {
        var t = [];
        return (
          (function e(n, i) {
            for (var r = n.firstChild; r; r = r.nextSibling)
              3 === r.nodeType
                ? (i += r.nodeValue.length)
                : 1 === r.nodeType &&
                  (t.push({ event: "start", offset: i, node: r }),
                  (i = e(r, i)),
                  h(r).match(/br|hr|img|input/) ||
                    t.push({ event: "stop", offset: i, node: r }));
            return i;
          })(e, 0),
          t
        );
      }
      function p(e) {
        return (
          e.variants &&
            !e.cached_variants &&
            (e.cached_variants = e.variants.map(function (t) {
              return S(e, { variants: null }, t);
            })),
          e.cached_variants
            ? e.cached_variants
            : (function e(t) {
                return !!t && (t.endsWithParent || e(t.starts));
              })(e)
            ? [S(e, { starts: e.starts ? S(e.starts) : null })]
            : Object.isFrozen(e)
            ? [S(e)]
            : [e]
        );
      }
      function g(e, t) {
        return t
          ? Number(t)
          : ((n = e), -1 != d.indexOf(n.toLowerCase()) ? 0 : 1);
        var n;
      }
      function m(e) {
        function t(e) {
          return (e && e.source) || e;
        }
        function i(n, i) {
          return new RegExp(
            t(n),
            "m" + (e.case_insensitive ? "i" : "") + (i ? "g" : "")
          );
        }
        function r(e) {
          var n,
            r,
            o = {},
            a = [],
            s = {},
            l = 1;
          function c(e, t) {
            (o[l] = e),
              a.push([e, t]),
              (l +=
                (function (e) {
                  return new RegExp(e.toString() + "|").exec("").length - 1;
                })(t) + 1);
          }
          for (var u = 0; u < e.contains.length; u++)
            c(
              (r = e.contains[u]),
              r.beginKeywords ? "\\.?(?:" + r.begin + ")\\.?" : r.begin
            );
          e.terminator_end && c("end", e.terminator_end),
            e.illegal && c("illegal", e.illegal);
          var d = a.map(function (e) {
            return e[1];
          });
          return (
            (n = i(
              (function (e, n) {
                for (
                  var i = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,
                    r = 0,
                    o = "",
                    a = 0;
                  a < e.length;
                  a++
                ) {
                  var s = (r += 1),
                    l = t(e[a]);
                  for (a > 0 && (o += n), o += "("; l.length > 0; ) {
                    var c = i.exec(l);
                    if (null == c) {
                      o += l;
                      break;
                    }
                    (o += l.substring(0, c.index)),
                      (l = l.substring(c.index + c[0].length)),
                      "\\" == c[0][0] && c[1]
                        ? (o += "\\" + String(Number(c[1]) + s))
                        : ((o += c[0]), "(" == c[0] && r++);
                  }
                  o += ")";
                }
                return o;
              })(d, "|"),
              !0
            )),
            (s.lastIndex = 0),
            (s.exec = function (t) {
              var i;
              if (0 === a.length) return null;
              n.lastIndex = s.lastIndex;
              var r = n.exec(t);
              if (!r) return null;
              for (var l = 0; l < r.length; l++)
                if (null != r[l] && null != o["" + l]) {
                  i = o["" + l];
                  break;
                }
              return (
                "string" == typeof i
                  ? ((r.type = i), (r.extra = [e.illegal, e.terminator_end]))
                  : ((r.type = "begin"), (r.rule = i)),
                r
              );
            }),
            s
          );
        }
        if (e.contains && -1 != e.contains.indexOf("self")) {
          if (!o)
            throw new Error(
              "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
            );
          e.contains = e.contains.filter(function (e) {
            return "self" != e;
          });
        }
        !(function o(a, s) {
          a.compiled ||
            ((a.compiled = !0),
            (a.keywords = a.keywords || a.beginKeywords),
            a.keywords &&
              (a.keywords = (function (e, t) {
                var i = {};
                return (
                  "string" == typeof e
                    ? r("keyword", e)
                    : n(e).forEach(function (t) {
                        r(t, e[t]);
                      }),
                  i
                );
                function r(e, n) {
                  t && (n = n.toLowerCase()),
                    n.split(" ").forEach(function (t) {
                      var n = t.split("|");
                      i[n[0]] = [e, g(n[0], n[1])];
                    });
                }
              })(a.keywords, e.case_insensitive)),
            (a.lexemesRe = i(a.lexemes || /\w+/, !0)),
            s &&
              (a.beginKeywords &&
                (a.begin =
                  "\\b(" + a.beginKeywords.split(" ").join("|") + ")\\b"),
              a.begin || (a.begin = /\B|\b/),
              (a.beginRe = i(a.begin)),
              a.endSameAsBegin && (a.end = a.begin),
              a.end || a.endsWithParent || (a.end = /\B|\b/),
              a.end && (a.endRe = i(a.end)),
              (a.terminator_end = t(a.end) || ""),
              a.endsWithParent &&
                s.terminator_end &&
                (a.terminator_end += (a.end ? "|" : "") + s.terminator_end)),
            a.illegal && (a.illegalRe = i(a.illegal)),
            null == a.relevance && (a.relevance = 1),
            a.contains || (a.contains = []),
            (a.contains = Array.prototype.concat.apply(
              [],
              a.contains.map(function (e) {
                return p("self" === e ? a : e);
              })
            )),
            a.contains.forEach(function (e) {
              o(e, a);
            }),
            a.starts && o(a.starts, s),
            (a.terminators = r(a)));
        })(e);
      }
      function v(e, t, n, r) {
        var a = t;
        function s(e, t) {
          var n = g.case_insensitive ? t[0].toLowerCase() : t[0];
          return e.keywords.hasOwnProperty(n) && e.keywords[n];
        }
        function l(e, t, n, i) {
          if (!n && "" === t) return "";
          if (!e) return t;
          var r = '<span class="' + (i ? "" : u.classPrefix);
          return (r += e + '">') + t + (n ? "" : "</span>");
        }
        function d() {
          (y +=
            null != P.subLanguage
              ? (function () {
                  var e = "string" == typeof P.subLanguage;
                  if (e && !i[P.subLanguage]) return T(C);
                  var t = e
                    ? v(P.subLanguage, C, !0, G[P.subLanguage])
                    : M(C, P.subLanguage.length ? P.subLanguage : void 0);
                  return (
                    P.relevance > 0 && (w += t.relevance),
                    e && (G[P.subLanguage] = t.top),
                    l(t.language, t.value, !1, !0)
                  );
                })()
              : (function () {
                  var e, t, n, i;
                  if (!P.keywords) return T(C);
                  for (
                    i = "",
                      t = 0,
                      P.lexemesRe.lastIndex = 0,
                      n = P.lexemesRe.exec(C);
                    n;

                  )
                    (i += T(C.substring(t, n.index))),
                      (e = s(P, n))
                        ? ((w += e[1]), (i += l(e[0], T(n[0]))))
                        : (i += T(n[0])),
                      (t = P.lexemesRe.lastIndex),
                      (n = P.lexemesRe.exec(C));
                  return i + T(C.substr(t));
                })()),
            (C = "");
        }
        function h(e) {
          (y += e.className ? l(e.className, "", !0) : ""),
            (P = Object.create(e, { parent: { value: P } }));
        }
        function f(e) {
          var t = e[0],
            n = e.rule;
          return (
            n &&
              n.endSameAsBegin &&
              (n.endRe = new RegExp(
                t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
                "m"
              )),
            n.skip
              ? (C += t)
              : (n.excludeBegin && (C += t),
                d(),
                n.returnBegin || n.excludeBegin || (C = t)),
            h(n),
            n.returnBegin ? 0 : t.length
          );
        }
        function S(e) {
          var t = e[0],
            n = a.substr(e.index),
            i = (function e(t, n) {
              if (
                (function (e, t) {
                  var n = e && e.exec(t);
                  return n && 0 === n.index;
                })(t.endRe, n)
              ) {
                for (; t.endsParent && t.parent; ) t = t.parent;
                return t;
              }
              if (t.endsWithParent) return e(t.parent, n);
            })(P, n);
          if (i) {
            var r = P;
            r.skip
              ? (C += t)
              : (r.returnEnd || r.excludeEnd || (C += t),
                d(),
                r.excludeEnd && (C = t));
            do {
              P.className && (y += "</span>"),
                P.skip || P.subLanguage || (w += P.relevance),
                (P = P.parent);
            } while (P !== i.parent);
            return (
              i.starts &&
                (i.endSameAsBegin && (i.starts.endRe = i.endRe), h(i.starts)),
              r.returnEnd ? 0 : t.length
            );
          }
        }
        var b = {};
        function p(e, t) {
          var i = t && t[0];
          if (((C += e), null == i)) return d(), 0;
          if (
            "begin" == b.type &&
            "end" == t.type &&
            b.index == t.index &&
            "" === i
          )
            return (C += a.slice(t.index, t.index + 1)), 1;
          if ("illegal" === b.type && "" === i)
            return (C += a.slice(t.index, t.index + 1)), 1;
          if (((b = t), "begin" === t.type)) return f(t);
          if ("illegal" === t.type && !n)
            throw new Error(
              'Illegal lexeme "' +
                i +
                '" for mode "' +
                (P.className || "<unnamed>") +
                '"'
            );
          if ("end" === t.type) {
            var r = S(t);
            if (null != r) return r;
          }
          return (C += i), i.length;
        }
        var g = E(e);
        if (!g)
          throw (
            (console.error(c.replace("{}", e)),
            new Error('Unknown language: "' + e + '"'))
          );
        m(g);
        var A,
          P = r || g,
          G = {},
          y = "";
        for (A = P; A !== g; A = A.parent)
          A.className && (y = l(A.className, "", !0) + y);
        var C = "",
          w = 0;
        try {
          for (
            var x, B, I = 0;
            (P.terminators.lastIndex = I), (x = P.terminators.exec(a));

          )
            (B = p(a.substring(I, x.index), x)), (I = x.index + B);
          for (p(a.substr(I)), A = P; A.parent; A = A.parent)
            A.className && (y += "</span>");
          return { relevance: w, value: y, illegal: !1, language: e, top: P };
        } catch (t) {
          if (t.message && -1 !== t.message.indexOf("Illegal"))
            return { illegal: !0, relevance: 0, value: T(a) };
          if (o)
            return {
              relevance: 0,
              value: T(a),
              language: e,
              top: P,
              errorRaised: t,
            };
          throw t;
        }
      }
      function M(e, t) {
        t = t || u.languages || n(i);
        var r = { relevance: 0, value: T(e) },
          o = r;
        return (
          t
            .filter(E)
            .filter(C)
            .forEach(function (t) {
              var n = v(t, e, !1);
              (n.language = t),
                n.relevance > o.relevance && (o = n),
                n.relevance > r.relevance && ((o = r), (r = n));
            }),
          o.language && (r.second_best = o),
          r
        );
      }
      function A(e) {
        return u.tabReplace || u.useBR
          ? e.replace(l, function (e, t) {
              return u.useBR && "\n" === e
                ? "<br>"
                : u.tabReplace
                ? t.replace(/\t/g, u.tabReplace)
                : "";
            })
          : e;
      }
      function P(e) {
        var n,
          i,
          o,
          a,
          l,
          d = (function (e) {
            var t,
              n,
              i,
              r,
              o = e.className + " ";
            if (
              ((o += e.parentNode ? e.parentNode.className : ""),
              (n = s.exec(o)))
            ) {
              var a = E(n[1]);
              return (
                a ||
                  (console.warn(c.replace("{}", n[1])),
                  console.warn(
                    "Falling back to no-highlight mode for this block.",
                    e
                  )),
                a ? n[1] : "no-highlight"
              );
            }
            for (t = 0, i = (o = o.split(/\s+/)).length; t < i; t++)
              if (f((r = o[t])) || E(r)) return r;
          })(e);
        f(d) ||
          (u.useBR
            ? ((n = document.createElement(
                "div"
              )).innerHTML = e.innerHTML
                .replace(/\n/g, "")
                .replace(/<br[ \/]*>/g, "\n"))
            : (n = e),
          (l = n.textContent),
          (o = d ? v(d, l, !0) : M(l)),
          (i = b(n)).length &&
            (((a = document.createElement("div")).innerHTML = o.value),
            (o.value = (function (e, n, i) {
              var r = 0,
                o = "",
                a = [];
              function s() {
                return e.length && n.length
                  ? e[0].offset !== n[0].offset
                    ? e[0].offset < n[0].offset
                      ? e
                      : n
                    : "start" === n[0].event
                    ? e
                    : n
                  : e.length
                  ? e
                  : n;
              }
              function l(e) {
                o +=
                  "<" +
                  h(e) +
                  t.map
                    .call(e.attributes, function (e) {
                      return (
                        " " +
                        e.nodeName +
                        '="' +
                        T(e.value).replace(/"/g, "&quot;") +
                        '"'
                      );
                    })
                    .join("") +
                  ">";
              }
              function c(e) {
                o += "</" + h(e) + ">";
              }
              function u(e) {
                ("start" === e.event ? l : c)(e.node);
              }
              for (; e.length || n.length; ) {
                var d = s();
                if (
                  ((o += T(i.substring(r, d[0].offset))),
                  (r = d[0].offset),
                  d === e)
                ) {
                  a.reverse().forEach(c);
                  do {
                    u(d.splice(0, 1)[0]), (d = s());
                  } while (d === e && d.length && d[0].offset === r);
                  a.reverse().forEach(l);
                } else
                  "start" === d[0].event ? a.push(d[0].node) : a.pop(),
                    u(d.splice(0, 1)[0]);
              }
              return o + T(i.substr(r));
            })(i, b(a), l))),
          (o.value = A(o.value)),
          (e.innerHTML = o.value),
          (e.className = (function (e, t, n) {
            var i = t ? r[t] : n,
              o = [e.trim()];
            return (
              e.match(/\bhljs\b/) || o.push("hljs"),
              -1 === e.indexOf(i) && o.push(i),
              o.join(" ").trim()
            );
          })(e.className, d, o.language)),
          (e.result = { language: o.language, re: o.relevance }),
          o.second_best &&
            (e.second_best = {
              language: o.second_best.language,
              re: o.second_best.relevance,
            }));
      }
      function G() {
        if (!G.called) {
          G.called = !0;
          var e = document.querySelectorAll("pre code");
          t.forEach.call(e, P);
        }
      }
      var y = { disableAutodetect: !0 };
      function E(e) {
        return (e = (e || "").toLowerCase()), i[e] || i[r[e]];
      }
      function C(e) {
        var t = E(e);
        return t && !t.disableAutodetect;
      }
      return (
        (e.highlight = v),
        (e.highlightAuto = M),
        (e.fixMarkup = A),
        (e.highlightBlock = P),
        (e.configure = function (e) {
          u = S(u, e);
        }),
        (e.initHighlighting = G),
        (e.initHighlightingOnLoad = function () {
          window.addEventListener("DOMContentLoaded", G, !1),
            window.addEventListener("load", G, !1);
        }),
        (e.registerLanguage = function (t, n) {
          var a;
          try {
            a = n(e);
          } catch (e) {
            if (
              (console.error(
                "Language definition for '{}' could not be registered.".replace(
                  "{}",
                  t
                )
              ),
              !o)
            )
              throw e;
            console.error(e), (a = y);
          }
          (i[t] = a),
            (a.rawDefinition = n.bind(null, e)),
            a.aliases &&
              a.aliases.forEach(function (e) {
                r[e] = t;
              });
        }),
        (e.listLanguages = function () {
          return n(i);
        }),
        (e.getLanguage = E),
        (e.requireLanguage = function (e) {
          var t = E(e);
          if (t) return t;
          throw new Error(
            "The '{}' language is required, but not loaded.".replace("{}", e)
          );
        }),
        (e.autoDetection = C),
        (e.inherit = S),
        (e.debugMode = function () {
          o = !1;
        }),
        (e.IDENT_RE = "[a-zA-Z]\\w*"),
        (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
        (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
        (e.C_NUMBER_RE =
          "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
        (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
        (e.RE_STARTERS_RE =
          "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
        (e.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }),
        (e.APOS_STRING_MODE = {
          className: "string",
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        }),
        (e.QUOTE_STRING_MODE = {
          className: "string",
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [e.BACKSLASH_ESCAPE],
        }),
        (e.PHRASAL_WORDS_MODE = {
          begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        }),
        (e.COMMENT = function (t, n, i) {
          var r = e.inherit(
            { className: "comment", begin: t, end: n, contains: [] },
            i || {}
          );
          return (
            r.contains.push(e.PHRASAL_WORDS_MODE),
            r.contains.push({
              className: "doctag",
              begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
              relevance: 0,
            }),
            r
          );
        }),
        (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
        (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
        (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
        (e.NUMBER_MODE = {
          className: "number",
          begin: e.NUMBER_RE,
          relevance: 0,
        }),
        (e.C_NUMBER_MODE = {
          className: "number",
          begin: e.C_NUMBER_RE,
          relevance: 0,
        }),
        (e.BINARY_NUMBER_MODE = {
          className: "number",
          begin: e.BINARY_NUMBER_RE,
          relevance: 0,
        }),
        (e.CSS_NUMBER_MODE = {
          className: "number",
          begin:
            e.NUMBER_RE +
            "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
          relevance: 0,
        }),
        (e.REGEXP_MODE = {
          className: "regexp",
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              begin: /\[/,
              end: /\]/,
              relevance: 0,
              contains: [e.BACKSLASH_ESCAPE],
            },
          ],
        }),
        (e.TITLE_MODE = {
          className: "title",
          begin: e.IDENT_RE,
          relevance: 0,
        }),
        (e.UNDERSCORE_TITLE_MODE = {
          className: "title",
          begin: e.UNDERSCORE_IDENT_RE,
          relevance: 0,
        }),
        (e.METHOD_GUARD = {
          begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
          relevance: 0,
        }),
        [
          e.BACKSLASH_ESCAPE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          e.PHRASAL_WORDS_MODE,
          e.COMMENT,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.HASH_COMMENT_MODE,
          e.NUMBER_MODE,
          e.C_NUMBER_MODE,
          e.BINARY_NUMBER_MODE,
          e.CSS_NUMBER_MODE,
          e.REGEXP_MODE,
          e.TITLE_MODE,
          e.UNDERSCORE_TITLE_MODE,
          e.METHOD_GUARD,
        ].forEach(function (e) {
          !(function e(t) {
            Object.freeze(t);
            var n = "function" == typeof t;
            return (
              Object.getOwnPropertyNames(t).forEach(function (i) {
                !t.hasOwnProperty(i) ||
                  null === t[i] ||
                  ("object" != typeof t[i] && "function" != typeof t[i]) ||
                  (n &&
                    ("caller" === i || "callee" === i || "arguments" === i)) ||
                  Object.isFrozen(t[i]) ||
                  e(t[i]);
              }),
              t
            );
          })(e);
        }),
        e
      );
    }),
      (o =
        ("object" == typeof window && window) ||
        ("object" == typeof self && self)),
      t.nodeType
        ? o &&
          ((o.hljs = r({})),
          void 0 ===
            (i = function () {
              return o.hljs;
            }.apply(t, [])) || (e.exports = i))
        : r(t);
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "<>",
        n = "</>",
        i = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/ },
        r = "[A-Za-z$_][0-9A-Za-z$_]*",
        o = {
          keyword:
            "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
          literal: "true false null undefined NaN Infinity",
          built_in:
            "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
        },
        a = {
          className: "number",
          variants: [
            { begin: "\\b(0[bB][01]+)n?" },
            { begin: "\\b(0[oO][0-7]+)n?" },
            { begin: e.C_NUMBER_RE + "n?" },
          ],
          relevance: 0,
        },
        s = {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}",
          keywords: o,
          contains: [],
        },
        l = {
          begin: "html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [e.BACKSLASH_ESCAPE, s],
            subLanguage: "xml",
          },
        },
        c = {
          begin: "css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [e.BACKSLASH_ESCAPE, s],
            subLanguage: "css",
          },
        },
        u = {
          className: "string",
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE, s],
        };
      s.contains = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        l,
        c,
        u,
        a,
        e.REGEXP_MODE,
      ];
      var d = s.contains.concat([
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ]);
      return {
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: o,
        contains: [
          {
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/,
          },
          { className: "meta", begin: /^#!/, end: /$/ },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          l,
          c,
          u,
          e.C_LINE_COMMENT_MODE,
          e.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+",
                contains: [
                  { className: "type", begin: "\\{", end: "\\}", relevance: 0 },
                  {
                    className: "variable",
                    begin: r + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          a,
          {
            begin: /[{,\n]\s*/,
            relevance: 0,
            contains: [
              {
                begin: r + "\\s*:",
                returnBegin: !0,
                relevance: 0,
                contains: [{ className: "attr", begin: r, relevance: 0 }],
              },
            ],
          },
          {
            begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            contains: [
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.REGEXP_MODE,
              {
                className: "function",
                begin: "(\\(.*?\\)|" + r + ")\\s*=>",
                returnBegin: !0,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      { begin: r },
                      { begin: /\(\s*\)/ },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: o,
                        contains: d,
                      },
                    ],
                  },
                ],
              },
              { className: "", begin: /\s/, end: /\s*/, skip: !0 },
              {
                variants: [
                  { begin: t, end: n },
                  { begin: i.begin, end: i.end },
                ],
                subLanguage: "xml",
                contains: [
                  { begin: i.begin, end: i.end, skip: !0, contains: ["self"] },
                ],
              },
            ],
            relevance: 0,
          },
          {
            className: "function",
            beginKeywords: "function",
            end: /\{/,
            excludeEnd: !0,
            contains: [
              e.inherit(e.TITLE_MODE, { begin: r }),
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                contains: d,
              },
            ],
            illegal: /\[|%/,
          },
          { begin: /\$[(.]/ },
          e.METHOD_GUARD,
          {
            className: "class",
            beginKeywords: "class",
            end: /[{;=]/,
            excludeEnd: !0,
            illegal: /[:"\[\]]/,
            contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE],
          },
          { beginKeywords: "constructor get set", end: /\{/, excludeEnd: !0 },
        ],
        illegal: /#(?!!)/,
      };
    };
  },
  function (e, t, n) {
    var i = n(91);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(18)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {
    (e.exports = n(17)(!1)).push([
      e.i,
      "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-subst {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-literal,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag .hljs-attr {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-doctag {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-section,\n.hljs-selector-id {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-type,\n.hljs-class .hljs-title {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-name,\n.hljs-attribute {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-regexp,\n.hljs-link {\n  color: #009926;\n}\n\n.hljs-symbol,\n.hljs-bullet {\n  color: #990073;\n}\n\n.hljs-built_in,\n.hljs-builtin-name {\n  color: #0086b3;\n}\n\n.hljs-meta {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n",
      "",
    ]);
  },
]);
//# sourceMappingURL=bundle9de295fe4622bfc3eab0.js.map
