let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lasttname");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");
let email = document.getElementById("email");
let registerButton = document.getElementById("registerbutton");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

registerButton.addEventListener("click", function (event) {
  //   if (email.value.match(mailFormat)) {
  //     console.log("yea");
  //   }
  if (email.value === "" || !email.value.match(mailFormat)) {
    console.log("no");
  } else {
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
