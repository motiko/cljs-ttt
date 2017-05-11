// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.main.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('butler.core');
goog.require('tictactoe.ai.minimax');
cljs.core.enable_console_print_BANG_.call(null);
tictactoe.main.core.board_size = (3);
tictactoe.main.core.winning_k = (3);
tictactoe.main.core.worker_script_path = "js/compiled/worker.js";
tictactoe.main.core.new_board = (function tictactoe$main$core$new_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,"B"))));
});
if(typeof tictactoe.main.core.app_state !== 'undefined'){
} else {
tictactoe.main.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Welcome puny human!",new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.main.core.new_board.call(null,tictactoe.main.core.board_size),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));
}
tictactoe.main.core.game_status = (function tictactoe$main$core$game_status(board){
if(cljs.core.truth_(tictactoe.ai.minimax.winning_QMARK_.call(null,board,"O"))){
return new cljs.core.Keyword(null,"computer-win","computer-win",21086364);
} else {
if(cljs.core.truth_(tictactoe.ai.minimax.winning_QMARK_.call(null,board,"X"))){
return new cljs.core.Keyword(null,"player-win","player-win",-98147097);
} else {
if(cljs.core.truth_(tictactoe.ai.minimax.draw_QMARK_.call(null,board))){
return new cljs.core.Keyword(null,"draw","draw",1358331674);
} else {
return new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);

}
}
}
});
tictactoe.main.core.analyze_result_handler = (function tictactoe$main$core$analyze_result_handler(p__36515){
var vec__36519 = p__36515;
var x = cljs.core.nth.call(null,vec__36519,(0),null);
var y = cljs.core.nth.call(null,vec__36519,(1),null);
cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),x,y], null),"O");

return cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),tictactoe.main.core.game_status.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state))));
});
tictactoe.main.core.ai_butler = butler.core.butler.call(null,tictactoe.main.core.worker_script_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"analyze-result","analyze-result",1074901422),tictactoe.main.core.analyze_result_handler], null));
tictactoe.main.core.on_rect_click = (function tictactoe$main$core$on_rect_click(i,j){
return (function tictactoe$main$core$on_rect_click_$_rect_click(e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state)),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null),"X");

if(cljs.core._EQ_.call(null,tictactoe.main.core.game_status.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state))),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
return cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"thinking","thinking",2063777387)).call(null,butler.core.work_BANG_.call(null,tictactoe.main.core.ai_butler,new cljs.core.Keyword(null,"request-analyze","request-analyze",-185801518),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state))));
} else {
return cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),tictactoe.main.core.game_status.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state))));
}
} else {
return null;
}
});
});
tictactoe.main.core.blank = (function tictactoe$main$core$blank(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.95,new cljs.core.Keyword(null,"height","height",1025178622),0.95,new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,"B",cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.main.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null))))?"lightgray":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),tictactoe.main.core.on_rect_click.call(null,i,j)], null)], null);
});
tictactoe.main.core.circle = (function tictactoe$main$core$circle(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),0.4,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"darkred",new cljs.core.Keyword(null,"cx","cx",1272694324),(0.5 + i),new cljs.core.Keyword(null,"cy","cy",755331060),(0.5 + j)], null)], null);
});
tictactoe.main.core.cross = (function tictactoe$main$core$cross(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"green",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((0.5 + i)),cljs.core.str(","),cljs.core.str((0.5 + j)),cljs.core.str(") "),cljs.core.str("scale(0.33)")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null);
});
tictactoe.main.core.tic_tac_toe = (function tictactoe$main$core$tic_tac_toe(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(function (){var G__36537 = (((new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state)) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state)).fqn:null);
switch (G__36537) {
case "in-progress":
return "Your move, do your best son";

break;
case "thinking":
return "Thinking.. Gonna kick your ass soon";

break;
case "player-win":
return "You win.. But how?";

break;
case "computer-win":
return "You lose! Good Day Sir!";

break;
case "draw":
return "It's a Draw, i could foresee that";

break;
default:
return "";

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),[cljs.core.str("0 0 "),cljs.core.str(tictactoe.main.core.board_size),cljs.core.str(" "),cljs.core.str(tictactoe.main.core.board_size)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null),cljs.core.doall.call(null,(function (){var iter__26870__auto__ = (function tictactoe$main$core$tic_tac_toe_$_iter__36538(s__36539){
return (new cljs.core.LazySeq(null,(function (){
var s__36539__$1 = s__36539;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36539__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26866__auto__ = ((function (s__36539__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$main$core$tic_tac_toe_$_iter__36538_$_iter__36540(s__36541){
return (new cljs.core.LazySeq(null,((function (s__36539__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__36541__$1 = s__36541;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__36541__$1);
if(temp__4657__auto____$1){
var s__36541__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36541__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__36541__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__36543 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__36542 = (0);
while(true){
if((i__36542 < size__26869__auto__)){
var j = cljs.core._nth.call(null,c__26868__auto__,i__36542);
cljs.core.chunk_append.call(null,b__36543,(function (){var G__36550 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.main.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null));
switch (G__36550) {
case "B":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.blank,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(j)].join('')], null));

break;
case "O":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.circle,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(j)].join('')], null));

break;
case "X":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.cross,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(j)].join('')], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.main.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null)))].join('')));

}
})());

var G__36554 = (i__36542 + (1));
i__36542 = G__36554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36543),tictactoe$main$core$tic_tac_toe_$_iter__36538_$_iter__36540.call(null,cljs.core.chunk_rest.call(null,s__36541__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36543),null);
}
} else {
var j = cljs.core.first.call(null,s__36541__$2);
return cljs.core.cons.call(null,(function (){var G__36551 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.main.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null));
switch (G__36551) {
case "B":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.blank,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(j)].join('')], null));

break;
case "O":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.circle,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(j)].join('')], null));

break;
case "X":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.cross,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str(j)].join('')], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.main.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j], null)))].join('')));

}
})(),tictactoe$main$core$tic_tac_toe_$_iter__36538_$_iter__36540.call(null,cljs.core.rest.call(null,s__36541__$2)));
}
} else {
return null;
}
break;
}
});})(s__36539__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__36539__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__26867__auto__ = cljs.core.seq.call(null,iterys__26866__auto__.call(null,cljs.core.range.call(null,tictactoe.main.core.board_size)));
if(fs__26867__auto__){
return cljs.core.concat.call(null,fs__26867__auto__,tictactoe$main$core$tic_tac_toe_$_iter__36538.call(null,cljs.core.rest.call(null,s__36539__$1)));
} else {
var G__36556 = cljs.core.rest.call(null,s__36539__$1);
s__36539__$1 = G__36556;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.main.core.board_size));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function tictactoe$main$core$tic_tac_toe_$_new_game_click(e){
cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.main.core.new_board.call(null,tictactoe.main.core.board_size));

return cljs.core.swap_BANG_.call(null,tictactoe.main.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
})], null),"New Game"], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.main.core.tic_tac_toe], null),document.getElementById("app"));
tictactoe.main.core.on_js_reload = (function tictactoe$main$core$on_js_reload(){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.main.core.app_state)));
});

//# sourceMappingURL=core.js.map?rel=1494498380692