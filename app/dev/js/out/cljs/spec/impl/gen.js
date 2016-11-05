// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20923__auto__,writer__20924__auto__,opt__20925__auto__){
return cljs.core._write.call(null,writer__20924__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27666 = arguments.length;
var i__21451__auto___27667 = (0);
while(true){
if((i__21451__auto___27667 < len__21450__auto___27666)){
args__21457__auto__.push((arguments[i__21451__auto___27667]));

var G__27668 = (i__21451__auto___27667 + (1));
i__21451__auto___27667 = G__27668;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq27665){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27665));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27670 = arguments.length;
var i__21451__auto___27671 = (0);
while(true){
if((i__21451__auto___27671 < len__21450__auto___27670)){
args__21457__auto__.push((arguments[i__21451__auto___27671]));

var G__27672 = (i__21451__auto___27671 + (1));
i__21451__auto___27671 = G__27672;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq27669){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27669));
});

var g_QMARK__27673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_27674 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27673){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27673))
,null));
var mkg_27675 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27673,g_27674){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27673,g_27674))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__27673,g_27674,mkg_27675){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27673).call(null,x);
});})(g_QMARK__27673,g_27674,mkg_27675))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__27673,g_27674,mkg_27675){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_27675).call(null,gfn);
});})(g_QMARK__27673,g_27674,mkg_27675))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__27673,g_27674,mkg_27675){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_27674).call(null,generator);
});})(g_QMARK__27673,g_27674,mkg_27675))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27637__auto___27693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27637__auto___27693){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27694 = arguments.length;
var i__21451__auto___27695 = (0);
while(true){
if((i__21451__auto___27695 < len__21450__auto___27694)){
args__21457__auto__.push((arguments[i__21451__auto___27695]));

var G__27696 = (i__21451__auto___27695 + (1));
i__21451__auto___27695 = G__27696;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27693))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27693),args);
});})(g__27637__auto___27693))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27637__auto___27693){
return (function (seq27676){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27676));
});})(g__27637__auto___27693))
;


var g__27637__auto___27697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27637__auto___27697){
return (function cljs$spec$impl$gen$list(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27698 = arguments.length;
var i__21451__auto___27699 = (0);
while(true){
if((i__21451__auto___27699 < len__21450__auto___27698)){
args__21457__auto__.push((arguments[i__21451__auto___27699]));

var G__27700 = (i__21451__auto___27699 + (1));
i__21451__auto___27699 = G__27700;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27697))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27697),args);
});})(g__27637__auto___27697))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27637__auto___27697){
return (function (seq27677){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27677));
});})(g__27637__auto___27697))
;


var g__27637__auto___27701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27637__auto___27701){
return (function cljs$spec$impl$gen$map(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27702 = arguments.length;
var i__21451__auto___27703 = (0);
while(true){
if((i__21451__auto___27703 < len__21450__auto___27702)){
args__21457__auto__.push((arguments[i__21451__auto___27703]));

var G__27704 = (i__21451__auto___27703 + (1));
i__21451__auto___27703 = G__27704;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27701))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27701),args);
});})(g__27637__auto___27701))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27637__auto___27701){
return (function (seq27678){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27678));
});})(g__27637__auto___27701))
;


var g__27637__auto___27705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27637__auto___27705){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27706 = arguments.length;
var i__21451__auto___27707 = (0);
while(true){
if((i__21451__auto___27707 < len__21450__auto___27706)){
args__21457__auto__.push((arguments[i__21451__auto___27707]));

var G__27708 = (i__21451__auto___27707 + (1));
i__21451__auto___27707 = G__27708;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27705))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27705),args);
});})(g__27637__auto___27705))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27637__auto___27705){
return (function (seq27679){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27679));
});})(g__27637__auto___27705))
;


