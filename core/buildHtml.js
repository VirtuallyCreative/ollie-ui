// This script copies src/index.ejs into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import chalk from 'chalk';

/*eslint-disable no-console */

fs.readFile('src/index.ejs', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err);
    }

    const $ = cheerio.load(markup);

    // since a separate stylesheet is only utilized for the production build, need to dynamically add this here.
    $('head').prepend('<link rel="stylesheet" href="index.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(chalk.green('index.html written to /dist'));
    });
});
