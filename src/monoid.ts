// trait Monoid[A] {
//     def combine(a1: A, a2: A): A
//     def empty: A
// }
export interface Monoid<A> {
    combine(a: A, b: A): A;
    empty: A;
}

// object IntMonoid {
//     def combine(a: Int, b: Int): Int = a + b
//     def empty: Int = 0
// }
export const numberMonoid: Monoid<number> = {
    combine: (a: number, b: number) => a + b,
    empty: 0,
};

export const stringMonoid: Monoid<string> = {
    combine: (a: string, b: string) => `${a}${b}`,
    empty: '',
};
