// import { addToCart } from "./Product";
// import { hello } from './Product';
// const {hello } = require('./Product');

// console.log(hello);

// showResult2()

const cart = window.localStorage.getItem("Carts");
let item = JSON.parse(cart);
console.log(item);
let listt = item;

function showResult2() {
  // console.log(Carts);
  // const item = document.querySelector("#item");
  const result = document.querySelector("#result");
  const totalCost = document.querySelector("#totalCost");

  const totalCostt = document.querySelector("#totalCostt");
  let out = ` <tr>
        <th>Product</th>
        <th></th>
        <th>Price</th>
        <th>Status</th>
    </tr>`;

  listt.map(
    (x) =>
      (out += `<tr><td><img class="card-img-top" src="${x.image}" alt="Card image"  height="200px" width="60"></td><td>${x.name}</td><td>$ ${x.cost}</td>
        <td>${x.status}</td></tr>`)
  );
  result.innerHTML += out;

  totalCost.innerHTML = "QAR " + total(listt);
  totalCostt.innerHTML = "QAR " + total(listt);
}

function total(arr) {
  let total = 0;
  arr.map((x) => (total += x.cost));
  return total;
}

/* eslint-disable no-undef */
module.exports = { total, cart };