var g__27637__auto___27709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27637__auto___27709){
return (function cljs$spec$impl$gen$set(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27710 = arguments.length;
var i__21451__auto___27711 = (0);
while(true){
if((i__21451__auto___27711 < len__21450__auto___27710)){
args__21457__auto__.push((arguments[i__21451__auto___27711]));

var G__27712 = (i__21451__auto___27711 + (1));
i__21451__auto___27711 = G__27712;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27709))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27709),args);
});})(g__27637__auto___27709))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27637__auto___27709){
return (function (seq27680){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27680));
});})(g__27637__auto___27709))
;


var g__27637__auto___27713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27637__auto___27713){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27714 = arguments.length;
var i__21451__auto___27715 = (0);
while(true){
if((i__21451__auto___27715 < len__21450__auto___27714)){
args__21457__auto__.push((arguments[i__21451__auto___27715]));

var G__27716 = (i__21451__auto___27715 + (1));
i__21451__auto___27715 = G__27716;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27713))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27713),args);
});})(g__27637__auto___27713))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27637__auto___27713){
return (function (seq27681){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27681));
});})(g__27637__auto___27713))
;


var g__27637__auto___27717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27637__auto___27717){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27718 = arguments.length;
var i__21451__auto___27719 = (0);
while(true){
if((i__21451__auto___27719 < len__21450__auto___27718)){
args__21457__auto__.push((arguments[i__21451__auto___27719]));

var G__27720 = (i__21451__auto___27719 + (1));
i__21451__auto___27719 = G__27720;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27717))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27717),args);
});})(g__27637__auto___27717))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27637__auto___27717){
return (function (seq27682){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27682));
});})(g__27637__auto___27717))
;


var g__27637__auto___27721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27637__auto___27721){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27722 = arguments.length;
var i__21451__auto___27723 = (0);
while(true){
if((i__21451__auto___27723 < len__21450__auto___27722)){
args__21457__auto__.push((arguments[i__21451__auto___27723]));

var G__27724 = (i__21451__auto___27723 + (1));
i__21451__auto___27723 = G__27724;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27721))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27721),args);
});})(g__27637__auto___27721))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27637__auto___27721){
return (function (seq27683){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27683));
});})(g__27637__auto___27721))
;


var g__27637__auto___27725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27637__auto___27725){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27726 = arguments.length;
var i__21451__auto___27727 = (0);
while(true){
if((i__21451__auto___27727 < len__21450__auto___27726)){
args__21457__auto__.push((arguments[i__21451__auto___27727]));

var G__27728 = (i__21451__auto___27727 + (1));
i__21451__auto___27727 = G__27728;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27725))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27725),args);
});})(g__27637__auto___27725))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27637__auto___27725){
return (function (seq27684){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27684));
});})(g__27637__auto___27725))
;


var g__27637__auto___27729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27637__auto___27729){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27730 = arguments.length;
var i__21451__auto___27731 = (0);
while(true){
if((i__21451__auto___27731 < len__21450__auto___27730)){
args__21457__auto__.push((arguments[i__21451__auto___27731]));

var G__27732 = (i__21451__auto___27731 + (1));
i__21451__auto___27731 = G__27732;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27729))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27729),args);
});})(g__27637__auto___27729))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27637__auto___27729){
return (function (seq27685){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27685));
});})(g__27637__auto___27729))
;


var g__27637__auto___27733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27637__auto___27733){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27734 = arguments.length;
var i__21451__auto___27735 = (0);
while(true){
if((i__21451__auto___27735 < len__21450__auto___27734)){
args__21457__auto__.push((arguments[i__21451__auto___27735]));

var G__27736 = (i__21451__auto___27735 + (1));
i__21451__auto___27735 = G__27736;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27733))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27733),args);
});})(g__27637__auto___27733))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27637__auto___27733){
return (function (seq27686){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27686));
});})(g__27637__auto___27733))
;


