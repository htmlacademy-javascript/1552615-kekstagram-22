const DESCRIPTIONS = [
  'Это я на море',
  'Это я не на море',
  'С котом',
  'Вкусняшки подъехали!',
  'Вчера получил тумаков..(( Пичалька',
  'Через тернии к звездам!',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
]

const NAMES = [
  'Бонифаций',
  'Пикачу',
  'Людовиг',
  'Евстафий',
  'Джонатан Ливингстон',
  'Вилорик',
  'Кузьма',
  'Такеши',
  'Бармалей',
]

const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return undefined;
}

// const checkString = (comment, maxLength) => {
//   return (comment.length > maxLength) ? false : true;
// }

const getNumbers = (min, max) => {
  let numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

const getRandomElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const createComment = () => {
  return {
    id: getRandomInt(0, 100),
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

const comments = new Array(25).fill(null).map(() => createComment());

const createPhotoParameter = () => {
  return {
    id: getRandomElement(getNumbers(1, 25)),
    url: 'photos/' + getRandomElement(getNumbers(1, 25)) + '.jpg',
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: getRandomElement(comments),
  };
};

const photoParameters = new Array(25).fill(null).map(() => createPhotoParameter());

photoParameters;
