import { YumPage } from './app.po';

describe('yum App', () => {
  let page: YumPage;

  beforeEach(() => {
    page = new YumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
