interface TV{
    turnOn() : boolean;
    turnOff() : void;
}

const myTv : TV = {
    turnOn(){
        return true;
    },
    turnOff(){
    }
}

function tryTurnOn(tv : TV){
    tv.turnOn();
}
tryTurnOn(myTv);

interface Cell{
    row : number;
    col : number;
    piece? : Piece;
}

interface Piece{
    move( from : Cell, to:Cell) : boolean;
}

function createBoard(x : number , y : number){
    const cells : Cell[] = [];
    for (let row = 0; row < x; row++) {
        for (let col = 0; col < y; col++) {
            // cells.push({
            //     row : row,
            //     col : col
            // })
            cells.push({row,col})
        }        
    }
    return cells;
}

const board = createBoard(4,3);
 
board[0].piece = {
    move(from:Cell, to: Cell){
        return true;
    }
}

interface SignUp{
    email : string;
    id : string;
    password : string;
}

function ajaxSignUp(data:SignUp){
    // 기능
}

ajaxSignUp({
    email : "abc",
    id : "aaa",
    password : "1234"
})




