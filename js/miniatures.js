import { comments, photoParameters } from './create-data.js';

const pictures = document.querySelector('.pictures');

const picturesList = '<div class="pictures__list"></div>';
pictures.insertAdjacentHTML('beforeend', picturesList);

const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPictureElement = userPictureTemplate.cloneNode(true);
picturesList.appendChild(userPictureElement);


