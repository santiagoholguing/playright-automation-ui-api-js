
export class GithubPage {
  constructor(page) {
    this.page = page;
    this.WelcomeByHeading= page.getByRole('heading', { name: 'Welcome' });
    this.WelcomeByNavigation = page.getByRole('navigation');
    this.sectionPage = page.locator('.section');
    this.SearchBar = page.locator('[data-testid="search-bar"]');
    this.SearchButton = page.locator('[data-testid="search-bar"] ~ button');
    this.RequestsAmount = page.locator('[data-testid="rate-limit"]');
    this.UserInfoValues = page.locator('.section .item h3');
    this.Followers = page.locator('.followers article');
    
  }

  async gotoLandingPage() {
    await this.page.goto('https://gh-users-search.netlify.app/');
  }
}