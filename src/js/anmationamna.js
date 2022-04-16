/* ---------------------------------grown page----------------------- */
function screenDisplyInline(elem) {
  return (elem.style.display = "inline");
}

function getTheId(elemId) {
  var x = document.getElementById(`${elemId}`);
  return x;
}

function allimages(num) {
  if (num === 0) {
    return "imgs/1.png";
  }
  if (num === 1) {
    return "imgs/2.png";
  }
  if (num === 2) {
    return "imgs/3.png";
  }
  if (num === 3) {
    return "imgs/4.png";
  }
  if (num === 4) {
    return "imgs/5.png";
  }
  if (num === 5) {
    return "imgs/6.png";
  } else {
    return "there is no image";
  }
}

function actionText(action) {
  if (action === "nth") {
    return "";
  }
  if (action === "water") {
    return "Need Water";
  }
  if (action === "air") {
    return "Need Air";
  }
  if (action === "sun") {
    return "Need Sun";
  }
  if (action === "done") {
    return "The flower look pretty good work";
  } else {
    return "error the action is wronge";
  }
}

function animationn(anim) {
  if (anim === "water") {
    return "mymove 3s infinite";
  }
  if (anim === "sun") {
    return "moveingsun 3s infinite";
  }
  if (anim === "shovell") {
    return "shovell 1.7s infinite";
  } else {
    return "error the animationn is wronge";
  }
}

function start() {
  let sawalImage = getTheId("sawal");
  screenDisplyInline(sawalImage);
  sawalImage.addEventListener("mousemove", increaseSpeed);
}

function increaseSpeed() {
  let sawalImage = getTheId("sawal");
  sawalImage.style.animation = animationn("shovell");
  sawaltimee();
}

function sawaltimee() {
  setTimeout(myFunction, 3000);
}

function myFunction() {
  let sawalImage = getTheId("images");
  let sawalImage2 = getTheId("sawal");
  sawalImage2.style.display = "none";
  sawalImage.src = allimages(0);
  sawalImage.style.width = "110";
  sawalImage.style.height = "50";
  screenDisplyInline(sawalImage);
  let updatee = getTheId("update");
  updatee.innerHTML = actionText("water");
}

function Sun() {
  let updatee = getTheId("update");
  updatee.innerHTML = actionText("nth");
  let sunImage = getTheId("sunImg");
  sunImage.style.animation = animationn("sun");
  screenDisplyInline(sunImage);
  suntime();
}

function suntime() {
  setTimeout(myyFunctionn, 2000);
}

function myyFunctionn() {
  let updatee = getTheId("update");
  let image = getTheId("images");
  image.style.width = "160";
  image.style.height = "230px";
  image.src = allimages(4);
  let sunImage = getTheId("sunImg");
  sunImage.style.display = "none";
  updatee.innerHTML = actionText("water");
}

let clickState = 0;
function Water() {
  clickState++;
  let updatee = getTheId("update");
  if (clickState == 1) {
    let updatee = getTheId("update");
    updatee.innerHTML = actionText("nth");
    let sawalImage = getTheId("waterImg");
    sawalImage.style.animation = animationn("water");
    screenDisplyInline(sawalImage);
    wateronce();
  } else if (clickState == 2) {
    let updatee = getTheId("update");
    updatee.innerHTML = actionText("nth");
    let sawalImage = getTheId("waterImg");
    sawalImage.style.animation = animationn("water");
    screenDisplyInline(sawalImage);
    watersec();
  } else if (clickState == 3) {
    let updatee = getTheId("update");
    updatee.innerHTML = actionText("nth");
    let sawalImage = getTheId("waterImg");
    sawalImage.style.animation = animationn("water");
    screenDisplyInline(sawalImage);
    waterthird();
    clickState = 0;
  }
}
// water
function wateronce() {
  setTimeout(myyFunction, 2000);
}

function myyFunction() {
  let updatee = getTheId("update");
  let image = getTheId("images");
  image.style.width = "100";
  image.style.height = "150px";
  image.src = allimages(1);
  let sawalImage2 = getTheId("waterImg");
  sawalImage2.style.display = "none";
  updatee.innerHTML = actionText("air");
}

function watersec() {
  setTimeout(myyyFunction, 2000);
}

