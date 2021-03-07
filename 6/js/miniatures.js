import { photoParameters } from './create-data.js';
//ищем section .picture
const pictures = document.querySelector('.pictures');

//ищем соответствующий template и в нем <a> с классом .picture
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = ({ url, comments, likes }) => {
  const userPictureElement = userPictureTemplate.cloneNode(true);
  userPictureElement.querySelector('.picture__img').src = url;
  userPictureElement.querySelector('.picture__comments').textContent = comments.length;
  userPictureElement.querySelector('.picture__likes').textContent = likes;
  return userPictureElement;
}
//создаем фрагмент
const picturesFragment = document.createDocumentFragment();

//пилим массив из объектов
photoParameters.forEach((value) => {
  picturesFragment.appendChild(renderPicture(value));
})
//добавляем фрагмент
pictures.appendChild(picturesFragment);
