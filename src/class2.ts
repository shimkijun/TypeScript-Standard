interface Person {
    name : string;
    say(message: string) : void;
}

interface Programmer{
    writeCode(requirment: string) : string;
}

abstract class Korean implements Person{

    public abstract idNumber : number;

    // 부모 생성자의 name
    constructor(public name : string){}

    say(message: string): void {
        console.log(message);
    }

    abstract kimchi() : void;   
}

class KoreanProgrammer extends Korean implements Programmer {
 
    constructor(public name: string, public idNumber: number){
        // super == 부모 클래스의 생성자
        super(name);
    }
    say(message: string): void {
        console.log(message);
    }
    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + '.....';
    }
    kimchi(){
        console.log('i love kimchi');
    }
}

const dog = new KoreanProgrammer("dog",1234);