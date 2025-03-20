import { isTriplet } from './pythagoras';

test('3, 4, 5 ist ein Pythagoräisches Tripel', () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test('2, 3, 4 ist KEIN Pythagoräisches Tripel', () => {
  expect(isTriplet(2, 3, 4)).toBe(false);
});

