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
) => {
    if (isSome(value)) {
        return fsome(value.value);
    } else {
        return fnone();
    }
};

export const optionMonoid = <A>(semigroup: Monoid<A>): Monoid<Option<A>> => ({
    empty: none,
    combine: (a, b) => {
        return match<A, Option<A>>(a)(
            (sa) => {
                return match<A, Option<A>>(b)(
                    (sb) => some(semigroup.combine(sa, sb)),
                    () => none
                );
            },
            () => none
        );
    },
});
