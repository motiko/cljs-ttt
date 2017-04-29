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
var _STAR_always_update_STAR_32483 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_32483){
return (function (){
var _STAR_always_update_STAR_32484 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32484;
}});})(_STAR_always_update_STAR_32483))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32483;
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
var args32485 = [];
var len__27315__auto___32488 = arguments.length;
var i__27316__auto___32489 = (0);
while(true){
if((i__27316__auto___32489 < len__27315__auto___32488)){
args32485.push((arguments[i__27316__auto___32489]));

var G__32490 = (i__27316__auto___32489 + (1));
i__27316__auto___32489 = G__32490;
continue;
} else {
}
break;
}

var G__32487 = args32485.length;
switch (G__32487) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32485.length)].join('')));

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

var seq__32496_32500 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__32497_32501 = null;
var count__32498_32502 = (0);
var i__32499_32503 = (0);
while(true){
if((i__32499_32503 < count__32498_32502)){
var v_32504 = cljs.core._nth.call(null,chunk__32497_32501,i__32499_32503);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_32504);

var G__32505 = seq__32496_32500;
var G__32506 = chunk__32497_32501;
var G__32507 = count__32498_32502;
var G__32508 = (i__32499_32503 + (1));
seq__32496_32500 = G__32505;
chunk__32497_32501 = G__32506;
count__32498_32502 = G__32507;
i__32499_32503 = G__32508;
continue;
} else {
var temp__4657__auto___32509 = cljs.core.seq.call(null,seq__32496_32500);
if(temp__4657__auto___32509){
var seq__32496_32510__$1 = temp__4657__auto___32509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32496_32510__$1)){
var c__27051__auto___32511 = cljs.core.chunk_first.call(null,seq__32496_32510__$1);
var G__32512 = cljs.core.chunk_rest.call(null,seq__32496_32510__$1);
var G__32513 = c__27051__auto___32511;
var G__32514 = cljs.core.count.call(null,c__27051__auto___32511);
var G__32515 = (0);
seq__32496_32500 = G__32512;
chunk__32497_32501 = G__32513;
count__32498_32502 = G__32514;
i__32499_32503 = G__32515;
continue;
} else {
var v_32516 = cljs.core.first.call(null,seq__32496_32510__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_32516);

var G__32517 = cljs.core.next.call(null,seq__32496_32510__$1);
var G__32518 = null;
var G__32519 = (0);
var G__32520 = (0);
seq__32496_32500 = G__32517;
chunk__32497_32501 = G__32518;
count__32498_32502 = G__32519;
i__32499_32503 = G__32520;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1493454993753