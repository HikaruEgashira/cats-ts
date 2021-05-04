import { Printable, printable, printableInstances } from './printable';

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
            printableInstances.stringPrintable
        );
        const age = printable.format(cat.age)(
            printableInstances.numberPrintable
        );
        const color = printable.format(cat.color)(
            printableInstances.stringPrintable
        );
        return `${name} is a ${age} year-old ${color} cat.`;
    },
};
