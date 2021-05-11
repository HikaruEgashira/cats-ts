import { Printable, PrintableInstances } from './printable';

export class Cat {
    name: string;
    age: number;
    color: string;

    constructor(name: string, age: number, color: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

export class CatPrintable implements Printable<Cat> {
    private printableInstances = new PrintableInstances();
    format = (cat: Cat) => {
        const name = this.printableInstances['string'].format(cat.name);
        const age = this.printableInstances['number'].format(cat.age);
        const color = this.printableInstances['string'].format(cat.color);
        return `${name} is a ${age} year-old ${color} cat.`;
    };
}
