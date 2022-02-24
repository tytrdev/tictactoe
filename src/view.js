// View Utilities
export function showMessage(message) {
  let e = document.querySelector('.message')
  e.innerHTML = message;
  e.classList.remove('hidden')
}

export function winnerMessage(winner) {
  showMessage("WINNER IS " + winner)
}

export function hideMessage() {
  let e = document.querySelector('.message')
  e.classList.add('hidden')
}

export function getCells() {
  return document.querySelectorAll('.cell')
}

export function renderGame(state) {
    const cells = getCells();
    cells.forEach((cell, i) => cell.innerHTML = state.board[i]);

    const turnDiv = document.querySelector('#turns');
    turnDiv.innerHTML = "Turns Taken: " + state.turns;
}

export function getCellIndex(cell) {
  const { id } = cell;
  return Number.parseInt(id.replace("cell-", ""));
}