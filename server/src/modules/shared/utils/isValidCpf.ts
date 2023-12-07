export function isValidCpf(cpf: string): boolean {
  let cpfData = cpf.replace(/\D/g, '')

  if (cpfData.length !== 11) {
    return false
  }

  if (/^(\d)\1+$/.test(cpfData)) {
    return false
  }

  let sum = 0
  let remainder = 0

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpfData[i - 1]) * (11 - i)
  }

  remainder = (sum * 10) % 11

  if (remainder === 10 || remainder === 11) {
    remainder = 0
  }

  if (remainder !== parseInt(cpfData[9])) {
    return false
  }

  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpfData[i - 1]) * (12 - i)
  }

  remainder = (sum * 10) % 11

  if (remainder === 10 || remainder === 11) {
    remainder = 0
  }

  if (remainder !== parseInt(cpfData[10])) {
    return false
  }

  return true
}
