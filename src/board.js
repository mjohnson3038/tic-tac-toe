var Board = function(){
  this.grid = [
    [null,null,null],
    [null,null,null],
    [null,null,null]];
};

Board.prototype.isFull = function(){
  for(var i = 0; i < this.grid.length; i++){
    for(var j = 0; j < this.grid[i].length; j++){
      if(this.grid[i][j] === null){
        return false;
      }
    }
    return true;
  }
};

export default Board;
