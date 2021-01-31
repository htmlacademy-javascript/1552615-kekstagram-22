const getRandomInt = function (min, max) {
  if (min > 0 && max > min) {
    return Math.floor(Math.random() * (max - min) + min);
    //Source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  return 'Введите значения min > 0, max > min';
}

getRandomInt(10, 20);

const checkString = function (comment, maxLength) {
  return (comment.length > maxLength) ? 'Длина комментария превышает ' + maxLength + ' символов' : true;
}

checkString('Высоко сижу, далеко гляжу. ', 100);
