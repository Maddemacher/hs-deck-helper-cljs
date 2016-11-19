// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('common.logger');
goog.require('hs_deck_helper_cljs_front.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
common.logger.info.call(null,"Initializing db",hs_deck_helper_cljs_front.db.app_db);

return hs_deck_helper_cljs_front.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),(function (db,p__30171){
var vec__30172 = p__30171;
var _ = cljs.core.nth.call(null,vec__30172,(0),null);
var card = cljs.core.nth.call(null,vec__30172,(1),null);
common.logger.info.call(null,"Friendly play event",db,card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),(function (db,p__30175){
var vec__30176 = p__30175;
var _ = cljs.core.nth.call(null,vec__30176,(0),null);
var card = cljs.core.nth.call(null,vec__30176,(1),null);
common.logger.info.call(null,"Friendly draw event",db,card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478),(function (db,p__30179){
var vec__30180 = p__30179;
var _ = cljs.core.nth.call(null,vec__30180,(0),null);
var card = cljs.core.nth.call(null,vec__30180,(1),null);
common.logger.info.call(null,"Opposing play event",db,card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478),cljs.core.conj.call(null,new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478).cljs$core$IFn$_invoke$arity$1(db),card));
}));

//# sourceMappingURL=events.js.map