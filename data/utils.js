import arrayApi from '../src/arrayApi.js';

export function getRandomImg() {
    return Math.floor(Math.random() * arrayApi.length);
}

export function findById(arrayApi, id) {
    for (let i = 0; i < arrayApi.length; i++) {
        const item = arrayApi[i];
        if (item.id === id) {
            return item;
        }
    }
}