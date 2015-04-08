describe('Google', function() {

  // Get the webdriver
  var driver = browser.driver;

  it('should search something', function() {

    // Go to google.com
    driver.get('http://www.google.com/ncr');

    // get the elements of the page
    var input = driver.findElement(By.name('q'));
    var searchBtn = driver.findElement(By.name('btnG'));

    input.sendKeys('webdriver');
    // Click the search button
    searchBtn.click();

    // Wait for search results
    driver.sleep(1000);

    expect(driver.getTitle()).toEqual('webdriver - Google Search');
  });
});