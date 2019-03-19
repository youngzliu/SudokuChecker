export function Sudoku(board) {
  this.board = board;
}

Sudoku.prototype.boardIsValid = function(){
  for(var i = 0; i < this.board.length; i++){
    if(!(this.groupValid(this.board[i]))){
      return false;
    }
  }
  for(var i = 0; i < this.board.length; i++){
    if(!(this.rowValid(i))){
      return false;
    }
  }
  if(!this.boxesValid()){
    return false;
  }
  return true;
}

Sudoku.prototype.groupValid = function(arr){
  for(var i = 1; i <= 9; i++){
    if(!arr.includes(i)){
      return false;
    }
  }
  return true;
}

Sudoku.prototype.rowValid = function(row){
  var arr = [];
  for(var i = 0; i < 9; i++){
    arr.push(this.board[row][i]);
  }
  return this.groupValid(arr);
}

Sudoku.prototype.boxesValid = function(){
  var box1 = [];
  box1.push(this.board[0][0]);
  box1.push(this.board[1][0]);
  box1.push(this.board[2][0]);
  box1.push(this.board[0][1]);
  box1.push(this.board[1][1]);
  box1.push(this.board[2][1]);
  box1.push(this.board[0][2]);
  box1.push(this.board[1][2]);
  box1.push(this.board[2][2]);
  if(!this.groupValid(box1)){
    return false;
  }

  var box2 = [];
  box2.push(this.board[3][0]);
  box2.push(this.board[4][0]);
  box2.push(this.board[5][0]);
  box2.push(this.board[3][1]);
  box2.push(this.board[4][1]);
  box2.push(this.board[5][1]);
  box2.push(this.board[3][2]);
  box2.push(this.board[4][2]);
  box2.push(this.board[5][2]);
  if(!this.groupValid(box2)){
    return false;
  }

  var box3 = [];
  box3.push(this.board[6][0]);
  box3.push(this.board[7][0]);
  box3.push(this.board[8][0]);
  box3.push(this.board[6][1]);
  box3.push(this.board[7][1]);
  box3.push(this.board[8][1]);
  box3.push(this.board[6][2]);
  box3.push(this.board[7][2]);
  box3.push(this.board[8][2]);
  if(!this.groupValid(box3)){
    return false;
  }

  var box4 = [];
  box4.push(this.board[0][3]);
  box4.push(this.board[1][3]);
  box4.push(this.board[2][3]);
  box4.push(this.board[0][4]);
  box4.push(this.board[1][4]);
  box4.push(this.board[2][4]);
  box4.push(this.board[0][5]);
  box4.push(this.board[1][5]);
  box4.push(this.board[2][5]);
  if(!this.groupValid(box4)){
    return false;
  }

  var box5 = [];
  box5.push(this.board[3][3]);
  box5.push(this.board[4][3]);
  box5.push(this.board[5][3]);
  box5.push(this.board[3][4]);
  box5.push(this.board[4][4]);
  box5.push(this.board[5][4]);
  box5.push(this.board[3][5]);
  box5.push(this.board[4][5]);
  box5.push(this.board[5][5]);
  if(!this.groupValid(box5)){
    return false;
  }

  var box6 = [];
  box6.push(this.board[6][3]);
  box6.push(this.board[7][3]);
  box6.push(this.board[8][3]);
  box6.push(this.board[6][4]);
  box6.push(this.board[7][4]);
  box6.push(this.board[8][4]);
  box6.push(this.board[6][5]);
  box6.push(this.board[7][5]);
  box6.push(this.board[8][5]);
  if(!this.groupValid(box6)){
    return false;
  }

  var box7 = [];
  box7.push(this.board[0][6]);
  box7.push(this.board[1][6]);
  box7.push(this.board[2][6]);
  box7.push(this.board[0][7]);
  box7.push(this.board[1][7]);
  box7.push(this.board[2][7]);
  box7.push(this.board[0][8]);
  box7.push(this.board[1][8]);
  box7.push(this.board[2][8]);
  if(!this.groupValid(box7)){
    return false;
  }

  var box8 = [];
  box8.push(this.board[3][6]);
  box8.push(this.board[4][6]);
  box8.push(this.board[5][6]);
  box8.push(this.board[3][7]);
  box8.push(this.board[4][7]);
  box8.push(this.board[5][7]);
  box8.push(this.board[3][8]);
  box8.push(this.board[4][8]);
  box8.push(this.board[5][8]);
  if(!this.groupValid(box8)){
    return false;
  }

  var box9 = [];
  box9.push(this.board[6][6]);
  box9.push(this.board[7][6]);
  box9.push(this.board[8][6]);
  box9.push(this.board[6][7]);
  box9.push(this.board[7][7]);
  box9.push(this.board[8][7]);
  box9.push(this.board[6][8]);
  box9.push(this.board[7][8]);
  box9.push(this.board[8][8]);
  if(!this.groupValid(box9)){
    return false;
  }

  return true;
}