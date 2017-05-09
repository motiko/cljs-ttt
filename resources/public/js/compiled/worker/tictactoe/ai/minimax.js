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
var args13055 = [];
var len__7852__auto___13064 = arguments.length;
var i__7853__auto___13065 = (0);
while(true){
if((i__7853__auto___13065 < len__7852__auto___13064)){
args13055.push((arguments[i__7853__auto___13065]));

var G__13066 = (i__7853__auto___13065 + (1));
i__7853__auto___13065 = G__13066;
continue;
} else {
}
break;
}

var G__13057 = args13055.length;
switch (G__13057) {
case 1:
return tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13055.length)].join('')));

}
});

tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$1 = (function (board){
var iter__7557__auto__ = (function tictactoe$ai$minimax$iter__13058(s__13059){
return (new cljs.core.LazySeq(null,(function (){
var s__13059__$1 = s__13059;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13059__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__7553__auto__ = ((function (s__13059__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$ai$minimax$iter__13058_$_iter__13060(s__13061){
return (new cljs.core.LazySeq(null,((function (s__13059__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__13061__$1 = s__13061;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__13061__$1);
if(temp__4657__auto____$1){
var s__13061__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13061__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__13061__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__13063 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__13062 = (0);
while(true){
if((i__13062 < size__7556__auto__)){
var j = cljs.core._nth.call(null,c__7555__auto__,i__13062);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
cljs.core.chunk_append.call(null,b__13063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__13068 = (i__13062 + (1));
i__13062 = G__13068;
continue;
} else {
var G__13069 = (i__13062 + (1));
i__13062 = G__13069;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13063),tictactoe$ai$minimax$iter__13058_$_iter__13060.call(null,cljs.core.chunk_rest.call(null,s__13061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13063),null);
}
} else {
var j = cljs.core.first.call(null,s__13061__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),tictactoe$ai$minimax$iter__13058_$_iter__13060.call(null,cljs.core.rest.call(null,s__13061__$2)));
} else {
var G__13070 = cljs.core.rest.call(null,s__13061__$2);
s__13061__$1 = G__13070;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__13059__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__13059__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__7554__auto__ = cljs.core.seq.call(null,iterys__7553__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size)));
if(fs__7554__auto__){
return cljs.core.concat.call(null,fs__7554__auto__,tictactoe$ai$minimax$iter__13058.call(null,cljs.core.rest.call(null,s__13059__$1)));
} else {
var G__13071 = cljs.core.rest.call(null,s__13059__$1);
s__13059__$1 = G__13071;
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
return cljs.core.filter.call(null,(function (p1__13054_SHARP_){
return cljs.core._EQ_.call(null,"B",cljs.core.get_in.call(null,board,p1__13054_SHARP_));
}),line_coords);
});

tictactoe.ai.minimax.free_spots.cljs$lang$maxFixedArity = 2;

tictactoe.ai.minimax.draw_QMARK_ = (function tictactoe$ai$minimax$draw_QMARK_(board){
return cljs.core.empty_QMARK_.call(null,tictactoe.ai.minimax.free_spots.call(null,board));
});
tictactoe.ai.minimax.vertical_coords = (function tictactoe$ai$minimax$vertical_coords(y){
return cljs.core.map.call(null,(function (p1__13072_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13072_SHARP_,y],null));
}),cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.horizontal_coords = (function tictactoe$ai$minimax$horizontal_coords(x){
return cljs.core.map.call(null,(function (p1__13073_SHARP_){
return cljs.core.vec.call(null,cljs.core.rseq.call(null,p1__13073_SHARP_));
}),tictactoe.ai.minimax.vertical_coords.call(null,x));
});
tictactoe.ai.minimax.diagonal_down_coords = (function tictactoe$ai$minimax$diagonal_down_coords(){
var iter__7557__auto__ = (function tictactoe$ai$minimax$diagonal_down_coords_$_iter__13078(s__13079){
return (new cljs.core.LazySeq(null,(function (){
var s__13079__$1 = s__13079;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13079__$1);
if(temp__4657__auto__){
var s__13079__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13079__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__13079__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__13081 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__13080 = (0);
while(true){
if((i__13080 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__13080);
cljs.core.chunk_append.call(null,b__13081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__13082 = (i__13080 + (1));
i__13080 = G__13082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13081),tictactoe$ai$minimax$diagonal_down_coords_$_iter__13078.call(null,cljs.core.chunk_rest.call(null,s__13079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13081),null);
}
} else {
var i = cljs.core.first.call(null,s__13079__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),tictactoe$ai$minimax$diagonal_down_coords_$_iter__13078.call(null,cljs.core.rest.call(null,s__13079__$2)));
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
var iter__7557__auto__ = (function tictactoe$ai$minimax$diagonal_up_coords_$_iter__13087(s__13088){
return (new cljs.core.LazySeq(null,(function (){
var s__13088__$1 = s__13088;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13088__$1);
if(temp__4657__auto__){
var s__13088__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13088__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__13088__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__13090 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__13089 = (0);
while(true){
if((i__13089 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__13089);
cljs.core.chunk_append.call(null,b__13090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.ai.minimax.board_size - (1)) - i)], null));

var G__13091 = (i__13089 + (1));
i__13089 = G__13091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13090),tictactoe$ai$minimax$diagonal_up_coords_$_iter__13087.call(null,cljs.core.chunk_rest.call(null,s__13088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13090),null);
}
} else {
var i = cljs.core.first.call(null,s__13088__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.ai.minimax.board_size - (1)) - i)], null),tictactoe$ai$minimax$diagonal_up_coords_$_iter__13087.call(null,cljs.core.rest.call(null,s__13088__$2)));
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
return cljs.core.map.call(null,(function (p1__13092_SHARP_){
return cljs.core.get_in.call(null,board,p1__13092_SHARP_);
}),coords);
});
tictactoe.ai.minimax.all_lines_coords = (function tictactoe$ai$minimax$all_lines_coords(){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.ai.minimax.diagonal_down_coords.call(null),tictactoe.ai.minimax.diagonal_up_coords.call(null)], null),(function (){var iter__7557__auto__ = (function tictactoe$ai$minimax$all_lines_coords_$_iter__13101(s__13102){
return (new cljs.core.LazySeq(null,(function (){
var s__13102__$1 = s__13102;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13102__$1);
if(temp__4657__auto__){
var s__13102__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13102__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__13102__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__13104 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__13103 = (0);
while(true){
if((i__13103 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__13103);
cljs.core.chunk_append.call(null,b__13104,tictactoe.ai.minimax.horizontal_coords.call(null,i));

var G__13109 = (i__13103 + (1));
i__13103 = G__13109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13104),tictactoe$ai$minimax$all_lines_coords_$_iter__13101.call(null,cljs.core.chunk_rest.call(null,s__13102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13104),null);
}
} else {
var i = cljs.core.first.call(null,s__13102__$2);
return cljs.core.cons.call(null,tictactoe.ai.minimax.horizontal_coords.call(null,i),tictactoe$ai$minimax$all_lines_coords_$_iter__13101.call(null,cljs.core.rest.call(null,s__13102__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7557__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
})(),(function (){var iter__7557__auto__ = (function tictactoe$ai$minimax$all_lines_coords_$_iter__13105(s__13106){
return (new cljs.core.LazySeq(null,(function (){
var s__13106__$1 = s__13106;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13106__$1);
if(temp__4657__auto__){
var s__13106__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13106__$2)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,s__13106__$2);
var size__7556__auto__ = cljs.core.count.call(null,c__7555__auto__);
var b__13108 = cljs.core.chunk_buffer.call(null,size__7556__auto__);
if((function (){var i__13107 = (0);
while(true){
if((i__13107 < size__7556__auto__)){
var i = cljs.core._nth.call(null,c__7555__auto__,i__13107);
cljs.core.chunk_append.call(null,b__13108,tictactoe.ai.minimax.vertical_coords.call(null,i));

var G__13110 = (i__13107 + (1));
i__13107 = G__13110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13108),tictactoe$ai$minimax$all_lines_coords_$_iter__13105.call(null,cljs.core.chunk_rest.call(null,s__13106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13108),null);
}
} else {
var i = cljs.core.first.call(null,s__13106__$2);
return cljs.core.cons.call(null,tictactoe.ai.minimax.vertical_coords.call(null,i),tictactoe$ai$minimax$all_lines_coords_$_iter__13105.call(null,cljs.core.rest.call(null,s__13106__$2)));
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
return cljs.core.map.call(null,(function (p1__13111_SHARP_){
return tictactoe.ai.minimax.get_coords.call(null,board,p1__13111_SHARP_);
}),tictactoe.ai.minimax.all_lines_coords.call(null));
});
tictactoe.ai.minimax.winning_by_QMARK_ = (function tictactoe$ai$minimax$winning_by_QMARK_(player,line){
return cljs.core.every_QMARK_.call(null,(function (p1__13112_SHARP_){
return cljs.core._EQ_.call(null,p1__13112_SHARP_,player);
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
var len__7852__auto___13120 = arguments.length;
var i__7853__auto___13121 = (0);
while(true){
if((i__7853__auto___13121 < len__7852__auto___13120)){
args__7859__auto__.push((arguments[i__7853__auto___13121]));

var G__13122 = (i__7853__auto___13121 + (1));
i__7853__auto___13121 = G__13122;
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
return (function (p1__13113_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.assoc_in.call(null,board,p1__13113_SHARP_,player),p1__13113_SHARP_]);
});})(score))
,tictactoe.ai.minimax.free_spots.call(null,board));
var evaluated_moves = cljs.core.map.call(null,((function (legal_moves,score){
return (function (p1__13114_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.trampoline.call(null,tictactoe.ai.minimax.evaluate_moves_deep,p1__13114_SHARP_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633)),tictactoe.ai.minimax.opponent.call(null,player),(max_depth - (1)),computer,p1__13114_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))).call(null,new cljs.core.Keyword(null,"score","score",-1963588780)),p1__13114_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))]);
});})(legal_moves,score))
,legal_moves);
return cljs.core.first.call(null,((cljs.core._EQ_.call(null,player,computer))?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._GT_,evaluated_moves):cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._LT_,evaluated_moves)));
}
});

tictactoe.ai.minimax.evaluate_moves_deep.cljs$lang$maxFixedArity = (4);

tictactoe.ai.minimax.evaluate_moves_deep.cljs$lang$applyTo = (function (seq13115){
var G__13116 = cljs.core.first.call(null,seq13115);
var seq13115__$1 = cljs.core.next.call(null,seq13115);
var G__13117 = cljs.core.first.call(null,seq13115__$1);
var seq13115__$2 = cljs.core.next.call(null,seq13115__$1);
var G__13118 = cljs.core.first.call(null,seq13115__$2);
var seq13115__$3 = cljs.core.next.call(null,seq13115__$2);
var G__13119 = cljs.core.first.call(null,seq13115__$3);
var seq13115__$4 = cljs.core.next.call(null,seq13115__$3);
return tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic(G__13116,G__13117,G__13118,G__13119,seq13115__$4);
});

tictactoe.ai.minimax.find_best_move = (function tictactoe$ai$minimax$find_best_move(board){
return tictactoe.ai.minimax.evaluate_moves_deep.call(null,board,"O",(5),"O").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
});
