const email_input = document.getElementById("email");
const email_error = document.getElementById("email-error");
const button = document.getElementById("button");
const container = document.querySelector(".naruto-container");
const massageContainer = document.getElementById("massageContainer");
const dismiss_button = document.getElementById("dismiss");

const emailvalidation = () => {
    const email = email_input.value;

    if (email.length === 0) {
        email_error.innerHTML = "Email is required";
        email_error.style.color = "red";
        return false;
    }

    if (!email.match(/^[A-Za-z0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_error.innerHTML = "Email is invalid";
        email_error.style.color = "red";
        return false;
    }
   
    email_error.innerHTML = "";

    return true;
};

email_input.addEventListener("keyup", emailvalidation);

button.addEventListener("click", (event) => {
    
    event.preventDefault();

    if (emailvalidation()) {
    
        container.style.display = "none";
        massageContainer.classList.toggle("massage");
        massageContainer.classList.remove("phone");

    } else {
        
        document.getElementById("button-error").innerHTML = "Check the email";
    }
});

dismiss_button.addEventListener("click", (event) => {
    event.preventDefault();
    container.style.display = "block";
    massageContainer.classList.toggle("phone");
    massageContainer.classList.remove("massage");
})

