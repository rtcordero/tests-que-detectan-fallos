// Cada criterio de la especificación tiene al menos un test que empieza por su identificador.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const raiz = join(import.meta.dirname, '..');
const leerTodo = (carpeta) =>
  readdirSync(join(raiz, carpeta), { recursive: true, withFileTypes: true })
    .filter((entrada) => entrada.isFile())
    .map((entrada) => readFileSync(join(entrada.parentPath, entrada.name), 'utf8'))
    .join('\n');

const criterios = [...leerTodo('spec').matchAll(/^- \[([A-Z]+-\d+)\]/gm)].map(([, id]) => id);
const testsConCriterio = [...leerTodo('test').matchAll(/test\('([A-Z]+-\d+):/g)].map(([, id]) => id);

test('la especificación tiene criterios de aceptación', () => {
  assert.notEqual(criterios.length, 0, 'No se ha encontrado ningún «- [XX-n]» en spec/');
});

test('cada criterio de aceptación tiene su test', () => {
  const sinTest = criterios.filter((id) => !testsConCriterio.includes(id));
  assert.deepEqual(sinTest, [], `Criterios sin test: ${sinTest.join(', ')}`);
});

test('cada test con identificador corresponde a un criterio que existe', () => {
  const huerfanos = testsConCriterio.filter((id) => !criterios.includes(id));
  assert.deepEqual(huerfanos, [], `Tests de criterios que ya no están en la especificación: ${huerfanos.join(', ')}`);
});
