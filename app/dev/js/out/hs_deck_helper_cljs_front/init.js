// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.init');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('hs_deck_helper_cljs_front.core');
goog.require('hs_deck_helper_cljs_front.conf');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),new cljs.core.Symbol(null,"start-descjop!","start-descjop!",-2023242547,null));
hs_deck_helper_cljs_front.init.start_descjop_BANG_ = (function hs_deck_helper_cljs_front$init$start_descjop_BANG_(){
return hs_deck_helper_cljs_front.core.init_BANG_.call(null,hs_deck_helper_cljs_front.conf.setting);
});
hs_deck_helper_cljs_front.init.start_descjop_BANG_.call(null);

//# sourceMappingURL=init.js.map