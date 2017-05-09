// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.ai.minimax');
goog.require('cljs.core');
tictactoe.ai.minimax.winning_k = (3);
tictactoe.ai.minimax.X = "X";
tictactoe.ai.minimax.O = "O";
tictactoe.ai.minimax.B = "B";
tictactoe.ai.minimax.board_size = (3);
tictactoe.ai.minimax.opponent = new cljs.core.PersistentArrayMap(null, 2, ["X","O","O","X"], null);
tictactoe.ai.minimax.free_spots = (function tictactoe$ai$minimax$free_spots(var_args){
var args8807 = [];
var len__7852__auto___8816 = arguments.length;
var i__7853__auto___8817 = (0);
while(true){
if((i__7853__auto___8817 < len__7852__auto___8816)){
args8807.push((arguments[i__7853__auto___8817]));

var G__8818 = (i__7853__auto___8817 + (1));
i__7853__auto___8817 = G__8818;
continue;
} else {
}
break;
}

var G__8809 = args8807.length;
switch (G__8809) {
case 1:
return tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8807.length)].join('')));

}
});

tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$1 = (function (board){
var iter__7557__auto__ = (function tictactoe$ai$minimax$iter__8810(s__8811){
return (new cljs.core.LazySeq(null,(function (){
var s__8811__$1 = s__8811;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8811__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7553__auto__ = ((function (s__8811__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$ai$minimax$iter__8810_$_iter__8812(s__8813){
return (new cljs.core.LazySeq(null,((function (s__8811__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__8813__$1 = s__8813;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__8813__$1);
if(temp__4657__auto____$1){
var s__8813__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8813__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__8813__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__8815 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__8814 = (0);
while(true){
if((i__8814 < size__7556__auto__)){
var j = cljs.core._nth.call(null,c__7555__auto__,i__8814);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
cljs.core.chunk_append.call(null,b__8815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__8820 = (i__8814 + (1));
i__8814 = G__8820;
continue;
} else {
var G__8821 = (i__8814 + (1));
i__8814 = G__8821;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),tictactoe$ai$minimax$iter__8810_$_iter__8812.call(null,cljs.core.chunk_rest.call(null,s__8813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),null);
}
} else {
var j = cljs.core.first.call(null,s__8813__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),tictactoe$ai$minimax$iter__8810_$_iter__8812.call(null,cljs.core.rest.call(null,s__8813__$2)));
} else {
var G__8822 = cljs.core.rest.call(null,s__8813__$2);
s__8813__$1 = G__8822;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__8811__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__8811__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__7554__auto__ = cljs.core.seq.call(null,iterys__7553__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size)));
if(fs__7554__auto__){
return cljs.core.concat.call(null,fs__7554__auto__,tictactoe$ai$minimax$iter__8810.call(null,cljs.core.rest.call(null,s__8811__$1)));
} else {
var G__8823 = cljs.core.rest.call(null,s__8811__$1);
s__8811__$1 = G__8823;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7557__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});

tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$2 = (function (board,line_coords){
return cljs.core.filter.call(null,(function (p1__8806_SHARP_){
return cljs.core._EQ_.call(null,"B",cljs.core.get_in.call(null,board,p1__8806_SHARP_));
}),line_coords);
});

tictactoe.ai.minimax.free_spots.cljs$lang$maxFixedArity = 2;

tictactoe.ai.minimax.draw_QMARK_ = (function tictactoe$ai$minimax$draw_QMARK_(board){
return cljs.core.empty_QMARK_.call(null,tictactoe.ai.minimax.free_spots.call(null,board));
});
tictactoe.ai.minimax.vertical_coords = (function tictactoe$ai$minimax$vertical_coords(y){
return cljs.core.map.call(null,(function (p1__8824_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8824_SHARP_,y],null));
}),cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.horizontal_coords = (function tictactoe$ai$minimax$horizontal_coords(x){
return cljs.core.map.call(null,(function (p1__8825_SHARP_){
return cljs.core.vec.call(null,cljs.core.rseq.call(null,p1__8825_SHARP_));
}),tictactoe.ai.minimax.vertical_coords.call(null,x));
});
tictactoe.ai.minimax.diagonal_down_coords = (function tictactoe$ai$minimax$diagonal_down_coords(){
var iter__7557__auto__ = (function tictactoe$ai$minimax$diagonal_down_coords_$_iter__8830(s__8831){
return (new cljs.core.LazySeq(null,(function (){
var s__8831__$1 = s__8831;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8831__$1);
if(temp__4657__auto__){
var s__8831__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8831__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__8831__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__8833 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__8832 = (0);
while(true){
if((i__8832 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__8832);
cljs.core.chunk_append.call(null,b__8833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__8834 = (i__8832 + (1));
i__8832 = G__8834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8833),tictactoe$ai$minimax$diagonal_down_coords_$_iter__8830.call(null,cljs.core.chunk_rest.call(null,s__8831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8833),null);
}
} else {
var i = cljs.core.first.call(null,s__8831__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),tictactoe$ai$minimax$diagonal_down_coords_$_iter__8830.call(null,cljs.core.rest.call(null,s__8831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7557__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.diagonal_up_coords = (function tictactoe$ai$minimax$diagonal_up_coords(){
var iter__7557__auto__ = (function tictactoe$ai$minimax$diagonal_up_coords_$_iter__8839(s__8840){
return (new cljs.core.LazySeq(null,(function (){
var s__8840__$1 = s__8840;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8840__$1);
if(temp__4657__auto__){
var s__8840__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8840__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__8840__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__8842 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__8841 = (0);
while(true){
if((i__8841 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__8841);
cljs.core.chunk_append.call(null,b__8842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.ai.minimax.board_size - (1)) - i)], null));

var G__8843 = (i__8841 + (1));
i__8841 = G__8843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8842),tictactoe$ai$minimax$diagonal_up_coords_$_iter__8839.call(null,cljs.core.chunk_rest.call(null,s__8840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8842),null);
}
} else {
var i = cljs.core.first.call(null,s__8840__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.ai.minimax.board_size - (1)) - i)], null),tictactoe$ai$minimax$diagonal_up_coords_$_iter__8839.call(null,cljs.core.rest.call(null,s__8840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7557__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.get_coords = (function tictactoe$ai$minimax$get_coords(board,coords){
return cljs.core.map.call(null,(function (p1__8844_SHARP_){
return cljs.core.get_in.call(null,board,p1__8844_SHARP_);
}),coords);
});
tictactoe.ai.minimax.all_lines_coords = (function tictactoe$ai$minimax$all_lines_coords(){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.ai.minimax.diagonal_down_coords.call(null),tictactoe.ai.minimax.diagonal_up_coords.call(null)], null),(function (){var iter__7557__auto__ = (function tictactoe$ai$minimax$all_lines_coords_$_iter__8853(s__8854){
return (new cljs.core.LazySeq(null,(function (){
var s__8854__$1 = s__8854;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8854__$1);
if(temp__4657__auto__){
var s__8854__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8854__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__8854__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__8856 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__8855 = (0);
while(true){
if((i__8855 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__8855);
cljs.core.chunk_append.call(null,b__8856,tictactoe.ai.minimax.horizontal_coords.call(null,i));

var G__8861 = (i__8855 + (1));
i__8855 = G__8861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8856),tictactoe$ai$minimax$all_lines_coords_$_iter__8853.call(null,cljs.core.chunk_rest.call(null,s__8854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8856),null);
}
} else {
var i = cljs.core.first.call(null,s__8854__$2);
return cljs.core.cons.call(null,tictactoe.ai.minimax.horizontal_coords.call(null,i),tictactoe$ai$minimax$all_lines_coords_$_iter__8853.call(null,cljs.core.rest.call(null,s__8854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7557__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
})(),(function (){var iter__7557__auto__ = (function tictactoe$ai$minimax$all_lines_coords_$_iter__8857(s__8858){
return (new cljs.core.LazySeq(null,(function (){
var s__8858__$1 = s__8858;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8858__$1);
if(temp__4657__auto__){
var s__8858__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8858__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__8858__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__8860 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__8859 = (0);
while(true){
if((i__8859 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__8859);
cljs.core.chunk_append.call(null,b__8860,tictactoe.ai.minimax.vertical_coords.call(null,i));

var G__8862 = (i__8859 + (1));
i__8859 = G__8862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8860),tictactoe$ai$minimax$all_lines_coords_$_iter__8857.call(null,cljs.core.chunk_rest.call(null,s__8858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8860),null);
}
} else {
var i = cljs.core.first.call(null,s__8858__$2);
return cljs.core.cons.call(null,tictactoe.ai.minimax.vertical_coords.call(null,i),tictactoe$ai$minimax$all_lines_coords_$_iter__8857.call(null,cljs.core.rest.call(null,s__8858__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7557__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
})());
});
tictactoe.ai.minimax.all_lines = (function tictactoe$ai$minimax$all_lines(board){
return cljs.core.map.call(null,(function (p1__8863_SHARP_){
return tictactoe.ai.minimax.get_coords.call(null,board,p1__8863_SHARP_);
}),tictactoe.ai.minimax.all_lines_coords.call(null));
});
tictactoe.ai.minimax.winning_by_QMARK_ = (function tictactoe$ai$minimax$winning_by_QMARK_(player,line){
return cljs.core.every_QMARK_.call(null,(function (p1__8864_SHARP_){
return cljs.core._EQ_.call(null,p1__8864_SHARP_,player);
}),cljs.core.take.call(null,tictactoe.ai.minimax.winning_k,line));
});
tictactoe.ai.minimax.winning_QMARK_ = (function tictactoe$ai$minimax$winning_QMARK_(board,player){
return cljs.core.some.call(null,cljs.core.partial.call(null,tictactoe.ai.minimax.winning_by_QMARK_,player),tictactoe.ai.minimax.all_lines.call(null,board));
});
tictactoe.ai.minimax.evaluate_board = (function tictactoe$ai$minimax$evaluate_board(board,player){
if(cljs.core.truth_(tictactoe.ai.minimax.winning_QMARK_.call(null,board,player))){
return (1);
} else {
if(cljs.core.truth_(tictactoe.ai.minimax.winning_QMARK_.call(null,board,tictactoe.ai.minimax.opponent.call(null,player)))){
return (-1);
} else {
if(cljs.core.truth_(tictactoe.ai.minimax.draw_QMARK_.call(null,board))){
return (0);
} else {
return null;

}
}
}
});
tictactoe.ai.minimax.evaluate_moves_deep = (function tictactoe$ai$minimax$evaluate_moves_deep(var_args){
var args__7859__auto__ = [];
var len__7852__auto___8872 = arguments.length;
var i__7853__auto___8873 = (0);
while(true){
if((i__7853__auto___8873 < len__7852__auto___8872)){
args__7859__auto__.push((arguments[i__7853__auto___8873]));

var G__8874 = (i__7853__auto___8873 + (1));
i__7853__auto___8873 = G__8874;
continue;
} else {
}
break;
}

var argseq__7860__auto__ = ((((4) < args__7859__auto__.length))?(new cljs.core.IndexedSeq(args__7859__auto__.slice((4)),(0),null)):null);
return tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7860__auto__);
});

tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic = (function (board,player,max_depth,computer,last_move){
var score = tictactoe.ai.minimax.evaluate_board.call(null,board,computer);
if(cljs.core.truth_((function (){var or__6777__auto__ = score;
if(cljs.core.truth_(or__6777__auto__)){
return or__6777__auto__;
} else {
return (max_depth < (0));
}
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[score,last_move]);
} else {
var legal_moves = cljs.core.map.call(null,((function (score){
return (function (p1__8865_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.assoc_in.call(null,board,p1__8865_SHARP_,player),p1__8865_SHARP_]);
});})(score))
,tictactoe.ai.minimax.free_spots.call(null,board));
var evaluated_moves = cljs.core.map.call(null,((function (legal_moves,score){
return (function (p1__8866_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.trampoline.call(null,tictactoe.ai.minimax.evaluate_moves_deep,p1__8866_SHARP_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633)),tictactoe.ai.minimax.opponent.call(null,player),(max_depth - (1)),computer,p1__8866_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))).call(null,new cljs.core.Keyword(null,"score","score",-1963588780)),p1__8866_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))]);
});})(legal_moves,score))
,legal_moves);
return cljs.core.first.call(null,((cljs.core._EQ_.call(null,player,computer))?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._GT_,evaluated_moves):cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._LT_,evaluated_moves)));
}
});

tictactoe.ai.minimax.evaluate_moves_deep.cljs$lang$maxFixedArity = (4);

tictactoe.ai.minimax.evaluate_moves_deep.cljs$lang$applyTo = (function (seq8867){
var G__8868 = cljs.core.first.call(null,seq8867);
var seq8867__$1 = cljs.core.next.call(null,seq8867);
var G__8869 = cljs.core.first.call(null,seq8867__$1);
var seq8867__$2 = cljs.core.next.call(null,seq8867__$1);
var G__8870 = cljs.core.first.call(null,seq8867__$2);
var seq8867__$3 = cljs.core.next.call(null,seq8867__$2);
var G__8871 = cljs.core.first.call(null,seq8867__$3);
var seq8867__$4 = cljs.core.next.call(null,seq8867__$3);
return tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic(G__8868,G__8869,G__8870,G__8871,seq8867__$4);
});

tictactoe.ai.minimax.find_best_move = (function tictactoe$ai$minimax$find_best_move(board){
return tictactoe.ai.minimax.evaluate_moves_deep.call(null,board,"O",(5),"O").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
});

//# sourceMappingURL=minimax.js.map?rel=1494351596229