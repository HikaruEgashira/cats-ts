import { isSome, monoid, some } from '../src';

describe('test', () => {
    it('work', () => {
        const a = some('Hello');
        const b = some('World');
        const instance = monoid()['option']['string'];

        const res = instance.combine(a, b);
        expect(isSome(res)).toBeTruthy();
        expect(res).toMatchObject({
            _tag: 'some',
            value: 'HelloWorld',
        });
    });
});
