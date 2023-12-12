import { isValidCpf } from './isValidCpf'

describe('[shared]: utils -> isValidCpf', () => {
  it('should return false when the cpf is invalid', () => {
    const cpfIsValid = isValidCpf('12345678901')
    expect(cpfIsValid).toBe(false)
  })

  it('should return true when the cpf is valid', () => {
    const cpfIsValid = isValidCpf('03372977033')
    expect(cpfIsValid).toBe(true)
  })

  it('should validate the cpf even when there is formatting', () => {
    const invalidCpf = isValidCpf('123.456.789-01')
    const validCpf = isValidCpf('033.729.770-33')
    expect(invalidCpf).toBe(false)
    expect(validCpf).toBe(true)
  })

  it('should return false when the cpf has more or less than eleven characters', () => {
    const cpfWithLessThanElevenCharacters = isValidCpf('123456789')
    const cpfWithMoreThanElevenCharacters = isValidCpf('123456789012')
    expect(cpfWithLessThanElevenCharacters).toBe(false)
    expect(cpfWithMoreThanElevenCharacters).toBe(false)
  })

  it('should return false when there are only repeated digits', () => {
    const cpfIsValid = isValidCpf('111.111.111-11')
    expect(cpfIsValid).toBe(false)
  })
})
