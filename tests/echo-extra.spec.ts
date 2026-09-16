import { describe, expect, it } from 'vitest';
import { echo } from '../src/echo.js';

describe('echo extra', () => {
  it("returns the provided string for hello", () => {
    expect(echo('hello')).toBe('hello');
  });
});
