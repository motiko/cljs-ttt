// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35652 = [];
var len__27165__auto___35655 = arguments.length;
var i__27166__auto___35656 = (0);
while(true){
if((i__27166__auto___35656 < len__27165__auto___35655)){
args35652.push((arguments[i__27166__auto___35656]));

var G__35657 = (i__27166__auto___35656 + (1));
i__27166__auto___35656 = G__35657;
continue;
} else {
}
break;
}

var G__35654 = args35652.length;
switch (G__35654) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35652.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27172__auto__ = [];
var len__27165__auto___35660 = arguments.length;
var i__27166__auto___35661 = (0);
while(true){
if((i__27166__auto___35661 < len__27165__auto___35660)){
args__27172__auto__.push((arguments[i__27166__auto___35661]));

var G__35662 = (i__27166__auto___35661 + (1));
i__27166__auto___35661 = G__35662;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35659){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35659));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27172__auto__ = [];
var len__27165__auto___35664 = arguments.length;
var i__27166__auto___35665 = (0);
while(true){
if((i__27166__auto___35665 < len__27165__auto___35664)){
args__27172__auto__.push((arguments[i__27166__auto___35665]));

var G__35666 = (i__27166__auto___35665 + (1));
i__27166__auto___35665 = G__35666;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35663){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35663));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35667 = cljs.core._EQ_;
var expr__35668 = (function (){var or__26090__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35671){if((e35671 instanceof Error)){
var e = e35671;
return false;
} else {
throw e35671;

}
}})();
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35667.call(null,"true",expr__35668))){
return true;
} else {
if(cljs.core.truth_(pred__35667.call(null,"false",expr__35668))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35668)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35673){if((e35673 instanceof Error)){
var e = e35673;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35673;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35674){
var map__35677 = p__35674;
var map__35677__$1 = ((((!((map__35677 == null)))?((((map__35677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35677):map__35677);
var message = cljs.core.get.call(null,map__35677__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35677__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26090__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26078__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26078__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26078__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28262__auto___35839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___35839,ch){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___35839,ch){
return (function (state_35808){
var state_val_35809 = (state_35808[(1)]);
if((state_val_35809 === (7))){
var inst_35804 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35810_35840 = state_35808__$1;
(statearr_35810_35840[(2)] = inst_35804);

(statearr_35810_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (1))){
var state_35808__$1 = state_35808;
var statearr_35811_35841 = state_35808__$1;
(statearr_35811_35841[(2)] = null);

(statearr_35811_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (4))){
var inst_35761 = (state_35808[(7)]);
var inst_35761__$1 = (state_35808[(2)]);
var state_35808__$1 = (function (){var statearr_35812 = state_35808;
(statearr_35812[(7)] = inst_35761__$1);

return statearr_35812;
})();
if(cljs.core.truth_(inst_35761__$1)){
var statearr_35813_35842 = state_35808__$1;
(statearr_35813_35842[(1)] = (5));

} else {
var statearr_35814_35843 = state_35808__$1;
(statearr_35814_35843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (15))){
var inst_35768 = (state_35808[(8)]);
var inst_35783 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35768);
var inst_35784 = cljs.core.first.call(null,inst_35783);
var inst_35785 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35784);
var inst_35786 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35785)].join('');
var inst_35787 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35786);
var state_35808__$1 = state_35808;
var statearr_35815_35844 = state_35808__$1;
(statearr_35815_35844[(2)] = inst_35787);

(statearr_35815_35844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (13))){
var inst_35792 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35816_35845 = state_35808__$1;
(statearr_35816_35845[(2)] = inst_35792);

(statearr_35816_35845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (6))){
var state_35808__$1 = state_35808;
var statearr_35817_35846 = state_35808__$1;
(statearr_35817_35846[(2)] = null);

(statearr_35817_35846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (17))){
var inst_35790 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35818_35847 = state_35808__$1;
(statearr_35818_35847[(2)] = inst_35790);

(statearr_35818_35847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (3))){
var inst_35806 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35808__$1,inst_35806);
} else {
if((state_val_35809 === (12))){
var inst_35767 = (state_35808[(9)]);
var inst_35781 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35767,opts);
var state_35808__$1 = state_35808;
if(cljs.core.truth_(inst_35781)){
var statearr_35819_35848 = state_35808__$1;
(statearr_35819_35848[(1)] = (15));

} else {
var statearr_35820_35849 = state_35808__$1;
(statearr_35820_35849[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (2))){
var state_35808__$1 = state_35808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35808__$1,(4),ch);
} else {
if((state_val_35809 === (11))){
var inst_35768 = (state_35808[(8)]);
var inst_35773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35774 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35768);
var inst_35775 = cljs.core.async.timeout.call(null,(1000));
var inst_35776 = [inst_35774,inst_35775];
var inst_35777 = (new cljs.core.PersistentVector(null,2,(5),inst_35773,inst_35776,null));
var state_35808__$1 = state_35808;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35808__$1,(14),inst_35777);
} else {
if((state_val_35809 === (9))){
var inst_35768 = (state_35808[(8)]);
var inst_35794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35795 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35768);
var inst_35796 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35795);
var inst_35797 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35796)].join('');
var inst_35798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35797);
var state_35808__$1 = (function (){var statearr_35821 = state_35808;
(statearr_35821[(10)] = inst_35794);

return statearr_35821;
})();
var statearr_35822_35850 = state_35808__$1;
(statearr_35822_35850[(2)] = inst_35798);

(statearr_35822_35850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (5))){
var inst_35761 = (state_35808[(7)]);
var inst_35763 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35764 = (new cljs.core.PersistentArrayMap(null,2,inst_35763,null));
var inst_35765 = (new cljs.core.PersistentHashSet(null,inst_35764,null));
var inst_35766 = figwheel.client.focus_msgs.call(null,inst_35765,inst_35761);
var inst_35767 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35766);
var inst_35768 = cljs.core.first.call(null,inst_35766);
var inst_35769 = figwheel.client.autoload_QMARK_.call(null);
var state_35808__$1 = (function (){var statearr_35823 = state_35808;
(statearr_35823[(9)] = inst_35767);

(statearr_35823[(8)] = inst_35768);

return statearr_35823;
})();
if(cljs.core.truth_(inst_35769)){
var statearr_35824_35851 = state_35808__$1;
(statearr_35824_35851[(1)] = (8));

} else {
var statearr_35825_35852 = state_35808__$1;
(statearr_35825_35852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (14))){
var inst_35779 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35826_35853 = state_35808__$1;
(statearr_35826_35853[(2)] = inst_35779);

(statearr_35826_35853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (16))){
var state_35808__$1 = state_35808;
var statearr_35827_35854 = state_35808__$1;
(statearr_35827_35854[(2)] = null);

(statearr_35827_35854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (10))){
var inst_35800 = (state_35808[(2)]);
var state_35808__$1 = (function (){var statearr_35828 = state_35808;
(statearr_35828[(11)] = inst_35800);

return statearr_35828;
})();
var statearr_35829_35855 = state_35808__$1;
(statearr_35829_35855[(2)] = null);

(statearr_35829_35855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (8))){
var inst_35767 = (state_35808[(9)]);
var inst_35771 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35767,opts);
var state_35808__$1 = state_35808;
if(cljs.core.truth_(inst_35771)){
var statearr_35830_35856 = state_35808__$1;
(statearr_35830_35856[(1)] = (11));

} else {
var statearr_35831_35857 = state_35808__$1;
(statearr_35831_35857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28262__auto___35839,ch))
;
return ((function (switch__28150__auto__,c__28262__auto___35839,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_35835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35835[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__);

(statearr_35835[(1)] = (1));

return statearr_35835;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1 = (function (state_35808){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_35808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e35836){if((e35836 instanceof Object)){
var ex__28154__auto__ = e35836;
var statearr_35837_35858 = state_35808;
(statearr_35837_35858[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35859 = state_35808;
state_35808 = G__35859;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__ = function(state_35808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1.call(this,state_35808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___35839,ch))
})();
var state__28264__auto__ = (function (){var statearr_35838 = f__28263__auto__.call(null);
(statearr_35838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___35839);

return statearr_35838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___35839,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35860_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35860_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35863 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35863){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35862){if((e35862 instanceof Error)){
var e = e35862;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35863], null));
} else {
var e = e35862;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35863))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35864){
var map__35873 = p__35864;
var map__35873__$1 = ((((!((map__35873 == null)))?((((map__35873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35873):map__35873);
var opts = map__35873__$1;
var build_id = cljs.core.get.call(null,map__35873__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35873,map__35873__$1,opts,build_id){
return (function (p__35875){
var vec__35876 = p__35875;
var seq__35877 = cljs.core.seq.call(null,vec__35876);
var first__35878 = cljs.core.first.call(null,seq__35877);
var seq__35877__$1 = cljs.core.next.call(null,seq__35877);
var map__35879 = first__35878;
var map__35879__$1 = ((((!((map__35879 == null)))?((((map__35879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35879):map__35879);
var msg = map__35879__$1;
var msg_name = cljs.core.get.call(null,map__35879__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35877__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35876,seq__35877,first__35878,seq__35877__$1,map__35879,map__35879__$1,msg,msg_name,_,map__35873,map__35873__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35876,seq__35877,first__35878,seq__35877__$1,map__35879,map__35879__$1,msg,msg_name,_,map__35873,map__35873__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35873,map__35873__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35887){
var vec__35888 = p__35887;
var seq__35889 = cljs.core.seq.call(null,vec__35888);
var first__35890 = cljs.core.first.call(null,seq__35889);
var seq__35889__$1 = cljs.core.next.call(null,seq__35889);
var map__35891 = first__35890;
var map__35891__$1 = ((((!((map__35891 == null)))?((((map__35891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35891):map__35891);
var msg = map__35891__$1;
var msg_name = cljs.core.get.call(null,map__35891__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35889__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35893){
var map__35905 = p__35893;
var map__35905__$1 = ((((!((map__35905 == null)))?((((map__35905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35905):map__35905);
var on_compile_warning = cljs.core.get.call(null,map__35905__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35905__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35905,map__35905__$1,on_compile_warning,on_compile_fail){
return (function (p__35907){
var vec__35908 = p__35907;
var seq__35909 = cljs.core.seq.call(null,vec__35908);
var first__35910 = cljs.core.first.call(null,seq__35909);
var seq__35909__$1 = cljs.core.next.call(null,seq__35909);
var map__35911 = first__35910;
var map__35911__$1 = ((((!((map__35911 == null)))?((((map__35911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35911):map__35911);
var msg = map__35911__$1;
var msg_name = cljs.core.get.call(null,map__35911__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35909__$1;
var pred__35913 = cljs.core._EQ_;
var expr__35914 = msg_name;
if(cljs.core.truth_(pred__35913.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35914))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35913.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35914))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35905,map__35905__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__,msg_hist,msg_names,msg){
return (function (state_36142){
var state_val_36143 = (state_36142[(1)]);
if((state_val_36143 === (7))){
var inst_36062 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36062)){
var statearr_36144_36194 = state_36142__$1;
(statearr_36144_36194[(1)] = (8));

} else {
var statearr_36145_36195 = state_36142__$1;
(statearr_36145_36195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (20))){
var inst_36136 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36146_36196 = state_36142__$1;
(statearr_36146_36196[(2)] = inst_36136);

(statearr_36146_36196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (27))){
var inst_36132 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36147_36197 = state_36142__$1;
(statearr_36147_36197[(2)] = inst_36132);

(statearr_36147_36197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (1))){
var inst_36055 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36055)){
var statearr_36148_36198 = state_36142__$1;
(statearr_36148_36198[(1)] = (2));

} else {
var statearr_36149_36199 = state_36142__$1;
(statearr_36149_36199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (24))){
var inst_36134 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36150_36200 = state_36142__$1;
(statearr_36150_36200[(2)] = inst_36134);

(statearr_36150_36200[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (4))){
var inst_36140 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36142__$1,inst_36140);
} else {
if((state_val_36143 === (15))){
var inst_36138 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36151_36201 = state_36142__$1;
(statearr_36151_36201[(2)] = inst_36138);

(statearr_36151_36201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (21))){
var inst_36091 = (state_36142[(2)]);
var inst_36092 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36093 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36092);
var state_36142__$1 = (function (){var statearr_36152 = state_36142;
(statearr_36152[(7)] = inst_36091);

return statearr_36152;
})();
var statearr_36153_36202 = state_36142__$1;
(statearr_36153_36202[(2)] = inst_36093);

(statearr_36153_36202[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (31))){
var inst_36121 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36121)){
var statearr_36154_36203 = state_36142__$1;
(statearr_36154_36203[(1)] = (34));

} else {
var statearr_36155_36204 = state_36142__$1;
(statearr_36155_36204[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (32))){
var inst_36130 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36156_36205 = state_36142__$1;
(statearr_36156_36205[(2)] = inst_36130);

(statearr_36156_36205[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (33))){
var inst_36117 = (state_36142[(2)]);
var inst_36118 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36119 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36118);
var state_36142__$1 = (function (){var statearr_36157 = state_36142;
(statearr_36157[(8)] = inst_36117);

return statearr_36157;
})();
var statearr_36158_36206 = state_36142__$1;
(statearr_36158_36206[(2)] = inst_36119);

(statearr_36158_36206[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (13))){
var inst_36076 = figwheel.client.heads_up.clear.call(null);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(16),inst_36076);
} else {
if((state_val_36143 === (22))){
var inst_36097 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36098 = figwheel.client.heads_up.append_warning_message.call(null,inst_36097);
var state_36142__$1 = state_36142;
var statearr_36159_36207 = state_36142__$1;
(statearr_36159_36207[(2)] = inst_36098);

(statearr_36159_36207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (36))){
var inst_36128 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36160_36208 = state_36142__$1;
(statearr_36160_36208[(2)] = inst_36128);

(statearr_36160_36208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (29))){
var inst_36108 = (state_36142[(2)]);
var inst_36109 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36110 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36109);
var state_36142__$1 = (function (){var statearr_36161 = state_36142;
(statearr_36161[(9)] = inst_36108);

return statearr_36161;
})();
var statearr_36162_36209 = state_36142__$1;
(statearr_36162_36209[(2)] = inst_36110);

(statearr_36162_36209[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (6))){
var inst_36057 = (state_36142[(10)]);
var state_36142__$1 = state_36142;
var statearr_36163_36210 = state_36142__$1;
(statearr_36163_36210[(2)] = inst_36057);

(statearr_36163_36210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (28))){
var inst_36104 = (state_36142[(2)]);
var inst_36105 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36106 = figwheel.client.heads_up.display_warning.call(null,inst_36105);
var state_36142__$1 = (function (){var statearr_36164 = state_36142;
(statearr_36164[(11)] = inst_36104);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(29),inst_36106);
} else {
if((state_val_36143 === (25))){
var inst_36102 = figwheel.client.heads_up.clear.call(null);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(28),inst_36102);
} else {
if((state_val_36143 === (34))){
var inst_36123 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(37),inst_36123);
} else {
if((state_val_36143 === (17))){
var inst_36082 = (state_36142[(2)]);
var inst_36083 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36084 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36083);
var state_36142__$1 = (function (){var statearr_36165 = state_36142;
(statearr_36165[(12)] = inst_36082);

return statearr_36165;
})();
var statearr_36166_36211 = state_36142__$1;
(statearr_36166_36211[(2)] = inst_36084);

(statearr_36166_36211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (3))){
var inst_36074 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36074)){
var statearr_36167_36212 = state_36142__$1;
(statearr_36167_36212[(1)] = (13));

} else {
var statearr_36168_36213 = state_36142__$1;
(statearr_36168_36213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (12))){
var inst_36070 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36169_36214 = state_36142__$1;
(statearr_36169_36214[(2)] = inst_36070);

(statearr_36169_36214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (2))){
var inst_36057 = (state_36142[(10)]);
var inst_36057__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36142__$1 = (function (){var statearr_36170 = state_36142;
(statearr_36170[(10)] = inst_36057__$1);

return statearr_36170;
})();
if(cljs.core.truth_(inst_36057__$1)){
var statearr_36171_36215 = state_36142__$1;
(statearr_36171_36215[(1)] = (5));

} else {
var statearr_36172_36216 = state_36142__$1;
(statearr_36172_36216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (23))){
var inst_36100 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36100)){
var statearr_36173_36217 = state_36142__$1;
(statearr_36173_36217[(1)] = (25));

} else {
var statearr_36174_36218 = state_36142__$1;
(statearr_36174_36218[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (35))){
var state_36142__$1 = state_36142;
var statearr_36175_36219 = state_36142__$1;
(statearr_36175_36219[(2)] = null);

(statearr_36175_36219[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (19))){
var inst_36095 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36095)){
var statearr_36176_36220 = state_36142__$1;
(statearr_36176_36220[(1)] = (22));

} else {
var statearr_36177_36221 = state_36142__$1;
(statearr_36177_36221[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (11))){
var inst_36066 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36178_36222 = state_36142__$1;
(statearr_36178_36222[(2)] = inst_36066);

(statearr_36178_36222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (9))){
var inst_36068 = figwheel.client.heads_up.clear.call(null);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(12),inst_36068);
} else {
if((state_val_36143 === (5))){
var inst_36059 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36142__$1 = state_36142;
var statearr_36179_36223 = state_36142__$1;
(statearr_36179_36223[(2)] = inst_36059);

(statearr_36179_36223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (14))){
var inst_36086 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36086)){
var statearr_36180_36224 = state_36142__$1;
(statearr_36180_36224[(1)] = (18));

} else {
var statearr_36181_36225 = state_36142__$1;
(statearr_36181_36225[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (26))){
var inst_36112 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36142__$1 = state_36142;
if(cljs.core.truth_(inst_36112)){
var statearr_36182_36226 = state_36142__$1;
(statearr_36182_36226[(1)] = (30));

} else {
var statearr_36183_36227 = state_36142__$1;
(statearr_36183_36227[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (16))){
var inst_36078 = (state_36142[(2)]);
var inst_36079 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36080 = figwheel.client.heads_up.display_exception.call(null,inst_36079);
var state_36142__$1 = (function (){var statearr_36184 = state_36142;
(statearr_36184[(13)] = inst_36078);

return statearr_36184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(17),inst_36080);
} else {
if((state_val_36143 === (30))){
var inst_36114 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36115 = figwheel.client.heads_up.display_warning.call(null,inst_36114);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(33),inst_36115);
} else {
if((state_val_36143 === (10))){
var inst_36072 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36185_36228 = state_36142__$1;
(statearr_36185_36228[(2)] = inst_36072);

(statearr_36185_36228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (18))){
var inst_36088 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36089 = figwheel.client.heads_up.display_exception.call(null,inst_36088);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(21),inst_36089);
} else {
if((state_val_36143 === (37))){
var inst_36125 = (state_36142[(2)]);
var state_36142__$1 = state_36142;
var statearr_36186_36229 = state_36142__$1;
(statearr_36186_36229[(2)] = inst_36125);

(statearr_36186_36229[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36143 === (8))){
var inst_36064 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36142__$1 = state_36142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36142__$1,(11),inst_36064);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28262__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28150__auto__,c__28262__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0 = (function (){
var statearr_36190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36190[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__);

(statearr_36190[(1)] = (1));

return statearr_36190;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1 = (function (state_36142){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_36142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e36191){if((e36191 instanceof Object)){
var ex__28154__auto__ = e36191;
var statearr_36192_36230 = state_36142;
(statearr_36192_36230[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36231 = state_36142;
state_36142 = G__36231;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__ = function(state_36142){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1.call(this,state_36142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__,msg_hist,msg_names,msg))
})();
var state__28264__auto__ = (function (){var statearr_36193 = f__28263__auto__.call(null);
(statearr_36193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_36193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__,msg_hist,msg_names,msg))
);

return c__28262__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28262__auto___36294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___36294,ch){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___36294,ch){
return (function (state_36277){
var state_val_36278 = (state_36277[(1)]);
if((state_val_36278 === (1))){
var state_36277__$1 = state_36277;
var statearr_36279_36295 = state_36277__$1;
(statearr_36279_36295[(2)] = null);

(statearr_36279_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (2))){
var state_36277__$1 = state_36277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36277__$1,(4),ch);
} else {
if((state_val_36278 === (3))){
var inst_36275 = (state_36277[(2)]);
var state_36277__$1 = state_36277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36277__$1,inst_36275);
} else {
if((state_val_36278 === (4))){
var inst_36265 = (state_36277[(7)]);
var inst_36265__$1 = (state_36277[(2)]);
var state_36277__$1 = (function (){var statearr_36280 = state_36277;
(statearr_36280[(7)] = inst_36265__$1);

return statearr_36280;
})();
if(cljs.core.truth_(inst_36265__$1)){
var statearr_36281_36296 = state_36277__$1;
(statearr_36281_36296[(1)] = (5));

} else {
var statearr_36282_36297 = state_36277__$1;
(statearr_36282_36297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (5))){
var inst_36265 = (state_36277[(7)]);
var inst_36267 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36265);
var state_36277__$1 = state_36277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36277__$1,(8),inst_36267);
} else {
if((state_val_36278 === (6))){
var state_36277__$1 = state_36277;
var statearr_36283_36298 = state_36277__$1;
(statearr_36283_36298[(2)] = null);

(statearr_36283_36298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (7))){
var inst_36273 = (state_36277[(2)]);
var state_36277__$1 = state_36277;
var statearr_36284_36299 = state_36277__$1;
(statearr_36284_36299[(2)] = inst_36273);

(statearr_36284_36299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (8))){
var inst_36269 = (state_36277[(2)]);
var state_36277__$1 = (function (){var statearr_36285 = state_36277;
(statearr_36285[(8)] = inst_36269);

return statearr_36285;
})();
var statearr_36286_36300 = state_36277__$1;
(statearr_36286_36300[(2)] = null);

(statearr_36286_36300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28262__auto___36294,ch))
;
return ((function (switch__28150__auto__,c__28262__auto___36294,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_36290 = [null,null,null,null,null,null,null,null,null];
(statearr_36290[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28151__auto__);

(statearr_36290[(1)] = (1));

return statearr_36290;
});
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1 = (function (state_36277){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_36277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e36291){if((e36291 instanceof Object)){
var ex__28154__auto__ = e36291;
var statearr_36292_36301 = state_36277;
(statearr_36292_36301[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36302 = state_36277;
state_36277 = G__36302;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__ = function(state_36277){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1.call(this,state_36277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___36294,ch))
})();
var state__28264__auto__ = (function (){var statearr_36293 = f__28263__auto__.call(null);
(statearr_36293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___36294);

return statearr_36293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___36294,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__){
return (function (state_36323){
var state_val_36324 = (state_36323[(1)]);
if((state_val_36324 === (1))){
var inst_36318 = cljs.core.async.timeout.call(null,(3000));
var state_36323__$1 = state_36323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36323__$1,(2),inst_36318);
} else {
if((state_val_36324 === (2))){
var inst_36320 = (state_36323[(2)]);
var inst_36321 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36323__$1 = (function (){var statearr_36325 = state_36323;
(statearr_36325[(7)] = inst_36320);

return statearr_36325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36323__$1,inst_36321);
} else {
return null;
}
}
});})(c__28262__auto__))
;
return ((function (switch__28150__auto__,c__28262__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_36329 = [null,null,null,null,null,null,null,null];
(statearr_36329[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__);

(statearr_36329[(1)] = (1));

return statearr_36329;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1 = (function (state_36323){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_36323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e36330){if((e36330 instanceof Object)){
var ex__28154__auto__ = e36330;
var statearr_36331_36333 = state_36323;
(statearr_36331_36333[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36334 = state_36323;
state_36323 = G__36334;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__ = function(state_36323){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1.call(this,state_36323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__))
})();
var state__28264__auto__ = (function (){var statearr_36332 = f__28263__auto__.call(null);
(statearr_36332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_36332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__))
);

return c__28262__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36357){
var state_val_36358 = (state_36357[(1)]);
if((state_val_36358 === (1))){
var inst_36351 = cljs.core.async.timeout.call(null,(2000));
var state_36357__$1 = state_36357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36357__$1,(2),inst_36351);
} else {
if((state_val_36358 === (2))){
var inst_36353 = (state_36357[(2)]);
var inst_36354 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36355 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36354);
var state_36357__$1 = (function (){var statearr_36359 = state_36357;
(statearr_36359[(7)] = inst_36353);

return statearr_36359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36357__$1,inst_36355);
} else {
return null;
}
}
});})(c__28262__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28150__auto__,c__28262__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_36363 = [null,null,null,null,null,null,null,null];
(statearr_36363[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__);

(statearr_36363[(1)] = (1));

return statearr_36363;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1 = (function (state_36357){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_36357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e36364){if((e36364 instanceof Object)){
var ex__28154__auto__ = e36364;
var statearr_36365_36367 = state_36357;
(statearr_36365_36367[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36368 = state_36357;
state_36357 = G__36368;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__ = function(state_36357){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1.call(this,state_36357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28264__auto__ = (function (){var statearr_36366 = f__28263__auto__.call(null);
(statearr_36366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_36366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__,figwheel_version,temp__4657__auto__))
);

return c__28262__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36369){
var map__36373 = p__36369;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var file = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36375 = "";
var G__36375__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36375),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36375);
var G__36375__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36375__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36375__$1);
if(cljs.core.truth_((function (){var and__26078__auto__ = line;
if(cljs.core.truth_(and__26078__auto__)){
return column;
} else {
return and__26078__auto__;
}
})())){
return [cljs.core.str(G__36375__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36375__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36376){
var map__36383 = p__36376;
var map__36383__$1 = ((((!((map__36383 == null)))?((((map__36383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36383):map__36383);
var ed = map__36383__$1;
var formatted_exception = cljs.core.get.call(null,map__36383__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36383__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36383__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36385_36389 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36386_36390 = null;
var count__36387_36391 = (0);
var i__36388_36392 = (0);
while(true){
if((i__36388_36392 < count__36387_36391)){
var msg_36393 = cljs.core._nth.call(null,chunk__36386_36390,i__36388_36392);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36393);

var G__36394 = seq__36385_36389;
var G__36395 = chunk__36386_36390;
var G__36396 = count__36387_36391;
var G__36397 = (i__36388_36392 + (1));
seq__36385_36389 = G__36394;
chunk__36386_36390 = G__36395;
count__36387_36391 = G__36396;
i__36388_36392 = G__36397;
continue;
} else {
var temp__4657__auto___36398 = cljs.core.seq.call(null,seq__36385_36389);
if(temp__4657__auto___36398){
var seq__36385_36399__$1 = temp__4657__auto___36398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36385_36399__$1)){
var c__26901__auto___36400 = cljs.core.chunk_first.call(null,seq__36385_36399__$1);
var G__36401 = cljs.core.chunk_rest.call(null,seq__36385_36399__$1);
var G__36402 = c__26901__auto___36400;
var G__36403 = cljs.core.count.call(null,c__26901__auto___36400);
var G__36404 = (0);
seq__36385_36389 = G__36401;
chunk__36386_36390 = G__36402;
count__36387_36391 = G__36403;
i__36388_36392 = G__36404;
continue;
} else {
var msg_36405 = cljs.core.first.call(null,seq__36385_36399__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36405);

var G__36406 = cljs.core.next.call(null,seq__36385_36399__$1);
var G__36407 = null;
var G__36408 = (0);
var G__36409 = (0);
seq__36385_36389 = G__36406;
chunk__36386_36390 = G__36407;
count__36387_36391 = G__36408;
i__36388_36392 = G__36409;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36410){
var map__36413 = p__36410;
var map__36413__$1 = ((((!((map__36413 == null)))?((((map__36413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36413):map__36413);
var w = map__36413__$1;
var message = cljs.core.get.call(null,map__36413__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/ttt/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/ttt/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26078__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26078__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26078__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36425 = cljs.core.seq.call(null,plugins);
var chunk__36426 = null;
var count__36427 = (0);
var i__36428 = (0);
while(true){
if((i__36428 < count__36427)){
var vec__36429 = cljs.core._nth.call(null,chunk__36426,i__36428);
var k = cljs.core.nth.call(null,vec__36429,(0),null);
var plugin = cljs.core.nth.call(null,vec__36429,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36435 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36425,chunk__36426,count__36427,i__36428,pl_36435,vec__36429,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36435.call(null,msg_hist);
});})(seq__36425,chunk__36426,count__36427,i__36428,pl_36435,vec__36429,k,plugin))
);
} else {
}

var G__36436 = seq__36425;
var G__36437 = chunk__36426;
var G__36438 = count__36427;
var G__36439 = (i__36428 + (1));
seq__36425 = G__36436;
chunk__36426 = G__36437;
count__36427 = G__36438;
i__36428 = G__36439;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36425);
if(temp__4657__auto__){
var seq__36425__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36425__$1)){
var c__26901__auto__ = cljs.core.chunk_first.call(null,seq__36425__$1);
var G__36440 = cljs.core.chunk_rest.call(null,seq__36425__$1);
var G__36441 = c__26901__auto__;
var G__36442 = cljs.core.count.call(null,c__26901__auto__);
var G__36443 = (0);
seq__36425 = G__36440;
chunk__36426 = G__36441;
count__36427 = G__36442;
i__36428 = G__36443;
continue;
} else {
var vec__36432 = cljs.core.first.call(null,seq__36425__$1);
var k = cljs.core.nth.call(null,vec__36432,(0),null);
var plugin = cljs.core.nth.call(null,vec__36432,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36425,chunk__36426,count__36427,i__36428,pl_36444,vec__36432,k,plugin,seq__36425__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36444.call(null,msg_hist);
});})(seq__36425,chunk__36426,count__36427,i__36428,pl_36444,vec__36432,k,plugin,seq__36425__$1,temp__4657__auto__))
);
} else {
}

var G__36445 = cljs.core.next.call(null,seq__36425__$1);
var G__36446 = null;
var G__36447 = (0);
var G__36448 = (0);
seq__36425 = G__36445;
chunk__36426 = G__36446;
count__36427 = G__36447;
i__36428 = G__36448;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36449 = [];
var len__27165__auto___36456 = arguments.length;
var i__27166__auto___36457 = (0);
while(true){
if((i__27166__auto___36457 < len__27165__auto___36456)){
args36449.push((arguments[i__27166__auto___36457]));

var G__36458 = (i__27166__auto___36457 + (1));
i__27166__auto___36457 = G__36458;
continue;
} else {
}
break;
}

var G__36451 = args36449.length;
switch (G__36451) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36449.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36452_36460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36453_36461 = null;
var count__36454_36462 = (0);
var i__36455_36463 = (0);
while(true){
if((i__36455_36463 < count__36454_36462)){
var msg_36464 = cljs.core._nth.call(null,chunk__36453_36461,i__36455_36463);
figwheel.client.socket.handle_incoming_message.call(null,msg_36464);

var G__36465 = seq__36452_36460;
var G__36466 = chunk__36453_36461;
var G__36467 = count__36454_36462;
var G__36468 = (i__36455_36463 + (1));
seq__36452_36460 = G__36465;
chunk__36453_36461 = G__36466;
count__36454_36462 = G__36467;
i__36455_36463 = G__36468;
continue;
} else {
var temp__4657__auto___36469 = cljs.core.seq.call(null,seq__36452_36460);
if(temp__4657__auto___36469){
var seq__36452_36470__$1 = temp__4657__auto___36469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36452_36470__$1)){
var c__26901__auto___36471 = cljs.core.chunk_first.call(null,seq__36452_36470__$1);
var G__36472 = cljs.core.chunk_rest.call(null,seq__36452_36470__$1);
var G__36473 = c__26901__auto___36471;
var G__36474 = cljs.core.count.call(null,c__26901__auto___36471);
var G__36475 = (0);
seq__36452_36460 = G__36472;
chunk__36453_36461 = G__36473;
count__36454_36462 = G__36474;
i__36455_36463 = G__36475;
continue;
} else {
var msg_36476 = cljs.core.first.call(null,seq__36452_36470__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36476);

var G__36477 = cljs.core.next.call(null,seq__36452_36470__$1);
var G__36478 = null;
var G__36479 = (0);
var G__36480 = (0);
seq__36452_36460 = G__36477;
chunk__36453_36461 = G__36478;
count__36454_36462 = G__36479;
i__36455_36463 = G__36480;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27172__auto__ = [];
var len__27165__auto___36485 = arguments.length;
var i__27166__auto___36486 = (0);
while(true){
if((i__27166__auto___36486 < len__27165__auto___36485)){
args__27172__auto__.push((arguments[i__27166__auto___36486]));

var G__36487 = (i__27166__auto___36486 + (1));
i__27166__auto___36486 = G__36487;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((0) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27173__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36482){
var map__36483 = p__36482;
var map__36483__$1 = ((((!((map__36483 == null)))?((((map__36483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36483):map__36483);
var opts = map__36483__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36481){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36481));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36489){if((e36489 instanceof Error)){
var e = e36489;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36489;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36493){
var map__36494 = p__36493;
var map__36494__$1 = ((((!((map__36494 == null)))?((((map__36494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36494):map__36494);
var msg_name = cljs.core.get.call(null,map__36494__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1494497617715