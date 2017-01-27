import { MusicstorePage } from './app.po';

describe('musicstore App', function() {
  let page: MusicstorePage;

  beforeEach(() => {
    page = new MusicstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
