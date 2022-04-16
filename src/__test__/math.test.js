/* eslint-disable no-undef */
const {
  numberSelling,
  mathNumRashHour,
  all,
  timeone,
  timetwo,
  timethree,
  timefour,
} = require("../js/math");
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("simple arithmetic", () => {
  describe("weekly sales t1", () => {
    test("expect yesday = 141, today = 163", () => {
      const yesday = [23, 56, 23, 56, 24, 678, 89, 35, 789, 96, 23, 154, 67];
      const today = [
        23, 56, 23, 56, 24, 678, 89, 35, 789, 56, 23, 154, 67, 23, 12,
      ];
      expect(numberSelling(yesday, today)).toEqual([163, 141]);
    });
  });

  describe("weekly sales t2", () => {
    test("expect yesday = 45, today = 520", () => {
      const yesday = [23, 56, 23, 56, 24, 678, 89, 35, 789, 96, 23, 154, 67];
      const today = [
        23, 56, 23, 56, 24, 678, 89, 35, 789, 56, 23, 154, 67, 23, 12,
      ];
      expect(numberSelling(yesday, today)).not.toEqual([520, 45]);
    });
  });

  describe("rush hour t1", () => {
    test("expect hoursrash = neww", () => {
      const hoursrash = [
        { hour: "2 pm", num: 40, state: "" },
        { hour: "4 pm", num: 50, state: "" },
      ];
      const neww = [
        { hour: "2 pm", num: 40, state: "Busy" },
        { hour: "4 pm", num: 50, state: "Full" },
      ];
      expect(mathNumRashHour(hoursrash)).toEqual(neww);
    });
  });

  describe("rush hour 2", () => {
    test("expect hoursrash[0] to Have Property ('hour')", () => {
      const hoursrash = [
        { hour: "2", num: 100, state: "" },
        { hour: "8", num: 4, state: "" },
      ];
      expect(hoursrash[0]).toHaveProperty("hour");
    });
  });

  describe("rush hour t3", () => {
    test("expect hoursrash[0].num >= 20 ", () => {
      const hoursrash = [
        { hour: "2", num: 100, state: "" },
        { hour: "8", num: 4, state: "" },
      ];
      expect(hoursrash[0].num).toBeGreaterThanOrEqual(20);
    });
  });

  describe("rush hour t4", () => {
    test("expect ", () => {
      const hoursrash = [{ hour: "2", num: 100, state: "" }];
      const xx = mathNumRashHour(hoursrash);
      const contt = xx[0].num >= 100;
      expect(contt).toEqual(true);
    });
  });

  test("time 1", () => {
    timeone();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  test("time 2", () => {
    timetwo();
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  });
  test("time 3", () => {
    timethree();
    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1700);
  });
  test("time 4", () => {
    timefour();
    expect(setTimeout).toHaveBeenCalledTimes(4);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });

  // describe("typing / about page", () => {
  //   test("expect ...", () => {
  //     const speedoftype = 10;
  //     const backspeedoftype = 100;
  //     const str = [
  //       "You can transform a room with minimal effort.liza Blank founded The Sill in 2012. Passionate about plants, she wanted to help demystify them, make them accessible to non-horticulturists and elevate the experience beyond the local garden supply center. She broke new ground with an online plant delivery business that has grown to include stores in New York City, Los Angeles, San Francisco, and Chicago. Hands-on educational workshops are now hosted in-store and online, and the brand vision has expanded beyond plants to include biophilic design that evokes an essential connection to the natural world. As Eliza says, “Plants create time and space to nurture yourself. If you’re not making time for them, you’re probably not making time for yourself either.” The Sill is here to help you connect to plants and nature, so you can cultivate a life well-lived..",
  //     ];
  //     expect(all()).toEqual(speedoftype, backspeedoftype, str);
  //   });
  // });

  // describe("rush hour t4", () => {
  //   test("expect ", () => {
  //     let myString = 'Display'
  //     expect(myString).toMatch(check);
  //   });

  // });
});
