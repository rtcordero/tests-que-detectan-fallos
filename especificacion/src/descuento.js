// Los socios pagan un 10 % menos en compras de 100 € o más (spec/descuento-socios.md).
export function precioFinal(totalEnCentimos, esSocio) {
  if (esSocio && totalEnCentimos >= 10000) {
    return Math.round(totalEnCentimos * 0.9);
  }
  return totalEnCentimos;
}
