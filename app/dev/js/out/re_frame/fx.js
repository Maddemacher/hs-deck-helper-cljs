// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__28655){
var vec__28656 = p__28655;
var k = cljs.core.nth.call(null,vec__28656,(0),null);
var value = cljs.core.nth.call(null,vec__28656,(1),null);
var temp__6501__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__6501__auto__)){
var effect_fn = temp__6501__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__28659 = cljs.core.seq.call(null,value);
var chunk__28660 = null;
var count__28661 = (0);
var i__28662 = (0);
while(true){
if((i__28662 < count__28661)){
var map__28663 = cljs.core._nth.call(null,chunk__28660,i__28662);
var map__28663__$1 = ((((!((map__28663 == null)))?((((map__28663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);
var effect = map__28663__$1;
var ms = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28659,chunk__28660,count__28661,i__28662,map__28663,map__28663__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28659,chunk__28660,count__28661,i__28662,map__28663,map__28663__$1,effect,ms,dispatch))
,ms);
}

var G__28667 = seq__28659;
var G__28668 = chunk__28660;
var G__28669 = count__28661;
var G__28670 = (i__28662 + (1));
seq__28659 = G__28667;
chunk__28660 = G__28668;
count__28661 = G__28669;
i__28662 = G__28670;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__28659);
if(temp__6503__auto__){
var seq__28659__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28659__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__28659__$1);
var G__28671 = cljs.core.chunk_rest.call(null,seq__28659__$1);
var G__28672 = c__27682__auto__;
var G__28673 = cljs.core.count.call(null,c__27682__auto__);
var G__28674 = (0);
seq__28659 = G__28671;
chunk__28660 = G__28672;
count__28661 = G__28673;
i__28662 = G__28674;
continue;
} else {
var map__28665 = cljs.core.first.call(null,seq__28659__$1);
var map__28665__$1 = ((((!((map__28665 == null)))?((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var effect = map__28665__$1;
var ms = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__28659,chunk__28660,count__28661,i__28662,map__28665,map__28665__$1,effect,ms,dispatch,seq__28659__$1,temp__6503__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__28659,chunk__28660,count__28661,i__28662,map__28665,map__28665__$1,effect,ms,dispatch,seq__28659__$1,temp__6503__auto__))
,ms);
}

var G__28675 = cljs.core.next.call(null,seq__28659__$1);
var G__28676 = null;
var G__28677 = (0);
var G__28678 = (0);
seq__28659 = G__28675;
chunk__28660 = G__28676;
count__28661 = G__28677;
i__28662 = G__28678;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__28679 = cljs.core.seq.call(null,value);
var chunk__28680 = null;
var count__28681 = (0);
var i__28682 = (0);
while(true){
if((i__28682 < count__28681)){
var event = cljs.core._nth.call(null,chunk__28680,i__28682);
re_frame.router.dispatch.call(null,event);

var G__28683 = seq__28679;
var G__28684 = chunk__28680;
var G__28685 = count__28681;
var G__28686 = (i__28682 + (1));
seq__28679 = G__28683;
chunk__28680 = G__28684;
count__28681 = G__28685;
i__28682 = G__28686;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__28679);
if(temp__6503__auto__){
var seq__28679__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28679__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__28679__$1);
var G__28687 = cljs.core.chunk_rest.call(null,seq__28679__$1);
var G__28688 = c__27682__auto__;
var G__28689 = cljs.core.count.call(null,c__27682__auto__);
var G__28690 = (0);
seq__28679 = G__28687;
chunk__28680 = G__28688;
count__28681 = G__28689;
i__28682 = G__28690;
continue;
} else {
var event = cljs.core.first.call(null,seq__28679__$1);
re_frame.router.dispatch.call(null,event);

var G__28691 = cljs.core.next.call(null,seq__28679__$1);
var G__28692 = null;
var G__28693 = (0);
var G__28694 = (0);
seq__28679 = G__28691;
chunk__28680 = G__28692;
count__28681 = G__28693;
i__28682 = G__28694;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map