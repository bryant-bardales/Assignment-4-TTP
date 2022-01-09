const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const wrongPassword = document.getElementById("wrong-password");

const signUp = document.querySelector("button");


signUp.addEventListener("click", function(){
    let noError = true;
    
    username.value = "";
    
    email.value = "";
    
    if(password.value != "12345678"){
        password.value = "";
        wrongPassword.innerHTML = "Wrong password";
        noError = false;
}

else{

    wrongPassword.innerHTML = " ";
} 

if (noError){
     alert("Thank You For Signing Up!");
     username.value = "";
     email.value = "";
     password.value = "";
     wrongPassword.innerHTML = "";
    }

});

