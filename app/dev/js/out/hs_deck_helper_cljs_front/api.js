// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('hs_deck_helper_cljs_front.api');
goog.require('cljs.core');
hs_deck_helper_cljs_front.api.fs = require("fs");
hs_deck_helper_cljs_front.api.path = require("path");
hs_deck_helper_cljs_front.api.get_files = (function hs_deck_helper_cljs_front$api$get_files(folder_path){
return hs_deck_helper_cljs_front.api.fs.readdirSync(folder_path);
});
hs_deck_helper_cljs_front.api.get_full_paths = (function hs_deck_helper_cljs_front$api$get_full_paths(folder_path){
return cljs.core.map.call(null,(function (p1__30046_SHARP_){
return hs_deck_helper_cljs_front.api.path.join(folder_path,p1__30046_SHARP_);
}),hs_deck_helper_cljs_front.api.get_files.call(null,folder_path));
});
hs_deck_helper_cljs_front.api.get_file_stats = (function hs_deck_helper_cljs_front$api$get_file_stats(path){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.js__GT_clj.call(null,hs_deck_helper_cljs_front.api.fs.statSync(path))], null));
});
hs_deck_helper_cljs_front.api.read_folder_file_stats = (function hs_deck_helper_cljs_front$api$read_folder_file_stats(folder_path){
return cljs.core.map.call(null,hs_deck_helper_cljs_front.api.get_file_stats,hs_deck_helper_cljs_front.api.get_full_paths.call(null,folder_path));
});
hs_deck_helper_cljs_front.api.get_latest_logfile = (function hs_deck_helper_cljs_front$api$get_latest_logfile(folder_path){
return cljs.core.apply.call(null,cljs.core.max_key,(function (p1__30047_SHARP_){
return p1__30047_SHARP_.stats.ctime.getTime();
}),hs_deck_helper_cljs_front.api.read_folder_file_stats.call(null,folder_path));
});

//# sourceMappingURL=api.js.map