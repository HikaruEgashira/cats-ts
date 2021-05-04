import { printable, printableInstances } from '../src/printable';

describe('test', () => {
    it('string', () => {
        const str = printable.format('Hello, World!')(
            printableInstances.stringPrintable
        );
        expect(str).toBe('Hello, World!');
    });

    it('number', () => {
        const num = printable.format(10)(printableInstances.numberPrintable);
        expect(num).toBe('10');
    });
});
