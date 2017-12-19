$(load);

//   function(){
//   var puzzle = $('<div id="formatContainer">');
//   for (var i = 0; i <= 15; ++i) {
//   puzzle += '<img src="gid.gif" alt="blank" width="100" height="98" />';
//   }
//   puzzle += '</div>';
//   var pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//   createSlidingpuzzle(shuffle(pieces), 4, 4);
// }

function load() {
  $('#shuffleBoard').click(function() {
    // var puzzle = $('<div id="formatContainer">');
    // for (var i = 0; i <= 15; ++i) {
    // puzzle += '<img src="gid.gif" alt="blank" width="100" height="98" />';
    // }
    // puzzle += '</div>';
    // showSlidingpuzzle(puzzle);
    var pieces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"blank"];
    createSlidingpuzzle(shuffle(pieces), 4, 4);
  });

}

// STARTS THE SHUFFLE -------->

function shuffle(array) {
  var copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

// function shuffleBoard() {
//   for (var i = 0; i < puzzlepieces; ++i) {
//     for (var j = 0; j < puzzlepieces; ++j) {
//       var k = Math.floor(Math.random() * puzzlepieces);
//       var l = Math.floor(Math.random() * puzzlepieces);
//       swapTiles(i, j, k, l);
//     }
//   }
// }

// function swapTiles(i, j, k, l) {
//   var temp = new Object();
//   temp = puzzlepieces[i][j];
//   puzzlepieces[i][j] = puzzlepieces[k][l];
//   puzzlepieces[k][l] = temp;
//   location.reload();
// }

// // <------ ENDS THE SHUFFLE

// function changeFormat(x, y) {
//   var puzzlepieces = [];
//   var finalValue = x * y - 2;
//   for (var i = 0; i <= finalValue; ++i) {
//     puzzlepieces.push(i);
//   }
//   puzzlepieces.push('blank')
//   createSlidingpuzzle(puzzlepieces, x, y);
// }


function createSlidingpuzzle(puzzlepieces, x, y) {
  var puzzle = $("<div></div>").attr("id", "slidingpuzzleContainer" + x + 'x' + y);
  // var puzzle = '<div id="slidingpuzzleContainer' + x + 'x' + y + '">';
  for (var puzzleNr = 0; puzzleNr < puzzlepieces.length; ++puzzleNr) {
    var image = $('<img />');
    $(image).attr("src", puzzlepieces[puzzleNr] + '.png')
    $(image).attr("id", "position" + puzzlepieces[puzzleNr]);
    $(image).attr("alt", puzzlepieces[puzzleNr]);
    $(image).addClass('puzzlepiece');
    console.log(image)
    puzzle.append(image);
    // puzzle += '<img src="' + puzzlepieces[puzzleNr] + '.png" class="puzzlepiece" id="position' + puzzlepieces[puzzleNr] + '" alt="' + puzzlepieces[puzzleNr] + '" onclick="shiftPuzzlepieces(this);" width="100" height="100" />';
  }
  $("#slidingpuzzleContainer").append(puzzle);
  showSlidingpuzzle(puzzle);
}


function showSlidingpuzzle(puzzle) {
  // document.getElementById('slidingpuzzleContainer').innerHTML = puzzle;
  $("#slidingpuzzleContainer").append(puzzle);
}


function shiftPuzzlepieces(el) {

  var blank = $("positionblank"); 
  var temp = el.parentNode.insertBefore(document.createElement('a'), el); 
  el.parentNode.insertBefore(el, blank); 
  el.parentNode.insertBefore(blank, temp); 
  el.parentNode.removeChild(temp); 

}