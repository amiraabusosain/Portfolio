const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let fullname = document.getElementById("fullname").value.trim();
let email = document.getElementById("email").value.trim();
let country = document.getElementById("country").value.trim();
let comments = document.getElementById("comments").value.trim();

if(fullname=="" || email=="" || country=="" || comments==""){

alert("Please complete all fields.");

}

else{

alert("Thank you! Your message has been sent.");

form.reset();

}

});