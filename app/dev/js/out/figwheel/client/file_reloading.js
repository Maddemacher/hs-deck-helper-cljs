// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26779__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26779__auto__){
return or__26779__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26779__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26779__auto__)){
return or__26779__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30174_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30174_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30179 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30180 = null;
var count__30181 = (0);
var i__30182 = (0);
while(true){
if((i__30182 < count__30181)){
var n = cljs.core._nth.call(null,chunk__30180,i__30182);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30183 = seq__30179;
var G__30184 = chunk__30180;
var G__30185 = count__30181;
var G__30186 = (i__30182 + (1));
seq__30179 = G__30183;
chunk__30180 = G__30184;
count__30181 = G__30185;
i__30182 = G__30186;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__30179);
if(temp__6503__auto__){
var seq__30179__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30179__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__30179__$1);
var G__30187 = cljs.core.chunk_rest.call(null,seq__30179__$1);
var G__30188 = c__27682__auto__;
var G__30189 = cljs.core.count.call(null,c__27682__auto__);
var G__30190 = (0);
seq__30179 = G__30187;
chunk__30180 = G__30188;
count__30181 = G__30189;
i__30182 = G__30190;
continue;
} else {
var n = cljs.core.first.call(null,seq__30179__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30191 = cljs.core.next.call(null,seq__30179__$1);
var G__30192 = null;
var G__30193 = (0);
var G__30194 = (0);
seq__30179 = G__30191;
chunk__30180 = G__30192;
count__30181 = G__30193;
i__30182 = G__30194;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30245_30256 = cljs.core.seq.call(null,deps);
var chunk__30246_30257 = null;
var count__30247_30258 = (0);
var i__30248_30259 = (0);
while(true){
if((i__30248_30259 < count__30247_30258)){
var dep_30260 = cljs.core._nth.call(null,chunk__30246_30257,i__30248_30259);
topo_sort_helper_STAR_.call(null,dep_30260,(depth + (1)),state);

var G__30261 = seq__30245_30256;
var G__30262 = chunk__30246_30257;
var G__30263 = count__30247_30258;
var G__30264 = (i__30248_30259 + (1));
seq__30245_30256 = G__30261;
chunk__30246_30257 = G__30262;
count__30247_30258 = G__30263;
i__30248_30259 = G__30264;
continue;
} else {
var temp__6503__auto___30265 = cljs.core.seq.call(null,seq__30245_30256);
if(temp__6503__auto___30265){
var seq__30245_30266__$1 = temp__6503__auto___30265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30245_30266__$1)){
var c__27682__auto___30267 = cljs.core.chunk_first.call(null,seq__30245_30266__$1);
var G__30268 = cljs.core.chunk_rest.call(null,seq__30245_30266__$1);
var G__30269 = c__27682__auto___30267;
var G__30270 = cljs.core.count.call(null,c__27682__auto___30267);
var G__30271 = (0);
seq__30245_30256 = G__30268;
chunk__30246_30257 = G__30269;
count__30247_30258 = G__30270;
i__30248_30259 = G__30271;
continue;
} else {
var dep_30272 = cljs.core.first.call(null,seq__30245_30266__$1);
topo_sort_helper_STAR_.call(null,dep_30272,(depth + (1)),state);

var G__30273 = cljs.core.next.call(null,seq__30245_30266__$1);
var G__30274 = null;
var G__30275 = (0);
var G__30276 = (0);
seq__30245_30256 = G__30273;
chunk__30246_30257 = G__30274;
count__30247_30258 = G__30275;
i__30248_30259 = G__30276;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30249){
var vec__30253 = p__30249;
var seq__30254 = cljs.core.seq.call(null,vec__30253);
var first__30255 = cljs.core.first.call(null,seq__30254);
var seq__30254__$1 = cljs.core.next.call(null,seq__30254);
var x = first__30255;
var xs = seq__30254__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30253,seq__30254,first__30255,seq__30254__$1,x,xs,get_deps__$1){
return (function (p1__30195_SHARP_){
return clojure.set.difference.call(null,p1__30195_SHARP_,x);
});})(vec__30253,seq__30254,first__30255,seq__30254__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30289 = cljs.core.seq.call(null,provides);
var chunk__30290 = null;
var count__30291 = (0);
var i__30292 = (0);
while(true){
if((i__30292 < count__30291)){
var prov = cljs.core._nth.call(null,chunk__30290,i__30292);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30293_30301 = cljs.core.seq.call(null,requires);
var chunk__30294_30302 = null;
var count__30295_30303 = (0);
var i__30296_30304 = (0);
while(true){
if((i__30296_30304 < count__30295_30303)){
var req_30305 = cljs.core._nth.call(null,chunk__30294_30302,i__30296_30304);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30305,prov);

var G__30306 = seq__30293_30301;
var G__30307 = chunk__30294_30302;
var G__30308 = count__30295_30303;
var G__30309 = (i__30296_30304 + (1));
seq__30293_30301 = G__30306;
chunk__30294_30302 = G__30307;
count__30295_30303 = G__30308;
i__30296_30304 = G__30309;
continue;
} else {
var temp__6503__auto___30310 = cljs.core.seq.call(null,seq__30293_30301);
if(temp__6503__auto___30310){
var seq__30293_30311__$1 = temp__6503__auto___30310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30293_30311__$1)){
var c__27682__auto___30312 = cljs.core.chunk_first.call(null,seq__30293_30311__$1);
var G__30313 = cljs.core.chunk_rest.call(null,seq__30293_30311__$1);
var G__30314 = c__27682__auto___30312;
var G__30315 = cljs.core.count.call(null,c__27682__auto___30312);
var G__30316 = (0);
seq__30293_30301 = G__30313;
chunk__30294_30302 = G__30314;
count__30295_30303 = G__30315;
i__30296_30304 = G__30316;
continue;
} else {
var req_30317 = cljs.core.first.call(null,seq__30293_30311__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30317,prov);

var G__30318 = cljs.core.next.call(null,seq__30293_30311__$1);
var G__30319 = null;
var G__30320 = (0);
var G__30321 = (0);
seq__30293_30301 = G__30318;
chunk__30294_30302 = G__30319;
count__30295_30303 = G__30320;
i__30296_30304 = G__30321;
continue;
}
} else {
}
}
break;
}

var G__30322 = seq__30289;
var G__30323 = chunk__30290;
var G__30324 = count__30291;
var G__30325 = (i__30292 + (1));
seq__30289 = G__30322;
chunk__30290 = G__30323;
count__30291 = G__30324;
i__30292 = G__30325;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__30289);
if(temp__6503__auto__){
var seq__30289__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30289__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__30289__$1);
var G__30326 = cljs.core.chunk_rest.call(null,seq__30289__$1);
var G__30327 = c__27682__auto__;
var G__30328 = cljs.core.count.call(null,c__27682__auto__);
var G__30329 = (0);
seq__30289 = G__30326;
chunk__30290 = G__30327;
count__30291 = G__30328;
i__30292 = G__30329;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30289__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30297_30330 = cljs.core.seq.call(null,requires);
var chunk__30298_30331 = null;
var count__30299_30332 = (0);
var i__30300_30333 = (0);
while(true){
if((i__30300_30333 < count__30299_30332)){
var req_30334 = cljs.core._nth.call(null,chunk__30298_30331,i__30300_30333);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30334,prov);

var G__30335 = seq__30297_30330;
var G__30336 = chunk__30298_30331;
var G__30337 = count__30299_30332;
var G__30338 = (i__30300_30333 + (1));
seq__30297_30330 = G__30335;
chunk__30298_30331 = G__30336;
count__30299_30332 = G__30337;
i__30300_30333 = G__30338;
continue;
} else {
var temp__6503__auto___30339__$1 = cljs.core.seq.call(null,seq__30297_30330);
if(temp__6503__auto___30339__$1){
var seq__30297_30340__$1 = temp__6503__auto___30339__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30297_30340__$1)){
var c__27682__auto___30341 = cljs.core.chunk_first.call(null,seq__30297_30340__$1);
var G__30342 = cljs.core.chunk_rest.call(null,seq__30297_30340__$1);
var G__30343 = c__27682__auto___30341;
var G__30344 = cljs.core.count.call(null,c__27682__auto___30341);
var G__30345 = (0);
seq__30297_30330 = G__30342;
chunk__30298_30331 = G__30343;
count__30299_30332 = G__30344;
i__30300_30333 = G__30345;
continue;
} else {
var req_30346 = cljs.core.first.call(null,seq__30297_30340__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30346,prov);

var G__30347 = cljs.core.next.call(null,seq__30297_30340__$1);
var G__30348 = null;
var G__30349 = (0);
var G__30350 = (0);
seq__30297_30330 = G__30347;
chunk__30298_30331 = G__30348;
count__30299_30332 = G__30349;
i__30300_30333 = G__30350;
continue;
}
} else {
}
}
break;
}

