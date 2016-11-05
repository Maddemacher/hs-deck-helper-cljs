// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async23789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23789 = (function (fn_handler,f,meta23790){
this.fn_handler = fn_handler;
this.f = f;
this.meta23790 = meta23790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23791,meta23790__$1){
var self__ = this;
var _23791__$1 = this;
return (new cljs.core.async.t_cljs$core$async23789(self__.fn_handler,self__.f,meta23790__$1));
});

cljs.core.async.t_cljs$core$async23789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23791){
var self__ = this;
var _23791__$1 = this;
return self__.meta23790;
});

cljs.core.async.t_cljs$core$async23789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta23790","meta23790",816345506,null)], null);
});

cljs.core.async.t_cljs$core$async23789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23789";

cljs.core.async.t_cljs$core$async23789.cljs$lang$ctorPrWriter = (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async23789");
});

cljs.core.async.__GT_t_cljs$core$async23789 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async23789(fn_handler__$1,f__$1,meta23790){
return (new cljs.core.async.t_cljs$core$async23789(fn_handler__$1,f__$1,meta23790));
});

}

return (new cljs.core.async.t_cljs$core$async23789(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args23794 = [];
var len__21450__auto___23797 = arguments.length;
var i__21451__auto___23798 = (0);
while(true){
if((i__21451__auto___23798 < len__21450__auto___23797)){
args23794.push((arguments[i__21451__auto___23798]));

var G__23799 = (i__21451__auto___23798 + (1));
i__21451__auto___23798 = G__23799;
continue;
} else {
}
break;
}

var G__23796 = args23794.length;
switch (G__23796) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23794.length)].join('')));

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
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

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
var args23801 = [];
var len__21450__auto___23804 = arguments.length;
var i__21451__auto___23805 = (0);
while(true){
if((i__21451__auto___23805 < len__21450__auto___23804)){
args23801.push((arguments[i__21451__auto___23805]));

var G__23806 = (i__21451__auto___23805 + (1));
i__21451__auto___23805 = G__23806;
continue;
} else {
}
break;
}

var G__23803 = args23801.length;
switch (G__23803) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23801.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23808 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23808);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23808,ret){
return (function (){
return fn1.call(null,val_23808);
});})(val_23808,ret))
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
var args23809 = [];
var len__21450__auto___23812 = arguments.length;
var i__21451__auto___23813 = (0);
while(true){
if((i__21451__auto___23813 < len__21450__auto___23812)){
args23809.push((arguments[i__21451__auto___23813]));

var G__23814 = (i__21451__auto___23813 + (1));
i__21451__auto___23813 = G__23814;
continue;
} else {
}
break;
}

var G__23811 = args23809.length;
switch (G__23811) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23809.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
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
var n__21284__auto___23816 = n;
var x_23817 = (0);
while(true){
if((x_23817 < n__21284__auto___23816)){
(a[x_23817] = (0));

var G__23818 = (x_23817 + (1));
x_23817 = G__23818;
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

var G__23819 = (i + (1));
i = G__23819;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23823 = (function (alt_flag,flag,meta23824){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23824 = meta23824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23825,meta23824__$1){
var self__ = this;
var _23825__$1 = this;
return (new cljs.core.async.t_cljs$core$async23823(self__.alt_flag,self__.flag,meta23824__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23825){
var self__ = this;
var _23825__$1 = this;
return self__.meta23824;
});})(flag))
;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23823.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23824","meta23824",1976837377,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23823";

cljs.core.async.t_cljs$core$async23823.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async23823");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23823 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23823(alt_flag__$1,flag__$1,meta23824){
return (new cljs.core.async.t_cljs$core$async23823(alt_flag__$1,flag__$1,meta23824));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23823(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23829 = (function (alt_handler,flag,cb,meta23830){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23830 = meta23830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23831,meta23830__$1){
var self__ = this;
var _23831__$1 = this;
return (new cljs.core.async.t_cljs$core$async23829(self__.alt_handler,self__.flag,self__.cb,meta23830__$1));
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23831){
var self__ = this;
var _23831__$1 = this;
return self__.meta23830;
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23830","meta23830",-225402136,null)], null);
});

cljs.core.async.t_cljs$core$async23829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23829";

cljs.core.async.t_cljs$core$async23829.cljs$lang$ctorPrWriter = (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async23829");
});

cljs.core.async.__GT_t_cljs$core$async23829 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23829(alt_handler__$1,flag__$1,cb__$1,meta23830){
return (new cljs.core.async.t_cljs$core$async23829(alt_handler__$1,flag__$1,cb__$1,meta23830));
});

}

