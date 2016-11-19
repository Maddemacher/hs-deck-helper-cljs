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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"match-end","match-end",-1347942185),(function (db,p__30607){
var vec__30608 = p__30607;
var _ = cljs.core.nth.call(null,vec__30608,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30608,(1),null);
common.logger.info.call(null,"Match end event",db);

return cljs.core.assoc.call(null,hs_deck_helper_cljs_front.db.app_db,new cljs.core.Keyword(null,"old-matches","old-matches",-1690600604),cljs.core.conj.call(null,new cljs.core.Keyword(null,"old-matches","old-matches",-1690600604).cljs$core$IFn$_invoke$arity$1(db),hs_deck_helper_cljs_front.events.get_current_match.call(null,db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),(function (db,p__30611){
var vec__30612 = p__30611;
var _ = cljs.core.nth.call(null,vec__30612,(0),null);
var card = cljs.core.nth.call(null,vec__30612,(1),null);
common.logger.info.call(null,"Friendly play event",db,card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),(function (db,p__30615){
var vec__30616 = p__30615;
var _ = cljs.core.nth.call(null,vec__30616,(0),null);
var card = cljs.core.nth.call(null,vec__30616,(1),null);
common.logger.info.call(null,"Friendly draw event",db,card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478),(function (db,p__30619){
var vec__30620 = p__30619;
var _ = cljs.core.nth.call(null,vec__30620,(0),null);
var card = cljs.core.nth.call(null,vec__30620,(1),null);
common.logger.info.call(null,"Opposing play event",db,card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478),cljs.core.conj.call(null,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478).cljs$core$IFn$_invoke$arity$1(db),card));
}));

//# sourceMappingURL=events.js.map