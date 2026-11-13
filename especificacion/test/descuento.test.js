import { test } from 'node:test';
import assert from 'node:assert/strict';
import { precioFinal } from '../src/descuento.js';

test('DS-1: un socio que compra 100 € paga 90 €', () => {
  assert.equal(precioFinal(10000, true), 9000);
});

test('DS-2: un socio que compra 99,99 € paga el precio completo', () => {
  assert.equal(precioFinal(9999, true), 9999);
});

test('DS-3: quien no es socio paga 200 € por una compra de 200 €', () => {
  assert.equal(precioFinal(20000, false), 20000);
});
