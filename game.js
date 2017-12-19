$(load);

function load() {
  $('#shuffleBoard').click(function() {
    var pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"blank"];
    createSlidingpuzzle(shuffle(pieces), 4, 4);
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


// function shiftPuzzlepieces(el) {

//   var blank = $("positionblank"); 
//   var temp = el.parentNode.insertBefore(document.createElement('a'), el); 
//   el.parentNode.insertBefore(el, blank); 
//   el.parentNode.insertBefore(blank, temp); 
//   el.parentNode.removeChild(temp); 

// }