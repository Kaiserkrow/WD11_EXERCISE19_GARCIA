let laptop = {
  brand: "MSI",
  year: 2022,
  hobbies: ["singing", "dancing", "swimming", "baking"],
  screenRes: 1440,
  ram: 16,
  memory: "1TB",
  cart: [
    { item: "Quarter Pounder", price: 300 },
    { item: "Regular Burger", price: 500 },
    { item: "Hawaiian Burger", price: 700 },
    { item: "Sizzling Burder", price: 400 },
  ],
  alertMethod() {
    alert("hello world");
  },
  outputArray() {
    this.hobbies.forEach((hobby) => {
      alert(hobby);
    });
  },
  showCart() {
    let overallCost = 0;
    let itemInCart = "";
    let itemNum = 0;
    this.cart.forEach((item) => {
      itemInCart += `<li class= "flex">Item: ${item.item} <div>price: ${item.price}</div> <span class="delete" onclick="deleteItem(${itemNum})">X</span></li>`;
      itemNum++;
      overallCost += item.price;
    });
    document.getElementById("shoppingCart").innerHTML = itemInCart;
    document.getElementById("totalAmount").innerHTML = overallCost;
  },
};

function deleteItem(itemNum) {
  console.log(`clicked and itemNum is ${itemNum}`);
  laptop.cart.splice(itemNum, 1);
  laptop.showCart();
}

const addItemFunction = () => {
  let item1 = document.getElementById("item1").value;
  let item2 = Number(document.getElementById("item2").value);
  laptop.showCart();
  laptop.cart.push({ item: item1, price: item2 });
  laptop.showCart();
};

let person = {
  name: "andrew",
  age: 22,
  likes: ["cats", "dogs", "eating"],
  hobbies: ["studying", "coding", "making art"],
  showHobbies() {
    this.hobbies.forEach((hobby) => {
      alert(hobby);
    });
  },
};

// let date = new Date();

// document.getElementById("dateTime").innerHTML = date.getFullYear();
// document.getElementById("dateTime").innerHTML = date.getMonth() + 1;
// document.getElementById("dateTime").innerHTML = date.getDate();

//object method
//array method
//date method
//math method
