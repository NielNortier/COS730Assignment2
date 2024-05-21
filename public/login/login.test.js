const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Login Page", () => {
  let dom;
  let window;
  let document;
  let form;
  let usernameInput;
  let passwordInput;
  let loginButton;
  let registerButton;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html>...`); // Your HTML string here
    window = dom.window;
    document = window.document;
    form = document.querySelector("form");
    usernameInput = document.querySelector("#username");
    passwordInput = document.querySelector("#password");
    loginButton = document.querySelector("button");
    registerButton = document.querySelector("button");
  });

  test("renders login form", () => {
    expect(form).toBeDefined();
  });

  test("renders username input", () => {
    expect(usernameInput).toBeDefined();
  });

  test("renders password input", () => {
    expect(passwordInput).toBeDefined();
  });

  test("renders login button", () => {
    expect(loginButton).toBeDefined();
  });

  test("renders register button", () => {
    expect(registerButton).toBeDefined();
  });

  // Add more tests as needed
});
