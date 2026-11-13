import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dividirCuenta } from '../src/cuenta.js';

test('100 € entre 4 son 25 € cada uno', () => {
  assert.deepEqual(dividirCuenta(10000, 4), [2500, 2500, 2500, 2500]);
});

test('90 € entre 3 son 30 € cada uno', () => {
  assert.deepEqual(dividirCuenta(9000, 3), [3000, 3000, 3000]);
});
