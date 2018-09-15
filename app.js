const express = require('express')
const path = require('path')
const request = require('request')

const app = express()

app.disable('x-powered-by')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, 'public/html/index.html'))
)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () =>
	console.log('Server started on port ' + app.get('port'))
)