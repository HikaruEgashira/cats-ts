import { Printable, printable, PrintableInstances } from './printable';

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

export const catPrintable: Printable<Cat> = {
    format: (cat: Cat) => {
        const name = printable.format(cat.name)(
            new PrintableInstances()['string']
        );
        const age = printable.format(cat.age)(
            new PrintableInstances()['number']
        );
        const color = printable.format(cat.color)(
            new PrintableInstances()['string']
        );
        return `${name} is a ${age} year-old ${color} cat.`;
    },
};
