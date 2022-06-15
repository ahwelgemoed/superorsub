import SubSuper from '../src/SubSuper';

describe('blah', () => {
  let instance: SubSuper;

  beforeEach(() => {
    instance = SubSuper.getInstance({ subOrSuper: 'subValue' });
  });
  it('works', () => {
    // expect(sum(1, 1)).toEqual(2);
  });
});
