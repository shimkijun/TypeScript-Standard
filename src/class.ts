interface User{
    name : string;
}

interface Product {
    id : string;
    price : number;
}

class Cart{
    // protected user: User;
    // private store : any

    constructor(protected user : User , private store : any = {}){
        // this.user = user;
        // this.store = {};
    }

    put(id: string , product: Product){
        this.user
        this.store[id] = product;
        this.get("id");
    }

    private get(id: string){
        return this.store[id];
    }
}

class PromotionCart extends Cart{
    addPromotion(){
        this.user
    }
}

const cartJohn = new Cart({ name : 'john'});
const cartJay = new Cart({ name : 'jay'});

cartJohn.put("id1", { id : "id1", price : 30000 } );

cartJay.put("id2", { id : "id2", price : 100000 } );

const cart2 = new PromotionCart({name:'John'});
cart2.put("1",{id:"1",price : 2000});
cart2.addPromotion();