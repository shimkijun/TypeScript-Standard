let numValue : number;
let stringValue : string;
let booleanValue : boolean;
let undefinedValue : undefined;
let nullValue : null;
let objValue : object;
let symbolValue : symbol;
let anyValue : any;

numValue = 3.3;
numValue = 3.3333;
numValue = 3333.3;
numValue = 3.3;
numValue = 3;
numValue = -3;
stringValue ="hello";
stringValue ='hello';
stringValue =`
hello
hi
${1+1}
`;
booleanValue = true;
undefinedValue = null;
nullValue = null;
nullValue = undefined;
numValue = null;
numValue = undefined;
anyValue = "a";
anyValue = 1;
anyValue = {};
anyValue = null;

objValue = { name : 'dog' };
objValue = {};
objValue = new String("hi");
objValue = null;
objValue = undefined;
symbolValue = Symbol(1);
symbolValue = Symbol(2);
symbolValue = Symbol(3);

symbolValue = null;
symbolValue = undefined;

let user1 : {name : string ,score: number};

user1 = {
    name : "dog",
    score : 50
}

let nameList : string[];

nameList = ["a","b","c"];

let tuple2 : [number,string];
tuple2 = [1,"hi"];

