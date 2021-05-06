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
