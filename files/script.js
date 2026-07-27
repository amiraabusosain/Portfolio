const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let comments = document.getElementById("comments").value;

    if(fullname=="" || email=="" || country=="" || comments==""){
        alert("Please fill in all fields.");
    }
    else{
        alert("Form submitted successfully!");
    }

});