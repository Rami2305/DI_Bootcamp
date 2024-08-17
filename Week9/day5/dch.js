// In this exercise, you will use object oriented programming 
// concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.


class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time
    }

    watch() {
    const sentence = `${this.uploader} watched all ${this.time} of ${this.title}`
    console.log(sentence)
    }
}

const video2 =  new Video('Rapido y Furioso', 'Ramiro', 190)
console.log(video2)
video2.watch()

// Instantiate a second Video instance with different values.

const video3 = new Video('Shrek', 'Dana', 114)
console.log(video3)
video3.watch()
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.


const videoData = [
    { title: 'Harry Potter', uploader: 'Rami', time: 148 },
    { title: 'The Matrix', uploader: 'Dana', time: 136 },
    { title: 'The Lord of the Rings', uploader: 'Mauro', time: 169 },
    { title: 'The Lion King', uploader: 'Sheila', time: 88 },
    { title: 'Dumb and Dumber', uploader: 'Juan', time: 102 }
];

// Bonus: Loop through the array to instantiate those instances
const videoInstances = videoData.map(video => new Video(video.title, video.uploader, video.time));

videoInstances.forEach(video => video.watch());