var g__27637__auto___27737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27637__auto___27737){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27738 = arguments.length;
var i__21451__auto___27739 = (0);
while(true){
if((i__21451__auto___27739 < len__21450__auto___27738)){
args__21457__auto__.push((arguments[i__21451__auto___27739]));

var G__27740 = (i__21451__auto___27739 + (1));
i__21451__auto___27739 = G__27740;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27737))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27737),args);
});})(g__27637__auto___27737))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27637__auto___27737){
return (function (seq27687){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27687));
});})(g__27637__auto___27737))
;


var g__27637__auto___27741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27637__auto___27741){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27742 = arguments.length;
var i__21451__auto___27743 = (0);
while(true){
if((i__21451__auto___27743 < len__21450__auto___27742)){
args__21457__auto__.push((arguments[i__21451__auto___27743]));

var G__27744 = (i__21451__auto___27743 + (1));
i__21451__auto___27743 = G__27744;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27741))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27741),args);
});})(g__27637__auto___27741))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27637__auto___27741){
return (function (seq27688){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27688));
});})(g__27637__auto___27741))
;


var g__27637__auto___27745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27637__auto___27745){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27746 = arguments.length;
var i__21451__auto___27747 = (0);
while(true){
if((i__21451__auto___27747 < len__21450__auto___27746)){
args__21457__auto__.push((arguments[i__21451__auto___27747]));

var G__27748 = (i__21451__auto___27747 + (1));
i__21451__auto___27747 = G__27748;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27745))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27745),args);
});})(g__27637__auto___27745))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27637__auto___27745){
return (function (seq27689){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27689));
});})(g__27637__auto___27745))
;


var g__27637__auto___27749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27637__auto___27749){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27750 = arguments.length;
var i__21451__auto___27751 = (0);
while(true){
if((i__21451__auto___27751 < len__21450__auto___27750)){
args__21457__auto__.push((arguments[i__21451__auto___27751]));

var G__27752 = (i__21451__auto___27751 + (1));
i__21451__auto___27751 = G__27752;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27749))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27749),args);
});})(g__27637__auto___27749))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27637__auto___27749){
return (function (seq27690){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27690));
});})(g__27637__auto___27749))
;


var g__27637__auto___27753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27637__auto___27753){
return (function cljs$spec$impl$gen$return(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27754 = arguments.length;
var i__21451__auto___27755 = (0);
while(true){
if((i__21451__auto___27755 < len__21450__auto___27754)){
args__21457__auto__.push((arguments[i__21451__auto___27755]));

var G__27756 = (i__21451__auto___27755 + (1));
i__21451__auto___27755 = G__27756;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27753))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27753),args);
});})(g__27637__auto___27753))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27637__auto___27753){
return (function (seq27691){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27691));
});})(g__27637__auto___27753))
;


var g__27637__auto___27757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27637__auto___27757){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27758 = arguments.length;
var i__21451__auto___27759 = (0);
while(true){
if((i__21451__auto___27759 < len__21450__auto___27758)){
args__21457__auto__.push((arguments[i__21451__auto___27759]));

var G__27760 = (i__21451__auto___27759 + (1));
i__21451__auto___27759 = G__27760;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27637__auto___27757))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27637__auto___27757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27637__auto___27757),args);
});})(g__27637__auto___27757))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27637__auto___27757){
return (function (seq27692){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27692));
});})(g__27637__auto___27757))
;

var g__27650__auto___27782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27650__auto___27782){
return (function cljs$spec$impl$gen$any(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27783 = arguments.length;
var i__21451__auto___27784 = (0);
while(true){
if((i__21451__auto___27784 < len__21450__auto___27783)){
args__21457__auto__.push((arguments[i__21451__auto___27784]));

var G__27785 = (i__21451__auto___27784 + (1));
i__21451__auto___27784 = G__27785;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27782))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27782){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27782);
});})(g__27650__auto___27782))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27650__auto___27782){
return (function (seq27761){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27761));
});})(g__27650__auto___27782))
;


