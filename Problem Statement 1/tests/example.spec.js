const { test, expect } = require('@playwright/test');

const USERNAME = 'testing1';
const PASSWORD = 'Test@1234';

test.beforeEach(async ({ page }) => {
  // Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Go to Admin
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });
  await expect(page.getByText('System Users')).toBeVisible();
});


//  Add User
test('Add User', async ({ page }) => {
  await page.getByRole('button', { name: 'Add' }).click();

  await page.locator('.oxd-select-text').nth(0).click();
  await page.getByRole('option', { name: 'Admin' }).click();

  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByText('Enabled').click();

  await page.getByPlaceholder('Type for hints...').fill('Ranga  Akunuri');
  await page.getByText('Ranga  Akunuri').click();


  await page.locator('.oxd-input-group:has(.oxd-label:text("Username")) input').fill(USERNAME);
  await page.locator('input[type="password"]').first().fill(PASSWORD);
  await page.locator('input[type="password"]').nth(1).fill(PASSWORD);

  

  await page.getByRole('button', { name: 'Save' }).click();

  const toast = page.locator('.oxd-toast .oxd-toast-content-text').first();
  await toast.waitFor({ state: 'visible', timeout: 10000 });
  await expect(toast).toContainText('Success');
});


//  Search User
test('Search User', async ({ page }) => {
  await page
    .locator('.oxd-input-group:has(.oxd-label:text("Username")) input')
    .fill(USERNAME);
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText(USERNAME)).toBeVisible();
});


//  Edit User 
test('Edit User', async ({ page }) => {
  await page.locator('.oxd-input-group:has(.oxd-label:text("Username")) input').fill(USERNAME);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });
 
  const userRow = page.locator('.oxd-table-row').filter({ hasText: USERNAME });
  await userRow.locator('button:has(i.bi-pencil-fill)').click();

  
  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByRole('option', { name: 'Disabled' }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  const toast = page.locator('.oxd-toast .oxd-toast-content-text').first();
  await toast.waitFor({ state: 'visible', timeout: 10000 });
  await expect(toast).toContainText('Success');
});




//  Validate Updated Details
test('Validate Updated Details', async ({ page }) => {
  await page.locator('.oxd-input-group:has(.oxd-label:text("Username")) input').fill(USERNAME);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });

  const userRow = page.locator('.oxd-table-row').filter({ hasText: USERNAME });
  await expect(userRow.getByText('Disabled', { exact: true })).toBeVisible();
});


//  Delete User
test('Delete User', async ({ page }) => {
  await page.locator('.oxd-input-group:has(.oxd-label:text("Username")) input').fill(USERNAME);

  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' });
 
  const userRow = page.locator('.oxd-table-row').filter({ hasText: USERNAME });
  await userRow.locator('button:has(i.bi-trash)').click();

  await page.getByRole('button', { name: 'Yes, Delete' }).click();

  await expect(
    page.locator('.oxd-table-body').getByText(USERNAME, { exact: true })
  ).toHaveCount(0);
});