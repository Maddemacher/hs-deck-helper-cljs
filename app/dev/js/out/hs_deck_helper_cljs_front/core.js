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
var old_matches = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-old-matches","get-old-matches",-117448356)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12","div.col-xs-12",1498064650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Best HS Deckhelper EU"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str("Matches played "),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,old_matches)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Friendly Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27634__auto__ = ((function (friendly_played,friendly_drawn,opposing_played,old_matches){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30637(s__30638){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played,old_matches){
return (function (){
var s__30638__$1 = s__30638;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30638__$1);
if(temp__6503__auto__){
var s__30638__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30638__$2)){
var c__27632__auto__ = cljs.core.chunk_first.call(null,s__30638__$2);
var size__27633__auto__ = cljs.core.count.call(null,c__27632__auto__);
var b__30640 = cljs.core.chunk_buffer.call(null,size__27633__auto__);
if((function (){var i__30639 = (0);
while(true){
if((i__30639 < size__27633__auto__)){
var card = cljs.core._nth.call(null,c__27632__auto__,i__30639);
cljs.core.chunk_append.call(null,b__30640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null));

var G__30649 = (i__30639 + (1));
i__30639 = G__30649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30640),hs_deck_helper_cljs_front$core$root_component_$_iter__30637.call(null,cljs.core.chunk_rest.call(null,s__30638__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30640),null);
}
} else {
var card = cljs.core.first.call(null,s__30638__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30637.call(null,cljs.core.rest.call(null,s__30638__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played,old_matches))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played,old_matches))
;
return iter__27634__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_played)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Friendly Drawn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27634__auto__ = ((function (friendly_played,friendly_drawn,opposing_played,old_matches){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30641(s__30642){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played,old_matches){
return (function (){
var s__30642__$1 = s__30642;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30642__$1);
if(temp__6503__auto__){
var s__30642__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30642__$2)){
var c__27632__auto__ = cljs.core.chunk_first.call(null,s__30642__$2);
var size__27633__auto__ = cljs.core.count.call(null,c__27632__auto__);
var b__30644 = cljs.core.chunk_buffer.call(null,size__27633__auto__);
if((function (){var i__30643 = (0);
while(true){
if((i__30643 < size__27633__auto__)){
var card = cljs.core._nth.call(null,c__27632__auto__,i__30643);
cljs.core.chunk_append.call(null,b__30644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name)].join('')], null));

var G__30650 = (i__30643 + (1));
i__30643 = G__30650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30644),hs_deck_helper_cljs_front$core$root_component_$_iter__30641.call(null,cljs.core.chunk_rest.call(null,s__30642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30644),null);
}
} else {
var card = cljs.core.first.call(null,s__30642__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30641.call(null,cljs.core.rest.call(null,s__30642__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played,old_matches))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played,old_matches))
;
return iter__27634__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_drawn)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Opposing Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27634__auto__ = ((function (friendly_played,friendly_drawn,opposing_played,old_matches){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30645(s__30646){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played,old_matches){
return (function (){
var s__30646__$1 = s__30646;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30646__$1);
if(temp__6503__auto__){
var s__30646__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30646__$2)){
var c__27632__auto__ = cljs.core.chunk_first.call(null,s__30646__$2);
var size__27633__auto__ = cljs.core.count.call(null,c__27632__auto__);
var b__30648 = cljs.core.chunk_buffer.call(null,size__27633__auto__);
if((function (){var i__30647 = (0);
while(true){
if((i__30647 < size__27633__auto__)){
var card = cljs.core._nth.call(null,c__27632__auto__,i__30647);
cljs.core.chunk_append.call(null,b__30648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null));

var G__30651 = (i__30647 + (1));
i__30647 = G__30651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30648),hs_deck_helper_cljs_front$core$root_component_$_iter__30645.call(null,cljs.core.chunk_rest.call(null,s__30646__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30648),null);
}
} else {
var card = cljs.core.first.call(null,s__30646__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30645.call(null,cljs.core.rest.call(null,s__30646__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played,old_matches))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played,old_matches))
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