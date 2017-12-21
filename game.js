$(load);
var new_qty;
var pieces;
var puzzle;
function load() {
  $('#shuffleBoard').click(function() {
    pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    createSlidingpuzzle(shuffle(pieces), 4, 4);
    var btn = $('#shuffleBoard')
    if (btn.hasClass('shuffleBoard')){
      btn.text("");
    }else{
      btn.text("Shuffle!")
    }
  });

  $('#pic-1').click(function() {
    var pic1 = $('#pic-1');
    pic1.toggleClass('pic-1');
    $('#obj-1').toggle('medium');
    if (pic1.hasClass('pic-1')){
      pic1.text("Hide Hint..");
    }else{
      pic1.text("Hint Here..")
    }
  });

  $("#slidingpuzzleContainer").on("click", ".puzzlepiece", function(e) {
    var thisId = $(this).attr("id");
    var source = $(this).attr("src");
    var blank = $("#positionblank");
    blank.attr("id", thisId);
    blank.attr("src", source);
    $(this).attr("id", "positionblank");
    $(this).attr("src", "blank.gif");



    endGame();
  });

  // $("#slidingpuzzleContainer").on("click", modifyQty(-1));
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
  puzzle = $("<div></div>").attr("id", "slidingpuzzleContainer" + x + 'x' + y);
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
   var win = true;
   for (var i = 0; i < 15; i++) {
    console.log(puzzle.children().eq(i).attr("src"));
      if (puzzle.children().eq(i).attr("src") != (i + 1) + ".png") {
        win = false;
      }
    }
    console.log(win);
  if (new_qty == 0){
    alert("You lost mate.. It's over..");
  } else if (win == true) {
    alert("You win!");
  }
}
