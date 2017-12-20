$(load);
var new_qty;
var pieces;
function load() {
  $('#shuffleBoard').click(function() {
    pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
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
    endGame();
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

function modifyQty(val) {
    var qty = document.getElementById('qty').value;
    new_qty = parseInt(qty) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}

function endGame () {
  if (new_qty == 0){
    alert("You lost mate.. It's over..");
  }else if (pieces == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, "blank"]) {
    alert("You win!");
  }
}
