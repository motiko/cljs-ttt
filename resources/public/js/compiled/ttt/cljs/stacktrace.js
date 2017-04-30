// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__27165__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27169__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__27165__auto__,prefer_table__27166__auto__,method_cache__27167__auto__,cached_hierarchy__27168__auto__,hierarchy__27169__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__27165__auto__,prefer_table__27166__auto__,method_cache__27167__auto__,cached_hierarchy__27168__auto__,hierarchy__27169__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27169__auto__,method_table__27165__auto__,prefer_table__27166__auto__,method_cache__27167__auto__,cached_hierarchy__27168__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__26240__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__33437 = cljs.core.reduce.call(null,((function (xs){
return (function (p__33443,p__33444){
var vec__33445 = p__33443;
var pre = cljs.core.nth.call(null,vec__33445,(0),null);
var post = cljs.core.nth.call(null,vec__33445,(1),null);
var vec__33448 = p__33444;
var x = cljs.core.nth.call(null,vec__33448,(0),null);
var i = cljs.core.nth.call(null,vec__33448,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__33437,(0),null);
var vec__33440 = cljs.core.nth.call(null,vec__33437,(1),null);
var line = cljs.core.nth.call(null,vec__33440,(0),null);
var column = cljs.core.nth.call(null,vec__33440,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33451 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__33451,"(","");
} else {
return G__33451;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__33452 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__33452,")","");
} else {
return G__33452;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__33453 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__33453,")","");
} else {
return G__33453;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__33454,file,p__33455){
var map__33460 = p__33454;
var map__33460__$1 = ((((!((map__33460 == null)))?((((map__33460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33460):map__33460);
var repl_env = map__33460__$1;
var host = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__33461 = p__33455;
var map__33461__$1 = ((((!((map__33461 == null)))?((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33461):map__33461);
var opts = map__33461__$1;
var asset_path = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__26240__auto__ = host_port;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__26240__auto__ = (function (){var and__26228__auto__ = asset_path;
if(cljs.core.truth_(and__26228__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__26228__auto__;
}
})();
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var asset_root = temp__4655__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__33470 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__33470,(0),null);
var flc = cljs.core.nth.call(null,vec__33470,(1),null);
var vec__33473 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__33473,(0),null);
var line = cljs.core.nth.call(null,vec__33473,(1),null);
var column = cljs.core.nth.call(null,vec__33473,(2),null);
if(cljs.core.truth_((function (){var and__26228__auto__ = file;
if(cljs.core.truth_(and__26228__auto__)){
var and__26228__auto____$1 = function$;
if(cljs.core.truth_(and__26228__auto____$1)){
var and__26228__auto____$2 = line;
if(cljs.core.truth_(and__26228__auto____$2)){
return column;
} else {
return and__26228__auto____$2;
}
} else {
return and__26228__auto____$1;
}
} else {
return and__26228__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__33478_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__33478_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__33477_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__33477_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__33476_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__33476_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__33485 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__33485,(0),null);
var flc = cljs.core.nth.call(null,vec__33485,(1),null);
var vec__33488 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__33488,(0),null);
var line = cljs.core.nth.call(null,vec__33488,(1),null);
var column = cljs.core.nth.call(null,vec__33488,(2),null);
if(cljs.core.truth_((function (){var and__26228__auto__ = file;
if(cljs.core.truth_(and__26228__auto__)){
var and__26228__auto____$1 = function$;
if(cljs.core.truth_(and__26228__auto____$1)){
var and__26228__auto____$2 = line;
if(cljs.core.truth_(and__26228__auto____$2)){
return column;
} else {
return and__26228__auto____$2;
}
} else {
return and__26228__auto____$1;
}
} else {
return and__26228__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__33493_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__33493_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__33492_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__33492_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__33491_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__33491_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__33500 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__33500,(0),null);
var flc = cljs.core.nth.call(null,vec__33500,(1),null);
var vec__33503 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__33503,(0),null);
var line = cljs.core.nth.call(null,vec__33503,(1),null);
var column = cljs.core.nth.call(null,vec__33503,(2),null);
if(cljs.core.truth_((function (){var and__26228__auto__ = file;
if(cljs.core.truth_(and__26228__auto__)){
var and__26228__auto____$1 = function$;
if(cljs.core.truth_(and__26228__auto____$1)){
var and__26228__auto____$2 = line;
if(cljs.core.truth_(and__26228__auto____$2)){
return column;
} else {
return and__26228__auto____$2;
}
} else {
return and__26228__auto____$1;
}
} else {
return and__26228__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__33508_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__33508_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__33507_SHARP_){
return cljs.core._EQ_.call(null,p1__33507_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__33506_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__33506_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__33509){
var map__33510 = p__33509;
var map__33510__$1 = ((((!((map__33510 == null)))?((((map__33510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33510):map__33510);
var opts = map__33510__$1;
var output_dir = cljs.core.get.call(null,map__33510__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__33510,map__33510__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__33530 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__33530,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__33530,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__33533 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__33533,(0),null);
var function$ = cljs.core.nth.call(null,vec__33533,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__26228__auto__ = line;
if(cljs.core.truth_(and__26228__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__26228__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__33510,map__33510__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__33536){
var map__33537 = p__33536;
var map__33537__$1 = ((((!((map__33537 == null)))?((((map__33537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33537):map__33537);
var opts = map__33537__$1;
var output_dir = cljs.core.get.call(null,map__33537__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__33537,map__33537__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__33557 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__33557,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__33557,(1),null);
var vec__33560 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__33560,(0),null);
var line_part = cljs.core.nth.call(null,vec__33560,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__26228__auto__ = line_part;
if(cljs.core.truth_(and__26228__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__26228__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__33537,map__33537__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__33563){
var map__33564 = p__33563;
var map__33564__$1 = ((((!((map__33564 == null)))?((((map__33564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33564):map__33564);
var opts = map__33564__$1;
var output_dir = cljs.core.get.call(null,map__33564__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__33564,map__33564__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__26228__auto__ = x;
if(cljs.core.truth_(and__26228__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__26228__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__33564,map__33564__$1,opts,output_dir))
;
var process_frame = ((function (map__33564,map__33564__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__33587 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__33587,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__33587,(1),null);
var vec__33590 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__33590,(0),null);
var line_part = cljs.core.nth.call(null,vec__33590,(1),null);
var col_part = cljs.core.nth.call(null,vec__33590,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__33593 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__33593,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),"");
} else {
return G__33593;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__33564,map__33564__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__26240__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__33594_SHARP_){
return (p1__33594_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__33595_SHARP_,p2__33596_SHARP_){
return p1__33595_SHARP_.call(null,p2__33596_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4655__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4655__auto__)){
var columns = temp__4655__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__33597,sms,opts){
var map__33603 = p__33597;
var map__33603__$1 = ((((!((map__33603 == null)))?((((map__33603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33603):map__33603);
var function$ = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__33605 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__33605,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__33605,(1),null);
var call = cljs.core.nth.call(null,vec__33605,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args33610 = [];
var len__27315__auto___33613 = arguments.length;
var i__27316__auto___33614 = (0);
while(true){
if((i__27316__auto___33614 < len__27315__auto___33613)){
args33610.push((arguments[i__27316__auto___33614]));

var G__33615 = (i__27316__auto___33614 + (1));
i__27316__auto___33614 = G__33615;
continue;
} else {
}
break;
}

var G__33612 = args33610.length;
switch (G__33612) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33610.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__33608_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__33608_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__33609_SHARP_){
return cljs.core.dissoc.call(null,p1__33609_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args33617 = [];
var len__27315__auto___33630 = arguments.length;
var i__27316__auto___33631 = (0);
while(true){
if((i__27316__auto___33631 < len__27315__auto___33630)){
args33617.push((arguments[i__27316__auto___33631]));

var G__33632 = (i__27316__auto___33631 + (1));
i__27316__auto___33631 = G__33632;
continue;
} else {
}
break;
}

var G__33619 = args33617.length;
switch (G__33619) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33617.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__27226__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33620_33634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33621_33635 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33620_33634,_STAR_print_fn_STAR_33621_33635,sb__27226__auto__){
return (function (x__27227__auto__){
return sb__27226__auto__.append(x__27227__auto__);
});})(_STAR_print_newline_STAR_33620_33634,_STAR_print_fn_STAR_33621_33635,sb__27226__auto__))
;

try{var seq__33622_33636 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__33623_33637 = null;
var count__33624_33638 = (0);
var i__33625_33639 = (0);
while(true){
if((i__33625_33639 < count__33624_33638)){
var map__33626_33640 = cljs.core._nth.call(null,chunk__33623_33637,i__33625_33639);
var map__33626_33641__$1 = ((((!((map__33626_33640 == null)))?((((map__33626_33640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33626_33640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33626_33640):map__33626_33640);
var function_33642 = cljs.core.get.call(null,map__33626_33641__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_33643 = cljs.core.get.call(null,map__33626_33641__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_33644 = cljs.core.get.call(null,map__33626_33641__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33645 = cljs.core.get.call(null,map__33626_33641__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_33642)?[cljs.core.str(function_33642),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_33643),cljs.core.str((cljs.core.truth_(line_33644)?[cljs.core.str(":"),cljs.core.str(line_33644)].join(''):null)),cljs.core.str((cljs.core.truth_(column_33645)?[cljs.core.str(":"),cljs.core.str(column_33645)].join(''):null)),cljs.core.str(")")].join(''));

var G__33646 = seq__33622_33636;
var G__33647 = chunk__33623_33637;
var G__33648 = count__33624_33638;
var G__33649 = (i__33625_33639 + (1));
seq__33622_33636 = G__33646;
chunk__33623_33637 = G__33647;
count__33624_33638 = G__33648;
i__33625_33639 = G__33649;
continue;
} else {
var temp__4657__auto___33650 = cljs.core.seq.call(null,seq__33622_33636);
if(temp__4657__auto___33650){
var seq__33622_33651__$1 = temp__4657__auto___33650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33622_33651__$1)){
var c__27051__auto___33652 = cljs.core.chunk_first.call(null,seq__33622_33651__$1);
var G__33653 = cljs.core.chunk_rest.call(null,seq__33622_33651__$1);
var G__33654 = c__27051__auto___33652;
var G__33655 = cljs.core.count.call(null,c__27051__auto___33652);
var G__33656 = (0);
seq__33622_33636 = G__33653;
chunk__33623_33637 = G__33654;
count__33624_33638 = G__33655;
i__33625_33639 = G__33656;
continue;
} else {
var map__33628_33657 = cljs.core.first.call(null,seq__33622_33651__$1);
var map__33628_33658__$1 = ((((!((map__33628_33657 == null)))?((((map__33628_33657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33628_33657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33628_33657):map__33628_33657);
var function_33659 = cljs.core.get.call(null,map__33628_33658__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_33660 = cljs.core.get.call(null,map__33628_33658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_33661 = cljs.core.get.call(null,map__33628_33658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33662 = cljs.core.get.call(null,map__33628_33658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_33659)?[cljs.core.str(function_33659),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_33660),cljs.core.str((cljs.core.truth_(line_33661)?[cljs.core.str(":"),cljs.core.str(line_33661)].join(''):null)),cljs.core.str((cljs.core.truth_(column_33662)?[cljs.core.str(":"),cljs.core.str(column_33662)].join(''):null)),cljs.core.str(")")].join(''));

var G__33663 = cljs.core.next.call(null,seq__33622_33651__$1);
var G__33664 = null;
var G__33665 = (0);
var G__33666 = (0);
seq__33622_33636 = G__33663;
chunk__33623_33637 = G__33664;
count__33624_33638 = G__33665;
i__33625_33639 = G__33666;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33621_33635;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33620_33634;
}
return [cljs.core.str(sb__27226__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1493511398517