// ----------------------------------------------shipping page---------------------------------------------------------

function positiveforword(num) {
  if (num === 1) {
    return "15%";
  }
  if (num === 2) {
    return "35%";
  }
  if (num === 3) {
    return "55%";
  }
  if (num === 4) {
    return "75%";
  } else {
    return "there is no number";
  }
}

let clickStatee = 0;
function forword() {
  clickStatee++;
  if (clickStatee == 1) {
    var box = document.getElementById("box");
    box.style.marginLeft = positiveforword(1);
    console.log(clickStatee);
  } else if (clickStatee == 2) {
    var boxx = document.getElementById("box");
    boxx.style.marginLeft = positiveforword(2);
    console.log(clickStatee);
  } else if (clickStatee == 3) {
    var boxxx = document.getElementById("box");
    boxxx.style.marginLeft = positiveforword(3);
    console.log(clickStatee);
  } else if (clickStatee == 4) {
    var boxxx2 = document.getElementById("box");
    boxxx2.style.marginLeft = positiveforword(4);
    let buttn = document.getElementById("throw");
    buttn.disabled = true;
    clickStatee = 0;
  }
}

//   ------------------------------------------part of vildation shipping----------

function validateForm() {
  let phonenum = validatePhoneNumber("phone-number");
  let addres = validateField("address");
  let pobox = validateField("pobox");
  let buildnum = validatestreetNumber("street-number");
  let citySelecter = validateCitySelecter();
  let email = validateEmail("email");
  let verificationRobotCheckBox = validateRobot();
  let fieldd = document.getElementById("done");
  if (
    phonenum === true &&
    pobox === true &&
    addres === true &&
    buildnum === true &&
    citySelecter === true &&
    email === true &&
    verificationRobotCheckBox === true
  ) {
    fieldd.innerHTML = "Done";
  } else {
    fieldd.innerHTML = "Noooo";
  }
}

function validateFieldcheck(inputvalue) {
  if (inputvalue == "") {
    return "error";
  } else {
    return "continue";
  }
}

function validateField(fieldId) {
  let fieldValue = document.getElementById(fieldId).value;
  let field = document.getElementById(fieldId);
  let checkstates = validateFieldcheck(fieldValue);

  if (checkstates === "error") {
    field.placeholder = "*Please enter a value*";
    field.style.borderBottom = "3px solid red";
    return false;
  } else {
    field.placeholder = "";
    field.style.border = "";
    return true;
  }
}

function validatePhoneNumbercheck(inputvalue) {
  if (inputvalue.length == 8) {
    return "continue";
  } else {
    return "error";
  }
}

function validatePhoneNumber(num) {
  let phoneNumberValue = document.getElementById(num).value;
  let phoneNumber = document.getElementById(num);
  let error = document.getElementById("phone-error-messages");
  let checkstates = validatePhoneNumbercheck(phoneNumberValue);
  if (checkstates == "continue") {
    error.innerHTML = "";
    phoneNumber.style.border = "";
    return true;
  } else {
    error.innerHTML =
      "<img class='errorImg' src=imgs/error.png alt='error'> *Phone Number must be 8 digits*";
    error.style.color = "red";
    error.style.fontSize = "15px";
    error.style.display = "inline-block";
    phoneNumber.style.borderBottom = "3px solid red";
    return false;
  }
}

function validateEmailcheck(inputvalue) {
  if (inputvalue != "") {
    return "continue";
  } else {
    return "error";
  }
}

function validateEmailcheckindex(indexAtt, indexPointt) {
  if (indexAtt != -1 && indexPointt != -1) {
    return "continue";
  } else {
    return "error";
  }
}

function validateEmailcheckcom(wordcom) {
  if (wordcom === "com") {
    return "continue";
  } else {
    return "error";
  }
}

function validateEmailcheckbetweenatandcom(lenofbetween) {
  if (lenofbetween >= 3) {
    return "continue";
  } else {
    return "error";
  }
}

