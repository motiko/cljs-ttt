// Compiled by ClojureScript 1.9.229 {}
goog.provide('tictactoe.workers.ai');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('butler.core');
cljs.core.enable_console_print_BANG_.call(null);
tictactoe.workers.ai.winning_k = (3);
tictactoe.workers.ai.X = "X";
tictactoe.workers.ai.O = "O";
tictactoe.workers.ai.B = "B";
tictactoe.workers.ai.board_size = (3);
tictactoe.workers.ai.opponent = new cljs.core.PersistentArrayMap(null, 2, ["X","O","O","X"], null);
tictactoe.workers.ai.free_spots = (function tictactoe$workers$ai$free_spots(var_args){
var args30115 = [];
var len__27315__auto___30124 = arguments.length;
var i__27316__auto___30125 = (0);
while(true){
if((i__27316__auto___30125 < len__27315__auto___30124)){
args30115.push((arguments[i__27316__auto___30125]));

var G__30126 = (i__27316__auto___30125 + (1));
i__27316__auto___30125 = G__30126;
continue;
} else {
}
break;
}

var G__30117 = args30115.length;
switch (G__30117) {
case 1:
return tictactoe.workers.ai.free_spots.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tictactoe.workers.ai.free_spots.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30115.length)].join('')));

}
});

