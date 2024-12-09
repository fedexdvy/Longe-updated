let toggleNavStatus = false;
function login() {
    let getUsername = document.querySelector("#username");
    let getPasssword = document.querySelector("#password");
    let getSignInButton = document.querySelector("#sign-in-button");
    let getUsernameValue = getUsername.value;
    let getPassswordValue = getPasssword.value;
    let getIncorrectError = document.querySelector("#incorrect");
    let correctUsername;
    let correctPassword;


    if (getUsernameValue == "Anniejoyner121", getPassswordValue == "child0070") {
        getSignInButton.setAttribute("onclick", "window.location.href = '/otp.html';");
        getIncorrectError.style.display = "none";

    } else if (getUsernameValue != "Anniejoyner121", getPassswordValue != "child0070") {
        getIncorrectError.style.display = "flex";
    }



}