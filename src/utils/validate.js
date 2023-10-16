export const validateSignInData = (email,password) => {
    var message = "";
    const isEmailValid = (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(email);
    const isPassWordValid = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(password);
    if(!isEmailValid && !isPassWordValid){
        message = "Email and Password are not valid";
    }
    else if(!isEmailValid)
    {
        message += "Email is not valid";
    }
    else if(!isPassWordValid) {
        message += "Password is not valid";
    }
    return message;
 }