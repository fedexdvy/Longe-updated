let toggleNavStatus = false;
function otp() {
    let getPasssword = document.querySelector("#password");
    let getSignInButton = document.querySelector("#next");
    let getPassswordValue = getPasssword.value;
    let getIncorrectError = document.querySelector("#incorrect");
    let correctUsername;
    let correctPassword;


    if (getPassswordValue == "child0070") {
        getSignInButton.setAttribute("onclick", "window.location.href = '/home.html';");
        getIncorrectError.style.display = "none";

    } else if (getPassswordValue != "child0070") {
        getIncorrectError.style.display = "flex";
    }



}