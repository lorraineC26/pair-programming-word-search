// a function that receives a 2D array of letters and a word
// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

const transpose = function(matrix) { // to switch row and column
  const newMatrix = [];
  const numOfColumns = matrix[0].length;
  const numOfRows = matrix.length;
  for (let x = 0; x < numOfColumns; x++) {
    newMatrix.push([]);
  }

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }

  return newMatrix;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1) {
    return;
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(""));
  const horizontalJoin = letters.map(ls => ls.join(""));
  for (let l of verticalJoin) {
    if (l.search(word) >= 0) {
      return true;
    }
  }

  for (let l of horizontalJoin) {
    if (l.search(word) >= 0) {
      return true;
    }
  }

  // For reading backwards
  const reversedLetters = transpose(letters);

  for (let row of reversedLetters) { // transpose first then reverse; for vertical one
    row.reverse();
  }

  for (let row of letters) { // reverse the original 2D arrays; for horizontal
    row.reverse();
  }

  const reversedHorizontalLetters = letters.map(ls => ls.join(""));
  const reversedVerticalLetters = reversedLetters.map(ls => ls.join(""));

  for (let l of reversedHorizontalLetters) {
    if (l.search(word) >= 0) {
      return true;
    }
  }

  for (let l of reversedVerticalLetters) {
    if (l.search(word) >= 0) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;