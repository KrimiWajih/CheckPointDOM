let min = document.querySelectorAll(".minus");
console.log(min);
let pls = document.querySelectorAll(".plus");
console.log(pls);
let quantity = document.querySelectorAll(".quantity");
console.log(quantity);
let subtotal = document.querySelectorAll(".subtotal");
let price = document.querySelectorAll(".prix");
console.log(price);
let total = document.querySelector(".total");
console.log(total);
let button = document.querySelectorAll(".btnr");
console.log(button);
let heart = document.querySelectorAll(".fa-solid.fa-heart");
console.log(button);
let remov = document.querySelectorAll(".remo");
console.log(remov);
let rows = document.querySelectorAll(".container.text-center");
console.log(rows);

let removcolor = document.querySelectorAll(".fa-solid.fa-trash");
console.log(removcolor);

for (let i = 0; i < remov.length; i++) {
  remov[i].addEventListener("click", function () {
    rows[i + 1].remove();
    total.innerHTML = total.innerHTML - subtotal[i].innerHTML.slice(1);
  });
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (heart[i].style.color != "red") {
      heart[i].style.color = "red";
    } else {
      heart[i].style.color = "black";
    }
  });
}

let tabprice = [];
for (let i = 0; i < price.length; i++) {
  tabprice[i] = price[i].innerHTML.slice(1);
  tabprice[i] = Number(tabprice[i]);
}
console.log(tabprice);

for (let i = 0; i < min.length; i++) {
  min[i].addEventListener("click", function () {
    if (quantity[i].innerHTML > 0) {
      quantity[i].innerHTML--;
      subtotal[i].innerHTML = `$ ${tabprice[i] * quantity[i].innerHTML}`;
      total.innerHTML = Number(total.innerHTML) - tabprice[i];
    }
  });
}

for (let i = 0; i < pls.length; i++) {
  pls[i].addEventListener("click", function () {
    quantity[i].innerHTML++;
    subtotal[i].innerHTML = `$ ${tabprice[i] * quantity[i].innerHTML}`;
    total.innerHTML = Number(total.innerHTML) + tabprice[i];
  });
}
