interface DB<T>{
    add(v : T) : void;
    get() : T;
}

interface JSONSerialier{
    serialize() : string
}

class LocalDB<T extends JSONSerialier> implements DB<T>{
    constructor(private localStorageKey : string){}
    add(v : T){
        localStorage.setItem(this.localStorageKey,v.serialize())
    }

    get() : T{
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface Vegitable{
    v:string;
}

interface Meat{
    m:string;
}

interface Cart2<T>{
    getItem() : T extends Vegitable ? Vegitable : Meat
}

const cart1: Cart2<string> = {
    getItem(){
        return {
            m: ""
        }
    }
}

cart1.getItem()