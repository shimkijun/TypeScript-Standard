class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    put(id, product) {
        this.user;
        this.store[id] = product;
        this.get("id");
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });
cartJohn.put("id1", { id: "id1", price: 30000 });
cartJay.put("id2", { id: "id2", price: 100000 });
const cart2 = new PromotionCart({ name: 'John' });
cart2.put("1", { id: "1", price: 2000 });
cart2.addPromotion();
//# sourceMappingURL=class.js.map