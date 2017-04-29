// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x37081_37082 = value;
x37081_37082.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x37086_37087 = value;
x37086_37087.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x37091_37092 = value;
x37091_37092.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__26228__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26228__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26228__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27322__auto__ = [];
var len__27315__auto___37100 = arguments.length;
var i__27316__auto___37101 = (0);
while(true){
if((i__27316__auto___37101 < len__27315__auto___37100)){
args__27322__auto__.push((arguments[i__27316__auto___37101]));

var G__37102 = (i__27316__auto___37101 + (1));
i__27316__auto___37101 = G__37102;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__37096_37103 = cljs.core.seq.call(null,items);
var chunk__37097_37104 = null;
var count__37098_37105 = (0);
var i__37099_37106 = (0);
while(true){
if((i__37099_37106 < count__37098_37105)){
var item_37107 = cljs.core._nth.call(null,chunk__37097_37104,i__37099_37106);
if(cljs.core.some_QMARK_.call(null,item_37107)){
if(cljs.core.coll_QMARK_.call(null,item_37107)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_37107)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_37107));
}
} else {
}

var G__37108 = seq__37096_37103;
var G__37109 = chunk__37097_37104;
var G__37110 = count__37098_37105;
var G__37111 = (i__37099_37106 + (1));
seq__37096_37103 = G__37108;
chunk__37097_37104 = G__37109;
count__37098_37105 = G__37110;
i__37099_37106 = G__37111;
continue;
} else {
var temp__4657__auto___37112 = cljs.core.seq.call(null,seq__37096_37103);
if(temp__4657__auto___37112){
var seq__37096_37113__$1 = temp__4657__auto___37112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37096_37113__$1)){
var c__27051__auto___37114 = cljs.core.chunk_first.call(null,seq__37096_37113__$1);
var G__37115 = cljs.core.chunk_rest.call(null,seq__37096_37113__$1);
var G__37116 = c__27051__auto___37114;
var G__37117 = cljs.core.count.call(null,c__27051__auto___37114);
var G__37118 = (0);
seq__37096_37103 = G__37115;
chunk__37097_37104 = G__37116;
count__37098_37105 = G__37117;
i__37099_37106 = G__37118;
continue;
} else {
var item_37119 = cljs.core.first.call(null,seq__37096_37113__$1);
if(cljs.core.some_QMARK_.call(null,item_37119)){
if(cljs.core.coll_QMARK_.call(null,item_37119)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_37119)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_37119));
}
} else {
}

var G__37120 = cljs.core.next.call(null,seq__37096_37113__$1);
var G__37121 = null;
var G__37122 = (0);
var G__37123 = (0);
seq__37096_37103 = G__37120;
chunk__37097_37104 = G__37121;
count__37098_37105 = G__37122;
i__37099_37106 = G__37123;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq37095){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37095));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___37131 = arguments.length;
var i__27316__auto___37132 = (0);
while(true){
if((i__27316__auto___37132 < len__27315__auto___37131)){
args__27322__auto__.push((arguments[i__27316__auto___37132]));

var G__37133 = (i__27316__auto___37132 + (1));
i__27316__auto___37132 = G__37133;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((2) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27323__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__37127_37134 = cljs.core.seq.call(null,children);
var chunk__37128_37135 = null;
var count__37129_37136 = (0);
var i__37130_37137 = (0);
while(true){
if((i__37130_37137 < count__37129_37136)){
var child_37138 = cljs.core._nth.call(null,chunk__37128_37135,i__37130_37137);
if(cljs.core.some_QMARK_.call(null,child_37138)){
if(cljs.core.coll_QMARK_.call(null,child_37138)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_37138))));
} else {
var temp__4655__auto___37139 = devtools.formatters.helpers.pref.call(null,child_37138);
if(cljs.core.truth_(temp__4655__auto___37139)){
var child_value_37140 = temp__4655__auto___37139;
template.push(child_value_37140);
} else {
}
}
} else {
}

var G__37141 = seq__37127_37134;
var G__37142 = chunk__37128_37135;
var G__37143 = count__37129_37136;
var G__37144 = (i__37130_37137 + (1));
seq__37127_37134 = G__37141;
chunk__37128_37135 = G__37142;
count__37129_37136 = G__37143;
i__37130_37137 = G__37144;
continue;
} else {
var temp__4657__auto___37145 = cljs.core.seq.call(null,seq__37127_37134);
if(temp__4657__auto___37145){
var seq__37127_37146__$1 = temp__4657__auto___37145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37127_37146__$1)){
var c__27051__auto___37147 = cljs.core.chunk_first.call(null,seq__37127_37146__$1);
var G__37148 = cljs.core.chunk_rest.call(null,seq__37127_37146__$1);
var G__37149 = c__27051__auto___37147;
var G__37150 = cljs.core.count.call(null,c__27051__auto___37147);
var G__37151 = (0);
seq__37127_37134 = G__37148;
chunk__37128_37135 = G__37149;
count__37129_37136 = G__37150;
i__37130_37137 = G__37151;
continue;
} else {
var child_37152 = cljs.core.first.call(null,seq__37127_37146__$1);
if(cljs.core.some_QMARK_.call(null,child_37152)){
if(cljs.core.coll_QMARK_.call(null,child_37152)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_37152))));
} else {
var temp__4655__auto___37153 = devtools.formatters.helpers.pref.call(null,child_37152);
if(cljs.core.truth_(temp__4655__auto___37153)){
var child_value_37154 = temp__4655__auto___37153;
template.push(child_value_37154);
} else {
}
}
} else {
}

