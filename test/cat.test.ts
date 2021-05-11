import { Cat, CatPrintable } from '../src/cat';
import { printable } from '../src/printable';

describe('cat', () => {
    it('a', () => {
        const cat = new Cat('Garfield', 41, 'ginger and black');
        const instance = new CatPrintable();
        // printable.print(cat)(instance);
        // console.log
        //   Garfield is a 41 year-old ginger and black cat.
        expect(printable.format(cat)(instance)).toBe(
            'Garfield is a 41 year-old ginger and black cat.'
        );
    });
});