function myyyFunction() {
  let updatee = getTheId("update");
  let image = getTheId("images");
  image.style.width = "160";
  image.style.height = "230";
  image.src = allimages(3);
  let sawalImage2 = getTheId("waterImg");
  sawalImage2.style.display = "none";
  updatee.innerHTML = actionText("sun");
}

function waterthird() {
  setTimeout(myyFunctiionnn, 3000);
}

function myyFunctiionnn() {
  let updatee = getTheId("update");
  let image = getTheId("images");
  image.style.width = "160";
  image.style.height = "230";
  image.src = allimages(5);
  let sawalImage2 = getTheId("waterImg");
  sawalImage2.style.display = "none";
  updatee.innerHTML = actionText("done");
}
//------------------------

function Air() {
  let updatee = getTheId("update");
  updatee.innerHTML = actionText("nth");
  let sawalImage = getTheId("airImg");
  screenDisplyInline(sawalImage);
  airtime();
}

function airtime() {
  setTimeout(myyFunctionnn, 3000);
}

function myyFunctionnn() {
  let updatee = getTheId("update");
  let image = getTheId("images");
  image.style.width = "160";
  image.style.height = "230px";
  image.src = allimages(2);
  let sawalImage2 = getTheId("airImg");
  sawalImage2.style.display = "none";
  updatee.innerHTML = actionText("water");
}

function night() {
  let imageday = getTheId("sky");
  let imagenight = getTheId("nightsky");
  imageday.style.display = "none";
  screenDisplyInline(imagenight);
}
/* ---------------------------------delivery page----------------------- */

var moveX = 0;
var moveY = 0;
const speed = 10;
var view_W = 590;
var view_H = 390;
window.addEventListener("keydown", Control);

function upArrowy(uppyy) {
  const speed = 10;
  var valuee = uppyy + speed;
  console.log("y", valuee);
  return valuee;
}

function downArrowy(downyy) {
  const speed = 10;
  var valueee = downyy - speed;
  console.log("y", valueee);
  return valueee;
}

function rightArrowx(rightxx) {
  const speed = 10;
  var valueeee = rightxx + speed;
  console.log("x", valueeee);
  return valueeee;
}

function leftArrowx(leftxx) {
  const speed = 10;
  var valueeeee = leftxx - speed;
  console.log("x", valueeeee);
  return valueeeee;
}

function Control() {
  let key = event.key;
  let drone = document.getElementById("drone");
  let pos = document.getElementById("pos");

  if (key == "ArrowUp" && moveY < view_H) {
    // up arrow key
    if (moveX == 590 && moveY == 390) {
      alert("Greate job");
      window.location.href = "index.html";
    } else {
      var upy = upArrowy(moveY);
      moveY = upy;
      drone.style.bottom = moveY + "px";
      drone.style.left = moveX + "px"; // Keeps moving right at the start
      pos.innerHTML = "X: " + moveX + " Y:  " + moveY; //  X and Y position value
    }
  } else if (key == "ArrowDown" && moveY > 0) {
    // down arrow key
    if (moveX == 590 && moveY == 390) {
      alert("Greate job");
      window.location.href = "index.html";
    } else {
      var downy = downArrowy(moveY);
      moveY = downy;
      // moveY = moveY - speed;
      drone.style.bottom = moveY + "px";
      pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
  } else if (key == "ArrowLeft" && moveX > 0) {
    // left arrow key
    if (moveX == 590 && moveY == 390) {
      alert("Greate job");
      window.location.href = "index.html";
    } else {
      var leftx = leftArrowx(moveX);
      moveX = leftx;
      // moveX = moveX - speed;
      drone.style.left = moveX + "px";
      pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
  } else if (key == "ArrowRight" && moveX < view_W) {
    // right arrow key
    if (moveX == 590 && moveY == 390) {
      alert("Greate job");
      window.location.href = "index.html";
    } else {
      var rightx = rightArrowx(moveX);
      moveX = rightx;
      // moveX = moveX + speed;
      drone.style.left = moveX + "px";
      pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
  } else {
    /* stay at current position  */
    drone.style.left = moveX + "px";
    drone.style.bottom = moveY + "px";
  }
}
// eslint-disable-next-line no-undef
module.exports = {
  animationn,
  allimages,
  sawaltimee,
  suntime,
  wateronce,
  watersec,
  waterthird,
  airtime,
  actionText,
  upArrowy,
  downArrowy,
  rightArrowx,
  leftArrowx,
};
