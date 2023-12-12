export function returnNumericCharacters(value: string): string {
  return value.replace(/\D/g, '');
}
