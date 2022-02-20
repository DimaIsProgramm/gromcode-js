import { calc } from './calculator';

it('should get sum of numbers', () => {
  const result = calc('2 + 4');
  expect(result).toEqual('2 + 4 = 6');
});

it('should get substraction of numbers', () => {
  const result = calc('6 - 4');
  expect(result).toEqual('6 - 4 = 2');
});

it('should get multiplication of numbers', () => {
  const result = calc('2 * 4');
  expect(result).toEqual('2 * 4 = 8');
});

it('should get division of numbers', () => {
  const result = calc('6 / 3');
  expect(result).toEqual('6 / 3 = 2');
});

it('should get null if numbers not a string', () => {
  const result = calc(6 / 3);
  expect(result).toEqual(null);
});
