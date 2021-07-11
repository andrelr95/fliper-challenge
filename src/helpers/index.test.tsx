import * as helper from 'helpers';

describe('helpers tests', () => {
  test('formatNumberToPergentage works properly', () => {
    const num1 = 3.45678;
    const num2 = 2.76789;
    const expectedNum1 = '3,45%';
    const expectedNum2 = '2,76%';

    const percentageNumber = helper.formatNumberToPercentage(num1, 2);

    expect(percentageNumber).toBe(expectedNum1);
  });
});
