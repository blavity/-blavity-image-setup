const express = require('express')
const port = 3001
const app = express()
const logger = require('morgan')
app.use(logger('dev'))
const body = require('body-parser')
const path = require('path')
const blavityImageSetup = require('./index.js')
const jsdom = require('jsdom')

const { JSDOM } = jsdom
/* VISUAL TEST SETUP*/
const dom = new JSDOM(`<html><head><title>Browser Test</title></head><body><center></center></body></html>`)
const div1 = dom.window.document.createElement('div')
const div2 = dom.window.document.createElement('div')
const img = dom.window.document.createElement('img')
img.setAttribute('src', `${blavityImageSetup.setUpImage({imgSlug: 'v1571756481/f9f98ydergzgdb5odvkl', mode : 'enhance', options: {
  h : '250'
}})}`)
const img2 = dom.window.document.createElement('img')
img2.setAttribute('src', `${blavityImageSetup.setUpImage({imgSlug: 'v1571756481/f9f98ydergzgdb5odvkl', mode : 'custom', options: {
  h : '250',
  w:'300',
  c:'crop',
  g:'north_east'
}})}`)
div1.appendChild(img)
div2.appendChild(img2)
dom.window.document.querySelector('center').appendChild(div1)
dom.window.document.querySelector('center').appendChild(dom.window.document.createElement('hr'))
dom.window.document.querySelector('center').appendChild(div2)
/* VISUAL TEST SETUP END*/
app.get('/', (req, res) => {
  res.send(dom.window.document.querySelector('html').innerHTML);
});

app.listen(port, () => {
  console.log(`App Turned On My Dude We Listening On Port ${port}`);
});

/* INCASE YOU DESIRE TO EXTEND*/
module.exports = { app };
