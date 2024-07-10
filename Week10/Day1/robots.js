const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const root = document.getElementById("root");
const input = document.getElementById("search");

input.addEventListener("input", function (event) {
  search(event);
});

function render(arr) {
  const robotsHtml = arr.map((item) => {
    return `<div class="card">
     <img src=${item.image} onClick="alert('${item.image}')"/>
     <h2>${item.name}</h2>
     <p>${item.email}</p>
    </div>`;
  });
  console.log(robotsHtml);
  root.innerHTML = robotsHtml.join("");

  //   console.log(document.getElementsByTagName('div'));
  /*
  root.innerHTML = "";
  
  arr.forEach((item) => {
    const { id, name, email, image } = item;
    
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.addEventListener("click", () => {
      alert(image);
    });

    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    // img.src = image
    img.setAttribute("src", image);
    h2.innerText = name;
    p.textContent = email;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    div.classList.add("card");

    root.appendChild(div);
    
  });
  */
}
render(robots);

function search(e) {
  // console.log(e.target.id);
  const val = e.target.value;
  const filter = robots.filter((item) => {
    return item.name.toLowerCase().includes(val.toLowerCase());
  });
  render(filter);
}
