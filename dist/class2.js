class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgrammer extends Korean {
    constructor(name, idNumber) {
        super(name);
        this.name = name;
        this.idNumber = idNumber;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirment) {
        console.log(requirment);
        return requirment + '.....';
    }
    kimchi() {
        console.log('i love kimchi');
    }
}
const dog = new KoreanProgrammer("dog", 1234);
//# sourceMappingURL=class2.js.map