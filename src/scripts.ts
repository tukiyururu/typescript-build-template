class Hello {
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


const hello: Hello = new Hello('Yururu');
const h: string = hello.greeting('Yeah!');
alert(h);
// console.log(h);

const bye: Bye = new Bye('Honoruru');
const b: string = bye.greeting('( ˘ω˘)ｽﾔｧ...');
alert(b);
// console.log(b);
