const express = require('express');
const router = express.Router();
const app = express();
const PORT = process.env.port || 3333;

app.listen(PORT, function() {
	console.log('alive on ' + PORT);
});