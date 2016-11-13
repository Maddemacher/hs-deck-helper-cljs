// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('hs_deck_helper_cljs_front.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return hs_deck_helper_cljs_front.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"open-beer","open-beer",-702056271),(function (db,p__30068){
var vec__30069 = p__30068;
var _ = cljs.core.nth.call(null,vec__30069,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30069,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187),(new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),(function (db,p__30072){
var vec__30073 = p__30072;
var _ = cljs.core.nth.call(null,vec__30073,(0),null);
var card = cljs.core.nth.call(null,vec__30073,(1),null);
console.log("Friendly play event",db," ",card);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),(function (db,p__30076){
var vec__30077 = p__30076;
var _ = cljs.core.nth.call(null,vec__30077,(0),null);
var card = cljs.core.nth.call(null,vec__30077,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462),cljs.core.conj.call(null,new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462).cljs$core$IFn$_invoke$arity$1(db),card));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"opponent-play","opponent-play",-444137734),(function (db,p__30080){
var vec__30081 = p__30080;
var _ = cljs.core.nth.call(null,vec__30081,(0),null);
var card = cljs.core.nth.call(null,vec__30081,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"opponent-play","opponent-play",-444137734),cljs.core.conj.call(null,new cljs.core.Keyword(null,"opponent-play","opponent-play",-444137734).cljs$core$IFn$_invoke$arity$1(db),card));
}));

//# sourceMappingURL=events.js.map