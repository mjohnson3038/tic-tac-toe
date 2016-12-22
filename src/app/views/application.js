import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jQuery';
import BoardView from 'app/views/board_view';
import Board from 'app/models/board';
import Game from 'app/models/game';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    this.winnerTemplate = _.template($('#tmpl-winner').html());
    this.currentTemplate = _.template($('#tmpl-curr-player').html());
    this.render();
  },

  events: {
    'click #new-game': 'startNewGame'
  },

  clearBoard: function(e){
    this.model.board.grid = [[null,null,null],[null,null,null],[null,null,null]];
    this.$(".square").empty();
    this.$("#winner").empty();
    $("#current-player").show();
    console.log("Board cleared");
  },

  startNewGame: function(e){
    // clears board and initiates new game
    console.log("You've started a new game");

    this.clearBoard(e);
  },

  // playedSquare: function(e){
  //   var a;
  //   var b;
  //   if (e == "sq-1"){
  //     a = 0;
  //     b = 0;
  //   } else if (e == "sq-2") {
  //     a = 0;
  //     b = 1;
  //   } else if (e == "sq-3") {
  //     a = 0;
  //     b = 2;
  //   } else if (e == "sq-4") {
  //     a = 1;
  //     b = 0;
  //   } else if (e == "sq-5") {
  //     a = 1;
  //     b = 1;
  //   } else if (e == "sq-6") {
  //     a = 1;
  //     b = 2;
  //   } else if (e == "sq-7") {
  //     a = 2;
  //     b = 0;
  //   } else if (e == "sq-8") {
  //     a = 2;
  //     b = 1;
  //   } else if (e == "sq-9") {
  //     a = 2;
  //     b = 2;
  //   }
  //   // console.log(">>>>>>>>>>>>" + a);
  //   // console.log(b);
  //   // this.model.validSquare(a,b);
  //   if (this.model.validSquare(a,b)){
  //     this.model.play(a, b);
  //     this.trigger("modelUpdated", [a,b]);
  //   }
  //   console.log(this.model.board.grid[0]);
  //   console.log(this.model.board.grid[1]);
  //   console.log(this.model.board.grid[2]);
  // },

  currentPlayer: function(e){
    console.log("CURRENT PLAYER WENT OFF!!!");
    var turn;
    if (e == "X"){
      turn = "O";
    } else if (e == "O") {
      turn = "X";
    }
    this.$("#current-player").empty();
    var html = this.currentTemplate({player: this.model.playerByMark(turn), mark: turn});
    this.$("#current-player").append(html);
    console.log(">>>>>>>>>> Current player: " + this.model.playerByMark(turn));
  },

  displayWinner: function(e){
    var html = this.winnerTemplate({player: this.model.playerByMark(e)});
    this.$("#winner").append(html);
    $("#winner").show();
    $("#current-player").hide();
  },

  render: function() {
    console.log(this.model.currentPlayer().get("mark"));
    var board = new Board();
    var boardView = new BoardView( {
      el: '#board',
      model: board,
      gameModel: this.model
    });
    var html = this.currentTemplate({player: this.model.playerByMark(turn), mark: turn});
    this.$("#current-player").append(html);
    this.listenTo(boardView, "thereIsAWinner", this.displayWinner);
    this.listenTo(boardView, "changedPlayer", this.currentPlayer);
    // console.log(currentPlayer);

    // console.log("booooaardd" + boardView);

    return this;
  }
});

export default ApplicationView;
