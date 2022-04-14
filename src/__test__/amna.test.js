/* eslint-disable no-undef */

const {
  animationn,
  allimages,
  sawaltimee,
  suntime,
  wateronce,
  watersec,
  waterthird,
  airtime,
  actionText,
  shape,
  upArrowy,
  downArrowy,
  rightArrowx,
  leftArrowx,
} = require("../js/anmationamna.js");

const {
  positiveforword,
  validateFieldcheck,
  validatePhoneNumbercheck,
  validatestreetNumbercheck,
  validateEmailcheck,
  validateEmailcheckindex,
  validateEmailcheckbetweenatandcom,
  validateEmailcheckcom,
} = require("../js/shipping.js");

const {
  fliping,
  validateFieldcheckcardnum,
  validateFieldcheckcardname,
  validateFieldcheckcardcvc,
  validateFieldcheckcarddate,
} = require("../js/payment.js");

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Grow plant page testing", () => {
  describe("testing the right animationn", () => {
    test("shovel animation more speed", () => {
      expect(animationn("shovell")).toBe("shovell 1.7s infinite");
    });
    test("sun animation", () => {
      expect(animationn("sun")).toBe("moveingsun 3s infinite");
    });
    test("water animation", () => {
      expect(animationn("water")).toBe("mymove 3s infinite");
    });
    test("not exisiting animation", () => {
      expect(animationn("jvf")).toBe("error the animationn is wronge");
    });
  });

  describe("timers for all", () => {
    test("shovel waits 3 second before changing the image", () => {
      sawaltimee();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });

    test("sun waits 2 second before changing the image", () => {
      suntime();
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });

    test("water 1 time waits 2 second before changing the image", () => {
      wateronce();
      expect(setTimeout).toHaveBeenCalledTimes(3);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });

    test("water 2 time waits 2 second before changing the image", () => {
      watersec();
      expect(setTimeout).toHaveBeenCalledTimes(4);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });

    test("water 3 time waits 3 second before changing the image", () => {
      waterthird();
      expect(setTimeout).toHaveBeenCalledTimes(5);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });

    test("air waits 3 second before changing the image", () => {
      airtime();
      expect(setTimeout).toHaveBeenCalledTimes(6);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });
  });

  describe("right images", () => {
    test("first image", () => {
      expect(allimages(0)).toBe("imgs/1.png");
    });

    test("second image", () => {
      expect(allimages(1)).toBe("imgs/2.png");
    });

    test("thired image", () => {
      expect(allimages(2)).toBe("imgs/3.png");
    });

    test("fourth image", () => {
      expect(allimages(3)).toBe("imgs/4.png");
    });

    test("fifth image", () => {
      expect(allimages(4)).toBe("imgs/5.png");
    });

    test("sixth image", () => {
      expect(allimages(5)).toBe("imgs/6.png");
    });
    test("wronge image", () => {
      expect(allimages(9)).toBe("there is no image");
    });
  });

  describe("right text", () => {
    test("empty string return nothing", () => {
      expect(actionText("nth")).toBe("");
    });

    test("water action", () => {
      expect(actionText("water")).toBe("Need Water");
    });

    test("air action", () => {
      expect(actionText("air")).toBe("Need Air");
    });

    test("sun action", () => {
      expect(actionText("sun")).toBe("Need Sun");
    });

    test("last text infor the user its done", () => {
      expect(actionText("done")).toBe("The flower look pretty good work");
    });

    test("error check", () => {
      expect(actionText("fsfsf")).toBe("error the action is wronge");
    });
  });
});

describe("Sticker page testing the right shape", () => {
  describe("right shape", () => {
    test("making the images in a circle", () => {
      expect(shape("circle")).toBe("50%");
    });

    test("adding rounded corners ", () => {
      expect(shape("roundedcorners")).toBe("15px");
    });

    test("adding a frame to the images", () => {
      expect(shape("frame")).toBe("1.5px solid black");
    });

    test("adding corener to the images", () => {
      expect(shape("corener")).toBe("15px 50px 30px");
    });

    test("replacing the frame with the defult one", () => {
      expect(shape("noborder")).toBe("1px solid rgb(198, 198, 198)");
    });

    test("removing the corener", () => {
      expect(shape("nocorners")).toBe("0px 0px 0px");
    });
  });
});

