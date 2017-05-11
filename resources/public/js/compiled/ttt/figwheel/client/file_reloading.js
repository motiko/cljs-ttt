// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26090__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26090__auto__){
return or__26090__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26090__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31147_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31147_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31152 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31153 = null;
var count__31154 = (0);
var i__31155 = (0);
while(true){
if((i__31155 < count__31154)){
var n = cljs.core._nth.call(null,chunk__31153,i__31155);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31156 = seq__31152;
var G__31157 = chunk__31153;
var G__31158 = count__31154;
var G__31159 = (i__31155 + (1));
seq__31152 = G__31156;
chunk__31153 = G__31157;
count__31154 = G__31158;
i__31155 = G__31159;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31152);
if(temp__4657__auto__){
var seq__31152__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31152__$1)){
var c__26901__auto__ = cljs.core.chunk_first.call(null,seq__31152__$1);
var G__31160 = cljs.core.chunk_rest.call(null,seq__31152__$1);
var G__31161 = c__26901__auto__;
var G__31162 = cljs.core.count.call(null,c__26901__auto__);
var G__31163 = (0);
seq__31152 = G__31160;
chunk__31153 = G__31161;
count__31154 = G__31162;
i__31155 = G__31163;
continue;
} else {
var n = cljs.core.first.call(null,seq__31152__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31164 = cljs.core.next.call(null,seq__31152__$1);
var G__31165 = null;
var G__31166 = (0);
var G__31167 = (0);
seq__31152 = G__31164;
chunk__31153 = G__31165;
count__31154 = G__31166;
i__31155 = G__31167;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31218_31229 = cljs.core.seq.call(null,deps);
var chunk__31219_31230 = null;
var count__31220_31231 = (0);
var i__31221_31232 = (0);
while(true){
if((i__31221_31232 < count__31220_31231)){
var dep_31233 = cljs.core._nth.call(null,chunk__31219_31230,i__31221_31232);
topo_sort_helper_STAR_.call(null,dep_31233,(depth + (1)),state);

var G__31234 = seq__31218_31229;
var G__31235 = chunk__31219_31230;
var G__31236 = count__31220_31231;
var G__31237 = (i__31221_31232 + (1));
seq__31218_31229 = G__31234;
chunk__31219_31230 = G__31235;
count__31220_31231 = G__31236;
i__31221_31232 = G__31237;
continue;
} else {
var temp__4657__auto___31238 = cljs.core.seq.call(null,seq__31218_31229);
if(temp__4657__auto___31238){
var seq__31218_31239__$1 = temp__4657__auto___31238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31218_31239__$1)){
var c__26901__auto___31240 = cljs.core.chunk_first.call(null,seq__31218_31239__$1);
var G__31241 = cljs.core.chunk_rest.call(null,seq__31218_31239__$1);
var G__31242 = c__26901__auto___31240;
var G__31243 = cljs.core.count.call(null,c__26901__auto___31240);
var G__31244 = (0);
seq__31218_31229 = G__31241;
chunk__31219_31230 = G__31242;
count__31220_31231 = G__31243;
i__31221_31232 = G__31244;
continue;
} else {
var dep_31245 = cljs.core.first.call(null,seq__31218_31239__$1);
topo_sort_helper_STAR_.call(null,dep_31245,(depth + (1)),state);

var G__31246 = cljs.core.next.call(null,seq__31218_31239__$1);
var G__31247 = null;
var G__31248 = (0);
var G__31249 = (0);
seq__31218_31229 = G__31246;
chunk__31219_31230 = G__31247;
count__31220_31231 = G__31248;
i__31221_31232 = G__31249;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31222){
var vec__31226 = p__31222;
var seq__31227 = cljs.core.seq.call(null,vec__31226);
var first__31228 = cljs.core.first.call(null,seq__31227);
var seq__31227__$1 = cljs.core.next.call(null,seq__31227);
var x = first__31228;
var xs = seq__31227__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31226,seq__31227,first__31228,seq__31227__$1,x,xs,get_deps__$1){
return (function (p1__31168_SHARP_){
return clojure.set.difference.call(null,p1__31168_SHARP_,x);
});})(vec__31226,seq__31227,first__31228,seq__31227__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31262 = cljs.core.seq.call(null,provides);
var chunk__31263 = null;
var count__31264 = (0);
var i__31265 = (0);
while(true){
if((i__31265 < count__31264)){
var prov = cljs.core._nth.call(null,chunk__31263,i__31265);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31266_31274 = cljs.core.seq.call(null,requires);
var chunk__31267_31275 = null;
var count__31268_31276 = (0);
var i__31269_31277 = (0);
while(true){
if((i__31269_31277 < count__31268_31276)){
var req_31278 = cljs.core._nth.call(null,chunk__31267_31275,i__31269_31277);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31278,prov);

var G__31279 = seq__31266_31274;
var G__31280 = chunk__31267_31275;
var G__31281 = count__31268_31276;
var G__31282 = (i__31269_31277 + (1));
seq__31266_31274 = G__31279;
chunk__31267_31275 = G__31280;
count__31268_31276 = G__31281;
i__31269_31277 = G__31282;
continue;
} else {
var temp__4657__auto___31283 = cljs.core.seq.call(null,seq__31266_31274);
if(temp__4657__auto___31283){
var seq__31266_31284__$1 = temp__4657__auto___31283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31266_31284__$1)){
var c__26901__auto___31285 = cljs.core.chunk_first.call(null,seq__31266_31284__$1);
var G__31286 = cljs.core.chunk_rest.call(null,seq__31266_31284__$1);
var G__31287 = c__26901__auto___31285;
var G__31288 = cljs.core.count.call(null,c__26901__auto___31285);
var G__31289 = (0);
seq__31266_31274 = G__31286;
chunk__31267_31275 = G__31287;
count__31268_31276 = G__31288;
i__31269_31277 = G__31289;
continue;
} else {
var req_31290 = cljs.core.first.call(null,seq__31266_31284__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31290,prov);

var G__31291 = cljs.core.next.call(null,seq__31266_31284__$1);
var G__31292 = null;
var G__31293 = (0);
var G__31294 = (0);
seq__31266_31274 = G__31291;
chunk__31267_31275 = G__31292;
count__31268_31276 = G__31293;
i__31269_31277 = G__31294;
continue;
}
} else {
}
}
break;
}

var G__31295 = seq__31262;
var G__31296 = chunk__31263;
var G__31297 = count__31264;
var G__31298 = (i__31265 + (1));
seq__31262 = G__31295;
chunk__31263 = G__31296;
count__31264 = G__31297;
i__31265 = G__31298;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31262);
if(temp__4657__auto__){
var seq__31262__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31262__$1)){
var c__26901__auto__ = cljs.core.chunk_first.call(null,seq__31262__$1);
var G__31299 = cljs.core.chunk_rest.call(null,seq__31262__$1);
var G__31300 = c__26901__auto__;
var G__31301 = cljs.core.count.call(null,c__26901__auto__);
var G__31302 = (0);
seq__31262 = G__31299;
chunk__31263 = G__31300;
count__31264 = G__31301;
i__31265 = G__31302;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31262__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31270_31303 = cljs.core.seq.call(null,requires);
var chunk__31271_31304 = null;
var count__31272_31305 = (0);
var i__31273_31306 = (0);
while(true){
if((i__31273_31306 < count__31272_31305)){
var req_31307 = cljs.core._nth.call(null,chunk__31271_31304,i__31273_31306);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31307,prov);

var G__31308 = seq__31270_31303;
var G__31309 = chunk__31271_31304;
var G__31310 = count__31272_31305;
var G__31311 = (i__31273_31306 + (1));
seq__31270_31303 = G__31308;
chunk__31271_31304 = G__31309;
count__31272_31305 = G__31310;
i__31273_31306 = G__31311;
continue;
} else {
var temp__4657__auto___31312__$1 = cljs.core.seq.call(null,seq__31270_31303);
if(temp__4657__auto___31312__$1){
var seq__31270_31313__$1 = temp__4657__auto___31312__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31270_31313__$1)){
var c__26901__auto___31314 = cljs.core.chunk_first.call(null,seq__31270_31313__$1);
var G__31315 = cljs.core.chunk_rest.call(null,seq__31270_31313__$1);
var G__31316 = c__26901__auto___31314;
var G__31317 = cljs.core.count.call(null,c__26901__auto___31314);
var G__31318 = (0);
seq__31270_31303 = G__31315;
chunk__31271_31304 = G__31316;
count__31272_31305 = G__31317;
i__31273_31306 = G__31318;
continue;
} else {
var req_31319 = cljs.core.first.call(null,seq__31270_31313__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31319,prov);

var G__31320 = cljs.core.next.call(null,seq__31270_31313__$1);
var G__31321 = null;
var G__31322 = (0);
var G__31323 = (0);
seq__31270_31303 = G__31320;
chunk__31271_31304 = G__31321;
count__31272_31305 = G__31322;
i__31273_31306 = G__31323;
continue;
}
} else {
}
}
break;
}

