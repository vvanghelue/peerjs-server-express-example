const express = require('express')
const app = express()
const ExpressPeerServer = require('peer').ExpressPeerServer
const path = require('path')

app.get('/', function(req, res, next) {
	// res.send('Hello world!') 
	res.sendFile(path.resolve(__dirname + '/client-example/example.html'))
})
app.get('/video', function(req, res, next) {
	// res.send('Hello world!') 
	res.sendFile(path.resolve(__dirname + '/client-example/example-video.html'))
})

/*

Get last version of peerjs

git clone https://github.com/peers/peerjs.git
npm install

app.get('/peer.js', function(req, res, next) {
	// res.send('Hello world!') 
	res.sendFile(path.resolve(__dirname + '/peerjs/dist/peer.js'))
})

app.get('/peer.js.map', function(req, res, next) {
	// res.send('Hello world!') 
	res.sendFile(path.resolve(__dirname + '/peerjs/dist/peer.js.map'))
})
*/


const server = app.listen(process.env.PORT || 5001)

// peerjs part
const peerserver = ExpressPeerServer(server, { proxied: true /*debug: true*/ })
app.use('/peerjs', peerserver)
