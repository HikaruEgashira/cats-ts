import { sum, numberMonoid, stringMonoid } from '../src';

describe('test', () => {
    it('int', () => {
        const sumResult = sum([1, 1])(numberMonoid);
        expect(sumResult).toEqual(2);
    });

    it('string', () => {
        const sumHelloWorld = sum(['Hello', 'World'])(stringMonoid);
        expect(sumHelloWorld).toEqual('HelloWorld');
    });
});
