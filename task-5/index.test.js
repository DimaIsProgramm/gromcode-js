import { getAdults, reverseArray, withdraw } from './index.js';

it('should get adult person from object', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should get adult person from object', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should get null if not array', () => {
  const result = reverseArray('not array');
  expect(result).toEqual(null);
});

it('should get reverse array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('should get reverse array', () => {
  const result = reverseArray([6, 2, 7]);
  expect(result).toEqual([7, 2, 6]);
});

it('should get -1 for not enought money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should get money from banc', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should get money from banc', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 30);
  expect(result).toEqual(57);
});
