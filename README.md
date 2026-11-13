# Tests que detectan fallos

Código de tres artículos de [rubentejera.com](https://rubentejera.com/) sobre cómo saber si los tests prueban algo, sobre todo cuando los escribe un agente de IA. Cada carpeta es un proyecto independiente, con sus dependencias fijadas:

| Carpeta | Artículo | Qué muestra |
| --- | --- | --- |
| `mutacion/` | [Mutation testing: pruebas de mutación con Stryker](https://rubentejera.com/pruebas-de-mutacion/) | Una cobertura del 100 % que no detecta un fallo en el límite, y los tests que lo arreglan |

El historial va paso a paso: cada commit es un momento del artículo.

## Requisitos

Node.js 24.22.2 o posterior (`.node-version`).

## Uso

```bash
cd mutacion
npm ci
npm test
npm run test:mutacion
```

## Licencia

MIT. Ver `LICENSE`.