return (new cljs.core.async.t_cljs$core$async23829(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23832_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23832_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23833_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20270__auto__ = wport;
if(cljs.core.truth_(or__20270__auto__)){
return or__20270__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23834 = (i + (1));
i = G__23834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20270__auto__ = ret;
if(cljs.core.truth_(or__20270__auto__)){
return or__20270__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__20258__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20258__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20258__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
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
var args__21457__auto__ = [];
var len__21450__auto___23840 = arguments.length;
var i__21451__auto___23841 = (0);
while(true){
if((i__21451__auto___23841 < len__21450__auto___23840)){
args__21457__auto__.push((arguments[i__21451__auto___23841]));

var G__23842 = (i__21451__auto___23841 + (1));
i__21451__auto___23841 = G__23842;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((1) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21458__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23837){
var map__23838 = p__23837;
var map__23838__$1 = ((((!((map__23838 == null)))?((((map__23838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23838):map__23838);
var opts = map__23838__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23835){
var G__23836 = cljs.core.first.call(null,seq23835);
var seq23835__$1 = cljs.core.next.call(null,seq23835);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23836,seq23835__$1);
});

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23843 = [];
var len__21450__auto___23893 = arguments.length;
var i__21451__auto___23894 = (0);
while(true){
if((i__21451__auto___23894 < len__21450__auto___23893)){
args23843.push((arguments[i__21451__auto___23894]));

var G__23895 = (i__21451__auto___23894 + (1));
i__21451__auto___23894 = G__23895;
continue;
} else {
}
break;
}

var G__23845 = args23843.length;
switch (G__23845) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23843.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23727__auto___23897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___23897){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___23897){
return (function (state_23869){
var state_val_23870 = (state_23869[(1)]);
if((state_val_23870 === (7))){
var inst_23865 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23871_23898 = state_23869__$1;
(statearr_23871_23898[(2)] = inst_23865);

(statearr_23871_23898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (1))){
var state_23869__$1 = state_23869;
var statearr_23872_23899 = state_23869__$1;
(statearr_23872_23899[(2)] = null);

(statearr_23872_23899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (4))){
var inst_23848 = (state_23869[(7)]);
var inst_23848__$1 = (state_23869[(2)]);
var inst_23849 = (inst_23848__$1 == null);
var state_23869__$1 = (function (){var statearr_23873 = state_23869;
(statearr_23873[(7)] = inst_23848__$1);

return statearr_23873;
})();
if(cljs.core.truth_(inst_23849)){
var statearr_23874_23900 = state_23869__$1;
(statearr_23874_23900[(1)] = (5));

} else {
var statearr_23875_23901 = state_23869__$1;
(statearr_23875_23901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (13))){
var state_23869__$1 = state_23869;
var statearr_23876_23902 = state_23869__$1;
(statearr_23876_23902[(2)] = null);

(statearr_23876_23902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (6))){
var inst_23848 = (state_23869[(7)]);
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23869__$1,(11),to,inst_23848);
} else {
if((state_val_23870 === (3))){
var inst_23867 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23869__$1,inst_23867);
} else {
if((state_val_23870 === (12))){
var state_23869__$1 = state_23869;
var statearr_23877_23903 = state_23869__$1;
(statearr_23877_23903[(2)] = null);

(statearr_23877_23903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (2))){
var state_23869__$1 = state_23869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23869__$1,(4),from);
} else {
if((state_val_23870 === (11))){
var inst_23858 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
if(cljs.core.truth_(inst_23858)){
var statearr_23878_23904 = state_23869__$1;
(statearr_23878_23904[(1)] = (12));

} else {
var statearr_23879_23905 = state_23869__$1;
(statearr_23879_23905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (9))){
var state_23869__$1 = state_23869;
var statearr_23880_23906 = state_23869__$1;
(statearr_23880_23906[(2)] = null);

(statearr_23880_23906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (5))){
var state_23869__$1 = state_23869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23881_23907 = state_23869__$1;
(statearr_23881_23907[(1)] = (8));

} else {
var statearr_23882_23908 = state_23869__$1;
(statearr_23882_23908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (14))){
var inst_23863 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23883_23909 = state_23869__$1;
(statearr_23883_23909[(2)] = inst_23863);

(statearr_23883_23909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (10))){
var inst_23855 = (state_23869[(2)]);
var state_23869__$1 = state_23869;
var statearr_23884_23910 = state_23869__$1;
(statearr_23884_23910[(2)] = inst_23855);

(statearr_23884_23910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23870 === (8))){
var inst_23852 = cljs.core.async.close_BANG_.call(null,to);
var state_23869__$1 = state_23869;
var statearr_23885_23911 = state_23869__$1;
(statearr_23885_23911[(2)] = inst_23852);

(statearr_23885_23911[(1)] = (10));


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
});})(c__23727__auto___23897))
;
return ((function (switch__23660__auto__,c__23727__auto___23897){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_23889 = [null,null,null,null,null,null,null,null];
(statearr_23889[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_23889[(1)] = (1));

return statearr_23889;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_23869){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_23869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e23890){if((e23890 instanceof Object)){
var ex__23664__auto__ = e23890;
var statearr_23891_23912 = state_23869;
(statearr_23891_23912[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23913 = state_23869;
state_23869 = G__23913;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_23869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_23869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___23897))
})();
var state__23729__auto__ = (function (){var statearr_23892 = f__23728__auto__.call(null);
(statearr_23892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___23897);

return statearr_23892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___23897))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24101){
var vec__24102 = p__24101;
var v = cljs.core.nth.call(null,vec__24102,(0),null);
var p = cljs.core.nth.call(null,vec__24102,(1),null);
var job = vec__24102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23727__auto___24288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___24288,res,vec__24102,v,p,job,jobs,results){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___24288,res,vec__24102,v,p,job,jobs,results){
return (function (state_24109){
var state_val_24110 = (state_24109[(1)]);
if((state_val_24110 === (1))){
var state_24109__$1 = state_24109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24109__$1,(2),res,v);
} else {
if((state_val_24110 === (2))){
var inst_24106 = (state_24109[(2)]);
var inst_24107 = cljs.core.async.close_BANG_.call(null,res);
var state_24109__$1 = (function (){var statearr_24111 = state_24109;
(statearr_24111[(7)] = inst_24106);

return statearr_24111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24109__$1,inst_24107);
} else {
return null;
}
}
});})(c__23727__auto___24288,res,vec__24102,v,p,job,jobs,results))
;
return ((function (switch__23660__auto__,c__23727__auto___24288,res,vec__24102,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_24115 = [null,null,null,null,null,null,null,null];
(statearr_24115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_24115[(1)] = (1));

return statearr_24115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_24109){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24116){if((e24116 instanceof Object)){
var ex__23664__auto__ = e24116;
var statearr_24117_24289 = state_24109;
(statearr_24117_24289[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24290 = state_24109;
state_24109 = G__24290;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_24109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_24109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___24288,res,vec__24102,v,p,job,jobs,results))
})();
var state__23729__auto__ = (function (){var statearr_24118 = f__23728__auto__.call(null);
(statearr_24118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___24288);

return statearr_24118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___24288,res,vec__24102,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24119){
var vec__24120 = p__24119;
var v = cljs.core.nth.call(null,vec__24120,(0),null);
var p = cljs.core.nth.call(null,vec__24120,(1),null);
var job = vec__24120;
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
var n__21284__auto___24291 = n;
var __24292 = (0);
while(true){
if((__24292 < n__21284__auto___24291)){
var G__24123_24293 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24123_24293) {
case "compute":
var c__23727__auto___24295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24292,c__23727__auto___24295,G__24123_24293,n__21284__auto___24291,jobs,results,process,async){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (__24292,c__23727__auto___24295,G__24123_24293,n__21284__auto___24291,jobs,results,process,async){
return (function (state_24136){
var state_val_24137 = (state_24136[(1)]);
if((state_val_24137 === (1))){
var state_24136__$1 = state_24136;
var statearr_24138_24296 = state_24136__$1;
(statearr_24138_24296[(2)] = null);

(statearr_24138_24296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (2))){
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24136__$1,(4),jobs);
} else {
if((state_val_24137 === (3))){
var inst_24134 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24136__$1,inst_24134);
} else {
if((state_val_24137 === (4))){
var inst_24126 = (state_24136[(2)]);
var inst_24127 = process.call(null,inst_24126);
var state_24136__$1 = state_24136;
if(cljs.core.truth_(inst_24127)){
var statearr_24139_24297 = state_24136__$1;
(statearr_24139_24297[(1)] = (5));

} else {
var statearr_24140_24298 = state_24136__$1;
(statearr_24140_24298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (5))){
var state_24136__$1 = state_24136;
var statearr_24141_24299 = state_24136__$1;
(statearr_24141_24299[(2)] = null);

(statearr_24141_24299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (6))){
var state_24136__$1 = state_24136;
var statearr_24142_24300 = state_24136__$1;
(statearr_24142_24300[(2)] = null);

(statearr_24142_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24137 === (7))){
var inst_24132 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
var statearr_24143_24301 = state_24136__$1;
(statearr_24143_24301[(2)] = inst_24132);

(statearr_24143_24301[(1)] = (3));


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
});})(__24292,c__23727__auto___24295,G__24123_24293,n__21284__auto___24291,jobs,results,process,async))
;
return ((function (__24292,switch__23660__auto__,c__23727__auto___24295,G__24123_24293,n__21284__auto___24291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_24147 = [null,null,null,null,null,null,null];
(statearr_24147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_24147[(1)] = (1));

return statearr_24147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_24136){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24148){if((e24148 instanceof Object)){
var ex__23664__auto__ = e24148;
var statearr_24149_24302 = state_24136;
(statearr_24149_24302[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24303 = state_24136;
state_24136 = G__24303;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_24136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_24136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(__24292,switch__23660__auto__,c__23727__auto___24295,G__24123_24293,n__21284__auto___24291,jobs,results,process,async))
})();
var state__23729__auto__ = (function (){var statearr_24150 = f__23728__auto__.call(null);
(statearr_24150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___24295);

return statearr_24150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(__24292,c__23727__auto___24295,G__24123_24293,n__21284__auto___24291,jobs,results,process,async))
);


break;
case "async":
var c__23727__auto___24304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24292,c__23727__auto___24304,G__24123_24293,n__21284__auto___24291,jobs,results,process,async){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (__24292,c__23727__auto___24304,G__24123_24293,n__21284__auto___24291,jobs,results,process,async){
return (function (state_24163){
var state_val_24164 = (state_24163[(1)]);
if((state_val_24164 === (1))){
var state_24163__$1 = state_24163;
var statearr_24165_24305 = state_24163__$1;
(statearr_24165_24305[(2)] = null);

(statearr_24165_24305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (2))){
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24163__$1,(4),jobs);
} else {
if((state_val_24164 === (3))){
var inst_24161 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else {
if((state_val_24164 === (4))){
var inst_24153 = (state_24163[(2)]);
var inst_24154 = async.call(null,inst_24153);
var state_24163__$1 = state_24163;
if(cljs.core.truth_(inst_24154)){
var statearr_24166_24306 = state_24163__$1;
(statearr_24166_24306[(1)] = (5));

} else {
var statearr_24167_24307 = state_24163__$1;
(statearr_24167_24307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (5))){
var state_24163__$1 = state_24163;
var statearr_24168_24308 = state_24163__$1;
(statearr_24168_24308[(2)] = null);

(statearr_24168_24308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (6))){
var state_24163__$1 = state_24163;
var statearr_24169_24309 = state_24163__$1;
(statearr_24169_24309[(2)] = null);

(statearr_24169_24309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24164 === (7))){
var inst_24159 = (state_24163[(2)]);
var state_24163__$1 = state_24163;
var statearr_24170_24310 = state_24163__$1;
(statearr_24170_24310[(2)] = inst_24159);

(statearr_24170_24310[(1)] = (3));


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
});})(__24292,c__23727__auto___24304,G__24123_24293,n__21284__auto___24291,jobs,results,process,async))
;
return ((function (__24292,switch__23660__auto__,c__23727__auto___24304,G__24123_24293,n__21284__auto___24291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_24174 = [null,null,null,null,null,null,null];
(statearr_24174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_24174[(1)] = (1));

return statearr_24174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_24163){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24175){if((e24175 instanceof Object)){
var ex__23664__auto__ = e24175;
var statearr_24176_24311 = state_24163;
(statearr_24176_24311[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24312 = state_24163;
state_24163 = G__24312;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(__24292,switch__23660__auto__,c__23727__auto___24304,G__24123_24293,n__21284__auto___24291,jobs,results,process,async))
})();
var state__23729__auto__ = (function (){var statearr_24177 = f__23728__auto__.call(null);
(statearr_24177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___24304);

return statearr_24177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(__24292,c__23727__auto___24304,G__24123_24293,n__21284__auto___24291,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24313 = (__24292 + (1));
__24292 = G__24313;
continue;
} else {
}
break;
}

var c__23727__auto___24314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___24314,jobs,results,process,async){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___24314,jobs,results,process,async){
return (function (state_24199){
var state_val_24200 = (state_24199[(1)]);
if((state_val_24200 === (1))){
var state_24199__$1 = state_24199;
var statearr_24201_24315 = state_24199__$1;
(statearr_24201_24315[(2)] = null);

(statearr_24201_24315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24200 === (2))){
var state_24199__$1 = state_24199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24199__$1,(4),from);
} else {
if((state_val_24200 === (3))){
var inst_24197 = (state_24199[(2)]);
var state_24199__$1 = state_24199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24199__$1,inst_24197);
} else {
if((state_val_24200 === (4))){
var inst_24180 = (state_24199[(7)]);
var inst_24180__$1 = (state_24199[(2)]);
var inst_24181 = (inst_24180__$1 == null);
var state_24199__$1 = (function (){var statearr_24202 = state_24199;
(statearr_24202[(7)] = inst_24180__$1);

return statearr_24202;
})();
if(cljs.core.truth_(inst_24181)){
var statearr_24203_24316 = state_24199__$1;
(statearr_24203_24316[(1)] = (5));

} else {
var statearr_24204_24317 = state_24199__$1;
(statearr_24204_24317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24200 === (5))){
var inst_24183 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24199__$1 = state_24199;
var statearr_24205_24318 = state_24199__$1;
(statearr_24205_24318[(2)] = inst_24183);

(statearr_24205_24318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24200 === (6))){
var inst_24185 = (state_24199[(8)]);
var inst_24180 = (state_24199[(7)]);
var inst_24185__$1 = cljs.core.async.chan.call(null,(1));
var inst_24186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24187 = [inst_24180,inst_24185__$1];
var inst_24188 = (new cljs.core.PersistentVector(null,2,(5),inst_24186,inst_24187,null));
var state_24199__$1 = (function (){var statearr_24206 = state_24199;
(statearr_24206[(8)] = inst_24185__$1);

return statearr_24206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24199__$1,(8),jobs,inst_24188);
} else {
if((state_val_24200 === (7))){
var inst_24195 = (state_24199[(2)]);
var state_24199__$1 = state_24199;
var statearr_24207_24319 = state_24199__$1;
(statearr_24207_24319[(2)] = inst_24195);

(statearr_24207_24319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24200 === (8))){
var inst_24185 = (state_24199[(8)]);
var inst_24190 = (state_24199[(2)]);
var state_24199__$1 = (function (){var statearr_24208 = state_24199;
(statearr_24208[(9)] = inst_24190);

return statearr_24208;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24199__$1,(9),results,inst_24185);
} else {
if((state_val_24200 === (9))){
var inst_24192 = (state_24199[(2)]);
var state_24199__$1 = (function (){var statearr_24209 = state_24199;
(statearr_24209[(10)] = inst_24192);

return statearr_24209;
})();
var statearr_24210_24320 = state_24199__$1;
(statearr_24210_24320[(2)] = null);

(statearr_24210_24320[(1)] = (2));


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
});})(c__23727__auto___24314,jobs,results,process,async))
;
return ((function (switch__23660__auto__,c__23727__auto___24314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_24214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_24214[(1)] = (1));

return statearr_24214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_24199){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24215){if((e24215 instanceof Object)){
var ex__23664__auto__ = e24215;
var statearr_24216_24321 = state_24199;
(statearr_24216_24321[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24322 = state_24199;
state_24199 = G__24322;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_24199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_24199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___24314,jobs,results,process,async))
})();
var state__23729__auto__ = (function (){var statearr_24217 = f__23728__auto__.call(null);
(statearr_24217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___24314);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___24314,jobs,results,process,async))
);


var c__23727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto__,jobs,results,process,async){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto__,jobs,results,process,async){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (7))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24257_24323 = state_24255__$1;
(statearr_24257_24323[(2)] = inst_24251);

(statearr_24257_24323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (20))){
var state_24255__$1 = state_24255;
var statearr_24258_24324 = state_24255__$1;
(statearr_24258_24324[(2)] = null);

(statearr_24258_24324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (1))){
var state_24255__$1 = state_24255;
var statearr_24259_24325 = state_24255__$1;
(statearr_24259_24325[(2)] = null);

(statearr_24259_24325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (4))){
var inst_24220 = (state_24255[(7)]);
var inst_24220__$1 = (state_24255[(2)]);
var inst_24221 = (inst_24220__$1 == null);
var state_24255__$1 = (function (){var statearr_24260 = state_24255;
(statearr_24260[(7)] = inst_24220__$1);

return statearr_24260;
})();
if(cljs.core.truth_(inst_24221)){
var statearr_24261_24326 = state_24255__$1;
(statearr_24261_24326[(1)] = (5));

} else {
var statearr_24262_24327 = state_24255__$1;
(statearr_24262_24327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (15))){
var inst_24233 = (state_24255[(8)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(18),to,inst_24233);
} else {
if((state_val_24256 === (21))){
var inst_24246 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24263_24328 = state_24255__$1;
(statearr_24263_24328[(2)] = inst_24246);

(statearr_24263_24328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (13))){
var inst_24248 = (state_24255[(2)]);
var state_24255__$1 = (function (){var statearr_24264 = state_24255;
(statearr_24264[(9)] = inst_24248);

return statearr_24264;
})();
var statearr_24265_24329 = state_24255__$1;
(statearr_24265_24329[(2)] = null);

(statearr_24265_24329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var inst_24220 = (state_24255[(7)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(11),inst_24220);
} else {
if((state_val_24256 === (17))){
var inst_24241 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24241)){
var statearr_24266_24330 = state_24255__$1;
(statearr_24266_24330[(1)] = (19));

} else {
var statearr_24267_24331 = state_24255__$1;
(statearr_24267_24331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (3))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (12))){
var inst_24230 = (state_24255[(10)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(14),inst_24230);
} else {
if((state_val_24256 === (2))){
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24255__$1,(4),results);
} else {
if((state_val_24256 === (19))){
var state_24255__$1 = state_24255;
var statearr_24268_24332 = state_24255__$1;
(statearr_24268_24332[(2)] = null);

(statearr_24268_24332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (11))){
var inst_24230 = (state_24255[(2)]);
var state_24255__$1 = (function (){var statearr_24269 = state_24255;
(statearr_24269[(10)] = inst_24230);

return statearr_24269;
})();
var statearr_24270_24333 = state_24255__$1;
(statearr_24270_24333[(2)] = null);

(statearr_24270_24333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (9))){
var state_24255__$1 = state_24255;
var statearr_24271_24334 = state_24255__$1;
(statearr_24271_24334[(2)] = null);

(statearr_24271_24334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (5))){
var state_24255__$1 = state_24255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24272_24335 = state_24255__$1;
(statearr_24272_24335[(1)] = (8));

} else {
var statearr_24273_24336 = state_24255__$1;
(statearr_24273_24336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (14))){
var inst_24235 = (state_24255[(11)]);
var inst_24233 = (state_24255[(8)]);
var inst_24233__$1 = (state_24255[(2)]);
var inst_24234 = (inst_24233__$1 == null);
var inst_24235__$1 = cljs.core.not.call(null,inst_24234);
var state_24255__$1 = (function (){var statearr_24274 = state_24255;
(statearr_24274[(11)] = inst_24235__$1);

(statearr_24274[(8)] = inst_24233__$1);

return statearr_24274;
})();
if(inst_24235__$1){
var statearr_24275_24337 = state_24255__$1;
(statearr_24275_24337[(1)] = (15));

} else {
var statearr_24276_24338 = state_24255__$1;
(statearr_24276_24338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (16))){
var inst_24235 = (state_24255[(11)]);
var state_24255__$1 = state_24255;
var statearr_24277_24339 = state_24255__$1;
(statearr_24277_24339[(2)] = inst_24235);

(statearr_24277_24339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (10))){
var inst_24227 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24278_24340 = state_24255__$1;
(statearr_24278_24340[(2)] = inst_24227);

(statearr_24278_24340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (18))){
var inst_24238 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24279_24341 = state_24255__$1;
(statearr_24279_24341[(2)] = inst_24238);

(statearr_24279_24341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (8))){
var inst_24224 = cljs.core.async.close_BANG_.call(null,to);
var state_24255__$1 = state_24255;
var statearr_24280_24342 = state_24255__$1;
(statearr_24280_24342[(2)] = inst_24224);

(statearr_24280_24342[(1)] = (10));


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
});})(c__23727__auto__,jobs,results,process,async))
;
return ((function (switch__23660__auto__,c__23727__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1 = (function (state_24255){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__23664__auto__ = e24285;
var statearr_24286_24343 = state_24255;
(statearr_24286_24343[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24344 = state_24255;
state_24255 = G__24344;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto__,jobs,results,process,async))
})();
var state__23729__auto__ = (function (){var statearr_24287 = f__23728__auto__.call(null);
(statearr_24287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto__);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto__,jobs,results,process,async))
);

return c__23727__auto__;
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
var args24345 = [];
var len__21450__auto___24348 = arguments.length;
var i__21451__auto___24349 = (0);
while(true){
if((i__21451__auto___24349 < len__21450__auto___24348)){
args24345.push((arguments[i__21451__auto___24349]));

var G__24350 = (i__21451__auto___24349 + (1));
i__21451__auto___24349 = G__24350;
continue;
} else {
}
break;
}

var G__24347 = args24345.length;
switch (G__24347) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24345.length)].join('')));

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
var args24352 = [];
var len__21450__auto___24355 = arguments.length;
var i__21451__auto___24356 = (0);
while(true){
if((i__21451__auto___24356 < len__21450__auto___24355)){
args24352.push((arguments[i__21451__auto___24356]));

var G__24357 = (i__21451__auto___24356 + (1));
i__21451__auto___24356 = G__24357;
continue;
} else {
}
break;
}

var G__24354 = args24352.length;
switch (G__24354) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24352.length)].join('')));

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
var args24359 = [];
var len__21450__auto___24412 = arguments.length;
var i__21451__auto___24413 = (0);
while(true){
if((i__21451__auto___24413 < len__21450__auto___24412)){
args24359.push((arguments[i__21451__auto___24413]));

var G__24414 = (i__21451__auto___24413 + (1));
i__21451__auto___24413 = G__24414;
continue;
} else {
}
break;
}

var G__24361 = args24359.length;
switch (G__24361) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24359.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23727__auto___24416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___24416,tc,fc){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___24416,tc,fc){
return (function (state_24387){
var state_val_24388 = (state_24387[(1)]);
if((state_val_24388 === (7))){
var inst_24383 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24389_24417 = state_24387__$1;
(statearr_24389_24417[(2)] = inst_24383);

(statearr_24389_24417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (1))){
var state_24387__$1 = state_24387;
var statearr_24390_24418 = state_24387__$1;
(statearr_24390_24418[(2)] = null);

(statearr_24390_24418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (4))){
var inst_24364 = (state_24387[(7)]);
var inst_24364__$1 = (state_24387[(2)]);
var inst_24365 = (inst_24364__$1 == null);
var state_24387__$1 = (function (){var statearr_24391 = state_24387;
(statearr_24391[(7)] = inst_24364__$1);

return statearr_24391;
})();
if(cljs.core.truth_(inst_24365)){
var statearr_24392_24419 = state_24387__$1;
(statearr_24392_24419[(1)] = (5));

} else {
var statearr_24393_24420 = state_24387__$1;
(statearr_24393_24420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (13))){
var state_24387__$1 = state_24387;
var statearr_24394_24421 = state_24387__$1;
(statearr_24394_24421[(2)] = null);

(statearr_24394_24421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (6))){
var inst_24364 = (state_24387[(7)]);
var inst_24370 = p.call(null,inst_24364);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24370)){
var statearr_24395_24422 = state_24387__$1;
(statearr_24395_24422[(1)] = (9));

} else {
var statearr_24396_24423 = state_24387__$1;
(statearr_24396_24423[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (3))){
var inst_24385 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24387__$1,inst_24385);
} else {
if((state_val_24388 === (12))){
var state_24387__$1 = state_24387;
var statearr_24397_24424 = state_24387__$1;
(statearr_24397_24424[(2)] = null);

(statearr_24397_24424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (2))){
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(4),ch);
} else {
if((state_val_24388 === (11))){
var inst_24364 = (state_24387[(7)]);
var inst_24374 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24387__$1,(8),inst_24374,inst_24364);
} else {
if((state_val_24388 === (9))){
var state_24387__$1 = state_24387;
var statearr_24398_24425 = state_24387__$1;
(statearr_24398_24425[(2)] = tc);

(statearr_24398_24425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (5))){
var inst_24367 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24368 = cljs.core.async.close_BANG_.call(null,fc);
var state_24387__$1 = (function (){var statearr_24399 = state_24387;
(statearr_24399[(8)] = inst_24367);

return statearr_24399;
})();
var statearr_24400_24426 = state_24387__$1;
(statearr_24400_24426[(2)] = inst_24368);

(statearr_24400_24426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (14))){
var inst_24381 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24401_24427 = state_24387__$1;
(statearr_24401_24427[(2)] = inst_24381);

(statearr_24401_24427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (10))){
var state_24387__$1 = state_24387;
var statearr_24402_24428 = state_24387__$1;
(statearr_24402_24428[(2)] = fc);

(statearr_24402_24428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (8))){
var inst_24376 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24376)){
var statearr_24403_24429 = state_24387__$1;
(statearr_24403_24429[(1)] = (12));

} else {
var statearr_24404_24430 = state_24387__$1;
(statearr_24404_24430[(1)] = (13));

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
});})(c__23727__auto___24416,tc,fc))
;
return ((function (switch__23660__auto__,c__23727__auto___24416,tc,fc){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_24408 = [null,null,null,null,null,null,null,null,null];
(statearr_24408[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_24408[(1)] = (1));

return statearr_24408;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_24387){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24409){if((e24409 instanceof Object)){
var ex__23664__auto__ = e24409;
var statearr_24410_24431 = state_24387;
(statearr_24410_24431[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24432 = state_24387;
state_24387 = G__24432;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_24387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_24387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___24416,tc,fc))
})();
var state__23729__auto__ = (function (){var statearr_24411 = f__23728__auto__.call(null);
(statearr_24411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___24416);

return statearr_24411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___24416,tc,fc))
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
var c__23727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto__){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto__){
return (function (state_24479){
var state_val_24480 = (state_24479[(1)]);
if((state_val_24480 === (1))){
var inst_24465 = init;
var state_24479__$1 = (function (){var statearr_24481 = state_24479;
(statearr_24481[(7)] = inst_24465);

return statearr_24481;
})();
var statearr_24482_24497 = state_24479__$1;
(statearr_24482_24497[(2)] = null);

(statearr_24482_24497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (2))){
var state_24479__$1 = state_24479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24479__$1,(4),ch);
} else {
if((state_val_24480 === (3))){
var inst_24477 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24479__$1,inst_24477);
} else {
if((state_val_24480 === (4))){
var inst_24468 = (state_24479[(8)]);
var inst_24468__$1 = (state_24479[(2)]);
var inst_24469 = (inst_24468__$1 == null);
var state_24479__$1 = (function (){var statearr_24483 = state_24479;
(statearr_24483[(8)] = inst_24468__$1);

return statearr_24483;
})();
if(cljs.core.truth_(inst_24469)){
var statearr_24484_24498 = state_24479__$1;
(statearr_24484_24498[(1)] = (5));

} else {
var statearr_24485_24499 = state_24479__$1;
(statearr_24485_24499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (5))){
var inst_24465 = (state_24479[(7)]);
var state_24479__$1 = state_24479;
var statearr_24486_24500 = state_24479__$1;
(statearr_24486_24500[(2)] = inst_24465);

(statearr_24486_24500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (6))){
var inst_24468 = (state_24479[(8)]);
var inst_24465 = (state_24479[(7)]);
var inst_24472 = f.call(null,inst_24465,inst_24468);
var inst_24465__$1 = inst_24472;
var state_24479__$1 = (function (){var statearr_24487 = state_24479;
(statearr_24487[(7)] = inst_24465__$1);

return statearr_24487;
})();
var statearr_24488_24501 = state_24479__$1;
(statearr_24488_24501[(2)] = null);

(statearr_24488_24501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (7))){
var inst_24475 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
var statearr_24489_24502 = state_24479__$1;
(statearr_24489_24502[(2)] = inst_24475);

(statearr_24489_24502[(1)] = (3));


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
});})(c__23727__auto__))
;
return ((function (switch__23660__auto__,c__23727__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23661__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23661__auto____0 = (function (){
var statearr_24493 = [null,null,null,null,null,null,null,null,null];
(statearr_24493[(0)] = cljs$core$async$reduce_$_state_machine__23661__auto__);

(statearr_24493[(1)] = (1));

return statearr_24493;
});
var cljs$core$async$reduce_$_state_machine__23661__auto____1 = (function (state_24479){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24494){if((e24494 instanceof Object)){
var ex__23664__auto__ = e24494;
var statearr_24495_24503 = state_24479;
(statearr_24495_24503[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24504 = state_24479;
state_24479 = G__24504;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23661__auto__ = function(state_24479){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23661__auto____1.call(this,state_24479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23661__auto____0;
cljs$core$async$reduce_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23661__auto____1;
return cljs$core$async$reduce_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto__))
})();
var state__23729__auto__ = (function (){var statearr_24496 = f__23728__auto__.call(null);
(statearr_24496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto__);

return statearr_24496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto__))
);

return c__23727__auto__;
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
var args24505 = [];
var len__21450__auto___24557 = arguments.length;
var i__21451__auto___24558 = (0);
while(true){
if((i__21451__auto___24558 < len__21450__auto___24557)){
args24505.push((arguments[i__21451__auto___24558]));

var G__24559 = (i__21451__auto___24558 + (1));
i__21451__auto___24558 = G__24559;
continue;
} else {
}
break;
}

var G__24507 = args24505.length;
switch (G__24507) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24505.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto__){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto__){
return (function (state_24532){
var state_val_24533 = (state_24532[(1)]);
if((state_val_24533 === (7))){
var inst_24514 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24534_24561 = state_24532__$1;
(statearr_24534_24561[(2)] = inst_24514);

(statearr_24534_24561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (1))){
var inst_24508 = cljs.core.seq.call(null,coll);
var inst_24509 = inst_24508;
var state_24532__$1 = (function (){var statearr_24535 = state_24532;
(statearr_24535[(7)] = inst_24509);

return statearr_24535;
})();
var statearr_24536_24562 = state_24532__$1;
(statearr_24536_24562[(2)] = null);

(statearr_24536_24562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (4))){
var inst_24509 = (state_24532[(7)]);
var inst_24512 = cljs.core.first.call(null,inst_24509);
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24532__$1,(7),ch,inst_24512);
} else {
if((state_val_24533 === (13))){
var inst_24526 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24537_24563 = state_24532__$1;
(statearr_24537_24563[(2)] = inst_24526);

(statearr_24537_24563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (6))){
var inst_24517 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
if(cljs.core.truth_(inst_24517)){
var statearr_24538_24564 = state_24532__$1;
(statearr_24538_24564[(1)] = (8));

} else {
var statearr_24539_24565 = state_24532__$1;
(statearr_24539_24565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (3))){
var inst_24530 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24532__$1,inst_24530);
} else {
if((state_val_24533 === (12))){
var state_24532__$1 = state_24532;
var statearr_24540_24566 = state_24532__$1;
(statearr_24540_24566[(2)] = null);

(statearr_24540_24566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (2))){
var inst_24509 = (state_24532[(7)]);
var state_24532__$1 = state_24532;
if(cljs.core.truth_(inst_24509)){
var statearr_24541_24567 = state_24532__$1;
(statearr_24541_24567[(1)] = (4));

} else {
var statearr_24542_24568 = state_24532__$1;
(statearr_24542_24568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (11))){
var inst_24523 = cljs.core.async.close_BANG_.call(null,ch);
var state_24532__$1 = state_24532;
var statearr_24543_24569 = state_24532__$1;
(statearr_24543_24569[(2)] = inst_24523);

(statearr_24543_24569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (9))){
var state_24532__$1 = state_24532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24544_24570 = state_24532__$1;
(statearr_24544_24570[(1)] = (11));

} else {
var statearr_24545_24571 = state_24532__$1;
(statearr_24545_24571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (5))){
var inst_24509 = (state_24532[(7)]);
var state_24532__$1 = state_24532;
var statearr_24546_24572 = state_24532__$1;
(statearr_24546_24572[(2)] = inst_24509);

(statearr_24546_24572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (10))){
var inst_24528 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24547_24573 = state_24532__$1;
(statearr_24547_24573[(2)] = inst_24528);

(statearr_24547_24573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (8))){
var inst_24509 = (state_24532[(7)]);
var inst_24519 = cljs.core.next.call(null,inst_24509);
var inst_24509__$1 = inst_24519;
var state_24532__$1 = (function (){var statearr_24548 = state_24532;
(statearr_24548[(7)] = inst_24509__$1);

return statearr_24548;
})();
var statearr_24549_24574 = state_24532__$1;
(statearr_24549_24574[(2)] = null);

(statearr_24549_24574[(1)] = (2));


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
});})(c__23727__auto__))
;
return ((function (switch__23660__auto__,c__23727__auto__){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_24553 = [null,null,null,null,null,null,null,null];
(statearr_24553[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_24553[(1)] = (1));

return statearr_24553;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_24532){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e24554){if((e24554 instanceof Object)){
var ex__23664__auto__ = e24554;
var statearr_24555_24575 = state_24532;
(statearr_24555_24575[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24576 = state_24532;
state_24532 = G__24576;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_24532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_24532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto__))
})();
var state__23729__auto__ = (function (){var statearr_24556 = f__23728__auto__.call(null);
(statearr_24556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto__);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto__))
);

return c__23727__auto__;
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
var x__20984__auto__ = (((_ == null))?null:_);
var m__20985__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,_);
} else {
var m__20985__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,_);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20985__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m,ch);
} else {
var m__20985__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m,ch);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m);
} else {
var m__20985__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24802 = (function (mult,ch,cs,meta24803){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24803 = meta24803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24804,meta24803__$1){
var self__ = this;
var _24804__$1 = this;
return (new cljs.core.async.t_cljs$core$async24802(self__.mult,self__.ch,self__.cs,meta24803__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24804){
var self__ = this;
var _24804__$1 = this;
return self__.meta24803;
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24803","meta24803",1073929129,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24802";

cljs.core.async.t_cljs$core$async24802.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async24802");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24802 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24802(mult__$1,ch__$1,cs__$1,meta24803){
return (new cljs.core.async.t_cljs$core$async24802(mult__$1,ch__$1,cs__$1,meta24803));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24802(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23727__auto___25027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25027,cs,m,dchan,dctr,done){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25027,cs,m,dchan,dctr,done){
return (function (state_24939){
var state_val_24940 = (state_24939[(1)]);
if((state_val_24940 === (7))){
var inst_24935 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24941_25028 = state_24939__$1;
(statearr_24941_25028[(2)] = inst_24935);

(statearr_24941_25028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (20))){
var inst_24838 = (state_24939[(7)]);
var inst_24850 = cljs.core.first.call(null,inst_24838);
var inst_24851 = cljs.core.nth.call(null,inst_24850,(0),null);
var inst_24852 = cljs.core.nth.call(null,inst_24850,(1),null);
var state_24939__$1 = (function (){var statearr_24942 = state_24939;
(statearr_24942[(8)] = inst_24851);

return statearr_24942;
})();
if(cljs.core.truth_(inst_24852)){
var statearr_24943_25029 = state_24939__$1;
(statearr_24943_25029[(1)] = (22));

} else {
var statearr_24944_25030 = state_24939__$1;
(statearr_24944_25030[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (27))){
var inst_24882 = (state_24939[(9)]);
var inst_24887 = (state_24939[(10)]);
var inst_24880 = (state_24939[(11)]);
var inst_24807 = (state_24939[(12)]);
var inst_24887__$1 = cljs.core._nth.call(null,inst_24880,inst_24882);
var inst_24888 = cljs.core.async.put_BANG_.call(null,inst_24887__$1,inst_24807,done);
var state_24939__$1 = (function (){var statearr_24945 = state_24939;
(statearr_24945[(10)] = inst_24887__$1);

return statearr_24945;
})();
if(cljs.core.truth_(inst_24888)){
var statearr_24946_25031 = state_24939__$1;
(statearr_24946_25031[(1)] = (30));

} else {
var statearr_24947_25032 = state_24939__$1;
(statearr_24947_25032[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (1))){
var state_24939__$1 = state_24939;
var statearr_24948_25033 = state_24939__$1;
(statearr_24948_25033[(2)] = null);

(statearr_24948_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (24))){
var inst_24838 = (state_24939[(7)]);
var inst_24857 = (state_24939[(2)]);
var inst_24858 = cljs.core.next.call(null,inst_24838);
var inst_24816 = inst_24858;
var inst_24817 = null;
var inst_24818 = (0);
var inst_24819 = (0);
var state_24939__$1 = (function (){var statearr_24949 = state_24939;
(statearr_24949[(13)] = inst_24819);

(statearr_24949[(14)] = inst_24816);

(statearr_24949[(15)] = inst_24818);

(statearr_24949[(16)] = inst_24817);

(statearr_24949[(17)] = inst_24857);

return statearr_24949;
})();
var statearr_24950_25034 = state_24939__$1;
(statearr_24950_25034[(2)] = null);

(statearr_24950_25034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (39))){
var state_24939__$1 = state_24939;
var statearr_24954_25035 = state_24939__$1;
(statearr_24954_25035[(2)] = null);

(statearr_24954_25035[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (4))){
var inst_24807 = (state_24939[(12)]);
var inst_24807__$1 = (state_24939[(2)]);
var inst_24808 = (inst_24807__$1 == null);
var state_24939__$1 = (function (){var statearr_24955 = state_24939;
(statearr_24955[(12)] = inst_24807__$1);

return statearr_24955;
})();
if(cljs.core.truth_(inst_24808)){
var statearr_24956_25036 = state_24939__$1;
(statearr_24956_25036[(1)] = (5));

} else {
var statearr_24957_25037 = state_24939__$1;
(statearr_24957_25037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (15))){
var inst_24819 = (state_24939[(13)]);
var inst_24816 = (state_24939[(14)]);
var inst_24818 = (state_24939[(15)]);
var inst_24817 = (state_24939[(16)]);
var inst_24834 = (state_24939[(2)]);
var inst_24835 = (inst_24819 + (1));
var tmp24951 = inst_24816;
var tmp24952 = inst_24818;
var tmp24953 = inst_24817;
var inst_24816__$1 = tmp24951;
var inst_24817__$1 = tmp24953;
var inst_24818__$1 = tmp24952;
var inst_24819__$1 = inst_24835;
var state_24939__$1 = (function (){var statearr_24958 = state_24939;
(statearr_24958[(13)] = inst_24819__$1);

(statearr_24958[(14)] = inst_24816__$1);

(statearr_24958[(15)] = inst_24818__$1);

(statearr_24958[(16)] = inst_24817__$1);

(statearr_24958[(18)] = inst_24834);

return statearr_24958;
})();
var statearr_24959_25038 = state_24939__$1;
(statearr_24959_25038[(2)] = null);

(statearr_24959_25038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (21))){
var inst_24861 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24963_25039 = state_24939__$1;
(statearr_24963_25039[(2)] = inst_24861);

(statearr_24963_25039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (31))){
var inst_24887 = (state_24939[(10)]);
var inst_24891 = done.call(null,null);
var inst_24892 = cljs.core.async.untap_STAR_.call(null,m,inst_24887);
var state_24939__$1 = (function (){var statearr_24964 = state_24939;
(statearr_24964[(19)] = inst_24891);

return statearr_24964;
})();
var statearr_24965_25040 = state_24939__$1;
(statearr_24965_25040[(2)] = inst_24892);

(statearr_24965_25040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (32))){
var inst_24882 = (state_24939[(9)]);
var inst_24879 = (state_24939[(20)]);
var inst_24880 = (state_24939[(11)]);
var inst_24881 = (state_24939[(21)]);
var inst_24894 = (state_24939[(2)]);
var inst_24895 = (inst_24882 + (1));
var tmp24960 = inst_24879;
var tmp24961 = inst_24880;
var tmp24962 = inst_24881;
var inst_24879__$1 = tmp24960;
var inst_24880__$1 = tmp24961;
var inst_24881__$1 = tmp24962;
var inst_24882__$1 = inst_24895;
var state_24939__$1 = (function (){var statearr_24966 = state_24939;
(statearr_24966[(9)] = inst_24882__$1);

(statearr_24966[(22)] = inst_24894);

(statearr_24966[(20)] = inst_24879__$1);

(statearr_24966[(11)] = inst_24880__$1);

(statearr_24966[(21)] = inst_24881__$1);

return statearr_24966;
})();
var statearr_24967_25041 = state_24939__$1;
(statearr_24967_25041[(2)] = null);

(statearr_24967_25041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (40))){
var inst_24907 = (state_24939[(23)]);
var inst_24911 = done.call(null,null);
var inst_24912 = cljs.core.async.untap_STAR_.call(null,m,inst_24907);
var state_24939__$1 = (function (){var statearr_24968 = state_24939;
(statearr_24968[(24)] = inst_24911);

return statearr_24968;
})();
var statearr_24969_25042 = state_24939__$1;
(statearr_24969_25042[(2)] = inst_24912);

(statearr_24969_25042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (33))){
var inst_24898 = (state_24939[(25)]);
var inst_24900 = cljs.core.chunked_seq_QMARK_.call(null,inst_24898);
var state_24939__$1 = state_24939;
if(inst_24900){
var statearr_24970_25043 = state_24939__$1;
(statearr_24970_25043[(1)] = (36));

} else {
var statearr_24971_25044 = state_24939__$1;
(statearr_24971_25044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (13))){
var inst_24828 = (state_24939[(26)]);
var inst_24831 = cljs.core.async.close_BANG_.call(null,inst_24828);
var state_24939__$1 = state_24939;
var statearr_24972_25045 = state_24939__$1;
(statearr_24972_25045[(2)] = inst_24831);

(statearr_24972_25045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (22))){
var inst_24851 = (state_24939[(8)]);
var inst_24854 = cljs.core.async.close_BANG_.call(null,inst_24851);
var state_24939__$1 = state_24939;
var statearr_24973_25046 = state_24939__$1;
(statearr_24973_25046[(2)] = inst_24854);

(statearr_24973_25046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (36))){
var inst_24898 = (state_24939[(25)]);
var inst_24902 = cljs.core.chunk_first.call(null,inst_24898);
var inst_24903 = cljs.core.chunk_rest.call(null,inst_24898);
var inst_24904 = cljs.core.count.call(null,inst_24902);
var inst_24879 = inst_24903;
var inst_24880 = inst_24902;
var inst_24881 = inst_24904;
var inst_24882 = (0);
var state_24939__$1 = (function (){var statearr_24974 = state_24939;
(statearr_24974[(9)] = inst_24882);

(statearr_24974[(20)] = inst_24879);

(statearr_24974[(11)] = inst_24880);

(statearr_24974[(21)] = inst_24881);

return statearr_24974;
})();
var statearr_24975_25047 = state_24939__$1;
(statearr_24975_25047[(2)] = null);

(statearr_24975_25047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (41))){
var inst_24898 = (state_24939[(25)]);
var inst_24914 = (state_24939[(2)]);
var inst_24915 = cljs.core.next.call(null,inst_24898);
var inst_24879 = inst_24915;
var inst_24880 = null;
var inst_24881 = (0);
var inst_24882 = (0);
var state_24939__$1 = (function (){var statearr_24976 = state_24939;
(statearr_24976[(9)] = inst_24882);

(statearr_24976[(20)] = inst_24879);

(statearr_24976[(11)] = inst_24880);

(statearr_24976[(21)] = inst_24881);

(statearr_24976[(27)] = inst_24914);

return statearr_24976;
})();
var statearr_24977_25048 = state_24939__$1;
(statearr_24977_25048[(2)] = null);

(statearr_24977_25048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (43))){
var state_24939__$1 = state_24939;
var statearr_24978_25049 = state_24939__$1;
(statearr_24978_25049[(2)] = null);

(statearr_24978_25049[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (29))){
var inst_24923 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24979_25050 = state_24939__$1;
(statearr_24979_25050[(2)] = inst_24923);

(statearr_24979_25050[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (44))){
var inst_24932 = (state_24939[(2)]);
var state_24939__$1 = (function (){var statearr_24980 = state_24939;
(statearr_24980[(28)] = inst_24932);

return statearr_24980;
})();
var statearr_24981_25051 = state_24939__$1;
(statearr_24981_25051[(2)] = null);

(statearr_24981_25051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (6))){
var inst_24871 = (state_24939[(29)]);
var inst_24870 = cljs.core.deref.call(null,cs);
var inst_24871__$1 = cljs.core.keys.call(null,inst_24870);
var inst_24872 = cljs.core.count.call(null,inst_24871__$1);
var inst_24873 = cljs.core.reset_BANG_.call(null,dctr,inst_24872);
var inst_24878 = cljs.core.seq.call(null,inst_24871__$1);
var inst_24879 = inst_24878;
var inst_24880 = null;
var inst_24881 = (0);
var inst_24882 = (0);
var state_24939__$1 = (function (){var statearr_24982 = state_24939;
(statearr_24982[(9)] = inst_24882);

(statearr_24982[(30)] = inst_24873);

(statearr_24982[(20)] = inst_24879);

(statearr_24982[(11)] = inst_24880);

(statearr_24982[(21)] = inst_24881);

(statearr_24982[(29)] = inst_24871__$1);

return statearr_24982;
})();
var statearr_24983_25052 = state_24939__$1;
(statearr_24983_25052[(2)] = null);

(statearr_24983_25052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (28))){
var inst_24879 = (state_24939[(20)]);
var inst_24898 = (state_24939[(25)]);
var inst_24898__$1 = cljs.core.seq.call(null,inst_24879);
var state_24939__$1 = (function (){var statearr_24984 = state_24939;
(statearr_24984[(25)] = inst_24898__$1);

return statearr_24984;
})();
if(inst_24898__$1){
var statearr_24985_25053 = state_24939__$1;
(statearr_24985_25053[(1)] = (33));

} else {
var statearr_24986_25054 = state_24939__$1;
(statearr_24986_25054[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (25))){
var inst_24882 = (state_24939[(9)]);
var inst_24881 = (state_24939[(21)]);
var inst_24884 = (inst_24882 < inst_24881);
var inst_24885 = inst_24884;
var state_24939__$1 = state_24939;
if(cljs.core.truth_(inst_24885)){
var statearr_24987_25055 = state_24939__$1;
(statearr_24987_25055[(1)] = (27));

} else {
var statearr_24988_25056 = state_24939__$1;
(statearr_24988_25056[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (34))){
var state_24939__$1 = state_24939;
var statearr_24989_25057 = state_24939__$1;
(statearr_24989_25057[(2)] = null);

(statearr_24989_25057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (17))){
var state_24939__$1 = state_24939;
var statearr_24990_25058 = state_24939__$1;
(statearr_24990_25058[(2)] = null);

(statearr_24990_25058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (3))){
var inst_24937 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24939__$1,inst_24937);
} else {
if((state_val_24940 === (12))){
var inst_24866 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24991_25059 = state_24939__$1;
(statearr_24991_25059[(2)] = inst_24866);

(statearr_24991_25059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (2))){
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24939__$1,(4),ch);
} else {
if((state_val_24940 === (23))){
var state_24939__$1 = state_24939;
var statearr_24992_25060 = state_24939__$1;
(statearr_24992_25060[(2)] = null);

(statearr_24992_25060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (35))){
var inst_24921 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24993_25061 = state_24939__$1;
(statearr_24993_25061[(2)] = inst_24921);

(statearr_24993_25061[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (19))){
var inst_24838 = (state_24939[(7)]);
var inst_24842 = cljs.core.chunk_first.call(null,inst_24838);
var inst_24843 = cljs.core.chunk_rest.call(null,inst_24838);
var inst_24844 = cljs.core.count.call(null,inst_24842);
var inst_24816 = inst_24843;
var inst_24817 = inst_24842;
var inst_24818 = inst_24844;
var inst_24819 = (0);
var state_24939__$1 = (function (){var statearr_24994 = state_24939;
(statearr_24994[(13)] = inst_24819);

(statearr_24994[(14)] = inst_24816);

(statearr_24994[(15)] = inst_24818);

(statearr_24994[(16)] = inst_24817);

return statearr_24994;
})();
var statearr_24995_25062 = state_24939__$1;
(statearr_24995_25062[(2)] = null);

(statearr_24995_25062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (11))){
var inst_24816 = (state_24939[(14)]);
var inst_24838 = (state_24939[(7)]);
var inst_24838__$1 = cljs.core.seq.call(null,inst_24816);
var state_24939__$1 = (function (){var statearr_24996 = state_24939;
(statearr_24996[(7)] = inst_24838__$1);

return statearr_24996;
})();
if(inst_24838__$1){
var statearr_24997_25063 = state_24939__$1;
(statearr_24997_25063[(1)] = (16));

} else {
var statearr_24998_25064 = state_24939__$1;
(statearr_24998_25064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (9))){
var inst_24868 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24999_25065 = state_24939__$1;
(statearr_24999_25065[(2)] = inst_24868);

(statearr_24999_25065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (5))){
var inst_24814 = cljs.core.deref.call(null,cs);
var inst_24815 = cljs.core.seq.call(null,inst_24814);
var inst_24816 = inst_24815;
var inst_24817 = null;
var inst_24818 = (0);
var inst_24819 = (0);
var state_24939__$1 = (function (){var statearr_25000 = state_24939;
(statearr_25000[(13)] = inst_24819);

(statearr_25000[(14)] = inst_24816);

(statearr_25000[(15)] = inst_24818);

(statearr_25000[(16)] = inst_24817);

return statearr_25000;
})();
var statearr_25001_25066 = state_24939__$1;
(statearr_25001_25066[(2)] = null);

(statearr_25001_25066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (14))){
var state_24939__$1 = state_24939;
var statearr_25002_25067 = state_24939__$1;
(statearr_25002_25067[(2)] = null);

(statearr_25002_25067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (45))){
var inst_24929 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_25003_25068 = state_24939__$1;
(statearr_25003_25068[(2)] = inst_24929);

(statearr_25003_25068[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (26))){
var inst_24871 = (state_24939[(29)]);
var inst_24925 = (state_24939[(2)]);
var inst_24926 = cljs.core.seq.call(null,inst_24871);
var state_24939__$1 = (function (){var statearr_25004 = state_24939;
(statearr_25004[(31)] = inst_24925);

return statearr_25004;
})();
if(inst_24926){
var statearr_25005_25069 = state_24939__$1;
(statearr_25005_25069[(1)] = (42));

} else {
var statearr_25006_25070 = state_24939__$1;
(statearr_25006_25070[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (16))){
var inst_24838 = (state_24939[(7)]);
var inst_24840 = cljs.core.chunked_seq_QMARK_.call(null,inst_24838);
var state_24939__$1 = state_24939;
if(inst_24840){
var statearr_25007_25071 = state_24939__$1;
(statearr_25007_25071[(1)] = (19));

} else {
var statearr_25008_25072 = state_24939__$1;
(statearr_25008_25072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (38))){
var inst_24918 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_25009_25073 = state_24939__$1;
(statearr_25009_25073[(2)] = inst_24918);

(statearr_25009_25073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (30))){
var state_24939__$1 = state_24939;
var statearr_25010_25074 = state_24939__$1;
(statearr_25010_25074[(2)] = null);

(statearr_25010_25074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (10))){
var inst_24819 = (state_24939[(13)]);
var inst_24817 = (state_24939[(16)]);
var inst_24827 = cljs.core._nth.call(null,inst_24817,inst_24819);
var inst_24828 = cljs.core.nth.call(null,inst_24827,(0),null);
var inst_24829 = cljs.core.nth.call(null,inst_24827,(1),null);
var state_24939__$1 = (function (){var statearr_25011 = state_24939;
(statearr_25011[(26)] = inst_24828);

return statearr_25011;
})();
if(cljs.core.truth_(inst_24829)){
var statearr_25012_25075 = state_24939__$1;
(statearr_25012_25075[(1)] = (13));

} else {
var statearr_25013_25076 = state_24939__$1;
(statearr_25013_25076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (18))){
var inst_24864 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_25014_25077 = state_24939__$1;
(statearr_25014_25077[(2)] = inst_24864);

(statearr_25014_25077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (42))){
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24939__$1,(45),dchan);
} else {
if((state_val_24940 === (37))){
var inst_24898 = (state_24939[(25)]);
var inst_24907 = (state_24939[(23)]);
var inst_24807 = (state_24939[(12)]);
var inst_24907__$1 = cljs.core.first.call(null,inst_24898);
var inst_24908 = cljs.core.async.put_BANG_.call(null,inst_24907__$1,inst_24807,done);
var state_24939__$1 = (function (){var statearr_25015 = state_24939;
(statearr_25015[(23)] = inst_24907__$1);

return statearr_25015;
})();
if(cljs.core.truth_(inst_24908)){
var statearr_25016_25078 = state_24939__$1;
(statearr_25016_25078[(1)] = (39));

} else {
var statearr_25017_25079 = state_24939__$1;
(statearr_25017_25079[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (8))){
var inst_24819 = (state_24939[(13)]);
var inst_24818 = (state_24939[(15)]);
var inst_24821 = (inst_24819 < inst_24818);
var inst_24822 = inst_24821;
var state_24939__$1 = state_24939;
if(cljs.core.truth_(inst_24822)){
var statearr_25018_25080 = state_24939__$1;
(statearr_25018_25080[(1)] = (10));

} else {
var statearr_25019_25081 = state_24939__$1;
(statearr_25019_25081[(1)] = (11));

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
});})(c__23727__auto___25027,cs,m,dchan,dctr,done))
;
return ((function (switch__23660__auto__,c__23727__auto___25027,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23661__auto__ = null;
var cljs$core$async$mult_$_state_machine__23661__auto____0 = (function (){
var statearr_25023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25023[(0)] = cljs$core$async$mult_$_state_machine__23661__auto__);

(statearr_25023[(1)] = (1));

return statearr_25023;
});
var cljs$core$async$mult_$_state_machine__23661__auto____1 = (function (state_24939){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_24939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25024){if((e25024 instanceof Object)){
var ex__23664__auto__ = e25024;
var statearr_25025_25082 = state_24939;
(statearr_25025_25082[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25083 = state_24939;
state_24939 = G__25083;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23661__auto__ = function(state_24939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23661__auto____1.call(this,state_24939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23661__auto____0;
cljs$core$async$mult_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23661__auto____1;
return cljs$core$async$mult_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25027,cs,m,dchan,dctr,done))
})();
var state__23729__auto__ = (function (){var statearr_25026 = f__23728__auto__.call(null);
(statearr_25026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25027);

return statearr_25026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25027,cs,m,dchan,dctr,done))
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
var args25084 = [];
var len__21450__auto___25087 = arguments.length;
var i__21451__auto___25088 = (0);
while(true){
if((i__21451__auto___25088 < len__21450__auto___25087)){
args25084.push((arguments[i__21451__auto___25088]));

var G__25089 = (i__21451__auto___25088 + (1));
i__21451__auto___25088 = G__25089;
continue;
} else {
}
break;
}

var G__25086 = args25084.length;
switch (G__25086) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25084.length)].join('')));

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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m,ch);
} else {
var m__20985__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m,ch);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m,ch);
} else {
var m__20985__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m,ch);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m);
} else {
var m__20985__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m,state_map);
} else {
var m__20985__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m,state_map);
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
var x__20984__auto__ = (((m == null))?null:m);
var m__20985__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,m,mode);
} else {
var m__20985__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21457__auto__ = [];
var len__21450__auto___25101 = arguments.length;
var i__21451__auto___25102 = (0);
while(true){
if((i__21451__auto___25102 < len__21450__auto___25101)){
args__21457__auto__.push((arguments[i__21451__auto___25102]));

var G__25103 = (i__21451__auto___25102 + (1));
i__21451__auto___25102 = G__25103;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((3) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21458__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25095){
var map__25096 = p__25095;
var map__25096__$1 = ((((!((map__25096 == null)))?((((map__25096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25096):map__25096);
var opts = map__25096__$1;
var statearr_25098_25104 = state;
(statearr_25098_25104[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__25096,map__25096__$1,opts){
return (function (val){
var statearr_25099_25105 = state;
(statearr_25099_25105[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25096,map__25096__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_25100_25106 = state;
(statearr_25100_25106[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25091){
var G__25092 = cljs.core.first.call(null,seq25091);
var seq25091__$1 = cljs.core.next.call(null,seq25091);
var G__25093 = cljs.core.first.call(null,seq25091__$1);
var seq25091__$2 = cljs.core.next.call(null,seq25091__$1);
var G__25094 = cljs.core.first.call(null,seq25091__$2);
var seq25091__$3 = cljs.core.next.call(null,seq25091__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25092,G__25093,G__25094,seq25091__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25272 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25273){
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
this.meta25273 = meta25273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25274,meta25273__$1){
var self__ = this;
var _25274__$1 = this;
return (new cljs.core.async.t_cljs$core$async25272(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25273__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25274){
var self__ = this;
var _25274__$1 = this;
return self__.meta25273;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25273","meta25273",1127869,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25272";

cljs.core.async.t_cljs$core$async25272.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async25272");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25272 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25272(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25273){
return (new cljs.core.async.t_cljs$core$async25272(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25273));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25272(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23727__auto___25437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25374){
var state_val_25375 = (state_25374[(1)]);
if((state_val_25375 === (7))){
var inst_25290 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25376_25438 = state_25374__$1;
(statearr_25376_25438[(2)] = inst_25290);

(statearr_25376_25438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (20))){
var inst_25302 = (state_25374[(7)]);
var state_25374__$1 = state_25374;
var statearr_25377_25439 = state_25374__$1;
(statearr_25377_25439[(2)] = inst_25302);

(statearr_25377_25439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (27))){
var state_25374__$1 = state_25374;
var statearr_25378_25440 = state_25374__$1;
(statearr_25378_25440[(2)] = null);

(statearr_25378_25440[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (1))){
var inst_25278 = (state_25374[(8)]);
var inst_25278__$1 = calc_state.call(null);
var inst_25280 = (inst_25278__$1 == null);
var inst_25281 = cljs.core.not.call(null,inst_25280);
var state_25374__$1 = (function (){var statearr_25379 = state_25374;
(statearr_25379[(8)] = inst_25278__$1);

return statearr_25379;
})();
if(inst_25281){
var statearr_25380_25441 = state_25374__$1;
(statearr_25380_25441[(1)] = (2));

} else {
var statearr_25381_25442 = state_25374__$1;
(statearr_25381_25442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (24))){
var inst_25325 = (state_25374[(9)]);
var inst_25348 = (state_25374[(10)]);
var inst_25334 = (state_25374[(11)]);
var inst_25348__$1 = inst_25325.call(null,inst_25334);
var state_25374__$1 = (function (){var statearr_25382 = state_25374;
(statearr_25382[(10)] = inst_25348__$1);

return statearr_25382;
})();
if(cljs.core.truth_(inst_25348__$1)){
var statearr_25383_25443 = state_25374__$1;
(statearr_25383_25443[(1)] = (29));

} else {
var statearr_25384_25444 = state_25374__$1;
(statearr_25384_25444[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (4))){
var inst_25293 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25293)){
var statearr_25385_25445 = state_25374__$1;
(statearr_25385_25445[(1)] = (8));

} else {
var statearr_25386_25446 = state_25374__$1;
(statearr_25386_25446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (15))){
var inst_25319 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25319)){
var statearr_25387_25447 = state_25374__$1;
(statearr_25387_25447[(1)] = (19));

} else {
var statearr_25388_25448 = state_25374__$1;
(statearr_25388_25448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (21))){
var inst_25324 = (state_25374[(12)]);
var inst_25324__$1 = (state_25374[(2)]);
var inst_25325 = cljs.core.get.call(null,inst_25324__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25326 = cljs.core.get.call(null,inst_25324__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25327 = cljs.core.get.call(null,inst_25324__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25374__$1 = (function (){var statearr_25389 = state_25374;
(statearr_25389[(9)] = inst_25325);

(statearr_25389[(12)] = inst_25324__$1);

(statearr_25389[(13)] = inst_25326);

return statearr_25389;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25374__$1,(22),inst_25327);
} else {
if((state_val_25375 === (31))){
var inst_25356 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25356)){
var statearr_25390_25449 = state_25374__$1;
(statearr_25390_25449[(1)] = (32));

} else {
var statearr_25391_25450 = state_25374__$1;
(statearr_25391_25450[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (32))){
var inst_25333 = (state_25374[(14)]);
var state_25374__$1 = state_25374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25374__$1,(35),out,inst_25333);
} else {
if((state_val_25375 === (33))){
var inst_25324 = (state_25374[(12)]);
var inst_25302 = inst_25324;
var state_25374__$1 = (function (){var statearr_25392 = state_25374;
(statearr_25392[(7)] = inst_25302);

return statearr_25392;
})();
var statearr_25393_25451 = state_25374__$1;
(statearr_25393_25451[(2)] = null);

(statearr_25393_25451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (13))){
var inst_25302 = (state_25374[(7)]);
var inst_25309 = inst_25302.cljs$lang$protocol_mask$partition0$;
var inst_25310 = (inst_25309 & (64));
var inst_25311 = inst_25302.cljs$core$ISeq$;
var inst_25312 = (inst_25310) || (inst_25311);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25312)){
var statearr_25394_25452 = state_25374__$1;
(statearr_25394_25452[(1)] = (16));

} else {
var statearr_25395_25453 = state_25374__$1;
(statearr_25395_25453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (22))){
var inst_25333 = (state_25374[(14)]);
var inst_25334 = (state_25374[(11)]);
var inst_25332 = (state_25374[(2)]);
var inst_25333__$1 = cljs.core.nth.call(null,inst_25332,(0),null);
var inst_25334__$1 = cljs.core.nth.call(null,inst_25332,(1),null);
var inst_25335 = (inst_25333__$1 == null);
var inst_25336 = cljs.core._EQ_.call(null,inst_25334__$1,change);
var inst_25337 = (inst_25335) || (inst_25336);
var state_25374__$1 = (function (){var statearr_25396 = state_25374;
(statearr_25396[(14)] = inst_25333__$1);

(statearr_25396[(11)] = inst_25334__$1);

return statearr_25396;
})();
if(cljs.core.truth_(inst_25337)){
var statearr_25397_25454 = state_25374__$1;
(statearr_25397_25454[(1)] = (23));

} else {
var statearr_25398_25455 = state_25374__$1;
(statearr_25398_25455[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (36))){
var inst_25324 = (state_25374[(12)]);
var inst_25302 = inst_25324;
var state_25374__$1 = (function (){var statearr_25399 = state_25374;
(statearr_25399[(7)] = inst_25302);

return statearr_25399;
})();
var statearr_25400_25456 = state_25374__$1;
(statearr_25400_25456[(2)] = null);

(statearr_25400_25456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (29))){
var inst_25348 = (state_25374[(10)]);
var state_25374__$1 = state_25374;
var statearr_25401_25457 = state_25374__$1;
(statearr_25401_25457[(2)] = inst_25348);

(statearr_25401_25457[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (6))){
var state_25374__$1 = state_25374;
var statearr_25402_25458 = state_25374__$1;
(statearr_25402_25458[(2)] = false);

(statearr_25402_25458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (28))){
var inst_25344 = (state_25374[(2)]);
var inst_25345 = calc_state.call(null);
var inst_25302 = inst_25345;
var state_25374__$1 = (function (){var statearr_25403 = state_25374;
(statearr_25403[(7)] = inst_25302);

(statearr_25403[(15)] = inst_25344);

return statearr_25403;
})();
var statearr_25404_25459 = state_25374__$1;
(statearr_25404_25459[(2)] = null);

(statearr_25404_25459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (25))){
var inst_25370 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25405_25460 = state_25374__$1;
(statearr_25405_25460[(2)] = inst_25370);

(statearr_25405_25460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (34))){
var inst_25368 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25406_25461 = state_25374__$1;
(statearr_25406_25461[(2)] = inst_25368);

(statearr_25406_25461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (17))){
var state_25374__$1 = state_25374;
var statearr_25407_25462 = state_25374__$1;
(statearr_25407_25462[(2)] = false);

(statearr_25407_25462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (3))){
var state_25374__$1 = state_25374;
var statearr_25408_25463 = state_25374__$1;
(statearr_25408_25463[(2)] = false);

(statearr_25408_25463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (12))){
var inst_25372 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25374__$1,inst_25372);
} else {
if((state_val_25375 === (2))){
var inst_25278 = (state_25374[(8)]);
var inst_25283 = inst_25278.cljs$lang$protocol_mask$partition0$;
var inst_25284 = (inst_25283 & (64));
var inst_25285 = inst_25278.cljs$core$ISeq$;
var inst_25286 = (inst_25284) || (inst_25285);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25286)){
var statearr_25409_25464 = state_25374__$1;
(statearr_25409_25464[(1)] = (5));

} else {
var statearr_25410_25465 = state_25374__$1;
(statearr_25410_25465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (23))){
var inst_25333 = (state_25374[(14)]);
var inst_25339 = (inst_25333 == null);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25339)){
var statearr_25411_25466 = state_25374__$1;
(statearr_25411_25466[(1)] = (26));

} else {
var statearr_25412_25467 = state_25374__$1;
(statearr_25412_25467[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (35))){
var inst_25359 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25359)){
var statearr_25413_25468 = state_25374__$1;
(statearr_25413_25468[(1)] = (36));

} else {
var statearr_25414_25469 = state_25374__$1;
(statearr_25414_25469[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (19))){
var inst_25302 = (state_25374[(7)]);
var inst_25321 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25302);
var state_25374__$1 = state_25374;
var statearr_25415_25470 = state_25374__$1;
(statearr_25415_25470[(2)] = inst_25321);

(statearr_25415_25470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (11))){
var inst_25302 = (state_25374[(7)]);
var inst_25306 = (inst_25302 == null);
var inst_25307 = cljs.core.not.call(null,inst_25306);
var state_25374__$1 = state_25374;
if(inst_25307){
var statearr_25416_25471 = state_25374__$1;
(statearr_25416_25471[(1)] = (13));

} else {
var statearr_25417_25472 = state_25374__$1;
(statearr_25417_25472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (9))){
var inst_25278 = (state_25374[(8)]);
var state_25374__$1 = state_25374;
var statearr_25418_25473 = state_25374__$1;
(statearr_25418_25473[(2)] = inst_25278);

(statearr_25418_25473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (5))){
var state_25374__$1 = state_25374;
var statearr_25419_25474 = state_25374__$1;
(statearr_25419_25474[(2)] = true);

(statearr_25419_25474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (14))){
var state_25374__$1 = state_25374;
var statearr_25420_25475 = state_25374__$1;
(statearr_25420_25475[(2)] = false);

(statearr_25420_25475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (26))){
var inst_25334 = (state_25374[(11)]);
var inst_25341 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25334);
var state_25374__$1 = state_25374;
var statearr_25421_25476 = state_25374__$1;
(statearr_25421_25476[(2)] = inst_25341);

(statearr_25421_25476[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (16))){
var state_25374__$1 = state_25374;
var statearr_25422_25477 = state_25374__$1;
(statearr_25422_25477[(2)] = true);

(statearr_25422_25477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (38))){
var inst_25364 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25423_25478 = state_25374__$1;
(statearr_25423_25478[(2)] = inst_25364);

(statearr_25423_25478[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (30))){
var inst_25325 = (state_25374[(9)]);
var inst_25334 = (state_25374[(11)]);
var inst_25326 = (state_25374[(13)]);
var inst_25351 = cljs.core.empty_QMARK_.call(null,inst_25325);
var inst_25352 = inst_25326.call(null,inst_25334);
var inst_25353 = cljs.core.not.call(null,inst_25352);
var inst_25354 = (inst_25351) && (inst_25353);
var state_25374__$1 = state_25374;
var statearr_25424_25479 = state_25374__$1;
(statearr_25424_25479[(2)] = inst_25354);

(statearr_25424_25479[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (10))){
var inst_25278 = (state_25374[(8)]);
var inst_25298 = (state_25374[(2)]);
var inst_25299 = cljs.core.get.call(null,inst_25298,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25300 = cljs.core.get.call(null,inst_25298,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25301 = cljs.core.get.call(null,inst_25298,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25302 = inst_25278;
var state_25374__$1 = (function (){var statearr_25425 = state_25374;
(statearr_25425[(16)] = inst_25301);

(statearr_25425[(17)] = inst_25300);

(statearr_25425[(7)] = inst_25302);

(statearr_25425[(18)] = inst_25299);

return statearr_25425;
})();
var statearr_25426_25480 = state_25374__$1;
(statearr_25426_25480[(2)] = null);

(statearr_25426_25480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (18))){
var inst_25316 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25427_25481 = state_25374__$1;
(statearr_25427_25481[(2)] = inst_25316);

(statearr_25427_25481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (37))){
var state_25374__$1 = state_25374;
var statearr_25428_25482 = state_25374__$1;
(statearr_25428_25482[(2)] = null);

(statearr_25428_25482[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (8))){
var inst_25278 = (state_25374[(8)]);
var inst_25295 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25278);
var state_25374__$1 = state_25374;
var statearr_25429_25483 = state_25374__$1;
(statearr_25429_25483[(2)] = inst_25295);

(statearr_25429_25483[(1)] = (10));


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
});})(c__23727__auto___25437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23660__auto__,c__23727__auto___25437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23661__auto__ = null;
var cljs$core$async$mix_$_state_machine__23661__auto____0 = (function (){
var statearr_25433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25433[(0)] = cljs$core$async$mix_$_state_machine__23661__auto__);

(statearr_25433[(1)] = (1));

return statearr_25433;
});
var cljs$core$async$mix_$_state_machine__23661__auto____1 = (function (state_25374){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_25374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25434){if((e25434 instanceof Object)){
var ex__23664__auto__ = e25434;
var statearr_25435_25484 = state_25374;
(statearr_25435_25484[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25485 = state_25374;
state_25374 = G__25485;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23661__auto__ = function(state_25374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23661__auto____1.call(this,state_25374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23661__auto____0;
cljs$core$async$mix_$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23661__auto____1;
return cljs$core$async$mix_$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23729__auto__ = (function (){var statearr_25436 = f__23728__auto__.call(null);
(statearr_25436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25437);

return statearr_25436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25437,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20984__auto__ = (((p == null))?null:p);
var m__20985__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20985__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20984__auto__ = (((p == null))?null:p);
var m__20985__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,p,v,ch);
} else {
var m__20985__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25486 = [];
var len__21450__auto___25489 = arguments.length;
var i__21451__auto___25490 = (0);
while(true){
if((i__21451__auto___25490 < len__21450__auto___25489)){
args25486.push((arguments[i__21451__auto___25490]));

var G__25491 = (i__21451__auto___25490 + (1));
i__21451__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var G__25488 = args25486.length;
switch (G__25488) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25486.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20984__auto__ = (((p == null))?null:p);
var m__20985__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,p);
} else {
var m__20985__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,p);
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
var x__20984__auto__ = (((p == null))?null:p);
var m__20985__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20984__auto__)]);
if(!((m__20985__auto__ == null))){
return m__20985__auto__.call(null,p,v);
} else {
var m__20985__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20985__auto____$1 == null))){
return m__20985__auto____$1.call(null,p,v);
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
var args25494 = [];
var len__21450__auto___25619 = arguments.length;
var i__21451__auto___25620 = (0);
while(true){
if((i__21451__auto___25620 < len__21450__auto___25619)){
args25494.push((arguments[i__21451__auto___25620]));

var G__25621 = (i__21451__auto___25620 + (1));
i__21451__auto___25620 = G__25621;
continue;
} else {
}
break;
}

var G__25496 = args25494.length;
switch (G__25496) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25494.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20270__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20270__auto__)){
return or__20270__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20270__auto__,mults){
return (function (p1__25493_SHARP_){
if(cljs.core.truth_(p1__25493_SHARP_.call(null,topic))){
return p1__25493_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25493_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20270__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25497 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25498){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25498 = meta25498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25499,meta25498__$1){
var self__ = this;
var _25499__$1 = this;
return (new cljs.core.async.t_cljs$core$async25497(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25498__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25499){
var self__ = this;
var _25499__$1 = this;
return self__.meta25498;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25498","meta25498",850766451,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25497";

cljs.core.async.t_cljs$core$async25497.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async25497");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25497 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25497(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25498){
return (new cljs.core.async.t_cljs$core$async25497(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25498));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25497(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23727__auto___25623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25623,mults,ensure_mult,p){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25623,mults,ensure_mult,p){
return (function (state_25571){
var state_val_25572 = (state_25571[(1)]);
if((state_val_25572 === (7))){
var inst_25567 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25573_25624 = state_25571__$1;
(statearr_25573_25624[(2)] = inst_25567);

(statearr_25573_25624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (20))){
var state_25571__$1 = state_25571;
var statearr_25574_25625 = state_25571__$1;
(statearr_25574_25625[(2)] = null);

(statearr_25574_25625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (1))){
var state_25571__$1 = state_25571;
var statearr_25575_25626 = state_25571__$1;
(statearr_25575_25626[(2)] = null);

(statearr_25575_25626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (24))){
var inst_25550 = (state_25571[(7)]);
var inst_25559 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25550);
var state_25571__$1 = state_25571;
var statearr_25576_25627 = state_25571__$1;
(statearr_25576_25627[(2)] = inst_25559);

(statearr_25576_25627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (4))){
var inst_25502 = (state_25571[(8)]);
var inst_25502__$1 = (state_25571[(2)]);
var inst_25503 = (inst_25502__$1 == null);
var state_25571__$1 = (function (){var statearr_25577 = state_25571;
(statearr_25577[(8)] = inst_25502__$1);

return statearr_25577;
})();
if(cljs.core.truth_(inst_25503)){
var statearr_25578_25628 = state_25571__$1;
(statearr_25578_25628[(1)] = (5));

} else {
var statearr_25579_25629 = state_25571__$1;
(statearr_25579_25629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (15))){
var inst_25544 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25580_25630 = state_25571__$1;
(statearr_25580_25630[(2)] = inst_25544);

(statearr_25580_25630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (21))){
var inst_25564 = (state_25571[(2)]);
var state_25571__$1 = (function (){var statearr_25581 = state_25571;
(statearr_25581[(9)] = inst_25564);

return statearr_25581;
})();
var statearr_25582_25631 = state_25571__$1;
(statearr_25582_25631[(2)] = null);

(statearr_25582_25631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (13))){
var inst_25526 = (state_25571[(10)]);
var inst_25528 = cljs.core.chunked_seq_QMARK_.call(null,inst_25526);
var state_25571__$1 = state_25571;
if(inst_25528){
var statearr_25583_25632 = state_25571__$1;
(statearr_25583_25632[(1)] = (16));

} else {
var statearr_25584_25633 = state_25571__$1;
(statearr_25584_25633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (22))){
var inst_25556 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
if(cljs.core.truth_(inst_25556)){
var statearr_25585_25634 = state_25571__$1;
(statearr_25585_25634[(1)] = (23));

} else {
var statearr_25586_25635 = state_25571__$1;
(statearr_25586_25635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (6))){
var inst_25502 = (state_25571[(8)]);
var inst_25550 = (state_25571[(7)]);
var inst_25552 = (state_25571[(11)]);
var inst_25550__$1 = topic_fn.call(null,inst_25502);
var inst_25551 = cljs.core.deref.call(null,mults);
var inst_25552__$1 = cljs.core.get.call(null,inst_25551,inst_25550__$1);
var state_25571__$1 = (function (){var statearr_25587 = state_25571;
(statearr_25587[(7)] = inst_25550__$1);

(statearr_25587[(11)] = inst_25552__$1);

return statearr_25587;
})();
if(cljs.core.truth_(inst_25552__$1)){
var statearr_25588_25636 = state_25571__$1;
(statearr_25588_25636[(1)] = (19));

} else {
var statearr_25589_25637 = state_25571__$1;
(statearr_25589_25637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (25))){
var inst_25561 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25590_25638 = state_25571__$1;
(statearr_25590_25638[(2)] = inst_25561);

(statearr_25590_25638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (17))){
var inst_25526 = (state_25571[(10)]);
var inst_25535 = cljs.core.first.call(null,inst_25526);
var inst_25536 = cljs.core.async.muxch_STAR_.call(null,inst_25535);
var inst_25537 = cljs.core.async.close_BANG_.call(null,inst_25536);
var inst_25538 = cljs.core.next.call(null,inst_25526);
var inst_25512 = inst_25538;
var inst_25513 = null;
var inst_25514 = (0);
var inst_25515 = (0);
var state_25571__$1 = (function (){var statearr_25591 = state_25571;
(statearr_25591[(12)] = inst_25537);

(statearr_25591[(13)] = inst_25513);

(statearr_25591[(14)] = inst_25512);

(statearr_25591[(15)] = inst_25514);

(statearr_25591[(16)] = inst_25515);

return statearr_25591;
})();
var statearr_25592_25639 = state_25571__$1;
(statearr_25592_25639[(2)] = null);

(statearr_25592_25639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (3))){
var inst_25569 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25571__$1,inst_25569);
} else {
if((state_val_25572 === (12))){
var inst_25546 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25593_25640 = state_25571__$1;
(statearr_25593_25640[(2)] = inst_25546);

(statearr_25593_25640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (2))){
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25571__$1,(4),ch);
} else {
if((state_val_25572 === (23))){
var state_25571__$1 = state_25571;
var statearr_25594_25641 = state_25571__$1;
(statearr_25594_25641[(2)] = null);

(statearr_25594_25641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (19))){
var inst_25502 = (state_25571[(8)]);
var inst_25552 = (state_25571[(11)]);
var inst_25554 = cljs.core.async.muxch_STAR_.call(null,inst_25552);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25571__$1,(22),inst_25554,inst_25502);
} else {
if((state_val_25572 === (11))){
var inst_25512 = (state_25571[(14)]);
var inst_25526 = (state_25571[(10)]);
var inst_25526__$1 = cljs.core.seq.call(null,inst_25512);
var state_25571__$1 = (function (){var statearr_25595 = state_25571;
(statearr_25595[(10)] = inst_25526__$1);

return statearr_25595;
})();
if(inst_25526__$1){
var statearr_25596_25642 = state_25571__$1;
(statearr_25596_25642[(1)] = (13));

} else {
var statearr_25597_25643 = state_25571__$1;
(statearr_25597_25643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (9))){
var inst_25548 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25598_25644 = state_25571__$1;
(statearr_25598_25644[(2)] = inst_25548);

(statearr_25598_25644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (5))){
var inst_25509 = cljs.core.deref.call(null,mults);
var inst_25510 = cljs.core.vals.call(null,inst_25509);
var inst_25511 = cljs.core.seq.call(null,inst_25510);
var inst_25512 = inst_25511;
var inst_25513 = null;
var inst_25514 = (0);
var inst_25515 = (0);
var state_25571__$1 = (function (){var statearr_25599 = state_25571;
(statearr_25599[(13)] = inst_25513);

(statearr_25599[(14)] = inst_25512);

(statearr_25599[(15)] = inst_25514);

(statearr_25599[(16)] = inst_25515);

return statearr_25599;
})();
var statearr_25600_25645 = state_25571__$1;
(statearr_25600_25645[(2)] = null);

(statearr_25600_25645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (14))){
var state_25571__$1 = state_25571;
var statearr_25604_25646 = state_25571__$1;
(statearr_25604_25646[(2)] = null);

(statearr_25604_25646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (16))){
var inst_25526 = (state_25571[(10)]);
var inst_25530 = cljs.core.chunk_first.call(null,inst_25526);
var inst_25531 = cljs.core.chunk_rest.call(null,inst_25526);
var inst_25532 = cljs.core.count.call(null,inst_25530);
var inst_25512 = inst_25531;
var inst_25513 = inst_25530;
var inst_25514 = inst_25532;
var inst_25515 = (0);
var state_25571__$1 = (function (){var statearr_25605 = state_25571;
(statearr_25605[(13)] = inst_25513);

(statearr_25605[(14)] = inst_25512);

(statearr_25605[(15)] = inst_25514);

(statearr_25605[(16)] = inst_25515);

return statearr_25605;
})();
var statearr_25606_25647 = state_25571__$1;
(statearr_25606_25647[(2)] = null);

(statearr_25606_25647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (10))){
var inst_25513 = (state_25571[(13)]);
var inst_25512 = (state_25571[(14)]);
var inst_25514 = (state_25571[(15)]);
var inst_25515 = (state_25571[(16)]);
var inst_25520 = cljs.core._nth.call(null,inst_25513,inst_25515);
var inst_25521 = cljs.core.async.muxch_STAR_.call(null,inst_25520);
var inst_25522 = cljs.core.async.close_BANG_.call(null,inst_25521);
var inst_25523 = (inst_25515 + (1));
var tmp25601 = inst_25513;
var tmp25602 = inst_25512;
var tmp25603 = inst_25514;
var inst_25512__$1 = tmp25602;
var inst_25513__$1 = tmp25601;
var inst_25514__$1 = tmp25603;
var inst_25515__$1 = inst_25523;
var state_25571__$1 = (function (){var statearr_25607 = state_25571;
(statearr_25607[(13)] = inst_25513__$1);

(statearr_25607[(14)] = inst_25512__$1);

(statearr_25607[(17)] = inst_25522);

(statearr_25607[(15)] = inst_25514__$1);

(statearr_25607[(16)] = inst_25515__$1);

return statearr_25607;
})();
var statearr_25608_25648 = state_25571__$1;
(statearr_25608_25648[(2)] = null);

(statearr_25608_25648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (18))){
var inst_25541 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25609_25649 = state_25571__$1;
(statearr_25609_25649[(2)] = inst_25541);

(statearr_25609_25649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (8))){
var inst_25514 = (state_25571[(15)]);
var inst_25515 = (state_25571[(16)]);
var inst_25517 = (inst_25515 < inst_25514);
var inst_25518 = inst_25517;
var state_25571__$1 = state_25571;
if(cljs.core.truth_(inst_25518)){
var statearr_25610_25650 = state_25571__$1;
(statearr_25610_25650[(1)] = (10));

} else {
var statearr_25611_25651 = state_25571__$1;
(statearr_25611_25651[(1)] = (11));

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
});})(c__23727__auto___25623,mults,ensure_mult,p))
;
return ((function (switch__23660__auto__,c__23727__auto___25623,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_25615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25615[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_25615[(1)] = (1));

return statearr_25615;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_25571){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_25571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25616){if((e25616 instanceof Object)){
var ex__23664__auto__ = e25616;
var statearr_25617_25652 = state_25571;
(statearr_25617_25652[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25653 = state_25571;
state_25571 = G__25653;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_25571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_25571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25623,mults,ensure_mult,p))
})();
var state__23729__auto__ = (function (){var statearr_25618 = f__23728__auto__.call(null);
(statearr_25618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25623);

return statearr_25618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25623,mults,ensure_mult,p))
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
var args25654 = [];
var len__21450__auto___25657 = arguments.length;
var i__21451__auto___25658 = (0);
while(true){
if((i__21451__auto___25658 < len__21450__auto___25657)){
args25654.push((arguments[i__21451__auto___25658]));

var G__25659 = (i__21451__auto___25658 + (1));
i__21451__auto___25658 = G__25659;
continue;
} else {
}
break;
}

var G__25656 = args25654.length;
switch (G__25656) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25654.length)].join('')));

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
var args25661 = [];
var len__21450__auto___25664 = arguments.length;
var i__21451__auto___25665 = (0);
while(true){
if((i__21451__auto___25665 < len__21450__auto___25664)){
args25661.push((arguments[i__21451__auto___25665]));

var G__25666 = (i__21451__auto___25665 + (1));
i__21451__auto___25665 = G__25666;
continue;
} else {
}
break;
}

var G__25663 = args25661.length;
switch (G__25663) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25661.length)].join('')));

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
var args25668 = [];
var len__21450__auto___25739 = arguments.length;
var i__21451__auto___25740 = (0);
while(true){
if((i__21451__auto___25740 < len__21450__auto___25739)){
args25668.push((arguments[i__21451__auto___25740]));

var G__25741 = (i__21451__auto___25740 + (1));
i__21451__auto___25740 = G__25741;
continue;
} else {
}
break;
}

var G__25670 = args25668.length;
switch (G__25670) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25668.length)].join('')));

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
var c__23727__auto___25743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25743,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25743,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25709){
var state_val_25710 = (state_25709[(1)]);
if((state_val_25710 === (7))){
var state_25709__$1 = state_25709;
var statearr_25711_25744 = state_25709__$1;
(statearr_25711_25744[(2)] = null);

(statearr_25711_25744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (1))){
var state_25709__$1 = state_25709;
var statearr_25712_25745 = state_25709__$1;
(statearr_25712_25745[(2)] = null);

(statearr_25712_25745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (4))){
var inst_25673 = (state_25709[(7)]);
var inst_25675 = (inst_25673 < cnt);
var state_25709__$1 = state_25709;
if(cljs.core.truth_(inst_25675)){
var statearr_25713_25746 = state_25709__$1;
(statearr_25713_25746[(1)] = (6));

} else {
var statearr_25714_25747 = state_25709__$1;
(statearr_25714_25747[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (15))){
var inst_25705 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25715_25748 = state_25709__$1;
(statearr_25715_25748[(2)] = inst_25705);

(statearr_25715_25748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (13))){
var inst_25698 = cljs.core.async.close_BANG_.call(null,out);
var state_25709__$1 = state_25709;
var statearr_25716_25749 = state_25709__$1;
(statearr_25716_25749[(2)] = inst_25698);

(statearr_25716_25749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (6))){
var state_25709__$1 = state_25709;
var statearr_25717_25750 = state_25709__$1;
(statearr_25717_25750[(2)] = null);

(statearr_25717_25750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (3))){
var inst_25707 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25709__$1,inst_25707);
} else {
if((state_val_25710 === (12))){
var inst_25695 = (state_25709[(8)]);
var inst_25695__$1 = (state_25709[(2)]);
var inst_25696 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25695__$1);
var state_25709__$1 = (function (){var statearr_25718 = state_25709;
(statearr_25718[(8)] = inst_25695__$1);

return statearr_25718;
})();
if(cljs.core.truth_(inst_25696)){
var statearr_25719_25751 = state_25709__$1;
(statearr_25719_25751[(1)] = (13));

} else {
var statearr_25720_25752 = state_25709__$1;
(statearr_25720_25752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (2))){
var inst_25672 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25673 = (0);
var state_25709__$1 = (function (){var statearr_25721 = state_25709;
(statearr_25721[(7)] = inst_25673);

(statearr_25721[(9)] = inst_25672);

return statearr_25721;
})();
var statearr_25722_25753 = state_25709__$1;
(statearr_25722_25753[(2)] = null);

(statearr_25722_25753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (11))){
var inst_25673 = (state_25709[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25709,(10),Object,null,(9));
var inst_25682 = chs__$1.call(null,inst_25673);
var inst_25683 = done.call(null,inst_25673);
var inst_25684 = cljs.core.async.take_BANG_.call(null,inst_25682,inst_25683);
var state_25709__$1 = state_25709;
var statearr_25723_25754 = state_25709__$1;
(statearr_25723_25754[(2)] = inst_25684);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (9))){
var inst_25673 = (state_25709[(7)]);
var inst_25686 = (state_25709[(2)]);
var inst_25687 = (inst_25673 + (1));
var inst_25673__$1 = inst_25687;
var state_25709__$1 = (function (){var statearr_25724 = state_25709;
(statearr_25724[(10)] = inst_25686);

(statearr_25724[(7)] = inst_25673__$1);

return statearr_25724;
})();
var statearr_25725_25755 = state_25709__$1;
(statearr_25725_25755[(2)] = null);

(statearr_25725_25755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (5))){
var inst_25693 = (state_25709[(2)]);
var state_25709__$1 = (function (){var statearr_25726 = state_25709;
(statearr_25726[(11)] = inst_25693);

return statearr_25726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25709__$1,(12),dchan);
} else {
if((state_val_25710 === (14))){
var inst_25695 = (state_25709[(8)]);
var inst_25700 = cljs.core.apply.call(null,f,inst_25695);
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25709__$1,(16),out,inst_25700);
} else {
if((state_val_25710 === (16))){
var inst_25702 = (state_25709[(2)]);
var state_25709__$1 = (function (){var statearr_25727 = state_25709;
(statearr_25727[(12)] = inst_25702);

return statearr_25727;
})();
var statearr_25728_25756 = state_25709__$1;
(statearr_25728_25756[(2)] = null);

(statearr_25728_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (10))){
var inst_25677 = (state_25709[(2)]);
var inst_25678 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25709__$1 = (function (){var statearr_25729 = state_25709;
(statearr_25729[(13)] = inst_25677);

return statearr_25729;
})();
var statearr_25730_25757 = state_25709__$1;
(statearr_25730_25757[(2)] = inst_25678);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (8))){
var inst_25691 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25731_25758 = state_25709__$1;
(statearr_25731_25758[(2)] = inst_25691);

(statearr_25731_25758[(1)] = (5));


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
});})(c__23727__auto___25743,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23660__auto__,c__23727__auto___25743,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_25735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25735[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_25735[(1)] = (1));

return statearr_25735;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_25709){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_25709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25736){if((e25736 instanceof Object)){
var ex__23664__auto__ = e25736;
var statearr_25737_25759 = state_25709;
(statearr_25737_25759[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25760 = state_25709;
state_25709 = G__25760;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_25709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_25709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25743,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23729__auto__ = (function (){var statearr_25738 = f__23728__auto__.call(null);
(statearr_25738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25743);

return statearr_25738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25743,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25762 = [];
var len__21450__auto___25820 = arguments.length;
var i__21451__auto___25821 = (0);
while(true){
if((i__21451__auto___25821 < len__21450__auto___25820)){
args25762.push((arguments[i__21451__auto___25821]));

var G__25822 = (i__21451__auto___25821 + (1));
i__21451__auto___25821 = G__25822;
continue;
} else {
}
break;
}

var G__25764 = args25762.length;
switch (G__25764) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25762.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23727__auto___25824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25824,out){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25824,out){
return (function (state_25796){
var state_val_25797 = (state_25796[(1)]);
if((state_val_25797 === (7))){
var inst_25775 = (state_25796[(7)]);
var inst_25776 = (state_25796[(8)]);
var inst_25775__$1 = (state_25796[(2)]);
var inst_25776__$1 = cljs.core.nth.call(null,inst_25775__$1,(0),null);
var inst_25777 = cljs.core.nth.call(null,inst_25775__$1,(1),null);
var inst_25778 = (inst_25776__$1 == null);
var state_25796__$1 = (function (){var statearr_25798 = state_25796;
(statearr_25798[(9)] = inst_25777);

(statearr_25798[(7)] = inst_25775__$1);

(statearr_25798[(8)] = inst_25776__$1);

return statearr_25798;
})();
if(cljs.core.truth_(inst_25778)){
var statearr_25799_25825 = state_25796__$1;
(statearr_25799_25825[(1)] = (8));

} else {
var statearr_25800_25826 = state_25796__$1;
(statearr_25800_25826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (1))){
var inst_25765 = cljs.core.vec.call(null,chs);
var inst_25766 = inst_25765;
var state_25796__$1 = (function (){var statearr_25801 = state_25796;
(statearr_25801[(10)] = inst_25766);

return statearr_25801;
})();
var statearr_25802_25827 = state_25796__$1;
(statearr_25802_25827[(2)] = null);

(statearr_25802_25827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (4))){
var inst_25766 = (state_25796[(10)]);
var state_25796__$1 = state_25796;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25796__$1,(7),inst_25766);
} else {
if((state_val_25797 === (6))){
var inst_25792 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25803_25828 = state_25796__$1;
(statearr_25803_25828[(2)] = inst_25792);

(statearr_25803_25828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (3))){
var inst_25794 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25796__$1,inst_25794);
} else {
if((state_val_25797 === (2))){
var inst_25766 = (state_25796[(10)]);
var inst_25768 = cljs.core.count.call(null,inst_25766);
var inst_25769 = (inst_25768 > (0));
var state_25796__$1 = state_25796;
if(cljs.core.truth_(inst_25769)){
var statearr_25805_25829 = state_25796__$1;
(statearr_25805_25829[(1)] = (4));

} else {
var statearr_25806_25830 = state_25796__$1;
(statearr_25806_25830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (11))){
var inst_25766 = (state_25796[(10)]);
var inst_25785 = (state_25796[(2)]);
var tmp25804 = inst_25766;
var inst_25766__$1 = tmp25804;
var state_25796__$1 = (function (){var statearr_25807 = state_25796;
(statearr_25807[(10)] = inst_25766__$1);

(statearr_25807[(11)] = inst_25785);

return statearr_25807;
})();
var statearr_25808_25831 = state_25796__$1;
(statearr_25808_25831[(2)] = null);

(statearr_25808_25831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (9))){
var inst_25776 = (state_25796[(8)]);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25796__$1,(11),out,inst_25776);
} else {
if((state_val_25797 === (5))){
var inst_25790 = cljs.core.async.close_BANG_.call(null,out);
var state_25796__$1 = state_25796;
var statearr_25809_25832 = state_25796__$1;
(statearr_25809_25832[(2)] = inst_25790);

(statearr_25809_25832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (10))){
var inst_25788 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25810_25833 = state_25796__$1;
(statearr_25810_25833[(2)] = inst_25788);

(statearr_25810_25833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (8))){
var inst_25777 = (state_25796[(9)]);
var inst_25766 = (state_25796[(10)]);
var inst_25775 = (state_25796[(7)]);
var inst_25776 = (state_25796[(8)]);
var inst_25780 = (function (){var cs = inst_25766;
var vec__25771 = inst_25775;
var v = inst_25776;
var c = inst_25777;
return ((function (cs,vec__25771,v,c,inst_25777,inst_25766,inst_25775,inst_25776,state_val_25797,c__23727__auto___25824,out){
return (function (p1__25761_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25761_SHARP_);
});
;})(cs,vec__25771,v,c,inst_25777,inst_25766,inst_25775,inst_25776,state_val_25797,c__23727__auto___25824,out))
})();
var inst_25781 = cljs.core.filterv.call(null,inst_25780,inst_25766);
var inst_25766__$1 = inst_25781;
var state_25796__$1 = (function (){var statearr_25811 = state_25796;
(statearr_25811[(10)] = inst_25766__$1);

return statearr_25811;
})();
var statearr_25812_25834 = state_25796__$1;
(statearr_25812_25834[(2)] = null);

(statearr_25812_25834[(1)] = (2));


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
});})(c__23727__auto___25824,out))
;
return ((function (switch__23660__auto__,c__23727__auto___25824,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_25816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25816[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_25816[(1)] = (1));

return statearr_25816;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_25796){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_25796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25817){if((e25817 instanceof Object)){
var ex__23664__auto__ = e25817;
var statearr_25818_25835 = state_25796;
(statearr_25818_25835[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25836 = state_25796;
state_25796 = G__25836;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_25796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_25796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25824,out))
})();
var state__23729__auto__ = (function (){var statearr_25819 = f__23728__auto__.call(null);
(statearr_25819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25824);

return statearr_25819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25824,out))
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
var args25837 = [];
var len__21450__auto___25886 = arguments.length;
var i__21451__auto___25887 = (0);
while(true){
if((i__21451__auto___25887 < len__21450__auto___25886)){
args25837.push((arguments[i__21451__auto___25887]));

var G__25888 = (i__21451__auto___25887 + (1));
i__21451__auto___25887 = G__25888;
continue;
} else {
}
break;
}

var G__25839 = args25837.length;
switch (G__25839) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25837.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23727__auto___25890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25890,out){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25890,out){
return (function (state_25863){
var state_val_25864 = (state_25863[(1)]);
if((state_val_25864 === (7))){
var inst_25845 = (state_25863[(7)]);
var inst_25845__$1 = (state_25863[(2)]);
var inst_25846 = (inst_25845__$1 == null);
var inst_25847 = cljs.core.not.call(null,inst_25846);
var state_25863__$1 = (function (){var statearr_25865 = state_25863;
(statearr_25865[(7)] = inst_25845__$1);

return statearr_25865;
})();
if(inst_25847){
var statearr_25866_25891 = state_25863__$1;
(statearr_25866_25891[(1)] = (8));

} else {
var statearr_25867_25892 = state_25863__$1;
(statearr_25867_25892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (1))){
var inst_25840 = (0);
var state_25863__$1 = (function (){var statearr_25868 = state_25863;
(statearr_25868[(8)] = inst_25840);

return statearr_25868;
})();
var statearr_25869_25893 = state_25863__$1;
(statearr_25869_25893[(2)] = null);

(statearr_25869_25893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (4))){
var state_25863__$1 = state_25863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25863__$1,(7),ch);
} else {
if((state_val_25864 === (6))){
var inst_25858 = (state_25863[(2)]);
var state_25863__$1 = state_25863;
var statearr_25870_25894 = state_25863__$1;
(statearr_25870_25894[(2)] = inst_25858);

(statearr_25870_25894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (3))){
var inst_25860 = (state_25863[(2)]);
var inst_25861 = cljs.core.async.close_BANG_.call(null,out);
var state_25863__$1 = (function (){var statearr_25871 = state_25863;
(statearr_25871[(9)] = inst_25860);

return statearr_25871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25863__$1,inst_25861);
} else {
if((state_val_25864 === (2))){
var inst_25840 = (state_25863[(8)]);
var inst_25842 = (inst_25840 < n);
var state_25863__$1 = state_25863;
if(cljs.core.truth_(inst_25842)){
var statearr_25872_25895 = state_25863__$1;
(statearr_25872_25895[(1)] = (4));

} else {
var statearr_25873_25896 = state_25863__$1;
(statearr_25873_25896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (11))){
var inst_25840 = (state_25863[(8)]);
var inst_25850 = (state_25863[(2)]);
var inst_25851 = (inst_25840 + (1));
var inst_25840__$1 = inst_25851;
var state_25863__$1 = (function (){var statearr_25874 = state_25863;
(statearr_25874[(8)] = inst_25840__$1);

(statearr_25874[(10)] = inst_25850);

return statearr_25874;
})();
var statearr_25875_25897 = state_25863__$1;
(statearr_25875_25897[(2)] = null);

(statearr_25875_25897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (9))){
var state_25863__$1 = state_25863;
var statearr_25876_25898 = state_25863__$1;
(statearr_25876_25898[(2)] = null);

(statearr_25876_25898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (5))){
var state_25863__$1 = state_25863;
var statearr_25877_25899 = state_25863__$1;
(statearr_25877_25899[(2)] = null);

(statearr_25877_25899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (10))){
var inst_25855 = (state_25863[(2)]);
var state_25863__$1 = state_25863;
var statearr_25878_25900 = state_25863__$1;
(statearr_25878_25900[(2)] = inst_25855);

(statearr_25878_25900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25864 === (8))){
var inst_25845 = (state_25863[(7)]);
var state_25863__$1 = state_25863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25863__$1,(11),out,inst_25845);
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
});})(c__23727__auto___25890,out))
;
return ((function (switch__23660__auto__,c__23727__auto___25890,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_25882 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25882[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_25882[(1)] = (1));

return statearr_25882;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_25863){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_25863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25883){if((e25883 instanceof Object)){
var ex__23664__auto__ = e25883;
var statearr_25884_25901 = state_25863;
(statearr_25884_25901[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25902 = state_25863;
state_25863 = G__25902;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_25863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_25863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25890,out))
})();
var state__23729__auto__ = (function (){var statearr_25885 = f__23728__auto__.call(null);
(statearr_25885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25890);

return statearr_25885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25890,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25910 = (function (map_LT_,f,ch,meta25911){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25911 = meta25911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25912,meta25911__$1){
var self__ = this;
var _25912__$1 = this;
return (new cljs.core.async.t_cljs$core$async25910(self__.map_LT_,self__.f,self__.ch,meta25911__$1));
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25912){
var self__ = this;
var _25912__$1 = this;
return self__.meta25911;
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25913 = (function (map_LT_,f,ch,meta25911,_,fn1,meta25914){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25911 = meta25911;
this._ = _;
this.fn1 = fn1;
this.meta25914 = meta25914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25915,meta25914__$1){
var self__ = this;
var _25915__$1 = this;
return (new cljs.core.async.t_cljs$core$async25913(self__.map_LT_,self__.f,self__.ch,self__.meta25911,self__._,self__.fn1,meta25914__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25915){
var self__ = this;
var _25915__$1 = this;
return self__.meta25914;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25903_SHARP_){
return f1.call(null,(((p1__25903_SHARP_ == null))?null:self__.f.call(null,p1__25903_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25913.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25911","meta25911",1928243404,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25910","cljs.core.async/t_cljs$core$async25910",-595885845,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25914","meta25914",69198074,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25913";

cljs.core.async.t_cljs$core$async25913.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async25913");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25913 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25913(map_LT___$1,f__$1,ch__$1,meta25911__$1,___$2,fn1__$1,meta25914){
return (new cljs.core.async.t_cljs$core$async25913(map_LT___$1,f__$1,ch__$1,meta25911__$1,___$2,fn1__$1,meta25914));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25913(self__.map_LT_,self__.f,self__.ch,self__.meta25911,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20258__auto__ = ret;
if(cljs.core.truth_(and__20258__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20258__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25911","meta25911",1928243404,null)], null);
});

cljs.core.async.t_cljs$core$async25910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25910";

cljs.core.async.t_cljs$core$async25910.cljs$lang$ctorPrWriter = (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async25910");
});

cljs.core.async.__GT_t_cljs$core$async25910 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25910(map_LT___$1,f__$1,ch__$1,meta25911){
return (new cljs.core.async.t_cljs$core$async25910(map_LT___$1,f__$1,ch__$1,meta25911));
});

}

return (new cljs.core.async.t_cljs$core$async25910(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25919 = (function (map_GT_,f,ch,meta25920){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25920 = meta25920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25921,meta25920__$1){
var self__ = this;
var _25921__$1 = this;
return (new cljs.core.async.t_cljs$core$async25919(self__.map_GT_,self__.f,self__.ch,meta25920__$1));
});

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25921){
var self__ = this;
var _25921__$1 = this;
return self__.meta25920;
});

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25920","meta25920",-244739261,null)], null);
});

cljs.core.async.t_cljs$core$async25919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25919";

cljs.core.async.t_cljs$core$async25919.cljs$lang$ctorPrWriter = (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async25919");
});

cljs.core.async.__GT_t_cljs$core$async25919 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25919(map_GT___$1,f__$1,ch__$1,meta25920){
return (new cljs.core.async.t_cljs$core$async25919(map_GT___$1,f__$1,ch__$1,meta25920));
});

}

return (new cljs.core.async.t_cljs$core$async25919(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25925 = (function (filter_GT_,p,ch,meta25926){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25926 = meta25926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25927,meta25926__$1){
var self__ = this;
var _25927__$1 = this;
return (new cljs.core.async.t_cljs$core$async25925(self__.filter_GT_,self__.p,self__.ch,meta25926__$1));
});

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25927){
var self__ = this;
var _25927__$1 = this;
return self__.meta25926;
});

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25926","meta25926",-279367153,null)], null);
});

cljs.core.async.t_cljs$core$async25925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25925";

cljs.core.async.t_cljs$core$async25925.cljs$lang$ctorPrWriter = (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.core.async/t_cljs$core$async25925");
});

cljs.core.async.__GT_t_cljs$core$async25925 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25925(filter_GT___$1,p__$1,ch__$1,meta25926){
return (new cljs.core.async.t_cljs$core$async25925(filter_GT___$1,p__$1,ch__$1,meta25926));
});

}

return (new cljs.core.async.t_cljs$core$async25925(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25928 = [];
var len__21450__auto___25972 = arguments.length;
var i__21451__auto___25973 = (0);
while(true){
if((i__21451__auto___25973 < len__21450__auto___25972)){
args25928.push((arguments[i__21451__auto___25973]));

var G__25974 = (i__21451__auto___25973 + (1));
i__21451__auto___25973 = G__25974;
continue;
} else {
}
break;
}

var G__25930 = args25928.length;
switch (G__25930) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25928.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23727__auto___25976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___25976,out){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___25976,out){
return (function (state_25951){
var state_val_25952 = (state_25951[(1)]);
if((state_val_25952 === (7))){
var inst_25947 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
var statearr_25953_25977 = state_25951__$1;
(statearr_25953_25977[(2)] = inst_25947);

(statearr_25953_25977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (1))){
var state_25951__$1 = state_25951;
var statearr_25954_25978 = state_25951__$1;
(statearr_25954_25978[(2)] = null);

(statearr_25954_25978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (4))){
var inst_25933 = (state_25951[(7)]);
var inst_25933__$1 = (state_25951[(2)]);
var inst_25934 = (inst_25933__$1 == null);
var state_25951__$1 = (function (){var statearr_25955 = state_25951;
(statearr_25955[(7)] = inst_25933__$1);

return statearr_25955;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_25956_25979 = state_25951__$1;
(statearr_25956_25979[(1)] = (5));

} else {
var statearr_25957_25980 = state_25951__$1;
(statearr_25957_25980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (6))){
var inst_25933 = (state_25951[(7)]);
var inst_25938 = p.call(null,inst_25933);
var state_25951__$1 = state_25951;
if(cljs.core.truth_(inst_25938)){
var statearr_25958_25981 = state_25951__$1;
(statearr_25958_25981[(1)] = (8));

} else {
var statearr_25959_25982 = state_25951__$1;
(statearr_25959_25982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (3))){
var inst_25949 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25951__$1,inst_25949);
} else {
if((state_val_25952 === (2))){
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25951__$1,(4),ch);
} else {
if((state_val_25952 === (11))){
var inst_25941 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
var statearr_25960_25983 = state_25951__$1;
(statearr_25960_25983[(2)] = inst_25941);

(statearr_25960_25983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (9))){
var state_25951__$1 = state_25951;
var statearr_25961_25984 = state_25951__$1;
(statearr_25961_25984[(2)] = null);

(statearr_25961_25984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (5))){
var inst_25936 = cljs.core.async.close_BANG_.call(null,out);
var state_25951__$1 = state_25951;
var statearr_25962_25985 = state_25951__$1;
(statearr_25962_25985[(2)] = inst_25936);

(statearr_25962_25985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (10))){
var inst_25944 = (state_25951[(2)]);
var state_25951__$1 = (function (){var statearr_25963 = state_25951;
(statearr_25963[(8)] = inst_25944);

return statearr_25963;
})();
var statearr_25964_25986 = state_25951__$1;
(statearr_25964_25986[(2)] = null);

(statearr_25964_25986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (8))){
var inst_25933 = (state_25951[(7)]);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25951__$1,(11),out,inst_25933);
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
});})(c__23727__auto___25976,out))
;
return ((function (switch__23660__auto__,c__23727__auto___25976,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_25968 = [null,null,null,null,null,null,null,null,null];
(statearr_25968[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_25968[(1)] = (1));

return statearr_25968;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_25951){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_25951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e25969){if((e25969 instanceof Object)){
var ex__23664__auto__ = e25969;
var statearr_25970_25987 = state_25951;
(statearr_25970_25987[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25988 = state_25951;
state_25951 = G__25988;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_25951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_25951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___25976,out))
})();
var state__23729__auto__ = (function (){var statearr_25971 = f__23728__auto__.call(null);
(statearr_25971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___25976);

return statearr_25971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___25976,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25989 = [];
var len__21450__auto___25992 = arguments.length;
var i__21451__auto___25993 = (0);
while(true){
if((i__21451__auto___25993 < len__21450__auto___25992)){
args25989.push((arguments[i__21451__auto___25993]));

var G__25994 = (i__21451__auto___25993 + (1));
i__21451__auto___25993 = G__25994;
continue;
} else {
}
break;
}

var G__25991 = args25989.length;
switch (G__25991) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25989.length)].join('')));

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
var c__23727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto__){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto__){
return (function (state_26161){
var state_val_26162 = (state_26161[(1)]);
if((state_val_26162 === (7))){
var inst_26157 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26163_26204 = state_26161__$1;
(statearr_26163_26204[(2)] = inst_26157);

(statearr_26163_26204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (20))){
var inst_26127 = (state_26161[(7)]);
var inst_26138 = (state_26161[(2)]);
var inst_26139 = cljs.core.next.call(null,inst_26127);
var inst_26113 = inst_26139;
var inst_26114 = null;
var inst_26115 = (0);
var inst_26116 = (0);
var state_26161__$1 = (function (){var statearr_26164 = state_26161;
(statearr_26164[(8)] = inst_26115);

(statearr_26164[(9)] = inst_26138);

(statearr_26164[(10)] = inst_26116);

(statearr_26164[(11)] = inst_26113);

(statearr_26164[(12)] = inst_26114);

return statearr_26164;
})();
var statearr_26165_26205 = state_26161__$1;
(statearr_26165_26205[(2)] = null);

(statearr_26165_26205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (1))){
var state_26161__$1 = state_26161;
var statearr_26166_26206 = state_26161__$1;
(statearr_26166_26206[(2)] = null);

(statearr_26166_26206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (4))){
var inst_26102 = (state_26161[(13)]);
var inst_26102__$1 = (state_26161[(2)]);
var inst_26103 = (inst_26102__$1 == null);
var state_26161__$1 = (function (){var statearr_26167 = state_26161;
(statearr_26167[(13)] = inst_26102__$1);

return statearr_26167;
})();
if(cljs.core.truth_(inst_26103)){
var statearr_26168_26207 = state_26161__$1;
(statearr_26168_26207[(1)] = (5));

} else {
var statearr_26169_26208 = state_26161__$1;
(statearr_26169_26208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (15))){
var state_26161__$1 = state_26161;
var statearr_26173_26209 = state_26161__$1;
(statearr_26173_26209[(2)] = null);

(statearr_26173_26209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (21))){
var state_26161__$1 = state_26161;
var statearr_26174_26210 = state_26161__$1;
(statearr_26174_26210[(2)] = null);

(statearr_26174_26210[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (13))){
var inst_26115 = (state_26161[(8)]);
var inst_26116 = (state_26161[(10)]);
var inst_26113 = (state_26161[(11)]);
var inst_26114 = (state_26161[(12)]);
var inst_26123 = (state_26161[(2)]);
var inst_26124 = (inst_26116 + (1));
var tmp26170 = inst_26115;
var tmp26171 = inst_26113;
var tmp26172 = inst_26114;
var inst_26113__$1 = tmp26171;
var inst_26114__$1 = tmp26172;
var inst_26115__$1 = tmp26170;
var inst_26116__$1 = inst_26124;
var state_26161__$1 = (function (){var statearr_26175 = state_26161;
(statearr_26175[(8)] = inst_26115__$1);

(statearr_26175[(10)] = inst_26116__$1);

(statearr_26175[(14)] = inst_26123);

(statearr_26175[(11)] = inst_26113__$1);

(statearr_26175[(12)] = inst_26114__$1);

return statearr_26175;
})();
var statearr_26176_26211 = state_26161__$1;
(statearr_26176_26211[(2)] = null);

(statearr_26176_26211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (22))){
var state_26161__$1 = state_26161;
var statearr_26177_26212 = state_26161__$1;
(statearr_26177_26212[(2)] = null);

(statearr_26177_26212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (6))){
var inst_26102 = (state_26161[(13)]);
var inst_26111 = f.call(null,inst_26102);
var inst_26112 = cljs.core.seq.call(null,inst_26111);
var inst_26113 = inst_26112;
var inst_26114 = null;
var inst_26115 = (0);
var inst_26116 = (0);
var state_26161__$1 = (function (){var statearr_26178 = state_26161;
(statearr_26178[(8)] = inst_26115);

(statearr_26178[(10)] = inst_26116);

(statearr_26178[(11)] = inst_26113);

(statearr_26178[(12)] = inst_26114);

return statearr_26178;
})();
var statearr_26179_26213 = state_26161__$1;
(statearr_26179_26213[(2)] = null);

(statearr_26179_26213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (17))){
var inst_26127 = (state_26161[(7)]);
var inst_26131 = cljs.core.chunk_first.call(null,inst_26127);
var inst_26132 = cljs.core.chunk_rest.call(null,inst_26127);
var inst_26133 = cljs.core.count.call(null,inst_26131);
var inst_26113 = inst_26132;
var inst_26114 = inst_26131;
var inst_26115 = inst_26133;
var inst_26116 = (0);
var state_26161__$1 = (function (){var statearr_26180 = state_26161;
(statearr_26180[(8)] = inst_26115);

(statearr_26180[(10)] = inst_26116);

(statearr_26180[(11)] = inst_26113);

(statearr_26180[(12)] = inst_26114);

return statearr_26180;
})();
var statearr_26181_26214 = state_26161__$1;
(statearr_26181_26214[(2)] = null);

(statearr_26181_26214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (3))){
var inst_26159 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26161__$1,inst_26159);
} else {
if((state_val_26162 === (12))){
var inst_26147 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26182_26215 = state_26161__$1;
(statearr_26182_26215[(2)] = inst_26147);

(statearr_26182_26215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (2))){
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26161__$1,(4),in$);
} else {
if((state_val_26162 === (23))){
var inst_26155 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26183_26216 = state_26161__$1;
(statearr_26183_26216[(2)] = inst_26155);

(statearr_26183_26216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (19))){
var inst_26142 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26184_26217 = state_26161__$1;
(statearr_26184_26217[(2)] = inst_26142);

(statearr_26184_26217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (11))){
var inst_26127 = (state_26161[(7)]);
var inst_26113 = (state_26161[(11)]);
var inst_26127__$1 = cljs.core.seq.call(null,inst_26113);
var state_26161__$1 = (function (){var statearr_26185 = state_26161;
(statearr_26185[(7)] = inst_26127__$1);

return statearr_26185;
})();
if(inst_26127__$1){
var statearr_26186_26218 = state_26161__$1;
(statearr_26186_26218[(1)] = (14));

} else {
var statearr_26187_26219 = state_26161__$1;
(statearr_26187_26219[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (9))){
var inst_26149 = (state_26161[(2)]);
var inst_26150 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26161__$1 = (function (){var statearr_26188 = state_26161;
(statearr_26188[(15)] = inst_26149);

return statearr_26188;
})();
if(cljs.core.truth_(inst_26150)){
var statearr_26189_26220 = state_26161__$1;
(statearr_26189_26220[(1)] = (21));

} else {
var statearr_26190_26221 = state_26161__$1;
(statearr_26190_26221[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (5))){
var inst_26105 = cljs.core.async.close_BANG_.call(null,out);
var state_26161__$1 = state_26161;
var statearr_26191_26222 = state_26161__$1;
(statearr_26191_26222[(2)] = inst_26105);

(statearr_26191_26222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (14))){
var inst_26127 = (state_26161[(7)]);
var inst_26129 = cljs.core.chunked_seq_QMARK_.call(null,inst_26127);
var state_26161__$1 = state_26161;
if(inst_26129){
var statearr_26192_26223 = state_26161__$1;
(statearr_26192_26223[(1)] = (17));

} else {
var statearr_26193_26224 = state_26161__$1;
(statearr_26193_26224[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (16))){
var inst_26145 = (state_26161[(2)]);
var state_26161__$1 = state_26161;
var statearr_26194_26225 = state_26161__$1;
(statearr_26194_26225[(2)] = inst_26145);

(statearr_26194_26225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26162 === (10))){
var inst_26116 = (state_26161[(10)]);
var inst_26114 = (state_26161[(12)]);
var inst_26121 = cljs.core._nth.call(null,inst_26114,inst_26116);
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26161__$1,(13),out,inst_26121);
} else {
if((state_val_26162 === (18))){
var inst_26127 = (state_26161[(7)]);
var inst_26136 = cljs.core.first.call(null,inst_26127);
var state_26161__$1 = state_26161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26161__$1,(20),out,inst_26136);
} else {
if((state_val_26162 === (8))){
var inst_26115 = (state_26161[(8)]);
var inst_26116 = (state_26161[(10)]);
var inst_26118 = (inst_26116 < inst_26115);
var inst_26119 = inst_26118;
var state_26161__$1 = state_26161;
if(cljs.core.truth_(inst_26119)){
var statearr_26195_26226 = state_26161__$1;
(statearr_26195_26226[(1)] = (10));

} else {
var statearr_26196_26227 = state_26161__$1;
(statearr_26196_26227[(1)] = (11));

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
});})(c__23727__auto__))
;
return ((function (switch__23660__auto__,c__23727__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____0 = (function (){
var statearr_26200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26200[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__);

(statearr_26200[(1)] = (1));

return statearr_26200;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____1 = (function (state_26161){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_26161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e26201){if((e26201 instanceof Object)){
var ex__23664__auto__ = e26201;
var statearr_26202_26228 = state_26161;
(statearr_26202_26228[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26229 = state_26161;
state_26161 = G__26229;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__ = function(state_26161){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____1.call(this,state_26161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23661__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto__))
})();
var state__23729__auto__ = (function (){var statearr_26203 = f__23728__auto__.call(null);
(statearr_26203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto__);

return statearr_26203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto__))
);

return c__23727__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26230 = [];
var len__21450__auto___26233 = arguments.length;
var i__21451__auto___26234 = (0);
while(true){
if((i__21451__auto___26234 < len__21450__auto___26233)){
args26230.push((arguments[i__21451__auto___26234]));

var G__26235 = (i__21451__auto___26234 + (1));
i__21451__auto___26234 = G__26235;
continue;
} else {
}
break;
}

var G__26232 = args26230.length;
switch (G__26232) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26230.length)].join('')));

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
var args26237 = [];
var len__21450__auto___26240 = arguments.length;
var i__21451__auto___26241 = (0);
while(true){
if((i__21451__auto___26241 < len__21450__auto___26240)){
args26237.push((arguments[i__21451__auto___26241]));

var G__26242 = (i__21451__auto___26241 + (1));
i__21451__auto___26241 = G__26242;
continue;
} else {
}
break;
}

var G__26239 = args26237.length;
switch (G__26239) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26237.length)].join('')));

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
var args26244 = [];
var len__21450__auto___26295 = arguments.length;
var i__21451__auto___26296 = (0);
while(true){
if((i__21451__auto___26296 < len__21450__auto___26295)){
args26244.push((arguments[i__21451__auto___26296]));

var G__26297 = (i__21451__auto___26296 + (1));
i__21451__auto___26296 = G__26297;
continue;
} else {
}
break;
}

var G__26246 = args26244.length;
switch (G__26246) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26244.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23727__auto___26299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___26299,out){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___26299,out){
return (function (state_26270){
var state_val_26271 = (state_26270[(1)]);
if((state_val_26271 === (7))){
var inst_26265 = (state_26270[(2)]);
var state_26270__$1 = state_26270;
var statearr_26272_26300 = state_26270__$1;
(statearr_26272_26300[(2)] = inst_26265);

(statearr_26272_26300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (1))){
var inst_26247 = null;
var state_26270__$1 = (function (){var statearr_26273 = state_26270;
(statearr_26273[(7)] = inst_26247);

return statearr_26273;
})();
var statearr_26274_26301 = state_26270__$1;
(statearr_26274_26301[(2)] = null);

(statearr_26274_26301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (4))){
var inst_26250 = (state_26270[(8)]);
var inst_26250__$1 = (state_26270[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var inst_26252 = cljs.core.not.call(null,inst_26251);
var state_26270__$1 = (function (){var statearr_26275 = state_26270;
(statearr_26275[(8)] = inst_26250__$1);

return statearr_26275;
})();
if(inst_26252){
var statearr_26276_26302 = state_26270__$1;
(statearr_26276_26302[(1)] = (5));

} else {
var statearr_26277_26303 = state_26270__$1;
(statearr_26277_26303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (6))){
var state_26270__$1 = state_26270;
var statearr_26278_26304 = state_26270__$1;
(statearr_26278_26304[(2)] = null);

(statearr_26278_26304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (3))){
var inst_26267 = (state_26270[(2)]);
var inst_26268 = cljs.core.async.close_BANG_.call(null,out);
var state_26270__$1 = (function (){var statearr_26279 = state_26270;
(statearr_26279[(9)] = inst_26267);

return statearr_26279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26270__$1,inst_26268);
} else {
if((state_val_26271 === (2))){
var state_26270__$1 = state_26270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26270__$1,(4),ch);
} else {
if((state_val_26271 === (11))){
var inst_26250 = (state_26270[(8)]);
var inst_26259 = (state_26270[(2)]);
var inst_26247 = inst_26250;
var state_26270__$1 = (function (){var statearr_26280 = state_26270;
(statearr_26280[(7)] = inst_26247);

(statearr_26280[(10)] = inst_26259);

return statearr_26280;
})();
var statearr_26281_26305 = state_26270__$1;
(statearr_26281_26305[(2)] = null);

(statearr_26281_26305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (9))){
var inst_26250 = (state_26270[(8)]);
var state_26270__$1 = state_26270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26270__$1,(11),out,inst_26250);
} else {
if((state_val_26271 === (5))){
var inst_26250 = (state_26270[(8)]);
var inst_26247 = (state_26270[(7)]);
var inst_26254 = cljs.core._EQ_.call(null,inst_26250,inst_26247);
var state_26270__$1 = state_26270;
if(inst_26254){
var statearr_26283_26306 = state_26270__$1;
(statearr_26283_26306[(1)] = (8));

} else {
var statearr_26284_26307 = state_26270__$1;
(statearr_26284_26307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (10))){
var inst_26262 = (state_26270[(2)]);
var state_26270__$1 = state_26270;
var statearr_26285_26308 = state_26270__$1;
(statearr_26285_26308[(2)] = inst_26262);

(statearr_26285_26308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26271 === (8))){
var inst_26247 = (state_26270[(7)]);
var tmp26282 = inst_26247;
var inst_26247__$1 = tmp26282;
var state_26270__$1 = (function (){var statearr_26286 = state_26270;
(statearr_26286[(7)] = inst_26247__$1);

return statearr_26286;
})();
var statearr_26287_26309 = state_26270__$1;
(statearr_26287_26309[(2)] = null);

(statearr_26287_26309[(1)] = (2));


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
});})(c__23727__auto___26299,out))
;
return ((function (switch__23660__auto__,c__23727__auto___26299,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_26291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26291[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_26291[(1)] = (1));

return statearr_26291;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_26270){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_26270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e26292){if((e26292 instanceof Object)){
var ex__23664__auto__ = e26292;
var statearr_26293_26310 = state_26270;
(statearr_26293_26310[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26311 = state_26270;
state_26270 = G__26311;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_26270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_26270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___26299,out))
})();
var state__23729__auto__ = (function (){var statearr_26294 = f__23728__auto__.call(null);
(statearr_26294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___26299);

return statearr_26294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___26299,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26312 = [];
var len__21450__auto___26382 = arguments.length;
var i__21451__auto___26383 = (0);
while(true){
if((i__21451__auto___26383 < len__21450__auto___26382)){
args26312.push((arguments[i__21451__auto___26383]));

var G__26384 = (i__21451__auto___26383 + (1));
i__21451__auto___26383 = G__26384;
continue;
} else {
}
break;
}

var G__26314 = args26312.length;
switch (G__26314) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26312.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23727__auto___26386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___26386,out){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___26386,out){
return (function (state_26352){
var state_val_26353 = (state_26352[(1)]);
if((state_val_26353 === (7))){
var inst_26348 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26354_26387 = state_26352__$1;
(statearr_26354_26387[(2)] = inst_26348);

(statearr_26354_26387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (1))){
var inst_26315 = (new Array(n));
var inst_26316 = inst_26315;
var inst_26317 = (0);
var state_26352__$1 = (function (){var statearr_26355 = state_26352;
(statearr_26355[(7)] = inst_26316);

(statearr_26355[(8)] = inst_26317);

return statearr_26355;
})();
var statearr_26356_26388 = state_26352__$1;
(statearr_26356_26388[(2)] = null);

(statearr_26356_26388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (4))){
var inst_26320 = (state_26352[(9)]);
var inst_26320__$1 = (state_26352[(2)]);
var inst_26321 = (inst_26320__$1 == null);
var inst_26322 = cljs.core.not.call(null,inst_26321);
var state_26352__$1 = (function (){var statearr_26357 = state_26352;
(statearr_26357[(9)] = inst_26320__$1);

return statearr_26357;
})();
if(inst_26322){
var statearr_26358_26389 = state_26352__$1;
(statearr_26358_26389[(1)] = (5));

} else {
var statearr_26359_26390 = state_26352__$1;
(statearr_26359_26390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (15))){
var inst_26342 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26360_26391 = state_26352__$1;
(statearr_26360_26391[(2)] = inst_26342);

(statearr_26360_26391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (13))){
var state_26352__$1 = state_26352;
var statearr_26361_26392 = state_26352__$1;
(statearr_26361_26392[(2)] = null);

(statearr_26361_26392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (6))){
var inst_26317 = (state_26352[(8)]);
var inst_26338 = (inst_26317 > (0));
var state_26352__$1 = state_26352;
if(cljs.core.truth_(inst_26338)){
var statearr_26362_26393 = state_26352__$1;
(statearr_26362_26393[(1)] = (12));

} else {
var statearr_26363_26394 = state_26352__$1;
(statearr_26363_26394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (3))){
var inst_26350 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26352__$1,inst_26350);
} else {
if((state_val_26353 === (12))){
var inst_26316 = (state_26352[(7)]);
var inst_26340 = cljs.core.vec.call(null,inst_26316);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26352__$1,(15),out,inst_26340);
} else {
if((state_val_26353 === (2))){
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26352__$1,(4),ch);
} else {
if((state_val_26353 === (11))){
var inst_26332 = (state_26352[(2)]);
var inst_26333 = (new Array(n));
var inst_26316 = inst_26333;
var inst_26317 = (0);
var state_26352__$1 = (function (){var statearr_26364 = state_26352;
(statearr_26364[(7)] = inst_26316);

(statearr_26364[(8)] = inst_26317);

(statearr_26364[(10)] = inst_26332);

return statearr_26364;
})();
var statearr_26365_26395 = state_26352__$1;
(statearr_26365_26395[(2)] = null);

(statearr_26365_26395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (9))){
var inst_26316 = (state_26352[(7)]);
var inst_26330 = cljs.core.vec.call(null,inst_26316);
var state_26352__$1 = state_26352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26352__$1,(11),out,inst_26330);
} else {
if((state_val_26353 === (5))){
var inst_26316 = (state_26352[(7)]);
var inst_26317 = (state_26352[(8)]);
var inst_26320 = (state_26352[(9)]);
var inst_26325 = (state_26352[(11)]);
var inst_26324 = (inst_26316[inst_26317] = inst_26320);
var inst_26325__$1 = (inst_26317 + (1));
var inst_26326 = (inst_26325__$1 < n);
var state_26352__$1 = (function (){var statearr_26366 = state_26352;
(statearr_26366[(12)] = inst_26324);

(statearr_26366[(11)] = inst_26325__$1);

return statearr_26366;
})();
if(cljs.core.truth_(inst_26326)){
var statearr_26367_26396 = state_26352__$1;
(statearr_26367_26396[(1)] = (8));

} else {
var statearr_26368_26397 = state_26352__$1;
(statearr_26368_26397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (14))){
var inst_26345 = (state_26352[(2)]);
var inst_26346 = cljs.core.async.close_BANG_.call(null,out);
var state_26352__$1 = (function (){var statearr_26370 = state_26352;
(statearr_26370[(13)] = inst_26345);

return statearr_26370;
})();
var statearr_26371_26398 = state_26352__$1;
(statearr_26371_26398[(2)] = inst_26346);

(statearr_26371_26398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (10))){
var inst_26336 = (state_26352[(2)]);
var state_26352__$1 = state_26352;
var statearr_26372_26399 = state_26352__$1;
(statearr_26372_26399[(2)] = inst_26336);

(statearr_26372_26399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26353 === (8))){
var inst_26316 = (state_26352[(7)]);
var inst_26325 = (state_26352[(11)]);
var tmp26369 = inst_26316;
var inst_26316__$1 = tmp26369;
var inst_26317 = inst_26325;
var state_26352__$1 = (function (){var statearr_26373 = state_26352;
(statearr_26373[(7)] = inst_26316__$1);

(statearr_26373[(8)] = inst_26317);

return statearr_26373;
})();
var statearr_26374_26400 = state_26352__$1;
(statearr_26374_26400[(2)] = null);

(statearr_26374_26400[(1)] = (2));


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
});})(c__23727__auto___26386,out))
;
return ((function (switch__23660__auto__,c__23727__auto___26386,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_26378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26378[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_26378[(1)] = (1));

return statearr_26378;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_26352){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_26352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e26379){if((e26379 instanceof Object)){
var ex__23664__auto__ = e26379;
var statearr_26380_26401 = state_26352;
(statearr_26380_26401[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26402 = state_26352;
state_26352 = G__26402;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_26352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_26352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___26386,out))
})();
var state__23729__auto__ = (function (){var statearr_26381 = f__23728__auto__.call(null);
(statearr_26381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___26386);

return statearr_26381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___26386,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26403 = [];
var len__21450__auto___26477 = arguments.length;
var i__21451__auto___26478 = (0);
while(true){
if((i__21451__auto___26478 < len__21450__auto___26477)){
args26403.push((arguments[i__21451__auto___26478]));

var G__26479 = (i__21451__auto___26478 + (1));
i__21451__auto___26478 = G__26479;
continue;
} else {
}
break;
}

var G__26405 = args26403.length;
switch (G__26405) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26403.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23727__auto___26481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23727__auto___26481,out){
return (function (){
var f__23728__auto__ = (function (){var switch__23660__auto__ = ((function (c__23727__auto___26481,out){
return (function (state_26447){
var state_val_26448 = (state_26447[(1)]);
if((state_val_26448 === (7))){
var inst_26443 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26449_26482 = state_26447__$1;
(statearr_26449_26482[(2)] = inst_26443);

(statearr_26449_26482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (1))){
var inst_26406 = [];
var inst_26407 = inst_26406;
var inst_26408 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26447__$1 = (function (){var statearr_26450 = state_26447;
(statearr_26450[(7)] = inst_26408);

(statearr_26450[(8)] = inst_26407);

return statearr_26450;
})();
var statearr_26451_26483 = state_26447__$1;
(statearr_26451_26483[(2)] = null);

(statearr_26451_26483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (4))){
var inst_26411 = (state_26447[(9)]);
var inst_26411__$1 = (state_26447[(2)]);
var inst_26412 = (inst_26411__$1 == null);
var inst_26413 = cljs.core.not.call(null,inst_26412);
var state_26447__$1 = (function (){var statearr_26452 = state_26447;
(statearr_26452[(9)] = inst_26411__$1);

return statearr_26452;
})();
if(inst_26413){
var statearr_26453_26484 = state_26447__$1;
(statearr_26453_26484[(1)] = (5));

} else {
var statearr_26454_26485 = state_26447__$1;
(statearr_26454_26485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (15))){
var inst_26437 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26455_26486 = state_26447__$1;
(statearr_26455_26486[(2)] = inst_26437);

(statearr_26455_26486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (13))){
var state_26447__$1 = state_26447;
var statearr_26456_26487 = state_26447__$1;
(statearr_26456_26487[(2)] = null);

(statearr_26456_26487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (6))){
var inst_26407 = (state_26447[(8)]);
var inst_26432 = inst_26407.length;
var inst_26433 = (inst_26432 > (0));
var state_26447__$1 = state_26447;
if(cljs.core.truth_(inst_26433)){
var statearr_26457_26488 = state_26447__$1;
(statearr_26457_26488[(1)] = (12));

} else {
var statearr_26458_26489 = state_26447__$1;
(statearr_26458_26489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (3))){
var inst_26445 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26447__$1,inst_26445);
} else {
if((state_val_26448 === (12))){
var inst_26407 = (state_26447[(8)]);
var inst_26435 = cljs.core.vec.call(null,inst_26407);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26447__$1,(15),out,inst_26435);
} else {
if((state_val_26448 === (2))){
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26447__$1,(4),ch);
} else {
if((state_val_26448 === (11))){
var inst_26411 = (state_26447[(9)]);
var inst_26415 = (state_26447[(10)]);
var inst_26425 = (state_26447[(2)]);
var inst_26426 = [];
var inst_26427 = inst_26426.push(inst_26411);
var inst_26407 = inst_26426;
var inst_26408 = inst_26415;
var state_26447__$1 = (function (){var statearr_26459 = state_26447;
(statearr_26459[(7)] = inst_26408);

(statearr_26459[(8)] = inst_26407);

(statearr_26459[(11)] = inst_26427);

(statearr_26459[(12)] = inst_26425);

return statearr_26459;
})();
var statearr_26460_26490 = state_26447__$1;
(statearr_26460_26490[(2)] = null);

(statearr_26460_26490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (9))){
var inst_26407 = (state_26447[(8)]);
var inst_26423 = cljs.core.vec.call(null,inst_26407);
var state_26447__$1 = state_26447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26447__$1,(11),out,inst_26423);
} else {
if((state_val_26448 === (5))){
var inst_26408 = (state_26447[(7)]);
var inst_26411 = (state_26447[(9)]);
var inst_26415 = (state_26447[(10)]);
var inst_26415__$1 = f.call(null,inst_26411);
var inst_26416 = cljs.core._EQ_.call(null,inst_26415__$1,inst_26408);
var inst_26417 = cljs.core.keyword_identical_QMARK_.call(null,inst_26408,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26418 = (inst_26416) || (inst_26417);
var state_26447__$1 = (function (){var statearr_26461 = state_26447;
(statearr_26461[(10)] = inst_26415__$1);

return statearr_26461;
})();
if(cljs.core.truth_(inst_26418)){
var statearr_26462_26491 = state_26447__$1;
(statearr_26462_26491[(1)] = (8));

} else {
var statearr_26463_26492 = state_26447__$1;
(statearr_26463_26492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (14))){
var inst_26440 = (state_26447[(2)]);
var inst_26441 = cljs.core.async.close_BANG_.call(null,out);
var state_26447__$1 = (function (){var statearr_26465 = state_26447;
(statearr_26465[(13)] = inst_26440);

return statearr_26465;
})();
var statearr_26466_26493 = state_26447__$1;
(statearr_26466_26493[(2)] = inst_26441);

(statearr_26466_26493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (10))){
var inst_26430 = (state_26447[(2)]);
var state_26447__$1 = state_26447;
var statearr_26467_26494 = state_26447__$1;
(statearr_26467_26494[(2)] = inst_26430);

(statearr_26467_26494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26448 === (8))){
var inst_26407 = (state_26447[(8)]);
var inst_26411 = (state_26447[(9)]);
var inst_26415 = (state_26447[(10)]);
var inst_26420 = inst_26407.push(inst_26411);
var tmp26464 = inst_26407;
var inst_26407__$1 = tmp26464;
var inst_26408 = inst_26415;
var state_26447__$1 = (function (){var statearr_26468 = state_26447;
(statearr_26468[(7)] = inst_26408);

(statearr_26468[(14)] = inst_26420);

(statearr_26468[(8)] = inst_26407__$1);

return statearr_26468;
})();
var statearr_26469_26495 = state_26447__$1;
(statearr_26469_26495[(2)] = null);

(statearr_26469_26495[(1)] = (2));


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
});})(c__23727__auto___26481,out))
;
return ((function (switch__23660__auto__,c__23727__auto___26481,out){
return (function() {
var cljs$core$async$state_machine__23661__auto__ = null;
var cljs$core$async$state_machine__23661__auto____0 = (function (){
var statearr_26473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26473[(0)] = cljs$core$async$state_machine__23661__auto__);

(statearr_26473[(1)] = (1));

return statearr_26473;
});
var cljs$core$async$state_machine__23661__auto____1 = (function (state_26447){
while(true){
var ret_value__23662__auto__ = (function (){try{while(true){
var result__23663__auto__ = switch__23660__auto__.call(null,state_26447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23663__auto__;
}
break;
}
}catch (e26474){if((e26474 instanceof Object)){
var ex__23664__auto__ = e26474;
var statearr_26475_26496 = state_26447;
(statearr_26475_26496[(5)] = ex__23664__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26497 = state_26447;
state_26447 = G__26497;
continue;
} else {
return ret_value__23662__auto__;
}
break;
}
});
cljs$core$async$state_machine__23661__auto__ = function(state_26447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23661__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23661__auto____1.call(this,state_26447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23661__auto____0;
cljs$core$async$state_machine__23661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23661__auto____1;
return cljs$core$async$state_machine__23661__auto__;
})()
;})(switch__23660__auto__,c__23727__auto___26481,out))
})();
var state__23729__auto__ = (function (){var statearr_26476 = f__23728__auto__.call(null);
(statearr_26476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23727__auto___26481);

return statearr_26476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23729__auto__);
});})(c__23727__auto___26481,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map