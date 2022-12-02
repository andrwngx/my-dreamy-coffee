function order_validate() {
    var coffee_type = document.getElementById("coffee-type").value;
    var coffee_quantity = document.getElementById("coffee-quantity").value;
    var delivery_option_delivery = document.getElementById("delivery-option-delivery").checked;
    var delivery_option_pickup = document.getElementById("delivery-option-pickup").checked;
    var contact_number = document.getElementById("contact-number").value;
    var receipt_email = document.getElementById("receipt-email").value;
    var pay_option_delivery = document.getElementById("pay-option-online").checked;
    var pay_option_pickup = document.getElementById("pay-option-pickup").checked;
    var visa = document.getElementById("visa");
    var mastercard = document.getElementById("mastercard");
    var american_express = document.getElementById("american-express");
    var card_number = document.getElementById("card-number").value;

    var errMsg = "";  /* Initialize error message to store errors */
    var result = true;

    // Check Coffee Type input
    if (coffee_type == "") {
      errMsg += "You have to choose one type of coffee.\n";
    }
    // Check Coffee Quantity input
    if (coffee_quantity == "") {
      errMsg += "You have to choose how many cups of coffee you want.\n";
    }

    if (!coffee_quantity.match (/^[0-9]+$/)) {
      errMsg += "You have to enter only numbers in coffee quantity field.\n";
    }

    // Check Delivery input
    if((delivery_option_delivery == "") && (delivery_option_pickup == ""))  {
      errMsg += "You have to choose one delivery option.\n";
    }

    // Check Contact Number input
    if (contact_number == "") {
      errMsg += "You have to enter contact number.\n";
    }

    if (!contact_number.match (/^[0-9]+$/)) {
      errMsg += "You have to enter only numbers in contact number field.\n";
    }

    // Check Receipt Email input
    if (receipt_email == "") {
      errMsg += "You have to enter email for receipt.\n";
    }

    if (receipt_email.indexOf('@') === 0 ) {
      errMsg += "Email cannot start with an @ symbol.\n";
    }

    if (receipt_email.indexOf('@') < 0 ) {
      errMsg += "Email has to contain an @ symbol.\n";
    }

    //Check Pay Option input
    if((pay_option_delivery == "") && (pay_option_pickup == ""))  {
      errMsg += "You have to choose one pay option.\n";
    }

    // Feature 3: Credit Card Number check
    if ((visa.checked) && (card_number.length != 16)) {
      errMsg += "Visa card number has to be 16-digit.\n";
    }

    if ((mastercard.checked) && (card_number.length != 16)) {
      errMsg += "Mastercard card number has to be 16-digit.\n";
    }

    if ((american_express.checked) && (card_number.length != 15)) {
      errMsg += "American Express card number has to be 15-digit.\n";
    }

    /* Display error (Alert) when error(s) is/are found */
    if (errMsg != "") {
      alert(errMsg);
      result = false;
    }
    return result;
}

function copy_address() {
  var delivery_address = document.getElementById("delivery-address");
  var billing_address = document.getElementById("billing-address");
  if (document.getElementById('same-address').checked) {
    if (delivery_address.value) {
			billing_address.value = delivery_address.value;
		}
		else {
			alert('Please enter your delivery address first.');
		}
  }
}

// Feature 2
function hide_until_checked() {
  // Unhide delivery + billing address if delivery option is checked
  var delivery_check = document.getElementsByClassName("delivery-check")[0];
  if (document.getElementById("delivery-option-delivery").checked){
    delivery_check.classList.remove('hide');
  }
  else delivery_check.classList.add('hide');

  // Unhide card options + credit card number if delivery option is checked
  var pay_check = document.getElementsByClassName("pay-check")[0];
  if (document.getElementById("pay-option-online").checked){
    pay_check.classList.remove('hide');
  }
  else pay_check.classList.add('hide');
}


function init() {
  var order_form = document.getElementById("order-form");
  order_form.onsubmit = order_validate;
}

function features() {
  hide_until_checked();
  copy_address();
}

window.onload = init;
window.onchange = features;
