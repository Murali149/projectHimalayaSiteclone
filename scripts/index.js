import navigationBar from "/components/navigationBar.js";
console.log("navigationBar",navigationBar);


let navigationDiv = document.getElementById("navigationBar");
navigationDiv.innerHTML = navigationBar();


import footerBar from "/components/footerBar.js"
console.log("footerBar:", footerBar);

let footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footerBar();


let subContainer = document.getElementById("subContainer");

let image1 = document.createElement("img"); 
image1.setAttribute("src", "https://5.imimg.com/data5/TW/LM/MY-44472345/buy-himalaya-beauty-products-500x500.png");

let image1Btn = document.createElement("button");
image1Btn.innerText = "SHOP NOW";

bestProductAdDiv.append(image1,image1Btn);
