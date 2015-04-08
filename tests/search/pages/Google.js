/**
 * Created by juan on 4/8/2015.
 */

var driver = browser.driver;

function Google(){

  this.searchBox = driver.findElement(By.name('q'));
  this.searchButton = driver.findElement(By.name('btnG'));

}

Google.prototype.search = function(text){
  this.searchBox.sendKeys(text);
  this.searchButton.click();
};

Google.prototype.getTitle = function(){
  return driver.getTitle();
};


Google.navigate = function(){
  driver.get('http://www.google.com/ncr');
  return new Google();
};

module.exports = Google;