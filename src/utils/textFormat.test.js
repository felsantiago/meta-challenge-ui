import {
  phoneFormat,
  cepFormat,
  phoneNumberFormat,
  currencyFormat
} from './textFormat';

describe('Testing textFormat utils', () => {
  test('Should have expected format when input phone', () => {
    const expected = '(11) 3333-2222';
    const input = '1133332222';
    const result = phoneFormat(input);
    expect(result).toBe(expected);
  });

  test('Should have expected format when input mobile phone', () => {
    const expected = '(11) 98888-2222';
    const input = '11988882222';
    const result = phoneFormat(input);
    expect(result).toBe(expected);
  });

  test('Should have expected format when input formated mobile phone', () => {
    const expected = '(11) 98888-2222';
    const input = '(11) 98888-2222';
    const result = phoneFormat(input);
    expect(result).toBe(expected);
  });

  test('Should have expected format when input cep without complete lenght', () => {
    const expected = '01126-710';
    const input = '1126710';
    const result = cepFormat(input);
    expect(result).toBe(expected);
  });

  test('Should have expected format when input cep', () => {
    const expected = '10126-710';
    const input = '10126710';
    const result = cepFormat(input);
    expect(result).toBe(expected);
  });

  test('Should have expected format when input formated cep', () => {
    const expected = '10126-710';
    const input = '10126-710';
    const result = cepFormat(input);
    expect(result).toBe(expected);
  });

  test('Should return formatted phoneNumber when input has 9 digits', () => {
    const expected = '99999-7103';
    const input = '999997103';
    const result = phoneNumberFormat(input);
    expect(result).toBe(expected);
  });

  test('Should return formatted phoneNumber when input has 8 digits', () => {
    const expected = '9999-7103';
    const input = '99997103';
    const result = phoneNumberFormat(input);
    expect(result).toBe(expected);
  });

  test('Should return formatted phoneNumber when input has more than 9 digits', () => {
    const expected = '99999-9710';
    const input = '9999997103';
    const result = phoneNumberFormat(input);
    expect(result).toBe(expected);
  });

  test('Should return formatted phoneNumber when input has less than 8 digits', () => {
    const expected = '9997103';
    const input = '9997103';
    const result = phoneNumberFormat(input);
    expect(result).toBe(expected);
  });

  test('Should return formatted currency BRL value', () => {
    const expected = 'R$ 22,00';
    const input = 22;
    const result = currencyFormat(input);
    expect(result).toBe(expected);
  });
});
