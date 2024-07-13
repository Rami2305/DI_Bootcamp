let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": " "
  }`;

// console.log(JSON.parse(morse));

const toJs = (jsonString) => {
  return new Promise((res, rej) => {
    let objMorse;
    try {
      objMorse = JSON.parse(jsonString);
      res(objMorse);
    } catch (error) {
      rej("Error: this is not a valid JSON");
    }
    if (Object.keys(objMorse).length === 0) {
      rej("Error: this is an empty json object");
    }
  });
};

const toMorse = (morseObj) => {
  const userStr = prompt("Enter a word...");
  if (!userStr) {
    return Promise.reject("No input provided");
  }

  // Hello -> ['h','e','l','l,'o']
  const arrStr = userStr.toLowerCase().split("");

  const returnArr = arrStr.map((char) => {
    if (char in morseObj) {
      return morseObj[char];
    } else {
      return Promise.reject(`Char ${char} not exist int the morse code`);
    }
  });
  return Promise.resolve(returnArr);
};

const joinWords = (morseArr) => {
  return morseArr.map((item) => `<div>${item}</div>`);
};

toJs(morse)
  .then((result) => {
    console.log(result);
    return toMorse(result);
  })
  .then((result) => {
    console.log(result);
    return joinWords(result);
  })
  .then((result) => {
    document.getElementById("root").innerHTML = result.join("");
  })
  .catch((err) => {
    console.log("err=>", err);
  });
