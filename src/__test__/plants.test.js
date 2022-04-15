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
} = require("../js/anmationamna.js");

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
  });
});
