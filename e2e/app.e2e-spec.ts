import { MakeadealPage } from './app.po';

describe('makeadeal App', function() {
  let page: MakeadealPage;

  beforeEach(() => {
    page = new MakeadealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});