// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.core');
goog.require('cljs.core');
goog.require('hs_deck_helper_cljs_front.subs');
goog.require('hs_deck_helper_cljs_front.events');
goog.require('common.logger');
goog.require('reagent.core');
goog.require('hs_deck_helper_cljs_front.ipc');
goog.require('re_frame.core');
hs_deck_helper_cljs_front.core.root_component = (function hs_deck_helper_cljs_front$core$root_component(){
var friendly_played = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-friendly-play","get-friendly-play",-1537468235)], null));
var friendly_drawn = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-friendly-draw","get-friendly-draw",-1428528913)], null));
var opposing_played = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-opposing-play","get-opposing-play",938373685)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12","div.col-xs-12",1498064650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Best HS Deckhelper EU"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Friendly Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27634__auto__ = ((function (friendly_played,friendly_drawn,opposing_played){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30402(s__30403){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played){
return (function (){
var s__30403__$1 = s__30403;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30403__$1);
if(temp__6503__auto__){
var s__30403__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30403__$2)){
var c__27632__auto__ = cljs.core.chunk_first.call(null,s__30403__$2);
var size__27633__auto__ = cljs.core.count.call(null,c__27632__auto__);
var b__30405 = cljs.core.chunk_buffer.call(null,size__27633__auto__);
if((function (){var i__30404 = (0);
while(true){
if((i__30404 < size__27633__auto__)){
var card = cljs.core._nth.call(null,c__27632__auto__,i__30404);
cljs.core.chunk_append.call(null,b__30405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null));

var G__30414 = (i__30404 + (1));
i__30404 = G__30414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30405),hs_deck_helper_cljs_front$core$root_component_$_iter__30402.call(null,cljs.core.chunk_rest.call(null,s__30403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30405),null);
}
} else {
var card = cljs.core.first.call(null,s__30403__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30402.call(null,cljs.core.rest.call(null,s__30403__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played))
;
return iter__27634__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_played)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Friendly Drawn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27634__auto__ = ((function (friendly_played,friendly_drawn,opposing_played){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30406(s__30407){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played){
return (function (){
var s__30407__$1 = s__30407;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30407__$1);
if(temp__6503__auto__){
var s__30407__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30407__$2)){
var c__27632__auto__ = cljs.core.chunk_first.call(null,s__30407__$2);
var size__27633__auto__ = cljs.core.count.call(null,c__27632__auto__);
var b__30409 = cljs.core.chunk_buffer.call(null,size__27633__auto__);
if((function (){var i__30408 = (0);
while(true){
if((i__30408 < size__27633__auto__)){
var card = cljs.core._nth.call(null,c__27632__auto__,i__30408);
cljs.core.chunk_append.call(null,b__30409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name)].join('')], null));

var G__30415 = (i__30408 + (1));
i__30408 = G__30415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30409),hs_deck_helper_cljs_front$core$root_component_$_iter__30406.call(null,cljs.core.chunk_rest.call(null,s__30407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30409),null);
}
} else {
var card = cljs.core.first.call(null,s__30407__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30406.call(null,cljs.core.rest.call(null,s__30407__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played))
;
return iter__27634__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_drawn)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Opposing Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27634__auto__ = ((function (friendly_played,friendly_drawn,opposing_played){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30410(s__30411){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played){
return (function (){
var s__30411__$1 = s__30411;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30411__$1);
if(temp__6503__auto__){
var s__30411__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30411__$2)){
var c__27632__auto__ = cljs.core.chunk_first.call(null,s__30411__$2);
var size__27633__auto__ = cljs.core.count.call(null,c__27632__auto__);
var b__30413 = cljs.core.chunk_buffer.call(null,size__27633__auto__);
if((function (){var i__30412 = (0);
while(true){
if((i__30412 < size__27633__auto__)){
var card = cljs.core._nth.call(null,c__27632__auto__,i__30412);
cljs.core.chunk_append.call(null,b__30413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null));

var G__30416 = (i__30412 + (1));
i__30412 = G__30416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30413),hs_deck_helper_cljs_front$core$root_component_$_iter__30410.call(null,cljs.core.chunk_rest.call(null,s__30411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30413),null);
}
} else {
var card = cljs.core.first.call(null,s__30411__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30410.call(null,cljs.core.rest.call(null,s__30411__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played))
;
return iter__27634__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,opposing_played)));
})()], null)], null)], null);
});
hs_deck_helper_cljs_front.core.mount_root = (function hs_deck_helper_cljs_front$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hs_deck_helper_cljs_front.core.root_component], null),document.getElementById("app"));
});
hs_deck_helper_cljs_front.core.init_BANG_ = (function hs_deck_helper_cljs_front$core$init_BANG_(setting){
common.logger.info.call(null,"Initialization of core");

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

hs_deck_helper_cljs_front.ipc.setup_listeners.call(null);

return hs_deck_helper_cljs_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map