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
      // expect(animationn("water")).toEqual("mymove 3s infinite");
      expect(animationn("water")).toEqual("mymove 3s infinite");
    });

    test("water animation", () => {
      // expect(animationn("water")).toEqual("mymove 3s infinite");
      expect(animationn("water")).toContain("3s");
    });

    test("not exisiting animation", () => {
      expect(animationn("jvf")).toMatch("error the animationn is wronge");
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
      expect(allimages(0)).toMatch("imgs/1.png");
    });

    test("second image", () => {
      expect(allimages(1)).toBe("imgs/2.png");
    });

    test("thired image", () => {
      expect(allimages(2)).toBe("imgs/3.png");
    });

    test("fourth image", () => {
      expect(allimages(3)).toEqual("imgs/4.png");
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
      expect(actionText("nth")).toMatch("");
    });

    test("water action", () => {
      expect(actionText("water")).toBe("Need Water");
    });

    test("air action", () => {
      expect(actionText("air")).toBe("Need Air");
    });

    test("sun action", () => {
      expect(actionText("sun")).toMatch("Need Sun");
    });

    test("last text infor the user its done", () => {
      expect(actionText("done")).toBe("The flower look pretty good work");
    });

    test("last text infor the user its done it should has good work word", () => {
      expect(actionText("done")).toContain("good work");
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

    test("adding a frame to the images", () => {
      expect.stringContaining("solid");
    });

    test("adding corener to the images", () => {
      expect(shape("corener")).toMatch("15px 50px 30px");
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
      expect(upArrowy(380)).toEqual(390);
    });

    test("down arrowy event", () => {
      expect(downArrowy(370)).toEqual(360);
    });

    test("right arrowy event", () => {
      expect(rightArrowx(580)).toEqual(590);
    });

    test("left arrowy event", () => {
      expect(leftArrowx(20)).toEqual(10);
    });
  });
});

describe("shipping page testing the values for moving the image ti rigth", () => {
  describe("right value of moving the box on the belt", () => {
    test("moving the box with first click", () => {
      expect(positiveforword(1)).toBe("15%");
    });

    test("moving the box with second click", () => {
      expect(positiveforword(2)).toMatch(/35%/);
    });

    test("moving the box with third click", () => {
      expect(positiveforword(3)).toBe("55%");
    });

    test("moving the box with fourth click", () => {
      expect(positiveforword(4)).toMatch(/75%/);
    });

    test("clicking for wronge passing value", () => {
      expect(positiveforword(89)).toEqual("there is no number");
    });

    test("first click passing value right should not give error", () => {
      expect(positiveforword(1)).not.toEqual("there is no number");
    });

    test("sec click passing value right should not give error", () => {
      expect(positiveforword(2)).not.toEqual("there is no number");
    });

    test("third click passing value right should not give error", () => {
      expect(positiveforword(3)).not.toEqual("there is no number");
    });

    test("fourth click passing value right should not give error", () => {
      expect(positiveforword(4)).not.toEqual("there is no number");
    });
  });

  describe("input fields form shipping", () => {
    test("validating Field Address should have a value", () => {
      let addr = "al-wakra";
      expect(addr).not.toBeNull();
      expect(validateFieldcheck(addr)).toBe("continue");
    });

    test("validating Field Address should not be null", () => {
      let addr = "";
      expect(addr).not.toBeNull();
      expect(validateFieldcheck("")).toMatch("error");
    });

    test("validating Field phone number have length of 8", () => {
      let num = "44562356";
      expect(num).toHaveLength(8);
      expect(validatePhoneNumbercheck(num)).toBe("continue");
    });

    test("validating Field phone number checking for more then 8 dight", () => {
      expect(validatePhoneNumbercheck("5593584256")).toBe("error");
    });

    test("validating Field street number should not be less then -1", () => {
      let numm = -1;
      expect(numm).toBeLessThan(1);
    });

    test("validating Field street number should not be less then -1", () => {
      expect(validatestreetNumbercheck(10000)).toBe("error");
    });

    test("validating Field street number should not be more then 9999", () => {
      let numm = 10000;
      expect(numm).toBeGreaterThan(9999);
      expect(validatestreetNumbercheck(numm)).toBe("error");
    });

    test("validating Field street number should not be less then -1 and more then 9999", () => {
      //I made a test function called between so i check the range from 1 till 9999
      expect(-5).not.toBeBetweennumber(1, 9999);
    });

    test("validating Field street number", () => {
      //I made a tsest function called between so i check the range from 1 till 9999
      expect(45).toBeBetweennumber(1, 9999);
    });

    test("validating Field email empty", () => {
      let email = "";
      expect(validateEmailcheck(email)).toBe("error");
    });

    test("validating Field email", () => {
      expect(validateEmailcheck("amna@hotmail.com")).toMatch("continue");
    });

    test("validating Field email checking @ with email at and point index", () => {
      let emailat = -1;
      let emailpoint = -8;
      expect(emailat).not.toBeGreaterThan(2);
      expect(emailpoint).not.toBeGreaterThan(1);
      expect(validateEmailcheckindex(emailat, emailpoint)).toBe("error");
    });

    test("validating Field email checking @", () => {
      let emailat = 5;
      let emailpoint = 2;
      expect(emailat).toBeGreaterThan(-1);
      expect(emailpoint).toBeGreaterThan(-1);
      expect(validateEmailcheckindex(emailat, emailpoint)).toBe("continue");
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
      expect(validateEmailcheckbetweenatandcom(7)).toEqual("continue");
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
      let datee = new Date("2022-04-06");
      let todaydate = new Date();
      let dateee = datee > todaydate;
      expect(dateee).toBeFalsy();
      expect(validateFieldcheckcardcvc("45")).toBe("error");
    });

    test(" validating the card date", () => {
      let datee = new Date("2090-07-04");
      let todaydate = new Date();
      let dateee = datee > todaydate;
      expect(dateee).toBeTruthy();
      expect(validateFieldcheckcarddate("2090-07-04")).toBe("continue");
    });

    test("validating the card date with mock function", () => {
      const mocker = jest.fn((datee) => `the ${datee} date is vaild`);
      expect(mocker("2023-04-06")).toBe("the 2023-04-06 date is vaild");
      expect(mocker("2022-12-06")).toBe("the 2022-12-06 date is vaild");
      expect(mocker("2023-07-06")).toBe("the 2023-07-06 date is vaild");
      expect(mocker).toHaveBeenCalled();
      expect(mocker).toHaveBeenCalledTimes(3);
      expect(mocker).toHaveBeenCalledWith("2022-12-06");
      expect(mocker).toHaveBeenLastCalledWith("2023-07-06");
    });
  });
});

expect.extend({
  toBeBetweennumber(recived, start, end) {
    const pass = recived > start && recived < end;
    if (pass) {
      return {
        massage: () =>
          `Expected ${recived} to Be Between this range ${start} till ${end}`,
        pass: true,
      };
    } else {
      return {
        massage: () =>
          `Expected ${recived} to Be Between this range ${start} till ${end}`,
        pass: false,
      };
    }
  },
});
