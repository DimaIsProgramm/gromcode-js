import { getMinSquaredNumber } from './getMinSquaredNumber';

it('should get null if numbers array is empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should get null if numbers array is string', () => {
  const result = getMinSquaredNumber('123');
  expect(result).toEqual(null);
});
