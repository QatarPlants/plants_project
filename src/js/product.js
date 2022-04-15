// export {addToCart} from './product'
// window.localStorage.clear();
let Products = [
  {
    id: 1,
    name: "Sun Flower",
    releaseDate: new Date(1990, 1, 1),
    cost: 34,
    category: "In Door",
    stock: 5,
    status: "Available",
    color: "Yellow",
    sun: "Low",
    water: "2 times a day",
    size: "Small",
    image: "./imgs/product1.jpg",
    des: "Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers.",
  },
  {
    id: 2,
    name: "Lilium",
    releaseDate: new Date(1990, 1, 1),
    cost: 28,
    category: "In Door",
    stock: 5,
    status: "Available",
    color: "White",
    sun: "Medium",
    water: "3 times a day",
    size: "Medium",
    image: "./imgs/product2.jpg",
    des: "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies..",
  },
  {
    id: 3,
    name: "Rose",
    releaseDate: new Date(1990, 1, 1),
    cost: 50,
    category: "In Door",
    stock: 6,
    status: "Available",
    color: "Red",
    sun: "Low",
    water: "1 times a day",
    size: "Small",
    image: "./imgs/product3.jpg",
    des: "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. ",
  },
  {
    id: 2,
    name: "Lilium",
    releaseDate: new Date(1990, 1, 1),
    cost: 28,
    category: "In Door",
    stock: 5,
    status: "Available",
    color: "White",
    sun: "Medium",
    water: "3 times a day",
    size: "Medium",
    image: "./imgs/product2.jpg",
    des: "Lilium is a genus of herbaceous flowering plants growing from bulbs, all with large prominent flowers. They are the true lilies..",
  },
  {
    id: 1,
    name: "Sun Flower",
    releaseDate: new Date(1990, 1, 1),
    cost: 34,
    category: "In Door",
    stock: 5,
    status: "Available",
    color: "Yellow",
    sun: "Low",
    water: "2 times a day",
    size: "Small",
    image: "./imgs/product1.jpg",
    des: "Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers.",
  },
  {
    id: 3,
    name: "Rose",
    releaseDate: new Date(1990, 1, 1),
    cost: 50,
    category: "In Door",
    stock: 6,
    status: "Available",
    color: "Red",
    sun: "Low",
    water: "1 times a day",
    size: "Small",
    image: "./imgs/product3.jpg",
    des: "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. ",
  },
];

console.log(Products);

function showResult() {
  var out = document.querySelector("#result");
  //const totalCost = document.querySelector("#totalCost");
  let result = "";
  let Carts = [];
  Products.map(
    (x) =>
      (result += `<div class="card" style="width:31%; float: left; margin-left:15px; margin-top: 10px" ><img class="card-img-top" src="${x.image}" alt="Card image" width="100%" height="400px"><div class="card-body">
            <h4 class="card-title">${x.name} <a class="btn btn-primary stretched-link" onclick="addToCart(${x.id})">Buy</a> </h4><p class="card-text"> 
${x.category}   ${x.cost}$    ${x.status}</p>

        </div></div>`)
  );
  out.innerHTML = result;
}

let Carts = [
  {
    id: 3,
    name: "Rose",
    releaseDate: new Date(1990, 1, 1),
    cost: 50,
    category: "In Door",
    stock: 6,
    status: "Available",
    color: "Red",
    sun: "Low",
    water: "1 times a day",
    size: "Small",
    image: "./imgs/product3.jpg",
    des: "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. ",
  },
];

function addToCart(productId) {
  // console.log("hey");
  console.log(Products[productId - 1]);
  Carts.push(Products[productId - 1]);

  localStorage.setItem("Carts", JSON.stringify(Carts));
  alert(`${Products[productId - 1].name} added to cart`);
  console.log(Carts);
}

function getname(name, str) {
  if (name === str) {
    return true;
  } else {
    return false;
  }
}

function searsh() {
  const out = document.querySelector("#result");
  const name = document.getElementById("productSearsh");
  // console.log(name.value);
  // out.innerHTML = name.value
  let str = name.value;
  let item;
  Products.forEach((elem) => {
    if (getname(elem.name, str)) {
      item = Products[elem.id - 1];
      return;
    } else {
      return;
    }
  });
  if (item) {
    const card = `<div class="card" style="width:31%; float: left; margin-left:15px; margin-top: 10px" ><img class="card-img-top" src="${item.image}" alt="Card image" width="100%" height="400px"><div class="card-body">
        <h4 class="card-title">${item.name}  <a  class="btn btn-primary stretched-link" onclick="addToCart(${item.id})">Buy</a> </h4><p class="card-text"> 
        ${item.category}   ${item.cost}$    ${item.status}$</p>
    </div></div>`;
    out.innerHTML = card;
  }
}

/* eslint-disable no-undef */
module.exports = { getname, Products };
