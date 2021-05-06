export interface Printable<A> {
    format: (value: A) => string;
}

export const printableInstances: () => PrintableInstances = () => ({
    string: { format: (v) => v },
    number: { format: (v) => v.toString() },
});

export class PrintableInstances {
    string: Printable<string> = { format: (v) => v };
    number: Printable<number> = { format: (v) => v.toString() };
}

export const printable = {
    format: <A>(input: A) => (p: Printable<A>): String => p.format(input),
    print: <A>(input: A) => (p: Printable<A>): void =>
        console.log(p.format(input)),
};
