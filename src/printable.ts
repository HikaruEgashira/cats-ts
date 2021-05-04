export interface Printable<A> {
    format: (value: A) => string;
}

export interface PrintableInstances {
    stringPrintable: Printable<string>;
    numberPrintable: Printable<number>;
}

export const printableInstances: PrintableInstances = {
    stringPrintable: { format: (v) => v },
    numberPrintable: { format: (v) => v.toString() },
};

export const printable = {
    format: <A>(input: A) => (p: Printable<A>): String => p.format(input),
    print: <A>(input: A) => (p: Printable<A>): void =>
        console.log(p.format(input)),
};
