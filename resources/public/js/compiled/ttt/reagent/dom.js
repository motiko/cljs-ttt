// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__26240__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_28094 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_28094){
return (function (){
var _STAR_always_update_STAR_28095 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28095;
}});})(_STAR_always_update_STAR_28094))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28094;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args28096 = [];
var len__27315__auto___28099 = arguments.length;
var i__27316__auto___28100 = (0);
while(true){
if((i__27316__auto___28100 < len__27315__auto___28099)){
args28096.push((arguments[i__27316__auto___28100]));

var G__28101 = (i__27316__auto___28100 + (1));
i__27316__auto___28100 = G__28101;
continue;
} else {
}
break;
}

var G__28098 = args28096.length;
switch (G__28098) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28096.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__28107_28111 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__28108_28112 = null;
var count__28109_28113 = (0);
var i__28110_28114 = (0);
while(true){
if((i__28110_28114 < count__28109_28113)){
var v_28115 = cljs.core._nth.call(null,chunk__28108_28112,i__28110_28114);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28115);

var G__28116 = seq__28107_28111;
var G__28117 = chunk__28108_28112;
var G__28118 = count__28109_28113;
var G__28119 = (i__28110_28114 + (1));
seq__28107_28111 = G__28116;
chunk__28108_28112 = G__28117;
count__28109_28113 = G__28118;
i__28110_28114 = G__28119;
continue;
} else {
var temp__4657__auto___28120 = cljs.core.seq.call(null,seq__28107_28111);
if(temp__4657__auto___28120){
var seq__28107_28121__$1 = temp__4657__auto___28120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28107_28121__$1)){
var c__27051__auto___28122 = cljs.core.chunk_first.call(null,seq__28107_28121__$1);
var G__28123 = cljs.core.chunk_rest.call(null,seq__28107_28121__$1);
var G__28124 = c__27051__auto___28122;
var G__28125 = cljs.core.count.call(null,c__27051__auto___28122);
var G__28126 = (0);
seq__28107_28111 = G__28123;
chunk__28108_28112 = G__28124;
count__28109_28113 = G__28125;
i__28110_28114 = G__28126;
continue;
} else {
var v_28127 = cljs.core.first.call(null,seq__28107_28121__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28127);

var G__28128 = cljs.core.next.call(null,seq__28107_28121__$1);
var G__28129 = null;
var G__28130 = (0);
var G__28131 = (0);
seq__28107_28111 = G__28128;
chunk__28108_28112 = G__28129;
count__28109_28113 = G__28130;
i__28110_28114 = G__28131;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1493511390505