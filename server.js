const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const PORT = process.env.port || 3333;


// app.use(express.static(path.join(__dirname, 'assistant-director/build')));

app.get('/', function(req, res) {
	res.send('hi');
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/assistant-director/build/index.html'));
// });

app.listen(PORT, function() {
	console.log('alive on ' + PORT);
});