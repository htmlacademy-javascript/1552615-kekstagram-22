import { getRandomInt, getRandomElement } from './utils.js';

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

const createComment = () => {
  return {
    id: getRandomInt(0, 100),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

const createPhotoParameter = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: new Array(getRandomInt(0, 200)).fill(null).map(() => createComment()),
  };
};

const photoParameters = new Array(25).fill(null).map((item, i) => createPhotoParameter(i + 1));

export { photoParameters };
