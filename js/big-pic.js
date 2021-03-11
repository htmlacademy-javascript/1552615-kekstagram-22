import { isEscEvent } from './utils.js';

// создаем необходимые переменные
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPicCommentsList = document.querySelector('.social__comments');

// Создаем функцию, которая вернет данные в попап с большим фото
const bigPicDataRender = ({ url, likes, comments, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = document.querySelector('#social-comment').content.querySelector('.social__comment').cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsListFragment.appendChild(commentElement);
  });
  bigPicCommentsList.innerHTML = '';

  bigPicCommentsList.appendChild(commentsListFragment);
};

//создаем обработчик события нажатия Esc при открытом попапе
const onBigPictureEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

//создаем функцию открытия попапа с увеличенной фотографией
const openBigPicture = () => {
  bigPicture.classList.remove('hidden');

  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onBigPictureEscKeydown);
};

//создаем функцию закрытия попапа
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');

  body.classList.remove('modal-open');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

//добавляем обработчик события на элемент крестик - закрытие попапа
bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});



export { openBigPicture, closeBigPicture, bigPicDataRender }
