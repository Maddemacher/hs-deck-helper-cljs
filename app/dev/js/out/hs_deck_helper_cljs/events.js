// Compiled by ClojureScript 1.9.198 {:elide-asserts true, :target :nodejs}
goog.provide('hs_deck_helper_cljs.events');
goog.require('cljs.core');
goog.require('hs_deck_helper_cljs.ipc');
hs_deck_helper_cljs.events.on_new_line = (function hs_deck_helper_cljs$events$on_new_line(line){
return console.log([cljs.core.str("New line: "),cljs.core.str(line)].join(''));
});

//# sourceMappingURL=events.js.map