/* ---------------------------------grown page----------------------- */
function Print() {
  print();
}

function shape(shappe) {
  if (shappe === "circle") {
    return "50%";
  }
  if (shappe === "roundedcorners") {
    return "15px";
  }
  if (shappe === "frame") {
    return "1.5px solid black";
  }
  if (shappe === "corener") {
    return "15px 50px 30px";
  }
  if (shappe === "noborder") {
    return "1px solid rgb(198, 198, 198)";
  }
  if (shappe === "nocorners") {
    return "0px 0px 0px";
  }
}

function clearr() {
  let images = document.getElementsByClassName("imagesticker");
  images = Array.prototype.slice.call(images);
  images.forEach((element) => {
    element.style.borderRadius = shape("nocorners");
    element.style.border = shape("noborder");
  });
}

function circle() {
  let images = document.getElementsByClassName("imagesticker");
  images = Array.prototype.slice.call(images);
  images.forEach((element) => {
    element.style.borderRadius = shape("circle");
  });
}

function roundedcorners() {
  let images = document.getElementsByClassName("imagesticker");
  images = Array.prototype.slice.call(images);
  images.forEach((element) => {
    element.style.borderRadius = shape("roundedcorners");
  });
}

function frame() {
  let images = document.getElementsByClassName("imagesticker");
  images = Array.prototype.slice.call(images);
  images.forEach((element) => {
    element.style.border = shape("frame");
  });
}

function corener() {
  let images = document.getElementsByClassName("imagesticker");
  images = Array.prototype.slice.call(images);
  images.forEach((element) => {
    element.style.borderRadius = shape("corener");
  });
}

/* eslint-disable no-undef */
module.exports = {
  shape,
};
