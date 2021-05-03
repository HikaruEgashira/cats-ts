import { sum, IntMonoid, StringMonoid } from '../src';

describe('test', () => {
  it('int', () => {
    const sumResult = sum([1, 1])(new IntMonoid());
    expect(sumResult).toEqual(2);
  });

  it('string', () => {
    const sumHelloWorld = sum(['Hello', 'World'])(new StringMonoid());
    expect(sumHelloWorld).toEqual('HelloWorld');
  });
});
