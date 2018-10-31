# Ollie

[![Build Status](https://travis-ci.org/VirtuallyCreative/Ollie.svg?branch=master)](https://travis-ci.org/VirtuallyCreative/Ollie)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/t3wv39owatkxpx9m?svg=true)](https://ci.appveyor.com/project/vip3rousmango/ollie)
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

## Getting Started

Follow the following sections to get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You're going to want to make sure you already have these installed:

```
Node
Git
Yarn / NPM
```

### Installing

A step by step series of examples that tell you how to get a development env running

1- Git Clone repository, then step into the new directory:

```
$ git clone https://github.com/VirtuallyCreative/ollie.git my-project-name
$ cd my-project-name
```

2- Install required node packages:

```
my-project-name $: npm install
```
Or,
```
my-project-name $: yarn
```

End with an example of getting some data out of the system or using it for a little demo

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

## Built With

* [Node](http://#)
* [Express](https://#)
* [Babel](https://#)
* [Webpack](https://#) - Build Tool
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

* Hat tip to anyone whose code was used
* Inspiration
* etc