var G__37155 = cljs.core.next.call(null,seq__37127_37146__$1);
var G__37156 = null;
var G__37157 = (0);
var G__37158 = (0);
seq__37127_37134 = G__37155;
chunk__37128_37135 = G__37156;
count__37129_37136 = G__37157;
i__37130_37137 = G__37158;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq37124){
var G__37125 = cljs.core.first.call(null,seq37124);
var seq37124__$1 = cljs.core.next.call(null,seq37124);
var G__37126 = cljs.core.first.call(null,seq37124__$1);
var seq37124__$2 = cljs.core.next.call(null,seq37124__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__37125,G__37126,seq37124__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___37161 = arguments.length;
var i__27316__auto___37162 = (0);
while(true){
if((i__27316__auto___37162 < len__27315__auto___37161)){
args__27322__auto__.push((arguments[i__27316__auto___37162]));

var G__37163 = (i__27316__auto___37162 + (1));
i__27316__auto___37162 = G__37163;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq37159){
var G__37160 = cljs.core.first.call(null,seq37159);
var seq37159__$1 = cljs.core.next.call(null,seq37159);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37160,seq37159__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___37166 = arguments.length;
var i__27316__auto___37167 = (0);
while(true){
if((i__27316__auto___37167 < len__27315__auto___37166)){
args__27322__auto__.push((arguments[i__27316__auto___37167]));

var G__37168 = (i__27316__auto___37167 + (1));
i__27316__auto___37167 = G__37168;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq37164){
var G__37165 = cljs.core.first.call(null,seq37164);
var seq37164__$1 = cljs.core.next.call(null,seq37164);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37165,seq37164__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args37169 = [];
var len__27315__auto___37174 = arguments.length;
var i__27316__auto___37175 = (0);
while(true){
if((i__27316__auto___37175 < len__27315__auto___37174)){
args37169.push((arguments[i__27316__auto___37175]));

var G__37176 = (i__27316__auto___37175 + (1));
i__27316__auto___37175 = G__37176;
continue;
} else {
}
break;
}

var G__37171 = args37169.length;
switch (G__37171) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37169.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj37173 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26240__auto__ = start_index;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return (0);
}
})()};
return obj37173;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27322__auto__ = [];
var len__27315__auto___37184 = arguments.length;
var i__27316__auto___37185 = (0);
while(true){
if((i__27316__auto___37185 < len__27315__auto___37184)){
args__27322__auto__.push((arguments[i__27316__auto___37185]));

var G__37186 = (i__27316__auto___37185 + (1));
i__27316__auto___37185 = G__37186;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37180){
var vec__37181 = p__37180;
var state_override_fn = cljs.core.nth.call(null,vec__37181,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq37178){
var G__37179 = cljs.core.first.call(null,seq37178);
var seq37178__$1 = cljs.core.next.call(null,seq37178);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__37179,seq37178__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27226__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37190_37193 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37191_37194 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37190_37193,_STAR_print_fn_STAR_37191_37194,sb__27226__auto__){
return (function (x__27227__auto__){
return sb__27226__auto__.append(x__27227__auto__);
});})(_STAR_print_newline_STAR_37190_37193,_STAR_print_fn_STAR_37191_37194,sb__27226__auto__))
;

try{var _STAR_print_level_STAR_37192_37195 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_37192_37195;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37191_37194;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37190_37193;
}
return [cljs.core.str(sb__27226__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_37197 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_37197;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__37199 = name;
switch (G__37199) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__37204 = tag;
var html_tag = cljs.core.nth.call(null,vec__37204,(0),null);
var style = cljs.core.nth.call(null,vec__37204,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_37208 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_37208;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_37211 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_37212 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_37212;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_37211;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__37213 = initial_value;
var G__37214 = value.call(null);
initial_value = G__37213;
value = G__37214;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__37215 = initial_value;
var G__37216 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__37215;
value = G__37216;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__37217 = initial_value;
var G__37218 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__37217;
value = G__37218;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1493455000766