export interface Printable<A> {
    format: (value: A) => string;
}

export class PrintableInstances {
    string: Printable<string> = { format: (v) => v };
    number: Printable<number> = { format: (v) => v.toString() };
}

export interface ExPrintable<A> extends Printable<A> {
    print: (input: A) => void;
}

export const printable = {
    format: <A>(input: A) => (p: Printable<A>): string => p.format(input),
    print: <A>(input: A) => (p: Printable<A>): void =>
        console.log(p.format(input)),
};
