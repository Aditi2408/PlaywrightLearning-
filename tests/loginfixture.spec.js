import { test, expect } from '../fixtures/pageFixture.js';
import { LoginPage } from '../pages/LoginPage';

import { LoginData } from '../test-data/users/users.js';

test('verify SauceDemo login', async ({ page,loginPage }) => {


   

 await page.goto('/')
   await expect(page).toHaveTitle(/Swag Labs/);

    await loginPage.login(LoginData.validUser.username,LoginData.validUser.password);

 


  await expect(page).toHaveURL(/inventory/);
});



