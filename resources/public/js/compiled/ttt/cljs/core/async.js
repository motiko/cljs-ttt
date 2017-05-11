// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28307 = [];
var len__27165__auto___28313 = arguments.length;
var i__27166__auto___28314 = (0);
while(true){
if((i__27166__auto___28314 < len__27165__auto___28313)){
args28307.push((arguments[i__27166__auto___28314]));

var G__28315 = (i__27166__auto___28314 + (1));
i__27166__auto___28314 = G__28315;
continue;
} else {
}
break;
}

var G__28309 = args28307.length;
switch (G__28309) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28307.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28310 = (function (f,blockable,meta28311){
this.f = f;
this.blockable = blockable;
this.meta28311 = meta28311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28312,meta28311__$1){
var self__ = this;
var _28312__$1 = this;
return (new cljs.core.async.t_cljs$core$async28310(self__.f,self__.blockable,meta28311__$1));
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28312){
var self__ = this;
var _28312__$1 = this;
return self__.meta28311;
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28310.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28311","meta28311",-1809965558,null)], null);
});

cljs.core.async.t_cljs$core$async28310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28310";

cljs.core.async.t_cljs$core$async28310.cljs$lang$ctorPrWriter = (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async28310");
});

cljs.core.async.__GT_t_cljs$core$async28310 = (function cljs$core$async$__GT_t_cljs$core$async28310(f__$1,blockable__$1,meta28311){
return (new cljs.core.async.t_cljs$core$async28310(f__$1,blockable__$1,meta28311));
});

}

return (new cljs.core.async.t_cljs$core$async28310(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28319 = [];
var len__27165__auto___28322 = arguments.length;
var i__27166__auto___28323 = (0);
while(true){
if((i__27166__auto___28323 < len__27165__auto___28322)){
args28319.push((arguments[i__27166__auto___28323]));

var G__28324 = (i__27166__auto___28323 + (1));
i__27166__auto___28323 = G__28324;
continue;
} else {
}
break;
}

var G__28321 = args28319.length;
switch (G__28321) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28319.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28326 = [];
var len__27165__auto___28329 = arguments.length;
var i__27166__auto___28330 = (0);
while(true){
if((i__27166__auto___28330 < len__27165__auto___28329)){
args28326.push((arguments[i__27166__auto___28330]));

var G__28331 = (i__27166__auto___28330 + (1));
i__27166__auto___28330 = G__28331;
continue;
} else {
}
break;
}

var G__28328 = args28326.length;
switch (G__28328) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28326.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28333 = [];
var len__27165__auto___28336 = arguments.length;
var i__27166__auto___28337 = (0);
while(true){
if((i__27166__auto___28337 < len__27165__auto___28336)){
args28333.push((arguments[i__27166__auto___28337]));

var G__28338 = (i__27166__auto___28337 + (1));
i__27166__auto___28337 = G__28338;
continue;
} else {
}
break;
}

var G__28335 = args28333.length;
switch (G__28335) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28333.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28340 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28340);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28340,ret){
return (function (){
return fn1.call(null,val_28340);
});})(val_28340,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28341 = [];
var len__27165__auto___28344 = arguments.length;
var i__27166__auto___28345 = (0);
while(true){
if((i__27166__auto___28345 < len__27165__auto___28344)){
args28341.push((arguments[i__27166__auto___28345]));

var G__28346 = (i__27166__auto___28345 + (1));
i__27166__auto___28345 = G__28346;
continue;
} else {
}
break;
}

var G__28343 = args28341.length;
switch (G__28343) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28341.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27005__auto___28348 = n;
var x_28349 = (0);
while(true){
if((x_28349 < n__27005__auto___28348)){
(a[x_28349] = (0));

var G__28350 = (x_28349 + (1));
x_28349 = G__28350;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28351 = (i + (1));
i = G__28351;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28355 = (function (alt_flag,flag,meta28356){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28356 = meta28356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28357,meta28356__$1){
var self__ = this;
var _28357__$1 = this;
return (new cljs.core.async.t_cljs$core$async28355(self__.alt_flag,self__.flag,meta28356__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28357){
var self__ = this;
var _28357__$1 = this;
return self__.meta28356;
});})(flag))
;

cljs.core.async.t_cljs$core$async28355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28355.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28356","meta28356",1470239799,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28355";

cljs.core.async.t_cljs$core$async28355.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async28355");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28355 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28355(alt_flag__$1,flag__$1,meta28356){
return (new cljs.core.async.t_cljs$core$async28355(alt_flag__$1,flag__$1,meta28356));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28355(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28361 = (function (alt_handler,flag,cb,meta28362){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28362 = meta28362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28363,meta28362__$1){
var self__ = this;
var _28363__$1 = this;
return (new cljs.core.async.t_cljs$core$async28361(self__.alt_handler,self__.flag,self__.cb,meta28362__$1));
});

cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28363){
var self__ = this;
var _28363__$1 = this;
return self__.meta28362;
});

cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28362","meta28362",-1467845262,null)], null);
});

cljs.core.async.t_cljs$core$async28361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28361";

cljs.core.async.t_cljs$core$async28361.cljs$lang$ctorPrWriter = (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async28361");
});

cljs.core.async.__GT_t_cljs$core$async28361 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28361(alt_handler__$1,flag__$1,cb__$1,meta28362){
return (new cljs.core.async.t_cljs$core$async28361(alt_handler__$1,flag__$1,cb__$1,meta28362));
});

}