tictactoe.workers.ai.free_spots.cljs$core$IFn$_invoke$arity$1 = (function (board){
var iter__27020__auto__ = (function tictactoe$workers$ai$iter__30118(s__30119){
return (new cljs.core.LazySeq(null,(function (){
var s__30119__$1 = s__30119;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30119__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__27016__auto__ = ((function (s__30119__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$workers$ai$iter__30118_$_iter__30120(s__30121){
return (new cljs.core.LazySeq(null,((function (s__30119__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__30121__$1 = s__30121;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__30121__$1);
if(temp__4657__auto____$1){
var s__30121__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30121__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__30121__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__30123 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__30122 = (0);
while(true){
if((i__30122 < size__27019__auto__)){
var j = cljs.core._nth.call(null,c__27018__auto__,i__30122);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
cljs.core.chunk_append.call(null,b__30123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__30128 = (i__30122 + (1));
i__30122 = G__30128;
continue;
} else {
var G__30129 = (i__30122 + (1));
i__30122 = G__30129;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30123),tictactoe$workers$ai$iter__30118_$_iter__30120.call(null,cljs.core.chunk_rest.call(null,s__30121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30123),null);
}
} else {
var j = cljs.core.first.call(null,s__30121__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),tictactoe$workers$ai$iter__30118_$_iter__30120.call(null,cljs.core.rest.call(null,s__30121__$2)));
} else {
var G__30130 = cljs.core.rest.call(null,s__30121__$2);
s__30121__$1 = G__30130;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30119__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__30119__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__27017__auto__ = cljs.core.seq.call(null,iterys__27016__auto__.call(null,cljs.core.range.call(null,tictactoe.workers.ai.board_size)));
if(fs__27017__auto__){
return cljs.core.concat.call(null,fs__27017__auto__,tictactoe$workers$ai$iter__30118.call(null,cljs.core.rest.call(null,s__30119__$1)));
} else {
var G__30131 = cljs.core.rest.call(null,s__30119__$1);
s__30119__$1 = G__30131;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,tictactoe.workers.ai.board_size));
});

tictactoe.workers.ai.free_spots.cljs$core$IFn$_invoke$arity$2 = (function (board,line_coords){
return cljs.core.filter.call(null,(function (p1__30114_SHARP_){
return cljs.core._EQ_.call(null,"B",cljs.core.get_in.call(null,board,p1__30114_SHARP_));
}),line_coords);
});

tictactoe.workers.ai.free_spots.cljs$lang$maxFixedArity = 2;

tictactoe.workers.ai.draw_QMARK_ = (function tictactoe$workers$ai$draw_QMARK_(board){
return cljs.core.empty_QMARK_.call(null,tictactoe.workers.ai.free_spots.call(null,board));
});
tictactoe.workers.ai.vertical_coords = (function tictactoe$workers$ai$vertical_coords(y){
return cljs.core.map.call(null,(function (p1__30132_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30132_SHARP_,y],null));
}),cljs.core.range.call(null,tictactoe.workers.ai.board_size));
});
tictactoe.workers.ai.horizontal_coords = (function tictactoe$workers$ai$horizontal_coords(x){
return cljs.core.map.call(null,(function (p1__30133_SHARP_){
return cljs.core.vec.call(null,cljs.core.rseq.call(null,p1__30133_SHARP_));
}),tictactoe.workers.ai.vertical_coords.call(null,x));
});
tictactoe.workers.ai.diagonal_down_coords = (function tictactoe$workers$ai$diagonal_down_coords(){
var iter__27020__auto__ = (function tictactoe$workers$ai$diagonal_down_coords_$_iter__30138(s__30139){
return (new cljs.core.LazySeq(null,(function (){
var s__30139__$1 = s__30139;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30139__$1);
if(temp__4657__auto__){
var s__30139__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30139__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__30139__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__30141 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__30140 = (0);
while(true){
if((i__30140 < size__27019__auto__)){
var i = cljs.core._nth.call(null,c__27018__auto__,i__30140);
cljs.core.chunk_append.call(null,b__30141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__30142 = (i__30140 + (1));
i__30140 = G__30142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30141),tictactoe$workers$ai$diagonal_down_coords_$_iter__30138.call(null,cljs.core.chunk_rest.call(null,s__30139__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30141),null);
}
} else {
var i = cljs.core.first.call(null,s__30139__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),tictactoe$workers$ai$diagonal_down_coords_$_iter__30138.call(null,cljs.core.rest.call(null,s__30139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,tictactoe.workers.ai.board_size));
});
tictactoe.workers.ai.diagonal_up_coords = (function tictactoe$workers$ai$diagonal_up_coords(){
var iter__27020__auto__ = (function tictactoe$workers$ai$diagonal_up_coords_$_iter__30147(s__30148){
return (new cljs.core.LazySeq(null,(function (){
var s__30148__$1 = s__30148;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30148__$1);
if(temp__4657__auto__){
var s__30148__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30148__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__30148__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__30150 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__30149 = (0);
while(true){
if((i__30149 < size__27019__auto__)){
var i = cljs.core._nth.call(null,c__27018__auto__,i__30149);
cljs.core.chunk_append.call(null,b__30150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.workers.ai.board_size - (1)) - i)], null));

var G__30151 = (i__30149 + (1));
i__30149 = G__30151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30150),tictactoe$workers$ai$diagonal_up_coords_$_iter__30147.call(null,cljs.core.chunk_rest.call(null,s__30148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30150),null);
}
} else {
var i = cljs.core.first.call(null,s__30148__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.workers.ai.board_size - (1)) - i)], null),tictactoe$workers$ai$diagonal_up_coords_$_iter__30147.call(null,cljs.core.rest.call(null,s__30148__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,tictactoe.workers.ai.board_size));
});
tictactoe.workers.ai.get_coords = (function tictactoe$workers$ai$get_coords(board,coords){
return cljs.core.map.call(null,(function (p1__30152_SHARP_){
return cljs.core.get_in.call(null,board,p1__30152_SHARP_);
}),coords);
});
tictactoe.workers.ai.all_lines_coords = (function tictactoe$workers$ai$all_lines_coords(){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.workers.ai.diagonal_down_coords.call(null),tictactoe.workers.ai.diagonal_up_coords.call(null)], null),(function (){var iter__27020__auto__ = (function tictactoe$workers$ai$all_lines_coords_$_iter__30161(s__30162){
return (new cljs.core.LazySeq(null,(function (){
var s__30162__$1 = s__30162;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30162__$1);
if(temp__4657__auto__){
var s__30162__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30162__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__30162__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__30164 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__30163 = (0);
while(true){
if((i__30163 < size__27019__auto__)){
var i = cljs.core._nth.call(null,c__27018__auto__,i__30163);
cljs.core.chunk_append.call(null,b__30164,tictactoe.workers.ai.horizontal_coords.call(null,i));

var G__30169 = (i__30163 + (1));
i__30163 = G__30169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30164),tictactoe$workers$ai$all_lines_coords_$_iter__30161.call(null,cljs.core.chunk_rest.call(null,s__30162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30164),null);
}
} else {
var i = cljs.core.first.call(null,s__30162__$2);
return cljs.core.cons.call(null,tictactoe.workers.ai.horizontal_coords.call(null,i),tictactoe$workers$ai$all_lines_coords_$_iter__30161.call(null,cljs.core.rest.call(null,s__30162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,tictactoe.workers.ai.board_size));
})(),(function (){var iter__27020__auto__ = (function tictactoe$workers$ai$all_lines_coords_$_iter__30165(s__30166){
return (new cljs.core.LazySeq(null,(function (){
var s__30166__$1 = s__30166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30166__$1);
if(temp__4657__auto__){
var s__30166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30166__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__30166__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__30168 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__30167 = (0);
while(true){
if((i__30167 < size__27019__auto__)){
var i = cljs.core._nth.call(null,c__27018__auto__,i__30167);
cljs.core.chunk_append.call(null,b__30168,tictactoe.workers.ai.vertical_coords.call(null,i));

var G__30170 = (i__30167 + (1));
i__30167 = G__30170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30168),tictactoe$workers$ai$all_lines_coords_$_iter__30165.call(null,cljs.core.chunk_rest.call(null,s__30166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30168),null);
}
} else {
var i = cljs.core.first.call(null,s__30166__$2);
return cljs.core.cons.call(null,tictactoe.workers.ai.vertical_coords.call(null,i),tictactoe$workers$ai$all_lines_coords_$_iter__30165.call(null,cljs.core.rest.call(null,s__30166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,tictactoe.workers.ai.board_size));
})());
});
tictactoe.workers.ai.all_lines = (function tictactoe$workers$ai$all_lines(board){
return cljs.core.map.call(null,(function (p1__30171_SHARP_){
return tictactoe.workers.ai.get_coords.call(null,board,p1__30171_SHARP_);
}),tictactoe.workers.ai.all_lines_coords.call(null));
});
tictactoe.workers.ai.winning_by_QMARK_ = (function tictactoe$workers$ai$winning_by_QMARK_(player,line){
return cljs.core.every_QMARK_.call(null,(function (p1__30172_SHARP_){
return cljs.core._EQ_.call(null,p1__30172_SHARP_,player);
}),cljs.core.take.call(null,tictactoe.workers.ai.winning_k,line));
});
tictactoe.workers.ai.winning_QMARK_ = (function tictactoe$workers$ai$winning_QMARK_(board,player){
return cljs.core.some.call(null,cljs.core.partial.call(null,tictactoe.workers.ai.winning_by_QMARK_,player),tictactoe.workers.ai.all_lines.call(null,board));
});
tictactoe.workers.ai.evaluate_board = (function tictactoe$workers$ai$evaluate_board(board,player){
if(cljs.core.truth_(tictactoe.workers.ai.winning_QMARK_.call(null,board,player))){
return (1);
} else {
if(cljs.core.truth_(tictactoe.workers.ai.winning_QMARK_.call(null,board,tictactoe.workers.ai.opponent.call(null,player)))){
return (-1);
} else {
if(cljs.core.truth_(tictactoe.workers.ai.draw_QMARK_.call(null,board))){
return (0);
} else {
return null;

}
}
}
});
tictactoe.workers.ai.evaluate_moves_deep = (function tictactoe$workers$ai$evaluate_moves_deep(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30180 = arguments.length;
var i__27316__auto___30181 = (0);
while(true){
if((i__27316__auto___30181 < len__27315__auto___30180)){
args__27322__auto__.push((arguments[i__27316__auto___30181]));

var G__30182 = (i__27316__auto___30181 + (1));
i__27316__auto___30181 = G__30182;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((4) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((4)),(0),null)):null);
return tictactoe.workers.ai.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__27323__auto__);
});

tictactoe.workers.ai.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic = (function (board,player,max_depth,computer,last_move){
var score = tictactoe.workers.ai.evaluate_board.call(null,board,computer);
if(cljs.core.truth_((function (){var or__26240__auto__ = score;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return (max_depth < (0));
}
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[score,last_move]);
} else {
var legal_moves = cljs.core.map.call(null,((function (score){
return (function (p1__30173_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.assoc_in.call(null,board,p1__30173_SHARP_,player),p1__30173_SHARP_]);
});})(score))
,tictactoe.workers.ai.free_spots.call(null,board));
var evaluated_moves = cljs.core.map.call(null,((function (legal_moves,score){
return (function (p1__30174_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.trampoline.call(null,tictactoe.workers.ai.evaluate_moves_deep,p1__30174_SHARP_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633)),tictactoe.workers.ai.opponent.call(null,player),(max_depth - (1)),computer,p1__30174_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))).call(null,new cljs.core.Keyword(null,"score","score",-1963588780)),p1__30174_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))]);
});})(legal_moves,score))
,legal_moves);
return cljs.core.first.call(null,((cljs.core._EQ_.call(null,player,computer))?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._GT_,evaluated_moves):cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._LT_,evaluated_moves)));
}
});

tictactoe.workers.ai.evaluate_moves_deep.cljs$lang$maxFixedArity = (4);

tictactoe.workers.ai.evaluate_moves_deep.cljs$lang$applyTo = (function (seq30175){
var G__30176 = cljs.core.first.call(null,seq30175);
var seq30175__$1 = cljs.core.next.call(null,seq30175);
var G__30177 = cljs.core.first.call(null,seq30175__$1);
var seq30175__$2 = cljs.core.next.call(null,seq30175__$1);
var G__30178 = cljs.core.first.call(null,seq30175__$2);
var seq30175__$3 = cljs.core.next.call(null,seq30175__$2);
var G__30179 = cljs.core.first.call(null,seq30175__$3);
var seq30175__$4 = cljs.core.next.call(null,seq30175__$3);
return tictactoe.workers.ai.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic(G__30176,G__30177,G__30178,G__30179,seq30175__$4);
});

tictactoe.workers.ai.find_best_move = (function tictactoe$workers$ai$find_best_move(board){
return tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"O",(5),"O").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
});
tictactoe.workers.ai.analyze_handler = (function tictactoe$workers$ai$analyze_handler(board){
return butler.core.bring_BANG_.call(null,new cljs.core.Keyword(null,"analyze-result","analyze-result",1074901422),tictactoe.workers.ai.find_best_move.call(null,board));
});
butler.core.serve_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-analyze","request-analyze",-185801518),tictactoe.workers.ai.analyze_handler], null));
tictactoe.workers.ai.eval_lost_pos = (function tictactoe$workers$ai$eval_lost_pos(){
return cljs.test.test_var.call(null,tictactoe$workers$ai$eval_lost_pos.cljs$lang$var);
});
tictactoe.workers.ai.eval_lost_pos.cljs$lang$test = (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","B","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","X","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","B","X"], null)], null);
var score = tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"O",(1),"O").call(null,new cljs.core.Keyword(null,"score","score",-1963588780));
try{var values__29861__auto__ = (function (){var x__27074__auto__ = score;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(-1)),x__27074__auto__);
})();
var result__29862__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__29861__auto__);
if(cljs.core.truth_(result__29862__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"score","score",-323057253,null),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__29861__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"score","score",-323057253,null),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27074__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__29861__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__29862__auto__;
}catch (e30183){var t__29899__auto__ = e30183;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"score","score",-323057253,null),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__29899__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

tictactoe.workers.ai.eval_lost_pos.cljs$lang$var = new cljs.core.Var(function(){return tictactoe.workers.ai.eval_lost_pos;},new cljs.core.Symbol("tictactoe.workers.ai","eval-lost-pos","tictactoe.workers.ai/eval-lost-pos",1157531051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tictactoe.workers.ai","tictactoe.workers.ai",1915594111,null),new cljs.core.Symbol(null,"eval-lost-pos","eval-lost-pos",882566934,null),"/Users/moti/tictactoe/src/tictactoe/workers/ai.cljs",23,1,84,84,cljs.core.List.EMPTY,null,(cljs.core.truth_(tictactoe.workers.ai.eval_lost_pos)?tictactoe.workers.ai.eval_lost_pos.cljs$lang$test:null)]));
tictactoe.workers.ai.eval_won_pos = (function tictactoe$workers$ai$eval_won_pos(){
return cljs.test.test_var.call(null,tictactoe$workers$ai$eval_won_pos.cljs$lang$var);
});
tictactoe.workers.ai.eval_won_pos.cljs$lang$test = (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","B","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","X","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","B","X"], null)], null);
var score = tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"X",(1),"X").call(null,new cljs.core.Keyword(null,"score","score",-1963588780));
try{var values__29861__auto__ = (function (){var x__27074__auto__ = score;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__27074__auto__);
})();
var result__29862__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__29861__auto__);
if(cljs.core.truth_(result__29862__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"score","score",-323057253,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__29861__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"score","score",-323057253,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27074__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__29861__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__29862__auto__;
}catch (e30184){var t__29899__auto__ = e30184;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"score","score",-323057253,null),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__29899__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

tictactoe.workers.ai.eval_won_pos.cljs$lang$var = new cljs.core.Var(function(){return tictactoe.workers.ai.eval_won_pos;},new cljs.core.Symbol("tictactoe.workers.ai","eval-won-pos","tictactoe.workers.ai/eval-won-pos",787533079,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tictactoe.workers.ai","tictactoe.workers.ai",1915594111,null),new cljs.core.Symbol(null,"eval-won-pos","eval-won-pos",-1634260860,null),"/Users/moti/tictactoe/src/tictactoe/workers/ai.cljs",22,1,91,91,cljs.core.List.EMPTY,null,(cljs.core.truth_(tictactoe.workers.ai.eval_won_pos)?tictactoe.workers.ai.eval_won_pos.cljs$lang$test:null)]));
tictactoe.workers.ai.one_move_win = (function tictactoe$workers$ai$one_move_win(){
return cljs.test.test_var.call(null,tictactoe$workers$ai$one_move_win.cljs$lang$var);
});
tictactoe.workers.ai.one_move_win.cljs$lang$test = (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","B","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","X","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","B","O"], null)], null);
var result = tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"O",(1),"O");
var move = result.call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
try{var values__29861__auto__ = (function (){var x__27074__auto__ = move;
return cljs.core._conj.call(null,(function (){var x__27074__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto____$1);
})(),x__27074__auto__);
})();
var result__29862__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__29861__auto__);
if(cljs.core.truth_(result__29862__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__29861__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27074__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__29861__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__29862__auto__;
}catch (e30185){var t__29899__auto__ = e30185;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__29899__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

tictactoe.workers.ai.one_move_win.cljs$lang$var = new cljs.core.Var(function(){return tictactoe.workers.ai.one_move_win;},new cljs.core.Symbol("tictactoe.workers.ai","one-move-win","tictactoe.workers.ai/one-move-win",-72104046,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tictactoe.workers.ai","tictactoe.workers.ai",1915594111,null),new cljs.core.Symbol(null,"one-move-win","one-move-win",186100031,null),"/Users/moti/tictactoe/src/tictactoe/workers/ai.cljs",22,1,98,98,cljs.core.List.EMPTY,null,(cljs.core.truth_(tictactoe.workers.ai.one_move_win)?tictactoe.workers.ai.one_move_win.cljs$lang$test:null)]));
tictactoe.workers.ai.block_one_move_win = (function tictactoe$workers$ai$block_one_move_win(){
return cljs.test.test_var.call(null,tictactoe$workers$ai$block_one_move_win.cljs$lang$var);
});
tictactoe.workers.ai.block_one_move_win.cljs$lang$test = (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","B","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","X","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","B","O"], null)], null);
var move = tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"X",(1),"X").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
try{var values__29861__auto__ = (function (){var x__27074__auto__ = move;
return cljs.core._conj.call(null,(function (){var x__27074__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto____$1);
})(),x__27074__auto__);
})();
var result__29862__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__29861__auto__);
if(cljs.core.truth_(result__29862__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__29861__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27074__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__29861__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__29862__auto__;
}catch (e30186){var t__29899__auto__ = e30186;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__29899__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

tictactoe.workers.ai.block_one_move_win.cljs$lang$var = new cljs.core.Var(function(){return tictactoe.workers.ai.block_one_move_win;},new cljs.core.Symbol("tictactoe.workers.ai","block-one-move-win","tictactoe.workers.ai/block-one-move-win",-856680658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tictactoe.workers.ai","tictactoe.workers.ai",1915594111,null),new cljs.core.Symbol(null,"block-one-move-win","block-one-move-win",-1131122085,null),"/Users/moti/tictactoe/src/tictactoe/workers/ai.cljs",28,1,106,106,cljs.core.List.EMPTY,null,(cljs.core.truth_(tictactoe.workers.ai.block_one_move_win)?tictactoe.workers.ai.block_one_move_win.cljs$lang$test:null)]));
tictactoe.workers.ai.fork = (function tictactoe$workers$ai$fork(){
return cljs.test.test_var.call(null,tictactoe$workers$ai$fork.cljs$lang$var);
});
tictactoe.workers.ai.fork.cljs$lang$test = (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","X","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","B","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","B","B"], null)], null);
var move = tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"O",(5),"O").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
try{var values__29861__auto__ = (function (){var x__27074__auto__ = move;
return cljs.core._conj.call(null,(function (){var x__27074__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto____$1);
})(),x__27074__auto__);
})();
var result__29862__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__29861__auto__);
if(cljs.core.truth_(result__29862__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__29861__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27074__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__29861__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__29862__auto__;
}catch (e30187){var t__29899__auto__ = e30187;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__29899__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

tictactoe.workers.ai.fork.cljs$lang$var = new cljs.core.Var(function(){return tictactoe.workers.ai.fork;},new cljs.core.Symbol("tictactoe.workers.ai","fork","tictactoe.workers.ai/fork",-795304713,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tictactoe.workers.ai","tictactoe.workers.ai",1915594111,null),new cljs.core.Symbol(null,"fork","fork",-1591461534,null),"/Users/moti/tictactoe/src/tictactoe/workers/ai.cljs",14,1,113,113,cljs.core.List.EMPTY,null,(cljs.core.truth_(tictactoe.workers.ai.fork)?tictactoe.workers.ai.fork.cljs$lang$test:null)]));
tictactoe.workers.ai.block_fork = (function tictactoe$workers$ai$block_fork(){
return cljs.test.test_var.call(null,tictactoe$workers$ai$block_fork.cljs$lang$var);
});
tictactoe.workers.ai.block_fork.cljs$lang$test = (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","X","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","B","B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","B","B"], null)], null);
var move = tictactoe.workers.ai.evaluate_moves_deep.call(null,board,"X",(5),"X").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
try{var values__29861__auto__ = (function (){var x__27074__auto__ = move;
return cljs.core._conj.call(null,(function (){var x__27074__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto____$1);
})(),x__27074__auto__);
})();
var result__29862__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__29861__auto__);
if(cljs.core.truth_(result__29862__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__29861__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__27074__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__29861__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27074__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__29862__auto__;
}catch (e30188){var t__29899__auto__ = e30188;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"move","move",-470352782,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__29899__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

tictactoe.workers.ai.block_fork.cljs$lang$var = new cljs.core.Var(function(){return tictactoe.workers.ai.block_fork;},new cljs.core.Symbol("tictactoe.workers.ai","block-fork","tictactoe.workers.ai/block-fork",128787680,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tictactoe.workers.ai","tictactoe.workers.ai",1915594111,null),new cljs.core.Symbol(null,"block-fork","block-fork",-163477635,null),"/Users/moti/tictactoe/src/tictactoe/workers/ai.cljs",20,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(tictactoe.workers.ai.block_fork)?tictactoe.workers.ai.block_fork.cljs$lang$test:null)]));

//# sourceMappingURL=ai.js.map?rel=1493511393447