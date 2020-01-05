function createPromise<T>(x: T, timeout:number){
    return new Promise((resolve: (v : T) => void ,reject)=>{
        setTimeout(() =>{
            resolve(x);
        },timeout)
    })
}

createPromise<string>("eh",100)
.then(v=> console.log(v))

createPromise<number>(1,100)
.then(v=> console.log(v))

function createTuple2<T,U>(v: T, v2: U) : [T,U]{
    return [v,v2];
};

function createTuple3<T1,T2,T3>(v: T1, v2: T2, v3: T3) : [T1,T2,T3]{
    return [v,v2,v3];
};


const t1 = createTuple2("user1",1000);
