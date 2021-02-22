const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return undefined;
}

// const checkString = (comment, maxLength) => {
//   return (comment.length > maxLength) ? false : true;
// }
//создаем массив цифр в заданном интервале
const getNumbers = (min, max) => {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}
//получаем случайный элемент
const getRandomElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

export { getRandomInt, getNumbers, getRandomElement };
