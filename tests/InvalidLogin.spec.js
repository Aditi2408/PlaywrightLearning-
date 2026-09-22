import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { LoginData } from '../test-data/users/users';

test('verify SauceDemo Invalid login', async ({ page }) => {


    const login = new LoginPage(page);

 await page.goto('/')
  

  await expect(page).toHaveTitle(/Swag Labs/);

    await login.login(LoginData.invalidUser.username,LoginData.invalidUser.password);

 await expect(
        page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    
    
    });