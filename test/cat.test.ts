import { Cat, catPrintable } from '../src/cat';
import { printable } from '../src/printable';

describe('cat', () => {
    it('a', () => {
        const cat = new Cat('Garfield', 41, 'ginger and black');
        // printable.print(cat)(catPrintable);
        // console.log
        //   Garfield is a 41 year-old ginger and black cat.
        expect(printable.format(cat)(catPrintable)).toBe(
            'Garfield is a 41 year-old ginger and black cat.'
        );
    });
});
