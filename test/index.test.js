// Require Chai
let { expect } = require('chai'),
    jsdom = require('jsdom'),
    path = require('path'),
    fs = require('fs');


// describe('Our first test', () => {
//   it('should pass', () => {
//     expect(true).to.equal(true);
//   });
// });

describe('index.html', () => {
    it('should have h1 that says Users', () => {
        const index = fs.readFileSync(path.resolve(__dirname, '../src/index.html')).toString('utf8');
        const { JSDOM } = jsdom;
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Users");
        dom.window.close();
    })

    //TODO: Create API Response Test


    //TODO: Create local JSON test


    //TODO: Create returned data test


})
