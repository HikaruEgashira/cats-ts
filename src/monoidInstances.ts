import { Monoid } from './monoid';

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
