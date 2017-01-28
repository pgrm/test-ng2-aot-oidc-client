import { TestAotPage } from './app.po';

describe('test-aot App', function() {
  let page: TestAotPage;

  beforeEach(() => {
    page = new TestAotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
