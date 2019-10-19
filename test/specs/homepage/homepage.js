const assert = require('assert');

describe('to verify the menu links', () => {

    it('menu links', () => {
        browser.maximizeWindow();
        browser.url('https://www.unibet.se/');
        title = browser.getTitle();
              assert.strictEqual('Unibet SE | Odds, Casino, Bingo och Poker Online', title);
              browser.$('//*[@id="nav-main"]/nav/ul[1]/li[1]/a/span').click();
              browser.pause(10000);
        
        
    });
});