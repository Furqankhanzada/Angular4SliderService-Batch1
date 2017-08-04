import { ServiceAppPage } from './app.po';

describe('service-app App', () => {
  let page: ServiceAppPage;

  beforeEach(() => {
    page = new ServiceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
