import { AngularSupSeasonalPage } from './app.po';

describe('angular-sup-seasonal App', () => {
  let page: AngularSupSeasonalPage;

  beforeEach(() => {
    page = new AngularSupSeasonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
