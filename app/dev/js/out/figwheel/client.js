// Compiled by ClojureScript 1.9.198 {:elide-asserts true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31913 = [];
var len__27958__auto___31916 = arguments.length;
var i__27959__auto___31917 = (0);
while(true){
if((i__27959__auto___31917 < len__27958__auto___31916)){
args31913.push((arguments[i__27959__auto___31917]));

var G__31918 = (i__27959__auto___31917 + (1));
i__27959__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var G__31915 = args31913.length;
switch (G__31915) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31913.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27965__auto__ = [];
var len__27958__auto___31921 = arguments.length;
var i__27959__auto___31922 = (0);
while(true){
if((i__27959__auto___31922 < len__27958__auto___31921)){
args__27965__auto__.push((arguments[i__27959__auto___31922]));

var G__31923 = (i__27959__auto___31922 + (1));
i__27959__auto___31922 = G__31923;
continue;
} else {
}
break;
}

var argseq__27966__auto__ = ((((0) < args__27965__auto__.length))?(new cljs.core.IndexedSeq(args__27965__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27966__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31920){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31920));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27965__auto__ = [];
var len__27958__auto___31925 = arguments.length;
var i__27959__auto___31926 = (0);
while(true){
if((i__27959__auto___31926 < len__27958__auto___31925)){
args__27965__auto__.push((arguments[i__27959__auto___31926]));

var G__31927 = (i__27959__auto___31926 + (1));
i__27959__auto___31926 = G__31927;
continue;
} else {
}
break;
}

var argseq__27966__auto__ = ((((0) < args__27965__auto__.length))?(new cljs.core.IndexedSeq(args__27965__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27966__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31924){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31924));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31928 = cljs.core._EQ_;
var expr__31929 = (function (){var or__26779__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31932){if((e31932 instanceof Error)){
var e = e31932;
return false;
} else {
throw e31932;

}
}})();
if(cljs.core.truth_(or__26779__auto__)){
return or__26779__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31928.call(null,"true",expr__31929))){
return true;
} else {
if(cljs.core.truth_(pred__31928.call(null,"false",expr__31929))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31929)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31934){if((e31934 instanceof Error)){
var e = e31934;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31934;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31935){
var map__31938 = p__31935;
var map__31938__$1 = ((((!((map__31938 == null)))?((((map__31938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31938):map__31938);
var message = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26779__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26779__auto__)){
return or__26779__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26767__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26767__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26767__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30081__auto___32100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto___32100,ch){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto___32100,ch){
return (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (7))){
var inst_32065 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32071_32101 = state_32069__$1;
(statearr_32071_32101[(2)] = inst_32065);

(statearr_32071_32101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (1))){
var state_32069__$1 = state_32069;
var statearr_32072_32102 = state_32069__$1;
(statearr_32072_32102[(2)] = null);

(statearr_32072_32102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (4))){
var inst_32022 = (state_32069[(7)]);
var inst_32022__$1 = (state_32069[(2)]);
var state_32069__$1 = (function (){var statearr_32073 = state_32069;
(statearr_32073[(7)] = inst_32022__$1);

return statearr_32073;
})();
if(cljs.core.truth_(inst_32022__$1)){
var statearr_32074_32103 = state_32069__$1;
(statearr_32074_32103[(1)] = (5));

} else {
var statearr_32075_32104 = state_32069__$1;
(statearr_32075_32104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (15))){
var inst_32029 = (state_32069[(8)]);
var inst_32044 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32029);
var inst_32045 = cljs.core.first.call(null,inst_32044);
var inst_32046 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32045);
var inst_32047 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32046)].join('');
var inst_32048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32047);
var state_32069__$1 = state_32069;
var statearr_32076_32105 = state_32069__$1;
(statearr_32076_32105[(2)] = inst_32048);

(statearr_32076_32105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (13))){
var inst_32053 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32077_32106 = state_32069__$1;
(statearr_32077_32106[(2)] = inst_32053);

(statearr_32077_32106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (6))){
var state_32069__$1 = state_32069;
var statearr_32078_32107 = state_32069__$1;
(statearr_32078_32107[(2)] = null);

(statearr_32078_32107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (17))){
var inst_32051 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32079_32108 = state_32069__$1;
(statearr_32079_32108[(2)] = inst_32051);

(statearr_32079_32108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (3))){
var inst_32067 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32069__$1,inst_32067);
} else {
if((state_val_32070 === (12))){
var inst_32028 = (state_32069[(9)]);
var inst_32042 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32028,opts);
var state_32069__$1 = state_32069;
if(cljs.core.truth_(inst_32042)){
var statearr_32080_32109 = state_32069__$1;
(statearr_32080_32109[(1)] = (15));

} else {
var statearr_32081_32110 = state_32069__$1;
(statearr_32081_32110[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (2))){
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32069__$1,(4),ch);
} else {
if((state_val_32070 === (11))){
var inst_32029 = (state_32069[(8)]);
var inst_32034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32035 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32029);
var inst_32036 = cljs.core.async.timeout.call(null,(1000));
var inst_32037 = [inst_32035,inst_32036];
var inst_32038 = (new cljs.core.PersistentVector(null,2,(5),inst_32034,inst_32037,null));
var state_32069__$1 = state_32069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32069__$1,(14),inst_32038);
} else {
if((state_val_32070 === (9))){
var inst_32029 = (state_32069[(8)]);
var inst_32055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32029);
var inst_32057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32056);
var inst_32058 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32057)].join('');
var inst_32059 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32058);
var state_32069__$1 = (function (){var statearr_32082 = state_32069;
(statearr_32082[(10)] = inst_32055);

return statearr_32082;
})();
var statearr_32083_32111 = state_32069__$1;
(statearr_32083_32111[(2)] = inst_32059);

