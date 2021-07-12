import * as helper from 'helpers';

describe('helpers tests', () => {
  describe('formatNumberToPergentage: ', () => {
    test('works properly: no fraction numbers', () => {
      // Given
      const value1 = 3.45678;
      const expectedValue1 = '3,45678%';

      // When
      const percentageNumber = helper.formatNumberToPercentage(value1);

      // Then
      expect(percentageNumber).toBe(expectedValue1);
    });
    test('works properly: with fraction numbers', () => {
      // Given
      const value1 = 3.45678;
      const value2 = 2.76789;
      const expectedValue1 = '3,45%';
      const expectedValue2 = '2,767%';

      // When
      const percentageNumber = helper.formatNumberToPercentage(value1, 2);
      const percentageNumber2 = helper.formatNumberToPercentage(value2, 3);

      // Then
      expect(percentageNumber).toBe(expectedValue1);
      expect(percentageNumber2).toBe(expectedValue2);
    });
  });

  describe('formatNumberToCurrencyString', () => {
    test('works properly', () => {
      // Given
      const value = 3200876;
      const expectedValue = 'R$ 3.200.876,00';

      // When
      const currencyText = helper.formatNumberToCurrencyString(value);

      // Then
      expect(currencyText).toBe(expectedValue);
    });
  });
});
