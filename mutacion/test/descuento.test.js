import { test } from 'node:test';
import assert from 'node:assert/strict';
import { precioFinal } from '../src/descuento.js';

test('un socio con una compra de 200 € paga 180 €', () => {
  assert.equal(precioFinal(200, true), 180);
});

test('quien no es socio paga el precio completo', () => {
  assert.equal(precioFinal(200, false), 200);
});
