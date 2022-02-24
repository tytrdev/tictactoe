import { Characters, Winners, WinConfigurations } from "./constants";

// Utilities
function genEmptyBoard() {
    return Array(9).fill(Characters.Empty);
}

function genEmptyState() {
    return {
        x: true,
        turns: 0,
        board: genEmptyBoard(),
    };
}

function getCharacter(state) {
    return state.x ? Characters.X : Characters.O;
}

// List of states
export let states = [genEmptyState()];

// State transition function
export function takeTurn(state, index) {
    if (state.board[index]) return;

    const newBoard = [...state.board];
    newBoard[index] = getCharacter(state);

    // Actual state stuff
    return {
        x: !state.x,
        board: newBoard,
        turns: state.turns + 1,
    };
}

export function checkForWinner(state) {
    for (let config of WinConfigurations) {
        const xWins = config.map(i => state.board[i]).every(c => c === Characters.X);
        const oWins = config.map(i => state.board[i]).every(c => c === Characters.O);

        if (xWins) return Winners.X;
        if (oWins) return Winners.O;
    }

    if (state.turns >= 9) {
        return Winners.Draw;
    }

    return Winners.None;
}

// TODO: Remove mutations =(
export function resetState() {
    states = [genEmptyState()];
}

export function getCurrentState() {
    return states[states.length - 1];
}

export function hasWinner(state) {
    return checkForWinner(state) !== Winners.None;
}