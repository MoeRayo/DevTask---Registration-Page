let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lasttname");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let email = document.getElementById("email");
let registerButton = document.getElementById("registerbutton");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let formy = document.querySelector("form");
// let firstNameError = do
// let disp = window.getComputedStyle(document.querySelector("form"), ":before");

let disp = document.querySelector("form", "::before");

registerButton.addEventListener("click", function (event) {
  if (firstName.value == Number("")) {
    // console.log("why");
    // disp.style.display = "block";
    let disp = window.getComputedStyle(formy, "::before");
    // console.log(disp.display);
    console.log(disp.content);
    disp.content = " disp.content";
    // disp.

    // disp = "block";
    // disp.value = "block";
    // let appendStyle = function (selector, prop, val) {
    //   let style = document.createElement("style");
    //   document.head.appendChild(style);

    //   style.sheet.addRule(selector, prop + ": " + val);
    // };
  }
  if (
    passwordOne.value == Number("") ||
    passwordTwo.value == Number("") ||
    String(passwordOne.value).length != String(passwordTwo.value).length
  ) {
  }
  if (email.value == Number("") || !email.value.match(mailFormat)) {
    console.log("yea");
  }
  event.preventDefault();
});

// console.log(firstName);
// let emailInput = document.getElementById('email-input');
// let subscribeButton = document.getElementById('subscribe-input');
// let errorMsg = document.getElementById('error-message');
// let successMsg = document.getElementById('success-message');
// let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// emailInput.addEventListener('blur',($event)=>{
//     if ($event.target.value.match(mailFormat)){
//         emailInput.style.border = 'thin solid green';
//         errorMsg.style.display = 'none';
//         successMsg.style.display = 'block';
//         emailInput.value = '';
//     } else{
//         emailInput.style.border ='thin solid red';
//         errorMsg.style.display = 'block';
//         successMsg.style.display ='none';
//         emailInput.value = 'example@email/com';
//     }
// });

// // me.you@yahoo.com