var G__30351 = cljs.core.next.call(null,seq__30289__$1);
var G__30352 = null;
var G__30353 = (0);
var G__30354 = (0);
seq__30289 = G__30351;
chunk__30290 = G__30352;
count__30291 = G__30353;
i__30292 = G__30354;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30359_30363 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30360_30364 = null;
var count__30361_30365 = (0);
var i__30362_30366 = (0);
while(true){
if((i__30362_30366 < count__30361_30365)){
var ns_30367 = cljs.core._nth.call(null,chunk__30360_30364,i__30362_30366);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30367);

var G__30368 = seq__30359_30363;
var G__30369 = chunk__30360_30364;
var G__30370 = count__30361_30365;
var G__30371 = (i__30362_30366 + (1));
seq__30359_30363 = G__30368;
chunk__30360_30364 = G__30369;
count__30361_30365 = G__30370;
i__30362_30366 = G__30371;
continue;
} else {
var temp__6503__auto___30372 = cljs.core.seq.call(null,seq__30359_30363);
if(temp__6503__auto___30372){
var seq__30359_30373__$1 = temp__6503__auto___30372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30359_30373__$1)){
var c__27682__auto___30374 = cljs.core.chunk_first.call(null,seq__30359_30373__$1);
var G__30375 = cljs.core.chunk_rest.call(null,seq__30359_30373__$1);
var G__30376 = c__27682__auto___30374;
var G__30377 = cljs.core.count.call(null,c__27682__auto___30374);
var G__30378 = (0);
seq__30359_30363 = G__30375;
chunk__30360_30364 = G__30376;
count__30361_30365 = G__30377;
i__30362_30366 = G__30378;
continue;
} else {
var ns_30379 = cljs.core.first.call(null,seq__30359_30373__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30379);

var G__30380 = cljs.core.next.call(null,seq__30359_30373__$1);
var G__30381 = null;
var G__30382 = (0);
var G__30383 = (0);
seq__30359_30363 = G__30380;
chunk__30360_30364 = G__30381;
count__30361_30365 = G__30382;
i__30362_30366 = G__30383;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26779__auto__ = goog.require__;
if(cljs.core.truth_(or__26779__auto__)){
return or__26779__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30384__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30385__i = 0, G__30385__a = new Array(arguments.length -  0);
while (G__30385__i < G__30385__a.length) {G__30385__a[G__30385__i] = arguments[G__30385__i + 0]; ++G__30385__i;}
  args = new cljs.core.IndexedSeq(G__30385__a,0);
} 
return G__30384__delegate.call(this,args);};
G__30384.cljs$lang$maxFixedArity = 0;
G__30384.cljs$lang$applyTo = (function (arglist__30386){
var args = cljs.core.seq(arglist__30386);
return G__30384__delegate(args);
});
G__30384.cljs$core$IFn$_invoke$arity$variadic = G__30384__delegate;
return G__30384;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30388 = cljs.core._EQ_;
var expr__30389 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30388.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30389))){
var path_parts = ((function (pred__30388,expr__30389){
return (function (p1__30387_SHARP_){
return clojure.string.split.call(null,p1__30387_SHARP_,/[\/\\]/);
});})(pred__30388,expr__30389))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30388,expr__30389){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30391){if((e30391 instanceof Error)){
var e = e30391;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30391;

}
}})());
});
;})(path_parts,sep,root,pred__30388,expr__30389))
} else {
if(cljs.core.truth_(pred__30388.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30389))){
return ((function (pred__30388,expr__30389){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30388,expr__30389){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30388,expr__30389))
);

return deferred.addErrback(((function (deferred,pred__30388,expr__30389){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30388,expr__30389))
);
});
;})(pred__30388,expr__30389))
} else {
return ((function (pred__30388,expr__30389){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30388,expr__30389))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30392,callback){
var map__30395 = p__30392;
var map__30395__$1 = ((((!((map__30395 == null)))?((((map__30395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30395):map__30395);
var file_msg = map__30395__$1;
var request_url = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30395,map__30395__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30395,map__30395__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto__){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto__){
return (function (state_30419){
var state_val_30420 = (state_30419[(1)]);
if((state_val_30420 === (7))){
var inst_30415 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
var statearr_30421_30441 = state_30419__$1;
(statearr_30421_30441[(2)] = inst_30415);

(statearr_30421_30441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (1))){
var state_30419__$1 = state_30419;
var statearr_30422_30442 = state_30419__$1;
(statearr_30422_30442[(2)] = null);

(statearr_30422_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (4))){
var inst_30399 = (state_30419[(7)]);
var inst_30399__$1 = (state_30419[(2)]);
var state_30419__$1 = (function (){var statearr_30423 = state_30419;
(statearr_30423[(7)] = inst_30399__$1);

return statearr_30423;
})();
if(cljs.core.truth_(inst_30399__$1)){
var statearr_30424_30443 = state_30419__$1;
(statearr_30424_30443[(1)] = (5));

} else {
var statearr_30425_30444 = state_30419__$1;
(statearr_30425_30444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (6))){
var state_30419__$1 = state_30419;
var statearr_30426_30445 = state_30419__$1;
(statearr_30426_30445[(2)] = null);

(statearr_30426_30445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (3))){
var inst_30417 = (state_30419[(2)]);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30419__$1,inst_30417);
} else {
if((state_val_30420 === (2))){
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30419__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30420 === (11))){
var inst_30411 = (state_30419[(2)]);
var state_30419__$1 = (function (){var statearr_30427 = state_30419;
(statearr_30427[(8)] = inst_30411);

return statearr_30427;
})();
var statearr_30428_30446 = state_30419__$1;
(statearr_30428_30446[(2)] = null);

(statearr_30428_30446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (9))){
var inst_30403 = (state_30419[(9)]);
var inst_30405 = (state_30419[(10)]);
var inst_30407 = inst_30405.call(null,inst_30403);
var state_30419__$1 = state_30419;
var statearr_30429_30447 = state_30419__$1;
(statearr_30429_30447[(2)] = inst_30407);

(statearr_30429_30447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (5))){
var inst_30399 = (state_30419[(7)]);
var inst_30401 = figwheel.client.file_reloading.blocking_load.call(null,inst_30399);
var state_30419__$1 = state_30419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30419__$1,(8),inst_30401);
} else {
if((state_val_30420 === (10))){
var inst_30403 = (state_30419[(9)]);
var inst_30409 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30403);
var state_30419__$1 = state_30419;
var statearr_30430_30448 = state_30419__$1;
(statearr_30430_30448[(2)] = inst_30409);

(statearr_30430_30448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30420 === (8))){
var inst_30399 = (state_30419[(7)]);
var inst_30405 = (state_30419[(10)]);
var inst_30403 = (state_30419[(2)]);
var inst_30404 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30405__$1 = cljs.core.get.call(null,inst_30404,inst_30399);
var state_30419__$1 = (function (){var statearr_30431 = state_30419;
(statearr_30431[(9)] = inst_30403);

(statearr_30431[(10)] = inst_30405__$1);

return statearr_30431;
})();
if(cljs.core.truth_(inst_30405__$1)){
var statearr_30432_30449 = state_30419__$1;
(statearr_30432_30449[(1)] = (9));

} else {
var statearr_30433_30450 = state_30419__$1;
(statearr_30433_30450[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30081__auto__))
;
return ((function (switch__30058__auto__,c__30081__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30059__auto__ = null;
var figwheel$client$file_reloading$state_machine__30059__auto____0 = (function (){
var statearr_30437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30437[(0)] = figwheel$client$file_reloading$state_machine__30059__auto__);

(statearr_30437[(1)] = (1));

return statearr_30437;
});
var figwheel$client$file_reloading$state_machine__30059__auto____1 = (function (state_30419){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_30419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e30438){if((e30438 instanceof Object)){
var ex__30062__auto__ = e30438;
var statearr_30439_30451 = state_30419;
(statearr_30439_30451[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30452 = state_30419;
state_30419 = G__30452;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30059__auto__ = function(state_30419){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30059__auto____1.call(this,state_30419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30059__auto____0;
figwheel$client$file_reloading$state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30059__auto____1;
return figwheel$client$file_reloading$state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto__))
})();
var state__30083__auto__ = (function (){var statearr_30440 = f__30082__auto__.call(null);
(statearr_30440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto__);

return statearr_30440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto__))
);

return c__30081__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30453,callback){
var map__30456 = p__30453;
var map__30456__$1 = ((((!((map__30456 == null)))?((((map__30456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30456):map__30456);
var file_msg = map__30456__$1;
var namespace = cljs.core.get.call(null,map__30456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30456,map__30456__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30456,map__30456__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30458){
var map__30461 = p__30458;
var map__30461__$1 = ((((!((map__30461 == null)))?((((map__30461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30461):map__30461);
var file_msg = map__30461__$1;
var namespace = cljs.core.get.call(null,map__30461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26767__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26767__auto__){
var or__26779__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26779__auto__)){
return or__26779__auto__;
} else {
var or__26779__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26779__auto____$1)){
return or__26779__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26767__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30463,callback){
var map__30466 = p__30463;
var map__30466__$1 = ((((!((map__30466 == null)))?((((map__30466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466):map__30466);
var file_msg = map__30466__$1;
var request_url = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30081__auto___30570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto___30570,out){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto___30570,out){
return (function (state_30552){
var state_val_30553 = (state_30552[(1)]);
if((state_val_30553 === (1))){
var inst_30526 = cljs.core.seq.call(null,files);
var inst_30527 = cljs.core.first.call(null,inst_30526);
var inst_30528 = cljs.core.next.call(null,inst_30526);
var inst_30529 = files;
var state_30552__$1 = (function (){var statearr_30554 = state_30552;
(statearr_30554[(7)] = inst_30527);

(statearr_30554[(8)] = inst_30528);

(statearr_30554[(9)] = inst_30529);

return statearr_30554;
})();
var statearr_30555_30571 = state_30552__$1;
(statearr_30555_30571[(2)] = null);

(statearr_30555_30571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (2))){
var inst_30535 = (state_30552[(10)]);
var inst_30529 = (state_30552[(9)]);
var inst_30534 = cljs.core.seq.call(null,inst_30529);
var inst_30535__$1 = cljs.core.first.call(null,inst_30534);
var inst_30536 = cljs.core.next.call(null,inst_30534);
var inst_30537 = (inst_30535__$1 == null);
var inst_30538 = cljs.core.not.call(null,inst_30537);
var state_30552__$1 = (function (){var statearr_30556 = state_30552;
(statearr_30556[(10)] = inst_30535__$1);

(statearr_30556[(11)] = inst_30536);

return statearr_30556;
})();
if(inst_30538){
var statearr_30557_30572 = state_30552__$1;
(statearr_30557_30572[(1)] = (4));

} else {
var statearr_30558_30573 = state_30552__$1;
(statearr_30558_30573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (3))){
var inst_30550 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30552__$1,inst_30550);
} else {
if((state_val_30553 === (4))){
var inst_30535 = (state_30552[(10)]);
var inst_30540 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30535);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30552__$1,(7),inst_30540);
} else {
if((state_val_30553 === (5))){
var inst_30546 = cljs.core.async.close_BANG_.call(null,out);
var state_30552__$1 = state_30552;
var statearr_30559_30574 = state_30552__$1;
(statearr_30559_30574[(2)] = inst_30546);

(statearr_30559_30574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (6))){
var inst_30548 = (state_30552[(2)]);
var state_30552__$1 = state_30552;
var statearr_30560_30575 = state_30552__$1;
(statearr_30560_30575[(2)] = inst_30548);

(statearr_30560_30575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (7))){
var inst_30536 = (state_30552[(11)]);
var inst_30542 = (state_30552[(2)]);
var inst_30543 = cljs.core.async.put_BANG_.call(null,out,inst_30542);
var inst_30529 = inst_30536;
var state_30552__$1 = (function (){var statearr_30561 = state_30552;
(statearr_30561[(9)] = inst_30529);

(statearr_30561[(12)] = inst_30543);

return statearr_30561;
})();
var statearr_30562_30576 = state_30552__$1;
(statearr_30562_30576[(2)] = null);

(statearr_30562_30576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30081__auto___30570,out))
;
return ((function (switch__30058__auto__,c__30081__auto___30570,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto____0 = (function (){
var statearr_30566 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30566[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto__);

(statearr_30566[(1)] = (1));

return statearr_30566;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto____1 = (function (state_30552){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_30552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e30567){if((e30567 instanceof Object)){
var ex__30062__auto__ = e30567;
var statearr_30568_30577 = state_30552;
(statearr_30568_30577[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30578 = state_30552;
state_30552 = G__30578;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto__ = function(state_30552){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto____1.call(this,state_30552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto___30570,out))
})();
var state__30083__auto__ = (function (){var statearr_30569 = f__30082__auto__.call(null);
(statearr_30569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto___30570);

return statearr_30569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto___30570,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30579,opts){
var map__30583 = p__30579;
var map__30583__$1 = ((((!((map__30583 == null)))?((((map__30583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30583):map__30583);
var eval_body__$1 = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26767__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26767__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26767__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30585){var e = e30585;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6501__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30586_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30586_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6501__auto__)){
var file_msg = temp__6501__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30595){
var vec__30596 = p__30595;
var k = cljs.core.nth.call(null,vec__30596,(0),null);
var v = cljs.core.nth.call(null,vec__30596,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30599){
var vec__30600 = p__30599;
var k = cljs.core.nth.call(null,vec__30600,(0),null);
var v = cljs.core.nth.call(null,vec__30600,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30606,p__30607){
var map__30854 = p__30606;
var map__30854__$1 = ((((!((map__30854 == null)))?((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30854):map__30854);
var opts = map__30854__$1;
var before_jsload = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30854__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30855 = p__30607;
var map__30855__$1 = ((((!((map__30855 == null)))?((((map__30855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30855):map__30855);
var msg = map__30855__$1;
var files = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31008){
var state_val_31009 = (state_31008[(1)]);
if((state_val_31009 === (7))){
var inst_30872 = (state_31008[(7)]);
var inst_30871 = (state_31008[(8)]);
var inst_30870 = (state_31008[(9)]);
var inst_30869 = (state_31008[(10)]);
var inst_30877 = cljs.core._nth.call(null,inst_30870,inst_30872);
var inst_30878 = figwheel.client.file_reloading.eval_body.call(null,inst_30877,opts);
var inst_30879 = (inst_30872 + (1));
var tmp31010 = inst_30871;
var tmp31011 = inst_30870;
var tmp31012 = inst_30869;
var inst_30869__$1 = tmp31012;
var inst_30870__$1 = tmp31011;
var inst_30871__$1 = tmp31010;
var inst_30872__$1 = inst_30879;
var state_31008__$1 = (function (){var statearr_31013 = state_31008;
(statearr_31013[(7)] = inst_30872__$1);

(statearr_31013[(11)] = inst_30878);

(statearr_31013[(8)] = inst_30871__$1);

(statearr_31013[(9)] = inst_30870__$1);

(statearr_31013[(10)] = inst_30869__$1);

return statearr_31013;
})();
var statearr_31014_31100 = state_31008__$1;
(statearr_31014_31100[(2)] = null);

(statearr_31014_31100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (20))){
var inst_30912 = (state_31008[(12)]);
var inst_30920 = figwheel.client.file_reloading.sort_files.call(null,inst_30912);
var state_31008__$1 = state_31008;
var statearr_31015_31101 = state_31008__$1;
(statearr_31015_31101[(2)] = inst_30920);

(statearr_31015_31101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (27))){
var state_31008__$1 = state_31008;
var statearr_31016_31102 = state_31008__$1;
(statearr_31016_31102[(2)] = null);

(statearr_31016_31102[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (1))){
var inst_30861 = (state_31008[(13)]);
var inst_30858 = before_jsload.call(null,files);
var inst_30859 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30860 = (function (){return ((function (inst_30861,inst_30858,inst_30859,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30603_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30603_SHARP_);
});
;})(inst_30861,inst_30858,inst_30859,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30861__$1 = cljs.core.filter.call(null,inst_30860,files);
var inst_30862 = cljs.core.not_empty.call(null,inst_30861__$1);
var state_31008__$1 = (function (){var statearr_31017 = state_31008;
(statearr_31017[(14)] = inst_30858);

(statearr_31017[(13)] = inst_30861__$1);

(statearr_31017[(15)] = inst_30859);

return statearr_31017;
})();
if(cljs.core.truth_(inst_30862)){
var statearr_31018_31103 = state_31008__$1;
(statearr_31018_31103[(1)] = (2));

} else {
var statearr_31019_31104 = state_31008__$1;
(statearr_31019_31104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (24))){
var state_31008__$1 = state_31008;
var statearr_31020_31105 = state_31008__$1;
(statearr_31020_31105[(2)] = null);

(statearr_31020_31105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (39))){
var inst_30962 = (state_31008[(16)]);
var state_31008__$1 = state_31008;
var statearr_31021_31106 = state_31008__$1;
(statearr_31021_31106[(2)] = inst_30962);

(statearr_31021_31106[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (46))){
var inst_31003 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31022_31107 = state_31008__$1;
(statearr_31022_31107[(2)] = inst_31003);

(statearr_31022_31107[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (4))){
var inst_30906 = (state_31008[(2)]);
var inst_30907 = cljs.core.List.EMPTY;
var inst_30908 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30907);
var inst_30909 = (function (){return ((function (inst_30906,inst_30907,inst_30908,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30604_SHARP_){
var and__26767__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30604_SHARP_);
if(cljs.core.truth_(and__26767__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30604_SHARP_));
} else {
return and__26767__auto__;
}
});
;})(inst_30906,inst_30907,inst_30908,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30910 = cljs.core.filter.call(null,inst_30909,files);
var inst_30911 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30912 = cljs.core.concat.call(null,inst_30910,inst_30911);
var state_31008__$1 = (function (){var statearr_31023 = state_31008;
(statearr_31023[(17)] = inst_30908);

(statearr_31023[(12)] = inst_30912);

(statearr_31023[(18)] = inst_30906);

return statearr_31023;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31024_31108 = state_31008__$1;
(statearr_31024_31108[(1)] = (16));

} else {
var statearr_31025_31109 = state_31008__$1;
(statearr_31025_31109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (15))){
var inst_30896 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31026_31110 = state_31008__$1;
(statearr_31026_31110[(2)] = inst_30896);

(statearr_31026_31110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (21))){
var inst_30922 = (state_31008[(19)]);
var inst_30922__$1 = (state_31008[(2)]);
var inst_30923 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30922__$1);
var state_31008__$1 = (function (){var statearr_31027 = state_31008;
(statearr_31027[(19)] = inst_30922__$1);

return statearr_31027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31008__$1,(22),inst_30923);
} else {
if((state_val_31009 === (31))){
var inst_31006 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31008__$1,inst_31006);
} else {
if((state_val_31009 === (32))){
var inst_30962 = (state_31008[(16)]);
var inst_30967 = inst_30962.cljs$lang$protocol_mask$partition0$;
var inst_30968 = (inst_30967 & (64));
var inst_30969 = inst_30962.cljs$core$ISeq$;
var inst_30970 = (inst_30968) || (inst_30969);
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30970)){
var statearr_31028_31111 = state_31008__$1;
(statearr_31028_31111[(1)] = (35));

} else {
var statearr_31029_31112 = state_31008__$1;
(statearr_31029_31112[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (40))){
var inst_30983 = (state_31008[(20)]);
var inst_30982 = (state_31008[(2)]);
var inst_30983__$1 = cljs.core.get.call(null,inst_30982,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30984 = cljs.core.get.call(null,inst_30982,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30985 = cljs.core.not_empty.call(null,inst_30983__$1);
var state_31008__$1 = (function (){var statearr_31030 = state_31008;
(statearr_31030[(20)] = inst_30983__$1);

(statearr_31030[(21)] = inst_30984);

return statearr_31030;
})();
if(cljs.core.truth_(inst_30985)){
var statearr_31031_31113 = state_31008__$1;
(statearr_31031_31113[(1)] = (41));

} else {
var statearr_31032_31114 = state_31008__$1;
(statearr_31032_31114[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (33))){
var state_31008__$1 = state_31008;
var statearr_31033_31115 = state_31008__$1;
(statearr_31033_31115[(2)] = false);

(statearr_31033_31115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (13))){
var inst_30882 = (state_31008[(22)]);
var inst_30886 = cljs.core.chunk_first.call(null,inst_30882);
var inst_30887 = cljs.core.chunk_rest.call(null,inst_30882);
var inst_30888 = cljs.core.count.call(null,inst_30886);
var inst_30869 = inst_30887;
var inst_30870 = inst_30886;
var inst_30871 = inst_30888;
var inst_30872 = (0);
var state_31008__$1 = (function (){var statearr_31034 = state_31008;
(statearr_31034[(7)] = inst_30872);

(statearr_31034[(8)] = inst_30871);

(statearr_31034[(9)] = inst_30870);

(statearr_31034[(10)] = inst_30869);

return statearr_31034;
})();
var statearr_31035_31116 = state_31008__$1;
(statearr_31035_31116[(2)] = null);

(statearr_31035_31116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (22))){
var inst_30922 = (state_31008[(19)]);
var inst_30930 = (state_31008[(23)]);
var inst_30925 = (state_31008[(24)]);
var inst_30926 = (state_31008[(25)]);
var inst_30925__$1 = (state_31008[(2)]);
var inst_30926__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30925__$1);
var inst_30927 = (function (){var all_files = inst_30922;
var res_SINGLEQUOTE_ = inst_30925__$1;
var res = inst_30926__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30922,inst_30930,inst_30925,inst_30926,inst_30925__$1,inst_30926__$1,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30605_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30605_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30922,inst_30930,inst_30925,inst_30926,inst_30925__$1,inst_30926__$1,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30928 = cljs.core.filter.call(null,inst_30927,inst_30925__$1);
var inst_30929 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30930__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30929);
var inst_30931 = cljs.core.not_empty.call(null,inst_30930__$1);
var state_31008__$1 = (function (){var statearr_31036 = state_31008;
(statearr_31036[(23)] = inst_30930__$1);

(statearr_31036[(24)] = inst_30925__$1);

(statearr_31036[(26)] = inst_30928);

(statearr_31036[(25)] = inst_30926__$1);

return statearr_31036;
})();
if(cljs.core.truth_(inst_30931)){
var statearr_31037_31117 = state_31008__$1;
(statearr_31037_31117[(1)] = (23));

} else {
var statearr_31038_31118 = state_31008__$1;
(statearr_31038_31118[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (36))){
var state_31008__$1 = state_31008;
var statearr_31039_31119 = state_31008__$1;
(statearr_31039_31119[(2)] = false);

(statearr_31039_31119[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (41))){
var inst_30983 = (state_31008[(20)]);
var inst_30987 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30988 = cljs.core.map.call(null,inst_30987,inst_30983);
var inst_30989 = cljs.core.pr_str.call(null,inst_30988);
var inst_30990 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30989)].join('');
var inst_30991 = figwheel.client.utils.log.call(null,inst_30990);
var state_31008__$1 = state_31008;
var statearr_31040_31120 = state_31008__$1;
(statearr_31040_31120[(2)] = inst_30991);

(statearr_31040_31120[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (43))){
var inst_30984 = (state_31008[(21)]);
var inst_30994 = (state_31008[(2)]);
var inst_30995 = cljs.core.not_empty.call(null,inst_30984);
var state_31008__$1 = (function (){var statearr_31041 = state_31008;
(statearr_31041[(27)] = inst_30994);

return statearr_31041;
})();
if(cljs.core.truth_(inst_30995)){
var statearr_31042_31121 = state_31008__$1;
(statearr_31042_31121[(1)] = (44));

} else {
var statearr_31043_31122 = state_31008__$1;
(statearr_31043_31122[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (29))){
var inst_30922 = (state_31008[(19)]);
var inst_30962 = (state_31008[(16)]);
var inst_30930 = (state_31008[(23)]);
var inst_30925 = (state_31008[(24)]);
var inst_30928 = (state_31008[(26)]);
var inst_30926 = (state_31008[(25)]);
var inst_30958 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30961 = (function (){var all_files = inst_30922;
var res_SINGLEQUOTE_ = inst_30925;
var res = inst_30926;
var files_not_loaded = inst_30928;
var dependencies_that_loaded = inst_30930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30962,inst_30930,inst_30925,inst_30928,inst_30926,inst_30958,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30960){
var map__31044 = p__30960;
var map__31044__$1 = ((((!((map__31044 == null)))?((((map__31044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31044):map__31044);
var namespace = cljs.core.get.call(null,map__31044__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30962,inst_30930,inst_30925,inst_30928,inst_30926,inst_30958,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30962__$1 = cljs.core.group_by.call(null,inst_30961,inst_30928);
var inst_30964 = (inst_30962__$1 == null);
var inst_30965 = cljs.core.not.call(null,inst_30964);
var state_31008__$1 = (function (){var statearr_31046 = state_31008;
(statearr_31046[(16)] = inst_30962__$1);

(statearr_31046[(28)] = inst_30958);

return statearr_31046;
})();
if(inst_30965){
var statearr_31047_31123 = state_31008__$1;
(statearr_31047_31123[(1)] = (32));

} else {
var statearr_31048_31124 = state_31008__$1;
(statearr_31048_31124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (44))){
var inst_30984 = (state_31008[(21)]);
var inst_30997 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30984);
var inst_30998 = cljs.core.pr_str.call(null,inst_30997);
var inst_30999 = [cljs.core.str("not required: "),cljs.core.str(inst_30998)].join('');
var inst_31000 = figwheel.client.utils.log.call(null,inst_30999);
var state_31008__$1 = state_31008;
var statearr_31049_31125 = state_31008__$1;
(statearr_31049_31125[(2)] = inst_31000);

(statearr_31049_31125[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (6))){
var inst_30903 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31050_31126 = state_31008__$1;
(statearr_31050_31126[(2)] = inst_30903);

(statearr_31050_31126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (28))){
var inst_30928 = (state_31008[(26)]);
var inst_30955 = (state_31008[(2)]);
var inst_30956 = cljs.core.not_empty.call(null,inst_30928);
var state_31008__$1 = (function (){var statearr_31051 = state_31008;
(statearr_31051[(29)] = inst_30955);

return statearr_31051;
})();
if(cljs.core.truth_(inst_30956)){
var statearr_31052_31127 = state_31008__$1;
(statearr_31052_31127[(1)] = (29));

} else {
var statearr_31053_31128 = state_31008__$1;
(statearr_31053_31128[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (25))){
var inst_30926 = (state_31008[(25)]);
var inst_30942 = (state_31008[(2)]);
var inst_30943 = cljs.core.not_empty.call(null,inst_30926);
var state_31008__$1 = (function (){var statearr_31054 = state_31008;
(statearr_31054[(30)] = inst_30942);

return statearr_31054;
})();
if(cljs.core.truth_(inst_30943)){
var statearr_31055_31129 = state_31008__$1;
(statearr_31055_31129[(1)] = (26));

} else {
var statearr_31056_31130 = state_31008__$1;
(statearr_31056_31130[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (34))){
var inst_30977 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30977)){
var statearr_31057_31131 = state_31008__$1;
(statearr_31057_31131[(1)] = (38));

} else {
var statearr_31058_31132 = state_31008__$1;
(statearr_31058_31132[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (17))){
var state_31008__$1 = state_31008;
var statearr_31059_31133 = state_31008__$1;
(statearr_31059_31133[(2)] = recompile_dependents);

(statearr_31059_31133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (3))){
var state_31008__$1 = state_31008;
var statearr_31060_31134 = state_31008__$1;
(statearr_31060_31134[(2)] = null);

(statearr_31060_31134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (12))){
var inst_30899 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31061_31135 = state_31008__$1;
(statearr_31061_31135[(2)] = inst_30899);

(statearr_31061_31135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (2))){
var inst_30861 = (state_31008[(13)]);
var inst_30868 = cljs.core.seq.call(null,inst_30861);
var inst_30869 = inst_30868;
var inst_30870 = null;
var inst_30871 = (0);
var inst_30872 = (0);
var state_31008__$1 = (function (){var statearr_31062 = state_31008;
(statearr_31062[(7)] = inst_30872);

(statearr_31062[(8)] = inst_30871);

(statearr_31062[(9)] = inst_30870);

(statearr_31062[(10)] = inst_30869);

return statearr_31062;
})();
var statearr_31063_31136 = state_31008__$1;
(statearr_31063_31136[(2)] = null);

(statearr_31063_31136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (23))){
var inst_30922 = (state_31008[(19)]);
var inst_30930 = (state_31008[(23)]);
var inst_30925 = (state_31008[(24)]);
var inst_30928 = (state_31008[(26)]);
var inst_30926 = (state_31008[(25)]);
var inst_30933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30935 = (function (){var all_files = inst_30922;
var res_SINGLEQUOTE_ = inst_30925;
var res = inst_30926;
var files_not_loaded = inst_30928;
var dependencies_that_loaded = inst_30930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30930,inst_30925,inst_30928,inst_30926,inst_30933,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30934){
var map__31064 = p__30934;
var map__31064__$1 = ((((!((map__31064 == null)))?((((map__31064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31064):map__31064);
var request_url = cljs.core.get.call(null,map__31064__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30930,inst_30925,inst_30928,inst_30926,inst_30933,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30936 = cljs.core.reverse.call(null,inst_30930);
var inst_30937 = cljs.core.map.call(null,inst_30935,inst_30936);
var inst_30938 = cljs.core.pr_str.call(null,inst_30937);
var inst_30939 = figwheel.client.utils.log.call(null,inst_30938);
var state_31008__$1 = (function (){var statearr_31066 = state_31008;
(statearr_31066[(31)] = inst_30933);

return statearr_31066;
})();
var statearr_31067_31137 = state_31008__$1;
(statearr_31067_31137[(2)] = inst_30939);

(statearr_31067_31137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (35))){
var state_31008__$1 = state_31008;
var statearr_31068_31138 = state_31008__$1;
(statearr_31068_31138[(2)] = true);

(statearr_31068_31138[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (19))){
var inst_30912 = (state_31008[(12)]);
var inst_30918 = figwheel.client.file_reloading.expand_files.call(null,inst_30912);
var state_31008__$1 = state_31008;
var statearr_31069_31139 = state_31008__$1;
(statearr_31069_31139[(2)] = inst_30918);

(statearr_31069_31139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (11))){
var state_31008__$1 = state_31008;
var statearr_31070_31140 = state_31008__$1;
(statearr_31070_31140[(2)] = null);

(statearr_31070_31140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (9))){
var inst_30901 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31071_31141 = state_31008__$1;
(statearr_31071_31141[(2)] = inst_30901);

(statearr_31071_31141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (5))){
var inst_30872 = (state_31008[(7)]);
var inst_30871 = (state_31008[(8)]);
var inst_30874 = (inst_30872 < inst_30871);
var inst_30875 = inst_30874;
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30875)){
var statearr_31072_31142 = state_31008__$1;
(statearr_31072_31142[(1)] = (7));

} else {
var statearr_31073_31143 = state_31008__$1;
(statearr_31073_31143[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (14))){
var inst_30882 = (state_31008[(22)]);
var inst_30891 = cljs.core.first.call(null,inst_30882);
var inst_30892 = figwheel.client.file_reloading.eval_body.call(null,inst_30891,opts);
var inst_30893 = cljs.core.next.call(null,inst_30882);
var inst_30869 = inst_30893;
var inst_30870 = null;
var inst_30871 = (0);
var inst_30872 = (0);
var state_31008__$1 = (function (){var statearr_31074 = state_31008;
(statearr_31074[(7)] = inst_30872);

(statearr_31074[(32)] = inst_30892);

(statearr_31074[(8)] = inst_30871);

(statearr_31074[(9)] = inst_30870);

(statearr_31074[(10)] = inst_30869);

return statearr_31074;
})();
var statearr_31075_31144 = state_31008__$1;
(statearr_31075_31144[(2)] = null);

(statearr_31075_31144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (45))){
var state_31008__$1 = state_31008;
var statearr_31076_31145 = state_31008__$1;
(statearr_31076_31145[(2)] = null);

(statearr_31076_31145[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (26))){
var inst_30922 = (state_31008[(19)]);
var inst_30930 = (state_31008[(23)]);
var inst_30925 = (state_31008[(24)]);
var inst_30928 = (state_31008[(26)]);
var inst_30926 = (state_31008[(25)]);
var inst_30945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30947 = (function (){var all_files = inst_30922;
var res_SINGLEQUOTE_ = inst_30925;
var res = inst_30926;
var files_not_loaded = inst_30928;
var dependencies_that_loaded = inst_30930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30930,inst_30925,inst_30928,inst_30926,inst_30945,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30946){
var map__31077 = p__30946;
var map__31077__$1 = ((((!((map__31077 == null)))?((((map__31077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31077):map__31077);
var namespace = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30930,inst_30925,inst_30928,inst_30926,inst_30945,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30948 = cljs.core.map.call(null,inst_30947,inst_30926);
var inst_30949 = cljs.core.pr_str.call(null,inst_30948);
var inst_30950 = figwheel.client.utils.log.call(null,inst_30949);
var inst_30951 = (function (){var all_files = inst_30922;
var res_SINGLEQUOTE_ = inst_30925;
var res = inst_30926;
var files_not_loaded = inst_30928;
var dependencies_that_loaded = inst_30930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30930,inst_30925,inst_30928,inst_30926,inst_30945,inst_30947,inst_30948,inst_30949,inst_30950,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30922,inst_30930,inst_30925,inst_30928,inst_30926,inst_30945,inst_30947,inst_30948,inst_30949,inst_30950,state_val_31009,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30952 = setTimeout(inst_30951,(10));
var state_31008__$1 = (function (){var statearr_31079 = state_31008;
(statearr_31079[(33)] = inst_30950);

(statearr_31079[(34)] = inst_30945);

return statearr_31079;
})();
var statearr_31080_31146 = state_31008__$1;
(statearr_31080_31146[(2)] = inst_30952);

(statearr_31080_31146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (16))){
var state_31008__$1 = state_31008;
var statearr_31081_31147 = state_31008__$1;
(statearr_31081_31147[(2)] = reload_dependents);

(statearr_31081_31147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (38))){
var inst_30962 = (state_31008[(16)]);
var inst_30979 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30962);
var state_31008__$1 = state_31008;
var statearr_31082_31148 = state_31008__$1;
(statearr_31082_31148[(2)] = inst_30979);

(statearr_31082_31148[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (30))){
var state_31008__$1 = state_31008;
var statearr_31083_31149 = state_31008__$1;
(statearr_31083_31149[(2)] = null);

(statearr_31083_31149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (10))){
var inst_30882 = (state_31008[(22)]);
var inst_30884 = cljs.core.chunked_seq_QMARK_.call(null,inst_30882);
var state_31008__$1 = state_31008;
if(inst_30884){
var statearr_31084_31150 = state_31008__$1;
(statearr_31084_31150[(1)] = (13));

} else {
var statearr_31085_31151 = state_31008__$1;
(statearr_31085_31151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (18))){
var inst_30916 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
if(cljs.core.truth_(inst_30916)){
var statearr_31086_31152 = state_31008__$1;
(statearr_31086_31152[(1)] = (19));

} else {
var statearr_31087_31153 = state_31008__$1;
(statearr_31087_31153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (42))){
var state_31008__$1 = state_31008;
var statearr_31088_31154 = state_31008__$1;
(statearr_31088_31154[(2)] = null);

(statearr_31088_31154[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (37))){
var inst_30974 = (state_31008[(2)]);
var state_31008__$1 = state_31008;
var statearr_31089_31155 = state_31008__$1;
(statearr_31089_31155[(2)] = inst_30974);

(statearr_31089_31155[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31009 === (8))){
var inst_30882 = (state_31008[(22)]);
var inst_30869 = (state_31008[(10)]);
var inst_30882__$1 = cljs.core.seq.call(null,inst_30869);
var state_31008__$1 = (function (){var statearr_31090 = state_31008;
(statearr_31090[(22)] = inst_30882__$1);

return statearr_31090;
})();
if(inst_30882__$1){
var statearr_31091_31156 = state_31008__$1;
(statearr_31091_31156[(1)] = (10));

} else {
var statearr_31092_31157 = state_31008__$1;
(statearr_31092_31157[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30058__auto__,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto____0 = (function (){
var statearr_31096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31096[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto__);

(statearr_31096[(1)] = (1));

return statearr_31096;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto____1 = (function (state_31008){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_31008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e31097){if((e31097 instanceof Object)){
var ex__30062__auto__ = e31097;
var statearr_31098_31158 = state_31008;
(statearr_31098_31158[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31159 = state_31008;
state_31008 = G__31159;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto__ = function(state_31008){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto____1.call(this,state_31008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30083__auto__ = (function (){var statearr_31099 = f__30082__auto__.call(null);
(statearr_31099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto__);

return statearr_31099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto__,map__30854,map__30854__$1,opts,before_jsload,on_jsload,reload_dependents,map__30855,map__30855__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30081__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31162,link){
var map__31165 = p__31162;
var map__31165__$1 = ((((!((map__31165 == null)))?((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);
var file = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__31165,map__31165__$1,file){
return (function (p1__31160_SHARP_,p2__31161_SHARP_){
if(cljs.core._EQ_.call(null,p1__31160_SHARP_,p2__31161_SHARP_)){
return p1__31160_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__31165,map__31165__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31171){
var map__31172 = p__31171;
var map__31172__$1 = ((((!((map__31172 == null)))?((((map__31172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31172):map__31172);
var match_length = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31167_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31167_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6503__auto__)){
var res = temp__6503__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31174 = [];
var len__27958__auto___31177 = arguments.length;
var i__27959__auto___31178 = (0);
while(true){
if((i__27959__auto___31178 < len__27958__auto___31177)){
args31174.push((arguments[i__27959__auto___31178]));

var G__31179 = (i__27959__auto___31178 + (1));
i__27959__auto___31178 = G__31179;
continue;
} else {
}
break;
}

var G__31176 = args31174.length;
switch (G__31176) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31174.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31181_SHARP_,p2__31182_SHARP_){
return cljs.core.assoc.call(null,p1__31181_SHARP_,cljs.core.get.call(null,p2__31182_SHARP_,key),p2__31182_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31183){
var map__31186 = p__31183;
var map__31186__$1 = ((((!((map__31186 == null)))?((((map__31186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31186):map__31186);
var f_data = map__31186__$1;
var file = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31188,p__31189){
var map__31198 = p__31188;
var map__31198__$1 = ((((!((map__31198 == null)))?((((map__31198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31198):map__31198);
var opts = map__31198__$1;
var on_cssload = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31199 = p__31189;
var map__31199__$1 = ((((!((map__31199 == null)))?((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31199):map__31199);
var files_msg = map__31199__$1;
var files = cljs.core.get.call(null,map__31199__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31202_31206 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31203_31207 = null;
var count__31204_31208 = (0);
var i__31205_31209 = (0);
while(true){
if((i__31205_31209 < count__31204_31208)){
var f_31210 = cljs.core._nth.call(null,chunk__31203_31207,i__31205_31209);
figwheel.client.file_reloading.reload_css_file.call(null,f_31210);

var G__31211 = seq__31202_31206;
var G__31212 = chunk__31203_31207;
var G__31213 = count__31204_31208;
var G__31214 = (i__31205_31209 + (1));
seq__31202_31206 = G__31211;
chunk__31203_31207 = G__31212;
count__31204_31208 = G__31213;
i__31205_31209 = G__31214;
continue;
} else {
var temp__6503__auto___31215 = cljs.core.seq.call(null,seq__31202_31206);
if(temp__6503__auto___31215){
var seq__31202_31216__$1 = temp__6503__auto___31215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31202_31216__$1)){
var c__27682__auto___31217 = cljs.core.chunk_first.call(null,seq__31202_31216__$1);
var G__31218 = cljs.core.chunk_rest.call(null,seq__31202_31216__$1);
var G__31219 = c__27682__auto___31217;
var G__31220 = cljs.core.count.call(null,c__27682__auto___31217);
var G__31221 = (0);
seq__31202_31206 = G__31218;
chunk__31203_31207 = G__31219;
count__31204_31208 = G__31220;
i__31205_31209 = G__31221;
continue;
} else {
var f_31222 = cljs.core.first.call(null,seq__31202_31216__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31222);

var G__31223 = cljs.core.next.call(null,seq__31202_31216__$1);
var G__31224 = null;
var G__31225 = (0);
var G__31226 = (0);
seq__31202_31206 = G__31223;
chunk__31203_31207 = G__31224;
count__31204_31208 = G__31225;
i__31205_31209 = G__31226;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31198,map__31198__$1,opts,on_cssload,map__31199,map__31199__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31198,map__31198__$1,opts,on_cssload,map__31199,map__31199__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map