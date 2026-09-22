import { test, expect } from '@playwright/test';

const {LoginPage} = require('../pages/LoginPage.js');


const env = 'prod';
const envData = require(`../config/environments/${env}.json`);

test('SauceDemo Login', async ({ page }) => {

  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    envData.username,
    envData.password
  );

  await expect(page).toHaveURL(/inventory/);

});