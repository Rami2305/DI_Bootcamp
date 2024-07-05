function displayStudentInfo(objUser) {
  //destructuring
  // const [b, a] = [1,2]
  const { last, first } = objUser;
  console.log(first, last);
}

// displayStudentInfo({ first: "Elie", last: "Schoppik" });
//output : 'Your full name is Elie Schoppik'

const users = { user1: 18273, user2: 92833, user3: 90315 };

// console.log(Object.entries(users));

/** forEach */
let usersArray = Object.entries(users);

// usersArray.forEach((item, i, arr) => arr[i][1] *= 2)

// let result = Object.entries(users).map(([key, value]) => [key, value * 2]);

// console.log(result);

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}`;
  }
}

// const v1 = new Video("aaa", "aaa aaa", 10);
// const v2 = new Video("bbb", "bbb bbb", 20);
// console.log(v1.watch(),v2.watch());

let arr = [
  { title: "aaa", uploader: "aaa aaa", time: 10 },
  { title: "bbb", uploader: "bbb bbb", time: 20 },
  { title: "ccc", uploader: "ccc ccc", time: 30 },
  { title: "ddd", uploader: "ddd ddd", time: 40 },
];

let videos = arr.map((item) => {
  return new Video(item.title, item.uploader, item.time);
});

console.log(videos);

videos.forEach((item) => {
  console.log(item.watch());
});
