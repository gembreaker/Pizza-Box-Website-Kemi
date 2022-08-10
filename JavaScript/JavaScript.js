var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function openFoodOption(foodName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(foodName).style.display = "block";
}

function hello() {
    alert("Thank you. You will receive a text/email to your device shortly.");
}

function validation() {
    // First name
    var thefirstname = document.getElementById('FirstName').value;
    if (thefirstname == "") {
        document.getElementById('firstnamemessage').innerHTML = "Please enter your first name.";
        return false;
    }
    else if (thefirstname.length < 2 || thefirstname.length > 30) {
        document.getElementById('firstnamemessage').innerHTML = "Name too short.";
        return false;
    }
    // Last name
    var thelastname = document.getElementById('LastName').value;
    if (thelastname == "") {
        document.getElementById('lastnamemessage').innerHTML = "Please enter your last name.";
        return false;
    }
    else if (thelastname.length < 2 || thelastname.length > 30) {
        document.getElementById('lastnamemessage').innerHTML = "Name too short.";
        return false;
    }
    // Phone Number
    var phoneNumber = document.getElementById('MobileNumber').value;
    if (phoneNumber == "") {
        document.getElementById('phonenomessage').innerHTML = "Please enter your mobile number.";
        return false;
    }
    else if (phoneNumber.length != 11) {
        document.getElementById('phonenomessage').innerHTML = "Mobile number must be 11 numbers.";
        return false;
    }
    if (isNaN(phoneNumber)) {
        document.getElementById('phonenomessage').innerHTML = "Phone number must not include any letters.";
        return false;
    }
    // Email
    var theEmail = document.getElementById('email').value;
    re = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (re.test(theEmail)) {
        document.getElementById('emailmessage').innerHTML = "Email OK";
        return true;
    }
    else {
        document.getElementById('emailmessage').innerHTML = "Incorrect email";
        return false;
    }
}