/* eslint-disable react/jsx-filename-extension */
export const phoneFormat = (phone) => {
  if (phone.length === 10) {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6, 10)}`;
  }
  if (phone.length === 11) {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
  }
  return phone;
};

export const cepFormat = (data) => {
  let cep = data.toString();

  if (cep.length === 7) {
    cep = `0${cep}`;
  }
  if (cep.length === 8) {
    return `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
  }
  return cep;
};

export const phoneNumberFormat = (phone) => {
  const number = phone.replace(/\D/g, '').slice(0, 9);

  if (number.length === 8) {
    return `${number.slice(0, 4)}-${number.slice(4, 8)}`;
  }
  if (number.length === 9) {
    return `${number.slice(0, 5)}-${number.slice(5, 9)}`;
  }
  return number;
};

export const currencyFormat = (amount) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const UNICODE_NON_BREAKING_SPACE = String.fromCharCode(160);
  const USUAL_SPACE = String.fromCharCode(32);

  return formatter.format(amount).replace(UNICODE_NON_BREAKING_SPACE, USUAL_SPACE);
};
