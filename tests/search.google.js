/**
 * Created by juan on 4/7/2015.
 */
var webdriver = require('selenium-webdriver'),
  By = require('selenium-webdriver').By,
  until = require('selenium-webdriver').until;

// Create webdriver instances
var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

// Navigate to that url
driver.get('http://www.google.com/ncr');

// get the elements of the page
var input = driver.findElement(By.name('q'));
var searchBtn = driver.findElement(By.name('btnG'));

// Write 'webdriver' in the input
input.sendKeys('webdriver');
// Click the search button
searchBtn.click();

driver.wait(until.titleIs('webdriver - Google Search'), 1000);

driver.sleep(5000);

driver.quit();