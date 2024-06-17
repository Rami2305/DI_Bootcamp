
let train = document.getElementById('train')

// click event
train.addEventListener("click", trainPassing)

function trainPassing() {
      let start = Date.now(); // start date

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        console.log(timePassed)
        train.style.left = timePassed / 5 + 'px';
        if (timePassed > 2000) {
          clearInterval(timer);
        }
      }, 20);
    }

let timer = setInterval(myTimer, 1000);

function myTimer() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
    document.getElementById("demo").innerHTML = time;
}

function myStopFunction() {
    clearInterval(timer);
}