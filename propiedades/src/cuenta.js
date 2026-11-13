// Reparte una cuenta, en céntimos, entre varias personas.
export function dividirCuenta(totalEnCentimos, personas) {
  const parte = Math.round(totalEnCentimos / personas);
  return Array(personas).fill(parte);
}
