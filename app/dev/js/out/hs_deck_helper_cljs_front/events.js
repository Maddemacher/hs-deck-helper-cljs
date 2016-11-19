// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('common.logger');
goog.require('hs_deck_helper_cljs_front.db');
hs_deck_helper_cljs_front.events.get_current_match = (function hs_deck_helper_cljs_front$events$get_current_match(db){
return cljs.core.select_keys.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478)], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
common.logger.info.call(null,"Initializing db",hs_deck_helper_cljs_front.db.app_db);

return hs_deck_helper_cljs_front.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"match-end","match-end",-1347942185),(function (db,p__30198){
var vec__30199 = p__30198;
var _ = cljs.core.nth.call(null,vec__30199,(0),null);
var won = cljs.core.nth.call(null,vec__30199,(1),null);
common.logger.info.call(null,"Match end event");

var win_recorded = (cljs.core.truth_(won)?cljs.core.assoc.call(null,hs_deck_helper_cljs_front.db.app_db,new cljs.core.Keyword(null,"wins","wins",1850756412),(new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(db) + (1))):cljs.core.assoc.call(null,hs_deck_helper_cljs_front.db.app_db,new cljs.core.Keyword(null,"loses","loses",-1234787781),(new cljs.core.Keyword(null,"loses","loses",-1234787781).cljs$core$IFn$_invoke$arity$1(db) + (1))));
return cljs.core.assoc.call(null,win_recorded,new cljs.core.Keyword(null,"old-matches","old-matches",-1690600604),cljs.core.conj.call(null,new cljs.core.Keyword(null,"old-matches","old-matches",-1690600604).cljs$core$IFn$_invoke$arity$1(db),hs_deck_helper_cljs_front.events.get_current_match.call(null,db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),(function (db,p__30202){
var vec__30203 = p__30202;
var _ = cljs.core.nth.call(null,vec__30203,(0),null);
var card = cljs.core.nth.call(null,vec__30203,(1),null);
common.logger.info.call(null,"Friendly play event",card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),(function (db,p__30206){
var vec__30207 = p__30206;
var _ = cljs.core.nth.call(null,vec__30207,(0),null);
var card = cljs.core.nth.call(null,vec__30207,(1),null);
common.logger.info.call(null,"Friendly draw event",card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478),(function (db,p__30210){
var vec__30211 = p__30210;
var _ = cljs.core.nth.call(null,vec__30211,(0),null);
var card = cljs.core.nth.call(null,vec__30211,(1),null);
common.logger.info.call(null,"Opposing play event",card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478),cljs.core.conj.call(null,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153),(function (db,p__30214){
var vec__30215 = p__30214;
var _ = cljs.core.nth.call(null,vec__30215,(0),null);
var player = cljs.core.nth.call(null,vec__30215,(1),null);
common.logger.info.call(null,"current player event",player);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-player","current-player",-970625153),player);
}));

//# sourceMappingURL=events.js.map