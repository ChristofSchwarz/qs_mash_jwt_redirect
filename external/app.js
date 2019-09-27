var express = require('express');
var path = require('path');
const app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
//app.get('/', (req, res) => {
//    res.send('Hello World');
//})
app.listen(5656, () => {
    console.log('http://localhost:5656')
})
