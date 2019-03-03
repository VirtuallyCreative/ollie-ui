# Package Management

Here we've gone with NPM, a solid package manager that has fantastic support being native to Node.

Out of the box, here are the pre-configured scripts,

- prestart           :: Sets the starting message
- start              :: Begins dev build
- start-mockapi      :: Starts Mock API with Express
- open:src           :: Opens SRC folder assets
- lint               :: Lints all HTML,CSS,JS
- lint:watch         :: Adds watch tag to Lint script
- localtunnel        :: lets you open remote pipe
- share              :: creates URL for someone to preview site
- test               :: runs mocha/chai tests
- test:watch         :: adds watch tag to mocha/chai tests
- generate-mock-data :: runs json-schema-faker to fake data
- prestart-mockapi   :: generates mock data for API
- start-mockapi      :: starts json-server for development
- clean-dist         :: deletes /dist
- prebuild           :: cleans dist, runs tests and lints
- build              :: runs main build using webpack production config creatiing assets for `/dist`
- postbuild          :: sets up production server settings for Express
- deploy             :: deploys `/dist/` to [surge.sh](https://surge.sh)
