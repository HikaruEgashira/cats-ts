import { MonoidInstances, sum } from '../src';

describe('test', () => {
    it('int', () => {
        const sumResult = sum([1, 1])(new MonoidInstances()['number']);
        expect(sumResult).toEqual(2);
    });

    it('string', () => {
        const sumHelloWorld = sum(['Hello', 'World'])(
            new MonoidInstances()['string']
        );
        expect(sumHelloWorld).toEqual('HelloWorld');
    });
});
