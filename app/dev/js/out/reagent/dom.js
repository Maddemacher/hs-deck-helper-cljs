// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__26779__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__26779__auto__)){
return or__26779__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_28442 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_28442){
return (function (){
var _STAR_always_update_STAR_28443 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28443;
}});})(_STAR_always_update_STAR_28442))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28442;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args28444 = [];
var len__27958__auto___28447 = arguments.length;
var i__27959__auto___28448 = (0);
while(true){
if((i__27959__auto___28448 < len__27958__auto___28447)){
args28444.push((arguments[i__27959__auto___28448]));

var G__28449 = (i__27959__auto___28448 + (1));
i__27959__auto___28448 = G__28449;
continue;
} else {
}
break;
}

var G__28446 = args28444.length;
switch (G__28446) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28444.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__28455_28459 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__28456_28460 = null;
var count__28457_28461 = (0);
var i__28458_28462 = (0);
while(true){
if((i__28458_28462 < count__28457_28461)){
var v_28463 = cljs.core._nth.call(null,chunk__28456_28460,i__28458_28462);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28463);

var G__28464 = seq__28455_28459;
var G__28465 = chunk__28456_28460;
var G__28466 = count__28457_28461;
var G__28467 = (i__28458_28462 + (1));
seq__28455_28459 = G__28464;
chunk__28456_28460 = G__28465;
count__28457_28461 = G__28466;
i__28458_28462 = G__28467;
continue;
} else {
var temp__6503__auto___28468 = cljs.core.seq.call(null,seq__28455_28459);
if(temp__6503__auto___28468){
var seq__28455_28469__$1 = temp__6503__auto___28468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28455_28469__$1)){
var c__27682__auto___28470 = cljs.core.chunk_first.call(null,seq__28455_28469__$1);
var G__28471 = cljs.core.chunk_rest.call(null,seq__28455_28469__$1);
var G__28472 = c__27682__auto___28470;
var G__28473 = cljs.core.count.call(null,c__27682__auto___28470);
var G__28474 = (0);
seq__28455_28459 = G__28471;
chunk__28456_28460 = G__28472;
count__28457_28461 = G__28473;
i__28458_28462 = G__28474;
continue;
} else {
var v_28475 = cljs.core.first.call(null,seq__28455_28469__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28475);

var G__28476 = cljs.core.next.call(null,seq__28455_28469__$1);
var G__28477 = null;
var G__28478 = (0);
var G__28479 = (0);
seq__28455_28459 = G__28476;
chunk__28456_28460 = G__28477;
count__28457_28461 = G__28478;
i__28458_28462 = G__28479;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map