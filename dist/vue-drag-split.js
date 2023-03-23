import { openBlock as ne, createElementBlock as Fe, normalizeClass as yt, unref as P, renderSlot as Te, toRefs as Qn, ref as fe, watch as Ye, normalizeStyle as De, createVNode as Zn, withCtx as ht, createBlock as _t, createCommentVNode as Xe, getCurrentInstance as er, useSlots as tr, h as N, onMounted as nr, reactive as rr, createElementVNode as Bt, render as or } from "vue";
const sr = {}, ir = /* @__PURE__ */ Object.assign(sr, {
  __name: "resizer",
  props: ["split"],
  setup(e) {
    return (t, n) => (ne(), Fe("div", {
      class: yt(["Resizer", e.split])
    }, null, 2));
  }
});
function cr(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Nt(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = B(o) ? fr(o) : Nt(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (B(e))
      return e;
    if (U(e))
      return e;
  }
}
const lr = /;(?![^(]*\))/g, ar = /:([^]+)/, ur = /\/\*.*?\*\//gs;
function fr(e) {
  const t = {};
  return e.replace(ur, "").split(lr).forEach((n) => {
    if (n) {
      const o = n.split(ar);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function St(e) {
  let t = "";
  if (B(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const o = St(e[n]);
      o && (t += o + " ");
    }
  else if (U(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Z = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ke = () => {
}, pr = () => !1, dr = /^on[^a-z]/, hr = (e) => dr.test(e), J = Object.assign, _r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gr = Object.prototype.hasOwnProperty, V = (e, t) => gr.call(e, t), O = Array.isArray, ye = (e) => ot(e) === "[object Map]", mr = (e) => ot(e) === "[object Set]", I = (e) => typeof e == "function", B = (e) => typeof e == "string", Ct = (e) => typeof e == "symbol", U = (e) => e !== null && typeof e == "object", wr = (e) => U(e) && I(e.then) && I(e.catch), vr = Object.prototype.toString, ot = (e) => vr.call(e), an = (e) => ot(e).slice(8, -1), br = (e) => ot(e) === "[object Object]", Ot = (e) => B(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Er = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yr = Er((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ie = (e, t) => !Object.is(e, t), Nr = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Sr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ut;
const Cr = () => Ut || (Ut = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Or;
function xr(e, t = Or) {
  t && t.active && t.effects.push(e);
}
const Me = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, un = (e) => (e.w & oe) > 0, fn = (e) => (e.n & oe) > 0, Vr = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= oe;
}, Dr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      un(r) && !fn(r) ? r.delete(e) : t[n++] = r, r.w &= ~oe, r.n &= ~oe;
    }
    t.length = n;
  }
}, gt = /* @__PURE__ */ new WeakMap();
let Re = 0, oe = 1;
const mt = 30;
let z;
const pe = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), wt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Rr {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, xr(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = z, n = re;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = z, z = this, re = !0, oe = 1 << ++Re, Re <= mt ? Vr(this) : Gt(this), this.fn();
    } finally {
      Re <= mt && Dr(this), oe = 1 << --Re, z = this.parent, re = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    z === this ? this.deferStop = !0 : this.active && (Gt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Gt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let re = !0;
const pn = [];
function dn() {
  pn.push(re), re = !1;
}
function hn() {
  const e = pn.pop();
  re = e === void 0 ? !0 : e;
}
function K(e, t, n) {
  if (re && z) {
    let o = gt.get(e);
    o || gt.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Me());
    const s = process.env.NODE_ENV !== "production" ? { effect: z, target: e, type: t, key: n } : void 0;
    vt(r, s);
  }
}
function vt(e, t) {
  let n = !1;
  Re <= mt ? fn(e) || (e.n |= oe, n = !un(e)) : n = !e.has(z), n && (e.add(z), z.deps.push(e), process.env.NODE_ENV !== "production" && z.onTrack && z.onTrack(Object.assign({ effect: z }, t)));
}
function se(e, t, n, o, r, s) {
  const c = gt.get(e);
  if (!c)
    return;
  let l = [];
  if (t === "clear")
    l = [...c.values()];
  else if (n === "length" && O(e)) {
    const h = Sr(o);
    c.forEach((m, C) => {
      (C === "length" || C >= h) && l.push(m);
    });
  } else
    switch (n !== void 0 && l.push(c.get(n)), t) {
      case "add":
        O(e) ? Ot(n) && l.push(c.get("length")) : (l.push(c.get(pe)), ye(e) && l.push(c.get(wt)));
        break;
      case "delete":
        O(e) || (l.push(c.get(pe)), ye(e) && l.push(c.get(wt)));
        break;
      case "set":
        ye(e) && l.push(c.get(pe));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? ve(l[0], u) : ve(l[0]));
  else {
    const h = [];
    for (const m of l)
      m && h.push(...m);
    process.env.NODE_ENV !== "production" ? ve(Me(h), u) : ve(Me(h));
  }
}
function ve(e, t) {
  const n = O(e) ? e : [...e];
  for (const o of n)
    o.computed && Jt(o, t);
  for (const o of n)
    o.computed || Jt(o, t);
}
function Jt(e, t) {
  (e !== z || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(J({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Pr = /* @__PURE__ */ cr("__proto__,__v_isRef,__isVue"), _n = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ct)
), $r = /* @__PURE__ */ xt(), Tr = /* @__PURE__ */ xt(!0), Ir = /* @__PURE__ */ xt(!0, !0), Yt = /* @__PURE__ */ Mr();
function Mr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = g(this);
      for (let s = 0, c = this.length; s < c; s++)
        K(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(g)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      dn();
      const o = g(this)[t].apply(this, n);
      return hn(), o;
    };
  }), e;
}
function xt(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? bn : vn : t ? Xr : wn).get(o))
      return o;
    const c = O(o);
    if (!e && c && V(Yt, r))
      return Reflect.get(Yt, r, s);
    const l = Reflect.get(o, r, s);
    return (Ct(r) ? _n.has(r) : Pr(r)) || (e || K(o, "get", r), t) ? l : F(l) ? c && Ot(r) ? l : l.value : U(l) ? e ? yn(l) : En(l) : l;
  };
}
const Ar = /* @__PURE__ */ zr();
function zr(e = !1) {
  return function(n, o, r, s) {
    let c = n[o];
    if (Ce(c) && F(c) && !F(r))
      return !1;
    if (!e && (!Qe(r) && !Ce(r) && (c = g(c), r = g(r)), !O(n) && F(c) && !F(r)))
      return c.value = r, !0;
    const l = O(n) && Ot(o) ? Number(o) < n.length : V(n, o), u = Reflect.set(n, o, r, s);
    return n === g(s) && (l ? Ie(r, c) && se(n, "set", o, r, c) : se(n, "add", o, r)), u;
  };
}
function Fr(e, t) {
  const n = V(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && se(e, "delete", t, void 0, o), r;
}
function jr(e, t) {
  const n = Reflect.has(e, t);
  return (!Ct(t) || !_n.has(t)) && K(e, "has", t), n;
}
function qr(e) {
  return K(e, "iterate", O(e) ? "length" : pe), Reflect.ownKeys(e);
}
const Kr = {
  get: $r,
  set: Ar,
  deleteProperty: Fr,
  has: jr,
  ownKeys: qr
}, gn = {
  get: Tr,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && kt(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && kt(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Hr = /* @__PURE__ */ J({}, gn, {
  get: Ir
}), Vt = (e) => e, st = (e) => Reflect.getPrototypeOf(e);
function qe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = g(e), s = g(t);
  n || (t !== s && K(r, "get", t), K(r, "get", s));
  const { has: c } = st(r), l = o ? Vt : n ? Pt : Ae;
  if (c.call(r, t))
    return l(e.get(t));
  if (c.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function Ke(e, t = !1) {
  const n = this.__v_raw, o = g(n), r = g(e);
  return t || (e !== r && K(o, "has", e), K(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function He(e, t = !1) {
  return e = e.__v_raw, !t && K(g(e), "iterate", pe), Reflect.get(e, "size", e);
}
function Xt(e) {
  e = g(e);
  const t = g(this);
  return st(t).has.call(t, e) || (t.add(e), se(t, "add", e, e)), this;
}
function Qt(e, t) {
  t = g(t);
  const n = g(this), { has: o, get: r } = st(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && mn(n, o, e) : (e = g(e), s = o.call(n, e));
  const c = r.call(n, e);
  return n.set(e, t), s ? Ie(t, c) && se(n, "set", e, t, c) : se(n, "add", e, t), this;
}
function Zt(e) {
  const t = g(this), { has: n, get: o } = st(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && mn(t, n, e) : (e = g(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, c = t.delete(e);
  return r && se(t, "delete", e, void 0, s), c;
}
function en() {
  const e = g(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ye(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && se(e, "clear", void 0, void 0, n), o;
}
function We(e, t) {
  return function(o, r) {
    const s = this, c = s.__v_raw, l = g(c), u = t ? Vt : e ? Pt : Ae;
    return !e && K(l, "iterate", pe), c.forEach((h, m) => o.call(r, u(h), u(m), s));
  };
}
function Le(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = g(r), c = ye(s), l = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, h = r[e](...o), m = n ? Vt : t ? Pt : Ae;
    return !t && K(s, "iterate", u ? wt : pe), {
      next() {
        const { value: C, done: x } = h.next();
        return x ? { value: C, done: x } : {
          value: l ? [m(C[0]), m(C[1])] : m(C),
          done: x
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Q(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${yr(e)} operation ${n}failed: target is readonly.`, g(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Wr() {
  const e = {
    get(s) {
      return qe(this, s);
    },
    get size() {
      return He(this);
    },
    has: Ke,
    add: Xt,
    set: Qt,
    delete: Zt,
    clear: en,
    forEach: We(!1, !1)
  }, t = {
    get(s) {
      return qe(this, s, !1, !0);
    },
    get size() {
      return He(this);
    },
    has: Ke,
    add: Xt,
    set: Qt,
    delete: Zt,
    clear: en,
    forEach: We(!1, !0)
  }, n = {
    get(s) {
      return qe(this, s, !0);
    },
    get size() {
      return He(this, !0);
    },
    has(s) {
      return Ke.call(this, s, !0);
    },
    add: Q("add"),
    set: Q("set"),
    delete: Q("delete"),
    clear: Q("clear"),
    forEach: We(!0, !1)
  }, o = {
    get(s) {
      return qe(this, s, !0, !0);
    },
    get size() {
      return He(this, !0);
    },
    has(s) {
      return Ke.call(this, s, !0);
    },
    add: Q("add"),
    set: Q("set"),
    delete: Q("delete"),
    clear: Q("clear"),
    forEach: We(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Le(s, !1, !1), n[s] = Le(s, !0, !1), t[s] = Le(s, !1, !0), o[s] = Le(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Lr, Br, Ur, kr] = /* @__PURE__ */ Wr();
function Dt(e, t) {
  const n = t ? e ? kr : Ur : e ? Br : Lr;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(V(n, r) && r in o ? n : o, r, s);
}
const Gr = {
  get: /* @__PURE__ */ Dt(!1, !1)
}, Jr = {
  get: /* @__PURE__ */ Dt(!0, !1)
}, Yr = {
  get: /* @__PURE__ */ Dt(!0, !0)
};
function mn(e, t, n) {
  const o = g(n);
  if (o !== n && t.call(e, o)) {
    const r = an(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const wn = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap();
function Qr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qr(an(e));
}
function En(e) {
  return Ce(e) ? e : Rt(e, !1, Kr, Gr, wn);
}
function yn(e) {
  return Rt(e, !0, gn, Jr, vn);
}
function Be(e) {
  return Rt(e, !0, Hr, Yr, bn);
}
function Rt(e, t, n, o, r) {
  if (!U(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const c = Zr(e);
  if (c === 0)
    return e;
  const l = new Proxy(e, c === 2 ? o : n);
  return r.set(e, l), l;
}
function Ne(e) {
  return Ce(e) ? Ne(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ce(e) {
  return !!(e && e.__v_isReadonly);
}
function Qe(e) {
  return !!(e && e.__v_isShallow);
}
function Ze(e) {
  return Ne(e) || Ce(e);
}
function g(e) {
  const t = e && e.__v_raw;
  return t ? g(t) : e;
}
function eo(e) {
  return Nr(e, "__v_skip", !0), e;
}
const Ae = (e) => U(e) ? En(e) : e, Pt = (e) => U(e) ? yn(e) : e;
function to(e) {
  re && z && (e = g(e), process.env.NODE_ENV !== "production" ? vt(e.dep || (e.dep = Me()), {
    target: e,
    type: "get",
    key: "value"
  }) : vt(e.dep || (e.dep = Me())));
}
function no(e, t) {
  e = g(e), e.dep && (process.env.NODE_ENV !== "production" ? ve(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ve(e.dep));
}
function F(e) {
  return !!(e && e.__v_isRef === !0);
}
function ro(e) {
  return oo(e, !1);
}
function oo(e, t) {
  return F(e) ? e : new so(e, t);
}
class so {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : g(t), this._value = n ? t : Ae(t);
  }
  get value() {
    return to(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Qe(t) || Ce(t);
    t = n ? t : g(t), Ie(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ae(t), no(this, t));
  }
}
function io(e) {
  return F(e) ? e.value : e;
}
const co = {
  get: (e, t, n) => io(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return F(r) && !F(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function lo(e) {
  return Ne(e) ? e : new Proxy(e, co);
}
function ao(e) {
  process.env.NODE_ENV !== "production" && !Ze(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = O(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = fo(e, n);
  return t;
}
class uo {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function fo(e, t, n) {
  const o = e[t];
  return F(o) ? o : new uo(e, t, n);
}
const de = [];
function po(e) {
  de.push(e);
}
function ho() {
  de.pop();
}
function $(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  dn();
  const n = de.length ? de[de.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = _o();
  if (o)
    he(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Fn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...go(r)), console.warn(...s);
  }
  hn();
}
function _o() {
  let e = de[de.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function go(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...mo(n));
  }), t;
}
function mo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Fn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...wo(e.props), s] : [r + s];
}
function wo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Nn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Nn(e, t, n) {
  return B(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : F(t) ? (t = Nn(e, g(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = g(t), n ? t : [`${e}=`, t]);
}
const Sn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function he(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Cn(s, t, n);
  }
  return r;
}
function Ge(e, t, n, o) {
  if (I(e)) {
    const s = he(e, t, n, o);
    return s && wr(s) && s.catch((c) => {
      Cn(c, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(Ge(e[s], t, n, o));
  return r;
}
function Cn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const c = t.proxy, l = process.env.NODE_ENV !== "production" ? Sn[n] : n;
    for (; s; ) {
      const h = s.ec;
      if (h) {
        for (let m = 0; m < h.length; m++)
          if (h[m](e, c, l) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      he(u, null, 10, [e, c, l]);
      return;
    }
  }
  vo(e, n, r, o);
}
function vo(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Sn[t];
    if (n && po(n), $(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ho(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let et = !1, bt = !1;
const L = [];
let te = 0;
const Se = [];
let G = null, ee = 0;
const On = /* @__PURE__ */ Promise.resolve();
let $t = null;
const bo = 100;
function Eo(e) {
  const t = $t || On;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function yo(e) {
  let t = te + 1, n = L.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    ze(L[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Tt(e) {
  (!L.length || !L.includes(e, et && e.allowRecurse ? te + 1 : te)) && (e.id == null ? L.push(e) : L.splice(yo(e.id), 0, e), xn());
}
function xn() {
  !et && !bt && (bt = !0, $t = On.then(Dn));
}
function Vn(e) {
  O(e) ? Se.push(...e) : (!G || !G.includes(e, e.allowRecurse ? ee + 1 : ee)) && Se.push(e), xn();
}
function No(e) {
  if (Se.length) {
    const t = [...new Set(Se)];
    if (Se.length = 0, G) {
      G.push(...t);
      return;
    }
    for (G = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G.sort((n, o) => ze(n) - ze(o)), ee = 0; ee < G.length; ee++)
      process.env.NODE_ENV !== "production" && Rn(e, G[ee]) || G[ee]();
    G = null, ee = 0;
  }
}
const ze = (e) => e.id == null ? 1 / 0 : e.id, So = (e, t) => {
  const n = ze(e) - ze(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Dn(e) {
  bt = !1, et = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), L.sort(So);
  const t = process.env.NODE_ENV !== "production" ? (n) => Rn(e, n) : ke;
  try {
    for (te = 0; te < L.length; te++) {
      const n = L[te];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        he(n, null, 14);
      }
    }
  } finally {
    te = 0, L.length = 0, No(e), et = !1, $t = null, (L.length || Se.length) && Dn(e);
  }
}
function Rn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > bo) {
      const o = t.ownerInstance, r = o && zn(o.type);
      return $(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
const Ve = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Cr().__VUE_HMR_RUNTIME__ = {
  createRecord: pt(Co),
  rerender: pt(Oo),
  reload: pt(xo)
});
const tt = /* @__PURE__ */ new Map();
function Co(e, t) {
  return tt.has(e) ? !1 : (tt.set(e, {
    initialDef: Pe(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pe(e) {
  return jn(e) ? e.__vccOpts : e;
}
function Oo(e, t) {
  const n = tt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Pe(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function xo(e, t) {
  const n = tt.get(e);
  if (!n)
    return;
  t = Pe(t), tn(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Pe(r.type);
    Ve.has(s) || (s !== n.initialDef && tn(s, t), Ve.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Ve.add(s), r.ceReload(t.styles), Ve.delete(s)) : r.parent ? Tt(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Vn(() => {
    for (const r of o)
      Ve.delete(Pe(r.type));
  });
}
function tn(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function pt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Y = null, Vo = null;
const Do = (e) => e.__isSuspense;
function Ro(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Vn(e);
}
function Po(e, t, n = !1) {
  const o = _e || Y;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && $(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && $("inject() can only be used inside setup() or functional components.");
}
const Ue = {};
function $o(e, t, n) {
  return process.env.NODE_ENV !== "production" && !I(t) && $("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Pn(e, t, n);
}
function Pn(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: c } = Z) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && $('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && $('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (v) => {
    $("Invalid watch source: ", v, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = _e;
  let h, m = !1, C = !1;
  if (F(e) ? (h = () => e.value, m = Qe(e)) : Ne(e) ? (h = () => e, o = !0) : O(e) ? (C = !0, m = e.some((v) => Ne(v) || Qe(v)), h = () => e.map((v) => {
    if (F(v))
      return v.value;
    if (Ne(v))
      return be(v);
    if (I(v))
      return he(v, u, 2);
    process.env.NODE_ENV !== "production" && l(v);
  })) : I(e) ? t ? h = () => he(e, u, 2) : h = () => {
    if (!(u && u.isUnmounted))
      return x && x(), Ge(e, u, 3, [k]);
  } : (h = ke, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const v = h;
    h = () => be(v());
  }
  let x, k = (v) => {
    x = S.onStop = () => {
      he(v, u, 4);
    };
  }, X;
  if (ts)
    if (k = ke, t ? n && Ge(t, u, 3, [
      h(),
      C ? [] : void 0,
      k
    ]) : h(), r === "sync") {
      const v = is();
      X = v.__watcherHandles || (v.__watcherHandles = []);
    } else
      return ke;
  let D = C ? new Array(e.length).fill(Ue) : Ue;
  const _ = () => {
    if (S.active)
      if (t) {
        const v = S.run();
        (o || m || (C ? v.some((H, it) => Ie(H, D[it])) : Ie(v, D))) && (x && x(), Ge(t, u, 3, [
          v,
          D === Ue ? void 0 : C && D[0] === Ue ? [] : D,
          k
        ]), D = v);
      } else
        S.run();
  };
  _.allowRecurse = !!t;
  let j;
  r === "sync" ? j = _ : r === "post" ? j = () => on(_, u && u.suspense) : (_.pre = !0, u && (_.id = u.uid), j = () => Tt(_));
  const S = new Rr(h, j);
  process.env.NODE_ENV !== "production" && (S.onTrack = s, S.onTrigger = c), t ? n ? _() : D = S.run() : r === "post" ? on(S.run.bind(S), u && u.suspense) : S.run();
  const ge = () => {
    S.stop(), u && u.scope && _r(u.scope.effects, S);
  };
  return X && X.push(ge), ge;
}
function To(e, t, n) {
  const o = this.proxy, r = B(e) ? e.includes(".") ? Io(o, e) : () => o[e] : e.bind(o, o);
  let s;
  I(t) ? s = t : (s = t.handler, n = t);
  const c = _e;
  sn(this);
  const l = Pn(r, s.bind(o), n);
  return c ? sn(c) : Zo(), l;
}
function Io(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function be(e, t) {
  if (!U(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), F(e))
    be(e.value, t);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      be(e[n], t);
  else if (mr(e) || ye(e))
    e.forEach((n) => {
      be(n, t);
    });
  else if (br(e))
    for (const n in e)
      be(e[n], t);
  return e;
}
const Mo = Symbol(), Et = (e) => e ? es(e) ? ns(e) || e.proxy : Et(e.parent) : null, $e = /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? Be(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? Be(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? Be(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? Be(e.refs) : e.refs,
  $parent: (e) => Et(e.parent),
  $root: (e) => Et(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Fo(e),
  $forceUpdate: (e) => e.f || (e.f = () => Tt(e.update)),
  $nextTick: (e) => e.n || (e.n = Eo.bind(e.proxy)),
  $watch: (e) => To.bind(e)
}), Ao = (e) => e === "_" || e === "$", dt = (e, t) => e !== Z && !e.__isScriptSetup && V(e, t), zo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: c, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const k = c[t];
      if (k !== void 0)
        switch (k) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (dt(o, t))
          return c[t] = 1, o[t];
        if (r !== Z && V(r, t))
          return c[t] = 2, r[t];
        if ((h = e.propsOptions[0]) && V(h, t))
          return c[t] = 3, s[t];
        if (n !== Z && V(n, t))
          return c[t] = 4, n[t];
        c[t] = 0;
      }
    }
    const m = $e[t];
    let C, x;
    if (m)
      return t === "$attrs" && (K(e, "get", t), process.env.NODE_ENV !== "production" && void 0), m(e);
    if ((C = l.__cssModules) && (C = C[t]))
      return C;
    if (n !== Z && V(n, t))
      return c[t] = 4, n[t];
    if (x = u.config.globalProperties, V(x, t))
      return x[t];
    process.env.NODE_ENV !== "production" && Y && (!B(t) || t.indexOf("__v") !== 0) && (r !== Z && Ao(t[0]) && V(r, t) ? $(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Y && $(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return dt(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && V(r, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Z && V(o, t) ? (o[t] = n, !0) : V(e.props, t) ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, c) {
    let l;
    return !!n[c] || e !== Z && V(e, c) || dt(t, c) || (l = s[0]) && V(l, c) || V(o, c) || V($e, c) || V(r.config.globalProperties, c);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (zo.ownKeys = (e) => ($("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Fo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: c } } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((h) => nt(u, h, c, !0)), nt(u, t, c)), U(t) && s.set(t, u), u;
}
function nt(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && nt(e, s, n, !0), r && r.forEach((c) => nt(e, c, n, !0));
  for (const c in t)
    if (o && c === "expose")
      process.env.NODE_ENV !== "production" && $('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = jo[c] || n && n[c];
      e[c] = l ? l(e[c], t[c]) : t[c];
    }
  return e;
}
const jo = {
  data: nn,
  props: ue,
  emits: ue,
  methods: ue,
  computed: ue,
  beforeCreate: A,
  created: A,
  beforeMount: A,
  mounted: A,
  beforeUpdate: A,
  updated: A,
  beforeDestroy: A,
  beforeUnmount: A,
  destroyed: A,
  unmounted: A,
  activated: A,
  deactivated: A,
  errorCaptured: A,
  serverPrefetch: A,
  components: ue,
  directives: ue,
  watch: Ko,
  provide: nn,
  inject: qo
};
function nn(e, t) {
  return t ? e ? function() {
    return J(I(e) ? e.call(this, this) : e, I(t) ? t.call(this, this) : t);
  } : t : e;
}
function qo(e, t) {
  return ue(rn(e), rn(t));
}
function rn(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function A(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ue(e, t) {
  return e ? J(J(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Ko(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = A(e[o], t[o]);
  return n;
}
function Ho() {
  return {
    app: null,
    config: {
      isNativeTag: pr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
const on = Ro, Wo = (e) => e.__isTeleport, $n = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Lo = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Bo = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
let Ee = null;
function Uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ko = (...e) => Mn(...e), Tn = "__vInternal", In = ({ key: e }) => e ?? null, Je = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? B(e) || F(e) || I(e) ? { i: Y, r: e, k: t, f: !!n } : e : null;
function Go(e, t = null, n = null, o = 0, r = null, s = e === $n ? 0 : 1, c = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && In(t),
    ref: t && Je(t),
    scopeId: Vo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Y
  };
  return l ? (It(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= B(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && $("VNode created with invalid key (NaN). VNode type:", u.type), !c && Ee && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && Ee.push(u), u;
}
const Jo = process.env.NODE_ENV !== "production" ? ko : Mn;
function Mn(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Mo) && (process.env.NODE_ENV !== "production" && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = Bo), Uo(e)) {
    const l = rt(e, t, !0);
    return n && It(l, n), !s && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag |= -2, l;
  }
  if (jn(e) && (e = e.__vccOpts), t) {
    t = Yo(t);
    let { class: l, style: u } = t;
    l && !B(l) && (t.class = St(l)), U(u) && (Ze(u) && !O(u) && (u = J({}, u)), t.style = Nt(u));
  }
  const c = B(e) ? 1 : Do(e) ? 128 : Wo(e) ? 64 : U(e) ? 4 : I(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Ze(e) && (e = g(e), $("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Go(e, t, n, o, r, c, s, !0);
}
function Yo(e) {
  return e ? Ze(e) || Tn in e ? J({}, e) : e : null;
}
function rt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: c } = e, l = t ? Qo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && In(l),
    ref: t && t.ref ? n && r ? O(r) ? r.concat(Je(t)) : [r, Je(t)] : Je(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && O(c) ? c.map(An) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== $n ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rt(e.ssContent),
    ssFallback: e.ssFallback && rt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function An(e) {
  const t = rt(e);
  return O(e.children) && (t.children = e.children.map(An)), t;
}
function Xo(e = " ", t = 0) {
  return Jo(Lo, null, e, t);
}
function It(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), It(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Tn in t) ? t._ctx = Y : r === 3 && Y && (Y.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    I(t) ? (t = { default: t, _ctx: Y }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Xo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Qo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = St([t.class, o.class]));
      else if (r === "style")
        t.style = Nt([t.style, o.style]);
      else if (hr(r)) {
        const s = t[r], c = o[r];
        c && s !== c && !(O(s) && s.includes(c)) && (t[r] = s ? [].concat(s, c) : c);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
Ho();
let _e = null;
const sn = (e) => {
  _e = e, e.scope.on();
}, Zo = () => {
  _e && _e.scope.off(), _e = null;
};
function es(e) {
  return e.vnode.shapeFlag & 4;
}
let ts = !1;
function ns(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(lo(eo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in $e)
          return $e[n](e);
      },
      has(t, n) {
        return n in t || n in $e;
      }
    }));
}
const rs = /(?:^|[-_])(\w)/g, os = (e) => e.replace(rs, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function zn(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Fn(e, t, n = !1) {
  let o = zn(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const c in s)
        if (s[c] === t)
          return c;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? os(o) : n ? "App" : "Anonymous";
}
function jn(e) {
  return I(e) && "__vccOpts" in e;
}
const ss = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), is = () => {
  {
    const e = Po(ss);
    return e || process.env.NODE_ENV !== "production" && $("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
const cs = {
  name: "Pane"
}, cn = /* @__PURE__ */ Object.assign(cs, {
  props: {
    split: {
      validator(e) {
        return ["horizontal", "vertical"].indexOf(e) >= 0;
      },
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ro(""), { split: o } = ao(t);
    return $o(
      o,
      (r) => {
        n.value = r;
      },
      { immediate: !0 }
    ), (r, s) => (ne(), Fe("div", {
      class: yt(P(n))
    }, [
      Te(r.$slots, "default")
    ], 2));
  }
});
const ls = ["split"], as = {
  name: "Split"
}, ln = /* @__PURE__ */ Object.assign(as, {
  props: {
    layout: {
      type: Boolean,
      default: !1
    },
    minPercent: {
      type: Number,
      default: 10
    },
    defaultPercent: {
      type: Number,
      default: 50
    },
    split: {
      validator(e) {
        return ["horizontal", "vertical"].indexOf(e) >= 0;
      },
      required: !0
    }
  },
  emits: ["resize"],
  setup(e, { emit: t }) {
    const n = e, { layout: o, minPercent: r, defaultPercent: s, split: c } = Qn(n), l = fe("width"), u = fe("left"), h = fe(!1), m = fe(50);
    Ye(
      c,
      (_) => {
        l.value = _ === "horizontal" ? "width" : "height", u.value = _ === "horizontal" ? "left" : "top";
      },
      { immediate: !0 }
    ), Ye(
      s,
      (_) => {
        m.value = _;
      },
      { immediate: !0 }
    );
    function C() {
      let _ = null;
      return (j) => {
        _ || (_ = setTimeout(() => {
          j(), clearTimeout(_), _ = null;
        }, 100));
      };
    }
    const x = new C();
    function k() {
      h.value = !0;
    }
    function X() {
      h.value = !1;
    }
    function D(_) {
      if (_.buttons === 0 || _.which === 0 || !h.value)
        return;
      let j = 0, S = _.currentTarget;
      if (c.value === "horizontal")
        for (; S; )
          j += S.offsetLeft, S = S.offsetParent;
      else
        for (; S; )
          j += S.offsetTop, S = S.offsetParent;
      const ge = c.value === "horizontal" ? _.pageX : _.pageY, v = c.value === "horizontal" ? _.currentTarget.offsetWidth : _.currentTarget.offsetHeight, H = Math.floor((ge - j) / v * 1e4) / 100;
      H > r.value && H < 100 - r.value && (m.value = H), x(() => {
        t("resize", _);
      });
    }
    return (_, j) => (ne(), Fe("div", {
      style: De({
        userSelect: P(h) ? "none" : ""
      }),
      class: "split_container clearfix",
      onMouseup: X,
      onMousemove: D,
      ref: "splitContainerRef",
      split: P(c)
    }, [
      Zn(cn, {
        class: "split_pane split_paneL",
        split: P(c),
        style: De({ [P(l)]: P(m) + "%" })
      }, {
        default: ht(() => [
          Te(_.$slots, "paneL")
        ]),
        _: 3
      }, 8, ["split", "style"]),
      P(o) ? Xe("", !0) : (ne(), _t(ir, {
        key: 0,
        style: De({ [P(u)]: P(m) + "%" }),
        split: P(c),
        onMousedown: k
      }, null, 8, ["style", "split"])),
      P(o) ? Xe("", !0) : (ne(), _t(cn, {
        key: 1,
        class: "split_pane split_paneR",
        split: P(c),
        style: De({ [P(l)]: 100 - P(m) + "%" })
      }, {
        default: ht(() => [
          Te(_.$slots, "paneR")
        ]),
        _: 3
      }, 8, ["split", "style"]))
    ], 44, ls));
  }
}), us = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, fs = {
  name: "SplitWindow"
}, ps = { id: "split_window" };
function ds(e, t, n, o, r, s) {
  return ne(), Fe("div", ps, [
    Te(e.$slots, "default")
  ]);
}
const hs = /* @__PURE__ */ us(fs, [["render", ds]]);
function M(e, t) {
  var n = e;
  if (n.nodeType === 1 && [...n == null ? void 0 : n.classList].includes(t))
    return n;
  for (; n = n.parentNode; )
    if (n && n.nodeType === 1 && [...n == null ? void 0 : n.classList].includes(t))
      return n;
  return null;
}
function _s(e) {
  const t = { ...e };
  return Object.keys(t).forEach((n) => {
    t[n] = t[n] + "px";
  }), t;
}
const ae = {
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right"
}, q = {
  horizontal: "horizontal",
  vertical: "vertical"
}, vs = {};
const gs = { class: "placeholder_default flex a-c j-c" }, ms = {
  name: "VueDragSplit"
}, bs = /* @__PURE__ */ Object.assign(ms, {
  props: {
    showPlaceHolder: {
      type: Boolean,
      default: !0
    },
    createTabActions: {
      type: Function,
      default: (e) => null
    },
    createAddBtn: {
      type: Function,
      default: (e) => null
    },
    createClose: {
      type: Function,
      default: (e) => null
    },
    createTab: {
      type: Function,
      default: (e) => null
    },
    createTabView: {
      type: Function,
      default: (e) => null
    },
    activeLabelClassName: {
      type: String,
      default: "label_active"
    },
    canCloseWindow: {
      type: Function,
      default: async (e, t) => !0
    },
    onCloseWindow: {
      type: Function,
      default: (e, t) => {
      }
    },
    activeTabKeySync: {
      type: [String, Number],
      default: "1"
    },
    windowListSync: {
      type: Array,
      default: []
    },
    layoutClass: {
      type: String,
      default: ""
    },
    generateWindowConfig: {
      type: Function,
      default: () => ({}),
      required: !0
    }
  },
  emits: [
    "update:windowListSync",
    "update:activeTabKeySync",
    "resize",
    "dragEnd",
    "closeWindow"
  ],
  setup(e, { expose: t, emit: n }) {
    const {
      createTabActions: o,
      createAddBtn: r,
      createClose: s,
      createTab: c,
      createTabView: l,
      activeLabelClassName: u,
      onCloseWindow: h,
      canCloseWindow: m,
      activeTabKeySync: C,
      windowListSync: x,
      layoutClass: k,
      generateWindowConfig: X
    } = e, D = er(), { AddBtn: _, CloseBtn: j, Tab: S, TabActions: ge, TabView: v } = tr();
    function H(i, a) {
      return i && i(a)[0];
    }
    const it = N(
      "div",
      {
        class: "add_btn",
        onclick: () => {
          je();
        }
      },
      N("div", { title: "新建窗口" }, "+")
    ), qn = N("div", { class: "close_inner", title: "关闭窗口" }, "x"), Kn = (i) => N("span", { style: { fontSize: "12px", color: "white" } }, i.label), Mt = N(
      "svg",
      {
        t: "1671501618431",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "2711",
        width: "20",
        height: "20"
      },
      N("path", {
        d: "M252.068571 906.496h520.283429c89.581714 0 134.144-44.562286 134.144-132.845714V250.331429c0-88.283429-44.562286-132.845714-134.144-132.845715H252.068571c-89.142857 0-134.582857 44.141714-134.582857 132.845715V773.668571c0 88.704 45.44 132.845714 134.582857 132.845715z m1.28-68.992c-42.843429 0-66.852571-22.710857-66.852571-67.291429V253.805714c0-44.580571 24.009143-67.291429 66.852571-67.291428h222.866286v651.008z m517.723429-651.008c42.422857 0 66.432 22.710857 66.432 67.291429V770.194286c0 44.580571-24.009143 67.291429-66.432 67.291428H548.205714V186.496z",
        "p-id": "2712",
        fill: "#ffffff"
      })
    ), Hn = (i) => [
      N(
        "div",
        {
          class: "action_btn",
          title: "水平拆分",
          onClick: () => {
            ft(null, q.horizontal);
          }
        },
        Mt
      ),
      N(
        "div",
        {
          class: "action_btn",
          title: "竖直拆分",
          style: { Transform: "rotate(90deg)" },
          onClick: () => {
            ft(null, q.vertical);
          }
        },
        Mt
      )
    ], Wn = (i) => N("div", null, [N("h3", null, "标签" + i.key + "的默认内容")]), W = fe([]);
    Ye(
      W,
      (i) => {
        n("update:windowListSync", i);
      },
      { deep: !0 }
    ), nr(() => {
      if ((x == null ? void 0 : x.length) > 0)
        for (const i of x)
          je(i);
    });
    const ie = fe("");
    ie.value = C, Ye(ie, (i) => {
      n("update:activeTabKeySync", i);
    });
    function Oe(i) {
      return W.value.find((a) => a.key == ie.value);
    }
    function At(i, a) {
      me(i);
    }
    function me(i) {
      ie.value = i;
      const a = D.vnode.el.querySelector(`.split_view_content[tabviewkey='${i}']`);
      if (a)
        for (const f of a.parentElement.querySelectorAll(".split_view_content")) {
          if (f.getAttribute("tabviewkey") == i) {
            f.style.zIndex = 2;
            continue;
          }
          f.style.zIndex = 1;
        }
      for (const f of D.vnode.el.querySelectorAll(".header_item[tabkey]")) {
        if (f.getAttribute("tabkey") == i) {
          f.classList.add("label_active", u);
          continue;
        }
        f.classList.remove("label_active", u);
      }
    }
    function zt(i) {
      n("resize", i);
    }
    const ce = fe({
      top: 0,
      left: 0,
      height: document.body.clientHeight,
      width: document.body.clientWidth
    }), y = rr({
      isUpdating: !1,
      dropPosition: ae.right
    });
    function Ln(i) {
      const { target: a, x: f, y: p } = i;
      y.isUpdating = !0, y.target = a, y.tabKey = a.getAttribute("tabKey"), y.tabEls = [...a.parentNode.querySelectorAll(".header_item[tabkey]")];
    }
    function Ft(i) {
      if (i.preventDefault(), !y.isUpdating)
        return;
      let { target: a, x: f, y: p } = i;
      a.getBoundingClientRect();
      const w = M(a, "split_view_label_wrapper") ?? M(a, "split_view_content");
      if (!w)
        return;
      y.respectLayout = w;
      const d = w.getBoundingClientRect(), T = D.vnode.el.getBoundingClientRect(), b = d.x - T.x, E = d.y - T.y;
      if (f = f - T.x, p = p - T.y, w.className.includes("split_view_label_wrapper")) {
        ce.value = {
          top: E,
          left: b,
          height: d.height,
          width: d.width
        }, y.dropPosition = "inner";
        return;
      } else if (w.className.includes("split_view_content")) {
        const R = d.height / 3, le = d.width / 3;
        f > b && f < b + d.width && p > E && p < E + R ? (ce.value = {
          top: E,
          left: b,
          height: d.height / 2,
          width: d.width
        }, y.dropPosition = "top") : f > b && f < b + d.width && p > E + R * 2 && p < E + d.height ? (ce.value = {
          top: E + d.height / 2,
          left: b,
          height: d.height / 2,
          width: d.width
        }, y.dropPosition = "bottom") : f > b + le * 2 && f < b + d.width && p > E + R && p < E + R * 2 ? (ce.value = {
          top: E,
          left: b + d.width / 2,
          height: d.height,
          width: d.width / 2
        }, y.dropPosition = "right") : f > b && f < b + le && p > E && p < E + R * 2 && (ce.value = {
          top: E,
          left: b,
          height: d.height,
          width: d.width / 2
        }, y.dropPosition = "left");
      }
    }
    function Bn(i) {
      ct(i);
    }
    function ct(i) {
      i.preventDefault(), y.isUpdating = !1, ce.value = {
        top: 0,
        left: 0,
        height: document.body.clientHeight,
        width: document.body.clientWidth
      };
    }
    const xe = {
      tab: "tab",
      tabView: "tabView"
    };
    function jt(i) {
      ct(i);
      const { target: a, x: f, y: p } = i;
      let w, d;
      M(a, "split_view_label_wrapper") ? (w = M(a, "split_view_label_wrapper"), d = xe.tab) : M(a, "split_view_content_wrapper") && (w = M(a, "split_view_label_wrapper"), d = xe.tabView);
      const E = [...M(
        y.target,
        "split_content_wrapper"
      ).querySelectorAll(".split_view_content")].find((le) => le.getAttribute("tabViewKey") === y.tabKey);
      if (y.tabView = E, y.tabEls.length == 1 && y.tabView == y.respectLayout || d == xe.tab && w == M(y.target, "split_view_label_wrapper"))
        return;
      Lt({}, y.target), me(y.tabKey);
      const R = () => {
        requestAnimationFrame(() => {
          n("dragEnd", i);
        });
      };
      switch (d) {
        case xe.tab:
          lt(w, y.target), w.nextElementSibling.appendChild(y.tabView), R();
          return;
        case xe.tabView:
          qt(a, y), R();
          break;
      }
    }
    function lt(i, a) {
      i = i.firstElementChild;
      const f = Array.from((i == null ? void 0 : i.children) ?? []).find(
        (p) => p.className.includes("add_btn_wrapper")
      );
      f ? i.insertBefore(a, f) : i.appendChild(a), console.log("tabWrapper :>> ", [i]), console.log("tabWrapper :>> ", [i.parentElement]);
    }
    function qt(i, a) {
      let f = ".horizontal.split_pane", p = M(i, "split_pane"), w = M(i, "split_container"), d = w.querySelector(f + ".split_paneL"), T = w.querySelector(f + ".split_paneR"), b;
      ["left", "right"].includes(a.dropPosition) ? b = q.horizontal : ["top", "bottom"].includes(a.dropPosition) && (b = q.vertical);
      const E = N(
        ln,
        {
          onResize: zt,
          minPercent: 20,
          split: b,
          defaultPercent: 50
        },
        { paneR: () => Ht(null, null) }
      );
      E.appContext = D.appContext;
      let R = we(E);
      R.querySelector(`.${b}.split_pane.split_paneL`).appendChild(p.children[0]), lt(R.querySelector(".split_paneR .split_view_label_wrapper"), a.target), R.querySelector(".split_paneR .split_view_content_wrapper").appendChild(a.tabView), p.appendChild(R), d = R.children[0], T = R.children[2], requestAnimationFrame(() => {
        switch (a.dropPosition) {
          case ae.top:
            Kt(d, T);
            break;
          case ae.bottom:
            break;
          case ae.left:
            Kt(d, T);
            break;
          case ae.right:
            break;
        }
      });
    }
    function Kt(i, a) {
      let f = i.children[0];
      i.appendChild(a.children[0]), a.appendChild(f);
    }
    const Un = (i) => N(
      "div",
      {
        class: "close_btn",
        onclick: (a) => {
          Wt(i, a);
        }
      },
      H(j, i) || s(i) || qn
    ), at = (i) => N(
      "div",
      {
        class: "header_item flex a-c",
        ondragstart: Ln,
        draggable: !0,
        onclick: (a) => {
          At(i.key);
        },
        tabKey: i.key
      },
      [H(S, i) || c(i) || Kn(i), Un(i)]
    ), ut = (i) => N(
      "div",
      {
        class: "split_view_content",
        tabViewKey: i.key,
        onclick: (a) => {
          At(i.key);
        }
      },
      [H(v, i) || l(i) || Wn(i)]
    );
    N(
      "svg",
      {
        t: "1679533237927",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "2333",
        width: "18",
        height: "18"
      },
      N("path", {
        d: "M320 885.333333c-8.533333 0-17.066667-4.266667-23.466667-10.666666-12.8-12.8-10.666667-34.133333 2.133334-44.8L654.933333 512 298.666667 194.133333c-12.8-10.666667-14.933333-32-2.133334-44.8 10.666667-12.8 32-14.933333 44.8-2.133333l384 341.333333c6.4 6.4 10.666667 14.933333 10.666667 23.466667 0 8.533333-4.266667 17.066667-10.666667 23.466667l-384 341.333333c-6.4 6.4-12.8 8.533333-21.333333 8.533333z",
        fill: "#ffffff",
        "p-id": "2334"
      })
    );
    const Ht = (i, a) => N("div", { class: "split_view" }, [
      N("div", { class: "split_content_wrapper flex column" }, [
        N(
          "div",
          {
            class: "split_view_label_wrapper flex",
            ondragover: Ft,
            ondrop: jt
          },
          [
            N("div", { class: "split_view_label_box flex" }, [
              i,
              N("div", { class: "add_btn_wrapper" }, [
                H(_) || r(Oe()) || it
              ])
            ]),
            N(
              "div",
              { class: "split_view_label_action_wrapper flex" },
              H(ge, Oe()) || o(Oe()) || Hn(Oe())
            )
          ]
        ),
        N(
          "div",
          {
            class: "split_view_content_wrapper",
            ondragover: Ft,
            ondrop: jt
          },
          [a]
        )
      ])
    ]), kn = (i) => {
      const a = Ht(at(i), ut(i)), f = N(
        ln,
        {
          onResize: zt,
          minPercent: 20,
          split: q.horizontal,
          defaultPercent: 100,
          layout: !0
        },
        { paneL: () => a }
      );
      return f.appContext = D.appContext, f;
    };
    function we(i) {
      let a = document.createElement("div");
      return or(i, a), a.firstElementChild;
    }
    function je(i) {
      if (i = i || X(), !i || !i.key)
        throw new Error("params win is invalid");
      if (W.value.push(i), i = W.value.find((a) => a.key === i.key), document.querySelector(".split_container")) {
        const a = M(
          D.vnode.el.querySelector(`.header_item[tabkey='${ie.value}']`),
          "split_content_wrapper"
        );
        lt(
          a.querySelector(".split_view_label_wrapper.flex"),
          we(at(i))
        ), a.querySelector(".split_view_content_wrapper").appendChild(we(ut(i)));
      } else {
        const a = we(kn(i));
        D.vnode.el.appendChild(a);
      }
      me(i.key);
    }
    function ft(i, a = q.vertical) {
      if (W.value.length <= 0)
        return;
      if (i = i || X(), !i || !i.key)
        throw new Error("params win is invalid");
      const f = we(at(i)), p = we(ut(i)), w = M(
        D.vnode.el.querySelector(`.header_item[tabkey='${ie.value}']`),
        "split_content_wrapper"
      );
      qt(w, {
        dropPosition: a == q.vertical ? ae.bottom : ae.right,
        target: f,
        tabView: p
      }), W.value.push(i), me(i.key);
    }
    t({
      windowList: W,
      newWindow: je,
      splitWindow: ft,
      getActiveWindow: Oe,
      closeWindow: Wt,
      activeTab: me
    });
    async function Wt(i, a, f = !1) {
      var T, b;
      if ((T = a == null ? void 0 : a.stopPropagation) == null || T.call(a), a = a || {
        target: D.vnode.el.querySelector(`.header_item[tabkey='${i.key}']`)
      }, !f && !await m(i, a))
        return;
      Lt(i, a.target);
      const p = M(a.target, "header_item"), w = p.getAttribute("tabkey"), d = Array.from(((b = p.parentNode.parentNode.nextElementSibling) == null ? void 0 : b.children) ?? []).find(
        (E) => E.getAttribute("tabviewkey") == w
      );
      p.parentNode.removeChild(p), d.parentNode.removeChild(d), Gn(i), n("closeWindow", i, a);
    }
    function Lt(i, a) {
      const f = M(a, "split_container"), p = f.parentNode, w = M(a, "split_pane"), d = w.className.includes(q.vertical) ? q.vertical : q.horizontal, T = w.className.includes("split_paneL") ? "left" : "right";
      requestAnimationFrame(() => {
        var b;
        if (!((b = w == null ? void 0 : w.querySelector(".split_view_content_wrapper")) != null && b.firstElementChild)) {
          const E = T == "left" ? 2 : 0, R = f.children[E];
          if (R) {
            switch (d) {
              case q.vertical:
                R.style.height = "100%";
                break;
              case q.horizontal:
                R.style.width = "100%";
                break;
            }
            const le = [...f.children].find(
              (Xn) => Xn.className.includes("Resizer")
            );
            le && f.removeChild(le), w.parentNode.removeChild(w);
          }
        }
        if (Yn(f))
          try {
            p.removeChild(f);
          } catch {
          }
        Jn();
      });
    }
    function Gn(i) {
      var a;
      W.value = W.value.filter((f) => f.key != i.key), i.key == ie.value && me(((a = W.value.at(-1)) == null ? void 0 : a.key) ?? "-1");
    }
    function Jn(i) {
      const a = document.querySelectorAll(".split_container:has(.split_container)");
      for (const p of a)
        p.children.length == 1 && (p.parentNode.appendChild(p.querySelector(".split_container")), p.parentNode.removeChild(p));
      const f = document.querySelectorAll(".split_pane:has(.split_pane)");
      for (const p of f)
        p.firstElementChild.children.length == 1 && (p.appendChild(p.querySelector(".split_view")), p.removeChild(p.querySelector(".split_container")));
    }
    function Yn(i) {
      var T, b;
      const a = [...i.children], f = a.find((E) => E.className.includes("split_paneL")), p = a.find((E) => E.className.includes("split_paneR")), w = !((T = f == null ? void 0 : f.querySelector(".split_view_content_wrapper")) != null && T.firstElementChild), d = !((b = p == null ? void 0 : p.querySelector(".split_view_content_wrapper")) != null && b.firstElementChild);
      return !!(!f && !p || !p && w || !f && d || w && d);
    }
    return (i, a) => (ne(), _t(P(hs), {
      onMouseup: ct,
      onMouseleave: Bn,
      class: yt(e.layoutClass)
    }, {
      default: ht(() => [
        e.showPlaceHolder && P(W).length <= 0 ? Te(i.$slots, "placeHolder", {
          key: 0,
          class: "placeholder"
        }, () => [
          Bt("div", gs, [
            Bt("button", {
              onClick: a[0] || (a[0] = (f) => je())
            }, "新建窗口")
          ])
        ]) : Xe("", !0),
        P(y).isUpdating ? (ne(), Fe("div", {
          key: 1,
          class: "drag_modal_wrapper",
          style: De(P(_s)(P(ce)))
        }, null, 4)) : Xe("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Es = {};
export {
  ln as Split,
  hs as SplitWindow,
  bs as VueDragSplit,
  Es as default,
  ae as dropPositionMap,
  vs as eventMap,
  _s as formatInsetCss,
  M as getParentElByClname,
  q as splitDirectionMap
};
