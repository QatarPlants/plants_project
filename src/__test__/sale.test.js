/* eslint-disable no-undef */
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");
const { salePrice, Sales, validateImg } = require("../js/sale.js");
const { getname, Products } = require("../js/product.js");
const { total, cart } = require("../js/cart.js");


//Meimouna
describe("sale page testing the sale price", () => {
  describe("salePrice", () => {
    test("testing salePrice function", () => {
      expect(salePrice(10, 30)).toEqual(27);
    });
  });
  describe("sales", () => {
    test("testing the sales array to have cost for item 0", () => {
      expect(Sales[0]).toHaveProperty("cost");
    });
  });
  describe("sales", () => {
    test("testing the sales array to have cost for item 1", () => {
      expect(Sales[1]).toHaveProperty("cost");
    });
  });
  describe("sales", () => {
    test("testing the sales array to have cost for item 2", () => {
      expect(Sales[2]).toHaveProperty("cost");
    });
  });
  describe("sales", () => {
    test("testing the sales array to have salePercent for item 0", () => {
      expect(Sales[0]).toHaveProperty("salePercent");
    });
  });
  describe("sales", () => {
    test("testing the sales array to have salePercent for item 1", () => {
      expect(Sales[1]).toHaveProperty("salePercent");
    });
  });
  describe("sales", () => {
    test("testing the sales array to have salePercent for item 2", () => {
      expect(Sales[2]).toHaveProperty("salePercent");
    });
  });
  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales).toEqual(expect.any(Array));
    });
  });
  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales[0]).toHaveProperty("cost", 34);
    });
  });
  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales[0].category).toMatch(/In Door/);
    });
  });
  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales).toHaveLength(3);
    });
  });
  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales).not.toHaveLength(5);
    });
  });

  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales[2].cost).toBeGreaterThanOrEqual(25);
    });
  });

  describe("sales", () => {
    test("testing the sales array", () => {
      expect(Sales[1].cost).toBeLessThanOrEqual(30);
    });
  });
  describe("sales", () => {
    test("testing the sales array", () => {
      for (let i = 0; i < Sales.length; i++) {
        expect(isNaN(Sales[i].cost)).not.toBeTruthy();
      }
    });
  });
});

// describe("addition", () => {
//     test("expect 2 + 3 = 5", () => {
//         expect(add(2, 3)).toEqual(5);
//     });
// });

describe("product page testing the searsh getname function", () => {
  describe("getname", () => {
    test("testing getname function", () => {
      expect(getname("Rose", "Rose")).toEqual(true);
    });
  });
});

// describe("addition", () => {
//     test("expect 2 + 3 = 5", () => {
//         expect(add(2, 3)).toEqual(5);
//     });
// });

describe("cart page testing the total function", () => {
  describe("total", () => {
    test("testing total function", () => {
      expect(total([{ cost: 6 }, { cost: 6 }])).toEqual(12);
    });
  });
});

// describe("addition", () => {
//     test("expect 2 + 3 = 5", () => {
//         expect(add(2, 3)).toEqual(5);
//     });
// });

describe("newArrival page testing the imge function", () => {
  describe("img", () => {
    test("testing image function", () => {
      expect(validateImg("img", "name")).toEqual(true);
    });
  });
});
