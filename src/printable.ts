export interface Printable<A> {
    format: (value: A) => string;
}

export class PrintableInstances {
    string: Printable<string> = { format: (v) => v };
    number: Printable<number> = { format: (v) => v.toString() };
}

export type ExPrintable<A> = {
    print: (input: A) => void;
} & Printable<A>;

export const printable = {
    format: <A>(input: A) => (p: Printable<A>): string => p.format(input),
    print: <A>(input: A) => (p: Printable<A>): void =>
        console.log(p.format(input)),
};
