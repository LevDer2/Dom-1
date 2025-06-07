const cars = [
  {
    model: "audi",
    photo:
      "https://static.ukrinform.com/photos/2022_10/thumb_files/1080_600_1664867617-6191.jpeg",
    speed: 290,
  },
  {
    model: "bmw",
    photo:
      "https://selectavto.com/wp-content/uploads/2024/07/1-bmw-3-series.jpg",
    speed: 250,
  },
  {
    model: "porshe",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 310,
  },
  {
    model: "rolls roys",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 220,
  },

  {
    model: "renault",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 350,
  },

  {
    model: "mercedes",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 200,
  },
  {
    model: "dodge",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 280,
  },
  {
    model: "fiat",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 60,
  },
  {
    model: "tesla",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 310,
  },
  {
    model: "zeekr",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
    speed: 200,
  },
  {
    model: "xaomi",
    photo:
      "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60",
  },
];

const listElement = document.createElement("ul");
// cars.forEach(({model, photo, speed = "0"}) => {
//     listElement.insertAdjacentHTML(
//       "beforeend",
    //   `<li>
    //     <h2>${model}</h2>
    //     <img src="${photo}" width="500px" alt="${model}" >
    //     <p>${speed}</p>
    // </li>`
//     );
// })
// document.querySelector("body").prepend(listElement);
// console.log(listElement);

const carsLayot = cars.map(({ model, photo, speed = "0" }) => {
    const itemElement = `<li>
        <h2>${model}</h2>
        <img src="${photo}" width="500px" alt="${model}" >
        <p>${speed}</p>
    </li>`
    return itemElement;
})
const elementList = carsLayot.join("")
console.log(elementList);
listElement.insertAdjacentHTML("afterbegin", elementList);
document.querySelector("body").prepend(listElement);