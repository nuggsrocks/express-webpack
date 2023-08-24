const path = require('path')
const express = require('express')
const webpackMiddleware = require('express-webpack-middleware')
const morgan = require('morgan')

const isDevelopment = process.env.NODE_ENV !== 'production'

const app = express()

module.exports = (webpackConfig) => {
    if (isDevelopment) {
        app.use(morgan('dev'))
      
        webpackMiddleware(app, webpackConfig)
    } else {
        app.use(express.static(path.resolve(__dirname, './dist')))
    }
    return app
}
