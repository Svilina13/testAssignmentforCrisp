const { test, expect, request } = require("@playwright/test");
const { APIUtils } = require("../pageObjects/APIUtils");
const typoDataSet = require("../testData/typoDataSet.json");
const DOBDataSet = require("../testData/DOBDataSet.json");
const wrongIdDataSet = require("../testData/wrongIdDataSet.json");
const emptyDataSet = require("../testData/emptyDataSet.json");

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext(); //creates an instance for making API calls
});

test("@API Negative test: a request with a typo in the key 'name' ", async () => {
    const apiUtils = new APIUtils(apiContext, typoDataSet.payload, typoDataSet.url); //creates an instance of our class that would contain all our API methods
    let response;
    try { //wrapping in a try catch to catch any potential unexpected issues
      response = await apiUtils.getCall(); //making our GET call
    } catch (e) {
      console.log(`Error: ${e}. API call failed, please check.`)
    }
    expect(response.ok()).toBeTruthy(); //in real life scenario this should fail, since we're intentially using an incorrect key
    const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
    console.log(responseJSON);
  })

  test("@API Negative test: incorrect DOB format", async () => {
    const apiUtils = new APIUtils(apiContext, DOBDataSet.payload, DOBDataSet.url);
    let response;
    try {
      response = await apiUtils.getCall();
    } catch (e) {
      console.log(`Error: ${e}. API call failed, please check.`)
    }
    expect(response.ok()).toBeTruthy(); //in real life scenario this should fail, since we're intentially using an incorrect DOB format
         //since it is an expected failure, we could add an assert for a 400 (bad request)
    //expect(response.status()).toBe(400);
    const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
    console.log(responseJSON);
  })

  test("@API Negative test: incorrect patient ID", async () => {
    const apiUtils = new APIUtils(apiContext, wrongIdDataSet.payload, wrongIdDataSet.url);
    let response;
    try {
      response = await apiUtils.getCall();
    } catch (e) {
      console.log(`Error: ${e}. API call failed, please check.`)
    }
    expect(response.ok()).toBeTruthy(); //in real life scenario this should fail, since we're intentially using an incorrect patient's ID
         //since it is an expected failure, we could add an assert for a 400 (bad request), or, if system has a custom error - catch that
    //expect(response.status()).toBe(400);
    const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
    console.log(responseJSON);
  })
  
  test("@API Negative test: empty payload", async () => {
    const apiUtils = new APIUtils(apiContext, emptyDataSet.payload, emptyDataSet.url);
    let response;
    try {
      response = await apiUtils.getCall();
    } catch (e) {
      console.log(`Error: ${e}. API call failed, please check.`)
    }
    expect(response.ok()).toBeTruthy(); //in real life scenario this should fail, since we're intentially using an empty payload
         //since it is an expected failure, we could add an assert for a 400 (bad request), or, if system has a custom error - catch that
    //expect(response.status()).toBe(400);
    const responseJSON = await response.json(); //parsing a JSON response to JavaScript object
    console.log(responseJSON);
  })