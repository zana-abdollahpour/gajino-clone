export function convertToIranianCurrency(num: number): string {
  const formattedNumber = new Intl.NumberFormat("fa", {
    style: "currency",
    currency: "IRR",
    trailingZeroDisplay: "stripIfInteger",
  }).format(num);

  // To remove the ریال part
  return formattedNumber.slice(6, formattedNumber.length);
}
