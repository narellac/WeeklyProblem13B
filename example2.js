describe('Google Page', () => {

  beforeAll('open browser', () => {
    return browser.url('https://www.google.com/');
  });

  it('can handle commands synchronously', () => {
    let value = $('#lb');
    expect(value).toExist();
  })

  it('title', () => {
    browser.pause(2000);
    expect(browser.getTitle()).toMatch('Google');
  })
});