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
var current_player = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-current-player","get-current-player",-1282251371)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12","div.col-xs-12",1498064650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Best HS Deckhelper EU"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str("Matches played "),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,old_matches)))),cljs.core.str(" Wins: "),cljs.core.str(new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,old_matches))),cljs.core.str(" Loses: "),cljs.core.str(new cljs.core.Keyword(null,"loses","loses",-1234787781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,old_matches)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str("Current player: "),cljs.core.str(cljs.core.deref.call(null,current_player))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Friendly Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27633__auto__ = ((function (friendly_played,friendly_drawn,opposing_played,old_matches,current_player){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30236(s__30237){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played,old_matches,current_player){
return (function (){
var s__30237__$1 = s__30237;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30237__$1);
if(temp__6503__auto__){
var s__30237__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30237__$2)){
var c__27631__auto__ = cljs.core.chunk_first.call(null,s__30237__$2);
var size__27632__auto__ = cljs.core.count.call(null,c__27631__auto__);
var b__30239 = cljs.core.chunk_buffer.call(null,size__27632__auto__);
if((function (){var i__30238 = (0);
while(true){
if((i__30238 < size__27632__auto__)){
var card = cljs.core._nth.call(null,c__27631__auto__,i__30238);
cljs.core.chunk_append.call(null,b__30239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null));

var G__30248 = (i__30238 + (1));
i__30238 = G__30248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30239),hs_deck_helper_cljs_front$core$root_component_$_iter__30236.call(null,cljs.core.chunk_rest.call(null,s__30237__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30239),null);
}
} else {
var card = cljs.core.first.call(null,s__30237__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30236.call(null,cljs.core.rest.call(null,s__30237__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played,old_matches,current_player))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played,old_matches,current_player))
;
return iter__27633__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_played)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Friendly Drawn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27633__auto__ = ((function (friendly_played,friendly_drawn,opposing_played,old_matches,current_player){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30240(s__30241){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played,old_matches,current_player){
return (function (){
var s__30241__$1 = s__30241;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30241__$1);
if(temp__6503__auto__){
var s__30241__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30241__$2)){
var c__27631__auto__ = cljs.core.chunk_first.call(null,s__30241__$2);
var size__27632__auto__ = cljs.core.count.call(null,c__27631__auto__);
var b__30243 = cljs.core.chunk_buffer.call(null,size__27632__auto__);
if((function (){var i__30242 = (0);
while(true){
if((i__30242 < size__27632__auto__)){
var card = cljs.core._nth.call(null,c__27631__auto__,i__30242);
cljs.core.chunk_append.call(null,b__30243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name)].join('')], null));

var G__30249 = (i__30242 + (1));
i__30242 = G__30249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30243),hs_deck_helper_cljs_front$core$root_component_$_iter__30240.call(null,cljs.core.chunk_rest.call(null,s__30241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30243),null);
}
} else {
var card = cljs.core.first.call(null,s__30241__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30240.call(null,cljs.core.rest.call(null,s__30241__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played,old_matches,current_player))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played,old_matches,current_player))
;
return iter__27633__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,friendly_drawn)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Opposing Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27633__auto__ = ((function (friendly_played,friendly_drawn,opposing_played,old_matches,current_player){
return (function hs_deck_helper_cljs_front$core$root_component_$_iter__30244(s__30245){
return (new cljs.core.LazySeq(null,((function (friendly_played,friendly_drawn,opposing_played,old_matches,current_player){
return (function (){
var s__30245__$1 = s__30245;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__30245__$1);
if(temp__6503__auto__){
var s__30245__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30245__$2)){
var c__27631__auto__ = cljs.core.chunk_first.call(null,s__30245__$2);
var size__27632__auto__ = cljs.core.count.call(null,c__27631__auto__);
var b__30247 = cljs.core.chunk_buffer.call(null,size__27632__auto__);
if((function (){var i__30246 = (0);
while(true){
if((i__30246 < size__27632__auto__)){
var card = cljs.core._nth.call(null,c__27631__auto__,i__30246);
cljs.core.chunk_append.call(null,b__30247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null));

var G__30250 = (i__30246 + (1));
i__30246 = G__30250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30247),hs_deck_helper_cljs_front$core$root_component_$_iter__30244.call(null,cljs.core.chunk_rest.call(null,s__30245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30247),null);
}
} else {
var card = cljs.core.first.call(null,s__30245__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str(card.name),cljs.core.str(card.count)].join('')], null),hs_deck_helper_cljs_front$core$root_component_$_iter__30244.call(null,cljs.core.rest.call(null,s__30245__$2)));
}
} else {
return null;
}
break;
}
});})(friendly_played,friendly_drawn,opposing_played,old_matches,current_player))
,null,null));
});})(friendly_played,friendly_drawn,opposing_played,old_matches,current_player))
;
return iter__27633__auto__.call(null,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,opposing_played)));
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