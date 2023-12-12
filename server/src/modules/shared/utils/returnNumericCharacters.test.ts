import { returnNumericCharacters } from './returnNumericCharacters'

describe('[shared]: utils -> returnNumericCharacters', () => {
  it('should validate the value entered when there are special characters', () => {
    const valueWithCharacters = '123.456.789-01'
    const expectedReturn = '12345678901'
    const normalizedValue = returnNumericCharacters(valueWithCharacters)
    expect(normalizedValue).toEqual(expectedReturn)
  })

  it('should validate the value entered when there is text', () => {
    const valueWithCharacters = '123A456B789C01'
    const expectedReturn = '12345678901'
    const normalizedValue = returnNumericCharacters(valueWithCharacters)
    expect(normalizedValue).toEqual(expectedReturn)
  })
})
