# Ollie

[![Build Status](https://travis-ci.org/VirtuallyCreative/ollie-ui.svg?branch=master)](https://travis-ci.org/VirtuallyCreative/ollie-ui)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/t3wv39owatkxpx9m?svg=true)](https://ci.appveyor.com/project/vip3rousmango/ollie)
[![GitBook](https://img.shields.io/badge/docs-gitbook-blue.svg)](https://virtuallycreative.gitbook.io/ollie-framework/v/docs/)
<br>
[![GitHub issues](https://img.shields.io/github/issues/VirtuallyCreative/Ollie.svg)](https://github.com/VirtuallyCreative/Ollie/issues)
[![GitHub forks](https://img.shields.io/github/forks/VirtuallyCreative/Ollie.svg)](https://github.com/VirtuallyCreative/Ollie/network)
[![GitHub stars](https://img.shields.io/github/stars/VirtuallyCreative/Ollie.svg)](https://github.com/VirtuallyCreative/Ollie/stargazers)
[![GitHub license](https://img.shields.io/github/license/VirtuallyCreative/Ollie.svg)](https://github.com/VirtuallyCreative/Ollie)
<br>
<!--
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg)
![David](https://img.shields.io/david/VirtuallyCreative/Ollie.svg)
![node](https://img.shields.io/node/v/Ollie.svg)
-->
[![Twitter](https://img.shields.io/twitter/url/https/github.com/VirtuallyCreative/Ollie.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FVirtuallyCreative%2FOllie)

Ollie is an opinionated boilerplate for creating rapid Single Page Application wireframes and microsites. It uses the [AresJS](https://#) and [Allegretto](https://allegretto.herokuapp.com/) micro-libraries as well as the latest JS tooling to help rapidly scaffold your app.

You can think of this as a light HTML5 + Bootstrap + jQuery style boilerplate but, decisions on what to use under the hood have already been decided.

Ollie sets some environment standards (EditorConfig) and handles scaffolding the build (Webpack), linting (ESLint), testing (Mocha/Chai, CI) and deployment (Webpack again) processes as well as providing mockable HTTP and API (Express) requests to use during development.

## Ecosystem

| Project | Status | Description |
|---------|--------|-------------|
| [Allegretto](https://github.com/VirtuallyCreative/allegretto)          | [![Build Status](https://travis-ci.org/VirtuallyCreative/allegretto.svg?branch=master)](https://travis-ci.org/VirtuallyCreative/allegretto) | Lightweight CSS Framework |
| [AresJS](https://github.com/VirtuallyCreative/aresJS)              | [![Build Status](https://travis-ci.org/VirtuallyCreative/aresJS.svg?branch=master)](https://travis-ci.org/VirtuallyCreative/aresJS) | Micro Javascript Framework |

## Get Started

1. **Install [Node 6 or newer](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/coryhouse/javascript-development-environment.git` or [download the zip](https://github.com/coryhouse/javascript-development-environment/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd javascript-development-environment`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
   This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Try running the latest version of Node.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Seeing `Error: listen EADDRINUSE :::3000`? That means port 3000 is already in use on your machine. You probably have another instance of this project running on your machine in a different window. So find that window and kill the other instance using Ctrl+C.
7. Nothing above work? Delete your node_modules folder and re-run npm install.

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                              |
| babel-core                  | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| babel-preset-latest         | Babel preset for running all the latest standardized JavaScript features                                  |
| babel-register              | Register Babel to transpile our Mocha tests                                                               |
| chai                        | Assertion library                                                                                         |
| chalk                       | Colored command line output                                                                               |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| compression                 | gzip http output                                                                                          |
| cross-env                   | Cross-environment friendly way to handle environment variables                                            |
| css-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                           |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| express                     | Serves development and production builds                                                                  |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                      |
| html-webpack-plugin         | Generate HTML file programatically via Webpack                                                            |
| jsdom                       | In-memory DOM for testing                                                                                 |
| json-schema-faker           | Declare a JSON schema for generating fake data                                                            |
| json-server                 | Serve a JSON API locally                                                                                  |
| localtunnel                 | Create a tunnel to your local machine                                                                     |
| mocha                       | JavaScript testing library                                                                                |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| numeral                     | Library for working with numbers                                                                          |
| open                        | Open app in default browser                                                                               |
| rimraf                      | Delete files                                                                                              |
| style-loader                | Add Style support to Webpack                                                                              |
| supertest                   | Mock HTTP requests
  |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                             |
| webpack-md5-hash            | Used to hash files generated by Webpack using MD5 so that their names change when the content changes     |

## Creating & Running tests

Tests should be inside of a *.test.js file and local to the .js file it tests.

* [Mocha](https://mochajs.org/#getting-started) - Testing framework
* [Chai](https://www.chaijs.com/guide/styles/) - Assertion Library
* [JSDOM](https://github.com/jsdom/jsdom) - ShadowDOM for use with Chai
* [TravisCI](https://travis-ci.org/VirtuallyCreative/Ollie) - Linux CI testing
* [Appveyor](https://ci.appveyor.com/project/vip3rousmango/ollie) - Windows CI testing

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Webpack is responsible for several operations during the build process.

* Devel­op­ment / Pro­duc­tion — Sep­a­rate dev and prod con­figs & builds. Local devel­op­ment means fast builds via the in-mem­o­ry web­pack-dev-serv­er, and for pro­duc­tion builds every pos­si­ble opti­miza­tion needs to be utilized, making for slower builds at the gain of better optimizations.

* Hot Mod­ule Replace­ment — as changes are made to JavaScript, CSS, or tem­plates, the web­page seam­less­ly refreshes.

* Dynam­ic Code Split­ting — Webpack sorts out how to chunk JavaScript in a con­fig file, auto-magically.

* Async Dynam­ic Mod­ule Load­ing - Load only the code/​resources need­ed, when they are need­ed, with­out ren­der blocking.

* Mod­ern to Lega­cy JS Bun­dles — Deploy mod­ern ES2017+ JavaScript mod­ules while grace­ful­ly pro­vid­ing a fall­back lega­cy bun­dle for lega­cy browsers (with all of the tran­spiled code and polyfills).

* Cache Bust­ing via manifest.json - Sets long expiry data for our sta­t­ic assets, while also ensur­ing that they are auto­mat­i­cal­ly cache bust­ed if they change.

* Crit­i­cal CSS — This is some­thing that makes ini­tial page loads sig­nif­i­cant­ly faster by only delivering the styles needed first.

* Work­box Ser­vice Work­er — Lever­age Google’s Work­box project to gen­er­ate a Ser­vice Work­er for us that will know about all of our project’s assets.

* PostC­SS — The ​“Babel of CSS”, lets you SASS like a boss.

* Image Opti­miza­tion — Opti­mize them via auto­mat­ed tools like mozjpeg, optipng, svgo, etc for next step...

* Auto­mat­ic .webp Cre­ation — Chrome, Edge, and Fire­fox all are sup­port­ing .webp, and can signifigantly boost performance.

## HTTP & API

Ollie uses a centralized API which configures all calls, handles pre-loader logic and also errors.

## Also featuring ...

* [Allegretto](https://allegretto.herokuapp.com/) - Lightweight CSS Framework
* [AresJS](https://aresjs.herokuapp.com) - Micro JS Framework

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/VirtuallyCreative/Ollie/tags).

## Authors

* **Al Romano** - *Initial work* - [Virtually(Creative)](https://github.com/VirtuallyCreative)

See also the list of [contributors](https://github.com/VirtuallyCreative/Ollie/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Based on learnings from ["Javascript Development Environment" - Pluralsight course](https://app.pluralsight.com/library/courses/javascript-development-environment/)
