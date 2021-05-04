import { sum, monoid } from '../src';

describe('test', () => {
    it('int', () => {
        const sumResult = sum([1, 1])(monoid()['number']);
        expect(sumResult).toEqual(2);
    });

    it('string', () => {
        const sumHelloWorld = sum(['Hello', 'World'])(monoid()['string']);
        expect(sumHelloWorld).toEqual('HelloWorld');
    });
});
