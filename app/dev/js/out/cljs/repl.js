// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28896){
var map__28921 = p__28896;
var map__28921__$1 = ((((!((map__28921 == null)))?((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var m = map__28921__$1;
var n = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28923_28945 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28924_28946 = null;
var count__28925_28947 = (0);
var i__28926_28948 = (0);
while(true){
if((i__28926_28948 < count__28925_28947)){
var f_28949 = cljs.core._nth.call(null,chunk__28924_28946,i__28926_28948);
cljs.core.println.call(null,"  ",f_28949);

var G__28950 = seq__28923_28945;
var G__28951 = chunk__28924_28946;
var G__28952 = count__28925_28947;
var G__28953 = (i__28926_28948 + (1));
seq__28923_28945 = G__28950;
chunk__28924_28946 = G__28951;
count__28925_28947 = G__28952;
i__28926_28948 = G__28953;
continue;
} else {
var temp__6503__auto___28954 = cljs.core.seq.call(null,seq__28923_28945);
if(temp__6503__auto___28954){
var seq__28923_28955__$1 = temp__6503__auto___28954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28923_28955__$1)){
var c__21174__auto___28956 = cljs.core.chunk_first.call(null,seq__28923_28955__$1);
var G__28957 = cljs.core.chunk_rest.call(null,seq__28923_28955__$1);
var G__28958 = c__21174__auto___28956;
var G__28959 = cljs.core.count.call(null,c__21174__auto___28956);
var G__28960 = (0);
seq__28923_28945 = G__28957;
chunk__28924_28946 = G__28958;
count__28925_28947 = G__28959;
i__28926_28948 = G__28960;
continue;
} else {
var f_28961 = cljs.core.first.call(null,seq__28923_28955__$1);
cljs.core.println.call(null,"  ",f_28961);

var G__28962 = cljs.core.next.call(null,seq__28923_28955__$1);
var G__28963 = null;
var G__28964 = (0);
var G__28965 = (0);
seq__28923_28945 = G__28962;
chunk__28924_28946 = G__28963;
count__28925_28947 = G__28964;
i__28926_28948 = G__28965;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28966 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20270__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20270__auto__)){
return or__20270__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28966);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28966)))?cljs.core.second.call(null,arglists_28966):arglists_28966));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28927_28967 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28928_28968 = null;
var count__28929_28969 = (0);
var i__28930_28970 = (0);
while(true){
if((i__28930_28970 < count__28929_28969)){
var vec__28931_28971 = cljs.core._nth.call(null,chunk__28928_28968,i__28930_28970);
var name_28972 = cljs.core.nth.call(null,vec__28931_28971,(0),null);
var map__28934_28973 = cljs.core.nth.call(null,vec__28931_28971,(1),null);
var map__28934_28974__$1 = ((((!((map__28934_28973 == null)))?((((map__28934_28973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28934_28973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28934_28973):map__28934_28973);
var doc_28975 = cljs.core.get.call(null,map__28934_28974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28976 = cljs.core.get.call(null,map__28934_28974__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28972);

cljs.core.println.call(null," ",arglists_28976);

if(cljs.core.truth_(doc_28975)){
cljs.core.println.call(null," ",doc_28975);
} else {
}

var G__28977 = seq__28927_28967;
var G__28978 = chunk__28928_28968;
var G__28979 = count__28929_28969;
var G__28980 = (i__28930_28970 + (1));
seq__28927_28967 = G__28977;
chunk__28928_28968 = G__28978;
count__28929_28969 = G__28979;
i__28930_28970 = G__28980;
continue;
} else {
var temp__6503__auto___28981 = cljs.core.seq.call(null,seq__28927_28967);
if(temp__6503__auto___28981){
var seq__28927_28982__$1 = temp__6503__auto___28981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28927_28982__$1)){
var c__21174__auto___28983 = cljs.core.chunk_first.call(null,seq__28927_28982__$1);
var G__28984 = cljs.core.chunk_rest.call(null,seq__28927_28982__$1);
var G__28985 = c__21174__auto___28983;
var G__28986 = cljs.core.count.call(null,c__21174__auto___28983);
var G__28987 = (0);
seq__28927_28967 = G__28984;
chunk__28928_28968 = G__28985;
count__28929_28969 = G__28986;
i__28930_28970 = G__28987;
continue;
} else {
var vec__28936_28988 = cljs.core.first.call(null,seq__28927_28982__$1);
var name_28989 = cljs.core.nth.call(null,vec__28936_28988,(0),null);
var map__28939_28990 = cljs.core.nth.call(null,vec__28936_28988,(1),null);
var map__28939_28991__$1 = ((((!((map__28939_28990 == null)))?((((map__28939_28990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28939_28990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28939_28990):map__28939_28990);
var doc_28992 = cljs.core.get.call(null,map__28939_28991__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28993 = cljs.core.get.call(null,map__28939_28991__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28989);

cljs.core.println.call(null," ",arglists_28993);

if(cljs.core.truth_(doc_28992)){
cljs.core.println.call(null," ",doc_28992);
} else {
}

var G__28994 = cljs.core.next.call(null,seq__28927_28982__$1);
var G__28995 = null;
var G__28996 = (0);
var G__28997 = (0);
seq__28927_28967 = G__28994;
chunk__28928_28968 = G__28995;
count__28929_28969 = G__28996;
i__28930_28970 = G__28997;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__28941 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28942 = null;
var count__28943 = (0);
var i__28944 = (0);
while(true){
if((i__28944 < count__28943)){
var role = cljs.core._nth.call(null,chunk__28942,i__28944);
var temp__6503__auto___28998__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___28998__$1)){
var spec_28999 = temp__6503__auto___28998__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28999));
} else {
}

var G__29000 = seq__28941;
var G__29001 = chunk__28942;
var G__29002 = count__28943;
var G__29003 = (i__28944 + (1));
seq__28941 = G__29000;
chunk__28942 = G__29001;
count__28943 = G__29002;
i__28944 = G__29003;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__28941);
if(temp__6503__auto____$1){
var seq__28941__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28941__$1)){
var c__21174__auto__ = cljs.core.chunk_first.call(null,seq__28941__$1);
var G__29004 = cljs.core.chunk_rest.call(null,seq__28941__$1);
var G__29005 = c__21174__auto__;
var G__29006 = cljs.core.count.call(null,c__21174__auto__);
var G__29007 = (0);
seq__28941 = G__29004;
chunk__28942 = G__29005;
count__28943 = G__29006;
i__28944 = G__29007;
continue;
} else {
var role = cljs.core.first.call(null,seq__28941__$1);
var temp__6503__auto___29008__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___29008__$2)){
var spec_29009 = temp__6503__auto___29008__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29009));
} else {
}

var G__29010 = cljs.core.next.call(null,seq__28941__$1);
var G__29011 = null;
var G__29012 = (0);
var G__29013 = (0);
seq__28941 = G__29010;
chunk__28942 = G__29011;
count__28943 = G__29012;
i__28944 = G__29013;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map