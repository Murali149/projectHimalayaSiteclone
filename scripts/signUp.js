// import navigationBar from "/components/navigationBar.js";
// console.log("navigationBar",navigationBar);


// let navigationDiv = document.getElementById("navigationBar");
// navigationDiv.innerHTML = navigationBar();


// import footerBar from "/components/footerBar.js"
// console.log("footerBar:", footerBar);

// let footerDiv = document.getElementById("footerBar");
// footerDiv.innerHTML = footerBar();


let subContainer = document.getElementById("subContainer");

document.querySelector("#signUpForm").addEventListener("submit" , getSignUpDetails);

let himalayaUsersSignupData = JSON.parse( localStorage.getItem("himalayaUsersDetails")) || [];
function getSignUpDetails(event){
    event.preventDefault()
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 

    // console.log(fName, lName, email, password);

    let userData = {
        fName:fName,
        lName:lName,
        email:email,
        password:password
    }
    console.log(userData)

    himalayaUsersSignupData.push(userData);

    console.log(himalayaUsersSignupData);


    localStorage.setItem("himalayaUsersDetails",JSON.stringify(himalayaUsersSignupData));

    window.location.href="signIn.html"



}

// function goToIndexPage(){
//     window.location.href="index.html"
// }