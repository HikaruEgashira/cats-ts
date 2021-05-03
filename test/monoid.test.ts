import { sum, IntMonoid, StringMonoid } from '../src';
import { pipe } from '../src/utils';

describe('test', () => {
  it('int', () => {
    const sumResult = pipe([1, 1], sum(new IntMonoid()));
    expect(sumResult).toEqual(2);
  });

  it('string', () => {
    const sumHelloWorld = pipe(['Hello', 'World'], sum(new StringMonoid()));
    expect(sumHelloWorld).toEqual('HelloWorld');
  });
});
