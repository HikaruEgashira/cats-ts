import { printable, PrintableInstances } from '../src/printable';

describe('test', () => {
    it('string', () => {
        const str = printable.format('Hello, World!')(
            new PrintableInstances()['string']
        );
        expect(str).toBe('Hello, World!');
    });

    it('number', () => {
        const num = printable.format(10)(new PrintableInstances()['number']);
        expect(num).toBe('10');
    });
});
