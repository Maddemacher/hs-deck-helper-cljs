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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33216_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33216_SHARP_));
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
var seq__33221 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33222 = null;
var count__33223 = (0);
var i__33224 = (0);
while(true){
if((i__33224 < count__33223)){
var n = cljs.core._nth.call(null,chunk__33222,i__33224);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33225 = seq__33221;
var G__33226 = chunk__33222;
var G__33227 = count__33223;
var G__33228 = (i__33224 + (1));
seq__33221 = G__33225;
chunk__33222 = G__33226;
count__33223 = G__33227;
i__33224 = G__33228;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__33221);
if(temp__6503__auto__){
var seq__33221__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33221__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__33221__$1);
var G__33229 = cljs.core.chunk_rest.call(null,seq__33221__$1);
var G__33230 = c__27682__auto__;
var G__33231 = cljs.core.count.call(null,c__27682__auto__);
var G__33232 = (0);
seq__33221 = G__33229;
chunk__33222 = G__33230;
count__33223 = G__33231;
i__33224 = G__33232;
continue;
} else {
var n = cljs.core.first.call(null,seq__33221__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33233 = cljs.core.next.call(null,seq__33221__$1);
var G__33234 = null;
var G__33235 = (0);
var G__33236 = (0);
seq__33221 = G__33233;
chunk__33222 = G__33234;
count__33223 = G__33235;
i__33224 = G__33236;
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

var seq__33287_33298 = cljs.core.seq.call(null,deps);
var chunk__33288_33299 = null;
var count__33289_33300 = (0);
var i__33290_33301 = (0);
while(true){
if((i__33290_33301 < count__33289_33300)){
var dep_33302 = cljs.core._nth.call(null,chunk__33288_33299,i__33290_33301);
topo_sort_helper_STAR_.call(null,dep_33302,(depth + (1)),state);

var G__33303 = seq__33287_33298;
var G__33304 = chunk__33288_33299;
var G__33305 = count__33289_33300;
var G__33306 = (i__33290_33301 + (1));
seq__33287_33298 = G__33303;
chunk__33288_33299 = G__33304;
count__33289_33300 = G__33305;
i__33290_33301 = G__33306;
continue;
} else {
var temp__6503__auto___33307 = cljs.core.seq.call(null,seq__33287_33298);
if(temp__6503__auto___33307){
var seq__33287_33308__$1 = temp__6503__auto___33307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33287_33308__$1)){
var c__27682__auto___33309 = cljs.core.chunk_first.call(null,seq__33287_33308__$1);
var G__33310 = cljs.core.chunk_rest.call(null,seq__33287_33308__$1);
var G__33311 = c__27682__auto___33309;
var G__33312 = cljs.core.count.call(null,c__27682__auto___33309);
var G__33313 = (0);
seq__33287_33298 = G__33310;
chunk__33288_33299 = G__33311;
count__33289_33300 = G__33312;
i__33290_33301 = G__33313;
continue;
} else {
var dep_33314 = cljs.core.first.call(null,seq__33287_33308__$1);
topo_sort_helper_STAR_.call(null,dep_33314,(depth + (1)),state);

var G__33315 = cljs.core.next.call(null,seq__33287_33308__$1);
var G__33316 = null;
var G__33317 = (0);
var G__33318 = (0);
seq__33287_33298 = G__33315;
chunk__33288_33299 = G__33316;
count__33289_33300 = G__33317;
i__33290_33301 = G__33318;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33291){
var vec__33295 = p__33291;
var seq__33296 = cljs.core.seq.call(null,vec__33295);
var first__33297 = cljs.core.first.call(null,seq__33296);
var seq__33296__$1 = cljs.core.next.call(null,seq__33296);
var x = first__33297;
var xs = seq__33296__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33295,seq__33296,first__33297,seq__33296__$1,x,xs,get_deps__$1){
return (function (p1__33237_SHARP_){
return clojure.set.difference.call(null,p1__33237_SHARP_,x);
});})(vec__33295,seq__33296,first__33297,seq__33296__$1,x,xs,get_deps__$1))
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
var seq__33331 = cljs.core.seq.call(null,provides);
var chunk__33332 = null;
var count__33333 = (0);
var i__33334 = (0);
while(true){
if((i__33334 < count__33333)){
var prov = cljs.core._nth.call(null,chunk__33332,i__33334);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33335_33343 = cljs.core.seq.call(null,requires);
var chunk__33336_33344 = null;
var count__33337_33345 = (0);
var i__33338_33346 = (0);
while(true){
if((i__33338_33346 < count__33337_33345)){
var req_33347 = cljs.core._nth.call(null,chunk__33336_33344,i__33338_33346);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33347,prov);

var G__33348 = seq__33335_33343;
var G__33349 = chunk__33336_33344;
var G__33350 = count__33337_33345;
var G__33351 = (i__33338_33346 + (1));
seq__33335_33343 = G__33348;
chunk__33336_33344 = G__33349;
count__33337_33345 = G__33350;
i__33338_33346 = G__33351;
continue;
} else {
var temp__6503__auto___33352 = cljs.core.seq.call(null,seq__33335_33343);
if(temp__6503__auto___33352){
var seq__33335_33353__$1 = temp__6503__auto___33352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33335_33353__$1)){
var c__27682__auto___33354 = cljs.core.chunk_first.call(null,seq__33335_33353__$1);
var G__33355 = cljs.core.chunk_rest.call(null,seq__33335_33353__$1);
var G__33356 = c__27682__auto___33354;
var G__33357 = cljs.core.count.call(null,c__27682__auto___33354);
var G__33358 = (0);
seq__33335_33343 = G__33355;
chunk__33336_33344 = G__33356;
count__33337_33345 = G__33357;
i__33338_33346 = G__33358;
continue;
} else {
var req_33359 = cljs.core.first.call(null,seq__33335_33353__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33359,prov);

var G__33360 = cljs.core.next.call(null,seq__33335_33353__$1);
var G__33361 = null;
var G__33362 = (0);
var G__33363 = (0);
seq__33335_33343 = G__33360;
chunk__33336_33344 = G__33361;
count__33337_33345 = G__33362;
i__33338_33346 = G__33363;
continue;
}
} else {
}
}
break;
}

