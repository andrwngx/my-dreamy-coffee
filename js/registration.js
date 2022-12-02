function register_validate() {
    /* Link HTML elements */
    var uid = document.getElementById("uid").value;
    var email = document.getElementById("email").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var postcode = document.getElementById("postcode").value;
    var gender = document.getElementById("gender").value;
    var updates_y = document.getElementById("updates-y").checked;
    var updates_n = document.getElementById("updates-n").checked;
    var submit_checked = document.getElementById("submit-checked").checked;
    
    var errMsg = "";  /* Initialize error message to store errors */
    var result = true;
    var pattern = /^[a-zA-Z ]+$/;

    // Check Username input
    if (uid == "") {
      errMsg += "Username field can not be blank.\n";
    }
    
    /* Check if username contains symbols  */
    if (!uid.match (pattern)) {
      errMsg += "Username can not contain symbols.\n";
    }

    // Check Email input
    if (email == "") {
      errMsg += "Email field can not be blank.\n";
    }

    /* Check if email input is correct */
    if (email.indexOf('@') === 0 ) {
      errMsg += "Email can not start with an @ symbol.\n";
    }

    if (email.indexOf('@') < 0 ) {
      errMsg += "Email has to contain an @ symbol.\n";
    }

    // Check Password input
    if (pwd1 == "") {
      errMsg += "Password field can not be blank.\n";
    }

    /* Check if password length is correct and two password have to match */
    if (pwd1.length < 7) {
      errMsg += "Password has to be at least 7 characters long.\n";
    }
    
    if (pwd1 != pwd2) {
      errMsg += "Passwords do not match.\n";
    }

    // Check Postcode input
    if (postcode == "") {
      errMsg += "Postcode field can not be blank.\n";
    }

    /* Check if postcode length is correct  */
    if (!postcode.match(/^\d{4}$/)) {
      errMsg += "Postcode has to be 4-digit.\n";
    }

    // Check Gender input
    if (gender == "") {
      errMsg += "A gender has to be chosen.\n";
  }

    // Check Receive Updates input
    if((updates_y == "") && (updates_n == "")){
      errMsg += "You have to choose whether to receive our updates or not.\n";
    }

    // Check Confirm Submission input
    if (submit_checked == "") {
      errMsg += "You have to check the box to proceed.\n";
    }

    /* Display error (Alert) when error(s) is/are found */
    if (errMsg != "") {
      alert(errMsg);
      result = false;
    }
    return result;
}

function init () {
    var registration_form = document.getElementById("registration-form");
	  registration_form.onsubmit = register_validate;
}

window.onload = init;
