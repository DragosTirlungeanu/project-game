function load() {
  var puzzle = '<div id="slidingpuzzleContainer4x4">';

  for (var i = 0; i <= 15; ++i) {
    puzzle += '<img src="gid.gif" alt="blank" width="98" height="98" />';
  }
  puzzle += '</div>';
  showSlidingpuzzle(puzzle);
}


function changeFormat(x, y) {
  var puzzlepieces = [];
  var finalValue = x * y - 2;

  for (var i = 0; i <= finalValue; ++i) {
    puzzlepieces.push(i);
  }

  puzzlepieces.push('blank')
  createSlidingpuzzle(puzzlepieces, x, y);
}


function createSlidingpuzzle(puzzlepieces, x, y) {

  var puzzle = '<div id="slidingpuzzleContainer' + x + 'x' + y + '">';

  for (var puzzleNr = 0; puzzleNr < puzzlepieces.length; ++puzzleNr) {
    puzzle += '<img src="' + puzzlepieces[puzzleNr] + '.png" class="puzzlepiece" id="position' + puzzlepieces[puzzleNr] + '" alt="' + puzzlepieces[puzzleNr] + '" onclick="shiftPuzzlepieces(this);" width="100" height="100" />';
  }
  puzzle += '</div>';

  showSlidingpuzzle(puzzle);
}


function showSlidingpuzzle(puzzle) {
  document.getElementById('slidingpuzzleContainer').innerHTML = puzzle;
}


function shiftPuzzlepieces(el) {

var blank = document.getElementById("positionblank"); 
var temp = el.parentNode.insertBefore(document.createElement('a'), el); 
el.parentNode.insertBefore(el, blank); 
el.parentNode.insertBefore(blank, temp); 
el.parentNode.removeChild(temp); 

}