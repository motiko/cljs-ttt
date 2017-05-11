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
var args27220 = [];
var len__27165__auto___27229 = arguments.length;
var i__27166__auto___27230 = (0);
while(true){
if((i__27166__auto___27230 < len__27165__auto___27229)){
args27220.push((arguments[i__27166__auto___27230]));

var G__27231 = (i__27166__auto___27230 + (1));
i__27166__auto___27230 = G__27231;
continue;
} else {
}
break;
}

var G__27222 = args27220.length;
switch (G__27222) {
case 1:
return tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27220.length)].join('')));

}
});

tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$1 = (function (board){
var iter__26870__auto__ = (function tictactoe$ai$minimax$iter__27223(s__27224){
return (new cljs.core.LazySeq(null,(function (){
var s__27224__$1 = s__27224;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27224__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__26866__auto__ = ((function (s__27224__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function tictactoe$ai$minimax$iter__27223_$_iter__27225(s__27226){
return (new cljs.core.LazySeq(null,((function (s__27224__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__27226__$1 = s__27226;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__27226__$1);
if(temp__4657__auto____$1){
var s__27226__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27226__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__27226__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__27228 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__27227 = (0);
while(true){
if((i__27227 < size__26869__auto__)){
var j = cljs.core._nth.call(null,c__26868__auto__,i__27227);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
cljs.core.chunk_append.call(null,b__27228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__27233 = (i__27227 + (1));
i__27227 = G__27233;
continue;
} else {
var G__27234 = (i__27227 + (1));
i__27227 = G__27234;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27228),tictactoe$ai$minimax$iter__27223_$_iter__27225.call(null,cljs.core.chunk_rest.call(null,s__27226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27228),null);
}
} else {
var j = cljs.core.first.call(null,s__27226__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),"B")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),tictactoe$ai$minimax$iter__27223_$_iter__27225.call(null,cljs.core.rest.call(null,s__27226__$2)));
} else {
var G__27235 = cljs.core.rest.call(null,s__27226__$2);
s__27226__$1 = G__27235;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__27224__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__27224__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__26867__auto__ = cljs.core.seq.call(null,iterys__26866__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size)));
if(fs__26867__auto__){
return cljs.core.concat.call(null,fs__26867__auto__,tictactoe$ai$minimax$iter__27223.call(null,cljs.core.rest.call(null,s__27224__$1)));
} else {
var G__27236 = cljs.core.rest.call(null,s__27224__$1);
s__27224__$1 = G__27236;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});

tictactoe.ai.minimax.free_spots.cljs$core$IFn$_invoke$arity$2 = (function (board,line_coords){
return cljs.core.filter.call(null,(function (p1__27219_SHARP_){
return cljs.core._EQ_.call(null,"B",cljs.core.get_in.call(null,board,p1__27219_SHARP_));
}),line_coords);
});

tictactoe.ai.minimax.free_spots.cljs$lang$maxFixedArity = 2;

tictactoe.ai.minimax.draw_QMARK_ = (function tictactoe$ai$minimax$draw_QMARK_(board){
return cljs.core.empty_QMARK_.call(null,tictactoe.ai.minimax.free_spots.call(null,board));
});
tictactoe.ai.minimax.vertical_coords = (function tictactoe$ai$minimax$vertical_coords(y){
return cljs.core.map.call(null,(function (p1__27237_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__27237_SHARP_,y],null));
}),cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.horizontal_coords = (function tictactoe$ai$minimax$horizontal_coords(x){
return cljs.core.map.call(null,(function (p1__27238_SHARP_){
return cljs.core.vec.call(null,cljs.core.rseq.call(null,p1__27238_SHARP_));
}),tictactoe.ai.minimax.vertical_coords.call(null,x));
});
tictactoe.ai.minimax.diagonal = (function tictactoe$ai$minimax$diagonal(sx,sy,dx,dy){
var iter__26870__auto__ = (function tictactoe$ai$minimax$diagonal_$_iter__27243(s__27244){
return (new cljs.core.LazySeq(null,(function (){
var s__27244__$1 = s__27244;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27244__$1);
if(temp__4657__auto__){
var s__27244__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27244__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__27244__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__27246 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__27245 = (0);
while(true){
if((i__27245 < size__26869__auto__)){
var i = cljs.core._nth.call(null,c__26868__auto__,i__27245);
cljs.core.chunk_append.call(null,b__27246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (dx * i)),(sy + (dy * i))], null));

var G__27247 = (i__27245 + (1));
i__27245 = G__27247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27246),tictactoe$ai$minimax$diagonal_$_iter__27243.call(null,cljs.core.chunk_rest.call(null,s__27244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27246),null);
}
} else {
var i = cljs.core.first.call(null,s__27244__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (dx * i)),(sy + (dy * i))], null),tictactoe$ai$minimax$diagonal_$_iter__27243.call(null,cljs.core.rest.call(null,s__27244__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.diagonal_down_coords = (function tictactoe$ai$minimax$diagonal_down_coords(){
var iter__26870__auto__ = (function tictactoe$ai$minimax$diagonal_down_coords_$_iter__27252(s__27253){
return (new cljs.core.LazySeq(null,(function (){
var s__27253__$1 = s__27253;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27253__$1);
if(temp__4657__auto__){
var s__27253__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27253__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__27253__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__27255 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__27254 = (0);
while(true){
if((i__27254 < size__26869__auto__)){
var i = cljs.core._nth.call(null,c__26868__auto__,i__27254);
cljs.core.chunk_append.call(null,b__27255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__27256 = (i__27254 + (1));
i__27254 = G__27256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27255),tictactoe$ai$minimax$diagonal_down_coords_$_iter__27252.call(null,cljs.core.chunk_rest.call(null,s__27253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27255),null);
}
} else {
var i = cljs.core.first.call(null,s__27253__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),tictactoe$ai$minimax$diagonal_down_coords_$_iter__27252.call(null,cljs.core.rest.call(null,s__27253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.diagonal_up_coords = (function tictactoe$ai$minimax$diagonal_up_coords(){
var iter__26870__auto__ = (function tictactoe$ai$minimax$diagonal_up_coords_$_iter__27261(s__27262){
return (new cljs.core.LazySeq(null,(function (){
var s__27262__$1 = s__27262;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27262__$1);
if(temp__4657__auto__){
var s__27262__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27262__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__27262__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__27264 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__27263 = (0);
while(true){
if((i__27263 < size__26869__auto__)){
var i = cljs.core._nth.call(null,c__26868__auto__,i__27263);
cljs.core.chunk_append.call(null,b__27264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.ai.minimax.board_size - (1)) - i)], null));

var G__27265 = (i__27263 + (1));
i__27263 = G__27265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27264),tictactoe$ai$minimax$diagonal_up_coords_$_iter__27261.call(null,cljs.core.chunk_rest.call(null,s__27262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27264),null);
}
} else {
var i = cljs.core.first.call(null,s__27262__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((tictactoe.ai.minimax.board_size - (1)) - i)], null),tictactoe$ai$minimax$diagonal_up_coords_$_iter__27261.call(null,cljs.core.rest.call(null,s__27262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
});
tictactoe.ai.minimax.get_coords = (function tictactoe$ai$minimax$get_coords(board,coords){
return cljs.core.map.call(null,(function (p1__27266_SHARP_){
return cljs.core.get_in.call(null,board,p1__27266_SHARP_);
}),coords);
});
tictactoe.ai.minimax.all_lines_coords = (function tictactoe$ai$minimax$all_lines_coords(){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.ai.minimax.diagonal_down_coords.call(null),tictactoe.ai.minimax.diagonal_up_coords.call(null)], null),(function (){var iter__26870__auto__ = (function tictactoe$ai$minimax$all_lines_coords_$_iter__27275(s__27276){
return (new cljs.core.LazySeq(null,(function (){
var s__27276__$1 = s__27276;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27276__$1);
if(temp__4657__auto__){
var s__27276__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27276__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__27276__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__27278 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__27277 = (0);
while(true){
if((i__27277 < size__26869__auto__)){
var i = cljs.core._nth.call(null,c__26868__auto__,i__27277);
cljs.core.chunk_append.call(null,b__27278,tictactoe.ai.minimax.horizontal_coords.call(null,i));

var G__27283 = (i__27277 + (1));
i__27277 = G__27283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27278),tictactoe$ai$minimax$all_lines_coords_$_iter__27275.call(null,cljs.core.chunk_rest.call(null,s__27276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27278),null);
}
} else {
var i = cljs.core.first.call(null,s__27276__$2);
return cljs.core.cons.call(null,tictactoe.ai.minimax.horizontal_coords.call(null,i),tictactoe$ai$minimax$all_lines_coords_$_iter__27275.call(null,cljs.core.rest.call(null,s__27276__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
})(),(function (){var iter__26870__auto__ = (function tictactoe$ai$minimax$all_lines_coords_$_iter__27279(s__27280){
return (new cljs.core.LazySeq(null,(function (){
var s__27280__$1 = s__27280;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27280__$1);
if(temp__4657__auto__){
var s__27280__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27280__$2)){
var c__26868__auto__ = cljs.core.chunk_first.call(null,s__27280__$2);
var size__26869__auto__ = cljs.core.count.call(null,c__26868__auto__);
var b__27282 = cljs.core.chunk_buffer.call(null,size__26869__auto__);
if((function (){var i__27281 = (0);
while(true){
if((i__27281 < size__26869__auto__)){
var i = cljs.core._nth.call(null,c__26868__auto__,i__27281);
cljs.core.chunk_append.call(null,b__27282,tictactoe.ai.minimax.vertical_coords.call(null,i));

var G__27284 = (i__27281 + (1));
i__27281 = G__27284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27282),tictactoe$ai$minimax$all_lines_coords_$_iter__27279.call(null,cljs.core.chunk_rest.call(null,s__27280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27282),null);
}
} else {
var i = cljs.core.first.call(null,s__27280__$2);
return cljs.core.cons.call(null,tictactoe.ai.minimax.vertical_coords.call(null,i),tictactoe$ai$minimax$all_lines_coords_$_iter__27279.call(null,cljs.core.rest.call(null,s__27280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26870__auto__.call(null,cljs.core.range.call(null,tictactoe.ai.minimax.board_size));
})());
});
tictactoe.ai.minimax.all_lines = (function tictactoe$ai$minimax$all_lines(board){
return cljs.core.map.call(null,(function (p1__27285_SHARP_){
return tictactoe.ai.minimax.get_coords.call(null,board,p1__27285_SHARP_);
}),tictactoe.ai.minimax.all_lines_coords.call(null));
});
tictactoe.ai.minimax.winning_by_QMARK_ = (function tictactoe$ai$minimax$winning_by_QMARK_(player,line){
return cljs.core.every_QMARK_.call(null,(function (p1__27286_SHARP_){
return cljs.core._EQ_.call(null,p1__27286_SHARP_,player);
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
var args__27172__auto__ = [];
var len__27165__auto___27294 = arguments.length;
var i__27166__auto___27295 = (0);
while(true){
if((i__27166__auto___27295 < len__27165__auto___27294)){
args__27172__auto__.push((arguments[i__27166__auto___27295]));

var G__27296 = (i__27166__auto___27295 + (1));
i__27166__auto___27295 = G__27296;
continue;
} else {
}
break;
}

var argseq__27173__auto__ = ((((4) < args__27172__auto__.length))?(new cljs.core.IndexedSeq(args__27172__auto__.slice((4)),(0),null)):null);
return tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__27173__auto__);
});

tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic = (function (board,player,max_depth,computer,last_move){
var score = tictactoe.ai.minimax.evaluate_board.call(null,board,computer);
if(cljs.core.truth_((function (){var or__26090__auto__ = score;
if(cljs.core.truth_(or__26090__auto__)){
return or__26090__auto__;
} else {
return (max_depth < (0));
}
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[score,last_move]);
} else {
var legal_moves = cljs.core.map.call(null,((function (score){
return (function (p1__27287_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.assoc_in.call(null,board,p1__27287_SHARP_,player),p1__27287_SHARP_]);
});})(score))
,tictactoe.ai.minimax.free_spots.call(null,board));
var evaluated_moves = cljs.core.map.call(null,((function (legal_moves,score){
return (function (p1__27288_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"move","move",-2110884309)],[cljs.core.trampoline.call(null,tictactoe.ai.minimax.evaluate_moves_deep,p1__27288_SHARP_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633)),tictactoe.ai.minimax.opponent.call(null,player),(max_depth - (1)),computer,p1__27288_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))).call(null,new cljs.core.Keyword(null,"score","score",-1963588780)),p1__27288_SHARP_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309))]);
});})(legal_moves,score))
,legal_moves);
return cljs.core.first.call(null,((cljs.core._EQ_.call(null,player,computer))?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._GT_,evaluated_moves):cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._LT_,evaluated_moves)));
}
});

tictactoe.ai.minimax.evaluate_moves_deep.cljs$lang$maxFixedArity = (4);

tictactoe.ai.minimax.evaluate_moves_deep.cljs$lang$applyTo = (function (seq27289){
var G__27290 = cljs.core.first.call(null,seq27289);
var seq27289__$1 = cljs.core.next.call(null,seq27289);
var G__27291 = cljs.core.first.call(null,seq27289__$1);
var seq27289__$2 = cljs.core.next.call(null,seq27289__$1);
var G__27292 = cljs.core.first.call(null,seq27289__$2);
var seq27289__$3 = cljs.core.next.call(null,seq27289__$2);
var G__27293 = cljs.core.first.call(null,seq27289__$3);
var seq27289__$4 = cljs.core.next.call(null,seq27289__$3);
return tictactoe.ai.minimax.evaluate_moves_deep.cljs$core$IFn$_invoke$arity$variadic(G__27290,G__27291,G__27292,G__27293,seq27289__$4);
});

tictactoe.ai.minimax.find_best_move = (function tictactoe$ai$minimax$find_best_move(board){
return tictactoe.ai.minimax.evaluate_moves_deep.call(null,board,"O",(5),"O").call(null,new cljs.core.Keyword(null,"move","move",-2110884309));
});

//# sourceMappingURL=minimax.js.map?rel=1494497481507