var G__33364 = seq__33331;
var G__33365 = chunk__33332;
var G__33366 = count__33333;
var G__33367 = (i__33334 + (1));
seq__33331 = G__33364;
chunk__33332 = G__33365;
count__33333 = G__33366;
i__33334 = G__33367;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__33331);
if(temp__6503__auto__){
var seq__33331__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33331__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__33331__$1);
var G__33368 = cljs.core.chunk_rest.call(null,seq__33331__$1);
var G__33369 = c__27682__auto__;
var G__33370 = cljs.core.count.call(null,c__27682__auto__);
var G__33371 = (0);
seq__33331 = G__33368;
chunk__33332 = G__33369;
count__33333 = G__33370;
i__33334 = G__33371;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33331__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33339_33372 = cljs.core.seq.call(null,requires);
var chunk__33340_33373 = null;
var count__33341_33374 = (0);
var i__33342_33375 = (0);
while(true){
if((i__33342_33375 < count__33341_33374)){
var req_33376 = cljs.core._nth.call(null,chunk__33340_33373,i__33342_33375);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33376,prov);

var G__33377 = seq__33339_33372;
var G__33378 = chunk__33340_33373;
var G__33379 = count__33341_33374;
var G__33380 = (i__33342_33375 + (1));
seq__33339_33372 = G__33377;
chunk__33340_33373 = G__33378;
count__33341_33374 = G__33379;
i__33342_33375 = G__33380;
continue;
} else {
var temp__6503__auto___33381__$1 = cljs.core.seq.call(null,seq__33339_33372);
if(temp__6503__auto___33381__$1){
var seq__33339_33382__$1 = temp__6503__auto___33381__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33339_33382__$1)){
var c__27682__auto___33383 = cljs.core.chunk_first.call(null,seq__33339_33382__$1);
var G__33384 = cljs.core.chunk_rest.call(null,seq__33339_33382__$1);
var G__33385 = c__27682__auto___33383;
var G__33386 = cljs.core.count.call(null,c__27682__auto___33383);
var G__33387 = (0);
seq__33339_33372 = G__33384;
chunk__33340_33373 = G__33385;
count__33341_33374 = G__33386;
i__33342_33375 = G__33387;
continue;
} else {
var req_33388 = cljs.core.first.call(null,seq__33339_33382__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33388,prov);

var G__33389 = cljs.core.next.call(null,seq__33339_33382__$1);
var G__33390 = null;
var G__33391 = (0);
var G__33392 = (0);
seq__33339_33372 = G__33389;
chunk__33340_33373 = G__33390;
count__33341_33374 = G__33391;
i__33342_33375 = G__33392;
continue;
}
} else {
}
}
break;
}

