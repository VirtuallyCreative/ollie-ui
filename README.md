# Ollie

[![Build Status](https://travis-ci.org/VirtuallyCreative/ollie-ui.svg?branch=master)](https://travis-ci.org/VirtuallyCreative/ollie-ui)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/t3wv39owatkxpx9m?svg=true)](https://ci.appveyor.com/project/vip3rousmango/ollie)
[![GitHub issues](https://img.shields.io/github/issues/VirtuallyCreative/ollie-ui.svg)](https://github.com/VirtuallyCreative/ollie-ui/issues)
[![GitHub forks](https://img.shields.io/github/forks/VirtuallyCreative/ollie-ui.svg)](https://github.com/VirtuallyCreative/ollie-ui/network)
[![GitHub stars](https://img.shields.io/github/stars/VirtuallyCreative/ollie-ui.svg)](https://github.com/VirtuallyCreative/ollie-ui/stargazers)
[![GitHub license](https://img.shields.io/github/license/VirtuallyCreative/ollie-ui.svg)](https://github.com/VirtuallyCreative/ollie-ui)
<br />
[![Twitter](https://img.shields.io/twitter/url/https/github.com/VirtuallyCreative/ollie-ui.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FVirtuallyCreative%2Follie-ui) [![Patreon Support](https://img.shields.io/badge/Patreon%20Support-Help%20Ollie%20get%20better-orange.svg)](https://www.patreon.com/preview/2c04ab8f423140269d46d535e6bb7134)
[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/virtually-creative/ollie-ui)
<br /><br />
Ollie is an opinionated boilerplate for creating rapid Single Page Application wireframes and microsites.

To learn more [Check out the Documentation](https://ollie-ui.dev) || Docs Build: [![Netlify Status](https://api.netlify.com/api/v1/badges/fb885684-273e-45f7-8d2b-c136e68f6bb4/deploy-status)](https://app.netlify.com/sites/ollie-ui-docs-5325e/deploys)

## Why Ollie

Lots of decisions can go into a boilerplate - so after making these decisions over and over they're now baked into a Stater Kit.
Some of the things out of the box are,

* Webpack Devel­op­ment / Pro­duc­tion — Sep­a­rate dev and prod con­figs & builds. Local devel­op­ment means fast builds via the in-mem­o­ry web­pack-dev-serv­er, and for pro­duc­tion builds every pos­si­ble opti­miza­tion needs to be utilized, making for slower builds at the gain of better optimizations.

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

Ollie uses ExpressJS, with a centralized API approach which configures all calls, handles pre-loader logic and also errors.

To learn more [Check out the Documentation](https://ollie-ui.dev).

## Ecosystem

Added in a light-weight frameworks to help scaffold CSS. You can easily swap it for whatever front-end framework you wish.
Its referenced in the `<head>` tag in `/src/index.ejs`.

```html
  <!-- Load Allegretto from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/allegretto@latest/dist/retto.min.css" type="text/css" media="all">
```

| Project | Status | Description |
|---------|--------|-------------|
| [Allegretto](https://github.com/VirtuallyCreative/allegretto)          | [![Build Status](https://travis-ci.org/VirtuallyCreative/allegretto.svg?branch=master)](https://travis-ci.org/VirtuallyCreative/allegretto) | Lightweight CSS Framework |

To learn more [Check out the Documentation](https://ollie-ui.dev)

## Get Started

1. **Install [Node 6 or newer](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/VirtuallyCreative/ollie-ui.git` or [download the zip](https://github.com/VirtuallyCreative/ollie-ui/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd ollie-ui`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
   This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

## Also featuring

* [Allegretto](https://allegretto.herokuapp.com/) - Lightweight CSS Framework

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
