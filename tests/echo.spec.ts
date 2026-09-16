import { describe, expect, it } from 'vitest';
import { echo } from '../src/echo.js';

describe('echo', () => {
  it("returns the provided string", () => {
    expect(echo('world')).toBe('world');
  });
});
