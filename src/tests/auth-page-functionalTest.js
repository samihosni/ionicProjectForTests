const { Builder, By, until, Actions } = require('selenium-webdriver');

async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:8100');

        let loginButton = await driver.wait(until.elementLocated(By.tagName('ion-button')), 5000);
        await driver.wait(until.elementIsVisible(loginButton), 50000);
        await driver.wait(until.elementIsEnabled(loginButton), 50000);

        // Utilisation des actions pour un clic plus robuste
        let actions = driver.actions({ async: true });
        await actions.move({ origin: loginButton }).click().perform();

        await driver.wait(until.urlContains('/home'), 50000);
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('/home')) {
            console.log('Connexion réussie');
        } else {
            console.log('Échec de la connexion');
        }

    } catch (error) {
        console.error('Erreur lors du test de connexion:', error);
    } finally {
        await driver.quit();
    }
}

testLogin();