var g__27650__auto___27786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27650__auto___27786){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27787 = arguments.length;
var i__21451__auto___27788 = (0);
while(true){
if((i__21451__auto___27788 < len__21450__auto___27787)){
args__21457__auto__.push((arguments[i__21451__auto___27788]));

var G__27789 = (i__21451__auto___27788 + (1));
i__21451__auto___27788 = G__27789;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27786))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27786){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27786);
});})(g__27650__auto___27786))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27650__auto___27786){
return (function (seq27762){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27762));
});})(g__27650__auto___27786))
;


var g__27650__auto___27790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27650__auto___27790){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27791 = arguments.length;
var i__21451__auto___27792 = (0);
while(true){
if((i__21451__auto___27792 < len__21450__auto___27791)){
args__21457__auto__.push((arguments[i__21451__auto___27792]));

var G__27793 = (i__21451__auto___27792 + (1));
i__21451__auto___27792 = G__27793;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27790))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27790){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27790);
});})(g__27650__auto___27790))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27650__auto___27790){
return (function (seq27763){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27763));
});})(g__27650__auto___27790))
;


var g__27650__auto___27794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27650__auto___27794){
return (function cljs$spec$impl$gen$char(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27795 = arguments.length;
var i__21451__auto___27796 = (0);
while(true){
if((i__21451__auto___27796 < len__21450__auto___27795)){
args__21457__auto__.push((arguments[i__21451__auto___27796]));

var G__27797 = (i__21451__auto___27796 + (1));
i__21451__auto___27796 = G__27797;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27794))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27794){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27794);
});})(g__27650__auto___27794))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27650__auto___27794){
return (function (seq27764){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27764));
});})(g__27650__auto___27794))
;


var g__27650__auto___27798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27650__auto___27798){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27799 = arguments.length;
var i__21451__auto___27800 = (0);
while(true){
if((i__21451__auto___27800 < len__21450__auto___27799)){
args__21457__auto__.push((arguments[i__21451__auto___27800]));

var G__27801 = (i__21451__auto___27800 + (1));
i__21451__auto___27800 = G__27801;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27798))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27798){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27798);
});})(g__27650__auto___27798))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27650__auto___27798){
return (function (seq27765){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27765));
});})(g__27650__auto___27798))
;


var g__27650__auto___27802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27650__auto___27802){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27803 = arguments.length;
var i__21451__auto___27804 = (0);
while(true){
if((i__21451__auto___27804 < len__21450__auto___27803)){
args__21457__auto__.push((arguments[i__21451__auto___27804]));

var G__27805 = (i__21451__auto___27804 + (1));
i__21451__auto___27804 = G__27805;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27802))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27802){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27802);
});})(g__27650__auto___27802))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27650__auto___27802){
return (function (seq27766){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27766));
});})(g__27650__auto___27802))
;


var g__27650__auto___27806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27650__auto___27806){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27807 = arguments.length;
var i__21451__auto___27808 = (0);
while(true){
if((i__21451__auto___27808 < len__21450__auto___27807)){
args__21457__auto__.push((arguments[i__21451__auto___27808]));

var G__27809 = (i__21451__auto___27808 + (1));
i__21451__auto___27808 = G__27809;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27806))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27806){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27806);
});})(g__27650__auto___27806))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27650__auto___27806){
return (function (seq27767){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27767));
});})(g__27650__auto___27806))
;


var g__27650__auto___27810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27650__auto___27810){
return (function cljs$spec$impl$gen$double(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27811 = arguments.length;
var i__21451__auto___27812 = (0);
while(true){
if((i__21451__auto___27812 < len__21450__auto___27811)){
args__21457__auto__.push((arguments[i__21451__auto___27812]));

var G__27813 = (i__21451__auto___27812 + (1));
i__21451__auto___27812 = G__27813;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27810))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27810){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27810);
});})(g__27650__auto___27810))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27650__auto___27810){
return (function (seq27768){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27768));
});})(g__27650__auto___27810))
;


