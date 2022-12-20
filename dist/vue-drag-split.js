import { openBlock as ne, createElementBlock as Fe, normalizeClass as yt, unref as P, renderSlot as $e, toRefs as Qn, ref as fe, watch as Ye, normalizeStyle as De, createVNode as Zn, withCtx as ht, createBlock as _t, createCommentVNode as Xe, getCurrentInstance as er, useSlots as tr, h as C, onMounted as nr, reactive as rr, createElementVNode as Bt, render as or } from "vue";
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
}, gr = Object.prototype.hasOwnProperty, V = (e, t) => gr.call(e, t), O = Array.isArray, ye = (e) => ot(e) === "[object Map]", mr = (e) => ot(e) === "[object Set]", I = (e) => typeof e == "function", B = (e) => typeof e == "string", Ct = (e) => typeof e == "symbol", U = (e) => e !== null && typeof e == "object", wr = (e) => U(e) && I(e.then) && I(e.catch), br = Object.prototype.toString, ot = (e) => br.call(e), an = (e) => ot(e).slice(8, -1), vr = (e) => ot(e) === "[object Object]", Ot = (e) => B(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Er = (e) => {
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
    bt(r, s);
  }
}
function bt(e, t) {
  let n = !1;
  Re <= mt ? fn(e) || (e.n |= oe, n = !un(e)) : n = !e.has(z), n && (e.add(z), z.deps.push(e), process.env.NODE_ENV !== "production" && z.onTrack && z.onTrack(Object.assign({ effect: z }, t)));
}
function se(e, t, n, o, r, s) {
  const i = gt.get(e);
  if (!i)
    return;
  let a = [];
  if (t === "clear")
    a = [...i.values()];
  else if (n === "length" && O(e)) {
    const h = Sr(o);
    i.forEach((m, S) => {
      (S === "length" || S >= h) && a.push(m);
    });
  } else
    switch (n !== void 0 && a.push(i.get(n)), t) {
      case "add":
        O(e) ? Ot(n) && a.push(i.get("length")) : (a.push(i.get(pe)), ye(e) && a.push(i.get(wt)));
        break;
      case "delete":
        O(e) || (a.push(i.get(pe)), ye(e) && a.push(i.get(wt)));
        break;
      case "set":
        ye(e) && a.push(i.get(pe));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (a.length === 1)
    a[0] && (process.env.NODE_ENV !== "production" ? be(a[0], u) : be(a[0]));
  else {
    const h = [];
    for (const m of a)
      m && h.push(...m);
    process.env.NODE_ENV !== "production" ? be(Me(h), u) : be(Me(h));
  }
}
function be(e, t) {
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
), Tr = /* @__PURE__ */ xt(), $r = /* @__PURE__ */ xt(!0), Ir = /* @__PURE__ */ xt(!0, !0), Yt = /* @__PURE__ */ Mr();
function Mr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = g(this);
      for (let s = 0, i = this.length; s < i; s++)
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
    if (r === "__v_raw" && s === (e ? t ? vn : bn : t ? Xr : wn).get(o))
      return o;
    const i = O(o);
    if (!e && i && V(Yt, r))
      return Reflect.get(Yt, r, s);
    const a = Reflect.get(o, r, s);
    return (Ct(r) ? _n.has(r) : Pr(r)) || (e || K(o, "get", r), t) ? a : F(a) ? i && Ot(r) ? a : a.value : U(a) ? e ? yn(a) : En(a) : a;
  };
}
const Ar = /* @__PURE__ */ zr();
function zr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Ce(i) && F(i) && !F(r))
      return !1;
    if (!e && (!Qe(r) && !Ce(r) && (i = g(i), r = g(r)), !O(n) && F(i) && !F(r)))
      return i.value = r, !0;
    const a = O(n) && Ot(o) ? Number(o) < n.length : V(n, o), u = Reflect.set(n, o, r, s);
    return n === g(s) && (a ? Ie(r, i) && se(n, "set", o, r, i) : se(n, "add", o, r)), u;
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
  get: Tr,
  set: Ar,
  deleteProperty: Fr,
  has: jr,
  ownKeys: qr
}, gn = {
  get: $r,
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
  const { has: i } = st(r), a = o ? Vt : n ? Pt : Ae;
  if (i.call(r, t))
    return a(e.get(t));
  if (i.call(r, s))
    return a(e.get(s));
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
  const i = r.call(n, e);
  return n.set(e, t), s ? Ie(t, i) && se(n, "set", e, t, i) : se(n, "add", e, t), this;
}
function Zt(e) {
  const t = g(this), { has: n, get: o } = st(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && mn(t, n, e) : (e = g(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && se(t, "delete", e, void 0, s), i;
}
function en() {
  const e = g(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ye(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && se(e, "clear", void 0, void 0, n), o;
}
function We(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, a = g(i), u = t ? Vt : e ? Pt : Ae;
    return !e && K(a, "iterate", pe), i.forEach((h, m) => o.call(r, u(h), u(m), s));
  };
}
function Le(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = g(r), i = ye(s), a = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, h = r[e](...o), m = n ? Vt : t ? Pt : Ae;
    return !t && K(s, "iterate", u ? wt : pe), {
      next() {
        const { value: S, done: x } = h.next();
        return x ? { value: S, done: x } : {
          value: a ? [m(S[0]), m(S[1])] : m(S),
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
const wn = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap();
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
  return Rt(e, !0, gn, Jr, bn);
}
function Be(e) {
  return Rt(e, !0, Hr, Yr, vn);
}
function Rt(e, t, n, o, r) {
  if (!U(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Zr(e);
  if (i === 0)
    return e;
  const a = new Proxy(e, i === 2 ? o : n);
  return r.set(e, a), a;
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
  re && z && (e = g(e), process.env.NODE_ENV !== "production" ? bt(e.dep || (e.dep = Me()), {
    target: e,
    type: "get",
    key: "value"
  }) : bt(e.dep || (e.dep = Me())));
}
function no(e, t) {
  e = g(e), e.dep && (process.env.NODE_ENV !== "production" ? be(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : be(e.dep));
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
function T(e, ...t) {
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
    return s && wr(s) && s.catch((i) => {
      Cn(i, t, n);
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
    const i = t.proxy, a = process.env.NODE_ENV !== "production" ? Sn[n] : n;
    for (; s; ) {
      const h = s.ec;
      if (h) {
        for (let m = 0; m < h.length; m++)
          if (h[m](e, i, a) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      he(u, null, 10, [e, i, a]);
      return;
    }
  }
  bo(e, n, r, o);
}
function bo(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Sn[t];
    if (n && po(n), T(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ho(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let et = !1, vt = !1;
const L = [];
let te = 0;
const Se = [];
let G = null, ee = 0;
const On = /* @__PURE__ */ Promise.resolve();
let Tt = null;
const vo = 100;
function Eo(e) {
  const t = Tt || On;
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
function $t(e) {
  (!L.length || !L.includes(e, et && e.allowRecurse ? te + 1 : te)) && (e.id == null ? L.push(e) : L.splice(yo(e.id), 0, e), xn());
}
function xn() {
  !et && !vt && (vt = !0, Tt = On.then(Dn));
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
  vt = !1, et = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), L.sort(So);
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
    te = 0, L.length = 0, No(e), et = !1, Tt = null, (L.length || Se.length) && Dn(e);
  }
}
function Rn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > vo) {
      const o = t.ownerInstance, r = o && zn(o.type);
      return T(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
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
    Ve.has(s) || (s !== n.initialDef && tn(s, t), Ve.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Ve.add(s), r.ceReload(t.styles), Ve.delete(s)) : r.parent ? $t(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
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
    process.env.NODE_ENV !== "production" && T(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && T("inject() can only be used inside setup() or functional components.");
}
const Ue = {};
function To(e, t, n) {
  return process.env.NODE_ENV !== "production" && !I(t) && T("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Pn(e, t, n);
}
function Pn(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = Z) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && T('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && T('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const a = (b) => {
    T("Invalid watch source: ", b, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = _e;
  let h, m = !1, S = !1;
  if (F(e) ? (h = () => e.value, m = Qe(e)) : Ne(e) ? (h = () => e, o = !0) : O(e) ? (S = !0, m = e.some((b) => Ne(b) || Qe(b)), h = () => e.map((b) => {
    if (F(b))
      return b.value;
    if (Ne(b))
      return ve(b);
    if (I(b))
      return he(b, u, 2);
    process.env.NODE_ENV !== "production" && a(b);
  })) : I(e) ? t ? h = () => he(e, u, 2) : h = () => {
    if (!(u && u.isUnmounted))
      return x && x(), Ge(e, u, 3, [k]);
  } : (h = ke, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const b = h;
    h = () => ve(b());
  }
  let x, k = (b) => {
    x = N.onStop = () => {
      he(b, u, 4);
    };
  }, X;
  if (ts)
    if (k = ke, t ? n && Ge(t, u, 3, [
      h(),
      S ? [] : void 0,
      k
    ]) : h(), r === "sync") {
      const b = is();
      X = b.__watcherHandles || (b.__watcherHandles = []);
    } else
      return ke;
  let D = S ? new Array(e.length).fill(Ue) : Ue;
  const _ = () => {
    if (N.active)
      if (t) {
        const b = N.run();
        (o || m || (S ? b.some((H, it) => Ie(H, D[it])) : Ie(b, D))) && (x && x(), Ge(t, u, 3, [
          b,
          D === Ue ? void 0 : S && D[0] === Ue ? [] : D,
          k
        ]), D = b);
      } else
        N.run();
  };
  _.allowRecurse = !!t;
  let j;
  r === "sync" ? j = _ : r === "post" ? j = () => on(_, u && u.suspense) : (_.pre = !0, u && (_.id = u.uid), j = () => $t(_));
  const N = new Rr(h, j);
  process.env.NODE_ENV !== "production" && (N.onTrack = s, N.onTrigger = i), t ? n ? _() : D = N.run() : r === "post" ? on(N.run.bind(N), u && u.suspense) : N.run();
  const ge = () => {
    N.stop(), u && u.scope && _r(u.scope.effects, N);
  };
  return X && X.push(ge), ge;
}
function $o(e, t, n) {
  const o = this.proxy, r = B(e) ? e.includes(".") ? Io(o, e) : () => o[e] : e.bind(o, o);
  let s;
  I(t) ? s = t : (s = t.handler, n = t);
  const i = _e;
  sn(this);
  const a = Pn(r, s.bind(o), n);
  return i ? sn(i) : Zo(), a;
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
function ve(e, t) {
  if (!U(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), F(e))
    ve(e.value, t);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      ve(e[n], t);
  else if (mr(e) || ye(e))
    e.forEach((n) => {
      ve(n, t);
    });
  else if (vr(e))
    for (const n in e)
      ve(e[n], t);
  return e;
}
const Mo = Symbol(), Et = (e) => e ? es(e) ? ns(e) || e.proxy : Et(e.parent) : null, Te = /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
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
  $forceUpdate: (e) => e.f || (e.f = () => $t(e.update)),
  $nextTick: (e) => e.n || (e.n = Eo.bind(e.proxy)),
  $watch: (e) => $o.bind(e)
}), Ao = (e) => e === "_" || e === "$", dt = (e, t) => e !== Z && !e.__isScriptSetup && V(e, t), zo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: a, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const k = i[t];
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
          return i[t] = 1, o[t];
        if (r !== Z && V(r, t))
          return i[t] = 2, r[t];
        if ((h = e.propsOptions[0]) && V(h, t))
          return i[t] = 3, s[t];
        if (n !== Z && V(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const m = Te[t];
    let S, x;
    if (m)
      return t === "$attrs" && (K(e, "get", t), process.env.NODE_ENV !== "production" && void 0), m(e);
    if ((S = a.__cssModules) && (S = S[t]))
      return S;
    if (n !== Z && V(n, t))
      return i[t] = 4, n[t];
    if (x = u.config.globalProperties, V(x, t))
      return x[t];
    process.env.NODE_ENV !== "production" && Y && (!B(t) || t.indexOf("__v") !== 0) && (r !== Z && Ao(t[0]) && V(r, t) ? T(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Y && T(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return dt(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && V(r, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Z && V(o, t) ? (o[t] = n, !0) : V(e.props, t) ? (process.env.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && T(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let a;
    return !!n[i] || e !== Z && V(e, i) || dt(t, i) || (a = s[0]) && V(a, i) || V(o, i) || V(Te, i) || V(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : V(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (zo.ownKeys = (e) => (T("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Fo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, a = s.get(t);
  let u;
  return a ? u = a : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((h) => nt(u, h, i, !0)), nt(u, t, i)), U(t) && s.set(t, u), u;
}
function nt(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && nt(e, s, n, !0), r && r.forEach((i) => nt(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && T('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const a = jo[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
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
const on = Ro, Wo = (e) => e.__isTeleport, Tn = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Lo = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Bo = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0);
Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0);
let Ee = null;
function Uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ko = (...e) => Mn(...e), $n = "__vInternal", In = ({ key: e }) => e ?? null, Je = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? B(e) || F(e) || I(e) ? { i: Y, r: e, k: t, f: !!n } : e : null;
function Go(e, t = null, n = null, o = 0, r = null, s = e === Tn ? 0 : 1, i = !1, a = !1) {
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
  return a ? (It(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= B(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && T("VNode created with invalid key (NaN). VNode type:", u.type), !i && Ee && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && Ee.push(u), u;
}
const Jo = process.env.NODE_ENV !== "production" ? ko : Mn;
function Mn(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Mo) && (process.env.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Bo), Uo(e)) {
    const a = rt(e, t, !0);
    return n && It(a, n), !s && Ee && (a.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = a : Ee.push(a)), a.patchFlag |= -2, a;
  }
  if (jn(e) && (e = e.__vccOpts), t) {
    t = Yo(t);
    let { class: a, style: u } = t;
    a && !B(a) && (t.class = St(a)), U(u) && (Ze(u) && !O(u) && (u = J({}, u)), t.style = Nt(u));
  }
  const i = B(e) ? 1 : Do(e) ? 128 : Wo(e) ? 64 : U(e) ? 4 : I(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ze(e) && (e = g(e), T("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Go(e, t, n, o, r, i, s, !0);
}
function Yo(e) {
  return e ? Ze(e) || $n in e ? J({}, e) : e : null;
}
function rt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, a = t ? Qo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && In(a),
    ref: t && t.ref ? n && r ? O(r) ? r.concat(Je(t)) : [r, Je(t)] : Je(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && O(i) ? i.map(An) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Tn ? s === -1 ? 16 : s | 16 : s,
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
      !r && !($n in t) ? t._ctx = Y : r === 3 && Y && (Y.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
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
        const s = t[r], i = o[r];
        i && s !== i && !(O(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
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
        if (n in Te)
          return Te[n](e);
      },
      has(t, n) {
        return n in t || n in Te;
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
      for (const i in s)
        if (s[i] === t)
          return i;
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
    return e || process.env.NODE_ENV !== "production" && T("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
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
    return To(
      o,
      (r) => {
        n.value = r;
      },
      { immediate: !0 }
    ), (r, s) => (ne(), Fe("div", {
      class: yt(P(n))
    }, [
      $e(r.$slots, "default")
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
    const n = e, { layout: o, minPercent: r, defaultPercent: s, split: i } = Qn(n), a = fe("width"), u = fe("left"), h = fe(!1), m = fe(50);
    Ye(
      i,
      (_) => {
        a.value = _ === "horizontal" ? "width" : "height", u.value = _ === "horizontal" ? "left" : "top";
      },
      { immediate: !0 }
    ), Ye(
      s,
      (_) => {
        m.value = _;
      },
      { immediate: !0 }
    );
    function S() {
      let _ = null;
      return (j) => {
        _ || (_ = setTimeout(() => {
          j(), clearTimeout(_), _ = null;
        }, 100));
      };
    }
    const x = new S();
    function k() {
      h.value = !0;
    }
    function X() {
      h.value = !1;
    }
    function D(_) {
      if (_.buttons === 0 || _.which === 0 || !h.value)
        return;
      let j = 0, N = _.currentTarget;
      if (i.value === "horizontal")
        for (; N; )
          j += N.offsetLeft, N = N.offsetParent;
      else
        for (; N; )
          j += N.offsetTop, N = N.offsetParent;
      const ge = i.value === "horizontal" ? _.pageX : _.pageY, b = i.value === "horizontal" ? _.currentTarget.offsetWidth : _.currentTarget.offsetHeight, H = Math.floor((ge - j) / b * 1e4) / 100;
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
      split: P(i)
    }, [
      Zn(cn, {
        class: "split_pane split_paneL",
        split: P(i),
        style: De({ [P(a)]: P(m) + "%" })
      }, {
        default: ht(() => [
          $e(_.$slots, "paneL")
        ]),
        _: 3
      }, 8, ["split", "style"]),
      P(o) ? Xe("", !0) : (ne(), _t(ir, {
        key: 0,
        style: De({ [P(u)]: P(m) + "%" }),
        split: P(i),
        onMousedown: k
      }, null, 8, ["style", "split"])),
      P(o) ? Xe("", !0) : (ne(), _t(cn, {
        key: 1,
        class: "split_pane split_paneR",
        split: P(i),
        style: De({ [P(a)]: 100 - P(m) + "%" })
      }, {
        default: ht(() => [
          $e(_.$slots, "paneR")
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
    $e(e.$slots, "default")
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
}, bs = {};
const gs = { class: "placeholder_default flex a-c j-c" }, ms = {
  name: "VueDragSplit"
}, vs = /* @__PURE__ */ Object.assign(ms, {
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
      createTab: i,
      createTabView: a,
      activeLabelClassName: u,
      onCloseWindow: h,
      canCloseWindow: m,
      activeTabKeySync: S,
      windowListSync: x,
      layoutClass: k,
      generateWindowConfig: X
    } = e, D = er(), { AddBtn: _, CloseBtn: j, Tab: N, TabActions: ge, TabView: b } = tr();
    function H(c, l) {
      return c && c(l)[0];
    }
    const it = C(
      "div",
      {
        class: "add_btn",
        onclick: () => {
          je();
        }
      },
      C("div", { title: "新建窗口" }, "+")
    ), qn = C("div", { class: "close_inner", title: "关闭窗口" }, "x"), Kn = (c) => C(
      "span",
      { style: { fontSize: "12px", color: "white" } },
      c.label
    ), Mt = C(
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
      C("path", {
        d: "M252.068571 906.496h520.283429c89.581714 0 134.144-44.562286 134.144-132.845714V250.331429c0-88.283429-44.562286-132.845714-134.144-132.845715H252.068571c-89.142857 0-134.582857 44.141714-134.582857 132.845715V773.668571c0 88.704 45.44 132.845714 134.582857 132.845715z m1.28-68.992c-42.843429 0-66.852571-22.710857-66.852571-67.291429V253.805714c0-44.580571 24.009143-67.291429 66.852571-67.291428h222.866286v651.008z m517.723429-651.008c42.422857 0 66.432 22.710857 66.432 67.291429V770.194286c0 44.580571-24.009143 67.291429-66.432 67.291428H548.205714V186.496z",
        "p-id": "2712",
        fill: "#ffffff"
      })
    ), Hn = (c) => [
      C(
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
      C(
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
    ], Wn = (c) => C("div", null, [C("h3", null, "标签" + c.key + "的默认内容")]), W = fe([]);
    Ye(
      W,
      (c) => {
        n("update:windowListSync", c);
      },
      { deep: !0 }
    ), nr(() => {
      if ((x == null ? void 0 : x.length) > 0)
        for (const c of x)
          je(c);
    });
    const ie = fe("");
    ie.value = S, Ye(ie, (c) => {
      n("update:activeTabKeySync", c);
    });
    function Oe(c) {
      return W.value.find((l) => l.key == ie.value);
    }
    function At(c, l) {
      me(c);
    }
    function me(c) {
      ie.value = c;
      for (const l of D.vnode.el.querySelectorAll(
        ".split_view_content"
      )) {
        if (l.getAttribute("tabviewkey") == c) {
          l.style.zIndex = 2;
          continue;
        }
        l.style.zIndex = 1;
      }
      for (const l of D.vnode.el.querySelectorAll(
        ".header_item[tabkey]"
      )) {
        if (l.getAttribute("tabkey") == c) {
          l.classList.add("label_active", u);
          continue;
        }
        l.classList.remove("label_active", u);
      }
    }
    function zt(c) {
      n("resize", c);
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
    function Ln(c) {
      const { target: l, x: f, y: p } = c;
      y.isUpdating = !0, y.target = l, y.tabKey = l.getAttribute("tabKey"), y.tabEls = [
        ...l.parentNode.querySelectorAll(".header_item[tabkey]")
      ];
    }
    function Ft(c) {
      if (c.preventDefault(), !y.isUpdating)
        return;
      let { target: l, x: f, y: p } = c;
      l.getBoundingClientRect();
      const w = M(l, "split_view_label_wrapper") ?? M(l, "split_view_content");
      if (!w)
        return;
      y.respectLayout = w;
      const d = w.getBoundingClientRect(), $ = D.vnode.el.getBoundingClientRect(), v = d.x - $.x, E = d.y - $.y;
      if (f = f - $.x, p = p - $.y, w.className.includes("split_view_label_wrapper")) {
        ce.value = {
          top: E,
          left: v,
          height: d.height,
          width: d.width
        }, y.dropPosition = "inner";
        return;
      } else if (w.className.includes("split_view_content")) {
        const R = d.height / 3, le = d.width / 3;
        f > v && f < v + d.width && p > E && p < E + R ? (ce.value = {
          top: E,
          left: v,
          height: d.height / 2,
          width: d.width
        }, y.dropPosition = "top") : f > v && f < v + d.width && p > E + R * 2 && p < E + d.height ? (ce.value = {
          top: E + d.height / 2,
          left: v,
          height: d.height / 2,
          width: d.width
        }, y.dropPosition = "bottom") : f > v + le * 2 && f < v + d.width && p > E + R && p < E + R * 2 ? (ce.value = {
          top: E,
          left: v + d.width / 2,
          height: d.height,
          width: d.width / 2
        }, y.dropPosition = "right") : f > v && f < v + le && p > E && p < E + R * 2 && (ce.value = {
          top: E,
          left: v,
          height: d.height,
          width: d.width / 2
        }, y.dropPosition = "left");
      }
    }
    function Bn(c) {
      ct(c);
    }
    function ct(c) {
      c.preventDefault(), y.isUpdating = !1, ce.value = {
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
    function jt(c) {
      ct(c);
      const { target: l, x: f, y: p } = c;
      let w, d;
      M(l, "split_view_label_wrapper") ? (w = M(l, "split_view_label_wrapper"), d = xe.tab) : M(l, "split_view_content_wrapper") && (w = M(l, "split_view_label_wrapper"), d = xe.tabView);
      const E = [...M(
        y.target,
        "split_content_wrapper"
      ).querySelectorAll(
        ".split_view_content"
      )].find(
        (le) => le.getAttribute("tabViewKey") === y.tabKey
      );
      if (y.tabView = E, y.tabEls.length == 1 && y.tabView == y.respectLayout || d == xe.tab && w == M(y.target, "split_view_label_wrapper"))
        return;
      Lt({}, y.target), me(y.tabKey);
      const R = () => {
        requestAnimationFrame(() => {
          n("dragEnd", c);
        });
      };
      switch (d) {
        case xe.tab:
          lt(w, y.target), w.nextElementSibling.appendChild(y.tabView), R();
          return;
        case xe.tabView:
          qt(l, y), R();
          break;
      }
    }
    function lt(c, l) {
      c = c.firstElementChild;
      const f = Array.from((c == null ? void 0 : c.children) ?? []).find(
        (p) => p.className.includes("add_btn_wrapper")
      );
      f ? c.insertBefore(l, f) : c.appendChild(l);
    }
    function qt(c, l) {
      let f = ".horizontal.split_pane", p = M(c, "split_pane"), w = M(
        c,
        "split_container"
      ), d = w.querySelector(
        f + ".split_paneL"
      ), $ = w.querySelector(
        f + ".split_paneR"
      ), v;
      ["left", "right"].includes(l.dropPosition) ? v = q.horizontal : ["top", "bottom"].includes(l.dropPosition) && (v = q.vertical);
      const E = C(
        ln,
        {
          onResize: zt,
          minPercent: 20,
          split: v,
          defaultPercent: 50
        },
        { paneR: () => Ht(null, null) }
      );
      E.appContext = D.appContext;
      let R = we(E);
      R.querySelector(`.${v}.split_pane.split_paneL`).appendChild(p.children[0]), lt(
        R.querySelector(".split_paneR .split_view_label_wrapper"),
        l.target
      ), R.querySelector(".split_paneR .split_view_content_wrapper").appendChild(l.tabView), p.appendChild(R), d = R.children[0], $ = R.children[2], requestAnimationFrame(() => {
        switch (l.dropPosition) {
          case ae.top:
            Kt(d, $);
            break;
          case ae.bottom:
            break;
          case ae.left:
            Kt(d, $);
            break;
          case ae.right:
            break;
        }
      });
    }
    function Kt(c, l) {
      let f = c.children[0];
      c.appendChild(l.children[0]), l.appendChild(f);
    }
    const Un = (c) => C(
      "div",
      {
        class: "close_btn",
        onclick: (l) => {
          Wt(c, l);
        }
      },
      H(j, c) || s(c) || qn
    ), at = (c) => C(
      "div",
      {
        class: "header_item flex a-c",
        ondragstart: Ln,
        draggable: !0,
        onclick: (l) => {
          At(c.key);
        },
        tabKey: c.key
      },
      [
        H(N, c) || i(c) || Kn(c),
        Un(c)
      ]
    ), ut = (c) => C(
      "div",
      {
        class: "split_view_content",
        tabViewKey: c.key,
        onclick: (l) => {
          At(c.key);
        }
      },
      [H(b, c) || a(c) || Wn(c)]
    ), Ht = (c, l) => C("div", { class: "split_view" }, [
      C("div", { class: "split_content_wrapper flex column" }, [
        C(
          "div",
          {
            class: "split_view_label_wrapper flex",
            ondragover: Ft,
            ondrop: jt
          },
          [
            C("div", { class: "split_view_label_box flex" }, [
              c,
              C("div", { class: "add_btn_wrapper" }, [
                H(_) || r(Oe()) || it
              ])
            ]),
            C(
              "div",
              { class: "split_view_label_action_wrapper flex" },
              H(ge, Oe()) || o(Oe()) || Hn(Oe())
            )
          ]
        ),
        C(
          "div",
          {
            class: "split_view_content_wrapper",
            ondragover: Ft,
            ondrop: jt
          },
          [l]
        )
      ])
    ]), kn = (c) => {
      const l = Ht(
        at(c),
        ut(c)
      ), f = C(
        ln,
        {
          onResize: zt,
          minPercent: 20,
          split: q.horizontal,
          defaultPercent: 100,
          layout: !0
        },
        { paneL: () => l }
      );
      return f.appContext = D.appContext, f;
    };
    function we(c) {
      let l = document.createElement("div");
      return or(c, l), l.firstElementChild;
    }
    function je(c) {
      if (c = c || X(), !c || !c.key)
        throw new Error("params win is invalid");
      if (W.value.push(c), c = W.value.find((l) => l.key === c.key), document.querySelector(".split_container")) {
        const l = M(
          D.vnode.el.querySelector(
            `.header_item[tabkey='${ie.value}']`
          ),
          "split_content_wrapper"
        );
        lt(
          l.querySelector(".split_view_label_wrapper.flex"),
          we(at(c))
        ), l.querySelector(".split_view_content_wrapper").appendChild(we(ut(c)));
      } else {
        const l = we(kn(c));
        D.vnode.el.appendChild(l);
      }
      me(c.key);
    }
    function ft(c, l = q.vertical) {
      if (W.value.length <= 0)
        return;
      if (c = c || X(), !c || !c.key)
        throw new Error("params win is invalid");
      const f = we(at(c)), p = we(ut(c)), w = M(
        D.vnode.el.querySelector(
          `.header_item[tabkey='${ie.value}']`
        ),
        "split_content_wrapper"
      );
      qt(w, {
        dropPosition: l == q.vertical ? ae.bottom : ae.right,
        target: f,
        tabView: p
      }), W.value.push(c), me(c.key);
    }
    t({
      windowList: W,
      newWindow: je,
      splitWindow: ft,
      getActiveWindow: Oe,
      closeWindow: Wt,
      activeTab: me
    });
    async function Wt(c, l, f = !1) {
      var $, v;
      if (($ = l == null ? void 0 : l.stopPropagation) == null || $.call(l), l = l || {
        target: D.vnode.el.querySelector(
          `.header_item[tabkey='${c.key}']`
        )
      }, !f && !await m(c, l))
        return;
      Lt(c, l.target);
      const p = M(l.target, "header_item"), w = p.getAttribute("tabkey"), d = Array.from(
        ((v = p.parentNode.parentNode.nextElementSibling) == null ? void 0 : v.children) ?? []
      ).find((E) => E.getAttribute("tabviewkey") == w);
      p.parentNode.removeChild(p), d.parentNode.removeChild(d), Gn(c), n("closeWindow", c, l);
    }
    function Lt(c, l) {
      const f = M(l, "split_container"), p = f.parentNode, w = M(l, "split_pane"), d = w.className.includes(
        q.vertical
      ) ? q.vertical : q.horizontal, $ = w.className.includes("split_paneL") ? "left" : "right";
      requestAnimationFrame(() => {
        var v;
        if (!((v = w == null ? void 0 : w.querySelector(".split_view_content_wrapper")) != null && v.firstElementChild)) {
          const E = $ == "left" ? 2 : 0, R = f.children[E];
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
    function Gn(c) {
      var l;
      W.value = W.value.filter((f) => f.key != c.key), c.key == ie.value && me(((l = W.value.at(-1)) == null ? void 0 : l.key) ?? "-1");
    }
    function Jn(c) {
      const l = document.querySelectorAll(
        ".split_container:has(.split_container)"
      );
      for (const p of l)
        p.children.length == 1 && (p.parentNode.appendChild(
          p.querySelector(".split_container")
        ), p.parentNode.removeChild(p));
      const f = document.querySelectorAll(
        ".split_pane:has(.split_pane)"
      );
      for (const p of f)
        p.firstElementChild.children.length == 1 && (p.appendChild(p.querySelector(".split_view")), p.removeChild(p.querySelector(".split_container")));
    }
    function Yn(c) {
      var $, v;
      const l = [...c.children], f = l.find((E) => E.className.includes("split_paneL")), p = l.find((E) => E.className.includes("split_paneR")), w = !(($ = f == null ? void 0 : f.querySelector(
        ".split_view_content_wrapper"
      )) != null && $.firstElementChild), d = !((v = p == null ? void 0 : p.querySelector(
        ".split_view_content_wrapper"
      )) != null && v.firstElementChild);
      return !!(!f && !p || !p && w || !f && d || w && d);
    }
    return (c, l) => (ne(), _t(P(hs), {
      onMouseup: ct,
      onMouseleave: Bn,
      class: yt(e.layoutClass)
    }, {
      default: ht(() => [
        e.showPlaceHolder && P(W).length <= 0 ? $e(c.$slots, "placeHolder", {
          key: 0,
          class: "placeholder"
        }, () => [
          Bt("div", gs, [
            Bt("button", {
              onClick: l[0] || (l[0] = (f) => je())
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
  vs as VueDragSplit,
  Es as default,
  ae as dropPositionMap,
  bs as eventMap,
  _s as formatInsetCss,
  M as getParentElByClname,
  q as splitDirectionMap
};
