// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.core');
goog.require('cljs.core');
goog.require('hs_deck_helper_cljs_front.subs');
goog.require('hs_deck_helper_cljs_front.events');
goog.require('hs_deck_helper_cljs_front.api');
goog.require('reagent.core');
goog.require('hs_deck_helper_cljs_front.ipc');
goog.require('re_frame.core');
hs_deck_helper_cljs_front.core.root_component = (function hs_deck_helper_cljs_front$core$root_component(){
var beer_count = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-beer-count","get-beer-count",-615432586)], null));
var friendly_played = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-friendly-play","get-friendly-play",-1537468235)], null));
console.log("op ",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_played)));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str("Current beer count "),cljs.core.str(cljs.core.deref.call(null,beer_count))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27633__auto__ = ((function (beer_count,friendly_played){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30221(s__30222){
return (new cljs.core.LazySeq(null,((function (beer_count,friendly_played){
return (function (){
var s__30222__$1 = s__30222;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30222__$1);
if(temp__6503__auto__){
var s__30222__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30222__$2)){
var c__27631__auto__ = cljs.core.chunk_first.call(null,s__30222__$2);
var size__27632__auto__ = cljs.core.count.call(null,c__27631__auto__);
var b__30224 = cljs.core.chunk_buffer.call(null,size__27632__auto__);
if((function (){var i__30223 = (0);
while(true){
if((i__30223 < size__27632__auto__)){
var card = cljs.core._nth.call(null,c__27631__auto__,i__30223);
cljs.core.chunk_append.call(null,b__30224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),card.name], null));

var G__30225 = (i__30223 + (1));
i__30223 = G__30225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30224),hs_deck_helper_cljs_front$core$root_component_$_iter__30221.call(null,cljs.core.chunk_rest.call(null,s__30222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30224),null);
}
} else {
var card = cljs.core.first.call(null,s__30222__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),card.name], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30221.call(null,cljs.core.rest.call(null,s__30222__$2)));
}
} else {
return null;
}
break;
}
});})(beer_count,friendly_played))
,null,null));
});})(beer_count,friendly_played))
;
return iter__27633__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_played)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (beer_count,friendly_played){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-beer","open-beer",-702056271)], null));
});})(beer_count,friendly_played))
], null),"Click me"], null)], null);
});
hs_deck_helper_cljs_front.core.mount_root = (function hs_deck_helper_cljs_front$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hs_deck_helper_cljs_front.core.root_component], null),document.getElementById("app"));
});
hs_deck_helper_cljs_front.core.init_BANG_ = (function hs_deck_helper_cljs_front$core$init_BANG_(setting){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

hs_deck_helper_cljs_front.ipc.setup_listeners.call(null);

return hs_deck_helper_cljs_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map