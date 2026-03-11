const min = require('./min');

describe('min', () => {
  test('finds -10 as the minimum', () => {
    expect(min(-10,1)).toEqual(-10);
  });

  test('finds -1 as the minimum', () => {
    expect(min(0,-1)).toEqual(-1);
  });
});