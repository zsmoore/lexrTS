import { double } from '../src';
import { describe, expect, test } from '@jest/globals';

describe('index module', () => {
  test('double 2', () => {
    expect(double(2)).toBe(4);
  });
});
