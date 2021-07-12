export const formatNumberToPercentage = (
  value: number,
  fractionDigits?: number,
) => {
  const defaultValue = `${value.toString().replace('.', ',')}%`;
  const [integerValue, decimalValue] = value.toString().split('.');

  if (!fractionDigits || fractionDigits > decimalValue.length) {
    return defaultValue;
  }

  const fractionNumberSliced = decimalValue.substr(0, fractionDigits);

  return `${[integerValue, fractionNumberSliced].join(',')}%`;
};

export const formatNumberToCurrencyString = (value: number) => {
  const numberFormat = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'decimal',
  });
  return `R$ ${numberFormat.format(value)}`;
};
