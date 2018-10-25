import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe('index.html', () => {
  it('should include Ollie\'s Hello World', (done) => {
      JSDOM.fromFile("index.html").then(dom => {
        const h1 = dom.window.document.getElementsByClassName('title')
        expect(h1.innerHTML).to.equal("Welcome to Ollie Framework!");
      })
      done();
    })
})
