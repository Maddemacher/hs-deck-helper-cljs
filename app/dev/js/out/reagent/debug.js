// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28121__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28121 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28122__i = 0, G__28122__a = new Array(arguments.length -  0);
while (G__28122__i < G__28122__a.length) {G__28122__a[G__28122__i] = arguments[G__28122__i + 0]; ++G__28122__i;}
  args = new cljs.core.IndexedSeq(G__28122__a,0);
} 
return G__28121__delegate.call(this,args);};
G__28121.cljs$lang$maxFixedArity = 0;
G__28121.cljs$lang$applyTo = (function (arglist__28123){
var args = cljs.core.seq(arglist__28123);
return G__28121__delegate(args);
});
G__28121.cljs$core$IFn$_invoke$arity$variadic = G__28121__delegate;
return G__28121;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28124__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28125__i = 0, G__28125__a = new Array(arguments.length -  0);
while (G__28125__i < G__28125__a.length) {G__28125__a[G__28125__i] = arguments[G__28125__i + 0]; ++G__28125__i;}
  args = new cljs.core.IndexedSeq(G__28125__a,0);
} 
return G__28124__delegate.call(this,args);};
G__28124.cljs$lang$maxFixedArity = 0;
G__28124.cljs$lang$applyTo = (function (arglist__28126){
var args = cljs.core.seq(arglist__28126);
return G__28124__delegate(args);
});
G__28124.cljs$core$IFn$_invoke$arity$variadic = G__28124__delegate;
return G__28124;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map