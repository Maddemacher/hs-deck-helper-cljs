// Compiled by ClojureScript 1.7.228 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('hs_deck_helper_cljs.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return hs_deck_helper_cljs.db.app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"open-beer","open-beer",-702056271),(function (db,p__20912){
var vec__20913 = p__20912;
var _ = cljs.core.nth.call(null,vec__20913,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20913,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187),(new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));

//# sourceMappingURL=events.js.map