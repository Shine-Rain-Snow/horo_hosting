//Install express server.
//This is for heroku server.
const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/horoscope'));



app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/horoscope/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);