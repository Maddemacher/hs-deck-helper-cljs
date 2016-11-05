// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.reader');
goog.require('cljs.core');
goog.require('re_frame.core');
if(typeof hs_deck_helper_cljs_front.reader.watcher !== 'undefined'){
} else {
hs_deck_helper_cljs_front.reader.watcher = cljs.core.atom.call(null,null);
}
hs_deck_helper_cljs_front.reader.setup_file_watcher = (function hs_deck_helper_cljs_front$reader$setup_file_watcher(path){
if(cljs.core.some_QMARK_.call(null,cljs.core.deref.call(null,hs_deck_helper_cljs_front.reader.watcher))){
clearInterval(cljs.core.deref.call(null,hs_deck_helper_cljs_front.reader.watcher));
} else {
}

return cljs.core.reset_BANG_.call(null,hs_deck_helper_cljs_front.reader.watcher,setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-beer","open-beer",-702056271)], null));
}),(1000)));
});

//# sourceMappingURL=reader.js.map