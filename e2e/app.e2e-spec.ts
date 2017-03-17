import { AurFeDemoPage } from './app.po';

describe('aur-fe-demo App', () => {
  let page: AurFeDemoPage;

  beforeEach(() => {
    page = new AurFeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
