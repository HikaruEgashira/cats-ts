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

export const catPrintable = (): Printable<Cat> => {
    const printableInstances = new PrintableInstances();
    return {
        format: (cat: Cat) => {
            const name = printableInstances['string'].format(cat.name);
            const age = printableInstances['number'].format(cat.age);
            const color = printableInstances['string'].format(cat.color);
            return `${name} is a ${age} year-old ${color} cat.`;
        },
    };
};
