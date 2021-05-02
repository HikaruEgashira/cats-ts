// trait Monoid[A] {
//     def combine(a1: A, a2: A): A
//     def empty: A
// }
export abstract class Monoid<A> {
  abstract combine(a: A, b: A): A;
  abstract empty: A;
}

// object IntMonoid {
//     def combine(a: Int, b: Int): Int = a + b
//     def empty: Int = 0
// }
export class IntMonoid implements Monoid<number> {
  combine = (a: number, b: number) => a + b;
  empty = 0;
}

export class StringMonoid implements Monoid<String> {
  combine = (a: String, b: String) => `${a}${b}`;
  empty = '';
}
