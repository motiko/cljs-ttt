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
var x32963_32964 = value;
x32963_32964.devtools$protocols$IGroup$ = true;


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
var x32968_32969 = value;
x32968_32969.devtools$protocols$ITemplate$ = true;


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
var x32973_32974 = value;
x32973_32974.devtools$protocols$ISurrogate$ = true;


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
var len__27315__auto___32982 = arguments.length;
var i__27316__auto___32983 = (0);
while(true){
if((i__27316__auto___32983 < len__27315__auto___32982)){
args__27322__auto__.push((arguments[i__27316__auto___32983]));

var G__32984 = (i__27316__auto___32983 + (1));
i__27316__auto___32983 = G__32984;
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
var seq__32978_32985 = cljs.core.seq.call(null,items);
var chunk__32979_32986 = null;
var count__32980_32987 = (0);
var i__32981_32988 = (0);
while(true){
if((i__32981_32988 < count__32980_32987)){
var item_32989 = cljs.core._nth.call(null,chunk__32979_32986,i__32981_32988);
if(cljs.core.some_QMARK_.call(null,item_32989)){
if(cljs.core.coll_QMARK_.call(null,item_32989)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_32989)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_32989));
}
} else {
}

var G__32990 = seq__32978_32985;
var G__32991 = chunk__32979_32986;
var G__32992 = count__32980_32987;
var G__32993 = (i__32981_32988 + (1));
seq__32978_32985 = G__32990;
chunk__32979_32986 = G__32991;
count__32980_32987 = G__32992;
i__32981_32988 = G__32993;
continue;
} else {
var temp__4657__auto___32994 = cljs.core.seq.call(null,seq__32978_32985);
if(temp__4657__auto___32994){
var seq__32978_32995__$1 = temp__4657__auto___32994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32978_32995__$1)){
var c__27051__auto___32996 = cljs.core.chunk_first.call(null,seq__32978_32995__$1);
var G__32997 = cljs.core.chunk_rest.call(null,seq__32978_32995__$1);
var G__32998 = c__27051__auto___32996;
var G__32999 = cljs.core.count.call(null,c__27051__auto___32996);
var G__33000 = (0);
seq__32978_32985 = G__32997;
chunk__32979_32986 = G__32998;
count__32980_32987 = G__32999;
i__32981_32988 = G__33000;
continue;
} else {
var item_33001 = cljs.core.first.call(null,seq__32978_32995__$1);
if(cljs.core.some_QMARK_.call(null,item_33001)){
if(cljs.core.coll_QMARK_.call(null,item_33001)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_33001)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_33001));
}
} else {
}

var G__33002 = cljs.core.next.call(null,seq__32978_32995__$1);
var G__33003 = null;
var G__33004 = (0);
var G__33005 = (0);
seq__32978_32985 = G__33002;
chunk__32979_32986 = G__33003;
count__32980_32987 = G__33004;
i__32981_32988 = G__33005;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq32977){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32977));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___33013 = arguments.length;
var i__27316__auto___33014 = (0);
while(true){
if((i__27316__auto___33014 < len__27315__auto___33013)){
args__27322__auto__.push((arguments[i__27316__auto___33014]));

var G__33015 = (i__27316__auto___33014 + (1));
i__27316__auto___33014 = G__33015;
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
var seq__33009_33016 = cljs.core.seq.call(null,children);
var chunk__33010_33017 = null;
var count__33011_33018 = (0);
var i__33012_33019 = (0);
while(true){
if((i__33012_33019 < count__33011_33018)){
var child_33020 = cljs.core._nth.call(null,chunk__33010_33017,i__33012_33019);
if(cljs.core.some_QMARK_.call(null,child_33020)){
if(cljs.core.coll_QMARK_.call(null,child_33020)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_33020))));
} else {
var temp__4655__auto___33021 = devtools.formatters.helpers.pref.call(null,child_33020);
if(cljs.core.truth_(temp__4655__auto___33021)){
var child_value_33022 = temp__4655__auto___33021;
template.push(child_value_33022);
} else {
}
}
} else {
}

