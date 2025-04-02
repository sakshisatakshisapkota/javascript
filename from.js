let from = document.querySelector(from);
from.addEventListener("Submit",(e)=>{
    e.preventDefault();
let Name= Number(document.getElementById("name").value);
let Email=Number(document.getElementById("email").value);
let Phone = Number(document.getElementById("phone no").value);
let password=Number(document.getElementById("password").value);
 console.log("username",username);
 console.log("email",email);
 console.log("phone",phone);
 console.log("password",password);
let message=document.getElementById
console.log("submit",submit);
if (
    username === "" ||
    password === "" ||
    email === "" ||
    phonenumber === ""
  ) {
    message.innerText = "All fields are required";
    return;
  }
  alert(`users name is ${username}`);
 });
 