(statearr_32083_32111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (5))){
var inst_32022 = (state_32069[(7)]);
var inst_32024 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32025 = (new cljs.core.PersistentArrayMap(null,2,inst_32024,null));
var inst_32026 = (new cljs.core.PersistentHashSet(null,inst_32025,null));
var inst_32027 = figwheel.client.focus_msgs.call(null,inst_32026,inst_32022);
var inst_32028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32027);
var inst_32029 = cljs.core.first.call(null,inst_32027);
var inst_32030 = figwheel.client.autoload_QMARK_.call(null);
var state_32069__$1 = (function (){var statearr_32084 = state_32069;
(statearr_32084[(9)] = inst_32028);

(statearr_32084[(8)] = inst_32029);

return statearr_32084;
})();
if(cljs.core.truth_(inst_32030)){
var statearr_32085_32112 = state_32069__$1;
(statearr_32085_32112[(1)] = (8));

} else {
var statearr_32086_32113 = state_32069__$1;
(statearr_32086_32113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (14))){
var inst_32040 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32087_32114 = state_32069__$1;
(statearr_32087_32114[(2)] = inst_32040);

(statearr_32087_32114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (16))){
var state_32069__$1 = state_32069;
var statearr_32088_32115 = state_32069__$1;
(statearr_32088_32115[(2)] = null);

(statearr_32088_32115[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (10))){
var inst_32061 = (state_32069[(2)]);
var state_32069__$1 = (function (){var statearr_32089 = state_32069;
(statearr_32089[(11)] = inst_32061);

return statearr_32089;
})();
var statearr_32090_32116 = state_32069__$1;
(statearr_32090_32116[(2)] = null);

(statearr_32090_32116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (8))){
var inst_32028 = (state_32069[(9)]);
var inst_32032 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32028,opts);
var state_32069__$1 = state_32069;
if(cljs.core.truth_(inst_32032)){
var statearr_32091_32117 = state_32069__$1;
(statearr_32091_32117[(1)] = (11));

} else {
var statearr_32092_32118 = state_32069__$1;
(statearr_32092_32118[(1)] = (12));

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
});})(c__30081__auto___32100,ch))
;
return ((function (switch__30058__auto__,c__30081__auto___32100,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30059__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30059__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30059__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30059__auto____1 = (function (state_32069){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_32069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e32097){if((e32097 instanceof Object)){
var ex__30062__auto__ = e32097;
var statearr_32098_32119 = state_32069;
(statearr_32098_32119[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32120 = state_32069;
state_32069 = G__32120;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30059__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30059__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30059__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30059__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto___32100,ch))
})();
var state__30083__auto__ = (function (){var statearr_32099 = f__30082__auto__.call(null);
(statearr_32099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto___32100);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto___32100,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32121_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32121_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32124 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32124){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32123){if((e32123 instanceof Error)){
var e = e32123;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32124], null));
} else {
var e = e32123;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32124))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32125){
var map__32134 = p__32125;
var map__32134__$1 = ((((!((map__32134 == null)))?((((map__32134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32134):map__32134);
var opts = map__32134__$1;
var build_id = cljs.core.get.call(null,map__32134__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32134,map__32134__$1,opts,build_id){
return (function (p__32136){
var vec__32137 = p__32136;
var seq__32138 = cljs.core.seq.call(null,vec__32137);
var first__32139 = cljs.core.first.call(null,seq__32138);
var seq__32138__$1 = cljs.core.next.call(null,seq__32138);
var map__32140 = first__32139;
var map__32140__$1 = ((((!((map__32140 == null)))?((((map__32140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32140):map__32140);
var msg = map__32140__$1;
var msg_name = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32138__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32137,seq__32138,first__32139,seq__32138__$1,map__32140,map__32140__$1,msg,msg_name,_,map__32134,map__32134__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32137,seq__32138,first__32139,seq__32138__$1,map__32140,map__32140__$1,msg,msg_name,_,map__32134,map__32134__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32134,map__32134__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32148){
var vec__32149 = p__32148;
var seq__32150 = cljs.core.seq.call(null,vec__32149);
var first__32151 = cljs.core.first.call(null,seq__32150);
var seq__32150__$1 = cljs.core.next.call(null,seq__32150);
var map__32152 = first__32151;
var map__32152__$1 = ((((!((map__32152 == null)))?((((map__32152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32152):map__32152);
var msg = map__32152__$1;
var msg_name = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32150__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32154){
var map__32166 = p__32154;
var map__32166__$1 = ((((!((map__32166 == null)))?((((map__32166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32166):map__32166);
var on_compile_warning = cljs.core.get.call(null,map__32166__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32166__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32166,map__32166__$1,on_compile_warning,on_compile_fail){
return (function (p__32168){
var vec__32169 = p__32168;
var seq__32170 = cljs.core.seq.call(null,vec__32169);
var first__32171 = cljs.core.first.call(null,seq__32170);
var seq__32170__$1 = cljs.core.next.call(null,seq__32170);
var map__32172 = first__32171;
var map__32172__$1 = ((((!((map__32172 == null)))?((((map__32172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32172):map__32172);
var msg = map__32172__$1;
var msg_name = cljs.core.get.call(null,map__32172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32170__$1;
var pred__32174 = cljs.core._EQ_;
var expr__32175 = msg_name;
if(cljs.core.truth_(pred__32174.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32175))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32174.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32175))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32166,map__32166__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto__,msg_hist,msg_names,msg){
return (function (state_32403){
var state_val_32404 = (state_32403[(1)]);
if((state_val_32404 === (7))){
var inst_32323 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32323)){
var statearr_32405_32455 = state_32403__$1;
(statearr_32405_32455[(1)] = (8));

} else {
var statearr_32406_32456 = state_32403__$1;
(statearr_32406_32456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (20))){
var inst_32397 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32407_32457 = state_32403__$1;
(statearr_32407_32457[(2)] = inst_32397);

(statearr_32407_32457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (27))){
var inst_32393 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32408_32458 = state_32403__$1;
(statearr_32408_32458[(2)] = inst_32393);

(statearr_32408_32458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (1))){
var inst_32316 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32316)){
var statearr_32409_32459 = state_32403__$1;
(statearr_32409_32459[(1)] = (2));

} else {
var statearr_32410_32460 = state_32403__$1;
(statearr_32410_32460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (24))){
var inst_32395 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32411_32461 = state_32403__$1;
(statearr_32411_32461[(2)] = inst_32395);

(statearr_32411_32461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (4))){
var inst_32401 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32403__$1,inst_32401);
} else {
if((state_val_32404 === (15))){
var inst_32399 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32412_32462 = state_32403__$1;
(statearr_32412_32462[(2)] = inst_32399);

(statearr_32412_32462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (21))){
var inst_32352 = (state_32403[(2)]);
var inst_32353 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32353);
var state_32403__$1 = (function (){var statearr_32413 = state_32403;
(statearr_32413[(7)] = inst_32352);

return statearr_32413;
})();
var statearr_32414_32463 = state_32403__$1;
(statearr_32414_32463[(2)] = inst_32354);

(statearr_32414_32463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (31))){
var inst_32382 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32382)){
var statearr_32415_32464 = state_32403__$1;
(statearr_32415_32464[(1)] = (34));

} else {
var statearr_32416_32465 = state_32403__$1;
(statearr_32416_32465[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (32))){
var inst_32391 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32417_32466 = state_32403__$1;
(statearr_32417_32466[(2)] = inst_32391);

(statearr_32417_32466[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (33))){
var inst_32378 = (state_32403[(2)]);
var inst_32379 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32380 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32379);
var state_32403__$1 = (function (){var statearr_32418 = state_32403;
(statearr_32418[(8)] = inst_32378);

return statearr_32418;
})();
var statearr_32419_32467 = state_32403__$1;
(statearr_32419_32467[(2)] = inst_32380);

(statearr_32419_32467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (13))){
var inst_32337 = figwheel.client.heads_up.clear.call(null);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(16),inst_32337);
} else {
if((state_val_32404 === (22))){
var inst_32358 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32359 = figwheel.client.heads_up.append_warning_message.call(null,inst_32358);
var state_32403__$1 = state_32403;
var statearr_32420_32468 = state_32403__$1;
(statearr_32420_32468[(2)] = inst_32359);

(statearr_32420_32468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (36))){
var inst_32389 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32421_32469 = state_32403__$1;
(statearr_32421_32469[(2)] = inst_32389);

(statearr_32421_32469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (29))){
var inst_32369 = (state_32403[(2)]);
var inst_32370 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32371 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32370);
var state_32403__$1 = (function (){var statearr_32422 = state_32403;
(statearr_32422[(9)] = inst_32369);

return statearr_32422;
})();
var statearr_32423_32470 = state_32403__$1;
(statearr_32423_32470[(2)] = inst_32371);

(statearr_32423_32470[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (6))){
var inst_32318 = (state_32403[(10)]);
var state_32403__$1 = state_32403;
var statearr_32424_32471 = state_32403__$1;
(statearr_32424_32471[(2)] = inst_32318);

(statearr_32424_32471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (28))){
var inst_32365 = (state_32403[(2)]);
var inst_32366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32367 = figwheel.client.heads_up.display_warning.call(null,inst_32366);
var state_32403__$1 = (function (){var statearr_32425 = state_32403;
(statearr_32425[(11)] = inst_32365);

return statearr_32425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(29),inst_32367);
} else {
if((state_val_32404 === (25))){
var inst_32363 = figwheel.client.heads_up.clear.call(null);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(28),inst_32363);
} else {
if((state_val_32404 === (34))){
var inst_32384 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(37),inst_32384);
} else {
if((state_val_32404 === (17))){
var inst_32343 = (state_32403[(2)]);
var inst_32344 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32344);
var state_32403__$1 = (function (){var statearr_32426 = state_32403;
(statearr_32426[(12)] = inst_32343);

return statearr_32426;
})();
var statearr_32427_32472 = state_32403__$1;
(statearr_32427_32472[(2)] = inst_32345);

(statearr_32427_32472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (3))){
var inst_32335 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32335)){
var statearr_32428_32473 = state_32403__$1;
(statearr_32428_32473[(1)] = (13));

} else {
var statearr_32429_32474 = state_32403__$1;
(statearr_32429_32474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (12))){
var inst_32331 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32430_32475 = state_32403__$1;
(statearr_32430_32475[(2)] = inst_32331);

(statearr_32430_32475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (2))){
var inst_32318 = (state_32403[(10)]);
var inst_32318__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32403__$1 = (function (){var statearr_32431 = state_32403;
(statearr_32431[(10)] = inst_32318__$1);

return statearr_32431;
})();
if(cljs.core.truth_(inst_32318__$1)){
var statearr_32432_32476 = state_32403__$1;
(statearr_32432_32476[(1)] = (5));

} else {
var statearr_32433_32477 = state_32403__$1;
(statearr_32433_32477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (23))){
var inst_32361 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32361)){
var statearr_32434_32478 = state_32403__$1;
(statearr_32434_32478[(1)] = (25));

} else {
var statearr_32435_32479 = state_32403__$1;
(statearr_32435_32479[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (35))){
var state_32403__$1 = state_32403;
var statearr_32436_32480 = state_32403__$1;
(statearr_32436_32480[(2)] = null);

(statearr_32436_32480[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (19))){
var inst_32356 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32356)){
var statearr_32437_32481 = state_32403__$1;
(statearr_32437_32481[(1)] = (22));

} else {
var statearr_32438_32482 = state_32403__$1;
(statearr_32438_32482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (11))){
var inst_32327 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32439_32483 = state_32403__$1;
(statearr_32439_32483[(2)] = inst_32327);

(statearr_32439_32483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (9))){
var inst_32329 = figwheel.client.heads_up.clear.call(null);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(12),inst_32329);
} else {
if((state_val_32404 === (5))){
var inst_32320 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32403__$1 = state_32403;
var statearr_32440_32484 = state_32403__$1;
(statearr_32440_32484[(2)] = inst_32320);

(statearr_32440_32484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (14))){
var inst_32347 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32347)){
var statearr_32441_32485 = state_32403__$1;
(statearr_32441_32485[(1)] = (18));

} else {
var statearr_32442_32486 = state_32403__$1;
(statearr_32442_32486[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (26))){
var inst_32373 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32403__$1 = state_32403;
if(cljs.core.truth_(inst_32373)){
var statearr_32443_32487 = state_32403__$1;
(statearr_32443_32487[(1)] = (30));

} else {
var statearr_32444_32488 = state_32403__$1;
(statearr_32444_32488[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (16))){
var inst_32339 = (state_32403[(2)]);
var inst_32340 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32341 = figwheel.client.heads_up.display_exception.call(null,inst_32340);
var state_32403__$1 = (function (){var statearr_32445 = state_32403;
(statearr_32445[(13)] = inst_32339);

return statearr_32445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(17),inst_32341);
} else {
if((state_val_32404 === (30))){
var inst_32375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32376 = figwheel.client.heads_up.display_warning.call(null,inst_32375);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(33),inst_32376);
} else {
if((state_val_32404 === (10))){
var inst_32333 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32446_32489 = state_32403__$1;
(statearr_32446_32489[(2)] = inst_32333);

(statearr_32446_32489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (18))){
var inst_32349 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32350 = figwheel.client.heads_up.display_exception.call(null,inst_32349);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(21),inst_32350);
} else {
if((state_val_32404 === (37))){
var inst_32386 = (state_32403[(2)]);
var state_32403__$1 = state_32403;
var statearr_32447_32490 = state_32403__$1;
(statearr_32447_32490[(2)] = inst_32386);

(statearr_32447_32490[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32404 === (8))){
var inst_32325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32403__$1 = state_32403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32403__$1,(11),inst_32325);
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
});})(c__30081__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30058__auto__,c__30081__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto____1 = (function (state_32403){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_32403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e32452){if((e32452 instanceof Object)){
var ex__30062__auto__ = e32452;
var statearr_32453_32491 = state_32403;
(statearr_32453_32491[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32492 = state_32403;
state_32403 = G__32492;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto__ = function(state_32403){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto____1.call(this,state_32403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto__,msg_hist,msg_names,msg))
})();
var state__30083__auto__ = (function (){var statearr_32454 = f__30082__auto__.call(null);
(statearr_32454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto__);

return statearr_32454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto__,msg_hist,msg_names,msg))
);

return c__30081__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30081__auto___32555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto___32555,ch){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto___32555,ch){
return (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (1))){
var state_32538__$1 = state_32538;
var statearr_32540_32556 = state_32538__$1;
(statearr_32540_32556[(2)] = null);

(statearr_32540_32556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (2))){
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(4),ch);
} else {
if((state_val_32539 === (3))){
var inst_32536 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else {
if((state_val_32539 === (4))){
var inst_32526 = (state_32538[(7)]);
var inst_32526__$1 = (state_32538[(2)]);
var state_32538__$1 = (function (){var statearr_32541 = state_32538;
(statearr_32541[(7)] = inst_32526__$1);

return statearr_32541;
})();
if(cljs.core.truth_(inst_32526__$1)){
var statearr_32542_32557 = state_32538__$1;
(statearr_32542_32557[(1)] = (5));

} else {
var statearr_32543_32558 = state_32538__$1;
(statearr_32543_32558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (5))){
var inst_32526 = (state_32538[(7)]);
var inst_32528 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32526);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(8),inst_32528);
} else {
if((state_val_32539 === (6))){
var state_32538__$1 = state_32538;
var statearr_32544_32559 = state_32538__$1;
(statearr_32544_32559[(2)] = null);

(statearr_32544_32559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (7))){
var inst_32534 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32545_32560 = state_32538__$1;
(statearr_32545_32560[(2)] = inst_32534);

(statearr_32545_32560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (8))){
var inst_32530 = (state_32538[(2)]);
var state_32538__$1 = (function (){var statearr_32546 = state_32538;
(statearr_32546[(8)] = inst_32530);

return statearr_32546;
})();
var statearr_32547_32561 = state_32538__$1;
(statearr_32547_32561[(2)] = null);

(statearr_32547_32561[(1)] = (2));


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
});})(c__30081__auto___32555,ch))
;
return ((function (switch__30058__auto__,c__30081__auto___32555,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30059__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30059__auto____0 = (function (){
var statearr_32551 = [null,null,null,null,null,null,null,null,null];
(statearr_32551[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30059__auto__);

(statearr_32551[(1)] = (1));

return statearr_32551;
});
var figwheel$client$heads_up_plugin_$_state_machine__30059__auto____1 = (function (state_32538){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_32538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e32552){if((e32552 instanceof Object)){
var ex__30062__auto__ = e32552;
var statearr_32553_32562 = state_32538;
(statearr_32553_32562[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32563 = state_32538;
state_32538 = G__32563;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30059__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30059__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30059__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30059__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto___32555,ch))
})();
var state__30083__auto__ = (function (){var statearr_32554 = f__30082__auto__.call(null);
(statearr_32554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto___32555);

return statearr_32554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto___32555,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto__){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto__){
return (function (state_32584){
var state_val_32585 = (state_32584[(1)]);
if((state_val_32585 === (1))){
var inst_32579 = cljs.core.async.timeout.call(null,(3000));
var state_32584__$1 = state_32584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32584__$1,(2),inst_32579);
} else {
if((state_val_32585 === (2))){
var inst_32581 = (state_32584[(2)]);
var inst_32582 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32584__$1 = (function (){var statearr_32586 = state_32584;
(statearr_32586[(7)] = inst_32581);

return statearr_32586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32584__$1,inst_32582);
} else {
return null;
}
}
});})(c__30081__auto__))
;
return ((function (switch__30058__auto__,c__30081__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30059__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30059__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null,null];
(statearr_32590[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30059__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30059__auto____1 = (function (state_32584){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_32584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e32591){if((e32591 instanceof Object)){
var ex__30062__auto__ = e32591;
var statearr_32592_32594 = state_32584;
(statearr_32592_32594[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32595 = state_32584;
state_32584 = G__32595;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30059__auto__ = function(state_32584){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30059__auto____1.call(this,state_32584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30059__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30059__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto__))
})();
var state__30083__auto__ = (function (){var statearr_32593 = f__30082__auto__.call(null);
(statearr_32593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto__);

return statearr_32593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto__))
);

return c__30081__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6503__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6503__auto__)){
var figwheel_version = temp__6503__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30081__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__30082__auto__ = (function (){var switch__30058__auto__ = ((function (c__30081__auto__,figwheel_version,temp__6503__auto__){
return (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (1))){
var inst_32612 = cljs.core.async.timeout.call(null,(2000));
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32618__$1,(2),inst_32612);
} else {
if((state_val_32619 === (2))){
var inst_32614 = (state_32618[(2)]);
var inst_32615 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_32616 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32615);
var state_32618__$1 = (function (){var statearr_32620 = state_32618;
(statearr_32620[(7)] = inst_32614);

return statearr_32620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32618__$1,inst_32616);
} else {
return null;
}
}
});})(c__30081__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__30058__auto__,c__30081__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto____1 = (function (state_32618){
while(true){
var ret_value__30060__auto__ = (function (){try{while(true){
var result__30061__auto__ = switch__30058__auto__.call(null,state_32618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30061__auto__;
}
break;
}
}catch (e32625){if((e32625 instanceof Object)){
var ex__30062__auto__ = e32625;
var statearr_32626_32628 = state_32618;
(statearr_32626_32628[(5)] = ex__30062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32629 = state_32618;
state_32618 = G__32629;
continue;
} else {
return ret_value__30060__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30059__auto__;
})()
;})(switch__30058__auto__,c__30081__auto__,figwheel_version,temp__6503__auto__))
})();
var state__30083__auto__ = (function (){var statearr_32627 = f__30082__auto__.call(null);
(statearr_32627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30081__auto__);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30083__auto__);
});})(c__30081__auto__,figwheel_version,temp__6503__auto__))
);

return c__30081__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32630){
var map__32634 = p__32630;
var map__32634__$1 = ((((!((map__32634 == null)))?((((map__32634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32634):map__32634);
var file = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32634__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32636 = "";
var G__32636__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32636),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32636);
var G__32636__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32636__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32636__$1);
if(cljs.core.truth_((function (){var and__26767__auto__ = line;
if(cljs.core.truth_(and__26767__auto__)){
return column;
} else {
return and__26767__auto__;
}
})())){
return [cljs.core.str(G__32636__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32636__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32637){
var map__32644 = p__32637;
var map__32644__$1 = ((((!((map__32644 == null)))?((((map__32644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32644):map__32644);
var ed = map__32644__$1;
var formatted_exception = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32644__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32646_32650 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32647_32651 = null;
var count__32648_32652 = (0);
var i__32649_32653 = (0);
while(true){
if((i__32649_32653 < count__32648_32652)){
var msg_32654 = cljs.core._nth.call(null,chunk__32647_32651,i__32649_32653);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32654);

var G__32655 = seq__32646_32650;
var G__32656 = chunk__32647_32651;
var G__32657 = count__32648_32652;
var G__32658 = (i__32649_32653 + (1));
seq__32646_32650 = G__32655;
chunk__32647_32651 = G__32656;
count__32648_32652 = G__32657;
i__32649_32653 = G__32658;
continue;
} else {
var temp__6503__auto___32659 = cljs.core.seq.call(null,seq__32646_32650);
if(temp__6503__auto___32659){
var seq__32646_32660__$1 = temp__6503__auto___32659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32646_32660__$1)){
var c__27682__auto___32661 = cljs.core.chunk_first.call(null,seq__32646_32660__$1);
var G__32662 = cljs.core.chunk_rest.call(null,seq__32646_32660__$1);
var G__32663 = c__27682__auto___32661;
var G__32664 = cljs.core.count.call(null,c__27682__auto___32661);
var G__32665 = (0);
seq__32646_32650 = G__32662;
chunk__32647_32651 = G__32663;
count__32648_32652 = G__32664;
i__32649_32653 = G__32665;
continue;
} else {
var msg_32666 = cljs.core.first.call(null,seq__32646_32660__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32666);

var G__32667 = cljs.core.next.call(null,seq__32646_32660__$1);
var G__32668 = null;
var G__32669 = (0);
var G__32670 = (0);
seq__32646_32650 = G__32667;
chunk__32647_32651 = G__32668;
count__32648_32652 = G__32669;
i__32649_32653 = G__32670;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32671){
var map__32674 = p__32671;
var map__32674__$1 = ((((!((map__32674 == null)))?((((map__32674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32674):map__32674);
var w = map__32674__$1;
var message = cljs.core.get.call(null,map__32674__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"app\\dev\\js\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"app\\dev\\js\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26767__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26767__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26767__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32686 = cljs.core.seq.call(null,plugins);
var chunk__32687 = null;
var count__32688 = (0);
var i__32689 = (0);
while(true){
if((i__32689 < count__32688)){
var vec__32690 = cljs.core._nth.call(null,chunk__32687,i__32689);
var k = cljs.core.nth.call(null,vec__32690,(0),null);
var plugin = cljs.core.nth.call(null,vec__32690,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32696 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32686,chunk__32687,count__32688,i__32689,pl_32696,vec__32690,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32696.call(null,msg_hist);
});})(seq__32686,chunk__32687,count__32688,i__32689,pl_32696,vec__32690,k,plugin))
);
} else {
}

var G__32697 = seq__32686;
var G__32698 = chunk__32687;
var G__32699 = count__32688;
var G__32700 = (i__32689 + (1));
seq__32686 = G__32697;
chunk__32687 = G__32698;
count__32688 = G__32699;
i__32689 = G__32700;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__32686);
if(temp__6503__auto__){
var seq__32686__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32686__$1)){
var c__27682__auto__ = cljs.core.chunk_first.call(null,seq__32686__$1);
var G__32701 = cljs.core.chunk_rest.call(null,seq__32686__$1);
var G__32702 = c__27682__auto__;
var G__32703 = cljs.core.count.call(null,c__27682__auto__);
var G__32704 = (0);
seq__32686 = G__32701;
chunk__32687 = G__32702;
count__32688 = G__32703;
i__32689 = G__32704;
continue;
} else {
var vec__32693 = cljs.core.first.call(null,seq__32686__$1);
var k = cljs.core.nth.call(null,vec__32693,(0),null);
var plugin = cljs.core.nth.call(null,vec__32693,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32705 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32686,chunk__32687,count__32688,i__32689,pl_32705,vec__32693,k,plugin,seq__32686__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32705.call(null,msg_hist);
});})(seq__32686,chunk__32687,count__32688,i__32689,pl_32705,vec__32693,k,plugin,seq__32686__$1,temp__6503__auto__))
);
} else {
}

var G__32706 = cljs.core.next.call(null,seq__32686__$1);
var G__32707 = null;
var G__32708 = (0);
var G__32709 = (0);
seq__32686 = G__32706;
chunk__32687 = G__32707;
count__32688 = G__32708;
i__32689 = G__32709;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32710 = [];
var len__27958__auto___32717 = arguments.length;
var i__27959__auto___32718 = (0);
while(true){
if((i__27959__auto___32718 < len__27958__auto___32717)){
args32710.push((arguments[i__27959__auto___32718]));

var G__32719 = (i__27959__auto___32718 + (1));
i__27959__auto___32718 = G__32719;
continue;
} else {
}
break;
}

var G__32712 = args32710.length;
switch (G__32712) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32710.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32713_32721 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32714_32722 = null;
var count__32715_32723 = (0);
var i__32716_32724 = (0);
while(true){
if((i__32716_32724 < count__32715_32723)){
var msg_32725 = cljs.core._nth.call(null,chunk__32714_32722,i__32716_32724);
figwheel.client.socket.handle_incoming_message.call(null,msg_32725);

var G__32726 = seq__32713_32721;
var G__32727 = chunk__32714_32722;
var G__32728 = count__32715_32723;
var G__32729 = (i__32716_32724 + (1));
seq__32713_32721 = G__32726;
chunk__32714_32722 = G__32727;
count__32715_32723 = G__32728;
i__32716_32724 = G__32729;
continue;
} else {
var temp__6503__auto___32730 = cljs.core.seq.call(null,seq__32713_32721);
if(temp__6503__auto___32730){
var seq__32713_32731__$1 = temp__6503__auto___32730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32713_32731__$1)){
var c__27682__auto___32732 = cljs.core.chunk_first.call(null,seq__32713_32731__$1);
var G__32733 = cljs.core.chunk_rest.call(null,seq__32713_32731__$1);
var G__32734 = c__27682__auto___32732;
var G__32735 = cljs.core.count.call(null,c__27682__auto___32732);
var G__32736 = (0);
seq__32713_32721 = G__32733;
chunk__32714_32722 = G__32734;
count__32715_32723 = G__32735;
i__32716_32724 = G__32736;
continue;
} else {
var msg_32737 = cljs.core.first.call(null,seq__32713_32731__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32737);

var G__32738 = cljs.core.next.call(null,seq__32713_32731__$1);
var G__32739 = null;
var G__32740 = (0);
var G__32741 = (0);
seq__32713_32721 = G__32738;
chunk__32714_32722 = G__32739;
count__32715_32723 = G__32740;
i__32716_32724 = G__32741;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27965__auto__ = [];
var len__27958__auto___32746 = arguments.length;
var i__27959__auto___32747 = (0);
while(true){
if((i__27959__auto___32747 < len__27958__auto___32746)){
args__27965__auto__.push((arguments[i__27959__auto___32747]));

var G__32748 = (i__27959__auto___32747 + (1));
i__27959__auto___32747 = G__32748;
continue;
} else {
}
break;
}

var argseq__27966__auto__ = ((((0) < args__27965__auto__.length))?(new cljs.core.IndexedSeq(args__27965__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27966__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32743){
var map__32744 = p__32743;
var map__32744__$1 = ((((!((map__32744 == null)))?((((map__32744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32744):map__32744);
var opts = map__32744__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32742){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32742));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32750){if((e32750 instanceof Error)){
var e = e32750;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32750;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32754){
var map__32755 = p__32754;
var map__32755__$1 = ((((!((map__32755 == null)))?((((map__32755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32755):map__32755);
var msg_name = cljs.core.get.call(null,map__32755__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map