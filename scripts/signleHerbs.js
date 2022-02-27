import navigationBar from "/components/navigationBar.js";
console.log("navigationBar",navigationBar);


let navigationDiv = document.getElementById("navigationBar");
navigationDiv.innerHTML = navigationBar();


import footerBar from "/components/footerBar.js"
console.log("footerBar:", footerBar);

let footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footerBar();








let SingleHerbsData = [
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Boswellia-60---Box-Bottle_1024x.png?v=1595862802",
        itemName:"Boswellia",
        price:14.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-58_1024x.png?v=1591027935",
        itemName : "Chyavanprash",
        price:13.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_1024x.png?v=1590836878",
        itemName : "Guggul",
        price:15.95 ,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
        itemName : "Holy Basil",
        price:12.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-23_1024x.png?v=1590836890",
        itemName : "Organic Amla",
        price:18.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-50_1024x.png?v=1591027921",
        itemName : "Organic Arjuna",
        price: 18.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Ashwagandha_BoxBottle_30_1024x.jpg?v=1591028054",
        itemName : "Organic Ashwagandha",
        price:13.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-65_b247b590-2796-4443-8dda-5cac30a38e0c_1024x.png?v=1591028066",
        itemName : "Organic Bacopa",
        price:15.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Bitter-Melon-30---Box-Bottle_1024x.png?v=1595862276",
        itemName : "Organic Bitter Melon",
        price:11.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-180_1024x.png?v=1591028078",
        itemName : "Organic Garcinia",
        price:18.95,
        
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-66_1024x.png?v=1591027949",
        itemName : "Organic Garlic",
        price:17.95,
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
        itemName : "Holy Basil",
        price:12.95,
    },
    
];


// console.log("SingleHerbsData", SingleHerbsData)

let subContainer = document.getElementById("subContainer");

let cart = localStorage.getItem("cart");
if (!cart) {
    cart = []; 
    localStorage.setItem("cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(cart);
}

SingleHerbsData.forEach(function(item){
    let itemImg = document.createElement("img");
    itemImg.src = item.img;

    let itemName = document.createElement("p")
    itemName.innerText = item.itemName;

    let itemPrice = document.createElement("h4");
    itemPrice.innerText = item.price;

    let cartBtn = document.createElement("button")
    cartBtn.textContent = "ADD TO CART";
    cartBtn.onclick = function (event) {
        
        addToCart(item);
    };


    let itemDiv = document.createElement("div");
    itemDiv.setAttribute("id", "itemDiv")
    itemDiv.append(itemImg, itemName, itemPrice, cartBtn )
    console.log("itemDiv", itemDiv)

    let itemsDiv = document.getElementById("productsDiv")
    itemsDiv.append(itemDiv);
    console.log("itemDiv", itemDiv);


});


function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")); // get cart data from local storage;
    cart.push(item); 
    localStorage.setItem("cart", JSON.stringify(cart)); // save the data to local storage;
}
