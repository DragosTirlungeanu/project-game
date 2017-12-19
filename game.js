$(load);

function load() {
  $('#shuffleBoard').click(function() {
    var pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, "blank"];
    createSlidingpuzzle(shuffle(pieces), 4, 4);
  });
  $("#slidingpuzzleContainer").on("click", ".puzzlepiece", function(e) {
    var thisId = $(this).attr("id");
    var source = $(this).attr("src");
    var blank = $("#positionblank");
    blank.attr("id", thisId);
    blank.attr("src", source);
    $(this).attr("id", "positionblank");
    $(this).attr("src", "blank.png");
  });
}

function shuffle(array) {
  var copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

function createSlidingpuzzle(puzzlepieces, x, y) {
  var puzzle = $("<div></div>").attr("id", "slidingpuzzleContainer" + x + 'x' + y);
  for (var puzzleNr = 0; puzzleNr < puzzlepieces.length; ++puzzleNr) {
    var image = $('<img />');
    $(image).attr("src", puzzlepieces[puzzleNr] + '.png')
    $(image).attr("id", "position" + puzzlepieces[puzzleNr]);
    $(image).attr("alt", puzzlepieces[puzzleNr]);
    $(image).addClass('puzzlepiece');
    console.log(image)
    puzzle.append(image);
  }
  $("#slidingpuzzleContainer").append(puzzle);
  showSlidingpuzzle(puzzle);
}

function showSlidingpuzzle(puzzle) {
  $("#slidingpuzzleContainer").append(puzzle);
}

// 


//   var imgs = $(this).attr("src"); //get all image tags from table
//   for (i = 1 to imgs.length) {
//     if imgs[i-1].source != "Buttons\\"+i+".png" return false;
// }
// function checkWin () {
// return true;

//   var winner = false;
//   var winPieces = $(this).attr(".puzzlepiece");
//   var winArray = $(this).attr("id");
//   if (winPieces == winArray) {
//     winner = player;
//   }else if{
//     winner = null;
//   }
//   if (winner){
//   alert((player == winner) ? "You beautiful mind!");
//   return false;
//   }else if{
//     return = true;
//   }
// }