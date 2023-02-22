const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
let urlDebut = 'file:///Users/adonia/workspace/cucumb/cucumberJs/src/appliTest/accueil.html';
let urlConnect = 'file:///Users/adonia/workspace/cucumb/cucumberJs/src/appliTest/connect.html';
let driver;

Given('que je suis sur la page d\'accueil', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get(urlDebut);
}); 

When('je clique sur le bouton {string}', async function (bouton) {
  await driver.findElement(By.id(bouton)).click();
});

Then('je suis redirigé vers la page de connexion', async function () {
  const url = await driver.getCurrentUrl();
  if (!assert.equal(url, urlConnect)) {
  await driver.quit();
  console.log("La redirection a réussit !");
  } else {
    console.log("La redirection a échoué !");
  }
});
