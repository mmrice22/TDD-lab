let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
  test("The ChangeHandler class is defined.", function() {
    let test = new ChangeHandler(1);
    // Remember, you can arrange, act, and assert...start small
    expect(test).toBeDefined();
  });
  test("The amountDue is set based on an argument.", function() {
    let test = new ChangeHandler(1);
    expect(test.amountDue).toBe(1);
  });
  test("cashTendered is set to zero", function() {
    let test = new ChangeHandler(999);
    expect(test.cashTendered).toBe(0);
  });
  test("Inserting a quarter adds 25", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("quarter");
    expect(test.cashTendered).toBe(25);
  });
  test("Inserting a dime adds 10", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("dime");
    expect(test.cashTendered).toBe(10);
  });
  test("Inserting a nickel adds 5", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("nickel");
    expect(test.cashTendered).toBe(5);
  });
  test("Inserting a penny adds 1", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("penny");
    expect(test.cashTendered).toBe(1);
  });
  test("continue to add on to the amount", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("penny");
    test.insertCoin("dime");
    expect(test.cashTendered).toBe(11);
  });
  test("Returns true if cashTendered more than amountDue. ", function() {
    let test = new ChangeHandler(25);
    amountDue = 25;
    test.insertCoin("quarter");
    test.insertCoin("quarter");
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("Returns false if cashTendered less than amountDue. ", function() {
    let test = new ChangeHandler(75);
    amountDue = 75;
    test.insertCoin("quarter");
    test.insertCoin("quarter");
    expect(test.isPaymentSufficient()).toBe(false);
  });
  test("Returns true if cashTendered equal to amountDue. ", function() {
    let test = new ChangeHandler(25);
    amountDue = 25;
    test.insertCoin("quarter");
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("give change of 1 quarter, 1 nickel, 2 penny", function() {
    let test = new ChangeHandler(0);
    test.insertCoin("quarter");
    test.insertCoin("nickel");
    test.insertCoin("penny");
    test.insertCoin("penny");
    expect(test.giveChange()).toEqual();
  });
});
