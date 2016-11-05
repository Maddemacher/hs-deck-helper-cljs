// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__21457__auto__ = [];
var len__21450__auto___22157 = arguments.length;
var i__21451__auto___22158 = (0);
while(true){
if((i__21451__auto___22158 < len__21450__auto___22157)){
args__21457__auto__.push((arguments[i__21451__auto___22158]));

var G__22159 = (i__21451__auto___22158 + (1));
i__21451__auto___22158 = G__22159;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((1) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21458__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){

return cljs.core.apply.call(null,level.call(null,cljs.core.deref.call(null,re_frame.loggers.loggers)),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq22155){
var G__22156 = cljs.core.first.call(null,seq22155);
var seq22155__$1 = cljs.core.next.call(null,seq22155);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__22156,seq22155__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){

return cljs.core.swap_BANG_.call(null,re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});

//# sourceMappingURL=loggers.js.map