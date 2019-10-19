
const assert = require('assert');


const expectedTitle = 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!';

describe('first test',()=>{
it('test one',()=>{
browser.url('https://www.flipkart.com');
const title = browser.getTitle();

callme.getme();

assert.strictEqual(expectedTitle,title);


});
});