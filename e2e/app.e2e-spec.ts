import { Anidaniel.ComPage } from './app.po';

describe('anidaniel.com App', () => {
  let page: Anidaniel.ComPage;

  beforeEach(() => {
    page = new Anidaniel.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
