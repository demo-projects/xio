import { CountByPipe } from './count-by.pipe';

describe('CountByPipe', () => {

  it('count', () => {
    const pipe = new CountByPipe();
    expect(pipe).toBeTruthy();
  });

});
