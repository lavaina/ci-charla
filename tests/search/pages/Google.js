/**
 * Created by juan on 4/8/2015.
 */

var driver = browser.driver;

function Google(){

  this.input = driver.findElement(By.name('q'));
  this.searchBtn = driver.findElement(By.name('btnG'));

}

Google.prototype.search = function(text){
  this.input.sendKeys(text);
  this.searchBtn.click();
};

Google.navigate = function(){
  driver.get('http://www.google.com/ncr');
  return new Google();
};

module.exports = Google;