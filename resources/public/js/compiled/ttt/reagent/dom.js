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
var or__6777__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6777__auto__)){
return or__6777__auto__;
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
var _STAR_always_update_STAR_8631 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8631){
return (function (){
var _STAR_always_update_STAR_8632 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8632;
}});})(_STAR_always_update_STAR_8631))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8631;
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
var args8633 = [];
var len__7852__auto___8636 = arguments.length;
var i__7853__auto___8637 = (0);
while(true){
if((i__7853__auto___8637 < len__7852__auto___8636)){
args8633.push((arguments[i__7853__auto___8637]));

var G__8638 = (i__7853__auto___8637 + (1));
i__7853__auto___8637 = G__8638;
continue;
} else {
}
break;
}

var G__8635 = args8633.length;
switch (G__8635) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8633.length)].join('')));

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

var seq__8644_8648 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8645_8649 = null;
var count__8646_8650 = (0);
var i__8647_8651 = (0);
while(true){
if((i__8647_8651 < count__8646_8650)){
var v_8652 = cljs.core._nth.call(null,chunk__8645_8649,i__8647_8651);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8652);

var G__8653 = seq__8644_8648;
var G__8654 = chunk__8645_8649;
var G__8655 = count__8646_8650;
var G__8656 = (i__8647_8651 + (1));
seq__8644_8648 = G__8653;
chunk__8645_8649 = G__8654;
count__8646_8650 = G__8655;
i__8647_8651 = G__8656;
continue;
} else {
var temp__4657__auto___8657 = cljs.core.seq.call(null,seq__8644_8648);
if(temp__4657__auto___8657){
var seq__8644_8658__$1 = temp__4657__auto___8657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8644_8658__$1)){
var c__7588__auto___8659 = cljs.core.chunk_first.call(null,seq__8644_8658__$1);
var G__8660 = cljs.core.chunk_rest.call(null,seq__8644_8658__$1);
var G__8661 = c__7588__auto___8659;
var G__8662 = cljs.core.count.call(null,c__7588__auto___8659);
var G__8663 = (0);
seq__8644_8648 = G__8660;
chunk__8645_8649 = G__8661;
count__8646_8650 = G__8662;
i__8647_8651 = G__8663;
continue;
} else {
var v_8664 = cljs.core.first.call(null,seq__8644_8658__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8664);

var G__8665 = cljs.core.next.call(null,seq__8644_8658__$1);
var G__8666 = null;
var G__8667 = (0);
var G__8668 = (0);
seq__8644_8648 = G__8665;
chunk__8645_8649 = G__8666;
count__8646_8650 = G__8667;
i__8647_8651 = G__8668;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1494351595873