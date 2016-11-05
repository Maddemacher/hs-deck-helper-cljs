// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.core');
goog.require('cljs.core');
goog.require('hs_deck_helper_cljs_front.subs');
goog.require('hs_deck_helper_cljs_front.resources');
goog.require('hs_deck_helper_cljs_front.events');
goog.require('reagent.core');
goog.require('hs_deck_helper_cljs_front.ipc');
goog.require('hs_deck_helper_cljs_front.reader');
goog.require('re_frame.core');
hs_deck_helper_cljs_front.core.root_component = (function hs_deck_helper_cljs_front$core$root_component(){
var beer_count = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-beer-count","get-beer-count",-615432586)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str("Current beer count "),cljs.core.str(cljs.core.deref.call(null,beer_count))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("cards"),cljs.core.str(hs_deck_helper_cljs_front.resources.hs_cards)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (beer_count){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-beer","open-beer",-702056271)], null));
});})(beer_count))
], null),"Click me"], null)], null);
});
hs_deck_helper_cljs_front.core.mount_root = (function hs_deck_helper_cljs_front$core$mount_root(setting){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hs_deck_helper_cljs_front.core.root_component], null),document.getElementById("app"));
});
hs_deck_helper_cljs_front.core.init_BANG_ = (function hs_deck_helper_cljs_front$core$init_BANG_(setting){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

hs_deck_helper_cljs_front.ipc.setup_listeners.call(null);

hs_deck_helper_cljs_front.reader.setup_file_watcher.call(null,"");

return hs_deck_helper_cljs_front.core.mount_root.call(null,setting);
});

//# sourceMappingURL=core.js.map