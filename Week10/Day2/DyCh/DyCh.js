const wordsArray = ['apple', 'banana', 'grape', 'orange','kiwi', 1];

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        let every = words.every((word) => typeof word === 'string');
        if (every) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject('Not all elements are strings');
        }
    })
}

function sortWords(words) {
    return new Promise((resolve,reject) => {
        if(words.length > 4) {
            resolve(words.sort());
        } else {
            reject('Error > Array is less or equal to 4')
        }
    })
}

makeAllCaps(wordsArray)
    .then(uppercasedWords => sortWords(uppercasedWords))
    .then(sortedWords => console.log('Sorted words:', sortedWords))
    .catch(error => console.error('Error:', error));