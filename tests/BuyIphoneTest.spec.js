import { test, expect } from '@playwright/test';
import { GithubPage } from '../test-pages/LandingPage.js';
import { amountElements, elements } from '../test-helpers/commands.js';


test.only('validate github user', async ({ page, request }) => {

    
  const landingPage = new GithubPage(page);// Create an instance of the GithubPage class
  await landingPage.gotoLandingPage() // use method to navigate to the landing page

 
  await expect(page).toHaveTitle(/Github/); // Expect a tab title "to contain" a substring.
  await landingPage.WelcomeByHeading.isVisible()// validation without expect, this cannot be negative
  await expect(landingPage.sectionPage).toHaveCount(3) // validation the amount of sections in the page
  await expect(landingPage.WelcomeByNavigation).toBeVisible() // validation with expect, this can be negative with "not" sentence
  await expect(landingPage.SearchBar).toBeVisible()
  await page.fill('[data-testid="search-bar"]', 'santiagoholguing') // fill the search bar with a value
  await expect(landingPage.SearchButton).toBeVisible() 
  await landingPage.SearchButton.click() 
  await expect(landingPage.RequestsAmount).toBeVisible()
  await expect(landingPage.UserInfoValues).toHaveCount(4)
  
  
   const response = await request.get('https://api.github.com/users/santiagoholguing');
   expect(response.ok()).toBeTruthy();
   const data = await response.json();
   let userInfovaluesFromAPI = [] = [data.public_repos, data.followers, data.following, data.public_gists];
   let userInfoValuesFromPage = [] = (await landingPage.UserInfoValues.allTextContents()).map(Number);
   expect(userInfoValuesFromPage).toEqual(userInfovaluesFromAPI); // compare the values from the page with the values from the API


  
   
   


   

  
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
