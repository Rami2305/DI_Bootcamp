const wordsArray = ['apple', 'banana', 'grape', 'orange','kiwi', 1];

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        let every = words.every((word) => typeof word === 'string');
        if (every) {
            (resolve(words).map((word) => word.toUpperCase()))
        }
    })
}

function sortWords(words) {
    return new Promise((resolve,reject) => {
        if(words.length > 4) {
            return (words.sort())
        } else {
            reject('Error > Array is less or equal to 4')
        }
    })
}

