$(document).ready(function (){

  var turn = "X"; 

  function caption(message) {
    $("caption").text(message);
  }

  function game_end(message) {
    alert(message);
    location.reload();
  }

  function display_turn() {
    caption("Current turn: " + turn);
  }

  function next_turn() {
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }

  wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]

  function checkwin(){
    for(var i = 0; i < wins.length; i++) {
      var cell1 = $("#" + wins[i][0]).text();
      var cell2 = $("#" + wins[i][1]).text();
      var cell3 = $("#" + wins[i][2]).text();

      if (cell1 === cell2 && cell1 === cell3 && cell1 != "") {
        return cell1;
      }
    }

    return false;
  }

  function checktie() {
    var tied = true;
    var cells = $("td");

    for(var i = 0; i < cells.length; i++){
      if (cells.eq(i).text() === "") {
        tied = false;
      }
    }

    return tied;
  }

  ///////////////////////////////////////////////////////////////
  // The Game Logic
  ///////////////////////////////////////////////////////////////

  display_turn()

  $('td').on('click', function (){
    var self = $(this);

    self.text(turn);
    self.off('click');

    next_turn()
    display_turn()
  
    var winner = checkwin();

    if (winner === "O") {
      game_end("O wins");
    } else if (winner === "X") {
      game_end("X wins");
    } else {
      if (checktie()) {
        game_end("Nobody wins");
      } 
    }

  });


});

//reset the board (reload) or  put all your click ons back 

//computer player (seperate the code out of ) 
//magic square - for computer player to detect based on what has been clicked, what would be the best cell to click
