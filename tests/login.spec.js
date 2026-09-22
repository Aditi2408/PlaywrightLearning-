import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { LoginData } from '../test-data/users/users';

test('verify SauceDemo login', async ({ page }) => {


    const login = new LoginPage(page);

 await page.goto('/')
  

  await expect(page).toHaveTitle(/Swag Labs/);

    await login.login(LoginData.validUser.username,LoginData.validUser.password);

 


  await expect(page).toHaveURL(/inventory/);
});

