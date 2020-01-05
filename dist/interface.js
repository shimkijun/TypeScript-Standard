const myTv = {
    turnOn() {
        return true;
    },
    turnOff() {
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTv);
function createBoard(x, y) {
    const cells = [];
    for (let row = 0; row < x; row++) {
        for (let col = 0; col < y; col++) {
            cells.push({ row, col });
        }
    }
    return cells;
}
const board = createBoard(4, 3);
board[0].piece = {
    move(from, to) {
        return true;
    }
};
function ajaxSignUp(data) {
}
ajaxSignUp({
    email: "abc",
    id: "aaa",
    password: "1234"
});
//# sourceMappingURL=interface.js.map