var g__27650__auto___27814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27650__auto___27814){
return (function cljs$spec$impl$gen$int(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27815 = arguments.length;
var i__21451__auto___27816 = (0);
while(true){
if((i__21451__auto___27816 < len__21450__auto___27815)){
args__21457__auto__.push((arguments[i__21451__auto___27816]));

var G__27817 = (i__21451__auto___27816 + (1));
i__21451__auto___27816 = G__27817;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27814))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27814){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27814);
});})(g__27650__auto___27814))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27650__auto___27814){
return (function (seq27769){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27769));
});})(g__27650__auto___27814))
;


var g__27650__auto___27818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27650__auto___27818){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27819 = arguments.length;
var i__21451__auto___27820 = (0);
while(true){
if((i__21451__auto___27820 < len__21450__auto___27819)){
args__21457__auto__.push((arguments[i__21451__auto___27820]));

var G__27821 = (i__21451__auto___27820 + (1));
i__21451__auto___27820 = G__27821;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27818))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27818){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27818);
});})(g__27650__auto___27818))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27650__auto___27818){
return (function (seq27770){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27770));
});})(g__27650__auto___27818))
;


var g__27650__auto___27822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27650__auto___27822){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27823 = arguments.length;
var i__21451__auto___27824 = (0);
while(true){
if((i__21451__auto___27824 < len__21450__auto___27823)){
args__21457__auto__.push((arguments[i__21451__auto___27824]));

var G__27825 = (i__21451__auto___27824 + (1));
i__21451__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27822))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27822){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27822);
});})(g__27650__auto___27822))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27650__auto___27822){
return (function (seq27771){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27771));
});})(g__27650__auto___27822))
;


var g__27650__auto___27826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27650__auto___27826){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27827 = arguments.length;
var i__21451__auto___27828 = (0);
while(true){
if((i__21451__auto___27828 < len__21450__auto___27827)){
args__21457__auto__.push((arguments[i__21451__auto___27828]));

var G__27829 = (i__21451__auto___27828 + (1));
i__21451__auto___27828 = G__27829;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27826))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27826){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27826);
});})(g__27650__auto___27826))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27650__auto___27826){
return (function (seq27772){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27772));
});})(g__27650__auto___27826))
;


var g__27650__auto___27830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27650__auto___27830){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27831 = arguments.length;
var i__21451__auto___27832 = (0);
while(true){
if((i__21451__auto___27832 < len__21450__auto___27831)){
args__21457__auto__.push((arguments[i__21451__auto___27832]));

var G__27833 = (i__21451__auto___27832 + (1));
i__21451__auto___27832 = G__27833;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27830))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27830){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27830);
});})(g__27650__auto___27830))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27650__auto___27830){
return (function (seq27773){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27773));
});})(g__27650__auto___27830))
;


var g__27650__auto___27834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27650__auto___27834){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27835 = arguments.length;
var i__21451__auto___27836 = (0);
while(true){
if((i__21451__auto___27836 < len__21450__auto___27835)){
args__21457__auto__.push((arguments[i__21451__auto___27836]));

var G__27837 = (i__21451__auto___27836 + (1));
i__21451__auto___27836 = G__27837;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27834))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27834){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27834);
});})(g__27650__auto___27834))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27650__auto___27834){
return (function (seq27774){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27774));
});})(g__27650__auto___27834))
;


var g__27650__auto___27838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27650__auto___27838){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27839 = arguments.length;
var i__21451__auto___27840 = (0);
while(true){
if((i__21451__auto___27840 < len__21450__auto___27839)){
args__21457__auto__.push((arguments[i__21451__auto___27840]));

var G__27841 = (i__21451__auto___27840 + (1));
i__21451__auto___27840 = G__27841;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27838))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27838){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27838);
});})(g__27650__auto___27838))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27650__auto___27838){
return (function (seq27775){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27775));
});})(g__27650__auto___27838))
;


