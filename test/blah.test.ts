import { sum, IntMonoid, StringMonoid } from '../src';

describe('test', () => {
  it('int', () => {
    expect(sum([1, 1], new IntMonoid())).toEqual(2);
  });

  it('string', () => {
    expect(sum(['Hello', 'World'], new StringMonoid())).toEqual('HelloWorld');
  });
});
