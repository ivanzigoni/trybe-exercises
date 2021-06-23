let chessPiece = "KING";
let chessPieceName = chessPiece.toLowerCase();

switch (chessPieceName) {
    case "bishop":
        console.log('diagonally any number of squares. They are unable to jump over pieces.');
        break;
    case "king":
        console.log('one square in any direction, so long as that square is not attacked by an enemy piece.');
        break;
    case "queen":
        console.log('diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
        break;
    case "rook":
        console.log('horizontally or vertically any number of squares. They are unable to jump over pieces.');
        break;
    case "knight":
        console.log('in an L shape');
        break;
    case "pawn":
        console.log('vertically forward one square, with the option to move two squares if they have not yet moved.');
        break;
    default: "this piece doesn't exist :c"
}