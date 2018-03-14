import { SydiPage } from './app.po';

describe('sydi App', function() {
  let page: SydiPage;

  beforeEach(() => {
    page = new SydiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
