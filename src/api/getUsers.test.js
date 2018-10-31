import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe('getUsers.js', () => {
  //Scaffold dom to regular document object
  before(function() {
    return JSDOM.fromFile('src/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
      });
    })
  // Start 'it should' assertion like normal...
  it('should have Users (and thus, a user.id) populated into a table', (done) => {
        var rowIndex = 0;
        var cellIndex = 1;
        var cellTestID = document.getElementById('userTbl').rows[rowIndex].cells[cellIndex];
        expect(cellTestID.innerHTML).to.equal("1");
        done();
        window.close();
    })
})