var G__31324 = cljs.core.next.call(null,seq__31262__$1);
var G__31325 = null;
var G__31326 = (0);
var G__31327 = (0);
seq__31262 = G__31324;
chunk__31263 = G__31325;
count__31264 = G__31326;
i__31265 = G__31327;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31332_31336 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31333_31337 = null;
var count__31334_31338 = (0);
var i__31335_31339 = (0);
while(true){
if((i__31335_31339 < count__31334_31338)){
var ns_31340 = cljs.core._nth.call(null,chunk__31333_31337,i__31335_31339);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31340);

var G__31341 = seq__31332_31336;
var G__31342 = chunk__31333_31337;
var G__31343 = count__31334_31338;
var G__31344 = (i__31335_31339 + (1));
seq__31332_31336 = G__31341;
chunk__31333_31337 = G__31342;
count__31334_31338 = G__31343;
i__31335_31339 = G__31344;
continue;
} else {
var temp__4657__auto___31345 = cljs.core.seq.call(null,seq__31332_31336);
if(temp__4657__auto___31345){
var seq__31332_31346__$1 = temp__4657__auto___31345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31332_31346__$1)){
var c__26901__auto___31347 = cljs.core.chunk_first.call(null,seq__31332_31346__$1);
var G__31348 = cljs.core.chunk_rest.call(null,seq__31332_31346__$1);
var G__31349 = c__26901__auto___31347;
var G__31350 = cljs.core.count.call(null,c__26901__auto___31347);
var G__31351 = (0);
seq__31332_31336 = G__31348;
chunk__31333_31337 = G__31349;
count__31334_31338 = G__31350;
i__31335_31339 = G__31351;
continue;
} else {
var ns_31352 = cljs.core.first.call(null,seq__31332_31346__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31352);

var G__31353 = cljs.core.next.call(null,seq__31332_31346__$1);
var G__31354 = null;
var G__31355 = (0);
var G__31356 = (0);
seq__31332_31336 = G__31353;
chunk__31333_31337 = G__31354;
count__31334_31338 = G__31355;
i__31335_31339 = G__31356;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26090__auto__ = goog.require__;
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31357__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31358__i = 0, G__31358__a = new Array(arguments.length -  0);
while (G__31358__i < G__31358__a.length) {G__31358__a[G__31358__i] = arguments[G__31358__i + 0]; ++G__31358__i;}
  args = new cljs.core.IndexedSeq(G__31358__a,0);
} 
return G__31357__delegate.call(this,args);};
G__31357.cljs$lang$maxFixedArity = 0;
G__31357.cljs$lang$applyTo = (function (arglist__31359){
var args = cljs.core.seq(arglist__31359);
return G__31357__delegate(args);
});
G__31357.cljs$core$IFn$_invoke$arity$variadic = G__31357__delegate;
return G__31357;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31361 = cljs.core._EQ_;
var expr__31362 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31361.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31362))){
var path_parts = ((function (pred__31361,expr__31362){
return (function (p1__31360_SHARP_){
return clojure.string.split.call(null,p1__31360_SHARP_,/[\/\\]/);
});})(pred__31361,expr__31362))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31361,expr__31362){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31364){if((e31364 instanceof Error)){
var e = e31364;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31364;

}
}})());
});
;})(path_parts,sep,root,pred__31361,expr__31362))
} else {
if(cljs.core.truth_(pred__31361.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31362))){
return ((function (pred__31361,expr__31362){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31361,expr__31362){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31361,expr__31362))
);

return deferred.addErrback(((function (deferred,pred__31361,expr__31362){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31361,expr__31362))
);
});
;})(pred__31361,expr__31362))
} else {
return ((function (pred__31361,expr__31362){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31361,expr__31362))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31365,callback){
var map__31368 = p__31365;
var map__31368__$1 = ((((!((map__31368 == null)))?((((map__31368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31368):map__31368);
var file_msg = map__31368__$1;
var request_url = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31368,map__31368__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31368,map__31368__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__){
return (function (state_31392){
var state_val_31393 = (state_31392[(1)]);
if((state_val_31393 === (7))){
var inst_31388 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31394_31414 = state_31392__$1;
(statearr_31394_31414[(2)] = inst_31388);

(statearr_31394_31414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (1))){
var state_31392__$1 = state_31392;
var statearr_31395_31415 = state_31392__$1;
(statearr_31395_31415[(2)] = null);

(statearr_31395_31415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (4))){
var inst_31372 = (state_31392[(7)]);
var inst_31372__$1 = (state_31392[(2)]);
var state_31392__$1 = (function (){var statearr_31396 = state_31392;
(statearr_31396[(7)] = inst_31372__$1);

return statearr_31396;
})();
if(cljs.core.truth_(inst_31372__$1)){
var statearr_31397_31416 = state_31392__$1;
(statearr_31397_31416[(1)] = (5));

} else {
var statearr_31398_31417 = state_31392__$1;
(statearr_31398_31417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (6))){
var state_31392__$1 = state_31392;
var statearr_31399_31418 = state_31392__$1;
(statearr_31399_31418[(2)] = null);

(statearr_31399_31418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (3))){
var inst_31390 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31392__$1,inst_31390);
} else {
if((state_val_31393 === (2))){
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31393 === (11))){
var inst_31384 = (state_31392[(2)]);
var state_31392__$1 = (function (){var statearr_31400 = state_31392;
(statearr_31400[(8)] = inst_31384);

return statearr_31400;
})();
var statearr_31401_31419 = state_31392__$1;
(statearr_31401_31419[(2)] = null);

(statearr_31401_31419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (9))){
var inst_31378 = (state_31392[(9)]);
var inst_31376 = (state_31392[(10)]);
var inst_31380 = inst_31378.call(null,inst_31376);
var state_31392__$1 = state_31392;
var statearr_31402_31420 = state_31392__$1;
(statearr_31402_31420[(2)] = inst_31380);

(statearr_31402_31420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (5))){
var inst_31372 = (state_31392[(7)]);
var inst_31374 = figwheel.client.file_reloading.blocking_load.call(null,inst_31372);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(8),inst_31374);
} else {
if((state_val_31393 === (10))){
var inst_31376 = (state_31392[(10)]);
var inst_31382 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31376);
var state_31392__$1 = state_31392;
var statearr_31403_31421 = state_31392__$1;
(statearr_31403_31421[(2)] = inst_31382);

(statearr_31403_31421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (8))){
var inst_31372 = (state_31392[(7)]);
var inst_31378 = (state_31392[(9)]);
var inst_31376 = (state_31392[(2)]);
var inst_31377 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31378__$1 = cljs.core.get.call(null,inst_31377,inst_31372);
var state_31392__$1 = (function (){var statearr_31404 = state_31392;
(statearr_31404[(9)] = inst_31378__$1);

(statearr_31404[(10)] = inst_31376);

return statearr_31404;
})();
if(cljs.core.truth_(inst_31378__$1)){
var statearr_31405_31422 = state_31392__$1;
(statearr_31405_31422[(1)] = (9));

} else {
var statearr_31406_31423 = state_31392__$1;
(statearr_31406_31423[(1)] = (10));

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
});})(c__28262__auto__))
;
return ((function (switch__28150__auto__,c__28262__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$state_machine__28151__auto____0 = (function (){
var statearr_31410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31410[(0)] = figwheel$client$file_reloading$state_machine__28151__auto__);

(statearr_31410[(1)] = (1));

return statearr_31410;
});
var figwheel$client$file_reloading$state_machine__28151__auto____1 = (function (state_31392){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31411){if((e31411 instanceof Object)){
var ex__28154__auto__ = e31411;
var statearr_31412_31424 = state_31392;
(statearr_31412_31424[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31425 = state_31392;
state_31392 = G__31425;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28151__auto__ = function(state_31392){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28151__auto____1.call(this,state_31392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28151__auto____0;
figwheel$client$file_reloading$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28151__auto____1;
return figwheel$client$file_reloading$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__))
})();
var state__28264__auto__ = (function (){var statearr_31413 = f__28263__auto__.call(null);
(statearr_31413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_31413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__))
);

return c__28262__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31426,callback){
var map__31429 = p__31426;
var map__31429__$1 = ((((!((map__31429 == null)))?((((map__31429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31429):map__31429);
var file_msg = map__31429__$1;
var namespace = cljs.core.get.call(null,map__31429__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31429,map__31429__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31429,map__31429__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31431){
var map__31434 = p__31431;
var map__31434__$1 = ((((!((map__31434 == null)))?((((map__31434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31434):map__31434);
var file_msg = map__31434__$1;
var namespace = cljs.core.get.call(null,map__31434__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26078__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26078__auto__){
var or__26090__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
var or__26090__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26090__auto____$1)){
return or__26090__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26078__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31436,callback){
var map__31439 = p__31436;
var map__31439__$1 = ((((!((map__31439 == null)))?((((map__31439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31439):map__31439);
var file_msg = map__31439__$1;
var request_url = cljs.core.get.call(null,map__31439__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31439__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28262__auto___31543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___31543,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___31543,out){
return (function (state_31525){
var state_val_31526 = (state_31525[(1)]);
if((state_val_31526 === (1))){
var inst_31499 = cljs.core.seq.call(null,files);
var inst_31500 = cljs.core.first.call(null,inst_31499);
var inst_31501 = cljs.core.next.call(null,inst_31499);
var inst_31502 = files;
var state_31525__$1 = (function (){var statearr_31527 = state_31525;
(statearr_31527[(7)] = inst_31500);

(statearr_31527[(8)] = inst_31502);

(statearr_31527[(9)] = inst_31501);

return statearr_31527;
})();
var statearr_31528_31544 = state_31525__$1;
(statearr_31528_31544[(2)] = null);

(statearr_31528_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (2))){
var inst_31508 = (state_31525[(10)]);
var inst_31502 = (state_31525[(8)]);
var inst_31507 = cljs.core.seq.call(null,inst_31502);
var inst_31508__$1 = cljs.core.first.call(null,inst_31507);
var inst_31509 = cljs.core.next.call(null,inst_31507);
var inst_31510 = (inst_31508__$1 == null);
var inst_31511 = cljs.core.not.call(null,inst_31510);
var state_31525__$1 = (function (){var statearr_31529 = state_31525;
(statearr_31529[(10)] = inst_31508__$1);

(statearr_31529[(11)] = inst_31509);

return statearr_31529;
})();
if(inst_31511){
var statearr_31530_31545 = state_31525__$1;
(statearr_31530_31545[(1)] = (4));

} else {
var statearr_31531_31546 = state_31525__$1;
(statearr_31531_31546[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (3))){
var inst_31523 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31525__$1,inst_31523);
} else {
if((state_val_31526 === (4))){
var inst_31508 = (state_31525[(10)]);
var inst_31513 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31508);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31525__$1,(7),inst_31513);
} else {
if((state_val_31526 === (5))){
var inst_31519 = cljs.core.async.close_BANG_.call(null,out);
var state_31525__$1 = state_31525;
var statearr_31532_31547 = state_31525__$1;
(statearr_31532_31547[(2)] = inst_31519);

(statearr_31532_31547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (6))){
var inst_31521 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31533_31548 = state_31525__$1;
(statearr_31533_31548[(2)] = inst_31521);

(statearr_31533_31548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (7))){
var inst_31509 = (state_31525[(11)]);
var inst_31515 = (state_31525[(2)]);
var inst_31516 = cljs.core.async.put_BANG_.call(null,out,inst_31515);
var inst_31502 = inst_31509;
var state_31525__$1 = (function (){var statearr_31534 = state_31525;
(statearr_31534[(12)] = inst_31516);

(statearr_31534[(8)] = inst_31502);

return statearr_31534;
})();
var statearr_31535_31549 = state_31525__$1;
(statearr_31535_31549[(2)] = null);

(statearr_31535_31549[(1)] = (2));


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
});})(c__28262__auto___31543,out))
;
return ((function (switch__28150__auto__,c__28262__auto___31543,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0 = (function (){
var statearr_31539 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31539[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__);

(statearr_31539[(1)] = (1));

return statearr_31539;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1 = (function (state_31525){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31540){if((e31540 instanceof Object)){
var ex__28154__auto__ = e31540;
var statearr_31541_31550 = state_31525;
(statearr_31541_31550[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31551 = state_31525;
state_31525 = G__31551;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__ = function(state_31525){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1.call(this,state_31525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___31543,out))
})();
var state__28264__auto__ = (function (){var statearr_31542 = f__28263__auto__.call(null);
(statearr_31542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___31543);

return statearr_31542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___31543,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31552,opts){
var map__31556 = p__31552;
var map__31556__$1 = ((((!((map__31556 == null)))?((((map__31556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31556):map__31556);
var eval_body__$1 = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26078__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26078__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26078__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31558){var e = e31558;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31559_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31559_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31568){
var vec__31569 = p__31568;
var k = cljs.core.nth.call(null,vec__31569,(0),null);
var v = cljs.core.nth.call(null,vec__31569,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31572){
var vec__31573 = p__31572;
var k = cljs.core.nth.call(null,vec__31573,(0),null);
var v = cljs.core.nth.call(null,vec__31573,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31579,p__31580){
var map__31827 = p__31579;
var map__31827__$1 = ((((!((map__31827 == null)))?((((map__31827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31827):map__31827);
var opts = map__31827__$1;
var before_jsload = cljs.core.get.call(null,map__31827__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31827__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31827__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31828 = p__31580;
var map__31828__$1 = ((((!((map__31828 == null)))?((((map__31828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31828):map__31828);
var msg = map__31828__$1;
var files = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31828__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31981){
var state_val_31982 = (state_31981[(1)]);
if((state_val_31982 === (7))){
var inst_31842 = (state_31981[(7)]);
var inst_31844 = (state_31981[(8)]);
var inst_31845 = (state_31981[(9)]);
var inst_31843 = (state_31981[(10)]);
var inst_31850 = cljs.core._nth.call(null,inst_31843,inst_31845);
var inst_31851 = figwheel.client.file_reloading.eval_body.call(null,inst_31850,opts);
var inst_31852 = (inst_31845 + (1));
var tmp31983 = inst_31842;
var tmp31984 = inst_31844;
var tmp31985 = inst_31843;
var inst_31842__$1 = tmp31983;
var inst_31843__$1 = tmp31985;
var inst_31844__$1 = tmp31984;
var inst_31845__$1 = inst_31852;
var state_31981__$1 = (function (){var statearr_31986 = state_31981;
(statearr_31986[(11)] = inst_31851);

(statearr_31986[(7)] = inst_31842__$1);

(statearr_31986[(8)] = inst_31844__$1);

(statearr_31986[(9)] = inst_31845__$1);

(statearr_31986[(10)] = inst_31843__$1);

return statearr_31986;
})();
var statearr_31987_32073 = state_31981__$1;
(statearr_31987_32073[(2)] = null);

(statearr_31987_32073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (20))){
var inst_31885 = (state_31981[(12)]);
var inst_31893 = figwheel.client.file_reloading.sort_files.call(null,inst_31885);
var state_31981__$1 = state_31981;
var statearr_31988_32074 = state_31981__$1;
(statearr_31988_32074[(2)] = inst_31893);

(statearr_31988_32074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (27))){
var state_31981__$1 = state_31981;
var statearr_31989_32075 = state_31981__$1;
(statearr_31989_32075[(2)] = null);

(statearr_31989_32075[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (1))){
var inst_31834 = (state_31981[(13)]);
var inst_31831 = before_jsload.call(null,files);
var inst_31832 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31833 = (function (){return ((function (inst_31834,inst_31831,inst_31832,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31576_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31576_SHARP_);
});
;})(inst_31834,inst_31831,inst_31832,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31834__$1 = cljs.core.filter.call(null,inst_31833,files);
var inst_31835 = cljs.core.not_empty.call(null,inst_31834__$1);
var state_31981__$1 = (function (){var statearr_31990 = state_31981;
(statearr_31990[(13)] = inst_31834__$1);

(statearr_31990[(14)] = inst_31832);

(statearr_31990[(15)] = inst_31831);

return statearr_31990;
})();
if(cljs.core.truth_(inst_31835)){
var statearr_31991_32076 = state_31981__$1;
(statearr_31991_32076[(1)] = (2));

} else {
var statearr_31992_32077 = state_31981__$1;
(statearr_31992_32077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (24))){
var state_31981__$1 = state_31981;
var statearr_31993_32078 = state_31981__$1;
(statearr_31993_32078[(2)] = null);

(statearr_31993_32078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (39))){
var inst_31935 = (state_31981[(16)]);
var state_31981__$1 = state_31981;
var statearr_31994_32079 = state_31981__$1;
(statearr_31994_32079[(2)] = inst_31935);

(statearr_31994_32079[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (46))){
var inst_31976 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
var statearr_31995_32080 = state_31981__$1;
(statearr_31995_32080[(2)] = inst_31976);

(statearr_31995_32080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (4))){
var inst_31879 = (state_31981[(2)]);
var inst_31880 = cljs.core.List.EMPTY;
var inst_31881 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31880);
var inst_31882 = (function (){return ((function (inst_31879,inst_31880,inst_31881,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31577_SHARP_){
var and__26078__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31577_SHARP_);
if(cljs.core.truth_(and__26078__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31577_SHARP_));
} else {
return and__26078__auto__;
}
});
;})(inst_31879,inst_31880,inst_31881,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31883 = cljs.core.filter.call(null,inst_31882,files);
var inst_31884 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31885 = cljs.core.concat.call(null,inst_31883,inst_31884);
var state_31981__$1 = (function (){var statearr_31996 = state_31981;
(statearr_31996[(17)] = inst_31879);

(statearr_31996[(12)] = inst_31885);

(statearr_31996[(18)] = inst_31881);

return statearr_31996;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31997_32081 = state_31981__$1;
(statearr_31997_32081[(1)] = (16));

} else {
var statearr_31998_32082 = state_31981__$1;
(statearr_31998_32082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (15))){
var inst_31869 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
var statearr_31999_32083 = state_31981__$1;
(statearr_31999_32083[(2)] = inst_31869);

(statearr_31999_32083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (21))){
var inst_31895 = (state_31981[(19)]);
var inst_31895__$1 = (state_31981[(2)]);
var inst_31896 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31895__$1);
var state_31981__$1 = (function (){var statearr_32000 = state_31981;
(statearr_32000[(19)] = inst_31895__$1);

return statearr_32000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31981__$1,(22),inst_31896);
} else {
if((state_val_31982 === (31))){
var inst_31979 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31981__$1,inst_31979);
} else {
if((state_val_31982 === (32))){
var inst_31935 = (state_31981[(16)]);
var inst_31940 = inst_31935.cljs$lang$protocol_mask$partition0$;
var inst_31941 = (inst_31940 & (64));
var inst_31942 = inst_31935.cljs$core$ISeq$;
var inst_31943 = (inst_31941) || (inst_31942);
var state_31981__$1 = state_31981;
if(cljs.core.truth_(inst_31943)){
var statearr_32001_32084 = state_31981__$1;
(statearr_32001_32084[(1)] = (35));

} else {
var statearr_32002_32085 = state_31981__$1;
(statearr_32002_32085[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (40))){
var inst_31956 = (state_31981[(20)]);
var inst_31955 = (state_31981[(2)]);
var inst_31956__$1 = cljs.core.get.call(null,inst_31955,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31957 = cljs.core.get.call(null,inst_31955,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31958 = cljs.core.not_empty.call(null,inst_31956__$1);
var state_31981__$1 = (function (){var statearr_32003 = state_31981;
(statearr_32003[(20)] = inst_31956__$1);

(statearr_32003[(21)] = inst_31957);

return statearr_32003;
})();
if(cljs.core.truth_(inst_31958)){
var statearr_32004_32086 = state_31981__$1;
(statearr_32004_32086[(1)] = (41));

} else {
var statearr_32005_32087 = state_31981__$1;
(statearr_32005_32087[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (33))){
var state_31981__$1 = state_31981;
var statearr_32006_32088 = state_31981__$1;
(statearr_32006_32088[(2)] = false);

(statearr_32006_32088[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (13))){
var inst_31855 = (state_31981[(22)]);
var inst_31859 = cljs.core.chunk_first.call(null,inst_31855);
var inst_31860 = cljs.core.chunk_rest.call(null,inst_31855);
var inst_31861 = cljs.core.count.call(null,inst_31859);
var inst_31842 = inst_31860;
var inst_31843 = inst_31859;
var inst_31844 = inst_31861;
var inst_31845 = (0);
var state_31981__$1 = (function (){var statearr_32007 = state_31981;
(statearr_32007[(7)] = inst_31842);

(statearr_32007[(8)] = inst_31844);

(statearr_32007[(9)] = inst_31845);

(statearr_32007[(10)] = inst_31843);

return statearr_32007;
})();
var statearr_32008_32089 = state_31981__$1;
(statearr_32008_32089[(2)] = null);

(statearr_32008_32089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (22))){
var inst_31898 = (state_31981[(23)]);
var inst_31903 = (state_31981[(24)]);
var inst_31899 = (state_31981[(25)]);
var inst_31895 = (state_31981[(19)]);
var inst_31898__$1 = (state_31981[(2)]);
var inst_31899__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31898__$1);
var inst_31900 = (function (){var all_files = inst_31895;
var res_SINGLEQUOTE_ = inst_31898__$1;
var res = inst_31899__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31898,inst_31903,inst_31899,inst_31895,inst_31898__$1,inst_31899__$1,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31578_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31578_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31898,inst_31903,inst_31899,inst_31895,inst_31898__$1,inst_31899__$1,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31901 = cljs.core.filter.call(null,inst_31900,inst_31898__$1);
var inst_31902 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31903__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31902);
var inst_31904 = cljs.core.not_empty.call(null,inst_31903__$1);
var state_31981__$1 = (function (){var statearr_32009 = state_31981;
(statearr_32009[(23)] = inst_31898__$1);

(statearr_32009[(24)] = inst_31903__$1);

(statearr_32009[(25)] = inst_31899__$1);

(statearr_32009[(26)] = inst_31901);

return statearr_32009;
})();
if(cljs.core.truth_(inst_31904)){
var statearr_32010_32090 = state_31981__$1;
(statearr_32010_32090[(1)] = (23));

} else {
var statearr_32011_32091 = state_31981__$1;
(statearr_32011_32091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (36))){
var state_31981__$1 = state_31981;
var statearr_32012_32092 = state_31981__$1;
(statearr_32012_32092[(2)] = false);

(statearr_32012_32092[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (41))){
var inst_31956 = (state_31981[(20)]);
var inst_31960 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31961 = cljs.core.map.call(null,inst_31960,inst_31956);
var inst_31962 = cljs.core.pr_str.call(null,inst_31961);
var inst_31963 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31962)].join('');
var inst_31964 = figwheel.client.utils.log.call(null,inst_31963);
var state_31981__$1 = state_31981;
var statearr_32013_32093 = state_31981__$1;
(statearr_32013_32093[(2)] = inst_31964);

(statearr_32013_32093[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (43))){
var inst_31957 = (state_31981[(21)]);
var inst_31967 = (state_31981[(2)]);
var inst_31968 = cljs.core.not_empty.call(null,inst_31957);
var state_31981__$1 = (function (){var statearr_32014 = state_31981;
(statearr_32014[(27)] = inst_31967);

return statearr_32014;
})();
if(cljs.core.truth_(inst_31968)){
var statearr_32015_32094 = state_31981__$1;
(statearr_32015_32094[(1)] = (44));

} else {
var statearr_32016_32095 = state_31981__$1;
(statearr_32016_32095[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (29))){
var inst_31898 = (state_31981[(23)]);
var inst_31903 = (state_31981[(24)]);
var inst_31899 = (state_31981[(25)]);
var inst_31935 = (state_31981[(16)]);
var inst_31901 = (state_31981[(26)]);
var inst_31895 = (state_31981[(19)]);
var inst_31931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31934 = (function (){var all_files = inst_31895;
var res_SINGLEQUOTE_ = inst_31898;
var res = inst_31899;
var files_not_loaded = inst_31901;
var dependencies_that_loaded = inst_31903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31935,inst_31901,inst_31895,inst_31931,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31933){
var map__32017 = p__31933;
var map__32017__$1 = ((((!((map__32017 == null)))?((((map__32017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32017):map__32017);
var namespace = cljs.core.get.call(null,map__32017__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31935,inst_31901,inst_31895,inst_31931,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31935__$1 = cljs.core.group_by.call(null,inst_31934,inst_31901);
var inst_31937 = (inst_31935__$1 == null);
var inst_31938 = cljs.core.not.call(null,inst_31937);
var state_31981__$1 = (function (){var statearr_32019 = state_31981;
(statearr_32019[(16)] = inst_31935__$1);

(statearr_32019[(28)] = inst_31931);

return statearr_32019;
})();
if(inst_31938){
var statearr_32020_32096 = state_31981__$1;
(statearr_32020_32096[(1)] = (32));

} else {
var statearr_32021_32097 = state_31981__$1;
(statearr_32021_32097[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (44))){
var inst_31957 = (state_31981[(21)]);
var inst_31970 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31957);
var inst_31971 = cljs.core.pr_str.call(null,inst_31970);
var inst_31972 = [cljs.core.str("not required: "),cljs.core.str(inst_31971)].join('');
var inst_31973 = figwheel.client.utils.log.call(null,inst_31972);
var state_31981__$1 = state_31981;
var statearr_32022_32098 = state_31981__$1;
(statearr_32022_32098[(2)] = inst_31973);

(statearr_32022_32098[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (6))){
var inst_31876 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
var statearr_32023_32099 = state_31981__$1;
(statearr_32023_32099[(2)] = inst_31876);

(statearr_32023_32099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (28))){
var inst_31901 = (state_31981[(26)]);
var inst_31928 = (state_31981[(2)]);
var inst_31929 = cljs.core.not_empty.call(null,inst_31901);
var state_31981__$1 = (function (){var statearr_32024 = state_31981;
(statearr_32024[(29)] = inst_31928);

return statearr_32024;
})();
if(cljs.core.truth_(inst_31929)){
var statearr_32025_32100 = state_31981__$1;
(statearr_32025_32100[(1)] = (29));

} else {
var statearr_32026_32101 = state_31981__$1;
(statearr_32026_32101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (25))){
var inst_31899 = (state_31981[(25)]);
var inst_31915 = (state_31981[(2)]);
var inst_31916 = cljs.core.not_empty.call(null,inst_31899);
var state_31981__$1 = (function (){var statearr_32027 = state_31981;
(statearr_32027[(30)] = inst_31915);

return statearr_32027;
})();
if(cljs.core.truth_(inst_31916)){
var statearr_32028_32102 = state_31981__$1;
(statearr_32028_32102[(1)] = (26));

} else {
var statearr_32029_32103 = state_31981__$1;
(statearr_32029_32103[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (34))){
var inst_31950 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
if(cljs.core.truth_(inst_31950)){
var statearr_32030_32104 = state_31981__$1;
(statearr_32030_32104[(1)] = (38));

} else {
var statearr_32031_32105 = state_31981__$1;
(statearr_32031_32105[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (17))){
var state_31981__$1 = state_31981;
var statearr_32032_32106 = state_31981__$1;
(statearr_32032_32106[(2)] = recompile_dependents);

(statearr_32032_32106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (3))){
var state_31981__$1 = state_31981;
var statearr_32033_32107 = state_31981__$1;
(statearr_32033_32107[(2)] = null);

(statearr_32033_32107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (12))){
var inst_31872 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
var statearr_32034_32108 = state_31981__$1;
(statearr_32034_32108[(2)] = inst_31872);

(statearr_32034_32108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (2))){
var inst_31834 = (state_31981[(13)]);
var inst_31841 = cljs.core.seq.call(null,inst_31834);
var inst_31842 = inst_31841;
var inst_31843 = null;
var inst_31844 = (0);
var inst_31845 = (0);
var state_31981__$1 = (function (){var statearr_32035 = state_31981;
(statearr_32035[(7)] = inst_31842);

(statearr_32035[(8)] = inst_31844);

(statearr_32035[(9)] = inst_31845);

(statearr_32035[(10)] = inst_31843);

return statearr_32035;
})();
var statearr_32036_32109 = state_31981__$1;
(statearr_32036_32109[(2)] = null);

(statearr_32036_32109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (23))){
var inst_31898 = (state_31981[(23)]);
var inst_31903 = (state_31981[(24)]);
var inst_31899 = (state_31981[(25)]);
var inst_31901 = (state_31981[(26)]);
var inst_31895 = (state_31981[(19)]);
var inst_31906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31908 = (function (){var all_files = inst_31895;
var res_SINGLEQUOTE_ = inst_31898;
var res = inst_31899;
var files_not_loaded = inst_31901;
var dependencies_that_loaded = inst_31903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31901,inst_31895,inst_31906,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31907){
var map__32037 = p__31907;
var map__32037__$1 = ((((!((map__32037 == null)))?((((map__32037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32037):map__32037);
var request_url = cljs.core.get.call(null,map__32037__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31901,inst_31895,inst_31906,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31909 = cljs.core.reverse.call(null,inst_31903);
var inst_31910 = cljs.core.map.call(null,inst_31908,inst_31909);
var inst_31911 = cljs.core.pr_str.call(null,inst_31910);
var inst_31912 = figwheel.client.utils.log.call(null,inst_31911);
var state_31981__$1 = (function (){var statearr_32039 = state_31981;
(statearr_32039[(31)] = inst_31906);

return statearr_32039;
})();
var statearr_32040_32110 = state_31981__$1;
(statearr_32040_32110[(2)] = inst_31912);

(statearr_32040_32110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (35))){
var state_31981__$1 = state_31981;
var statearr_32041_32111 = state_31981__$1;
(statearr_32041_32111[(2)] = true);

(statearr_32041_32111[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (19))){
var inst_31885 = (state_31981[(12)]);
var inst_31891 = figwheel.client.file_reloading.expand_files.call(null,inst_31885);
var state_31981__$1 = state_31981;
var statearr_32042_32112 = state_31981__$1;
(statearr_32042_32112[(2)] = inst_31891);

(statearr_32042_32112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (11))){
var state_31981__$1 = state_31981;
var statearr_32043_32113 = state_31981__$1;
(statearr_32043_32113[(2)] = null);

(statearr_32043_32113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (9))){
var inst_31874 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
var statearr_32044_32114 = state_31981__$1;
(statearr_32044_32114[(2)] = inst_31874);

(statearr_32044_32114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (5))){
var inst_31844 = (state_31981[(8)]);
var inst_31845 = (state_31981[(9)]);
var inst_31847 = (inst_31845 < inst_31844);
var inst_31848 = inst_31847;
var state_31981__$1 = state_31981;
if(cljs.core.truth_(inst_31848)){
var statearr_32045_32115 = state_31981__$1;
(statearr_32045_32115[(1)] = (7));

} else {
var statearr_32046_32116 = state_31981__$1;
(statearr_32046_32116[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (14))){
var inst_31855 = (state_31981[(22)]);
var inst_31864 = cljs.core.first.call(null,inst_31855);
var inst_31865 = figwheel.client.file_reloading.eval_body.call(null,inst_31864,opts);
var inst_31866 = cljs.core.next.call(null,inst_31855);
var inst_31842 = inst_31866;
var inst_31843 = null;
var inst_31844 = (0);
var inst_31845 = (0);
var state_31981__$1 = (function (){var statearr_32047 = state_31981;
(statearr_32047[(7)] = inst_31842);

(statearr_32047[(8)] = inst_31844);

(statearr_32047[(9)] = inst_31845);

(statearr_32047[(10)] = inst_31843);

(statearr_32047[(32)] = inst_31865);

return statearr_32047;
})();
var statearr_32048_32117 = state_31981__$1;
(statearr_32048_32117[(2)] = null);

(statearr_32048_32117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (45))){
var state_31981__$1 = state_31981;
var statearr_32049_32118 = state_31981__$1;
(statearr_32049_32118[(2)] = null);

(statearr_32049_32118[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (26))){
var inst_31898 = (state_31981[(23)]);
var inst_31903 = (state_31981[(24)]);
var inst_31899 = (state_31981[(25)]);
var inst_31901 = (state_31981[(26)]);
var inst_31895 = (state_31981[(19)]);
var inst_31918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31920 = (function (){var all_files = inst_31895;
var res_SINGLEQUOTE_ = inst_31898;
var res = inst_31899;
var files_not_loaded = inst_31901;
var dependencies_that_loaded = inst_31903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31901,inst_31895,inst_31918,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31919){
var map__32050 = p__31919;
var map__32050__$1 = ((((!((map__32050 == null)))?((((map__32050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32050):map__32050);
var namespace = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31901,inst_31895,inst_31918,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31921 = cljs.core.map.call(null,inst_31920,inst_31899);
var inst_31922 = cljs.core.pr_str.call(null,inst_31921);
var inst_31923 = figwheel.client.utils.log.call(null,inst_31922);
var inst_31924 = (function (){var all_files = inst_31895;
var res_SINGLEQUOTE_ = inst_31898;
var res = inst_31899;
var files_not_loaded = inst_31901;
var dependencies_that_loaded = inst_31903;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31901,inst_31895,inst_31918,inst_31920,inst_31921,inst_31922,inst_31923,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31898,inst_31903,inst_31899,inst_31901,inst_31895,inst_31918,inst_31920,inst_31921,inst_31922,inst_31923,state_val_31982,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31925 = setTimeout(inst_31924,(10));
var state_31981__$1 = (function (){var statearr_32052 = state_31981;
(statearr_32052[(33)] = inst_31923);

(statearr_32052[(34)] = inst_31918);

return statearr_32052;
})();
var statearr_32053_32119 = state_31981__$1;
(statearr_32053_32119[(2)] = inst_31925);

(statearr_32053_32119[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (16))){
var state_31981__$1 = state_31981;
var statearr_32054_32120 = state_31981__$1;
(statearr_32054_32120[(2)] = reload_dependents);

(statearr_32054_32120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (38))){
var inst_31935 = (state_31981[(16)]);
var inst_31952 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31935);
var state_31981__$1 = state_31981;
var statearr_32055_32121 = state_31981__$1;
(statearr_32055_32121[(2)] = inst_31952);

(statearr_32055_32121[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (30))){
var state_31981__$1 = state_31981;
var statearr_32056_32122 = state_31981__$1;
(statearr_32056_32122[(2)] = null);

(statearr_32056_32122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (10))){
var inst_31855 = (state_31981[(22)]);
var inst_31857 = cljs.core.chunked_seq_QMARK_.call(null,inst_31855);
var state_31981__$1 = state_31981;
if(inst_31857){
var statearr_32057_32123 = state_31981__$1;
(statearr_32057_32123[(1)] = (13));

} else {
var statearr_32058_32124 = state_31981__$1;
(statearr_32058_32124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (18))){
var inst_31889 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
if(cljs.core.truth_(inst_31889)){
var statearr_32059_32125 = state_31981__$1;
(statearr_32059_32125[(1)] = (19));

} else {
var statearr_32060_32126 = state_31981__$1;
(statearr_32060_32126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (42))){
var state_31981__$1 = state_31981;
var statearr_32061_32127 = state_31981__$1;
(statearr_32061_32127[(2)] = null);

(statearr_32061_32127[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (37))){
var inst_31947 = (state_31981[(2)]);
var state_31981__$1 = state_31981;
var statearr_32062_32128 = state_31981__$1;
(statearr_32062_32128[(2)] = inst_31947);

(statearr_32062_32128[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31982 === (8))){
var inst_31842 = (state_31981[(7)]);
var inst_31855 = (state_31981[(22)]);
var inst_31855__$1 = cljs.core.seq.call(null,inst_31842);
var state_31981__$1 = (function (){var statearr_32063 = state_31981;
(statearr_32063[(22)] = inst_31855__$1);

return statearr_32063;
})();
if(inst_31855__$1){
var statearr_32064_32129 = state_31981__$1;
(statearr_32064_32129[(1)] = (10));

} else {
var statearr_32065_32130 = state_31981__$1;
(statearr_32065_32130[(1)] = (11));

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
});})(c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28150__auto__,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0 = (function (){
var statearr_32069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32069[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__);

(statearr_32069[(1)] = (1));

return statearr_32069;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1 = (function (state_31981){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e32070){if((e32070 instanceof Object)){
var ex__28154__auto__ = e32070;
var statearr_32071_32131 = state_31981;
(statearr_32071_32131[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32132 = state_31981;
state_31981 = G__32132;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__ = function(state_31981){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1.call(this,state_31981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28264__auto__ = (function (){var statearr_32072 = f__28263__auto__.call(null);
(statearr_32072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_32072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__,map__31827,map__31827__$1,opts,before_jsload,on_jsload,reload_dependents,map__31828,map__31828__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28262__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32135,link){
var map__32138 = p__32135;
var map__32138__$1 = ((((!((map__32138 == null)))?((((map__32138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32138):map__32138);
var file = cljs.core.get.call(null,map__32138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32138,map__32138__$1,file){
return (function (p1__32133_SHARP_,p2__32134_SHARP_){
if(cljs.core._EQ_.call(null,p1__32133_SHARP_,p2__32134_SHARP_)){
return p1__32133_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32138,map__32138__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32144){
var map__32145 = p__32144;
var map__32145__$1 = ((((!((map__32145 == null)))?((((map__32145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32145):map__32145);
var match_length = cljs.core.get.call(null,map__32145__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32145__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32140_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32140_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32147 = [];
var len__27165__auto___32150 = arguments.length;
var i__27166__auto___32151 = (0);
while(true){
if((i__27166__auto___32151 < len__27165__auto___32150)){
args32147.push((arguments[i__27166__auto___32151]));

var G__32152 = (i__27166__auto___32151 + (1));
i__27166__auto___32151 = G__32152;
continue;
} else {
}
break;
}

var G__32149 = args32147.length;
switch (G__32149) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32147.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32154_SHARP_,p2__32155_SHARP_){
return cljs.core.assoc.call(null,p1__32154_SHARP_,cljs.core.get.call(null,p2__32155_SHARP_,key),p2__32155_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32156){
var map__32159 = p__32156;
var map__32159__$1 = ((((!((map__32159 == null)))?((((map__32159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32159):map__32159);
var f_data = map__32159__$1;
var file = cljs.core.get.call(null,map__32159__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32161,p__32162){
var map__32171 = p__32161;
var map__32171__$1 = ((((!((map__32171 == null)))?((((map__32171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32171):map__32171);
var opts = map__32171__$1;
var on_cssload = cljs.core.get.call(null,map__32171__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32172 = p__32162;
var map__32172__$1 = ((((!((map__32172 == null)))?((((map__32172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32172):map__32172);
var files_msg = map__32172__$1;
var files = cljs.core.get.call(null,map__32172__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32175_32179 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__32176_32180 = null;
var count__32177_32181 = (0);
var i__32178_32182 = (0);
while(true){
if((i__32178_32182 < count__32177_32181)){
var f_32183 = cljs.core._nth.call(null,chunk__32176_32180,i__32178_32182);
figwheel.client.file_reloading.reload_css_file.call(null,f_32183);

var G__32184 = seq__32175_32179;
var G__32185 = chunk__32176_32180;
var G__32186 = count__32177_32181;
var G__32187 = (i__32178_32182 + (1));
seq__32175_32179 = G__32184;
chunk__32176_32180 = G__32185;
count__32177_32181 = G__32186;
i__32178_32182 = G__32187;
continue;
} else {
var temp__4657__auto___32188 = cljs.core.seq.call(null,seq__32175_32179);
if(temp__4657__auto___32188){
var seq__32175_32189__$1 = temp__4657__auto___32188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32175_32189__$1)){
var c__26901__auto___32190 = cljs.core.chunk_first.call(null,seq__32175_32189__$1);
var G__32191 = cljs.core.chunk_rest.call(null,seq__32175_32189__$1);
var G__32192 = c__26901__auto___32190;
var G__32193 = cljs.core.count.call(null,c__26901__auto___32190);
var G__32194 = (0);
seq__32175_32179 = G__32191;
chunk__32176_32180 = G__32192;
count__32177_32181 = G__32193;
i__32178_32182 = G__32194;
continue;
} else {
var f_32195 = cljs.core.first.call(null,seq__32175_32189__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32195);

var G__32196 = cljs.core.next.call(null,seq__32175_32189__$1);
var G__32197 = null;
var G__32198 = (0);
var G__32199 = (0);
seq__32175_32179 = G__32196;
chunk__32176_32180 = G__32197;
count__32177_32181 = G__32198;
i__32178_32182 = G__32199;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32171,map__32171__$1,opts,on_cssload,map__32172,map__32172__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__32171,map__32171__$1,opts,on_cssload,map__32172,map__32172__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1494497612766