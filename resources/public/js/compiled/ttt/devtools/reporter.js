// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___33320 = arguments.length;
var i__27316__auto___33321 = (0);
while(true){
if((i__27316__auto___33321 < len__27315__auto___33320)){
args__27322__auto__.push((arguments[i__27316__auto___33321]));

var G__33322 = (i__27316__auto___33321 + (1));
i__27316__auto___33321 = G__33322;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__33315){
var vec__33316 = p__33315;
var context = cljs.core.nth.call(null,vec__33316,(0),null);
var footer = cljs.core.nth.call(null,vec__33316,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__26240__auto__ = e.message;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str(" "),cljs.core.str(message)].join('')];
var context_msg = [cljs.core.str("In "),cljs.core.str(devtools.util.get_lib_info.call(null)),cljs.core.str((cljs.core.truth_(context)?[cljs.core.str(", "),cljs.core.str(context),cljs.core.str(".")].join(''):".")),cljs.core.str("\n\n")].join('');
var footer_msg = ((cljs.core.some_QMARK_.call(null,footer))?footer:[cljs.core.str("\n\n"),cljs.core.str("---\n"),cljs.core.str("Please report the issue here: "),cljs.core.str(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = goog.object.get(c,"groupCollapsed");
var log = goog.object.get(c,"log");
var group_end = goog.object.get(c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e33319){var e__$1 = e33319;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq33313){
var G__33314 = cljs.core.first.call(null,seq33313);
var seq33313__$1 = cljs.core.next.call(null,seq33313);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33314,seq33313__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1493511398090