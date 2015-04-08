var Google = require("./pages/Google");
// Get the webdriver
var driver = browser.driver;

describe('Google', function() {

  var googlePage;

  beforeEach(function(){
    // Go to google.com
    googlePage = Google.navigate();

  });

  it('should search something', function() {

    googlePage.search('webdriver');

    // Wait for search results
    driver.sleep(1000);

    expect(googlePage.getTitle()).toEqual('webdriver - Google Search');
  });

});