// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('common.logger');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-friendly-play","get-friendly-play",-1537468235),(function (db,_){
common.logger.info.call(null,"Getting friently play");

return new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-friendly-draw","get-friendly-draw",-1428528913),(function (db,_){
common.logger.info.call(null,"Getting friendly draw");

return new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-opposing-play","get-opposing-play",938373685),(function (db,_){
common.logger.info.call(null,"Getting opposing play");

return new cljs.core.Keyword(null,"opposing-play","opposing-play",-2057160478).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-old-matches","get-old-matches",-117448356),(function (db,_){
common.logger.info.call(null,"Getting old matches",db);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"matches","matches",635497998),new cljs.core.Keyword(null,"old-matches","old-matches",-1690600604).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"wins","wins",1850756412),new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"loses","loses",-1234787781),new cljs.core.Keyword(null,"loses","loses",-1234787781).cljs$core$IFn$_invoke$arity$1(db)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-current-player","get-current-player",-1282251371),(function (db,_){
common.logger.info.call(null,"Getting current player");

return new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map