import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe('index.html', () => {
  //Scaffold dom to regular document object
  before(function() {
    return JSDOM.fromFile('src/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
      });
    })
  // Start 'it should' assertion like normal...
  it('should include Ollie\'s Hello World', (done) => {
        expect(document.getElementsByTagName('h1')[0].innerHTML).to.equal("Welcome to Ollie Framework!");
        done();
        window.close();
    })
})


