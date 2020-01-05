function add (x: number, y: number): number{
    return x + y;
}

const result = add(1,2);

function buildUserInfo(name: string, email:string){
    return {name,email};
}

const add2 = (a: number, b:number) : number => a+b;

interface Strorage{
    a : string;
}

interface ColdStrorage{
    b : string;
}

function store(type: "통조림"): Strorage
function store(type: "아이스크림"): ColdStrorage

function store(type: "통조림" | "아이스크림"){
    if(type === "통조림"){
        return { a: "통조림"}
    }else if(type === "아이스크림"){
        return { b: "아이스크림"}
    }else {
        throw new Error("error type");
    }
}

const s = store("통조림");