describe("delivery page testing the values for moving the image", () => {
  describe("right x & y values for moving the images with keybored event", () => {
    test("up arrowy event", () => {
      expect(upArrowy(380)).toBe(390);
    });

    test("down arrowy event", () => {
      expect(downArrowy(370)).toBe(360);
    });

    test("right arrowy event", () => {
      expect(rightArrowx(580)).toBe(590);
    });

    test("left arrowy event", () => {
      expect(leftArrowx(20)).toBe(10);
    });
  });
});

describe("shipping page testing the values for moving the image ti rigth", () => {
  describe("right value of moving the box on the belt", () => {
    test("moving the box with first click", () => {
      expect(positiveforword(1)).toBe("15%");
    });

    test("moving the box with second click", () => {
      expect(positiveforword(2)).toBe("35%");
    });

    test("moving the box with third click", () => {
      expect(positiveforword(3)).toBe("55%");
    });

    test("moving the box with fourth click", () => {
      expect(positiveforword(4)).toBe("75%");
    });

    test("clicking for wronge passing value", () => {
      expect(positiveforword(89)).toBe("there is no number");
    });
  });

  describe("input fields form shipping", () => {
    test("validating Field Address", () => {
      expect(validateFieldcheck("amna")).toBe("continue");
    });

    test("validating Field Address", () => {
      expect(validateFieldcheck("")).toBe("error");
    });

    test("validating Field phone number", () => {
      expect(validatePhoneNumbercheck("44562356")).toBe("continue");
    });

    test("validating Field phone number", () => {
      expect(validatePhoneNumbercheck("5593584256")).toBe("error");
    });

    test("validating Field phone number", () => {
      expect(validatePhoneNumbercheck("44562356")).toBe("continue");
    });

    test("validating Field street number", () => {
      expect(validatestreetNumbercheck(0)).toBe("error");
    });

    test("validating Field street number", () => {
      expect(validatestreetNumbercheck(45)).toBe("continue");
    });

    test("validating Field email", () => {
      expect(validateEmailcheck("")).toBe("error");
    });

    test("validating Field email", () => {
      expect(validateEmailcheck("amna@hotmail.com")).toBe("continue");
    });

    test("validating Field email checking @", () => {
      expect(validateEmailcheckindex(-1, -2)).toBe("error");
    });

    test("validating Field email checking @", () => {
      expect(validateEmailcheckindex(2, 5)).toBe("continue");
    });

    test("validating Field email checking word com", () => {
      expect(validateEmailcheckcom("qa")).toBe("error");
    });

    test("validating Field email checking word com", () => {
      expect(validateEmailcheckcom("com")).toBe("continue");
    });

    test("validating Field email checking does it has hotmail or live word between at and .com", () => {
      expect(validateEmailcheckbetweenatandcom(2)).toBe("error");
    });

    test("validating Field email checking does it has hotmail or live word between at and .com", () => {
      expect(validateEmailcheckbetweenatandcom(7)).toBe("continue");
    });
  });
});

describe("payment page testing the values for filping the card and the validating", () => {
  describe("right value of filping the card", () => {
    test("moving the box with first click", () => {
      expect(fliping(0)).toBe("none");
    });

    test("moving the box with second click", () => {
      expect(fliping(1)).toBe("inline");
    });
  });

  describe("testing the validation of payment field", () => {
    test("validating the card number to be master card ", () => {
      expect(validateFieldcheckcardnum(5105105105105100)).toBe("continue");
    });
    test("validating the card number to be master card", () => {
      expect(validateFieldcheckcardnum(2484545)).toBe("error");
    });

    test("validating the card name", () => {
      expect(validateFieldcheckcardname("amna ikram")).toBe("continue");
    });

    test("validating the card name", () => {
      expect(validateFieldcheckcardname("")).toBe("error");
    });

    test("validating the card cvc number", () => {
      expect(validateFieldcheckcardcvc("1185")).toBe("continue");
    });

    test("validating the card cvc number", () => {
      expect(validateFieldcheckcardcvc("45")).toBe("error");
    });

    test(" validating the card date", () => {
      expect(validateFieldcheckcarddate("2090-07-04")).toBe("continue");
    });

    test("validating the card date", () => {
      expect(validateFieldcheckcarddate("2022-04-06")).toBe("error");
    });
  });
});

// describe("addition", () => {
//     test("expect 2 + 3 = 5", () => {
//         expect(add(2, 3)).toEqual(5);
//     });
// });
