import { test, expect } from '@playwright/test';

test('Parallel Test 1', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Parallel Test 2', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Parallel Test 3', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});



/*test.describe.configure({ mode: 'serial' });

  test('Sequential Test 1', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('Sequential Test 2', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('Sequential Test 3', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Swag Labs/);
  });*/