var G__33023 = seq__33009_33016;
var G__33024 = chunk__33010_33017;
var G__33025 = count__33011_33018;
var G__33026 = (i__33012_33019 + (1));
seq__33009_33016 = G__33023;
chunk__33010_33017 = G__33024;
count__33011_33018 = G__33025;
i__33012_33019 = G__33026;
continue;
} else {
var temp__4657__auto___33027 = cljs.core.seq.call(null,seq__33009_33016);
if(temp__4657__auto___33027){
var seq__33009_33028__$1 = temp__4657__auto___33027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33009_33028__$1)){
var c__27051__auto___33029 = cljs.core.chunk_first.call(null,seq__33009_33028__$1);
var G__33030 = cljs.core.chunk_rest.call(null,seq__33009_33028__$1);
var G__33031 = c__27051__auto___33029;
var G__33032 = cljs.core.count.call(null,c__27051__auto___33029);
var G__33033 = (0);
seq__33009_33016 = G__33030;
chunk__33010_33017 = G__33031;
count__33011_33018 = G__33032;
i__33012_33019 = G__33033;
continue;
} else {
var child_33034 = cljs.core.first.call(null,seq__33009_33028__$1);
if(cljs.core.some_QMARK_.call(null,child_33034)){
if(cljs.core.coll_QMARK_.call(null,child_33034)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_33034))));
} else {
var temp__4655__auto___33035 = devtools.formatters.helpers.pref.call(null,child_33034);
if(cljs.core.truth_(temp__4655__auto___33035)){
var child_value_33036 = temp__4655__auto___33035;
template.push(child_value_33036);
} else {
}
}
} else {
}

var G__33037 = cljs.core.next.call(null,seq__33009_33028__$1);
var G__33038 = null;
var G__33039 = (0);
var G__33040 = (0);
seq__33009_33016 = G__33037;
chunk__33010_33017 = G__33038;
count__33011_33018 = G__33039;
i__33012_33019 = G__33040;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq33006){
var G__33007 = cljs.core.first.call(null,seq33006);
var seq33006__$1 = cljs.core.next.call(null,seq33006);
var G__33008 = cljs.core.first.call(null,seq33006__$1);
var seq33006__$2 = cljs.core.next.call(null,seq33006__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__33007,G__33008,seq33006__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___33043 = arguments.length;
var i__27316__auto___33044 = (0);
while(true){
if((i__27316__auto___33044 < len__27315__auto___33043)){
args__27322__auto__.push((arguments[i__27316__auto___33044]));

var G__33045 = (i__27316__auto___33044 + (1));
i__27316__auto___33044 = G__33045;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq33041){
var G__33042 = cljs.core.first.call(null,seq33041);
var seq33041__$1 = cljs.core.next.call(null,seq33041);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33042,seq33041__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___33048 = arguments.length;
var i__27316__auto___33049 = (0);
while(true){
if((i__27316__auto___33049 < len__27315__auto___33048)){
args__27322__auto__.push((arguments[i__27316__auto___33049]));

var G__33050 = (i__27316__auto___33049 + (1));
i__27316__auto___33049 = G__33050;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq33046){
var G__33047 = cljs.core.first.call(null,seq33046);
var seq33046__$1 = cljs.core.next.call(null,seq33046);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33047,seq33046__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args33051 = [];
var len__27315__auto___33056 = arguments.length;
var i__27316__auto___33057 = (0);
while(true){
if((i__27316__auto___33057 < len__27315__auto___33056)){
args33051.push((arguments[i__27316__auto___33057]));

var G__33058 = (i__27316__auto___33057 + (1));
i__27316__auto___33057 = G__33058;
continue;
} else {
}
break;
}

var G__33053 = args33051.length;
switch (G__33053) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33051.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj33055 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26240__auto__ = start_index;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return (0);
}
})()};
return obj33055;
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
var len__27315__auto___33066 = arguments.length;
var i__27316__auto___33067 = (0);
while(true){
if((i__27316__auto___33067 < len__27315__auto___33066)){
args__27322__auto__.push((arguments[i__27316__auto___33067]));

var G__33068 = (i__27316__auto___33067 + (1));
i__27316__auto___33067 = G__33068;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__33062){
var vec__33063 = p__33062;
var state_override_fn = cljs.core.nth.call(null,vec__33063,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq33060){
var G__33061 = cljs.core.first.call(null,seq33060);
var seq33060__$1 = cljs.core.next.call(null,seq33060);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__33061,seq33060__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27226__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33072_33075 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33073_33076 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33072_33075,_STAR_print_fn_STAR_33073_33076,sb__27226__auto__){
return (function (x__27227__auto__){
return sb__27226__auto__.append(x__27227__auto__);
});})(_STAR_print_newline_STAR_33072_33075,_STAR_print_fn_STAR_33073_33076,sb__27226__auto__))
;

try{var _STAR_print_level_STAR_33074_33077 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_33074_33077;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33073_33076;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33072_33075;
}
return [cljs.core.str(sb__27226__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_33079 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_33079;
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
var G__33081 = name;
switch (G__33081) {
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
var vec__33086 = tag;
var html_tag = cljs.core.nth.call(null,vec__33086,(0),null);
var style = cljs.core.nth.call(null,vec__33086,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_33090 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_33090;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_33093 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_33094 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_33094;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_33093;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__33095 = initial_value;
var G__33096 = value.call(null);
initial_value = G__33095;
value = G__33096;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__33097 = initial_value;
var G__33098 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__33097;
value = G__33098;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__33099 = initial_value;
var G__33100 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__33099;
value = G__33100;
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

//# sourceMappingURL=templating.js.map?rel=1493511397647