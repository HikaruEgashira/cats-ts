import { Monoid } from './monoid';

/**
 * @example
 * def sum(xs: List[Int], m: Monoid[Int]): Int = xs.foldLeft(m.empty)(m.combine)
 * sum(List(1, 2, 3, 4), IntMonoid)
 * // res4: Int = 10
 */
export const sum = <T>(xs: Array<T>, m: Monoid<T>) => {
  return xs.reduce(m.combine, m.empty);
};

export * from './monoid';
