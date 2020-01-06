interface Props {
    name : string
    [key: string] : string;
}

const p: Props = {
    name : 'dog',
    a : 'a',
    b : 'b',
    c : 'c',
    0 : '3',
    1 : 'd',
    2 : 'e'
}

p[0];
p['a'];
p.a;
p.name;
p.abc;
p.ddd;


let keys : keyof Props;

interface User {
    name : string;
    age : number;
    hello(msg : string) : void;
}

let keysOfUser : keyof User;

let helloMethod : User["hello"];

helloMethod = function hello(msg : string){

}