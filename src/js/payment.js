function validateFormcard() {
  let cardnumber = validateFieldCard("card-number");
  let cardname = validateFieldCardName("card-name");
  let carddate = validateFieldCarddate("date");
  let cardcvc = validateFieldCardCvc("cvc");

  let fieldd = document.getElementById("donee");
  if (
    cardnumber === true &&
    cardname === true &&
    carddate === true &&
    cardcvc === true
  ) {
    fieldd.innerHTML = "Done";
  } else {
    fieldd.innerHTML = "Noooo";
  }
}

function fliping(num) {
  if (num === 0) {
    return "none";
  }
  if (num === 1) {
    return "inline";
  }
}

let clickStateecard = 0;
function Flipcard() {
  var buttn = document.getElementById("flip");
  clickStateecard++;
  if (clickStateecard == 1) {
    var x = document.getElementById("frontcard");
    x.style.display = fliping(0);
    var t = document.getElementById("backcard");
    t.style.display = fliping(1);
  } else if (clickStateecard == 2) {
    var xx = document.getElementById("frontcard");
    xx.style.display = fliping(1);
    var tt = document.getElementById("backcard");
    tt.style.display = fliping(0);
    clickStateecard = 0;
  }
}

function validateFieldcheckcardnum(inputvalue) {
  var masterCardRegex = /^(?:5[1-5][0-9]{14})$/;
  if (masterCardRegex.test(inputvalue)) {
    return "continue";
  } else {
    return "error";
  }
}

function validateFieldCard(fieldId) {
  let cardNo = document.getElementById(fieldId).value;
  let field = document.getElementById(fieldId);
  let checkstates = validateFieldcheckcardnum(cardNo);

  let out = document.getElementById("errornumber");

  //master
  if (checkstates === "continue") {
    field.placeholder = "";
    field.style.border = "";
    out.innerHTML = "";
    return true;
  } else {
    field.placeholder = "*Please enter a value*";
    field.style.borderBottom = "3px solid red";
    out.innerHTML = "Eenter valid CreditCard Number";
    return false;
  }
}

function validateFieldcheckcardname(inputvalue) {
  if (inputvalue == "") {
    return "error";
  } else {
    return "continue";
  }
}

function validateFieldCardName(fieldId) {
  let fieldValue = document.getElementById(fieldId).value;
  let field = document.getElementById(fieldId);
  let checkstates = validateFieldcheckcardname(fieldValue);
  let out = document.getElementById("errorname");

  if (checkstates === "error") {
    field.placeholder = "*Please enter a value*";
    field.style.borderBottom = "3px solid red";
    out.innerHTML = "Not Vaild";
    return false;
  } else {
    field.placeholder = "";
    field.style.border = "";
    out.innerHTML = "";
    return true;
  }
}

function validateFieldcheckcardcvc(inputvalue) {
  if (inputvalue.length === 4) {
    return "continue";
  } else {
    return "error";
  }
}

function validateFieldCardCvc(fieldId) {
  let fieldValue = document.getElementById(fieldId).value;
  let field = document.getElementById(fieldId);
  let checkstates = validateFieldcheckcardcvc(fieldValue);
  let out = document.getElementById("errorcvc");

  if (checkstates === "error") {
    field.placeholder = "*Please enter a value*";
    field.style.borderBottom = "3px solid red";
    out.innerHTML = "4 Num";
    return false;
  } else {
    field.placeholder = "";
    field.style.border = "";
    out.innerHTML = "";
    return true;
  }
}

function validateFieldcheckcarddate(inputvalue) {
  if (+new Date(inputvalue) < +new Date()) {
    return "error";
  } else {
    return "continue";
  }
}

function validateFieldCarddate(fieldId) {
  let fieldValue = document.getElementById(fieldId).value;
  console.log(fieldValue);
  console.log(new Date(fieldValue));
  let field = document.getElementById(fieldId);
  let checkstates = validateFieldcheckcarddate(fieldValue);
  let out = document.getElementById("errordate");

  if (checkstates === "error") {
    field.placeholder = "*Please enter a value*";
    field.style.borderBottom = "3px solid red";
    out.innerHTML = "Its expiryed";
    return false;
  } else {
    field.placeholder = "";
    field.style.border = "";
    out.innerHTML = "";
    return true;
  }
}
// eslint-disable-next-line no-undef
module.exports = {
  fliping,
  validateFieldcheckcardnum,
  validateFieldcheckcardname,
  validateFieldcheckcardcvc,
  validateFieldcheckcarddate,
};
