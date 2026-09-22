import { test as base } from '@playwright/test';

import {LoginPage} from '../pages/LoginPage.js';


export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  }
});

export const expect = base.expect;