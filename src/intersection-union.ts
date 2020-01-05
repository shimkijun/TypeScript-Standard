interface User{
    name : string;
}

interface Action{
    do() : void;
}

function createUserAction(u: User, a: Action) : User & Action{
    return {...u,...a};
}

const u = createUserAction({ name : 'dog' }, {do(){} });

u.do();
u.name;

function compare(x: string ,y: string) : number
function compare(x: number ,y: number) : number
function compare(x: string | number ,y: string | number){
    if(typeof x === 'number' && typeof y === 'number'){
        return x === y ? 0 : x > y ? 1 : -1;
    }

    if(typeof x === 'string' && typeof y === 'string'){
        return x.localeCompare(y);
    }

    throw Error('not supported type');
}

const a = compare(1,1);
const b = compare("a","a");
console.log([3,2,1].sort(compare))
console.log(['c','b','a'].sort(compare))


// runtime error
// const v = compare(1,"b");

// tkdyd 타입 가드 정의
function isAction(v : User | Action) : v is Action {
    return (<Action>v).do !== undefined;
}

function process(v : User | Action){
    if(isAction(v)){
        v.do()
    }else{
        v.name;
    }
}