export class GithubPage {
  constructor(page) {
    this.page = page;
    this.WelcomeByHeading= page.getByRole('heading', { name: 'Welcome' });
    this.WelcomeByNavigation = page.getByRole('navigation');
    this.sectionPage = page.locator('.section');
    this.SearchBar = page.locator('[data-testid="search-bar"]');
  }

  async gotoLandingPage() {
    await this.page.goto('https://gh-users-search.netlify.app/');
  }
}