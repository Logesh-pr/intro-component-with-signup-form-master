const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-id");
const password = document.getElementById("password");
const emailErrorMessage = document.getElementById("error_email_name")

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkValues();
})

function checkValues(){
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
   
    if(firstNameValue === ""){
      errorMessage(firstName);
    }
    else{
        successMessage(firstName);
    }

    if(lastNameValue === ""){
        errorMessage(lastName);
      }
      else{
        successMessage(lastName);
      }

      if(emailValue === ""){
        errorMessage(email);
       
      }
      else if(!errorEmail(emailValue)){
        errorMessage(email);
        email.style.color="#ff7a7a"
        emailErrorMessage.textContent="Looks like this is not an email"

      }
      else{
        successMessage(email);
        email.style.color="black"
      }

      if(passwordValue === ""){
        errorMessage(password);
      }
      else{
        successMessage(password);
      }
}

function errorMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form_control error"
}

function successMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form_control success"
}

function errorEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

