import { photoParameters } from './create-data.js';
//ищем section .picture
const pictures = document.querySelector('.pictures');
//создаем div в html для вставки миниатюр
pictures.insertAdjacentHTML('beforeend', '<div class="pictures__list"></div>');
const picturesList = pictures.querySelector('.pictures__list');

//ищем соответствующий template и в нем <a> с классом .picture
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userMiniatures = photoParameters;
//создаем фрагмент
const picturesListFragment = document.createDocumentFragment();
//пилим массив из объектов
userMiniatures.forEach(({ url, comments, likes }) => {
  const userPictureElement = userPictureTemplate.cloneNode(true);
  userPictureElement.querySelector('.picture__img').src = url;
  userPictureElement.querySelector('.picture__comments').textContent = comments;
  userPictureElement.querySelector('.picture__likes').textContent = likes;
  picturesListFragment.appendChild(userPictureElement);
})
//добавляем фрагмент в созданный div
picturesList.appendChild(picturesListFragment);
