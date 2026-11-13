// Los socios tienen un 10 % de descuento en compras de 100 € o más.
export function precioFinal(total, esSocio) {
  if (esSocio && total >= 100) {
    return total * 0.9;
  }
  return total;
}
