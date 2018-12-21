/*eslint-disable no-console */
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

// Let Prod know *something* is occuring...
console.log(chalk.blue('Minifying bundle for production. This will take a sec...'))

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so, a fatal error just happened. Full stop.
    console.log(chalk.red(err))
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    console.log(chalk.red('Webpack generated the following errors: '))
    jsonStats.errors.map(error => console.log(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '))
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }

  console.log(`Webpack stats: ${stats}`)

  // if we got this far, then build is successful!
  console.log(chalk.green('Your app has been built for production and written to /dist!'))

  return 0
})
