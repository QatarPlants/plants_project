describe("home page", () => {
  it("nav-bar", () => {
    cy.visit("../../../index.html");

    cy.get(".navbar-nav").contains("Products").click();
    cy.visit("../../../index.html");
    cy.get(".navbar-nav").contains("Sales").click();
    cy.get(".navbar-nav").contains("More").click();
    cy.get(".dropdown-menu").contains("New Arrival").click();
  });

  it("text and product cards", () => {
    cy.visit("../../../index.html");

    cy.contains("Story of Our Journey");
    cy.contains(
      "We began with a dream of encouraging people to live in harmony with nature. Whether you are living amongst the hustle and bustle of the city, or in a secluded suburb, having beautiful green plants at home will brighten your day and bring tranquility in your life. To help you find this inner peace with nature's beauty, we bring to you a wide collection of house plants that are perfect for both indoors and outdoors."
    );
    cy.get("div[class=container]").should("exist");
    cy.get(".card-img-top").should("exist");
    cy.get(".card-body1").contains("Shop Now").click();
  });
});

describe("product page", () => {
  it("buy & search btns and container and num pf products", () => {
    cy.visit("../../../src/product.html");
    cy.get(".container")
      .find("div")
      .should(($div) => {
        if ($div.length < 6) {
          // you can throw your own errors
          throw new Error("Not enough products!!");
        }
      });
    cy.get(".card").contains("Buy").click();
    cy.get("#productSearsh").type("Lilium").should("have.value", "Lilium");
    cy.get(".btn2").find("button").click();
    cy.get("div[class=container]").should("exist");
  });
});

describe("sale page", () => {
  it("list of products, container", () => {
    cy.visit("../../../src/sale.html");

    cy.get(".container")
      .find("div")
      .should(($div) => {
        if ($div.length < 2) {
          // you can throw your own errors
          throw new Error("Not enough sales!!");
        }
      });
    cy.get(".card-img-top").should("exist");
    cy.get("div[class=container]").should("exist");
  });
});

describe("new Arrival page", () => {
  it("new products and expand container", () => {
    cy.visit("../../../src/newArrival.html");
    cy.get(".row").should(($div) => {
      if ($div.length == 4) {
        // you can throw your own errors
        throw new Error("Not enough new products!!");
      }
    });
    cy.get("div[class=container]").should("exist");
  });
});

describe("Cart page", () => {
  it("cart lables, con-shopping & checkout btns", () => {
    cy.visit("../../../src/cart.html");

    cy.get("div[class=container]").should("exist");
    cy.get("#result").should("exist");
    cy.contains("Subtotal");
    cy.contains("Standard Shipping");
    cy.contains("Total");
    cy.contains("TBD");
    cy.get(".sh").contains("Continue Shopping").click();
    cy.visit("../../../src/cart.html");
    cy.get(".ch").contains("CHECKOUT").click();
  });
});
