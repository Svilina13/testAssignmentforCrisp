# Install Node.js
Here is an installation guide for node.js
https://www.geeksforgeeks.org/how-to-install-node-run-npm-in-vs-code/
Alternatively, if you are using macOS and have Homebrew installed simply run "brew install node"

# Open TestSuite project folder with VSCode

# Install Playwright dependancies
- Make sure your node is properly installed by running:
  node -v
  npm -v
- from the projects directory run 'npm install'
- verify the installation 'npx playwright --version'

# To run tests
- to run all tests at once in your terminal run "npx playwright test"
- to run a single test file "npx playwright test tests/file_name.spec.js"
- to run a single test, mark a test fixture with the keyword .only, ex:
  test.only("@API Negative test: empty payload", async () => .

You will see that in my tests the URL for API calls is passed through the .json data file. Alternatively, baseURL can be defined in the playwright.config.js in the 'use' object and be used for all the API tests.

Failed tests will produce an HTML report. One test will fail for which the bug was created in the assignment document.
Negative test cases will pass, since the response is always the same with a 200 status. In real life scenarios they can be marked as expected failures.

