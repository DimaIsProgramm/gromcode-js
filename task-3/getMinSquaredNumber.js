// algo
//1 преобразовуем числа в массиве по модулю
//2 находим минимальное
//3 возводим его в квадрат

export const getMinSquaredNumber = numbers => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  let absNumbers = numbers.map(Math.abs);
  let minNum = Math.min.apply(Math, absNumbers);
  return minNum * minNum;
};
