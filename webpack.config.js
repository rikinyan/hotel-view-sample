const path = require('path')
const fs = require('fs')

const HtmlWebpackPlugin = require('html-webpack-plugin')


const pageEntryPoints = {
  pages: [
    {
      entry: 'index',
      entryRef: './view/index/index.js',
      output: './index/index.js',
      template: './view/index/index.html',
      htmlFilename:'index/index.html'
    },
    {
      entry: 'register_user',
      entryRef: './view/register_user/register_user.js',
      output: './register_user/register_user.js',
      template: './view/register_user/register_user.html',
      htmlFilename:'register_user/register_user.html'
    },
    {
      entry: 'finish_reservation',
      entryRef: './view/finish_reservation/finish_reservation.js',
      output: './finish_reservation/finish_reservation.js',
      template: './view/finish_reservation/finish_reservation.html',
      htmlFilename:'finish_reservation/finish_reservation.html'
    },
    {
      entry: 'reservation',
      entryRef: './view/reservation/reservation.js',
      output: './reservation/reservation.js',
      template: './view/reservation/reservation.html',
      htmlFilename:'reservation/reservation.html'
    }
  ],

  get entries () {
    const entries = Object()
    console.log(this)
    this.pages.forEach((page) => {
      entries[page.entry] = page.entryRef
    })
    return entries
  },

  get htmlWebpackPlugins () {
    return this.pages.map((page) => {
      return new HtmlWebpackPlugin({
        filename: page.htmlFilename,
        template: page.template,
        chunks: [page.entry]
      })
    })
  }
}

module.exports = {
  mode: 'development',
  entry: pageEntryPoints.entries,
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  },
  plugins: [
    ...pageEntryPoints.htmlWebpackPlugins
  ]
}