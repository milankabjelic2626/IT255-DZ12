import { DomaciiiPage } from './app.po';

describe('domaciii App', () => {
  let page: DomaciiiPage;

  beforeEach(() => {
    page = new DomaciiiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
