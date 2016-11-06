// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('hs_deck_helper_cljs_front.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return hs_deck_helper_cljs_front.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"open-beer","open-beer",-702056271),(function (db,p__38692){
var vec__38693 = p__38692;
var _ = cljs.core.nth.call(null,vec__38693,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38693,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187),(new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));

//# sourceMappingURL=events.js.map