var G__33393 = cljs.core.next.call(null,seq__33331__$1);
var G__33394 = null;
var G__33395 = (0);
var G__33396 = (0);
seq__33331 = G__33393;
chunk__33332 = G__33394;
count__33333 = G__33395;
i__33334 = G__33396;
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
var seq__33401_33405 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33402_33406 = null;
var count__33403_33407 = (0);
var i__33404_33408 = (0);
while(true){
if((i__33404_33408 < count__33403_33407)){
var ns_33409 = cljs.core._nth.call(null,chunk__33402_33406,i__33404_33408);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33409);

var G__33410 = seq__33401_33405;
var G__33411 = chunk__33402_33406;
var G__33412 = count__33403_33407;
var G__33413 = (i__33404_33408 + (1));
seq__33401_33405 = G__33410;
chunk__33402_33406 = G__33411;
count__33403_33407 = G__33412;
i__33404_33408 = G__33413;
continue;
} else {
var temp__6503__auto___33414 = cljs.core.seq.call(null,seq__33401_33405);
if(temp__6503__auto___33414){
var seq__33401_33415__$1 = temp__6503__auto___33414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33401_33415__$1)){
var c__27682__auto___33416 = cljs.core.chunk_first.call(null,seq__33401_33415__$1);
var G__33417 = cljs.core.chunk_rest.call(null,seq__33401_33415__$1);
var G__33418 = c__27682__auto___33416;
var G__33419 = cljs.core.count.call(null,c__27682__auto___33416);
var G__33420 = (0);
seq__33401_33405 = G__33417;
chunk__33402_33406 = G__33418;
count__33403_33407 = G__33419;
i__33404_33408 = G__33420;
continue;
} else {
var ns_33421 = cljs.core.first.call(null,seq__33401_33415__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33421);

var G__33422 = cljs.core.next.call(null,seq__33401_33415__$1);
var G__33423 = null;
var G__33424 = (0);
var G__33425 = (0);
seq__33401_33405 = G__33422;
chunk__33402_33406 = G__33423;
count__33403_33407 = G__33424;
i__33404_33408 = G__33425;
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
var G__33426__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33427__i = 0, G__33427__a = new Array(arguments.length -  0);
while (G__33427__i < G__33427__a.length) {G__33427__a[G__33427__i] = arguments[G__33427__i + 0]; ++G__33427__i;}
  args = new cljs.core.IndexedSeq(G__33427__a,0);
} 
return G__33426__delegate.call(this,args);};
G__33426.cljs$lang$maxFixedArity = 0;
G__33426.cljs$lang$applyTo = (function (arglist__33428){
var args = cljs.core.seq(arglist__33428);
return G__33426__delegate(args);
});
G__33426.cljs$core$IFn$_invoke$arity$variadic = G__33426__delegate;
return G__33426;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33430 = cljs.core._EQ_;
var expr__33431 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33430.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33431))){
var path_parts = ((function (pred__33430,expr__33431){
return (function (p1__33429_SHARP_){
return clojure.string.split.call(null,p1__33429_SHARP_,/[\/\\]/);
});})(pred__33430,expr__33431))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33430,expr__33431){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33433){if((e33433 instanceof Error)){
var e = e33433;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33433;

}
}})());
});
;})(path_parts,sep,root,pred__33430,expr__33431))
} else {
if(cljs.core.truth_(pred__33430.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33431))){
return ((function (pred__33430,expr__33431){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33430,expr__33431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33430,expr__33431))
);

return deferred.addErrback(((function (deferred,pred__33430,expr__33431){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33430,expr__33431))
);
});
;})(pred__33430,expr__33431))
} else {
return ((function (pred__33430,expr__33431){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33430,expr__33431))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33434,callback){
var map__33437 = p__33434;
var map__33437__$1 = ((((!((map__33437 == null)))?((((map__33437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33437):map__33437);
var file_msg = map__33437__$1;
var request_url = cljs.core.get.call(null,map__33437__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33437,map__33437__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33437,map__33437__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30383__auto__){
return (function (){
var f__30384__auto__ = (function (){var switch__30316__auto__ = ((function (c__30383__auto__){
return (function (state_33461){
var state_val_33462 = (state_33461[(1)]);
if((state_val_33462 === (7))){
var inst_33457 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33463_33483 = state_33461__$1;
(statearr_33463_33483[(2)] = inst_33457);

(statearr_33463_33483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (1))){
var state_33461__$1 = state_33461;
var statearr_33464_33484 = state_33461__$1;
(statearr_33464_33484[(2)] = null);

(statearr_33464_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (4))){
var inst_33441 = (state_33461[(7)]);
var inst_33441__$1 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33465 = state_33461;
(statearr_33465[(7)] = inst_33441__$1);

return statearr_33465;
})();
if(cljs.core.truth_(inst_33441__$1)){
var statearr_33466_33485 = state_33461__$1;
(statearr_33466_33485[(1)] = (5));

} else {
var statearr_33467_33486 = state_33461__$1;
(statearr_33467_33486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (6))){
var state_33461__$1 = state_33461;
var statearr_33468_33487 = state_33461__$1;
(statearr_33468_33487[(2)] = null);

(statearr_33468_33487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (3))){
var inst_33459 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33461__$1,inst_33459);
} else {
if((state_val_33462 === (2))){
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33462 === (11))){
var inst_33453 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33469 = state_33461;
(statearr_33469[(8)] = inst_33453);

return statearr_33469;
})();
var statearr_33470_33488 = state_33461__$1;
(statearr_33470_33488[(2)] = null);

(statearr_33470_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (9))){
var inst_33447 = (state_33461[(9)]);
var inst_33445 = (state_33461[(10)]);
var inst_33449 = inst_33447.call(null,inst_33445);
var state_33461__$1 = state_33461;
var statearr_33471_33489 = state_33461__$1;
(statearr_33471_33489[(2)] = inst_33449);

(statearr_33471_33489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (5))){
var inst_33441 = (state_33461[(7)]);
var inst_33443 = figwheel.client.file_reloading.blocking_load.call(null,inst_33441);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(8),inst_33443);
} else {
if((state_val_33462 === (10))){
var inst_33445 = (state_33461[(10)]);
var inst_33451 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33445);
var state_33461__$1 = state_33461;
var statearr_33472_33490 = state_33461__$1;
(statearr_33472_33490[(2)] = inst_33451);

(statearr_33472_33490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (8))){
var inst_33447 = (state_33461[(9)]);
var inst_33441 = (state_33461[(7)]);
var inst_33445 = (state_33461[(2)]);
var inst_33446 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33447__$1 = cljs.core.get.call(null,inst_33446,inst_33441);
var state_33461__$1 = (function (){var statearr_33473 = state_33461;
(statearr_33473[(9)] = inst_33447__$1);

(statearr_33473[(10)] = inst_33445);

return statearr_33473;
})();
if(cljs.core.truth_(inst_33447__$1)){
var statearr_33474_33491 = state_33461__$1;
(statearr_33474_33491[(1)] = (9));

} else {
var statearr_33475_33492 = state_33461__$1;
(statearr_33475_33492[(1)] = (10));

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
});})(c__30383__auto__))
;
return ((function (switch__30316__auto__,c__30383__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30317__auto__ = null;
var figwheel$client$file_reloading$state_machine__30317__auto____0 = (function (){
var statearr_33479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33479[(0)] = figwheel$client$file_reloading$state_machine__30317__auto__);

(statearr_33479[(1)] = (1));

return statearr_33479;
});
var figwheel$client$file_reloading$state_machine__30317__auto____1 = (function (state_33461){
while(true){
var ret_value__30318__auto__ = (function (){try{while(true){
var result__30319__auto__ = switch__30316__auto__.call(null,state_33461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30319__auto__;
}
break;
}
}catch (e33480){if((e33480 instanceof Object)){
var ex__30320__auto__ = e33480;
var statearr_33481_33493 = state_33461;
(statearr_33481_33493[(5)] = ex__30320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33494 = state_33461;
state_33461 = G__33494;
continue;
} else {
return ret_value__30318__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30317__auto__ = function(state_33461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30317__auto____1.call(this,state_33461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30317__auto____0;
figwheel$client$file_reloading$state_machine__30317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30317__auto____1;
return figwheel$client$file_reloading$state_machine__30317__auto__;
})()
;})(switch__30316__auto__,c__30383__auto__))
})();
var state__30385__auto__ = (function (){var statearr_33482 = f__30384__auto__.call(null);
(statearr_33482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30383__auto__);

return statearr_33482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30385__auto__);
});})(c__30383__auto__))
);

return c__30383__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33495,callback){
var map__33498 = p__33495;
var map__33498__$1 = ((((!((map__33498 == null)))?((((map__33498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33498):map__33498);
var file_msg = map__33498__$1;
var namespace = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33498,map__33498__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33498,map__33498__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33500){
var map__33503 = p__33500;
var map__33503__$1 = ((((!((map__33503 == null)))?((((map__33503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33503):map__33503);
var file_msg = map__33503__$1;
var namespace = cljs.core.get.call(null,map__33503__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33505,callback){
var map__33508 = p__33505;
var map__33508__$1 = ((((!((map__33508 == null)))?((((map__33508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33508):map__33508);
var file_msg = map__33508__$1;
var request_url = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30383__auto___33612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30383__auto___33612,out){
return (function (){
var f__30384__auto__ = (function (){var switch__30316__auto__ = ((function (c__30383__auto___33612,out){
return (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (1))){
var inst_33568 = cljs.core.seq.call(null,files);
var inst_33569 = cljs.core.first.call(null,inst_33568);
var inst_33570 = cljs.core.next.call(null,inst_33568);
var inst_33571 = files;
var state_33594__$1 = (function (){var statearr_33596 = state_33594;
(statearr_33596[(7)] = inst_33570);

(statearr_33596[(8)] = inst_33571);

(statearr_33596[(9)] = inst_33569);

return statearr_33596;
})();
var statearr_33597_33613 = state_33594__$1;
(statearr_33597_33613[(2)] = null);

(statearr_33597_33613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (2))){
var inst_33571 = (state_33594[(8)]);
var inst_33577 = (state_33594[(10)]);
var inst_33576 = cljs.core.seq.call(null,inst_33571);
var inst_33577__$1 = cljs.core.first.call(null,inst_33576);
var inst_33578 = cljs.core.next.call(null,inst_33576);
var inst_33579 = (inst_33577__$1 == null);
var inst_33580 = cljs.core.not.call(null,inst_33579);
var state_33594__$1 = (function (){var statearr_33598 = state_33594;
(statearr_33598[(11)] = inst_33578);

(statearr_33598[(10)] = inst_33577__$1);

return statearr_33598;
})();
if(inst_33580){
var statearr_33599_33614 = state_33594__$1;
(statearr_33599_33614[(1)] = (4));

} else {
var statearr_33600_33615 = state_33594__$1;
(statearr_33600_33615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (3))){
var inst_33592 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33594__$1,inst_33592);
} else {
if((state_val_33595 === (4))){
var inst_33577 = (state_33594[(10)]);
var inst_33582 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33577);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33594__$1,(7),inst_33582);
} else {
if((state_val_33595 === (5))){
var inst_33588 = cljs.core.async.close_BANG_.call(null,out);
var state_33594__$1 = state_33594;
var statearr_33601_33616 = state_33594__$1;
(statearr_33601_33616[(2)] = inst_33588);

(statearr_33601_33616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (6))){
var inst_33590 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33602_33617 = state_33594__$1;
(statearr_33602_33617[(2)] = inst_33590);

(statearr_33602_33617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (7))){
var inst_33578 = (state_33594[(11)]);
var inst_33584 = (state_33594[(2)]);
var inst_33585 = cljs.core.async.put_BANG_.call(null,out,inst_33584);
var inst_33571 = inst_33578;
var state_33594__$1 = (function (){var statearr_33603 = state_33594;
(statearr_33603[(8)] = inst_33571);

(statearr_33603[(12)] = inst_33585);

return statearr_33603;
})();
var statearr_33604_33618 = state_33594__$1;
(statearr_33604_33618[(2)] = null);

(statearr_33604_33618[(1)] = (2));


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
});})(c__30383__auto___33612,out))
;
return ((function (switch__30316__auto__,c__30383__auto___33612,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto____0 = (function (){
var statearr_33608 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33608[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto__);

(statearr_33608[(1)] = (1));

return statearr_33608;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto____1 = (function (state_33594){
while(true){
var ret_value__30318__auto__ = (function (){try{while(true){
var result__30319__auto__ = switch__30316__auto__.call(null,state_33594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30319__auto__;
}
break;
}
}catch (e33609){if((e33609 instanceof Object)){
var ex__30320__auto__ = e33609;
var statearr_33610_33619 = state_33594;
(statearr_33610_33619[(5)] = ex__30320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33620 = state_33594;
state_33594 = G__33620;
continue;
} else {
return ret_value__30318__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30317__auto__;
})()
;})(switch__30316__auto__,c__30383__auto___33612,out))
})();
var state__30385__auto__ = (function (){var statearr_33611 = f__30384__auto__.call(null);
(statearr_33611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30383__auto___33612);

return statearr_33611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30385__auto__);
});})(c__30383__auto___33612,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33621,opts){
var map__33625 = p__33621;
var map__33625__$1 = ((((!((map__33625 == null)))?((((map__33625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33625):map__33625);
var eval_body__$1 = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33625__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33627){var e = e33627;
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
return (function (p1__33628_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33628_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33637){
var vec__33638 = p__33637;
var k = cljs.core.nth.call(null,vec__33638,(0),null);
var v = cljs.core.nth.call(null,vec__33638,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33641){
var vec__33642 = p__33641;
var k = cljs.core.nth.call(null,vec__33642,(0),null);
var v = cljs.core.nth.call(null,vec__33642,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33648,p__33649){
var map__33896 = p__33648;
var map__33896__$1 = ((((!((map__33896 == null)))?((((map__33896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33896):map__33896);
var opts = map__33896__$1;
var before_jsload = cljs.core.get.call(null,map__33896__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33896__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33896__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33897 = p__33649;
var map__33897__$1 = ((((!((map__33897 == null)))?((((map__33897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33897):map__33897);
var msg = map__33897__$1;
var files = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33897__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30384__auto__ = (function (){var switch__30316__auto__ = ((function (c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34050){
var state_val_34051 = (state_34050[(1)]);
if((state_val_34051 === (7))){
var inst_33913 = (state_34050[(7)]);
var inst_33914 = (state_34050[(8)]);
var inst_33911 = (state_34050[(9)]);
var inst_33912 = (state_34050[(10)]);
var inst_33919 = cljs.core._nth.call(null,inst_33912,inst_33914);
var inst_33920 = figwheel.client.file_reloading.eval_body.call(null,inst_33919,opts);
var inst_33921 = (inst_33914 + (1));
var tmp34052 = inst_33913;
var tmp34053 = inst_33911;
var tmp34054 = inst_33912;
var inst_33911__$1 = tmp34053;
var inst_33912__$1 = tmp34054;
var inst_33913__$1 = tmp34052;
var inst_33914__$1 = inst_33921;
var state_34050__$1 = (function (){var statearr_34055 = state_34050;
(statearr_34055[(11)] = inst_33920);

(statearr_34055[(7)] = inst_33913__$1);

(statearr_34055[(8)] = inst_33914__$1);

(statearr_34055[(9)] = inst_33911__$1);

(statearr_34055[(10)] = inst_33912__$1);

return statearr_34055;
})();
var statearr_34056_34142 = state_34050__$1;
(statearr_34056_34142[(2)] = null);

(statearr_34056_34142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (20))){
var inst_33954 = (state_34050[(12)]);
var inst_33962 = figwheel.client.file_reloading.sort_files.call(null,inst_33954);
var state_34050__$1 = state_34050;
var statearr_34057_34143 = state_34050__$1;
(statearr_34057_34143[(2)] = inst_33962);

(statearr_34057_34143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (27))){
var state_34050__$1 = state_34050;
var statearr_34058_34144 = state_34050__$1;
(statearr_34058_34144[(2)] = null);

(statearr_34058_34144[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (1))){
var inst_33903 = (state_34050[(13)]);
var inst_33900 = before_jsload.call(null,files);
var inst_33901 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33902 = (function (){return ((function (inst_33903,inst_33900,inst_33901,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33645_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33645_SHARP_);
});
;})(inst_33903,inst_33900,inst_33901,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33903__$1 = cljs.core.filter.call(null,inst_33902,files);
var inst_33904 = cljs.core.not_empty.call(null,inst_33903__$1);
var state_34050__$1 = (function (){var statearr_34059 = state_34050;
(statearr_34059[(14)] = inst_33901);

(statearr_34059[(15)] = inst_33900);

(statearr_34059[(13)] = inst_33903__$1);

return statearr_34059;
})();
if(cljs.core.truth_(inst_33904)){
var statearr_34060_34145 = state_34050__$1;
(statearr_34060_34145[(1)] = (2));

} else {
var statearr_34061_34146 = state_34050__$1;
(statearr_34061_34146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (24))){
var state_34050__$1 = state_34050;
var statearr_34062_34147 = state_34050__$1;
(statearr_34062_34147[(2)] = null);

(statearr_34062_34147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (39))){
var inst_34004 = (state_34050[(16)]);
var state_34050__$1 = state_34050;
var statearr_34063_34148 = state_34050__$1;
(statearr_34063_34148[(2)] = inst_34004);

(statearr_34063_34148[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (46))){
var inst_34045 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34064_34149 = state_34050__$1;
(statearr_34064_34149[(2)] = inst_34045);

(statearr_34064_34149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (4))){
var inst_33948 = (state_34050[(2)]);
var inst_33949 = cljs.core.List.EMPTY;
var inst_33950 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33949);
var inst_33951 = (function (){return ((function (inst_33948,inst_33949,inst_33950,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33646_SHARP_){
var and__26767__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33646_SHARP_);
if(cljs.core.truth_(and__26767__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33646_SHARP_));
} else {
return and__26767__auto__;
}
});
;})(inst_33948,inst_33949,inst_33950,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33952 = cljs.core.filter.call(null,inst_33951,files);
var inst_33953 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33954 = cljs.core.concat.call(null,inst_33952,inst_33953);
var state_34050__$1 = (function (){var statearr_34065 = state_34050;
(statearr_34065[(17)] = inst_33950);

(statearr_34065[(18)] = inst_33948);

(statearr_34065[(12)] = inst_33954);

return statearr_34065;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34066_34150 = state_34050__$1;
(statearr_34066_34150[(1)] = (16));

} else {
var statearr_34067_34151 = state_34050__$1;
(statearr_34067_34151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (15))){
var inst_33938 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34068_34152 = state_34050__$1;
(statearr_34068_34152[(2)] = inst_33938);

(statearr_34068_34152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (21))){
var inst_33964 = (state_34050[(19)]);
var inst_33964__$1 = (state_34050[(2)]);
var inst_33965 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33964__$1);
var state_34050__$1 = (function (){var statearr_34069 = state_34050;
(statearr_34069[(19)] = inst_33964__$1);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34050__$1,(22),inst_33965);
} else {
if((state_val_34051 === (31))){
var inst_34048 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34050__$1,inst_34048);
} else {
if((state_val_34051 === (32))){
var inst_34004 = (state_34050[(16)]);
var inst_34009 = inst_34004.cljs$lang$protocol_mask$partition0$;
var inst_34010 = (inst_34009 & (64));
var inst_34011 = inst_34004.cljs$core$ISeq$;
var inst_34012 = (inst_34010) || (inst_34011);
var state_34050__$1 = state_34050;
if(cljs.core.truth_(inst_34012)){
var statearr_34070_34153 = state_34050__$1;
(statearr_34070_34153[(1)] = (35));

} else {
var statearr_34071_34154 = state_34050__$1;
(statearr_34071_34154[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (40))){
var inst_34025 = (state_34050[(20)]);
var inst_34024 = (state_34050[(2)]);
var inst_34025__$1 = cljs.core.get.call(null,inst_34024,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34026 = cljs.core.get.call(null,inst_34024,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34027 = cljs.core.not_empty.call(null,inst_34025__$1);
var state_34050__$1 = (function (){var statearr_34072 = state_34050;
(statearr_34072[(20)] = inst_34025__$1);

(statearr_34072[(21)] = inst_34026);

return statearr_34072;
})();
if(cljs.core.truth_(inst_34027)){
var statearr_34073_34155 = state_34050__$1;
(statearr_34073_34155[(1)] = (41));

} else {
var statearr_34074_34156 = state_34050__$1;
(statearr_34074_34156[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (33))){
var state_34050__$1 = state_34050;
var statearr_34075_34157 = state_34050__$1;
(statearr_34075_34157[(2)] = false);

(statearr_34075_34157[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (13))){
var inst_33924 = (state_34050[(22)]);
var inst_33928 = cljs.core.chunk_first.call(null,inst_33924);
var inst_33929 = cljs.core.chunk_rest.call(null,inst_33924);
var inst_33930 = cljs.core.count.call(null,inst_33928);
var inst_33911 = inst_33929;
var inst_33912 = inst_33928;
var inst_33913 = inst_33930;
var inst_33914 = (0);
var state_34050__$1 = (function (){var statearr_34076 = state_34050;
(statearr_34076[(7)] = inst_33913);

(statearr_34076[(8)] = inst_33914);

(statearr_34076[(9)] = inst_33911);

(statearr_34076[(10)] = inst_33912);

return statearr_34076;
})();
var statearr_34077_34158 = state_34050__$1;
(statearr_34077_34158[(2)] = null);

(statearr_34077_34158[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (22))){
var inst_33964 = (state_34050[(19)]);
var inst_33972 = (state_34050[(23)]);
var inst_33967 = (state_34050[(24)]);
var inst_33968 = (state_34050[(25)]);
var inst_33967__$1 = (state_34050[(2)]);
var inst_33968__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33967__$1);
var inst_33969 = (function (){var all_files = inst_33964;
var res_SINGLEQUOTE_ = inst_33967__$1;
var res = inst_33968__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33964,inst_33972,inst_33967,inst_33968,inst_33967__$1,inst_33968__$1,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33647_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33647_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33964,inst_33972,inst_33967,inst_33968,inst_33967__$1,inst_33968__$1,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33970 = cljs.core.filter.call(null,inst_33969,inst_33967__$1);
var inst_33971 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33972__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33971);
var inst_33973 = cljs.core.not_empty.call(null,inst_33972__$1);
var state_34050__$1 = (function (){var statearr_34078 = state_34050;
(statearr_34078[(23)] = inst_33972__$1);

(statearr_34078[(24)] = inst_33967__$1);

(statearr_34078[(26)] = inst_33970);

(statearr_34078[(25)] = inst_33968__$1);

return statearr_34078;
})();
if(cljs.core.truth_(inst_33973)){
var statearr_34079_34159 = state_34050__$1;
(statearr_34079_34159[(1)] = (23));

} else {
var statearr_34080_34160 = state_34050__$1;
(statearr_34080_34160[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (36))){
var state_34050__$1 = state_34050;
var statearr_34081_34161 = state_34050__$1;
(statearr_34081_34161[(2)] = false);

(statearr_34081_34161[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (41))){
var inst_34025 = (state_34050[(20)]);
var inst_34029 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34030 = cljs.core.map.call(null,inst_34029,inst_34025);
var inst_34031 = cljs.core.pr_str.call(null,inst_34030);
var inst_34032 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34031)].join('');
var inst_34033 = figwheel.client.utils.log.call(null,inst_34032);
var state_34050__$1 = state_34050;
var statearr_34082_34162 = state_34050__$1;
(statearr_34082_34162[(2)] = inst_34033);

(statearr_34082_34162[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (43))){
var inst_34026 = (state_34050[(21)]);
var inst_34036 = (state_34050[(2)]);
var inst_34037 = cljs.core.not_empty.call(null,inst_34026);
var state_34050__$1 = (function (){var statearr_34083 = state_34050;
(statearr_34083[(27)] = inst_34036);

return statearr_34083;
})();
if(cljs.core.truth_(inst_34037)){
var statearr_34084_34163 = state_34050__$1;
(statearr_34084_34163[(1)] = (44));

} else {
var statearr_34085_34164 = state_34050__$1;
(statearr_34085_34164[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (29))){
var inst_34004 = (state_34050[(16)]);
var inst_33964 = (state_34050[(19)]);
var inst_33972 = (state_34050[(23)]);
var inst_33967 = (state_34050[(24)]);
var inst_33970 = (state_34050[(26)]);
var inst_33968 = (state_34050[(25)]);
var inst_34000 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34003 = (function (){var all_files = inst_33964;
var res_SINGLEQUOTE_ = inst_33967;
var res = inst_33968;
var files_not_loaded = inst_33970;
var dependencies_that_loaded = inst_33972;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34004,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_34000,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34002){
var map__34086 = p__34002;
var map__34086__$1 = ((((!((map__34086 == null)))?((((map__34086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34086):map__34086);
var namespace = cljs.core.get.call(null,map__34086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34004,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_34000,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34004__$1 = cljs.core.group_by.call(null,inst_34003,inst_33970);
var inst_34006 = (inst_34004__$1 == null);
var inst_34007 = cljs.core.not.call(null,inst_34006);
var state_34050__$1 = (function (){var statearr_34088 = state_34050;
(statearr_34088[(28)] = inst_34000);

(statearr_34088[(16)] = inst_34004__$1);

return statearr_34088;
})();
if(inst_34007){
var statearr_34089_34165 = state_34050__$1;
(statearr_34089_34165[(1)] = (32));

} else {
var statearr_34090_34166 = state_34050__$1;
(statearr_34090_34166[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (44))){
var inst_34026 = (state_34050[(21)]);
var inst_34039 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34026);
var inst_34040 = cljs.core.pr_str.call(null,inst_34039);
var inst_34041 = [cljs.core.str("not required: "),cljs.core.str(inst_34040)].join('');
var inst_34042 = figwheel.client.utils.log.call(null,inst_34041);
var state_34050__$1 = state_34050;
var statearr_34091_34167 = state_34050__$1;
(statearr_34091_34167[(2)] = inst_34042);

(statearr_34091_34167[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (6))){
var inst_33945 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34092_34168 = state_34050__$1;
(statearr_34092_34168[(2)] = inst_33945);

(statearr_34092_34168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (28))){
var inst_33970 = (state_34050[(26)]);
var inst_33997 = (state_34050[(2)]);
var inst_33998 = cljs.core.not_empty.call(null,inst_33970);
var state_34050__$1 = (function (){var statearr_34093 = state_34050;
(statearr_34093[(29)] = inst_33997);

return statearr_34093;
})();
if(cljs.core.truth_(inst_33998)){
var statearr_34094_34169 = state_34050__$1;
(statearr_34094_34169[(1)] = (29));

} else {
var statearr_34095_34170 = state_34050__$1;
(statearr_34095_34170[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (25))){
var inst_33968 = (state_34050[(25)]);
var inst_33984 = (state_34050[(2)]);
var inst_33985 = cljs.core.not_empty.call(null,inst_33968);
var state_34050__$1 = (function (){var statearr_34096 = state_34050;
(statearr_34096[(30)] = inst_33984);

return statearr_34096;
})();
if(cljs.core.truth_(inst_33985)){
var statearr_34097_34171 = state_34050__$1;
(statearr_34097_34171[(1)] = (26));

} else {
var statearr_34098_34172 = state_34050__$1;
(statearr_34098_34172[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (34))){
var inst_34019 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
if(cljs.core.truth_(inst_34019)){
var statearr_34099_34173 = state_34050__$1;
(statearr_34099_34173[(1)] = (38));

} else {
var statearr_34100_34174 = state_34050__$1;
(statearr_34100_34174[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (17))){
var state_34050__$1 = state_34050;
var statearr_34101_34175 = state_34050__$1;
(statearr_34101_34175[(2)] = recompile_dependents);

(statearr_34101_34175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (3))){
var state_34050__$1 = state_34050;
var statearr_34102_34176 = state_34050__$1;
(statearr_34102_34176[(2)] = null);

(statearr_34102_34176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (12))){
var inst_33941 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34103_34177 = state_34050__$1;
(statearr_34103_34177[(2)] = inst_33941);

(statearr_34103_34177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (2))){
var inst_33903 = (state_34050[(13)]);
var inst_33910 = cljs.core.seq.call(null,inst_33903);
var inst_33911 = inst_33910;
var inst_33912 = null;
var inst_33913 = (0);
var inst_33914 = (0);
var state_34050__$1 = (function (){var statearr_34104 = state_34050;
(statearr_34104[(7)] = inst_33913);

(statearr_34104[(8)] = inst_33914);

(statearr_34104[(9)] = inst_33911);

(statearr_34104[(10)] = inst_33912);

return statearr_34104;
})();
var statearr_34105_34178 = state_34050__$1;
(statearr_34105_34178[(2)] = null);

(statearr_34105_34178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (23))){
var inst_33964 = (state_34050[(19)]);
var inst_33972 = (state_34050[(23)]);
var inst_33967 = (state_34050[(24)]);
var inst_33970 = (state_34050[(26)]);
var inst_33968 = (state_34050[(25)]);
var inst_33975 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33977 = (function (){var all_files = inst_33964;
var res_SINGLEQUOTE_ = inst_33967;
var res = inst_33968;
var files_not_loaded = inst_33970;
var dependencies_that_loaded = inst_33972;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_33975,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33976){
var map__34106 = p__33976;
var map__34106__$1 = ((((!((map__34106 == null)))?((((map__34106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34106):map__34106);
var request_url = cljs.core.get.call(null,map__34106__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_33975,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33978 = cljs.core.reverse.call(null,inst_33972);
var inst_33979 = cljs.core.map.call(null,inst_33977,inst_33978);
var inst_33980 = cljs.core.pr_str.call(null,inst_33979);
var inst_33981 = figwheel.client.utils.log.call(null,inst_33980);
var state_34050__$1 = (function (){var statearr_34108 = state_34050;
(statearr_34108[(31)] = inst_33975);

return statearr_34108;
})();
var statearr_34109_34179 = state_34050__$1;
(statearr_34109_34179[(2)] = inst_33981);

(statearr_34109_34179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (35))){
var state_34050__$1 = state_34050;
var statearr_34110_34180 = state_34050__$1;
(statearr_34110_34180[(2)] = true);

(statearr_34110_34180[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (19))){
var inst_33954 = (state_34050[(12)]);
var inst_33960 = figwheel.client.file_reloading.expand_files.call(null,inst_33954);
var state_34050__$1 = state_34050;
var statearr_34111_34181 = state_34050__$1;
(statearr_34111_34181[(2)] = inst_33960);

(statearr_34111_34181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (11))){
var state_34050__$1 = state_34050;
var statearr_34112_34182 = state_34050__$1;
(statearr_34112_34182[(2)] = null);

(statearr_34112_34182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (9))){
var inst_33943 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34113_34183 = state_34050__$1;
(statearr_34113_34183[(2)] = inst_33943);

(statearr_34113_34183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (5))){
var inst_33913 = (state_34050[(7)]);
var inst_33914 = (state_34050[(8)]);
var inst_33916 = (inst_33914 < inst_33913);
var inst_33917 = inst_33916;
var state_34050__$1 = state_34050;
if(cljs.core.truth_(inst_33917)){
var statearr_34114_34184 = state_34050__$1;
(statearr_34114_34184[(1)] = (7));

} else {
var statearr_34115_34185 = state_34050__$1;
(statearr_34115_34185[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (14))){
var inst_33924 = (state_34050[(22)]);
var inst_33933 = cljs.core.first.call(null,inst_33924);
var inst_33934 = figwheel.client.file_reloading.eval_body.call(null,inst_33933,opts);
var inst_33935 = cljs.core.next.call(null,inst_33924);
var inst_33911 = inst_33935;
var inst_33912 = null;
var inst_33913 = (0);
var inst_33914 = (0);
var state_34050__$1 = (function (){var statearr_34116 = state_34050;
(statearr_34116[(7)] = inst_33913);

(statearr_34116[(32)] = inst_33934);

(statearr_34116[(8)] = inst_33914);

(statearr_34116[(9)] = inst_33911);

(statearr_34116[(10)] = inst_33912);

return statearr_34116;
})();
var statearr_34117_34186 = state_34050__$1;
(statearr_34117_34186[(2)] = null);

(statearr_34117_34186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (45))){
var state_34050__$1 = state_34050;
var statearr_34118_34187 = state_34050__$1;
(statearr_34118_34187[(2)] = null);

(statearr_34118_34187[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (26))){
var inst_33964 = (state_34050[(19)]);
var inst_33972 = (state_34050[(23)]);
var inst_33967 = (state_34050[(24)]);
var inst_33970 = (state_34050[(26)]);
var inst_33968 = (state_34050[(25)]);
var inst_33987 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33989 = (function (){var all_files = inst_33964;
var res_SINGLEQUOTE_ = inst_33967;
var res = inst_33968;
var files_not_loaded = inst_33970;
var dependencies_that_loaded = inst_33972;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_33987,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33988){
var map__34119 = p__33988;
var map__34119__$1 = ((((!((map__34119 == null)))?((((map__34119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34119):map__34119);
var namespace = cljs.core.get.call(null,map__34119__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34119__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_33987,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33990 = cljs.core.map.call(null,inst_33989,inst_33968);
var inst_33991 = cljs.core.pr_str.call(null,inst_33990);
var inst_33992 = figwheel.client.utils.log.call(null,inst_33991);
var inst_33993 = (function (){var all_files = inst_33964;
var res_SINGLEQUOTE_ = inst_33967;
var res = inst_33968;
var files_not_loaded = inst_33970;
var dependencies_that_loaded = inst_33972;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_33987,inst_33989,inst_33990,inst_33991,inst_33992,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33964,inst_33972,inst_33967,inst_33970,inst_33968,inst_33987,inst_33989,inst_33990,inst_33991,inst_33992,state_val_34051,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33994 = setTimeout(inst_33993,(10));
var state_34050__$1 = (function (){var statearr_34121 = state_34050;
(statearr_34121[(33)] = inst_33987);

(statearr_34121[(34)] = inst_33992);

return statearr_34121;
})();
var statearr_34122_34188 = state_34050__$1;
(statearr_34122_34188[(2)] = inst_33994);

(statearr_34122_34188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (16))){
var state_34050__$1 = state_34050;
var statearr_34123_34189 = state_34050__$1;
(statearr_34123_34189[(2)] = reload_dependents);

(statearr_34123_34189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (38))){
var inst_34004 = (state_34050[(16)]);
var inst_34021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34004);
var state_34050__$1 = state_34050;
var statearr_34124_34190 = state_34050__$1;
(statearr_34124_34190[(2)] = inst_34021);

(statearr_34124_34190[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (30))){
var state_34050__$1 = state_34050;
var statearr_34125_34191 = state_34050__$1;
(statearr_34125_34191[(2)] = null);

(statearr_34125_34191[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (10))){
var inst_33924 = (state_34050[(22)]);
var inst_33926 = cljs.core.chunked_seq_QMARK_.call(null,inst_33924);
var state_34050__$1 = state_34050;
if(inst_33926){
var statearr_34126_34192 = state_34050__$1;
(statearr_34126_34192[(1)] = (13));

} else {
var statearr_34127_34193 = state_34050__$1;
(statearr_34127_34193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (18))){
var inst_33958 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
if(cljs.core.truth_(inst_33958)){
var statearr_34128_34194 = state_34050__$1;
(statearr_34128_34194[(1)] = (19));

} else {
var statearr_34129_34195 = state_34050__$1;
(statearr_34129_34195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (42))){
var state_34050__$1 = state_34050;
var statearr_34130_34196 = state_34050__$1;
(statearr_34130_34196[(2)] = null);

(statearr_34130_34196[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (37))){
var inst_34016 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34131_34197 = state_34050__$1;
(statearr_34131_34197[(2)] = inst_34016);

(statearr_34131_34197[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (8))){
var inst_33924 = (state_34050[(22)]);
var inst_33911 = (state_34050[(9)]);
var inst_33924__$1 = cljs.core.seq.call(null,inst_33911);
var state_34050__$1 = (function (){var statearr_34132 = state_34050;
(statearr_34132[(22)] = inst_33924__$1);

return statearr_34132;
})();
if(inst_33924__$1){
var statearr_34133_34198 = state_34050__$1;
(statearr_34133_34198[(1)] = (10));

} else {
var statearr_34134_34199 = state_34050__$1;
(statearr_34134_34199[(1)] = (11));

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
});})(c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30316__auto__,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto____0 = (function (){
var statearr_34138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34138[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto__);

(statearr_34138[(1)] = (1));

return statearr_34138;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto____1 = (function (state_34050){
while(true){
var ret_value__30318__auto__ = (function (){try{while(true){
var result__30319__auto__ = switch__30316__auto__.call(null,state_34050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30319__auto__;
}
break;
}
}catch (e34139){if((e34139 instanceof Object)){
var ex__30320__auto__ = e34139;
var statearr_34140_34200 = state_34050;
(statearr_34140_34200[(5)] = ex__30320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34201 = state_34050;
state_34050 = G__34201;
continue;
} else {
return ret_value__30318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto__ = function(state_34050){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto____1.call(this,state_34050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30317__auto__;
})()
;})(switch__30316__auto__,c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30385__auto__ = (function (){var statearr_34141 = f__30384__auto__.call(null);
(statearr_34141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30383__auto__);

return statearr_34141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30385__auto__);
});})(c__30383__auto__,map__33896,map__33896__$1,opts,before_jsload,on_jsload,reload_dependents,map__33897,map__33897__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30383__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34204,link){
var map__34207 = p__34204;
var map__34207__$1 = ((((!((map__34207 == null)))?((((map__34207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34207):map__34207);
var file = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__34207,map__34207__$1,file){
return (function (p1__34202_SHARP_,p2__34203_SHARP_){
if(cljs.core._EQ_.call(null,p1__34202_SHARP_,p2__34203_SHARP_)){
return p1__34202_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__34207,map__34207__$1,file))
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
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34213){
var map__34214 = p__34213;
var map__34214__$1 = ((((!((map__34214 == null)))?((((map__34214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34214):map__34214);
var match_length = cljs.core.get.call(null,map__34214__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34214__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34209_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34209_SHARP_);
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
var args34216 = [];
var len__27958__auto___34219 = arguments.length;
var i__27959__auto___34220 = (0);
while(true){
if((i__27959__auto___34220 < len__27958__auto___34219)){
args34216.push((arguments[i__27959__auto___34220]));

var G__34221 = (i__27959__auto___34220 + (1));
i__27959__auto___34220 = G__34221;
continue;
} else {
}
break;
}

var G__34218 = args34216.length;
switch (G__34218) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34216.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34223_SHARP_,p2__34224_SHARP_){
return cljs.core.assoc.call(null,p1__34223_SHARP_,cljs.core.get.call(null,p2__34224_SHARP_,key),p2__34224_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34225){
var map__34228 = p__34225;
var map__34228__$1 = ((((!((map__34228 == null)))?((((map__34228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34228):map__34228);
var f_data = map__34228__$1;
var file = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34230,p__34231){
var map__34240 = p__34230;
var map__34240__$1 = ((((!((map__34240 == null)))?((((map__34240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34240):map__34240);
var opts = map__34240__$1;
var on_cssload = cljs.core.get.call(null,map__34240__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34241 = p__34231;
var map__34241__$1 = ((((!((map__34241 == null)))?((((map__34241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34241):map__34241);
var files_msg = map__34241__$1;
var files = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34244_34248 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34245_34249 = null;
var count__34246_34250 = (0);
var i__34247_34251 = (0);
while(true){
if((i__34247_34251 < count__34246_34250)){
var f_34252 = cljs.core._nth.call(null,chunk__34245_34249,i__34247_34251);
figwheel.client.file_reloading.reload_css_file.call(null,f_34252);

var G__34253 = seq__34244_34248;
var G__34254 = chunk__34245_34249;
var G__34255 = count__34246_34250;
var G__34256 = (i__34247_34251 + (1));
seq__34244_34248 = G__34253;
chunk__34245_34249 = G__34254;
count__34246_34250 = G__34255;
i__34247_34251 = G__34256;
continue;
} else {
var temp__6503__auto___34257 = cljs.core.seq.call(null,seq__34244_34248);
if(temp__6503__auto___34257){
var seq__34244_34258__$1 = temp__6503__auto___34257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34244_34258__$1)){
var c__27682__auto___34259 = cljs.core.chunk_first.call(null,seq__34244_34258__$1);
var G__34260 = cljs.core.chunk_rest.call(null,seq__34244_34258__$1);
var G__34261 = c__27682__auto___34259;
var G__34262 = cljs.core.count.call(null,c__27682__auto___34259);
var G__34263 = (0);
seq__34244_34248 = G__34260;
chunk__34245_34249 = G__34261;
count__34246_34250 = G__34262;
i__34247_34251 = G__34263;
continue;
} else {
var f_34264 = cljs.core.first.call(null,seq__34244_34258__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34264);

var G__34265 = cljs.core.next.call(null,seq__34244_34258__$1);
var G__34266 = null;
var G__34267 = (0);
var G__34268 = (0);
seq__34244_34248 = G__34265;
chunk__34245_34249 = G__34266;
count__34246_34250 = G__34267;
i__34247_34251 = G__34268;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34240,map__34240__$1,opts,on_cssload,map__34241,map__34241__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34240,map__34240__$1,opts,on_cssload,map__34241,map__34241__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map