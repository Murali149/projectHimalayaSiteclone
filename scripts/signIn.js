// import navigationBar from "/components/navigationBar.js";
// console.log("navigationBar",navigationBar);


// let navigationDiv = document.getElementById("navigationBar");
// navigationDiv.innerHTML = navigationBar();


// import footerBar from "/components/footerBar.js"
// console.log("footerBar:", footerBar);

// let footerDiv = document.getElementById("footer");
// footerDiv.innerHTML = footerBar();


let subContainer = document.getElementById("subContainer");
document.getElementById("signIn").addEventListener("submit", signin);

let himalayaRegdUsers = JSON.parse( localStorage.getItem("himalayaUsersDetails"));
    // console.log("regdUsers:", regdUsers);

function signin(event){
    event.preventDefault();

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


        

    for(i=0; i< himalayaRegdUsers.length; i++){
        if(himalayaRegdUsers[i].email === email &&  himalayaRegdUsers[i].password === password){
            console.log(himalayaRegdUsers[i].email)
            console.log(email)
            console.log(himalayaRegdUsers[i].password)
            console.log(password)
            window.location.href="index.html";
        }else{
            // document.getElementById("alert").textContent = "You entred wrong details"
            window.location.href="index.html" //;
            alert("please enter vaild details.")

        }
    }
}





