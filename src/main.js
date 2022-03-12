import { Winners } from "./constants";
import { takeTurn, getCurrentState, resetState, checkForWinner, states, hasWinner } from "./state";
import { getCells, hideMessage, renderGame, showMessage, getCellIndex } from "./view";

function turn(e) {
  if (hasWinner(getCurrentState())) return;

  const index = getCellIndex(e.target);
  const newState = takeTurn(getCurrentState(), index)
  if (!newState) return;

  // TODO: Eliminate mutation
  states.push(newState);
  renderGame(getCurrentState());

  const winner = checkForWinner(getCurrentState());
  if (winner !== Winners.None) {
    showMessage(winner);
  }
}

function resetGame() {
  resetState();
  hideMessage();
  renderGame(getCurrentState());
}

function undo() {
  if (states.length < 2) return;
  states.pop()
  hideMessage();
  renderGame(getCurrentState());
}

window.onload = () => {
  const cells = getCells();
  cells.forEach(cell => cell.addEventListener('click', turn));

  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', resetGame);

  const undoButton = document.querySelector('#undo-button');
  undoButton.addEventListener('click', undo);

  renderGame(getCurrentState());
}
