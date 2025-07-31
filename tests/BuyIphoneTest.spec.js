import { test, expect } from '@playwright/test';
import { GithubPage } from '../test-pages/LandingPage.js';
import { amountElements, elements } from '../test-helpers/commands.js';


test.only('validate github user', async ({ page }) => {

    
  const landingPage = new GithubPage(page);// Create an instance of the GithubPage class
  await landingPage.gotoLandingPage() // use method to navigate to the landing page

 
  await expect(page).toHaveTitle(/Github/); // Expect a tab title "to contain" a substring.
  await landingPage.WelcomeByHeading.isVisible()// validation without expect, this cannot be negative
  await expect(landingPage.WelcomeByNavigation).toBeVisible() // validation with expect, this can be negative with "not" sentence
  await expect(landingPage.sectionPage).toHaveCount(3) // validation the amount of sections in the page
   await expect(landingPage.SearchBar).toBeVisible() 
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