return (new cljs.core.async.t_cljs$core$async28361(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28364_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28364_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28365_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28365_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26090__auto__ = wport;
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28366 = (i + (1));
i = G__28366;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26090__auto__ = ret;
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26078__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26078__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26078__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27172__auto__ = [];
var len__27165__auto___28372 = arguments.length;
var i__27166__auto___28373 = (0);
while(true){
if((i__27166__auto___28373 < len__27165__auto___28372)){
args__27172__auto__.push((arguments[i__27166__auto___28373]));

var G__28374 = (i__27166__auto___28373 + (1));
i__27166__auto___28373 = G__28374;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((1) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27173__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28369){
var map__28370 = p__28369;
var map__28370__$1 = ((((!((map__28370 == null)))?((((map__28370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28370):map__28370);
var opts = map__28370__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28367){
var G__28368 = cljs.core.first.call(null,seq28367);
var seq28367__$1 = cljs.core.next.call(null,seq28367);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28368,seq28367__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28375 = [];
var len__27165__auto___28425 = arguments.length;
var i__27166__auto___28426 = (0);
while(true){
if((i__27166__auto___28426 < len__27165__auto___28425)){
args28375.push((arguments[i__27166__auto___28426]));

var G__28427 = (i__27166__auto___28426 + (1));
i__27166__auto___28426 = G__28427;
continue;
} else {
}
break;
}

var G__28377 = args28375.length;
switch (G__28377) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28375.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28262__auto___28429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___28429){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___28429){
return (function (state_28401){
var state_val_28402 = (state_28401[(1)]);
if((state_val_28402 === (7))){
var inst_28397 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
var statearr_28403_28430 = state_28401__$1;
(statearr_28403_28430[(2)] = inst_28397);

(statearr_28403_28430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (1))){
var state_28401__$1 = state_28401;
var statearr_28404_28431 = state_28401__$1;
(statearr_28404_28431[(2)] = null);

(statearr_28404_28431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (4))){
var inst_28380 = (state_28401[(7)]);
var inst_28380__$1 = (state_28401[(2)]);
var inst_28381 = (inst_28380__$1 == null);
var state_28401__$1 = (function (){var statearr_28405 = state_28401;
(statearr_28405[(7)] = inst_28380__$1);

return statearr_28405;
})();
if(cljs.core.truth_(inst_28381)){
var statearr_28406_28432 = state_28401__$1;
(statearr_28406_28432[(1)] = (5));

} else {
var statearr_28407_28433 = state_28401__$1;
(statearr_28407_28433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (13))){
var state_28401__$1 = state_28401;
var statearr_28408_28434 = state_28401__$1;
(statearr_28408_28434[(2)] = null);

(statearr_28408_28434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (6))){
var inst_28380 = (state_28401[(7)]);
var state_28401__$1 = state_28401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28401__$1,(11),to,inst_28380);
} else {
if((state_val_28402 === (3))){
var inst_28399 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28401__$1,inst_28399);
} else {
if((state_val_28402 === (12))){
var state_28401__$1 = state_28401;
var statearr_28409_28435 = state_28401__$1;
(statearr_28409_28435[(2)] = null);

(statearr_28409_28435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (2))){
var state_28401__$1 = state_28401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28401__$1,(4),from);
} else {
if((state_val_28402 === (11))){
var inst_28390 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
if(cljs.core.truth_(inst_28390)){
var statearr_28410_28436 = state_28401__$1;
(statearr_28410_28436[(1)] = (12));

} else {
var statearr_28411_28437 = state_28401__$1;
(statearr_28411_28437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (9))){
var state_28401__$1 = state_28401;
var statearr_28412_28438 = state_28401__$1;
(statearr_28412_28438[(2)] = null);

(statearr_28412_28438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (5))){
var state_28401__$1 = state_28401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28413_28439 = state_28401__$1;
(statearr_28413_28439[(1)] = (8));

} else {
var statearr_28414_28440 = state_28401__$1;
(statearr_28414_28440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (14))){
var inst_28395 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
var statearr_28415_28441 = state_28401__$1;
(statearr_28415_28441[(2)] = inst_28395);

(statearr_28415_28441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (10))){
var inst_28387 = (state_28401[(2)]);
var state_28401__$1 = state_28401;
var statearr_28416_28442 = state_28401__$1;
(statearr_28416_28442[(2)] = inst_28387);

(statearr_28416_28442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28402 === (8))){
var inst_28384 = cljs.core.async.close_BANG_.call(null,to);
var state_28401__$1 = state_28401;
var statearr_28417_28443 = state_28401__$1;
(statearr_28417_28443[(2)] = inst_28384);

(statearr_28417_28443[(1)] = (10));


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
});})(c__28262__auto___28429))
;
return ((function (switch__28150__auto__,c__28262__auto___28429){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_28421 = [null,null,null,null,null,null,null,null];
(statearr_28421[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_28421[(1)] = (1));

return statearr_28421;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_28401){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28422){if((e28422 instanceof Object)){
var ex__28154__auto__ = e28422;
var statearr_28423_28444 = state_28401;
(statearr_28423_28444[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28445 = state_28401;
state_28401 = G__28445;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_28401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_28401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___28429))
})();
var state__28264__auto__ = (function (){var statearr_28424 = f__28263__auto__.call(null);
(statearr_28424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___28429);

return statearr_28424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___28429))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28633){
var vec__28634 = p__28633;
var v = cljs.core.nth.call(null,vec__28634,(0),null);
var p = cljs.core.nth.call(null,vec__28634,(1),null);
var job = vec__28634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28262__auto___28820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___28820,res,vec__28634,v,p,job,jobs,results){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___28820,res,vec__28634,v,p,job,jobs,results){
return (function (state_28641){
var state_val_28642 = (state_28641[(1)]);
if((state_val_28642 === (1))){
var state_28641__$1 = state_28641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28641__$1,(2),res,v);
} else {
if((state_val_28642 === (2))){
var inst_28638 = (state_28641[(2)]);
var inst_28639 = cljs.core.async.close_BANG_.call(null,res);
var state_28641__$1 = (function (){var statearr_28643 = state_28641;
(statearr_28643[(7)] = inst_28638);

return statearr_28643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28641__$1,inst_28639);
} else {
return null;
}
}
});})(c__28262__auto___28820,res,vec__28634,v,p,job,jobs,results))
;
return ((function (switch__28150__auto__,c__28262__auto___28820,res,vec__28634,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_28647 = [null,null,null,null,null,null,null,null];
(statearr_28647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_28647[(1)] = (1));

return statearr_28647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_28641){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28648){if((e28648 instanceof Object)){
var ex__28154__auto__ = e28648;
var statearr_28649_28821 = state_28641;
(statearr_28649_28821[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28822 = state_28641;
state_28641 = G__28822;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_28641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_28641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___28820,res,vec__28634,v,p,job,jobs,results))
})();
var state__28264__auto__ = (function (){var statearr_28650 = f__28263__auto__.call(null);
(statearr_28650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___28820);

return statearr_28650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___28820,res,vec__28634,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28651){
var vec__28652 = p__28651;
var v = cljs.core.nth.call(null,vec__28652,(0),null);
var p = cljs.core.nth.call(null,vec__28652,(1),null);
var job = vec__28652;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27005__auto___28823 = n;
var __28824 = (0);
while(true){
if((__28824 < n__27005__auto___28823)){
var G__28655_28825 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28655_28825) {
case "compute":
var c__28262__auto___28827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28824,c__28262__auto___28827,G__28655_28825,n__27005__auto___28823,jobs,results,process,async){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (__28824,c__28262__auto___28827,G__28655_28825,n__27005__auto___28823,jobs,results,process,async){
return (function (state_28668){
var state_val_28669 = (state_28668[(1)]);
if((state_val_28669 === (1))){
var state_28668__$1 = state_28668;
var statearr_28670_28828 = state_28668__$1;
(statearr_28670_28828[(2)] = null);

(statearr_28670_28828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (2))){
var state_28668__$1 = state_28668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28668__$1,(4),jobs);
} else {
if((state_val_28669 === (3))){
var inst_28666 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28668__$1,inst_28666);
} else {
if((state_val_28669 === (4))){
var inst_28658 = (state_28668[(2)]);
var inst_28659 = process.call(null,inst_28658);
var state_28668__$1 = state_28668;
if(cljs.core.truth_(inst_28659)){
var statearr_28671_28829 = state_28668__$1;
(statearr_28671_28829[(1)] = (5));

} else {
var statearr_28672_28830 = state_28668__$1;
(statearr_28672_28830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (5))){
var state_28668__$1 = state_28668;
var statearr_28673_28831 = state_28668__$1;
(statearr_28673_28831[(2)] = null);

(statearr_28673_28831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (6))){
var state_28668__$1 = state_28668;
var statearr_28674_28832 = state_28668__$1;
(statearr_28674_28832[(2)] = null);

(statearr_28674_28832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28669 === (7))){
var inst_28664 = (state_28668[(2)]);
var state_28668__$1 = state_28668;
var statearr_28675_28833 = state_28668__$1;
(statearr_28675_28833[(2)] = inst_28664);

(statearr_28675_28833[(1)] = (3));


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
});})(__28824,c__28262__auto___28827,G__28655_28825,n__27005__auto___28823,jobs,results,process,async))
;
return ((function (__28824,switch__28150__auto__,c__28262__auto___28827,G__28655_28825,n__27005__auto___28823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null];
(statearr_28679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_28668){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object)){
var ex__28154__auto__ = e28680;
var statearr_28681_28834 = state_28668;
(statearr_28681_28834[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28835 = state_28668;
state_28668 = G__28835;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_28668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_28668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(__28824,switch__28150__auto__,c__28262__auto___28827,G__28655_28825,n__27005__auto___28823,jobs,results,process,async))
})();
var state__28264__auto__ = (function (){var statearr_28682 = f__28263__auto__.call(null);
(statearr_28682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___28827);

return statearr_28682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(__28824,c__28262__auto___28827,G__28655_28825,n__27005__auto___28823,jobs,results,process,async))
);


break;
case "async":
var c__28262__auto___28836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28824,c__28262__auto___28836,G__28655_28825,n__27005__auto___28823,jobs,results,process,async){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (__28824,c__28262__auto___28836,G__28655_28825,n__27005__auto___28823,jobs,results,process,async){
return (function (state_28695){
var state_val_28696 = (state_28695[(1)]);
if((state_val_28696 === (1))){
var state_28695__$1 = state_28695;
var statearr_28697_28837 = state_28695__$1;
(statearr_28697_28837[(2)] = null);

(statearr_28697_28837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (2))){
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28695__$1,(4),jobs);
} else {
if((state_val_28696 === (3))){
var inst_28693 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28695__$1,inst_28693);
} else {
if((state_val_28696 === (4))){
var inst_28685 = (state_28695[(2)]);
var inst_28686 = async.call(null,inst_28685);
var state_28695__$1 = state_28695;
if(cljs.core.truth_(inst_28686)){
var statearr_28698_28838 = state_28695__$1;
(statearr_28698_28838[(1)] = (5));

} else {
var statearr_28699_28839 = state_28695__$1;
(statearr_28699_28839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (5))){
var state_28695__$1 = state_28695;
var statearr_28700_28840 = state_28695__$1;
(statearr_28700_28840[(2)] = null);

(statearr_28700_28840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (6))){
var state_28695__$1 = state_28695;
var statearr_28701_28841 = state_28695__$1;
(statearr_28701_28841[(2)] = null);

(statearr_28701_28841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28696 === (7))){
var inst_28691 = (state_28695[(2)]);
var state_28695__$1 = state_28695;
var statearr_28702_28842 = state_28695__$1;
(statearr_28702_28842[(2)] = inst_28691);

(statearr_28702_28842[(1)] = (3));


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
});})(__28824,c__28262__auto___28836,G__28655_28825,n__27005__auto___28823,jobs,results,process,async))
;
return ((function (__28824,switch__28150__auto__,c__28262__auto___28836,G__28655_28825,n__27005__auto___28823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_28706 = [null,null,null,null,null,null,null];
(statearr_28706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_28706[(1)] = (1));

return statearr_28706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_28695){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28707){if((e28707 instanceof Object)){
var ex__28154__auto__ = e28707;
var statearr_28708_28843 = state_28695;
(statearr_28708_28843[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28844 = state_28695;
state_28695 = G__28844;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_28695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_28695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(__28824,switch__28150__auto__,c__28262__auto___28836,G__28655_28825,n__27005__auto___28823,jobs,results,process,async))
})();
var state__28264__auto__ = (function (){var statearr_28709 = f__28263__auto__.call(null);
(statearr_28709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___28836);

return statearr_28709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(__28824,c__28262__auto___28836,G__28655_28825,n__27005__auto___28823,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28845 = (__28824 + (1));
__28824 = G__28845;
continue;
} else {
}
break;
}

var c__28262__auto___28846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___28846,jobs,results,process,async){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___28846,jobs,results,process,async){
return (function (state_28731){
var state_val_28732 = (state_28731[(1)]);
if((state_val_28732 === (1))){
var state_28731__$1 = state_28731;
var statearr_28733_28847 = state_28731__$1;
(statearr_28733_28847[(2)] = null);

(statearr_28733_28847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (2))){
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28731__$1,(4),from);
} else {
if((state_val_28732 === (3))){
var inst_28729 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28731__$1,inst_28729);
} else {
if((state_val_28732 === (4))){
var inst_28712 = (state_28731[(7)]);
var inst_28712__$1 = (state_28731[(2)]);
var inst_28713 = (inst_28712__$1 == null);
var state_28731__$1 = (function (){var statearr_28734 = state_28731;
(statearr_28734[(7)] = inst_28712__$1);

return statearr_28734;
})();
if(cljs.core.truth_(inst_28713)){
var statearr_28735_28848 = state_28731__$1;
(statearr_28735_28848[(1)] = (5));

} else {
var statearr_28736_28849 = state_28731__$1;
(statearr_28736_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (5))){
var inst_28715 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28731__$1 = state_28731;
var statearr_28737_28850 = state_28731__$1;
(statearr_28737_28850[(2)] = inst_28715);

(statearr_28737_28850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (6))){
var inst_28717 = (state_28731[(8)]);
var inst_28712 = (state_28731[(7)]);
var inst_28717__$1 = cljs.core.async.chan.call(null,(1));
var inst_28718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28719 = [inst_28712,inst_28717__$1];
var inst_28720 = (new cljs.core.PersistentVector(null,2,(5),inst_28718,inst_28719,null));
var state_28731__$1 = (function (){var statearr_28738 = state_28731;
(statearr_28738[(8)] = inst_28717__$1);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28731__$1,(8),jobs,inst_28720);
} else {
if((state_val_28732 === (7))){
var inst_28727 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28739_28851 = state_28731__$1;
(statearr_28739_28851[(2)] = inst_28727);

(statearr_28739_28851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (8))){
var inst_28717 = (state_28731[(8)]);
var inst_28722 = (state_28731[(2)]);
var state_28731__$1 = (function (){var statearr_28740 = state_28731;
(statearr_28740[(9)] = inst_28722);

return statearr_28740;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28731__$1,(9),results,inst_28717);
} else {
if((state_val_28732 === (9))){
var inst_28724 = (state_28731[(2)]);
var state_28731__$1 = (function (){var statearr_28741 = state_28731;
(statearr_28741[(10)] = inst_28724);

return statearr_28741;
})();
var statearr_28742_28852 = state_28731__$1;
(statearr_28742_28852[(2)] = null);

(statearr_28742_28852[(1)] = (2));


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
});})(c__28262__auto___28846,jobs,results,process,async))
;
return ((function (switch__28150__auto__,c__28262__auto___28846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_28746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_28746[(1)] = (1));

return statearr_28746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_28731){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28747){if((e28747 instanceof Object)){
var ex__28154__auto__ = e28747;
var statearr_28748_28853 = state_28731;
(statearr_28748_28853[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28854 = state_28731;
state_28731 = G__28854;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_28731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_28731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___28846,jobs,results,process,async))
})();
var state__28264__auto__ = (function (){var statearr_28749 = f__28263__auto__.call(null);
(statearr_28749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___28846);

return statearr_28749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___28846,jobs,results,process,async))
);


var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__,jobs,results,process,async){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__,jobs,results,process,async){
return (function (state_28787){
var state_val_28788 = (state_28787[(1)]);
if((state_val_28788 === (7))){
var inst_28783 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
var statearr_28789_28855 = state_28787__$1;
(statearr_28789_28855[(2)] = inst_28783);

(statearr_28789_28855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (20))){
var state_28787__$1 = state_28787;
var statearr_28790_28856 = state_28787__$1;
(statearr_28790_28856[(2)] = null);

(statearr_28790_28856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (1))){
var state_28787__$1 = state_28787;
var statearr_28791_28857 = state_28787__$1;
(statearr_28791_28857[(2)] = null);

(statearr_28791_28857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (4))){
var inst_28752 = (state_28787[(7)]);
var inst_28752__$1 = (state_28787[(2)]);
var inst_28753 = (inst_28752__$1 == null);
var state_28787__$1 = (function (){var statearr_28792 = state_28787;
(statearr_28792[(7)] = inst_28752__$1);

return statearr_28792;
})();
if(cljs.core.truth_(inst_28753)){
var statearr_28793_28858 = state_28787__$1;
(statearr_28793_28858[(1)] = (5));

} else {
var statearr_28794_28859 = state_28787__$1;
(statearr_28794_28859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (15))){
var inst_28765 = (state_28787[(8)]);
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28787__$1,(18),to,inst_28765);
} else {
if((state_val_28788 === (21))){
var inst_28778 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
var statearr_28795_28860 = state_28787__$1;
(statearr_28795_28860[(2)] = inst_28778);

(statearr_28795_28860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (13))){
var inst_28780 = (state_28787[(2)]);
var state_28787__$1 = (function (){var statearr_28796 = state_28787;
(statearr_28796[(9)] = inst_28780);

return statearr_28796;
})();
var statearr_28797_28861 = state_28787__$1;
(statearr_28797_28861[(2)] = null);

(statearr_28797_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (6))){
var inst_28752 = (state_28787[(7)]);
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28787__$1,(11),inst_28752);
} else {
if((state_val_28788 === (17))){
var inst_28773 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
if(cljs.core.truth_(inst_28773)){
var statearr_28798_28862 = state_28787__$1;
(statearr_28798_28862[(1)] = (19));

} else {
var statearr_28799_28863 = state_28787__$1;
(statearr_28799_28863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (3))){
var inst_28785 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28787__$1,inst_28785);
} else {
if((state_val_28788 === (12))){
var inst_28762 = (state_28787[(10)]);
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28787__$1,(14),inst_28762);
} else {
if((state_val_28788 === (2))){
var state_28787__$1 = state_28787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28787__$1,(4),results);
} else {
if((state_val_28788 === (19))){
var state_28787__$1 = state_28787;
var statearr_28800_28864 = state_28787__$1;
(statearr_28800_28864[(2)] = null);

(statearr_28800_28864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (11))){
var inst_28762 = (state_28787[(2)]);
var state_28787__$1 = (function (){var statearr_28801 = state_28787;
(statearr_28801[(10)] = inst_28762);

return statearr_28801;
})();
var statearr_28802_28865 = state_28787__$1;
(statearr_28802_28865[(2)] = null);

(statearr_28802_28865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (9))){
var state_28787__$1 = state_28787;
var statearr_28803_28866 = state_28787__$1;
(statearr_28803_28866[(2)] = null);

(statearr_28803_28866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (5))){
var state_28787__$1 = state_28787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28804_28867 = state_28787__$1;
(statearr_28804_28867[(1)] = (8));

} else {
var statearr_28805_28868 = state_28787__$1;
(statearr_28805_28868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (14))){
var inst_28765 = (state_28787[(8)]);
var inst_28767 = (state_28787[(11)]);
var inst_28765__$1 = (state_28787[(2)]);
var inst_28766 = (inst_28765__$1 == null);
var inst_28767__$1 = cljs.core.not.call(null,inst_28766);
var state_28787__$1 = (function (){var statearr_28806 = state_28787;
(statearr_28806[(8)] = inst_28765__$1);

(statearr_28806[(11)] = inst_28767__$1);

return statearr_28806;
})();
if(inst_28767__$1){
var statearr_28807_28869 = state_28787__$1;
(statearr_28807_28869[(1)] = (15));

} else {
var statearr_28808_28870 = state_28787__$1;
(statearr_28808_28870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (16))){
var inst_28767 = (state_28787[(11)]);
var state_28787__$1 = state_28787;
var statearr_28809_28871 = state_28787__$1;
(statearr_28809_28871[(2)] = inst_28767);

(statearr_28809_28871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (10))){
var inst_28759 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
var statearr_28810_28872 = state_28787__$1;
(statearr_28810_28872[(2)] = inst_28759);

(statearr_28810_28872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (18))){
var inst_28770 = (state_28787[(2)]);
var state_28787__$1 = state_28787;
var statearr_28811_28873 = state_28787__$1;
(statearr_28811_28873[(2)] = inst_28770);

(statearr_28811_28873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28788 === (8))){
var inst_28756 = cljs.core.async.close_BANG_.call(null,to);
var state_28787__$1 = state_28787;
var statearr_28812_28874 = state_28787__$1;
(statearr_28812_28874[(2)] = inst_28756);

(statearr_28812_28874[(1)] = (10));


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
});})(c__28262__auto__,jobs,results,process,async))
;
return ((function (switch__28150__auto__,c__28262__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_28816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__);

(statearr_28816[(1)] = (1));

return statearr_28816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1 = (function (state_28787){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28817){if((e28817 instanceof Object)){
var ex__28154__auto__ = e28817;
var statearr_28818_28875 = state_28787;
(statearr_28818_28875[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28876 = state_28787;
state_28787 = G__28876;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__ = function(state_28787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1.call(this,state_28787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__,jobs,results,process,async))
})();
var state__28264__auto__ = (function (){var statearr_28819 = f__28263__auto__.call(null);
(statearr_28819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_28819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__,jobs,results,process,async))
);

return c__28262__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28877 = [];
var len__27165__auto___28880 = arguments.length;
var i__27166__auto___28881 = (0);
while(true){
if((i__27166__auto___28881 < len__27165__auto___28880)){
args28877.push((arguments[i__27166__auto___28881]));

var G__28882 = (i__27166__auto___28881 + (1));
i__27166__auto___28881 = G__28882;
continue;
} else {
}
break;
}

var G__28879 = args28877.length;
switch (G__28879) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28877.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28884 = [];
var len__27165__auto___28887 = arguments.length;
var i__27166__auto___28888 = (0);
while(true){
if((i__27166__auto___28888 < len__27165__auto___28887)){
args28884.push((arguments[i__27166__auto___28888]));

var G__28889 = (i__27166__auto___28888 + (1));
i__27166__auto___28888 = G__28889;
continue;
} else {
}
break;
}

var G__28886 = args28884.length;
switch (G__28886) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28884.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28891 = [];
var len__27165__auto___28944 = arguments.length;
var i__27166__auto___28945 = (0);
while(true){
if((i__27166__auto___28945 < len__27165__auto___28944)){
args28891.push((arguments[i__27166__auto___28945]));

var G__28946 = (i__27166__auto___28945 + (1));
i__27166__auto___28945 = G__28946;
continue;
} else {
}
break;
}

var G__28893 = args28891.length;
switch (G__28893) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28891.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28262__auto___28948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___28948,tc,fc){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___28948,tc,fc){
return (function (state_28919){
var state_val_28920 = (state_28919[(1)]);
if((state_val_28920 === (7))){
var inst_28915 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28921_28949 = state_28919__$1;
(statearr_28921_28949[(2)] = inst_28915);

(statearr_28921_28949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (1))){
var state_28919__$1 = state_28919;
var statearr_28922_28950 = state_28919__$1;
(statearr_28922_28950[(2)] = null);

(statearr_28922_28950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (4))){
var inst_28896 = (state_28919[(7)]);
var inst_28896__$1 = (state_28919[(2)]);
var inst_28897 = (inst_28896__$1 == null);
var state_28919__$1 = (function (){var statearr_28923 = state_28919;
(statearr_28923[(7)] = inst_28896__$1);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28897)){
var statearr_28924_28951 = state_28919__$1;
(statearr_28924_28951[(1)] = (5));

} else {
var statearr_28925_28952 = state_28919__$1;
(statearr_28925_28952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (13))){
var state_28919__$1 = state_28919;
var statearr_28926_28953 = state_28919__$1;
(statearr_28926_28953[(2)] = null);

(statearr_28926_28953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (6))){
var inst_28896 = (state_28919[(7)]);
var inst_28902 = p.call(null,inst_28896);
var state_28919__$1 = state_28919;
if(cljs.core.truth_(inst_28902)){
var statearr_28927_28954 = state_28919__$1;
(statearr_28927_28954[(1)] = (9));

} else {
var statearr_28928_28955 = state_28919__$1;
(statearr_28928_28955[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (3))){
var inst_28917 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28919__$1,inst_28917);
} else {
if((state_val_28920 === (12))){
var state_28919__$1 = state_28919;
var statearr_28929_28956 = state_28919__$1;
(statearr_28929_28956[(2)] = null);

(statearr_28929_28956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (2))){
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28919__$1,(4),ch);
} else {
if((state_val_28920 === (11))){
var inst_28896 = (state_28919[(7)]);
var inst_28906 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28919__$1,(8),inst_28906,inst_28896);
} else {
if((state_val_28920 === (9))){
var state_28919__$1 = state_28919;
var statearr_28930_28957 = state_28919__$1;
(statearr_28930_28957[(2)] = tc);

(statearr_28930_28957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (5))){
var inst_28899 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28900 = cljs.core.async.close_BANG_.call(null,fc);
var state_28919__$1 = (function (){var statearr_28931 = state_28919;
(statearr_28931[(8)] = inst_28899);

return statearr_28931;
})();
var statearr_28932_28958 = state_28919__$1;
(statearr_28932_28958[(2)] = inst_28900);

(statearr_28932_28958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (14))){
var inst_28913 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28933_28959 = state_28919__$1;
(statearr_28933_28959[(2)] = inst_28913);

(statearr_28933_28959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (10))){
var state_28919__$1 = state_28919;
var statearr_28934_28960 = state_28919__$1;
(statearr_28934_28960[(2)] = fc);

(statearr_28934_28960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (8))){
var inst_28908 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
if(cljs.core.truth_(inst_28908)){
var statearr_28935_28961 = state_28919__$1;
(statearr_28935_28961[(1)] = (12));

} else {
var statearr_28936_28962 = state_28919__$1;
(statearr_28936_28962[(1)] = (13));

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
});})(c__28262__auto___28948,tc,fc))
;
return ((function (switch__28150__auto__,c__28262__auto___28948,tc,fc){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_28940 = [null,null,null,null,null,null,null,null,null];
(statearr_28940[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_28940[(1)] = (1));

return statearr_28940;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_28919){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_28919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e28941){if((e28941 instanceof Object)){
var ex__28154__auto__ = e28941;
var statearr_28942_28963 = state_28919;
(statearr_28942_28963[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28964 = state_28919;
state_28919 = G__28964;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_28919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_28919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___28948,tc,fc))
})();
var state__28264__auto__ = (function (){var statearr_28943 = f__28263__auto__.call(null);
(statearr_28943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___28948);

return statearr_28943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___28948,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__){
return (function (state_29028){
var state_val_29029 = (state_29028[(1)]);
if((state_val_29029 === (7))){
var inst_29024 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29030_29051 = state_29028__$1;
(statearr_29030_29051[(2)] = inst_29024);

(statearr_29030_29051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (1))){
var inst_29008 = init;
var state_29028__$1 = (function (){var statearr_29031 = state_29028;
(statearr_29031[(7)] = inst_29008);

return statearr_29031;
})();
var statearr_29032_29052 = state_29028__$1;
(statearr_29032_29052[(2)] = null);

(statearr_29032_29052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (4))){
var inst_29011 = (state_29028[(8)]);
var inst_29011__$1 = (state_29028[(2)]);
var inst_29012 = (inst_29011__$1 == null);
var state_29028__$1 = (function (){var statearr_29033 = state_29028;
(statearr_29033[(8)] = inst_29011__$1);

return statearr_29033;
})();
if(cljs.core.truth_(inst_29012)){
var statearr_29034_29053 = state_29028__$1;
(statearr_29034_29053[(1)] = (5));

} else {
var statearr_29035_29054 = state_29028__$1;
(statearr_29035_29054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (6))){
var inst_29008 = (state_29028[(7)]);
var inst_29015 = (state_29028[(9)]);
var inst_29011 = (state_29028[(8)]);
var inst_29015__$1 = f.call(null,inst_29008,inst_29011);
var inst_29016 = cljs.core.reduced_QMARK_.call(null,inst_29015__$1);
var state_29028__$1 = (function (){var statearr_29036 = state_29028;
(statearr_29036[(9)] = inst_29015__$1);

return statearr_29036;
})();
if(inst_29016){
var statearr_29037_29055 = state_29028__$1;
(statearr_29037_29055[(1)] = (8));

} else {
var statearr_29038_29056 = state_29028__$1;
(statearr_29038_29056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (3))){
var inst_29026 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29028__$1,inst_29026);
} else {
if((state_val_29029 === (2))){
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29028__$1,(4),ch);
} else {
if((state_val_29029 === (9))){
var inst_29015 = (state_29028[(9)]);
var inst_29008 = inst_29015;
var state_29028__$1 = (function (){var statearr_29039 = state_29028;
(statearr_29039[(7)] = inst_29008);

return statearr_29039;
})();
var statearr_29040_29057 = state_29028__$1;
(statearr_29040_29057[(2)] = null);

(statearr_29040_29057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (5))){
var inst_29008 = (state_29028[(7)]);
var state_29028__$1 = state_29028;
var statearr_29041_29058 = state_29028__$1;
(statearr_29041_29058[(2)] = inst_29008);

(statearr_29041_29058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (10))){
var inst_29022 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29042_29059 = state_29028__$1;
(statearr_29042_29059[(2)] = inst_29022);

(statearr_29042_29059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (8))){
var inst_29015 = (state_29028[(9)]);
var inst_29018 = cljs.core.deref.call(null,inst_29015);
var state_29028__$1 = state_29028;
var statearr_29043_29060 = state_29028__$1;
(statearr_29043_29060[(2)] = inst_29018);

(statearr_29043_29060[(1)] = (10));


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
});})(c__28262__auto__))
;
return ((function (switch__28150__auto__,c__28262__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28151__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28151__auto____0 = (function (){
var statearr_29047 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29047[(0)] = cljs$core$async$reduce_$_state_machine__28151__auto__);

(statearr_29047[(1)] = (1));

return statearr_29047;
});
var cljs$core$async$reduce_$_state_machine__28151__auto____1 = (function (state_29028){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_29028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e29048){if((e29048 instanceof Object)){
var ex__28154__auto__ = e29048;
var statearr_29049_29061 = state_29028;
(statearr_29049_29061[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29062 = state_29028;
state_29028 = G__29062;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28151__auto__ = function(state_29028){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28151__auto____1.call(this,state_29028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28151__auto____0;
cljs$core$async$reduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28151__auto____1;
return cljs$core$async$reduce_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__))
})();
var state__28264__auto__ = (function (){var statearr_29050 = f__28263__auto__.call(null);
(statearr_29050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_29050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__))
);

return c__28262__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__,f__$1){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__,f__$1){
return (function (state_29082){
var state_val_29083 = (state_29082[(1)]);
if((state_val_29083 === (1))){
var inst_29077 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29082__$1,(2),inst_29077);
} else {
if((state_val_29083 === (2))){
var inst_29079 = (state_29082[(2)]);
var inst_29080 = f__$1.call(null,inst_29079);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29082__$1,inst_29080);
} else {
return null;
}
}
});})(c__28262__auto__,f__$1))
;
return ((function (switch__28150__auto__,c__28262__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28151__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28151__auto____0 = (function (){
var statearr_29087 = [null,null,null,null,null,null,null];
(statearr_29087[(0)] = cljs$core$async$transduce_$_state_machine__28151__auto__);

(statearr_29087[(1)] = (1));

return statearr_29087;
});
var cljs$core$async$transduce_$_state_machine__28151__auto____1 = (function (state_29082){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_29082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e29088){if((e29088 instanceof Object)){
var ex__28154__auto__ = e29088;
var statearr_29089_29091 = state_29082;
(statearr_29089_29091[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29092 = state_29082;
state_29082 = G__29092;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28151__auto__ = function(state_29082){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28151__auto____1.call(this,state_29082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28151__auto____0;
cljs$core$async$transduce_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28151__auto____1;
return cljs$core$async$transduce_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__,f__$1))
})();
var state__28264__auto__ = (function (){var statearr_29090 = f__28263__auto__.call(null);
(statearr_29090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_29090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__,f__$1))
);

return c__28262__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29093 = [];
var len__27165__auto___29145 = arguments.length;
var i__27166__auto___29146 = (0);
while(true){
if((i__27166__auto___29146 < len__27165__auto___29145)){
args29093.push((arguments[i__27166__auto___29146]));

var G__29147 = (i__27166__auto___29146 + (1));
i__27166__auto___29146 = G__29147;
continue;
} else {
}
break;
}

var G__29095 = args29093.length;
switch (G__29095) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29093.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__){
return (function (state_29120){
var state_val_29121 = (state_29120[(1)]);
if((state_val_29121 === (7))){
var inst_29102 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29122_29149 = state_29120__$1;
(statearr_29122_29149[(2)] = inst_29102);

(statearr_29122_29149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (1))){
var inst_29096 = cljs.core.seq.call(null,coll);
var inst_29097 = inst_29096;
var state_29120__$1 = (function (){var statearr_29123 = state_29120;
(statearr_29123[(7)] = inst_29097);

return statearr_29123;
})();
var statearr_29124_29150 = state_29120__$1;
(statearr_29124_29150[(2)] = null);

(statearr_29124_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (4))){
var inst_29097 = (state_29120[(7)]);
var inst_29100 = cljs.core.first.call(null,inst_29097);
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29120__$1,(7),ch,inst_29100);
} else {
if((state_val_29121 === (13))){
var inst_29114 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29125_29151 = state_29120__$1;
(statearr_29125_29151[(2)] = inst_29114);

(statearr_29125_29151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (6))){
var inst_29105 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
if(cljs.core.truth_(inst_29105)){
var statearr_29126_29152 = state_29120__$1;
(statearr_29126_29152[(1)] = (8));

} else {
var statearr_29127_29153 = state_29120__$1;
(statearr_29127_29153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (3))){
var inst_29118 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29120__$1,inst_29118);
} else {
if((state_val_29121 === (12))){
var state_29120__$1 = state_29120;
var statearr_29128_29154 = state_29120__$1;
(statearr_29128_29154[(2)] = null);

(statearr_29128_29154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (2))){
var inst_29097 = (state_29120[(7)]);
var state_29120__$1 = state_29120;
if(cljs.core.truth_(inst_29097)){
var statearr_29129_29155 = state_29120__$1;
(statearr_29129_29155[(1)] = (4));

} else {
var statearr_29130_29156 = state_29120__$1;
(statearr_29130_29156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (11))){
var inst_29111 = cljs.core.async.close_BANG_.call(null,ch);
var state_29120__$1 = state_29120;
var statearr_29131_29157 = state_29120__$1;
(statearr_29131_29157[(2)] = inst_29111);

(statearr_29131_29157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (9))){
var state_29120__$1 = state_29120;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29132_29158 = state_29120__$1;
(statearr_29132_29158[(1)] = (11));

} else {
var statearr_29133_29159 = state_29120__$1;
(statearr_29133_29159[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (5))){
var inst_29097 = (state_29120[(7)]);
var state_29120__$1 = state_29120;
var statearr_29134_29160 = state_29120__$1;
(statearr_29134_29160[(2)] = inst_29097);

(statearr_29134_29160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (10))){
var inst_29116 = (state_29120[(2)]);
var state_29120__$1 = state_29120;
var statearr_29135_29161 = state_29120__$1;
(statearr_29135_29161[(2)] = inst_29116);

(statearr_29135_29161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29121 === (8))){
var inst_29097 = (state_29120[(7)]);
var inst_29107 = cljs.core.next.call(null,inst_29097);
var inst_29097__$1 = inst_29107;
var state_29120__$1 = (function (){var statearr_29136 = state_29120;
(statearr_29136[(7)] = inst_29097__$1);

return statearr_29136;
})();
var statearr_29137_29162 = state_29120__$1;
(statearr_29137_29162[(2)] = null);

(statearr_29137_29162[(1)] = (2));


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
});})(c__28262__auto__))
;
return ((function (switch__28150__auto__,c__28262__auto__){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_29120){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_29120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e29142){if((e29142 instanceof Object)){
var ex__28154__auto__ = e29142;
var statearr_29143_29163 = state_29120;
(statearr_29143_29163[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29164 = state_29120;
state_29120 = G__29164;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_29120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_29120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__))
})();
var state__28264__auto__ = (function (){var statearr_29144 = f__28263__auto__.call(null);
(statearr_29144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__))
);

return c__28262__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26753__auto__ = (((_ == null))?null:_);
var m__26754__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,_);
} else {
var m__26754__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26754__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m,ch);
} else {
var m__26754__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m);
} else {
var m__26754__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29390 = (function (mult,ch,cs,meta29391){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29391 = meta29391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29392,meta29391__$1){
var self__ = this;
var _29392__$1 = this;
return (new cljs.core.async.t_cljs$core$async29390(self__.mult,self__.ch,self__.cs,meta29391__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29392){
var self__ = this;
var _29392__$1 = this;
return self__.meta29391;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29391","meta29391",208644016,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29390";

cljs.core.async.t_cljs$core$async29390.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async29390");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29390 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29390(mult__$1,ch__$1,cs__$1,meta29391){
return (new cljs.core.async.t_cljs$core$async29390(mult__$1,ch__$1,cs__$1,meta29391));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29390(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28262__auto___29615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___29615,cs,m,dchan,dctr,done){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___29615,cs,m,dchan,dctr,done){
return (function (state_29527){
var state_val_29528 = (state_29527[(1)]);
if((state_val_29528 === (7))){
var inst_29523 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29529_29616 = state_29527__$1;
(statearr_29529_29616[(2)] = inst_29523);

(statearr_29529_29616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (20))){
var inst_29426 = (state_29527[(7)]);
var inst_29438 = cljs.core.first.call(null,inst_29426);
var inst_29439 = cljs.core.nth.call(null,inst_29438,(0),null);
var inst_29440 = cljs.core.nth.call(null,inst_29438,(1),null);
var state_29527__$1 = (function (){var statearr_29530 = state_29527;
(statearr_29530[(8)] = inst_29439);

return statearr_29530;
})();
if(cljs.core.truth_(inst_29440)){
var statearr_29531_29617 = state_29527__$1;
(statearr_29531_29617[(1)] = (22));

} else {
var statearr_29532_29618 = state_29527__$1;
(statearr_29532_29618[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (27))){
var inst_29468 = (state_29527[(9)]);
var inst_29395 = (state_29527[(10)]);
var inst_29475 = (state_29527[(11)]);
var inst_29470 = (state_29527[(12)]);
var inst_29475__$1 = cljs.core._nth.call(null,inst_29468,inst_29470);
var inst_29476 = cljs.core.async.put_BANG_.call(null,inst_29475__$1,inst_29395,done);
var state_29527__$1 = (function (){var statearr_29533 = state_29527;
(statearr_29533[(11)] = inst_29475__$1);

return statearr_29533;
})();
if(cljs.core.truth_(inst_29476)){
var statearr_29534_29619 = state_29527__$1;
(statearr_29534_29619[(1)] = (30));

} else {
var statearr_29535_29620 = state_29527__$1;
(statearr_29535_29620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (1))){
var state_29527__$1 = state_29527;
var statearr_29536_29621 = state_29527__$1;
(statearr_29536_29621[(2)] = null);

(statearr_29536_29621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (24))){
var inst_29426 = (state_29527[(7)]);
var inst_29445 = (state_29527[(2)]);
var inst_29446 = cljs.core.next.call(null,inst_29426);
var inst_29404 = inst_29446;
var inst_29405 = null;
var inst_29406 = (0);
var inst_29407 = (0);
var state_29527__$1 = (function (){var statearr_29537 = state_29527;
(statearr_29537[(13)] = inst_29407);

(statearr_29537[(14)] = inst_29404);

(statearr_29537[(15)] = inst_29445);

(statearr_29537[(16)] = inst_29406);

(statearr_29537[(17)] = inst_29405);

return statearr_29537;
})();
var statearr_29538_29622 = state_29527__$1;
(statearr_29538_29622[(2)] = null);

(statearr_29538_29622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (39))){
var state_29527__$1 = state_29527;
var statearr_29542_29623 = state_29527__$1;
(statearr_29542_29623[(2)] = null);

(statearr_29542_29623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (4))){
var inst_29395 = (state_29527[(10)]);
var inst_29395__$1 = (state_29527[(2)]);
var inst_29396 = (inst_29395__$1 == null);
var state_29527__$1 = (function (){var statearr_29543 = state_29527;
(statearr_29543[(10)] = inst_29395__$1);

return statearr_29543;
})();
if(cljs.core.truth_(inst_29396)){
var statearr_29544_29624 = state_29527__$1;
(statearr_29544_29624[(1)] = (5));

} else {
var statearr_29545_29625 = state_29527__$1;
(statearr_29545_29625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (15))){
var inst_29407 = (state_29527[(13)]);
var inst_29404 = (state_29527[(14)]);
var inst_29406 = (state_29527[(16)]);
var inst_29405 = (state_29527[(17)]);
var inst_29422 = (state_29527[(2)]);
var inst_29423 = (inst_29407 + (1));
var tmp29539 = inst_29404;
var tmp29540 = inst_29406;
var tmp29541 = inst_29405;
var inst_29404__$1 = tmp29539;
var inst_29405__$1 = tmp29541;
var inst_29406__$1 = tmp29540;
var inst_29407__$1 = inst_29423;
var state_29527__$1 = (function (){var statearr_29546 = state_29527;
(statearr_29546[(13)] = inst_29407__$1);

(statearr_29546[(14)] = inst_29404__$1);

(statearr_29546[(16)] = inst_29406__$1);

(statearr_29546[(18)] = inst_29422);

(statearr_29546[(17)] = inst_29405__$1);

return statearr_29546;
})();
var statearr_29547_29626 = state_29527__$1;
(statearr_29547_29626[(2)] = null);

(statearr_29547_29626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (21))){
var inst_29449 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29551_29627 = state_29527__$1;
(statearr_29551_29627[(2)] = inst_29449);

(statearr_29551_29627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (31))){
var inst_29475 = (state_29527[(11)]);
var inst_29479 = done.call(null,null);
var inst_29480 = cljs.core.async.untap_STAR_.call(null,m,inst_29475);
var state_29527__$1 = (function (){var statearr_29552 = state_29527;
(statearr_29552[(19)] = inst_29479);

return statearr_29552;
})();
var statearr_29553_29628 = state_29527__$1;
(statearr_29553_29628[(2)] = inst_29480);

(statearr_29553_29628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (32))){
var inst_29468 = (state_29527[(9)]);
var inst_29467 = (state_29527[(20)]);
var inst_29469 = (state_29527[(21)]);
var inst_29470 = (state_29527[(12)]);
var inst_29482 = (state_29527[(2)]);
var inst_29483 = (inst_29470 + (1));
var tmp29548 = inst_29468;
var tmp29549 = inst_29467;
var tmp29550 = inst_29469;
var inst_29467__$1 = tmp29549;
var inst_29468__$1 = tmp29548;
var inst_29469__$1 = tmp29550;
var inst_29470__$1 = inst_29483;
var state_29527__$1 = (function (){var statearr_29554 = state_29527;
(statearr_29554[(9)] = inst_29468__$1);

(statearr_29554[(20)] = inst_29467__$1);

(statearr_29554[(21)] = inst_29469__$1);

(statearr_29554[(12)] = inst_29470__$1);

(statearr_29554[(22)] = inst_29482);

return statearr_29554;
})();
var statearr_29555_29629 = state_29527__$1;
(statearr_29555_29629[(2)] = null);

(statearr_29555_29629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (40))){
var inst_29495 = (state_29527[(23)]);
var inst_29499 = done.call(null,null);
var inst_29500 = cljs.core.async.untap_STAR_.call(null,m,inst_29495);
var state_29527__$1 = (function (){var statearr_29556 = state_29527;
(statearr_29556[(24)] = inst_29499);

return statearr_29556;
})();
var statearr_29557_29630 = state_29527__$1;
(statearr_29557_29630[(2)] = inst_29500);

(statearr_29557_29630[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (33))){
var inst_29486 = (state_29527[(25)]);
var inst_29488 = cljs.core.chunked_seq_QMARK_.call(null,inst_29486);
var state_29527__$1 = state_29527;
if(inst_29488){
var statearr_29558_29631 = state_29527__$1;
(statearr_29558_29631[(1)] = (36));

} else {
var statearr_29559_29632 = state_29527__$1;
(statearr_29559_29632[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (13))){
var inst_29416 = (state_29527[(26)]);
var inst_29419 = cljs.core.async.close_BANG_.call(null,inst_29416);
var state_29527__$1 = state_29527;
var statearr_29560_29633 = state_29527__$1;
(statearr_29560_29633[(2)] = inst_29419);

(statearr_29560_29633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (22))){
var inst_29439 = (state_29527[(8)]);
var inst_29442 = cljs.core.async.close_BANG_.call(null,inst_29439);
var state_29527__$1 = state_29527;
var statearr_29561_29634 = state_29527__$1;
(statearr_29561_29634[(2)] = inst_29442);

(statearr_29561_29634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (36))){
var inst_29486 = (state_29527[(25)]);
var inst_29490 = cljs.core.chunk_first.call(null,inst_29486);
var inst_29491 = cljs.core.chunk_rest.call(null,inst_29486);
var inst_29492 = cljs.core.count.call(null,inst_29490);
var inst_29467 = inst_29491;
var inst_29468 = inst_29490;
var inst_29469 = inst_29492;
var inst_29470 = (0);
var state_29527__$1 = (function (){var statearr_29562 = state_29527;
(statearr_29562[(9)] = inst_29468);

(statearr_29562[(20)] = inst_29467);

(statearr_29562[(21)] = inst_29469);

(statearr_29562[(12)] = inst_29470);

return statearr_29562;
})();
var statearr_29563_29635 = state_29527__$1;
(statearr_29563_29635[(2)] = null);

(statearr_29563_29635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (41))){
var inst_29486 = (state_29527[(25)]);
var inst_29502 = (state_29527[(2)]);
var inst_29503 = cljs.core.next.call(null,inst_29486);
var inst_29467 = inst_29503;
var inst_29468 = null;
var inst_29469 = (0);
var inst_29470 = (0);
var state_29527__$1 = (function (){var statearr_29564 = state_29527;
(statearr_29564[(9)] = inst_29468);

(statearr_29564[(27)] = inst_29502);

(statearr_29564[(20)] = inst_29467);

(statearr_29564[(21)] = inst_29469);

(statearr_29564[(12)] = inst_29470);

return statearr_29564;
})();
var statearr_29565_29636 = state_29527__$1;
(statearr_29565_29636[(2)] = null);

(statearr_29565_29636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (43))){
var state_29527__$1 = state_29527;
var statearr_29566_29637 = state_29527__$1;
(statearr_29566_29637[(2)] = null);

(statearr_29566_29637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (29))){
var inst_29511 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29567_29638 = state_29527__$1;
(statearr_29567_29638[(2)] = inst_29511);

(statearr_29567_29638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (44))){
var inst_29520 = (state_29527[(2)]);
var state_29527__$1 = (function (){var statearr_29568 = state_29527;
(statearr_29568[(28)] = inst_29520);

return statearr_29568;
})();
var statearr_29569_29639 = state_29527__$1;
(statearr_29569_29639[(2)] = null);

(statearr_29569_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (6))){
var inst_29459 = (state_29527[(29)]);
var inst_29458 = cljs.core.deref.call(null,cs);
var inst_29459__$1 = cljs.core.keys.call(null,inst_29458);
var inst_29460 = cljs.core.count.call(null,inst_29459__$1);
var inst_29461 = cljs.core.reset_BANG_.call(null,dctr,inst_29460);
var inst_29466 = cljs.core.seq.call(null,inst_29459__$1);
var inst_29467 = inst_29466;
var inst_29468 = null;
var inst_29469 = (0);
var inst_29470 = (0);
var state_29527__$1 = (function (){var statearr_29570 = state_29527;
(statearr_29570[(9)] = inst_29468);

(statearr_29570[(20)] = inst_29467);

(statearr_29570[(30)] = inst_29461);

(statearr_29570[(29)] = inst_29459__$1);

(statearr_29570[(21)] = inst_29469);

(statearr_29570[(12)] = inst_29470);

return statearr_29570;
})();
var statearr_29571_29640 = state_29527__$1;
(statearr_29571_29640[(2)] = null);

(statearr_29571_29640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (28))){
var inst_29486 = (state_29527[(25)]);
var inst_29467 = (state_29527[(20)]);
var inst_29486__$1 = cljs.core.seq.call(null,inst_29467);
var state_29527__$1 = (function (){var statearr_29572 = state_29527;
(statearr_29572[(25)] = inst_29486__$1);

return statearr_29572;
})();
if(inst_29486__$1){
var statearr_29573_29641 = state_29527__$1;
(statearr_29573_29641[(1)] = (33));

} else {
var statearr_29574_29642 = state_29527__$1;
(statearr_29574_29642[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (25))){
var inst_29469 = (state_29527[(21)]);
var inst_29470 = (state_29527[(12)]);
var inst_29472 = (inst_29470 < inst_29469);
var inst_29473 = inst_29472;
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29473)){
var statearr_29575_29643 = state_29527__$1;
(statearr_29575_29643[(1)] = (27));

} else {
var statearr_29576_29644 = state_29527__$1;
(statearr_29576_29644[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (34))){
var state_29527__$1 = state_29527;
var statearr_29577_29645 = state_29527__$1;
(statearr_29577_29645[(2)] = null);

(statearr_29577_29645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (17))){
var state_29527__$1 = state_29527;
var statearr_29578_29646 = state_29527__$1;
(statearr_29578_29646[(2)] = null);

(statearr_29578_29646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (3))){
var inst_29525 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29527__$1,inst_29525);
} else {
if((state_val_29528 === (12))){
var inst_29454 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29579_29647 = state_29527__$1;
(statearr_29579_29647[(2)] = inst_29454);

(statearr_29579_29647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (2))){
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(4),ch);
} else {
if((state_val_29528 === (23))){
var state_29527__$1 = state_29527;
var statearr_29580_29648 = state_29527__$1;
(statearr_29580_29648[(2)] = null);

(statearr_29580_29648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (35))){
var inst_29509 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29581_29649 = state_29527__$1;
(statearr_29581_29649[(2)] = inst_29509);

(statearr_29581_29649[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (19))){
var inst_29426 = (state_29527[(7)]);
var inst_29430 = cljs.core.chunk_first.call(null,inst_29426);
var inst_29431 = cljs.core.chunk_rest.call(null,inst_29426);
var inst_29432 = cljs.core.count.call(null,inst_29430);
var inst_29404 = inst_29431;
var inst_29405 = inst_29430;
var inst_29406 = inst_29432;
var inst_29407 = (0);
var state_29527__$1 = (function (){var statearr_29582 = state_29527;
(statearr_29582[(13)] = inst_29407);

(statearr_29582[(14)] = inst_29404);

(statearr_29582[(16)] = inst_29406);

(statearr_29582[(17)] = inst_29405);

return statearr_29582;
})();
var statearr_29583_29650 = state_29527__$1;
(statearr_29583_29650[(2)] = null);

(statearr_29583_29650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (11))){
var inst_29404 = (state_29527[(14)]);
var inst_29426 = (state_29527[(7)]);
var inst_29426__$1 = cljs.core.seq.call(null,inst_29404);
var state_29527__$1 = (function (){var statearr_29584 = state_29527;
(statearr_29584[(7)] = inst_29426__$1);

return statearr_29584;
})();
if(inst_29426__$1){
var statearr_29585_29651 = state_29527__$1;
(statearr_29585_29651[(1)] = (16));

} else {
var statearr_29586_29652 = state_29527__$1;
(statearr_29586_29652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (9))){
var inst_29456 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29587_29653 = state_29527__$1;
(statearr_29587_29653[(2)] = inst_29456);

(statearr_29587_29653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (5))){
var inst_29402 = cljs.core.deref.call(null,cs);
var inst_29403 = cljs.core.seq.call(null,inst_29402);
var inst_29404 = inst_29403;
var inst_29405 = null;
var inst_29406 = (0);
var inst_29407 = (0);
var state_29527__$1 = (function (){var statearr_29588 = state_29527;
(statearr_29588[(13)] = inst_29407);

(statearr_29588[(14)] = inst_29404);

(statearr_29588[(16)] = inst_29406);

(statearr_29588[(17)] = inst_29405);

return statearr_29588;
})();
var statearr_29589_29654 = state_29527__$1;
(statearr_29589_29654[(2)] = null);

(statearr_29589_29654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (14))){
var state_29527__$1 = state_29527;
var statearr_29590_29655 = state_29527__$1;
(statearr_29590_29655[(2)] = null);

(statearr_29590_29655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (45))){
var inst_29517 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29591_29656 = state_29527__$1;
(statearr_29591_29656[(2)] = inst_29517);

(statearr_29591_29656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (26))){
var inst_29459 = (state_29527[(29)]);
var inst_29513 = (state_29527[(2)]);
var inst_29514 = cljs.core.seq.call(null,inst_29459);
var state_29527__$1 = (function (){var statearr_29592 = state_29527;
(statearr_29592[(31)] = inst_29513);

return statearr_29592;
})();
if(inst_29514){
var statearr_29593_29657 = state_29527__$1;
(statearr_29593_29657[(1)] = (42));

} else {
var statearr_29594_29658 = state_29527__$1;
(statearr_29594_29658[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (16))){
var inst_29426 = (state_29527[(7)]);
var inst_29428 = cljs.core.chunked_seq_QMARK_.call(null,inst_29426);
var state_29527__$1 = state_29527;
if(inst_29428){
var statearr_29595_29659 = state_29527__$1;
(statearr_29595_29659[(1)] = (19));

} else {
var statearr_29596_29660 = state_29527__$1;
(statearr_29596_29660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (38))){
var inst_29506 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29597_29661 = state_29527__$1;
(statearr_29597_29661[(2)] = inst_29506);

(statearr_29597_29661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (30))){
var state_29527__$1 = state_29527;
var statearr_29598_29662 = state_29527__$1;
(statearr_29598_29662[(2)] = null);

(statearr_29598_29662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (10))){
var inst_29407 = (state_29527[(13)]);
var inst_29405 = (state_29527[(17)]);
var inst_29415 = cljs.core._nth.call(null,inst_29405,inst_29407);
var inst_29416 = cljs.core.nth.call(null,inst_29415,(0),null);
var inst_29417 = cljs.core.nth.call(null,inst_29415,(1),null);
var state_29527__$1 = (function (){var statearr_29599 = state_29527;
(statearr_29599[(26)] = inst_29416);

return statearr_29599;
})();
if(cljs.core.truth_(inst_29417)){
var statearr_29600_29663 = state_29527__$1;
(statearr_29600_29663[(1)] = (13));

} else {
var statearr_29601_29664 = state_29527__$1;
(statearr_29601_29664[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (18))){
var inst_29452 = (state_29527[(2)]);
var state_29527__$1 = state_29527;
var statearr_29602_29665 = state_29527__$1;
(statearr_29602_29665[(2)] = inst_29452);

(statearr_29602_29665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (42))){
var state_29527__$1 = state_29527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29527__$1,(45),dchan);
} else {
if((state_val_29528 === (37))){
var inst_29486 = (state_29527[(25)]);
var inst_29395 = (state_29527[(10)]);
var inst_29495 = (state_29527[(23)]);
var inst_29495__$1 = cljs.core.first.call(null,inst_29486);
var inst_29496 = cljs.core.async.put_BANG_.call(null,inst_29495__$1,inst_29395,done);
var state_29527__$1 = (function (){var statearr_29603 = state_29527;
(statearr_29603[(23)] = inst_29495__$1);

return statearr_29603;
})();
if(cljs.core.truth_(inst_29496)){
var statearr_29604_29666 = state_29527__$1;
(statearr_29604_29666[(1)] = (39));

} else {
var statearr_29605_29667 = state_29527__$1;
(statearr_29605_29667[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29528 === (8))){
var inst_29407 = (state_29527[(13)]);
var inst_29406 = (state_29527[(16)]);
var inst_29409 = (inst_29407 < inst_29406);
var inst_29410 = inst_29409;
var state_29527__$1 = state_29527;
if(cljs.core.truth_(inst_29410)){
var statearr_29606_29668 = state_29527__$1;
(statearr_29606_29668[(1)] = (10));

} else {
var statearr_29607_29669 = state_29527__$1;
(statearr_29607_29669[(1)] = (11));

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
});})(c__28262__auto___29615,cs,m,dchan,dctr,done))
;
return ((function (switch__28150__auto__,c__28262__auto___29615,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28151__auto__ = null;
var cljs$core$async$mult_$_state_machine__28151__auto____0 = (function (){
var statearr_29611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29611[(0)] = cljs$core$async$mult_$_state_machine__28151__auto__);

(statearr_29611[(1)] = (1));

return statearr_29611;
});
var cljs$core$async$mult_$_state_machine__28151__auto____1 = (function (state_29527){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_29527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e29612){if((e29612 instanceof Object)){
var ex__28154__auto__ = e29612;
var statearr_29613_29670 = state_29527;
(statearr_29613_29670[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29671 = state_29527;
state_29527 = G__29671;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28151__auto__ = function(state_29527){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28151__auto____1.call(this,state_29527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28151__auto____0;
cljs$core$async$mult_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28151__auto____1;
return cljs$core$async$mult_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___29615,cs,m,dchan,dctr,done))
})();
var state__28264__auto__ = (function (){var statearr_29614 = f__28263__auto__.call(null);
(statearr_29614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___29615);

return statearr_29614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___29615,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29672 = [];
var len__27165__auto___29675 = arguments.length;
var i__27166__auto___29676 = (0);
while(true){
if((i__27166__auto___29676 < len__27165__auto___29675)){
args29672.push((arguments[i__27166__auto___29676]));

var G__29677 = (i__27166__auto___29676 + (1));
i__27166__auto___29676 = G__29677;
continue;
} else {
}
break;
}

var G__29674 = args29672.length;
switch (G__29674) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29672.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m,ch);
} else {
var m__26754__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m,ch);
} else {
var m__26754__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m);
} else {
var m__26754__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m,state_map);
} else {
var m__26754__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26753__auto__ = (((m == null))?null:m);
var m__26754__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,m,mode);
} else {
var m__26754__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27172__auto__ = [];
var len__27165__auto___29689 = arguments.length;
var i__27166__auto___29690 = (0);
while(true){
if((i__27166__auto___29690 < len__27165__auto___29689)){
args__27172__auto__.push((arguments[i__27166__auto___29690]));

var G__29691 = (i__27166__auto___29690 + (1));
i__27166__auto___29690 = G__29691;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((3) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27173__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29683){
var map__29684 = p__29683;
var map__29684__$1 = ((((!((map__29684 == null)))?((((map__29684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29684):map__29684);
var opts = map__29684__$1;
var statearr_29686_29692 = state;
(statearr_29686_29692[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29684,map__29684__$1,opts){
return (function (val){
var statearr_29687_29693 = state;
(statearr_29687_29693[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29684,map__29684__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29688_29694 = state;
(statearr_29688_29694[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29679){
var G__29680 = cljs.core.first.call(null,seq29679);
var seq29679__$1 = cljs.core.next.call(null,seq29679);
var G__29681 = cljs.core.first.call(null,seq29679__$1);
var seq29679__$2 = cljs.core.next.call(null,seq29679__$1);
var G__29682 = cljs.core.first.call(null,seq29679__$2);
var seq29679__$3 = cljs.core.next.call(null,seq29679__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29680,G__29681,G__29682,seq29679__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29860 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29861){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29861 = meta29861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29862,meta29861__$1){
var self__ = this;
var _29862__$1 = this;
return (new cljs.core.async.t_cljs$core$async29860(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29861__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29862){
var self__ = this;
var _29862__$1 = this;
return self__.meta29861;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29861","meta29861",-158627289,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29860";

cljs.core.async.t_cljs$core$async29860.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async29860");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29860 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29860(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29861){
return (new cljs.core.async.t_cljs$core$async29860(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29861));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29860(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28262__auto___30025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29962){
var state_val_29963 = (state_29962[(1)]);
if((state_val_29963 === (7))){
var inst_29878 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
var statearr_29964_30026 = state_29962__$1;
(statearr_29964_30026[(2)] = inst_29878);

(statearr_29964_30026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (20))){
var inst_29890 = (state_29962[(7)]);
var state_29962__$1 = state_29962;
var statearr_29965_30027 = state_29962__$1;
(statearr_29965_30027[(2)] = inst_29890);

(statearr_29965_30027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (27))){
var state_29962__$1 = state_29962;
var statearr_29966_30028 = state_29962__$1;
(statearr_29966_30028[(2)] = null);

(statearr_29966_30028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (1))){
var inst_29866 = (state_29962[(8)]);
var inst_29866__$1 = calc_state.call(null);
var inst_29868 = (inst_29866__$1 == null);
var inst_29869 = cljs.core.not.call(null,inst_29868);
var state_29962__$1 = (function (){var statearr_29967 = state_29962;
(statearr_29967[(8)] = inst_29866__$1);

return statearr_29967;
})();
if(inst_29869){
var statearr_29968_30029 = state_29962__$1;
(statearr_29968_30029[(1)] = (2));

} else {
var statearr_29969_30030 = state_29962__$1;
(statearr_29969_30030[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (24))){
var inst_29913 = (state_29962[(9)]);
var inst_29922 = (state_29962[(10)]);
var inst_29936 = (state_29962[(11)]);
var inst_29936__$1 = inst_29913.call(null,inst_29922);
var state_29962__$1 = (function (){var statearr_29970 = state_29962;
(statearr_29970[(11)] = inst_29936__$1);

return statearr_29970;
})();
if(cljs.core.truth_(inst_29936__$1)){
var statearr_29971_30031 = state_29962__$1;
(statearr_29971_30031[(1)] = (29));

} else {
var statearr_29972_30032 = state_29962__$1;
(statearr_29972_30032[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (4))){
var inst_29881 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29881)){
var statearr_29973_30033 = state_29962__$1;
(statearr_29973_30033[(1)] = (8));

} else {
var statearr_29974_30034 = state_29962__$1;
(statearr_29974_30034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (15))){
var inst_29907 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29907)){
var statearr_29975_30035 = state_29962__$1;
(statearr_29975_30035[(1)] = (19));

} else {
var statearr_29976_30036 = state_29962__$1;
(statearr_29976_30036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (21))){
var inst_29912 = (state_29962[(12)]);
var inst_29912__$1 = (state_29962[(2)]);
var inst_29913 = cljs.core.get.call(null,inst_29912__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29914 = cljs.core.get.call(null,inst_29912__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29915 = cljs.core.get.call(null,inst_29912__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29962__$1 = (function (){var statearr_29977 = state_29962;
(statearr_29977[(12)] = inst_29912__$1);

(statearr_29977[(9)] = inst_29913);

(statearr_29977[(13)] = inst_29914);

return statearr_29977;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29962__$1,(22),inst_29915);
} else {
if((state_val_29963 === (31))){
var inst_29944 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29944)){
var statearr_29978_30037 = state_29962__$1;
(statearr_29978_30037[(1)] = (32));

} else {
var statearr_29979_30038 = state_29962__$1;
(statearr_29979_30038[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (32))){
var inst_29921 = (state_29962[(14)]);
var state_29962__$1 = state_29962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29962__$1,(35),out,inst_29921);
} else {
if((state_val_29963 === (33))){
var inst_29912 = (state_29962[(12)]);
var inst_29890 = inst_29912;
var state_29962__$1 = (function (){var statearr_29980 = state_29962;
(statearr_29980[(7)] = inst_29890);

return statearr_29980;
})();
var statearr_29981_30039 = state_29962__$1;
(statearr_29981_30039[(2)] = null);

(statearr_29981_30039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (13))){
var inst_29890 = (state_29962[(7)]);
var inst_29897 = inst_29890.cljs$lang$protocol_mask$partition0$;
var inst_29898 = (inst_29897 & (64));
var inst_29899 = inst_29890.cljs$core$ISeq$;
var inst_29900 = (inst_29898) || (inst_29899);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29900)){
var statearr_29982_30040 = state_29962__$1;
(statearr_29982_30040[(1)] = (16));

} else {
var statearr_29983_30041 = state_29962__$1;
(statearr_29983_30041[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (22))){
var inst_29922 = (state_29962[(10)]);
var inst_29921 = (state_29962[(14)]);
var inst_29920 = (state_29962[(2)]);
var inst_29921__$1 = cljs.core.nth.call(null,inst_29920,(0),null);
var inst_29922__$1 = cljs.core.nth.call(null,inst_29920,(1),null);
var inst_29923 = (inst_29921__$1 == null);
var inst_29924 = cljs.core._EQ_.call(null,inst_29922__$1,change);
var inst_29925 = (inst_29923) || (inst_29924);
var state_29962__$1 = (function (){var statearr_29984 = state_29962;
(statearr_29984[(10)] = inst_29922__$1);

(statearr_29984[(14)] = inst_29921__$1);

return statearr_29984;
})();
if(cljs.core.truth_(inst_29925)){
var statearr_29985_30042 = state_29962__$1;
(statearr_29985_30042[(1)] = (23));

} else {
var statearr_29986_30043 = state_29962__$1;
(statearr_29986_30043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (36))){
var inst_29912 = (state_29962[(12)]);
var inst_29890 = inst_29912;
var state_29962__$1 = (function (){var statearr_29987 = state_29962;
(statearr_29987[(7)] = inst_29890);

return statearr_29987;
})();
var statearr_29988_30044 = state_29962__$1;
(statearr_29988_30044[(2)] = null);

(statearr_29988_30044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (29))){
var inst_29936 = (state_29962[(11)]);
var state_29962__$1 = state_29962;
var statearr_29989_30045 = state_29962__$1;
(statearr_29989_30045[(2)] = inst_29936);

(statearr_29989_30045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (6))){
var state_29962__$1 = state_29962;
var statearr_29990_30046 = state_29962__$1;
(statearr_29990_30046[(2)] = false);

(statearr_29990_30046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (28))){
var inst_29932 = (state_29962[(2)]);
var inst_29933 = calc_state.call(null);
var inst_29890 = inst_29933;
var state_29962__$1 = (function (){var statearr_29991 = state_29962;
(statearr_29991[(7)] = inst_29890);

(statearr_29991[(15)] = inst_29932);

return statearr_29991;
})();
var statearr_29992_30047 = state_29962__$1;
(statearr_29992_30047[(2)] = null);

(statearr_29992_30047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (25))){
var inst_29958 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
var statearr_29993_30048 = state_29962__$1;
(statearr_29993_30048[(2)] = inst_29958);

(statearr_29993_30048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (34))){
var inst_29956 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
var statearr_29994_30049 = state_29962__$1;
(statearr_29994_30049[(2)] = inst_29956);

(statearr_29994_30049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (17))){
var state_29962__$1 = state_29962;
var statearr_29995_30050 = state_29962__$1;
(statearr_29995_30050[(2)] = false);

(statearr_29995_30050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (3))){
var state_29962__$1 = state_29962;
var statearr_29996_30051 = state_29962__$1;
(statearr_29996_30051[(2)] = false);

(statearr_29996_30051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (12))){
var inst_29960 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29962__$1,inst_29960);
} else {
if((state_val_29963 === (2))){
var inst_29866 = (state_29962[(8)]);
var inst_29871 = inst_29866.cljs$lang$protocol_mask$partition0$;
var inst_29872 = (inst_29871 & (64));
var inst_29873 = inst_29866.cljs$core$ISeq$;
var inst_29874 = (inst_29872) || (inst_29873);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29874)){
var statearr_29997_30052 = state_29962__$1;
(statearr_29997_30052[(1)] = (5));

} else {
var statearr_29998_30053 = state_29962__$1;
(statearr_29998_30053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (23))){
var inst_29921 = (state_29962[(14)]);
var inst_29927 = (inst_29921 == null);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29927)){
var statearr_29999_30054 = state_29962__$1;
(statearr_29999_30054[(1)] = (26));

} else {
var statearr_30000_30055 = state_29962__$1;
(statearr_30000_30055[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (35))){
var inst_29947 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
if(cljs.core.truth_(inst_29947)){
var statearr_30001_30056 = state_29962__$1;
(statearr_30001_30056[(1)] = (36));

} else {
var statearr_30002_30057 = state_29962__$1;
(statearr_30002_30057[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (19))){
var inst_29890 = (state_29962[(7)]);
var inst_29909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29890);
var state_29962__$1 = state_29962;
var statearr_30003_30058 = state_29962__$1;
(statearr_30003_30058[(2)] = inst_29909);

(statearr_30003_30058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (11))){
var inst_29890 = (state_29962[(7)]);
var inst_29894 = (inst_29890 == null);
var inst_29895 = cljs.core.not.call(null,inst_29894);
var state_29962__$1 = state_29962;
if(inst_29895){
var statearr_30004_30059 = state_29962__$1;
(statearr_30004_30059[(1)] = (13));

} else {
var statearr_30005_30060 = state_29962__$1;
(statearr_30005_30060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (9))){
var inst_29866 = (state_29962[(8)]);
var state_29962__$1 = state_29962;
var statearr_30006_30061 = state_29962__$1;
(statearr_30006_30061[(2)] = inst_29866);

(statearr_30006_30061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (5))){
var state_29962__$1 = state_29962;
var statearr_30007_30062 = state_29962__$1;
(statearr_30007_30062[(2)] = true);

(statearr_30007_30062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (14))){
var state_29962__$1 = state_29962;
var statearr_30008_30063 = state_29962__$1;
(statearr_30008_30063[(2)] = false);

(statearr_30008_30063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (26))){
var inst_29922 = (state_29962[(10)]);
var inst_29929 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29922);
var state_29962__$1 = state_29962;
var statearr_30009_30064 = state_29962__$1;
(statearr_30009_30064[(2)] = inst_29929);

(statearr_30009_30064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (16))){
var state_29962__$1 = state_29962;
var statearr_30010_30065 = state_29962__$1;
(statearr_30010_30065[(2)] = true);

(statearr_30010_30065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (38))){
var inst_29952 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
var statearr_30011_30066 = state_29962__$1;
(statearr_30011_30066[(2)] = inst_29952);

(statearr_30011_30066[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (30))){
var inst_29913 = (state_29962[(9)]);
var inst_29922 = (state_29962[(10)]);
var inst_29914 = (state_29962[(13)]);
var inst_29939 = cljs.core.empty_QMARK_.call(null,inst_29913);
var inst_29940 = inst_29914.call(null,inst_29922);
var inst_29941 = cljs.core.not.call(null,inst_29940);
var inst_29942 = (inst_29939) && (inst_29941);
var state_29962__$1 = state_29962;
var statearr_30012_30067 = state_29962__$1;
(statearr_30012_30067[(2)] = inst_29942);

(statearr_30012_30067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (10))){
var inst_29866 = (state_29962[(8)]);
var inst_29886 = (state_29962[(2)]);
var inst_29887 = cljs.core.get.call(null,inst_29886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29888 = cljs.core.get.call(null,inst_29886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29889 = cljs.core.get.call(null,inst_29886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29890 = inst_29866;
var state_29962__$1 = (function (){var statearr_30013 = state_29962;
(statearr_30013[(16)] = inst_29888);

(statearr_30013[(17)] = inst_29887);

(statearr_30013[(7)] = inst_29890);

(statearr_30013[(18)] = inst_29889);

return statearr_30013;
})();
var statearr_30014_30068 = state_29962__$1;
(statearr_30014_30068[(2)] = null);

(statearr_30014_30068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (18))){
var inst_29904 = (state_29962[(2)]);
var state_29962__$1 = state_29962;
var statearr_30015_30069 = state_29962__$1;
(statearr_30015_30069[(2)] = inst_29904);

(statearr_30015_30069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (37))){
var state_29962__$1 = state_29962;
var statearr_30016_30070 = state_29962__$1;
(statearr_30016_30070[(2)] = null);

(statearr_30016_30070[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29963 === (8))){
var inst_29866 = (state_29962[(8)]);
var inst_29883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29866);
var state_29962__$1 = state_29962;
var statearr_30017_30071 = state_29962__$1;
(statearr_30017_30071[(2)] = inst_29883);

(statearr_30017_30071[(1)] = (10));


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
});})(c__28262__auto___30025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28150__auto__,c__28262__auto___30025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28151__auto__ = null;
var cljs$core$async$mix_$_state_machine__28151__auto____0 = (function (){
var statearr_30021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30021[(0)] = cljs$core$async$mix_$_state_machine__28151__auto__);

(statearr_30021[(1)] = (1));

return statearr_30021;
});
var cljs$core$async$mix_$_state_machine__28151__auto____1 = (function (state_29962){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_29962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30022){if((e30022 instanceof Object)){
var ex__28154__auto__ = e30022;
var statearr_30023_30072 = state_29962;
(statearr_30023_30072[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30073 = state_29962;
state_29962 = G__30073;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28151__auto__ = function(state_29962){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28151__auto____1.call(this,state_29962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28151__auto____0;
cljs$core$async$mix_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28151__auto____1;
return cljs$core$async$mix_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28264__auto__ = (function (){var statearr_30024 = f__28263__auto__.call(null);
(statearr_30024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30025);

return statearr_30024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30025,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26753__auto__ = (((p == null))?null:p);
var m__26754__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26754__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26753__auto__ = (((p == null))?null:p);
var m__26754__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,p,v,ch);
} else {
var m__26754__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30074 = [];
var len__27165__auto___30077 = arguments.length;
var i__27166__auto___30078 = (0);
while(true){
if((i__27166__auto___30078 < len__27165__auto___30077)){
args30074.push((arguments[i__27166__auto___30078]));

var G__30079 = (i__27166__auto___30078 + (1));
i__27166__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var G__30076 = args30074.length;
switch (G__30076) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30074.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26753__auto__ = (((p == null))?null:p);
var m__26754__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,p);
} else {
var m__26754__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26753__auto__ = (((p == null))?null:p);
var m__26754__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26753__auto__)]);
if(!((m__26754__auto__ == null))){
return m__26754__auto__.call(null,p,v);
} else {
var m__26754__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26754__auto____$1 == null))){
return m__26754__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30082 = [];
var len__27165__auto___30207 = arguments.length;
var i__27166__auto___30208 = (0);
while(true){
if((i__27166__auto___30208 < len__27165__auto___30207)){
args30082.push((arguments[i__27166__auto___30208]));

var G__30209 = (i__27166__auto___30208 + (1));
i__27166__auto___30208 = G__30209;
continue;
} else {
}
break;
}

var G__30084 = args30082.length;
switch (G__30084) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30082.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26090__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26090__auto__,mults){
return (function (p1__30081_SHARP_){
if(cljs.core.truth_(p1__30081_SHARP_.call(null,topic))){
return p1__30081_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30081_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26090__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30085 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30086){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30086 = meta30086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30087,meta30086__$1){
var self__ = this;
var _30087__$1 = this;
return (new cljs.core.async.t_cljs$core$async30085(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30086__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30087){
var self__ = this;
var _30087__$1 = this;
return self__.meta30086;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30086","meta30086",-936277702,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30085";

cljs.core.async.t_cljs$core$async30085.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async30085");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30085 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30086){
return (new cljs.core.async.t_cljs$core$async30085(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30086));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30085(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28262__auto___30211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30211,mults,ensure_mult,p){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30211,mults,ensure_mult,p){
return (function (state_30159){
var state_val_30160 = (state_30159[(1)]);
if((state_val_30160 === (7))){
var inst_30155 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30161_30212 = state_30159__$1;
(statearr_30161_30212[(2)] = inst_30155);

(statearr_30161_30212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (20))){
var state_30159__$1 = state_30159;
var statearr_30162_30213 = state_30159__$1;
(statearr_30162_30213[(2)] = null);

(statearr_30162_30213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (1))){
var state_30159__$1 = state_30159;
var statearr_30163_30214 = state_30159__$1;
(statearr_30163_30214[(2)] = null);

(statearr_30163_30214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (24))){
var inst_30138 = (state_30159[(7)]);
var inst_30147 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30138);
var state_30159__$1 = state_30159;
var statearr_30164_30215 = state_30159__$1;
(statearr_30164_30215[(2)] = inst_30147);

(statearr_30164_30215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (4))){
var inst_30090 = (state_30159[(8)]);
var inst_30090__$1 = (state_30159[(2)]);
var inst_30091 = (inst_30090__$1 == null);
var state_30159__$1 = (function (){var statearr_30165 = state_30159;
(statearr_30165[(8)] = inst_30090__$1);

return statearr_30165;
})();
if(cljs.core.truth_(inst_30091)){
var statearr_30166_30216 = state_30159__$1;
(statearr_30166_30216[(1)] = (5));

} else {
var statearr_30167_30217 = state_30159__$1;
(statearr_30167_30217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (15))){
var inst_30132 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30168_30218 = state_30159__$1;
(statearr_30168_30218[(2)] = inst_30132);

(statearr_30168_30218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (21))){
var inst_30152 = (state_30159[(2)]);
var state_30159__$1 = (function (){var statearr_30169 = state_30159;
(statearr_30169[(9)] = inst_30152);

return statearr_30169;
})();
var statearr_30170_30219 = state_30159__$1;
(statearr_30170_30219[(2)] = null);

(statearr_30170_30219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (13))){
var inst_30114 = (state_30159[(10)]);
var inst_30116 = cljs.core.chunked_seq_QMARK_.call(null,inst_30114);
var state_30159__$1 = state_30159;
if(inst_30116){
var statearr_30171_30220 = state_30159__$1;
(statearr_30171_30220[(1)] = (16));

} else {
var statearr_30172_30221 = state_30159__$1;
(statearr_30172_30221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (22))){
var inst_30144 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30144)){
var statearr_30173_30222 = state_30159__$1;
(statearr_30173_30222[(1)] = (23));

} else {
var statearr_30174_30223 = state_30159__$1;
(statearr_30174_30223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (6))){
var inst_30138 = (state_30159[(7)]);
var inst_30090 = (state_30159[(8)]);
var inst_30140 = (state_30159[(11)]);
var inst_30138__$1 = topic_fn.call(null,inst_30090);
var inst_30139 = cljs.core.deref.call(null,mults);
var inst_30140__$1 = cljs.core.get.call(null,inst_30139,inst_30138__$1);
var state_30159__$1 = (function (){var statearr_30175 = state_30159;
(statearr_30175[(7)] = inst_30138__$1);

(statearr_30175[(11)] = inst_30140__$1);

return statearr_30175;
})();
if(cljs.core.truth_(inst_30140__$1)){
var statearr_30176_30224 = state_30159__$1;
(statearr_30176_30224[(1)] = (19));

} else {
var statearr_30177_30225 = state_30159__$1;
(statearr_30177_30225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (25))){
var inst_30149 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30178_30226 = state_30159__$1;
(statearr_30178_30226[(2)] = inst_30149);

(statearr_30178_30226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (17))){
var inst_30114 = (state_30159[(10)]);
var inst_30123 = cljs.core.first.call(null,inst_30114);
var inst_30124 = cljs.core.async.muxch_STAR_.call(null,inst_30123);
var inst_30125 = cljs.core.async.close_BANG_.call(null,inst_30124);
var inst_30126 = cljs.core.next.call(null,inst_30114);
var inst_30100 = inst_30126;
var inst_30101 = null;
var inst_30102 = (0);
var inst_30103 = (0);
var state_30159__$1 = (function (){var statearr_30179 = state_30159;
(statearr_30179[(12)] = inst_30103);

(statearr_30179[(13)] = inst_30102);

(statearr_30179[(14)] = inst_30100);

(statearr_30179[(15)] = inst_30101);

(statearr_30179[(16)] = inst_30125);

return statearr_30179;
})();
var statearr_30180_30227 = state_30159__$1;
(statearr_30180_30227[(2)] = null);

(statearr_30180_30227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (3))){
var inst_30157 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30159__$1,inst_30157);
} else {
if((state_val_30160 === (12))){
var inst_30134 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30181_30228 = state_30159__$1;
(statearr_30181_30228[(2)] = inst_30134);

(statearr_30181_30228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (2))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30159__$1,(4),ch);
} else {
if((state_val_30160 === (23))){
var state_30159__$1 = state_30159;
var statearr_30182_30229 = state_30159__$1;
(statearr_30182_30229[(2)] = null);

(statearr_30182_30229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (19))){
var inst_30090 = (state_30159[(8)]);
var inst_30140 = (state_30159[(11)]);
var inst_30142 = cljs.core.async.muxch_STAR_.call(null,inst_30140);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30159__$1,(22),inst_30142,inst_30090);
} else {
if((state_val_30160 === (11))){
var inst_30114 = (state_30159[(10)]);
var inst_30100 = (state_30159[(14)]);
var inst_30114__$1 = cljs.core.seq.call(null,inst_30100);
var state_30159__$1 = (function (){var statearr_30183 = state_30159;
(statearr_30183[(10)] = inst_30114__$1);

return statearr_30183;
})();
if(inst_30114__$1){
var statearr_30184_30230 = state_30159__$1;
(statearr_30184_30230[(1)] = (13));

} else {
var statearr_30185_30231 = state_30159__$1;
(statearr_30185_30231[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (9))){
var inst_30136 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30186_30232 = state_30159__$1;
(statearr_30186_30232[(2)] = inst_30136);

(statearr_30186_30232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (5))){
var inst_30097 = cljs.core.deref.call(null,mults);
var inst_30098 = cljs.core.vals.call(null,inst_30097);
var inst_30099 = cljs.core.seq.call(null,inst_30098);
var inst_30100 = inst_30099;
var inst_30101 = null;
var inst_30102 = (0);
var inst_30103 = (0);
var state_30159__$1 = (function (){var statearr_30187 = state_30159;
(statearr_30187[(12)] = inst_30103);

(statearr_30187[(13)] = inst_30102);

(statearr_30187[(14)] = inst_30100);

(statearr_30187[(15)] = inst_30101);

return statearr_30187;
})();
var statearr_30188_30233 = state_30159__$1;
(statearr_30188_30233[(2)] = null);

(statearr_30188_30233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (14))){
var state_30159__$1 = state_30159;
var statearr_30192_30234 = state_30159__$1;
(statearr_30192_30234[(2)] = null);

(statearr_30192_30234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (16))){
var inst_30114 = (state_30159[(10)]);
var inst_30118 = cljs.core.chunk_first.call(null,inst_30114);
var inst_30119 = cljs.core.chunk_rest.call(null,inst_30114);
var inst_30120 = cljs.core.count.call(null,inst_30118);
var inst_30100 = inst_30119;
var inst_30101 = inst_30118;
var inst_30102 = inst_30120;
var inst_30103 = (0);
var state_30159__$1 = (function (){var statearr_30193 = state_30159;
(statearr_30193[(12)] = inst_30103);

(statearr_30193[(13)] = inst_30102);

(statearr_30193[(14)] = inst_30100);

(statearr_30193[(15)] = inst_30101);

return statearr_30193;
})();
var statearr_30194_30235 = state_30159__$1;
(statearr_30194_30235[(2)] = null);

(statearr_30194_30235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (10))){
var inst_30103 = (state_30159[(12)]);
var inst_30102 = (state_30159[(13)]);
var inst_30100 = (state_30159[(14)]);
var inst_30101 = (state_30159[(15)]);
var inst_30108 = cljs.core._nth.call(null,inst_30101,inst_30103);
var inst_30109 = cljs.core.async.muxch_STAR_.call(null,inst_30108);
var inst_30110 = cljs.core.async.close_BANG_.call(null,inst_30109);
var inst_30111 = (inst_30103 + (1));
var tmp30189 = inst_30102;
var tmp30190 = inst_30100;
var tmp30191 = inst_30101;
var inst_30100__$1 = tmp30190;
var inst_30101__$1 = tmp30191;
var inst_30102__$1 = tmp30189;
var inst_30103__$1 = inst_30111;
var state_30159__$1 = (function (){var statearr_30195 = state_30159;
(statearr_30195[(12)] = inst_30103__$1);

(statearr_30195[(17)] = inst_30110);

(statearr_30195[(13)] = inst_30102__$1);

(statearr_30195[(14)] = inst_30100__$1);

(statearr_30195[(15)] = inst_30101__$1);

return statearr_30195;
})();
var statearr_30196_30236 = state_30159__$1;
(statearr_30196_30236[(2)] = null);

(statearr_30196_30236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (18))){
var inst_30129 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30197_30237 = state_30159__$1;
(statearr_30197_30237[(2)] = inst_30129);

(statearr_30197_30237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (8))){
var inst_30103 = (state_30159[(12)]);
var inst_30102 = (state_30159[(13)]);
var inst_30105 = (inst_30103 < inst_30102);
var inst_30106 = inst_30105;
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30106)){
var statearr_30198_30238 = state_30159__$1;
(statearr_30198_30238[(1)] = (10));

} else {
var statearr_30199_30239 = state_30159__$1;
(statearr_30199_30239[(1)] = (11));

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
});})(c__28262__auto___30211,mults,ensure_mult,p))
;
return ((function (switch__28150__auto__,c__28262__auto___30211,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30159){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__28154__auto__ = e30204;
var statearr_30205_30240 = state_30159;
(statearr_30205_30240[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30241 = state_30159;
state_30159 = G__30241;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30211,mults,ensure_mult,p))
})();
var state__28264__auto__ = (function (){var statearr_30206 = f__28263__auto__.call(null);
(statearr_30206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30211);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30211,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30242 = [];
var len__27165__auto___30245 = arguments.length;
var i__27166__auto___30246 = (0);
while(true){
if((i__27166__auto___30246 < len__27165__auto___30245)){
args30242.push((arguments[i__27166__auto___30246]));

var G__30247 = (i__27166__auto___30246 + (1));
i__27166__auto___30246 = G__30247;
continue;
} else {
}
break;
}

var G__30244 = args30242.length;
switch (G__30244) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30242.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30249 = [];
var len__27165__auto___30252 = arguments.length;
var i__27166__auto___30253 = (0);
while(true){
if((i__27166__auto___30253 < len__27165__auto___30252)){
args30249.push((arguments[i__27166__auto___30253]));

var G__30254 = (i__27166__auto___30253 + (1));
i__27166__auto___30253 = G__30254;
continue;
} else {
}
break;
}

var G__30251 = args30249.length;
switch (G__30251) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30249.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30256 = [];
var len__27165__auto___30327 = arguments.length;
var i__27166__auto___30328 = (0);
while(true){
if((i__27166__auto___30328 < len__27165__auto___30327)){
args30256.push((arguments[i__27166__auto___30328]));

var G__30329 = (i__27166__auto___30328 + (1));
i__27166__auto___30328 = G__30329;
continue;
} else {
}
break;
}

var G__30258 = args30256.length;
switch (G__30258) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30256.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28262__auto___30331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30297){
var state_val_30298 = (state_30297[(1)]);
if((state_val_30298 === (7))){
var state_30297__$1 = state_30297;
var statearr_30299_30332 = state_30297__$1;
(statearr_30299_30332[(2)] = null);

(statearr_30299_30332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (1))){
var state_30297__$1 = state_30297;
var statearr_30300_30333 = state_30297__$1;
(statearr_30300_30333[(2)] = null);

(statearr_30300_30333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (4))){
var inst_30261 = (state_30297[(7)]);
var inst_30263 = (inst_30261 < cnt);
var state_30297__$1 = state_30297;
if(cljs.core.truth_(inst_30263)){
var statearr_30301_30334 = state_30297__$1;
(statearr_30301_30334[(1)] = (6));

} else {
var statearr_30302_30335 = state_30297__$1;
(statearr_30302_30335[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (15))){
var inst_30293 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
var statearr_30303_30336 = state_30297__$1;
(statearr_30303_30336[(2)] = inst_30293);

(statearr_30303_30336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (13))){
var inst_30286 = cljs.core.async.close_BANG_.call(null,out);
var state_30297__$1 = state_30297;
var statearr_30304_30337 = state_30297__$1;
(statearr_30304_30337[(2)] = inst_30286);

(statearr_30304_30337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (6))){
var state_30297__$1 = state_30297;
var statearr_30305_30338 = state_30297__$1;
(statearr_30305_30338[(2)] = null);

(statearr_30305_30338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (3))){
var inst_30295 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30297__$1,inst_30295);
} else {
if((state_val_30298 === (12))){
var inst_30283 = (state_30297[(8)]);
var inst_30283__$1 = (state_30297[(2)]);
var inst_30284 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30283__$1);
var state_30297__$1 = (function (){var statearr_30306 = state_30297;
(statearr_30306[(8)] = inst_30283__$1);

return statearr_30306;
})();
if(cljs.core.truth_(inst_30284)){
var statearr_30307_30339 = state_30297__$1;
(statearr_30307_30339[(1)] = (13));

} else {
var statearr_30308_30340 = state_30297__$1;
(statearr_30308_30340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (2))){
var inst_30260 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30261 = (0);
var state_30297__$1 = (function (){var statearr_30309 = state_30297;
(statearr_30309[(9)] = inst_30260);

(statearr_30309[(7)] = inst_30261);

return statearr_30309;
})();
var statearr_30310_30341 = state_30297__$1;
(statearr_30310_30341[(2)] = null);

(statearr_30310_30341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (11))){
var inst_30261 = (state_30297[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30297,(10),Object,null,(9));
var inst_30270 = chs__$1.call(null,inst_30261);
var inst_30271 = done.call(null,inst_30261);
var inst_30272 = cljs.core.async.take_BANG_.call(null,inst_30270,inst_30271);
var state_30297__$1 = state_30297;
var statearr_30311_30342 = state_30297__$1;
(statearr_30311_30342[(2)] = inst_30272);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (9))){
var inst_30261 = (state_30297[(7)]);
var inst_30274 = (state_30297[(2)]);
var inst_30275 = (inst_30261 + (1));
var inst_30261__$1 = inst_30275;
var state_30297__$1 = (function (){var statearr_30312 = state_30297;
(statearr_30312[(10)] = inst_30274);

(statearr_30312[(7)] = inst_30261__$1);

return statearr_30312;
})();
var statearr_30313_30343 = state_30297__$1;
(statearr_30313_30343[(2)] = null);

(statearr_30313_30343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (5))){
var inst_30281 = (state_30297[(2)]);
var state_30297__$1 = (function (){var statearr_30314 = state_30297;
(statearr_30314[(11)] = inst_30281);

return statearr_30314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30297__$1,(12),dchan);
} else {
if((state_val_30298 === (14))){
var inst_30283 = (state_30297[(8)]);
var inst_30288 = cljs.core.apply.call(null,f,inst_30283);
var state_30297__$1 = state_30297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30297__$1,(16),out,inst_30288);
} else {
if((state_val_30298 === (16))){
var inst_30290 = (state_30297[(2)]);
var state_30297__$1 = (function (){var statearr_30315 = state_30297;
(statearr_30315[(12)] = inst_30290);

return statearr_30315;
})();
var statearr_30316_30344 = state_30297__$1;
(statearr_30316_30344[(2)] = null);

(statearr_30316_30344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (10))){
var inst_30265 = (state_30297[(2)]);
var inst_30266 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30297__$1 = (function (){var statearr_30317 = state_30297;
(statearr_30317[(13)] = inst_30265);

return statearr_30317;
})();
var statearr_30318_30345 = state_30297__$1;
(statearr_30318_30345[(2)] = inst_30266);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30298 === (8))){
var inst_30279 = (state_30297[(2)]);
var state_30297__$1 = state_30297;
var statearr_30319_30346 = state_30297__$1;
(statearr_30319_30346[(2)] = inst_30279);

(statearr_30319_30346[(1)] = (5));


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
});})(c__28262__auto___30331,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28150__auto__,c__28262__auto___30331,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30323[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30297){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object)){
var ex__28154__auto__ = e30324;
var statearr_30325_30347 = state_30297;
(statearr_30325_30347[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30348 = state_30297;
state_30297 = G__30348;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30331,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28264__auto__ = (function (){var statearr_30326 = f__28263__auto__.call(null);
(statearr_30326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30331);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30331,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30350 = [];
var len__27165__auto___30408 = arguments.length;
var i__27166__auto___30409 = (0);
while(true){
if((i__27166__auto___30409 < len__27165__auto___30408)){
args30350.push((arguments[i__27166__auto___30409]));

var G__30410 = (i__27166__auto___30409 + (1));
i__27166__auto___30409 = G__30410;
continue;
} else {
}
break;
}

var G__30352 = args30350.length;
switch (G__30352) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30350.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28262__auto___30412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30412,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30412,out){
return (function (state_30384){
var state_val_30385 = (state_30384[(1)]);
if((state_val_30385 === (7))){
var inst_30363 = (state_30384[(7)]);
var inst_30364 = (state_30384[(8)]);
var inst_30363__$1 = (state_30384[(2)]);
var inst_30364__$1 = cljs.core.nth.call(null,inst_30363__$1,(0),null);
var inst_30365 = cljs.core.nth.call(null,inst_30363__$1,(1),null);
var inst_30366 = (inst_30364__$1 == null);
var state_30384__$1 = (function (){var statearr_30386 = state_30384;
(statearr_30386[(9)] = inst_30365);

(statearr_30386[(7)] = inst_30363__$1);

(statearr_30386[(8)] = inst_30364__$1);

return statearr_30386;
})();
if(cljs.core.truth_(inst_30366)){
var statearr_30387_30413 = state_30384__$1;
(statearr_30387_30413[(1)] = (8));

} else {
var statearr_30388_30414 = state_30384__$1;
(statearr_30388_30414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (1))){
var inst_30353 = cljs.core.vec.call(null,chs);
var inst_30354 = inst_30353;
var state_30384__$1 = (function (){var statearr_30389 = state_30384;
(statearr_30389[(10)] = inst_30354);

return statearr_30389;
})();
var statearr_30390_30415 = state_30384__$1;
(statearr_30390_30415[(2)] = null);

(statearr_30390_30415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (4))){
var inst_30354 = (state_30384[(10)]);
var state_30384__$1 = state_30384;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30384__$1,(7),inst_30354);
} else {
if((state_val_30385 === (6))){
var inst_30380 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30391_30416 = state_30384__$1;
(statearr_30391_30416[(2)] = inst_30380);

(statearr_30391_30416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (3))){
var inst_30382 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30384__$1,inst_30382);
} else {
if((state_val_30385 === (2))){
var inst_30354 = (state_30384[(10)]);
var inst_30356 = cljs.core.count.call(null,inst_30354);
var inst_30357 = (inst_30356 > (0));
var state_30384__$1 = state_30384;
if(cljs.core.truth_(inst_30357)){
var statearr_30393_30417 = state_30384__$1;
(statearr_30393_30417[(1)] = (4));

} else {
var statearr_30394_30418 = state_30384__$1;
(statearr_30394_30418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (11))){
var inst_30354 = (state_30384[(10)]);
var inst_30373 = (state_30384[(2)]);
var tmp30392 = inst_30354;
var inst_30354__$1 = tmp30392;
var state_30384__$1 = (function (){var statearr_30395 = state_30384;
(statearr_30395[(10)] = inst_30354__$1);

(statearr_30395[(11)] = inst_30373);

return statearr_30395;
})();
var statearr_30396_30419 = state_30384__$1;
(statearr_30396_30419[(2)] = null);

(statearr_30396_30419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (9))){
var inst_30364 = (state_30384[(8)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30384__$1,(11),out,inst_30364);
} else {
if((state_val_30385 === (5))){
var inst_30378 = cljs.core.async.close_BANG_.call(null,out);
var state_30384__$1 = state_30384;
var statearr_30397_30420 = state_30384__$1;
(statearr_30397_30420[(2)] = inst_30378);

(statearr_30397_30420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (10))){
var inst_30376 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30398_30421 = state_30384__$1;
(statearr_30398_30421[(2)] = inst_30376);

(statearr_30398_30421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (8))){
var inst_30354 = (state_30384[(10)]);
var inst_30365 = (state_30384[(9)]);
var inst_30363 = (state_30384[(7)]);
var inst_30364 = (state_30384[(8)]);
var inst_30368 = (function (){var cs = inst_30354;
var vec__30359 = inst_30363;
var v = inst_30364;
var c = inst_30365;
return ((function (cs,vec__30359,v,c,inst_30354,inst_30365,inst_30363,inst_30364,state_val_30385,c__28262__auto___30412,out){
return (function (p1__30349_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30349_SHARP_);
});
;})(cs,vec__30359,v,c,inst_30354,inst_30365,inst_30363,inst_30364,state_val_30385,c__28262__auto___30412,out))
})();
var inst_30369 = cljs.core.filterv.call(null,inst_30368,inst_30354);
var inst_30354__$1 = inst_30369;
var state_30384__$1 = (function (){var statearr_30399 = state_30384;
(statearr_30399[(10)] = inst_30354__$1);

return statearr_30399;
})();
var statearr_30400_30422 = state_30384__$1;
(statearr_30400_30422[(2)] = null);

(statearr_30400_30422[(1)] = (2));


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
});})(c__28262__auto___30412,out))
;
return ((function (switch__28150__auto__,c__28262__auto___30412,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30404[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30404[(1)] = (1));

return statearr_30404;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30384){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30405){if((e30405 instanceof Object)){
var ex__28154__auto__ = e30405;
var statearr_30406_30423 = state_30384;
(statearr_30406_30423[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30424 = state_30384;
state_30384 = G__30424;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30412,out))
})();
var state__28264__auto__ = (function (){var statearr_30407 = f__28263__auto__.call(null);
(statearr_30407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30412);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30412,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30425 = [];
var len__27165__auto___30474 = arguments.length;
var i__27166__auto___30475 = (0);
while(true){
if((i__27166__auto___30475 < len__27165__auto___30474)){
args30425.push((arguments[i__27166__auto___30475]));

var G__30476 = (i__27166__auto___30475 + (1));
i__27166__auto___30475 = G__30476;
continue;
} else {
}
break;
}

var G__30427 = args30425.length;
switch (G__30427) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30425.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28262__auto___30478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30478,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30478,out){
return (function (state_30451){
var state_val_30452 = (state_30451[(1)]);
if((state_val_30452 === (7))){
var inst_30433 = (state_30451[(7)]);
var inst_30433__$1 = (state_30451[(2)]);
var inst_30434 = (inst_30433__$1 == null);
var inst_30435 = cljs.core.not.call(null,inst_30434);
var state_30451__$1 = (function (){var statearr_30453 = state_30451;
(statearr_30453[(7)] = inst_30433__$1);

return statearr_30453;
})();
if(inst_30435){
var statearr_30454_30479 = state_30451__$1;
(statearr_30454_30479[(1)] = (8));

} else {
var statearr_30455_30480 = state_30451__$1;
(statearr_30455_30480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (1))){
var inst_30428 = (0);
var state_30451__$1 = (function (){var statearr_30456 = state_30451;
(statearr_30456[(8)] = inst_30428);

return statearr_30456;
})();
var statearr_30457_30481 = state_30451__$1;
(statearr_30457_30481[(2)] = null);

(statearr_30457_30481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (4))){
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30451__$1,(7),ch);
} else {
if((state_val_30452 === (6))){
var inst_30446 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30458_30482 = state_30451__$1;
(statearr_30458_30482[(2)] = inst_30446);

(statearr_30458_30482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (3))){
var inst_30448 = (state_30451[(2)]);
var inst_30449 = cljs.core.async.close_BANG_.call(null,out);
var state_30451__$1 = (function (){var statearr_30459 = state_30451;
(statearr_30459[(9)] = inst_30448);

return statearr_30459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30451__$1,inst_30449);
} else {
if((state_val_30452 === (2))){
var inst_30428 = (state_30451[(8)]);
var inst_30430 = (inst_30428 < n);
var state_30451__$1 = state_30451;
if(cljs.core.truth_(inst_30430)){
var statearr_30460_30483 = state_30451__$1;
(statearr_30460_30483[(1)] = (4));

} else {
var statearr_30461_30484 = state_30451__$1;
(statearr_30461_30484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (11))){
var inst_30428 = (state_30451[(8)]);
var inst_30438 = (state_30451[(2)]);
var inst_30439 = (inst_30428 + (1));
var inst_30428__$1 = inst_30439;
var state_30451__$1 = (function (){var statearr_30462 = state_30451;
(statearr_30462[(8)] = inst_30428__$1);

(statearr_30462[(10)] = inst_30438);

return statearr_30462;
})();
var statearr_30463_30485 = state_30451__$1;
(statearr_30463_30485[(2)] = null);

(statearr_30463_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (9))){
var state_30451__$1 = state_30451;
var statearr_30464_30486 = state_30451__$1;
(statearr_30464_30486[(2)] = null);

(statearr_30464_30486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (5))){
var state_30451__$1 = state_30451;
var statearr_30465_30487 = state_30451__$1;
(statearr_30465_30487[(2)] = null);

(statearr_30465_30487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (10))){
var inst_30443 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30466_30488 = state_30451__$1;
(statearr_30466_30488[(2)] = inst_30443);

(statearr_30466_30488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (8))){
var inst_30433 = (state_30451[(7)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30451__$1,(11),out,inst_30433);
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
});})(c__28262__auto___30478,out))
;
return ((function (switch__28150__auto__,c__28262__auto___30478,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30470[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30470[(1)] = (1));

return statearr_30470;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30451){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30471){if((e30471 instanceof Object)){
var ex__28154__auto__ = e30471;
var statearr_30472_30489 = state_30451;
(statearr_30472_30489[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30490 = state_30451;
state_30451 = G__30490;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30478,out))
})();
var state__28264__auto__ = (function (){var statearr_30473 = f__28263__auto__.call(null);
(statearr_30473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30478);

return statearr_30473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30478,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30498 = (function (map_LT_,f,ch,meta30499){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30499 = meta30499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30500,meta30499__$1){
var self__ = this;
var _30500__$1 = this;
return (new cljs.core.async.t_cljs$core$async30498(self__.map_LT_,self__.f,self__.ch,meta30499__$1));
});

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30500){
var self__ = this;
var _30500__$1 = this;
return self__.meta30499;
});

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30501 = (function (map_LT_,f,ch,meta30499,_,fn1,meta30502){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30499 = meta30499;
this._ = _;
this.fn1 = fn1;
this.meta30502 = meta30502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30503,meta30502__$1){
var self__ = this;
var _30503__$1 = this;
return (new cljs.core.async.t_cljs$core$async30501(self__.map_LT_,self__.f,self__.ch,self__.meta30499,self__._,self__.fn1,meta30502__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30503){
var self__ = this;
var _30503__$1 = this;
return self__.meta30502;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30491_SHARP_){
return f1.call(null,(((p1__30491_SHARP_ == null))?null:self__.f.call(null,p1__30491_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30501.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30499","meta30499",1784452394,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30498","cljs.core.async/t_cljs$core$async30498",721073912,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30502","meta30502",-152967218,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30501";

cljs.core.async.t_cljs$core$async30501.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async30501");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30501 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30501(map_LT___$1,f__$1,ch__$1,meta30499__$1,___$2,fn1__$1,meta30502){
return (new cljs.core.async.t_cljs$core$async30501(map_LT___$1,f__$1,ch__$1,meta30499__$1,___$2,fn1__$1,meta30502));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30501(self__.map_LT_,self__.f,self__.ch,self__.meta30499,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26078__auto__ = ret;
if(cljs.core.truth_(and__26078__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26078__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30499","meta30499",1784452394,null)], null);
});

cljs.core.async.t_cljs$core$async30498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30498";

cljs.core.async.t_cljs$core$async30498.cljs$lang$ctorPrWriter = (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async30498");
});

cljs.core.async.__GT_t_cljs$core$async30498 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30498(map_LT___$1,f__$1,ch__$1,meta30499){
return (new cljs.core.async.t_cljs$core$async30498(map_LT___$1,f__$1,ch__$1,meta30499));
});

}

return (new cljs.core.async.t_cljs$core$async30498(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30507 = (function (map_GT_,f,ch,meta30508){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30508 = meta30508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30509,meta30508__$1){
var self__ = this;
var _30509__$1 = this;
return (new cljs.core.async.t_cljs$core$async30507(self__.map_GT_,self__.f,self__.ch,meta30508__$1));
});

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30509){
var self__ = this;
var _30509__$1 = this;
return self__.meta30508;
});

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30507.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30508","meta30508",1020067052,null)], null);
});

cljs.core.async.t_cljs$core$async30507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30507";

cljs.core.async.t_cljs$core$async30507.cljs$lang$ctorPrWriter = (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async30507");
});

cljs.core.async.__GT_t_cljs$core$async30507 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30507(map_GT___$1,f__$1,ch__$1,meta30508){
return (new cljs.core.async.t_cljs$core$async30507(map_GT___$1,f__$1,ch__$1,meta30508));
});

}

return (new cljs.core.async.t_cljs$core$async30507(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30513 = (function (filter_GT_,p,ch,meta30514){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30514 = meta30514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30515,meta30514__$1){
var self__ = this;
var _30515__$1 = this;
return (new cljs.core.async.t_cljs$core$async30513(self__.filter_GT_,self__.p,self__.ch,meta30514__$1));
});

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30515){
var self__ = this;
var _30515__$1 = this;
return self__.meta30514;
});

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30514","meta30514",599981508,null)], null);
});

cljs.core.async.t_cljs$core$async30513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30513";

cljs.core.async.t_cljs$core$async30513.cljs$lang$ctorPrWriter = (function (this__26696__auto__,writer__26697__auto__,opt__26698__auto__){
return cljs.core._write.call(null,writer__26697__auto__,"cljs.core.async/t_cljs$core$async30513");
});

cljs.core.async.__GT_t_cljs$core$async30513 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30513(filter_GT___$1,p__$1,ch__$1,meta30514){
return (new cljs.core.async.t_cljs$core$async30513(filter_GT___$1,p__$1,ch__$1,meta30514));
});

}

return (new cljs.core.async.t_cljs$core$async30513(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30516 = [];
var len__27165__auto___30560 = arguments.length;
var i__27166__auto___30561 = (0);
while(true){
if((i__27166__auto___30561 < len__27165__auto___30560)){
args30516.push((arguments[i__27166__auto___30561]));

var G__30562 = (i__27166__auto___30561 + (1));
i__27166__auto___30561 = G__30562;
continue;
} else {
}
break;
}

var G__30518 = args30516.length;
switch (G__30518) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30516.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28262__auto___30564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30564,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30564,out){
return (function (state_30539){
var state_val_30540 = (state_30539[(1)]);
if((state_val_30540 === (7))){
var inst_30535 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30541_30565 = state_30539__$1;
(statearr_30541_30565[(2)] = inst_30535);

(statearr_30541_30565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (1))){
var state_30539__$1 = state_30539;
var statearr_30542_30566 = state_30539__$1;
(statearr_30542_30566[(2)] = null);

(statearr_30542_30566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (4))){
var inst_30521 = (state_30539[(7)]);
var inst_30521__$1 = (state_30539[(2)]);
var inst_30522 = (inst_30521__$1 == null);
var state_30539__$1 = (function (){var statearr_30543 = state_30539;
(statearr_30543[(7)] = inst_30521__$1);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30522)){
var statearr_30544_30567 = state_30539__$1;
(statearr_30544_30567[(1)] = (5));

} else {
var statearr_30545_30568 = state_30539__$1;
(statearr_30545_30568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (6))){
var inst_30521 = (state_30539[(7)]);
var inst_30526 = p.call(null,inst_30521);
var state_30539__$1 = state_30539;
if(cljs.core.truth_(inst_30526)){
var statearr_30546_30569 = state_30539__$1;
(statearr_30546_30569[(1)] = (8));

} else {
var statearr_30547_30570 = state_30539__$1;
(statearr_30547_30570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (3))){
var inst_30537 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30539__$1,inst_30537);
} else {
if((state_val_30540 === (2))){
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30539__$1,(4),ch);
} else {
if((state_val_30540 === (11))){
var inst_30529 = (state_30539[(2)]);
var state_30539__$1 = state_30539;
var statearr_30548_30571 = state_30539__$1;
(statearr_30548_30571[(2)] = inst_30529);

(statearr_30548_30571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (9))){
var state_30539__$1 = state_30539;
var statearr_30549_30572 = state_30539__$1;
(statearr_30549_30572[(2)] = null);

(statearr_30549_30572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (5))){
var inst_30524 = cljs.core.async.close_BANG_.call(null,out);
var state_30539__$1 = state_30539;
var statearr_30550_30573 = state_30539__$1;
(statearr_30550_30573[(2)] = inst_30524);

(statearr_30550_30573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (10))){
var inst_30532 = (state_30539[(2)]);
var state_30539__$1 = (function (){var statearr_30551 = state_30539;
(statearr_30551[(8)] = inst_30532);

return statearr_30551;
})();
var statearr_30552_30574 = state_30539__$1;
(statearr_30552_30574[(2)] = null);

(statearr_30552_30574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30540 === (8))){
var inst_30521 = (state_30539[(7)]);
var state_30539__$1 = state_30539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30539__$1,(11),out,inst_30521);
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
});})(c__28262__auto___30564,out))
;
return ((function (switch__28150__auto__,c__28262__auto___30564,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30556 = [null,null,null,null,null,null,null,null,null];
(statearr_30556[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30556[(1)] = (1));

return statearr_30556;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30539){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30557){if((e30557 instanceof Object)){
var ex__28154__auto__ = e30557;
var statearr_30558_30575 = state_30539;
(statearr_30558_30575[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30576 = state_30539;
state_30539 = G__30576;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30564,out))
})();
var state__28264__auto__ = (function (){var statearr_30559 = f__28263__auto__.call(null);
(statearr_30559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30564);

return statearr_30559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30564,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30577 = [];
var len__27165__auto___30580 = arguments.length;
var i__27166__auto___30581 = (0);
while(true){
if((i__27166__auto___30581 < len__27165__auto___30580)){
args30577.push((arguments[i__27166__auto___30581]));

var G__30582 = (i__27166__auto___30581 + (1));
i__27166__auto___30581 = G__30582;
continue;
} else {
}
break;
}

var G__30579 = args30577.length;
switch (G__30579) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30577.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28262__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto__){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto__){
return (function (state_30749){
var state_val_30750 = (state_30749[(1)]);
if((state_val_30750 === (7))){
var inst_30745 = (state_30749[(2)]);
var state_30749__$1 = state_30749;
var statearr_30751_30792 = state_30749__$1;
(statearr_30751_30792[(2)] = inst_30745);

(statearr_30751_30792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (20))){
var inst_30715 = (state_30749[(7)]);
var inst_30726 = (state_30749[(2)]);
var inst_30727 = cljs.core.next.call(null,inst_30715);
var inst_30701 = inst_30727;
var inst_30702 = null;
var inst_30703 = (0);
var inst_30704 = (0);
var state_30749__$1 = (function (){var statearr_30752 = state_30749;
(statearr_30752[(8)] = inst_30726);

(statearr_30752[(9)] = inst_30704);

(statearr_30752[(10)] = inst_30702);

(statearr_30752[(11)] = inst_30703);

(statearr_30752[(12)] = inst_30701);

return statearr_30752;
})();
var statearr_30753_30793 = state_30749__$1;
(statearr_30753_30793[(2)] = null);

(statearr_30753_30793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (1))){
var state_30749__$1 = state_30749;
var statearr_30754_30794 = state_30749__$1;
(statearr_30754_30794[(2)] = null);

(statearr_30754_30794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (4))){
var inst_30690 = (state_30749[(13)]);
var inst_30690__$1 = (state_30749[(2)]);
var inst_30691 = (inst_30690__$1 == null);
var state_30749__$1 = (function (){var statearr_30755 = state_30749;
(statearr_30755[(13)] = inst_30690__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30691)){
var statearr_30756_30795 = state_30749__$1;
(statearr_30756_30795[(1)] = (5));

} else {
var statearr_30757_30796 = state_30749__$1;
(statearr_30757_30796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (15))){
var state_30749__$1 = state_30749;
var statearr_30761_30797 = state_30749__$1;
(statearr_30761_30797[(2)] = null);

(statearr_30761_30797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (21))){
var state_30749__$1 = state_30749;
var statearr_30762_30798 = state_30749__$1;
(statearr_30762_30798[(2)] = null);

(statearr_30762_30798[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (13))){
var inst_30704 = (state_30749[(9)]);
var inst_30702 = (state_30749[(10)]);
var inst_30703 = (state_30749[(11)]);
var inst_30701 = (state_30749[(12)]);
var inst_30711 = (state_30749[(2)]);
var inst_30712 = (inst_30704 + (1));
var tmp30758 = inst_30702;
var tmp30759 = inst_30703;
var tmp30760 = inst_30701;
var inst_30701__$1 = tmp30760;
var inst_30702__$1 = tmp30758;
var inst_30703__$1 = tmp30759;
var inst_30704__$1 = inst_30712;
var state_30749__$1 = (function (){var statearr_30763 = state_30749;
(statearr_30763[(14)] = inst_30711);

(statearr_30763[(9)] = inst_30704__$1);

(statearr_30763[(10)] = inst_30702__$1);

(statearr_30763[(11)] = inst_30703__$1);

(statearr_30763[(12)] = inst_30701__$1);

return statearr_30763;
})();
var statearr_30764_30799 = state_30749__$1;
(statearr_30764_30799[(2)] = null);

(statearr_30764_30799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (22))){
var state_30749__$1 = state_30749;
var statearr_30765_30800 = state_30749__$1;
(statearr_30765_30800[(2)] = null);

(statearr_30765_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (6))){
var inst_30690 = (state_30749[(13)]);
var inst_30699 = f.call(null,inst_30690);
var inst_30700 = cljs.core.seq.call(null,inst_30699);
var inst_30701 = inst_30700;
var inst_30702 = null;
var inst_30703 = (0);
var inst_30704 = (0);
var state_30749__$1 = (function (){var statearr_30766 = state_30749;
(statearr_30766[(9)] = inst_30704);

(statearr_30766[(10)] = inst_30702);

(statearr_30766[(11)] = inst_30703);

(statearr_30766[(12)] = inst_30701);

return statearr_30766;
})();
var statearr_30767_30801 = state_30749__$1;
(statearr_30767_30801[(2)] = null);

(statearr_30767_30801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (17))){
var inst_30715 = (state_30749[(7)]);
var inst_30719 = cljs.core.chunk_first.call(null,inst_30715);
var inst_30720 = cljs.core.chunk_rest.call(null,inst_30715);
var inst_30721 = cljs.core.count.call(null,inst_30719);
var inst_30701 = inst_30720;
var inst_30702 = inst_30719;
var inst_30703 = inst_30721;
var inst_30704 = (0);
var state_30749__$1 = (function (){var statearr_30768 = state_30749;
(statearr_30768[(9)] = inst_30704);

(statearr_30768[(10)] = inst_30702);

(statearr_30768[(11)] = inst_30703);

(statearr_30768[(12)] = inst_30701);

return statearr_30768;
})();
var statearr_30769_30802 = state_30749__$1;
(statearr_30769_30802[(2)] = null);

(statearr_30769_30802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (3))){
var inst_30747 = (state_30749[(2)]);
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30749__$1,inst_30747);
} else {
if((state_val_30750 === (12))){
var inst_30735 = (state_30749[(2)]);
var state_30749__$1 = state_30749;
var statearr_30770_30803 = state_30749__$1;
(statearr_30770_30803[(2)] = inst_30735);

(statearr_30770_30803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (2))){
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30749__$1,(4),in$);
} else {
if((state_val_30750 === (23))){
var inst_30743 = (state_30749[(2)]);
var state_30749__$1 = state_30749;
var statearr_30771_30804 = state_30749__$1;
(statearr_30771_30804[(2)] = inst_30743);

(statearr_30771_30804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (19))){
var inst_30730 = (state_30749[(2)]);
var state_30749__$1 = state_30749;
var statearr_30772_30805 = state_30749__$1;
(statearr_30772_30805[(2)] = inst_30730);

(statearr_30772_30805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (11))){
var inst_30715 = (state_30749[(7)]);
var inst_30701 = (state_30749[(12)]);
var inst_30715__$1 = cljs.core.seq.call(null,inst_30701);
var state_30749__$1 = (function (){var statearr_30773 = state_30749;
(statearr_30773[(7)] = inst_30715__$1);

return statearr_30773;
})();
if(inst_30715__$1){
var statearr_30774_30806 = state_30749__$1;
(statearr_30774_30806[(1)] = (14));

} else {
var statearr_30775_30807 = state_30749__$1;
(statearr_30775_30807[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (9))){
var inst_30737 = (state_30749[(2)]);
var inst_30738 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30749__$1 = (function (){var statearr_30776 = state_30749;
(statearr_30776[(15)] = inst_30737);

return statearr_30776;
})();
if(cljs.core.truth_(inst_30738)){
var statearr_30777_30808 = state_30749__$1;
(statearr_30777_30808[(1)] = (21));

} else {
var statearr_30778_30809 = state_30749__$1;
(statearr_30778_30809[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (5))){
var inst_30693 = cljs.core.async.close_BANG_.call(null,out);
var state_30749__$1 = state_30749;
var statearr_30779_30810 = state_30749__$1;
(statearr_30779_30810[(2)] = inst_30693);

(statearr_30779_30810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (14))){
var inst_30715 = (state_30749[(7)]);
var inst_30717 = cljs.core.chunked_seq_QMARK_.call(null,inst_30715);
var state_30749__$1 = state_30749;
if(inst_30717){
var statearr_30780_30811 = state_30749__$1;
(statearr_30780_30811[(1)] = (17));

} else {
var statearr_30781_30812 = state_30749__$1;
(statearr_30781_30812[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (16))){
var inst_30733 = (state_30749[(2)]);
var state_30749__$1 = state_30749;
var statearr_30782_30813 = state_30749__$1;
(statearr_30782_30813[(2)] = inst_30733);

(statearr_30782_30813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30750 === (10))){
var inst_30704 = (state_30749[(9)]);
var inst_30702 = (state_30749[(10)]);
var inst_30709 = cljs.core._nth.call(null,inst_30702,inst_30704);
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30749__$1,(13),out,inst_30709);
} else {
if((state_val_30750 === (18))){
var inst_30715 = (state_30749[(7)]);
var inst_30724 = cljs.core.first.call(null,inst_30715);
var state_30749__$1 = state_30749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30749__$1,(20),out,inst_30724);
} else {
if((state_val_30750 === (8))){
var inst_30704 = (state_30749[(9)]);
var inst_30703 = (state_30749[(11)]);
var inst_30706 = (inst_30704 < inst_30703);
var inst_30707 = inst_30706;
var state_30749__$1 = state_30749;
if(cljs.core.truth_(inst_30707)){
var statearr_30783_30814 = state_30749__$1;
(statearr_30783_30814[(1)] = (10));

} else {
var statearr_30784_30815 = state_30749__$1;
(statearr_30784_30815[(1)] = (11));

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
});})(c__28262__auto__))
;
return ((function (switch__28150__auto__,c__28262__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0 = (function (){
var statearr_30788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30788[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__);

(statearr_30788[(1)] = (1));

return statearr_30788;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1 = (function (state_30749){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30789){if((e30789 instanceof Object)){
var ex__28154__auto__ = e30789;
var statearr_30790_30816 = state_30749;
(statearr_30790_30816[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30817 = state_30749;
state_30749 = G__30817;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__ = function(state_30749){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1.call(this,state_30749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28151__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto__))
})();
var state__28264__auto__ = (function (){var statearr_30791 = f__28263__auto__.call(null);
(statearr_30791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto__);

return statearr_30791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto__))
);

return c__28262__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30818 = [];
var len__27165__auto___30821 = arguments.length;
var i__27166__auto___30822 = (0);
while(true){
if((i__27166__auto___30822 < len__27165__auto___30821)){
args30818.push((arguments[i__27166__auto___30822]));

var G__30823 = (i__27166__auto___30822 + (1));
i__27166__auto___30822 = G__30823;
continue;
} else {
}
break;
}

var G__30820 = args30818.length;
switch (G__30820) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30818.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30825 = [];
var len__27165__auto___30828 = arguments.length;
var i__27166__auto___30829 = (0);
while(true){
if((i__27166__auto___30829 < len__27165__auto___30828)){
args30825.push((arguments[i__27166__auto___30829]));

var G__30830 = (i__27166__auto___30829 + (1));
i__27166__auto___30829 = G__30830;
continue;
} else {
}
break;
}

var G__30827 = args30825.length;
switch (G__30827) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30825.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30832 = [];
var len__27165__auto___30883 = arguments.length;
var i__27166__auto___30884 = (0);
while(true){
if((i__27166__auto___30884 < len__27165__auto___30883)){
args30832.push((arguments[i__27166__auto___30884]));

var G__30885 = (i__27166__auto___30884 + (1));
i__27166__auto___30884 = G__30885;
continue;
} else {
}
break;
}

var G__30834 = args30832.length;
switch (G__30834) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30832.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28262__auto___30887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30887,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30887,out){
return (function (state_30858){
var state_val_30859 = (state_30858[(1)]);
if((state_val_30859 === (7))){
var inst_30853 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
var statearr_30860_30888 = state_30858__$1;
(statearr_30860_30888[(2)] = inst_30853);

(statearr_30860_30888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (1))){
var inst_30835 = null;
var state_30858__$1 = (function (){var statearr_30861 = state_30858;
(statearr_30861[(7)] = inst_30835);

return statearr_30861;
})();
var statearr_30862_30889 = state_30858__$1;
(statearr_30862_30889[(2)] = null);

(statearr_30862_30889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (4))){
var inst_30838 = (state_30858[(8)]);
var inst_30838__$1 = (state_30858[(2)]);
var inst_30839 = (inst_30838__$1 == null);
var inst_30840 = cljs.core.not.call(null,inst_30839);
var state_30858__$1 = (function (){var statearr_30863 = state_30858;
(statearr_30863[(8)] = inst_30838__$1);

return statearr_30863;
})();
if(inst_30840){
var statearr_30864_30890 = state_30858__$1;
(statearr_30864_30890[(1)] = (5));

} else {
var statearr_30865_30891 = state_30858__$1;
(statearr_30865_30891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (6))){
var state_30858__$1 = state_30858;
var statearr_30866_30892 = state_30858__$1;
(statearr_30866_30892[(2)] = null);

(statearr_30866_30892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (3))){
var inst_30855 = (state_30858[(2)]);
var inst_30856 = cljs.core.async.close_BANG_.call(null,out);
var state_30858__$1 = (function (){var statearr_30867 = state_30858;
(statearr_30867[(9)] = inst_30855);

return statearr_30867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30858__$1,inst_30856);
} else {
if((state_val_30859 === (2))){
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30858__$1,(4),ch);
} else {
if((state_val_30859 === (11))){
var inst_30838 = (state_30858[(8)]);
var inst_30847 = (state_30858[(2)]);
var inst_30835 = inst_30838;
var state_30858__$1 = (function (){var statearr_30868 = state_30858;
(statearr_30868[(7)] = inst_30835);

(statearr_30868[(10)] = inst_30847);

return statearr_30868;
})();
var statearr_30869_30893 = state_30858__$1;
(statearr_30869_30893[(2)] = null);

(statearr_30869_30893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (9))){
var inst_30838 = (state_30858[(8)]);
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30858__$1,(11),out,inst_30838);
} else {
if((state_val_30859 === (5))){
var inst_30838 = (state_30858[(8)]);
var inst_30835 = (state_30858[(7)]);
var inst_30842 = cljs.core._EQ_.call(null,inst_30838,inst_30835);
var state_30858__$1 = state_30858;
if(inst_30842){
var statearr_30871_30894 = state_30858__$1;
(statearr_30871_30894[(1)] = (8));

} else {
var statearr_30872_30895 = state_30858__$1;
(statearr_30872_30895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (10))){
var inst_30850 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
var statearr_30873_30896 = state_30858__$1;
(statearr_30873_30896[(2)] = inst_30850);

(statearr_30873_30896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30859 === (8))){
var inst_30835 = (state_30858[(7)]);
var tmp30870 = inst_30835;
var inst_30835__$1 = tmp30870;
var state_30858__$1 = (function (){var statearr_30874 = state_30858;
(statearr_30874[(7)] = inst_30835__$1);

return statearr_30874;
})();
var statearr_30875_30897 = state_30858__$1;
(statearr_30875_30897[(2)] = null);

(statearr_30875_30897[(1)] = (2));


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
});})(c__28262__auto___30887,out))
;
return ((function (switch__28150__auto__,c__28262__auto___30887,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30879 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30879[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30879[(1)] = (1));

return statearr_30879;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30858){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30880){if((e30880 instanceof Object)){
var ex__28154__auto__ = e30880;
var statearr_30881_30898 = state_30858;
(statearr_30881_30898[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30899 = state_30858;
state_30858 = G__30899;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30887,out))
})();
var state__28264__auto__ = (function (){var statearr_30882 = f__28263__auto__.call(null);
(statearr_30882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30887);

return statearr_30882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30887,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30900 = [];
var len__27165__auto___30970 = arguments.length;
var i__27166__auto___30971 = (0);
while(true){
if((i__27166__auto___30971 < len__27165__auto___30970)){
args30900.push((arguments[i__27166__auto___30971]));

var G__30972 = (i__27166__auto___30971 + (1));
i__27166__auto___30971 = G__30972;
continue;
} else {
}
break;
}

var G__30902 = args30900.length;
switch (G__30902) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30900.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28262__auto___30974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___30974,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___30974,out){
return (function (state_30940){
var state_val_30941 = (state_30940[(1)]);
if((state_val_30941 === (7))){
var inst_30936 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30942_30975 = state_30940__$1;
(statearr_30942_30975[(2)] = inst_30936);

(statearr_30942_30975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (1))){
var inst_30903 = (new Array(n));
var inst_30904 = inst_30903;
var inst_30905 = (0);
var state_30940__$1 = (function (){var statearr_30943 = state_30940;
(statearr_30943[(7)] = inst_30905);

(statearr_30943[(8)] = inst_30904);

return statearr_30943;
})();
var statearr_30944_30976 = state_30940__$1;
(statearr_30944_30976[(2)] = null);

(statearr_30944_30976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (4))){
var inst_30908 = (state_30940[(9)]);
var inst_30908__$1 = (state_30940[(2)]);
var inst_30909 = (inst_30908__$1 == null);
var inst_30910 = cljs.core.not.call(null,inst_30909);
var state_30940__$1 = (function (){var statearr_30945 = state_30940;
(statearr_30945[(9)] = inst_30908__$1);

return statearr_30945;
})();
if(inst_30910){
var statearr_30946_30977 = state_30940__$1;
(statearr_30946_30977[(1)] = (5));

} else {
var statearr_30947_30978 = state_30940__$1;
(statearr_30947_30978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (15))){
var inst_30930 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30948_30979 = state_30940__$1;
(statearr_30948_30979[(2)] = inst_30930);

(statearr_30948_30979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (13))){
var state_30940__$1 = state_30940;
var statearr_30949_30980 = state_30940__$1;
(statearr_30949_30980[(2)] = null);

(statearr_30949_30980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (6))){
var inst_30905 = (state_30940[(7)]);
var inst_30926 = (inst_30905 > (0));
var state_30940__$1 = state_30940;
if(cljs.core.truth_(inst_30926)){
var statearr_30950_30981 = state_30940__$1;
(statearr_30950_30981[(1)] = (12));

} else {
var statearr_30951_30982 = state_30940__$1;
(statearr_30951_30982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (3))){
var inst_30938 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30940__$1,inst_30938);
} else {
if((state_val_30941 === (12))){
var inst_30904 = (state_30940[(8)]);
var inst_30928 = cljs.core.vec.call(null,inst_30904);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30940__$1,(15),out,inst_30928);
} else {
if((state_val_30941 === (2))){
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30940__$1,(4),ch);
} else {
if((state_val_30941 === (11))){
var inst_30920 = (state_30940[(2)]);
var inst_30921 = (new Array(n));
var inst_30904 = inst_30921;
var inst_30905 = (0);
var state_30940__$1 = (function (){var statearr_30952 = state_30940;
(statearr_30952[(10)] = inst_30920);

(statearr_30952[(7)] = inst_30905);

(statearr_30952[(8)] = inst_30904);

return statearr_30952;
})();
var statearr_30953_30983 = state_30940__$1;
(statearr_30953_30983[(2)] = null);

(statearr_30953_30983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (9))){
var inst_30904 = (state_30940[(8)]);
var inst_30918 = cljs.core.vec.call(null,inst_30904);
var state_30940__$1 = state_30940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30940__$1,(11),out,inst_30918);
} else {
if((state_val_30941 === (5))){
var inst_30908 = (state_30940[(9)]);
var inst_30905 = (state_30940[(7)]);
var inst_30904 = (state_30940[(8)]);
var inst_30913 = (state_30940[(11)]);
var inst_30912 = (inst_30904[inst_30905] = inst_30908);
var inst_30913__$1 = (inst_30905 + (1));
var inst_30914 = (inst_30913__$1 < n);
var state_30940__$1 = (function (){var statearr_30954 = state_30940;
(statearr_30954[(12)] = inst_30912);

(statearr_30954[(11)] = inst_30913__$1);

return statearr_30954;
})();
if(cljs.core.truth_(inst_30914)){
var statearr_30955_30984 = state_30940__$1;
(statearr_30955_30984[(1)] = (8));

} else {
var statearr_30956_30985 = state_30940__$1;
(statearr_30956_30985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (14))){
var inst_30933 = (state_30940[(2)]);
var inst_30934 = cljs.core.async.close_BANG_.call(null,out);
var state_30940__$1 = (function (){var statearr_30958 = state_30940;
(statearr_30958[(13)] = inst_30933);

return statearr_30958;
})();
var statearr_30959_30986 = state_30940__$1;
(statearr_30959_30986[(2)] = inst_30934);

(statearr_30959_30986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (10))){
var inst_30924 = (state_30940[(2)]);
var state_30940__$1 = state_30940;
var statearr_30960_30987 = state_30940__$1;
(statearr_30960_30987[(2)] = inst_30924);

(statearr_30960_30987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30941 === (8))){
var inst_30904 = (state_30940[(8)]);
var inst_30913 = (state_30940[(11)]);
var tmp30957 = inst_30904;
var inst_30904__$1 = tmp30957;
var inst_30905 = inst_30913;
var state_30940__$1 = (function (){var statearr_30961 = state_30940;
(statearr_30961[(7)] = inst_30905);

(statearr_30961[(8)] = inst_30904__$1);

return statearr_30961;
})();
var statearr_30962_30988 = state_30940__$1;
(statearr_30962_30988[(2)] = null);

(statearr_30962_30988[(1)] = (2));


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
});})(c__28262__auto___30974,out))
;
return ((function (switch__28150__auto__,c__28262__auto___30974,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_30966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30966[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_30966[(1)] = (1));

return statearr_30966;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_30940){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_30940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e30967){if((e30967 instanceof Object)){
var ex__28154__auto__ = e30967;
var statearr_30968_30989 = state_30940;
(statearr_30968_30989[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30990 = state_30940;
state_30940 = G__30990;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_30940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_30940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___30974,out))
})();
var state__28264__auto__ = (function (){var statearr_30969 = f__28263__auto__.call(null);
(statearr_30969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___30974);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___30974,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30991 = [];
var len__27165__auto___31065 = arguments.length;
var i__27166__auto___31066 = (0);
while(true){
if((i__27166__auto___31066 < len__27165__auto___31065)){
args30991.push((arguments[i__27166__auto___31066]));

var G__31067 = (i__27166__auto___31066 + (1));
i__27166__auto___31066 = G__31067;
continue;
} else {
}
break;
}

var G__30993 = args30991.length;
switch (G__30993) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30991.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28262__auto___31069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28262__auto___31069,out){
return (function (){
var f__28263__auto__ = (function (){var switch__28150__auto__ = ((function (c__28262__auto___31069,out){
return (function (state_31035){
var state_val_31036 = (state_31035[(1)]);
if((state_val_31036 === (7))){
var inst_31031 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31037_31070 = state_31035__$1;
(statearr_31037_31070[(2)] = inst_31031);

(statearr_31037_31070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (1))){
var inst_30994 = [];
var inst_30995 = inst_30994;
var inst_30996 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31035__$1 = (function (){var statearr_31038 = state_31035;
(statearr_31038[(7)] = inst_30996);

(statearr_31038[(8)] = inst_30995);

return statearr_31038;
})();
var statearr_31039_31071 = state_31035__$1;
(statearr_31039_31071[(2)] = null);

(statearr_31039_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (4))){
var inst_30999 = (state_31035[(9)]);
var inst_30999__$1 = (state_31035[(2)]);
var inst_31000 = (inst_30999__$1 == null);
var inst_31001 = cljs.core.not.call(null,inst_31000);
var state_31035__$1 = (function (){var statearr_31040 = state_31035;
(statearr_31040[(9)] = inst_30999__$1);

return statearr_31040;
})();
if(inst_31001){
var statearr_31041_31072 = state_31035__$1;
(statearr_31041_31072[(1)] = (5));

} else {
var statearr_31042_31073 = state_31035__$1;
(statearr_31042_31073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (15))){
var inst_31025 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31043_31074 = state_31035__$1;
(statearr_31043_31074[(2)] = inst_31025);

(statearr_31043_31074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (13))){
var state_31035__$1 = state_31035;
var statearr_31044_31075 = state_31035__$1;
(statearr_31044_31075[(2)] = null);

(statearr_31044_31075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (6))){
var inst_30995 = (state_31035[(8)]);
var inst_31020 = inst_30995.length;
var inst_31021 = (inst_31020 > (0));
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_31021)){
var statearr_31045_31076 = state_31035__$1;
(statearr_31045_31076[(1)] = (12));

} else {
var statearr_31046_31077 = state_31035__$1;
(statearr_31046_31077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (3))){
var inst_31033 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31035__$1,inst_31033);
} else {
if((state_val_31036 === (12))){
var inst_30995 = (state_31035[(8)]);
var inst_31023 = cljs.core.vec.call(null,inst_30995);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31035__$1,(15),out,inst_31023);
} else {
if((state_val_31036 === (2))){
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31035__$1,(4),ch);
} else {
if((state_val_31036 === (11))){
var inst_31003 = (state_31035[(10)]);
var inst_30999 = (state_31035[(9)]);
var inst_31013 = (state_31035[(2)]);
var inst_31014 = [];
var inst_31015 = inst_31014.push(inst_30999);
var inst_30995 = inst_31014;
var inst_30996 = inst_31003;
var state_31035__$1 = (function (){var statearr_31047 = state_31035;
(statearr_31047[(7)] = inst_30996);

(statearr_31047[(11)] = inst_31013);

(statearr_31047[(12)] = inst_31015);

(statearr_31047[(8)] = inst_30995);

return statearr_31047;
})();
var statearr_31048_31078 = state_31035__$1;
(statearr_31048_31078[(2)] = null);

(statearr_31048_31078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (9))){
var inst_30995 = (state_31035[(8)]);
var inst_31011 = cljs.core.vec.call(null,inst_30995);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31035__$1,(11),out,inst_31011);
} else {
if((state_val_31036 === (5))){
var inst_30996 = (state_31035[(7)]);
var inst_31003 = (state_31035[(10)]);
var inst_30999 = (state_31035[(9)]);
var inst_31003__$1 = f.call(null,inst_30999);
var inst_31004 = cljs.core._EQ_.call(null,inst_31003__$1,inst_30996);
var inst_31005 = cljs.core.keyword_identical_QMARK_.call(null,inst_30996,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31006 = (inst_31004) || (inst_31005);
var state_31035__$1 = (function (){var statearr_31049 = state_31035;
(statearr_31049[(10)] = inst_31003__$1);

return statearr_31049;
})();
if(cljs.core.truth_(inst_31006)){
var statearr_31050_31079 = state_31035__$1;
(statearr_31050_31079[(1)] = (8));

} else {
var statearr_31051_31080 = state_31035__$1;
(statearr_31051_31080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (14))){
var inst_31028 = (state_31035[(2)]);
var inst_31029 = cljs.core.async.close_BANG_.call(null,out);
var state_31035__$1 = (function (){var statearr_31053 = state_31035;
(statearr_31053[(13)] = inst_31028);

return statearr_31053;
})();
var statearr_31054_31081 = state_31035__$1;
(statearr_31054_31081[(2)] = inst_31029);

(statearr_31054_31081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (10))){
var inst_31018 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31055_31082 = state_31035__$1;
(statearr_31055_31082[(2)] = inst_31018);

(statearr_31055_31082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (8))){
var inst_30995 = (state_31035[(8)]);
var inst_31003 = (state_31035[(10)]);
var inst_30999 = (state_31035[(9)]);
var inst_31008 = inst_30995.push(inst_30999);
var tmp31052 = inst_30995;
var inst_30995__$1 = tmp31052;
var inst_30996 = inst_31003;
var state_31035__$1 = (function (){var statearr_31056 = state_31035;
(statearr_31056[(7)] = inst_30996);

(statearr_31056[(8)] = inst_30995__$1);

(statearr_31056[(14)] = inst_31008);

return statearr_31056;
})();
var statearr_31057_31083 = state_31035__$1;
(statearr_31057_31083[(2)] = null);

(statearr_31057_31083[(1)] = (2));


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
});})(c__28262__auto___31069,out))
;
return ((function (switch__28150__auto__,c__28262__auto___31069,out){
return (function() {
var cljs$core$async$state_machine__28151__auto__ = null;
var cljs$core$async$state_machine__28151__auto____0 = (function (){
var statearr_31061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31061[(0)] = cljs$core$async$state_machine__28151__auto__);

(statearr_31061[(1)] = (1));

return statearr_31061;
});
var cljs$core$async$state_machine__28151__auto____1 = (function (state_31035){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_31035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e31062){if((e31062 instanceof Object)){
var ex__28154__auto__ = e31062;
var statearr_31063_31084 = state_31035;
(statearr_31063_31084[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31085 = state_31035;
state_31035 = G__31085;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
cljs$core$async$state_machine__28151__auto__ = function(state_31035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28151__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28151__auto____1.call(this,state_31035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28151__auto____0;
cljs$core$async$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28151__auto____1;
return cljs$core$async$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28262__auto___31069,out))
})();
var state__28264__auto__ = (function (){var statearr_31064 = f__28263__auto__.call(null);
(statearr_31064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28262__auto___31069);

return statearr_31064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28264__auto__);
});})(c__28262__auto___31069,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1494497612056