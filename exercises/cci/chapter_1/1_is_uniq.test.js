const isUniq = require('./1_is_uniq');

describe('Unique string tests - true', () => {
test('test 1', () => {
    const str = 'abc';

    expect(isUniq(str)).toBeTruthy();
  });

  test('test 2', () => {
    const str = 'abc1234$%&';

    expect(isUniq(str)).toBeTruthy();
  });

  test('test 3', () => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    expect(isUniq(str)).toBeTruthy();
  });
});

describe('Unique string tests - false', () => {
  test('test 1', () => {
    const str = 'abca';

    expect(isUniq(str)).toBeFalsy();
  });

  test('test 1', () => {
    const str = 'qwertqwerty';

    expect(isUniq(str)).toBeFalsy();
  });

  test('test 1', () => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA';

    expect(isUniq(str)).toBeFalsy();
  });
});

