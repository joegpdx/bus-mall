import arrayApi from './arrayApi.js';
import { getRandomImg } from '../data/utils.js';

const imgButton1 = document.getElementById('buttonImg1');
const imgButton2 = document.getElementById('buttonImg2');
const imgButton3 = document.getElementById('buttonImg3');

const displayImg1 = document.getElementById('img1');
const displayImg2 = document.getElementById('img2');
const displayImg3 = document.getElementById('img3');



const displayImgSet = () => {

    // get two random product that are different
    const randomImg = getRandomImg();
    let randomImg2 = getRandomImg();

    while (randomImg === randomImg2) {
        randomImg2 = getRandomImg();
    }

    let randomImg3 = getRandomImg();

    while (randomImg3 === randomImg) {
        randomImg3 = getRandomImg();
    }

    displayImg1.src = arrayApi[randomImg].image;
    displayImg2.src = arrayApi[randomImg2].image;
    displayImg3.src = arrayApi[randomImg3].image;

    imgButton1.value = arrayApi[randomImg].id;
    imgButton2.value = arrayApi[randomImg2].id;
    imgButton3.value = arrayApi[randomImg3].id;
};

displayImgSet();

document.querySelector('reset').addEventListener('click', displayImgSet);

