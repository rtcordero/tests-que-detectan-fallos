import { test } from 'node:test';
import fc from 'fast-check';
import { dividirCuenta } from '../src/cuenta.js';

const totalesEnCentimos = fc.integer({ min: 0, max: 1_000_000 }); // de 0 a 10.000 €
const numerosDePersonas = fc.integer({ min: 1, max: 20 });

test('las partes suman exactamente el total', () => {
  fc.assert(
    fc.property(totalesEnCentimos, numerosDePersonas, (total, personas) => {
      const suma = dividirCuenta(total, personas).reduce((acumulado, parte) => acumulado + parte, 0);
      return suma === total;
    }),
  );
});

test('hay una parte por persona', () => {
  fc.assert(fc.property(totalesEnCentimos, numerosDePersonas, (total, personas) => dividirCuenta(total, personas).length === personas));
});

test('nadie paga más de un céntimo que otro', () => {
  fc.assert(
    fc.property(totalesEnCentimos, numerosDePersonas, (total, personas) => {
      const partes = dividirCuenta(total, personas);
      return Math.max(...partes) - Math.min(...partes) <= 1;
    }),
  );
});

test('cada parte es un número entero de céntimos', () => {
  fc.assert(fc.property(totalesEnCentimos, numerosDePersonas, (total, personas) => dividirCuenta(total, personas).every(Number.isInteger)));
});
