export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberValues){
  const numbers = [];
    for (const numberInput of numberValues) {
      const number = transformToNumber(numberInput);
      numbers.push(number);
    }

    return numbers;
}