function validateEmail(Useremail) {
  let emailValue = document.getElementById(Useremail).value;
  let email = document.getElementById(Useremail);
  let error = document.getElementById("emailErrorMessage");
  let checkstates = validateEmailcheck(emailValue);
  if (checkstates === "continue") {
    let indexAt = emailValue.indexOf("@");
    let indexPoint = emailValue.indexOf(".", indexAt);

    let checkstatesindex = validateEmailcheckindex(indexAt, indexPoint);
    if (checkstatesindex === "continue") {
      let wordCom = emailValue.substring(indexPoint + 1);
      let checkstatescom = validateEmailcheckcom(wordCom);
      if (checkstatescom == "continue") {
        let lettersBetweenAtAndPoint = emailValue.substring(
          indexAt + 1,
          indexPoint
        );
        let lettersBetweenAtAndPointLength = lettersBetweenAtAndPoint.length;
        let checkstatesbetween = validateEmailcheckbetweenatandcom(
          lettersBetweenAtAndPointLength
        );
        if (checkstatesbetween === "continue") {
          error.innerHTML = "";
          email.style.borderBottom = "";
          return true;
        } else {
          //user missing hotmail or live or outlook after the @___.com
          error.innerHTML =
            "<img class='errorImg' src=imgs/error.png alt='error'> *Please enter your Email correctly*";
          error.style.color = "red";
          error.style.fontSize = "15px";
          error.style.display = "inline-block";
          email.style.borderBottom = "3px solid red";
          return false;
        }
      } else {
        //user missing com at the end
        error.innerHTML =
          "<img class='errorImg' src=imgs/error.png alt='error'> *Please enter your Email correctly*";
        error.style.color = "red";
        error.style.fontSize = "15px";
        error.style.display = "inline-block";
        email.style.borderBottom = "3px solid red";
        return false;
      }
    } else {
      //user missing out @ or dot befor com
      error.innerHTML =
        "<img class='errorImg' src=imgs/error.png alt='error'> *Please enter your Email correctly *";
      error.style.color = "red";
      error.style.fontSize = "15px";
      error.style.display = "inline-block";
      email.style.borderBottom = "3px solid red";
      return false;
    }
  } else {
    //nothing is entered
    error.innerHTML =
      "<img class='errorImg' src=imgs/error.png alt='error'> *Please enter your Email*";
    error.style.color = "red";
    error.style.fontSize = "15px";
    error.style.display = "inline-block";
    email.style.borderBottom = "3px solid red";
    return false;
  }
}

function validateCitySelecter() {
  let citySelecterValue = document.getElementById("selectCity");
  let error = document.getElementById("cityErrorMessage");

  if (citySelecterValue.value != " ") {
    error.innerHTML = " ";
    error.style.display = "none";
    return true;
  } else {
    error.innerHTML =
      "<img class='errorImg' src=imgs/error.png alt='error'> *Please select your City*";
    error.style.color = "red";
    error.style.fontSize = "15px";
    error.style.display = "inline-block";
    return false;
  }
}

function validatestreetNumbercheck(inputvalue) {
  if (inputvalue < 1 || inputvalue > 9999) {
    return "error";
  } else {
    return "continue";
  }
}

function validatestreetNumber(streernum) {
  let streetNumberValue = document.getElementById(streernum).value;
  let buildingNumber = document.getElementById(streernum);
  let error = document.getElementById("street-error-messages");
  let checkstates = validatestreetNumbercheck(streetNumberValue);
  if (checkstates === "error") {
    error.innerHTML =
      "<img class='errorImg' src=imgs/error.png alt='error'> *Number must be between 1 and 9999*";
    error.style.color = "red";
    error.style.fontSize = "15px";
    error.style.display = "inline-block";
    buildingNumber.style.borderBottom = "3px solid red";
    return false;
  } else {
    error.innerHTML = "";
    buildingNumber.style.border = "";
    return true;
  }
}

function validateRobot() {
  let robotCheck = document.getElementById("robotCheck"); //check input
  let error = document.getElementById("robotErrorMessage");
  if (robotCheck.checked) {
    error.innerHTML = "";
    return true;
  } else {
    error.innerHTML =
      "<img class='errorImg' src=imgs/error.png alt='error'> *Please verify if your robot or no *";
    error.style.color = "red";
    error.style.fontSize = "19px";
    error.style.display = "block";
    return false;
  }
}

/* eslint-disable no-undef */
module.exports = {
  positiveforword,
  validateFieldcheck,
  validatePhoneNumbercheck,
  validatestreetNumbercheck,
  validateEmailcheck,
  validateEmailcheckindex,
  validateEmailcheckbetweenatandcom,
  validateEmailcheckcom,
};
