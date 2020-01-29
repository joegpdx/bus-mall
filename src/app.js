import arrayApi from './arrayApi.js';
import { getRandomImg, findById } from '../data/utils.js';

const imgButton1 = document.getElementById('buttonImg1');
const imgButton2 = document.getElementById('buttonImg2');
const imgButton3 = document.getElementById('buttonImg3');

const displayImg1 = document.getElementById('img1');
const displayImg2 = document.getElementById('img2');
const displayImg3 = document.getElementById('img3');

window.onload = window.localStorage.clear();

let totalVotes = 0;
const productVoteDetails = [];


const displayImgSet = () => {

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

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectedProductId = formData.get('product');

    totalVotes++;

    // whichever one they clicked on, see if they've voted for it before
    const productInVotesArray = findById(productVoteDetails, selectedProductId);

    if (productInVotesArray) {
        productInVotesArray.votes++;
    } else {
        const newVoteObject = {
            id: selectedProductId,
            votes: 1,
        };

        productVoteDetails.push(newVoteObject);
    }

    document.querySelector('input[name="product"]:checked').checked = false;

    localStorage.setItem('votes', JSON.stringify(productVoteDetails));
    // EVENT LISTENER
    // when they select a product, update the total votes
    // update the productVoteDetails
    // if theres coffee in the votes array, increment the votes for coffee in the array
    // if theres no coffee in the votes array, push some coffee into the array

    if (totalVotes >= 25) {
        window.location = 'results.html';
    }

    displayImgSet();
});



