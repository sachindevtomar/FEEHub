import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Login message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Please Log In');
  });
});
