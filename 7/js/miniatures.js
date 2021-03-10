import { photoParameters } from './create-data.js';
import { openBigPicture, bigPicDataRender } from './big-pic.js'

const pictures = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');



// создаем миниатюры
const renderPicture = ({ url, comments, likes, id }) => {
  const userPictureElement = userPictureTemplate.cloneNode(true);
  userPictureElement.querySelector('.picture__img').src = url;
  userPictureElement.querySelector('.picture__comments').textContent = comments.length;
  userPictureElement.querySelector('.picture__likes').textContent = likes;
  userPictureElement.querySelector('.picture__img').dataset.id = id;
  return userPictureElement;
};

const picturesFragment = document.createDocumentFragment();

photoParameters.forEach((photo) => {
  picturesFragment.appendChild(renderPicture(photo));
});

pictures.appendChild(picturesFragment);

//создаем обработчик события клика для каждой фотографии
const onPictureImgClick = (evt) => {
  if (evt.target.matches('.picture__img')) {
    openBigPicture();
    bigPicDataRender(photoParameters.find(photo => photo.id == evt.target.dataset.id));
  }
};

pictures.addEventListener('click', onPictureImgClick);

