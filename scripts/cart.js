let cart = localStorage.getItem("cart");
if (!cart) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(cart);
}

    let total = cart.reduce(function (acc, curr) {
    return acc + curr.price;
}, 0);

let contentBox = document.getElementById("contentBox");


let table = document.createElement("table");
let thead = document.createElement("thead");
let theadRow = document.createElement("tr");
let th1 = document.createElement("th");
th1.textContent = "Image";
let th2 = document.createElement("th");
th2.textContent = "Title";
let th3 = document.createElement("th");
th3.textContent = "Price";

theadRow.append(th1, th2, th3);
thead.append(theadRow);
let tbody = document.createElement("tbody");

cart.forEach(function (item) {
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let itemImg = document.createElement("img");
    itemImg.src = item.img;
    td1.append(itemImg);
    let td2 = document.createElement("td");
    td2.textContent = item.itemName;
    let td3 = document.createElement("td");
    td3.textContent = item.price;
    tr.append(td1, td2, td3);
    tbody.append(tr);
});
table.append(thead, tbody);
contentBox.append(table);

function totalDisplay(total) {

    let totalDisplay = document.getElementById("totalDisplay"); // get totalDisplay element
    totalDisplay.textContent = "Total : " + total; // updated it's value with card total that has been passed as param;
}
totalDisplay(total);

function applyCoupon() {
    let couponInput = document.getElementById("couponInput").value; // get coupoun inputted by user
    if (couponInput === "masai30") {
        total = total - 0.3 * total; 
        totalDisplay(total); 
    }
}