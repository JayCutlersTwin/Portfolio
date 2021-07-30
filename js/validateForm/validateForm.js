window.onload = () => {

const submitBtn = document.getElementById("submitFormBtn");

// First Name Submit Changes

const fNIn = document.getElementById("firstName");

function validateFirstNameForm() {

    var fNVal = document.forms["myForm"]["firstName"].value;

    if (fNVal == "" || fNVal == null || fNVal == " ") {
        fNIn.style.borderColor = "red";
        console.log("No First Name input value");
    } else {
        fNIn.style.borderColor = "black";
    }
}

submitBtn.addEventListener("click", validateFirstNameForm);

// First Name Input Changes
fNIn.addEventListener("input", function(){
    var fNChangeVal = document.forms["myForm"]["firstName"].value;

    if (fNChangeVal == "" || fNChangeVal == " ") {
        fNIn.style.borderColor = "red";
    } else {
        fNIn.style.borderColor = "black";
    }
});

// Last Name Submit Changes
const lNIn = document.getElementById("lastName");

function validateLastNameForm() {

    var lNVal = document.forms["myForm"]["lastName"].value;

    if (lNVal == "" || lNVal == " ") {
        lNIn.style.borderColor = "red";
        console.log("No Last Name input value");
    } else {
        lNIn.style.borderColor = "black";
    }
}
submitBtn.addEventListener("click", validateLastNameForm);

// Last Name Input Changes
lNIn.addEventListener("input", function(){
    var lNChangeVal = document.forms["myForm"]["lastName"].value;

    if (lNChangeVal == "" || lNChangeVal == " ") {
        lNIn.style.borderColor = "red";
    } else {
        lNIn.style.borderColor = "black";
    }
});

// Email submit Changes
const emIn = document.getElementById('email');

function checkIfValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validateEmail() {
    const email = document.getElementById("email").value;

    if (checkIfValidEmail(email)) {
        emIn.style.borderColor = "black";
    } else {
        emIn.style.borderColor = "red";
        console.log("No Email input value");
    }
}
submitBtn.addEventListener("click", validateEmail);

// Email Input Changes

function emailChange() {
    const email = document.getElementById("email").value;

    if (checkIfValidEmail(email)) {
        emIn.style.borderColor = "black";
        console.log("Valid Email");
    } else {
        emIn.style.borderColor = "red";
        console.log("Not a Valid Email");
    }
}
emIn.addEventListener("input", emailChange);

// Subject Submit Changes
const sbIn = document.getElementById("subject");

function validateSubjectForm() {

    var subVal = document.forms["myForm"]["subject"].value;

    if (subVal == "" || subVal == null || subVal == " ") {
        sbIn.style.borderColor = "red";
        console.log("No Subject input value");
    } else {
        sbIn.style.borderColor = "black";
    }
}
submitBtn.addEventListener("click", validateSubjectForm);

//Subject Input Changes
sbIn.addEventListener("input", function(){
    var sbChangeVal = document.forms["myForm"]["subject"].value;

    if (sbChangeVal == "" || sbChangeVal == " ") {
        sbIn.style.borderColor = "red";
    } else {
        sbIn.style.borderColor = "black";
    }
});

// Message Changes
const mgIn = document.getElementById("message");
function validateMessageForm() {

    var msgVal = document.forms["myForm"]["message"].value;

    if (msgVal == "" || msgVal == null || msgVal == " ") {
        mgIn.style.borderColor = "red";
        console.log("No Message input value");
    } else {
        mgIn.style.borderColor = "black";
    }
}
submitBtn.addEventListener("click", validateMessageForm);

//Message Input Changes
mgIn.addEventListener("input", function(){
    var mgChangeVal = document.forms["myForm"]["message"].value;

    if (mgChangeVal == "" || mgChangeVal == " ") {
        mgIn.style.borderColor = "red";
    } else {
        mgIn.style.borderColor = "black";
    }
});

};
