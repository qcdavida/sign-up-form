let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm_password");

//function to check if passwords match

function checkIfPasswordsMatch(){
    if(password.value !=confirm_password.value){
        confirm_password.setCustomValidity("Passwords don't match. Please check and try again.")
    }
    else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = checkIfPasswordsMatch;
confirm_password.onkeyup = checkIfPasswordsMatch;