var g__27650__auto___27842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27650__auto___27842){
return (function cljs$spec$impl$gen$string(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27843 = arguments.length;
var i__21451__auto___27844 = (0);
while(true){
if((i__21451__auto___27844 < len__21450__auto___27843)){
args__21457__auto__.push((arguments[i__21451__auto___27844]));

var G__27845 = (i__21451__auto___27844 + (1));
i__21451__auto___27844 = G__27845;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27842))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27842){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27842);
});})(g__27650__auto___27842))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27650__auto___27842){
return (function (seq27776){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27776));
});})(g__27650__auto___27842))
;


var g__27650__auto___27846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27650__auto___27846){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27847 = arguments.length;
var i__21451__auto___27848 = (0);
while(true){
if((i__21451__auto___27848 < len__21450__auto___27847)){
args__21457__auto__.push((arguments[i__21451__auto___27848]));

var G__27849 = (i__21451__auto___27848 + (1));
i__21451__auto___27848 = G__27849;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27846))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27846){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27846);
});})(g__27650__auto___27846))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27650__auto___27846){
return (function (seq27777){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27777));
});})(g__27650__auto___27846))
;


var g__27650__auto___27850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27650__auto___27850){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27851 = arguments.length;
var i__21451__auto___27852 = (0);
while(true){
if((i__21451__auto___27852 < len__21450__auto___27851)){
args__21457__auto__.push((arguments[i__21451__auto___27852]));

var G__27853 = (i__21451__auto___27852 + (1));
i__21451__auto___27852 = G__27853;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27850))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27850){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27850);
});})(g__27650__auto___27850))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27650__auto___27850){
return (function (seq27778){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27778));
});})(g__27650__auto___27850))
;


var g__27650__auto___27854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27650__auto___27854){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27855 = arguments.length;
var i__21451__auto___27856 = (0);
while(true){
if((i__21451__auto___27856 < len__21450__auto___27855)){
args__21457__auto__.push((arguments[i__21451__auto___27856]));

var G__27857 = (i__21451__auto___27856 + (1));
i__21451__auto___27856 = G__27857;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27854))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27854){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27854);
});})(g__27650__auto___27854))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27650__auto___27854){
return (function (seq27779){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27779));
});})(g__27650__auto___27854))
;


var g__27650__auto___27858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27650__auto___27858){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27859 = arguments.length;
var i__21451__auto___27860 = (0);
while(true){
if((i__21451__auto___27860 < len__21450__auto___27859)){
args__21457__auto__.push((arguments[i__21451__auto___27860]));

var G__27861 = (i__21451__auto___27860 + (1));
i__21451__auto___27860 = G__27861;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27858))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27858){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27858);
});})(g__27650__auto___27858))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27650__auto___27858){
return (function (seq27780){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27780));
});})(g__27650__auto___27858))
;


var g__27650__auto___27862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27650__auto___27862){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27863 = arguments.length;
var i__21451__auto___27864 = (0);
while(true){
if((i__21451__auto___27864 < len__21450__auto___27863)){
args__21457__auto__.push((arguments[i__21451__auto___27864]));

var G__27865 = (i__21451__auto___27864 + (1));
i__21451__auto___27864 = G__27865;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});})(g__27650__auto___27862))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27650__auto___27862){
return (function (args){
return cljs.core.deref.call(null,g__27650__auto___27862);
});})(g__27650__auto___27862))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27650__auto___27862){
return (function (seq27781){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27781));
});})(g__27650__auto___27862))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21457__auto__ = [];
var len__21450__auto___27868 = arguments.length;
var i__21451__auto___27869 = (0);
while(true){
if((i__21451__auto___27869 < len__21450__auto___27868)){
args__21457__auto__.push((arguments[i__21451__auto___27869]));

var G__27870 = (i__21451__auto___27869 + (1));
i__21451__auto___27869 = G__27870;
continue;
} else {
}
break;
}

var argseq__21458__auto__ = ((((0) < args__21457__auto__.length))?(new cljs.core.IndexedSeq(args__21457__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21458__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__27866_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27866_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27867){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27867));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__27871_SHARP_){
return (new Date(p1__27871_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map