export const Characters = {
    X: "X",
    O: "O",
    Empty: "",
}

export const Winners = {
    X: "Winner is X!",
    O: "Winner is O!",
    Draw: "DRAW",
    None: "No winner yet",
}

export const WinConfigurations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Col 1
    [1, 4, 7], // Col 2
    [2, 5, 8], // Col 3
    [0, 4, 8], // Left Diagonal
    [2, 4, 6], // Right Diagonal
]