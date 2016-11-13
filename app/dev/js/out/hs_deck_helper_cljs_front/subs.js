// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-beer-count","get-beer-count",-615432586),(function (db,_){
return new cljs.core.Keyword(null,"beer-count","beer-count",-2007132187).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-friendly-play","get-friendly-play",-1537468235),(function (db,_){
console.log("Getting friently play ",db);

return new cljs.core.Keyword(null,"friendly-play","friendly-play",-790804090).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-friendly-draw","get-friendly-draw",-1428528913),(function (db,_){
return new cljs.core.Keyword(null,"friendly-draw","friendly-draw",375101462).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-opponent-play","get-opponent-play",-602254939),(function (db,_){
return new cljs.core.Keyword(null,"opponent-play","opponent-play",-444137734).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map