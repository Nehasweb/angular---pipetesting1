import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () =>
 {
  it('should multiply two numbers', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform(1,2)).toBe(2);
  });
});
