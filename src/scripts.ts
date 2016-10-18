interface IHello {
    getName(): string;
    greeting(msg: string): string;
}

class Hello implements IHello {
    constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }

    greeting(msg: string): string {
        return `Hello, ${this.getName()}. ${msg}`;
    }
}

class Bye extends Hello {
    greeting(msg: string): string {
        return `Bye, ${this.getName()}. ${msg}`;
    }
}

const hello: IHello = new Hello('Yururu');
const h: string = hello.greeting('Yeah!');
alert(h);

const bye: IHello = new Bye('Honoruru');
const b: string = bye.greeting('( ˘ω˘)ｽﾔｧ・・・');
alert(b);
