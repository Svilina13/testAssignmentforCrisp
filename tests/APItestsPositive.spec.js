const { test, expect, request } = require("@playwright/test");
const { APIUtils } = require("../pageObjects/APIUtils");
const fullDataSet = require("../testData/fullDataSet.json"); //'require' will automatically parse JSON into a JS object
const singleDataSet = require("../testData/singleDataSet.json");
const idDataSet = require("../testData/idDataSet.json");
const nameDataSet = require("../testData/nameDataSet.json");

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext(); //creates an instance for making API calls
});

test("@API Positive test: a single patient’s search in the payload", async () => {
  const apiUtils = new APIUtils(apiContext, singleDataSet.payload, singleDataSet.url); //creates an instance of our class that would contain all our API methods
  let response;
  try { //wrapping in a try catch to catch any potential unexpected issues
    response = await apiUtils.getCall(); //making our GET call
  } catch (e) {
    console.log(`Error: ${e}. API call failed, please check.`)
  }

  expect(response.ok()).toBeTruthy(); //asserting the response
  const responseJSON = await response.json(); //parsing a JSON response to a JavaScript object
  console.log(responseJSON); //printing our response

})

test("@API Positive test: four patient's requests at once", async () => {
  const apiUtils = new APIUtils(apiContext, fullDataSet.payload, fullDataSet.url);
  let response;
  try {
    response = await apiUtils.getCall();
  } catch (e) {
    console.log(`Error: ${e}. API call failed, please check.`)
  }

  expect(response.ok()).toBeTruthy();
  const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
  console.log(responseJSON);
});

test("@API Positive test: ID only", async () => {
  const apiUtils = new APIUtils(apiContext, idDataSet.payload, idDataSet.url);
  let response;
  try {
    response = await apiUtils.getCall();
  } catch (e) {
    console.log(`Error: ${e}. API call failed, please check.`)
  }

  expect(response.ok()).toBeTruthy();
  const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
  console.log(responseJSON);
});

test("@API Positive test: name only", async () => {
  const apiUtils = new APIUtils(apiContext, nameDataSet.payload, nameDataSet.url);
  let response;
  try {
    response = await apiUtils.getCall();
  } catch (e) {
    console.log(`Error: ${e}. API call failed, please check.`)
  }

  expect(response.ok()).toBeTruthy();
  const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
  console.log(responseJSON);
});

//expected failure 
test("@API Positive test: validate the request payload matches the response.", async () => {
  const apiUtils = new APIUtils(apiContext, fullDataSet.payload, fullDataSet.url);
  let response;
  try {
    response = await apiUtils.getCall();
  } catch (e) {
    console.log(`Error: ${e}. API call failed, please check.`)
  }

  expect(response.ok()).toBeTruthy();
  const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
  expect(fullDataSet.payload).toEqual(responseJSON); //asserting request payload to match respons body
  console.log(responseJSON);
});