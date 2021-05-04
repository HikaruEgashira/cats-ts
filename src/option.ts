/**
 * * -> *
 */
import { Monoid } from './monoid';

interface None {
    _tag: 'none';
}
interface Some<A> {
    _tag: 'some';
    value: A;
}
type Option<A> = None | Some<A>;

export const none: None = { _tag: 'none' };
export const some = <A>(value: A): Some<A> => ({ _tag: 'some', value });

export const isSome = <A>(value: Option<A>): value is Some<A> =>
    value._tag === 'some';
export const isNone = <A>(value: Option<A>): value is None =>
    value._tag === 'none';

export const match = <A, B>(value: Option<A>) => (
    fsome: (some: A) => B,
    fnone: () => B
) => (isSome(value) ? fsome(value.value) : fnone());

export class OptionMonoid<A> implements Monoid<Option<A>> {
    semigroup: Monoid<A>;

    constructor(semigroup: Monoid<A>) {
        this.semigroup = semigroup;
    }

    combine = (a: Option<A>, b: Option<A>) =>
        match<A, Option<A>>(a)(
            (sa) =>
                match<A, Option<A>>(b)(
                    (sb) => some(this.semigroup.combine(sa, sb)),
                    () => none
                ),
            () => none
        );

    empty = none;
}

export const optionMonoid = <A>(semigroup: Monoid<A>): Monoid<Option<A>> => ({
    combine: (a, b) =>
        match<A, Option<A>>(a)(
            (valueA) =>
                match<A, Option<A>>(b)(
                    (valueB) => some(semigroup.combine(valueA, valueB)),
                    () => none
                ),
            () => none
        ),

    empty: none,
});
