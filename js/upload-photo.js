import { isEnterEvent, isEscEvent } from './utils.js';

const imgUploadPopup = document.querySelector('.img-upload__overlay');
const imgUploadIcon = document.querySelector('.img-upload__label');
const uploadPopupCloseButton = imgUploadPopup.querySelector('.cancel');

//создаем обработчик события нажатия на Esc
const onImgUploadPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUploadPopup();
  };
};

//создаем обработчик события клика по иконке открытия попапа загрузки
const onUploadIconClick = (evt) => {
  if (evt.target.matches('.img-upload__label')) {
    evt.preventDefault();
    openImgUploadPopup();
  };
};

//создаем функцию открытия попапа с загрузкой фотографии
const openImgUploadPopup = () => {
  imgUploadPopup.classList.remove('hidden');
  document.querySelector('.effect-level').classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onImgUploadPopupEscKeydown);
};

//создаем функцию закрытия попапа
const closeImgUploadPopup = () => {
  imgUploadPopup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onImgUploadPopupEscKeydown);
  document.querySelector('#upload-file').textContent = '';
};

//добавляем обработчик события клик на иконке загрузки
imgUploadIcon.addEventListener('click', onUploadIconClick);

//доавляем обработчик события нажатия Enter на миниатюру
imgUploadPopup.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    evt.preventDefault();
    openImgUploadPopup();
  };
});

//добавляем обработчик события на элемент крестик - закрытие попапа
uploadPopupCloseButton.addEventListener('click', () => {
  closeImgUploadPopup();
});

//добавляем обработчик события на нажатие Esc
document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgUploadPopup();
  };
});

