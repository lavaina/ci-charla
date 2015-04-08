describe('Google', function() {

  // Get the webdriver
  var driver = browser.driver;

  it('should search something', function() {

    // Go to
    driver.get('http://www.google.com/ncr');

    // get the elements of the page
    var searchBox = driver.findElement(By.name('q'));
    var searchButton = driver.findElement(By.name('btnG'));

    searchBox.sendKeys('webdriver');
    // Click the search button
    searchButton.click();

    // Wait for search
    driver.sleep(1000);

    expect(driver.getTitle()).toEqual('webdriver - Google Search');
  });
});