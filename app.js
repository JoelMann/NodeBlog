//This is the start of the blog - to begin with, launching a local web server to operate as the logical back end for the site
const http = require('http');

const hostname = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer