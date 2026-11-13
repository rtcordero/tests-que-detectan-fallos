// Reparte una cuenta, en céntimos, entre varias personas.
// Los céntimos que sobran van, de uno en uno, a las primeras personas.
export function dividirCuenta(totalEnCentimos, personas) {
  const base = Math.floor(totalEnCentimos / personas);
  const resto = totalEnCentimos % personas;
  return Array.from({ length: personas }, (_, i) => (i < resto ? base + 1 : base));
}
