import { stringMonoid, numberMonoid } from '.';
import { optionMonoid } from './option';

export interface Semigroup<A> {
    combine(a: A, b: A): A;
}

// trait Monoid[A] {
//     def combine(a1: A, a2: A): A
//     def empty: A
// }
export interface Monoid<A> extends Semigroup<A> {
    empty: A;
}

export const monoid = () => ({
    string: stringMonoid,
    number: numberMonoid,
    option: {
        string: optionMonoid(stringMonoid),
        number: optionMonoid(numberMonoid),
    },
});
