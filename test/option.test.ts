import { stringMonoid } from '../src/monoid';
import { isSome, optionMonoid, some } from '../src/option';

describe('test', () => {
    it('work', () => {
        const a = some('Hello');
        const b = some('World');
        const instance = optionMonoid(stringMonoid);

        const res = instance.combine(a, b);
        expect(isSome(res)).toBeTruthy();
        expect(res).toMatchObject({
            _tag: 'some',
            value: 'HelloWorld',
        });
    });
});
