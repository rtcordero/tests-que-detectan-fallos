# Tests que detectan fallos

Código de tres artículos de [rubentejera.com](https://rubentejera.com/) sobre cómo saber si los tests prueban algo, sobre todo cuando los escribe un agente de IA. Cada carpeta es un proyecto independiente, con sus dependencias fijadas:

| Carpeta | Artículo | Qué muestra |
| --- | --- | --- |
| `mutacion/` | [Mutation testing: pruebas de mutación con Stryker](https://rubentejera.com/pruebas-de-mutacion/) | Una cobertura del 100 % que no detecta un fallo en el límite, y los tests que lo arreglan |
| `propiedades/` | [Property-based testing: pruebas basadas en propiedades](https://rubentejera.com/pruebas-basadas-en-propiedades/) | Dos ejemplos en verde y una propiedad que encuentra el fallo con un céntimo entre dos personas |
| `especificacion/` | [Spec-driven development (SDD): qué es y cuándo usarlo](https://rubentejera.com/spec-driven-development/) | Criterios de aceptación con identificador y un test que comprueba que cada uno tiene el suyo |

El historial va paso a paso: cada commit es un momento del artículo.

## Requisitos

Node.js 24.22.2 o posterior (`.node-version`).

## Uso

En cada carpeta:

```bash
npm ci
npm test
```

En `mutacion/`, además, `npm run test:mutacion` pasa Stryker; la CI falla si algún mutante sobrevive.

## Qué hizo la IA

Los ejemplos se escribieron con ayuda de un agente de IA y se revisaron a mano. Cada cifra que citan los artículos se ha obtenido ejecutando este código con las versiones fijadas en cada `package.json`.

## Licencia

MIT. Ver `LICENSE`.
