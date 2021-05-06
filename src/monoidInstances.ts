import { Monoid } from './monoid';
import { optionMonoid } from './option';

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

export const monoid = () => ({
    string: stringMonoid,
    number: numberMonoid,
    option: {
        string: optionMonoid(stringMonoid),
        number: optionMonoid(numberMonoid),
    },
});
