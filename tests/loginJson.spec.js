import { test, expect } from '@playwright/test';
import {LoginPage}  from '../pages/LoginPage';
import Jsondata from '../test-data/User.json';

for (const data of Jsondata.loginScenarios) {

  test(`SauceDemo Login - ${data.type}`, async ({ page }) => {

    await page.goto('/');

    const loginPage = new LoginPage(page);

    await loginPage.login(
      data.username,
      data.password
    );

  if (data.expectedResult === 'success') {

      await expect(page).toHaveURL(/inventory/);

    } else if (data.expectedResult === 'locked') {

      await expect(
        page.getByText('Epic sadface: Sorry, this user has been locked out.')
      ).toBeVisible();

    }

  });
}



















/*await loginPage.login(
    Jsondata.loginScenarios[0].username,
    Jsondata.loginScenarios[0].password,

  )*/
 
    /*const data = Jsondata.loginScenarios[0];
    await loginPage.login(
    data.username,
    data.password
  );*/

  // await login.login('standard_user', 'secret_sauce');

