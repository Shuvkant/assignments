// You have to create a middleware for logging the number of requests on a server

const express = require('express');

const app = express();
let requestCount = 0;
let errorCount=0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.use(function(req,res,next){
  requestCount=requestCount+1;
  next();
})
function totalCount(number){
  console.log("The total request is: "+number)
}
app.get('/user', function(req, res) {

  totalCount(requestCount)
  res.status(200).json({ name: 'john', counts:requestCount });
});

app.post('/user', function(req, res) {

 totalCount(requestCount)
  res.status(200).json({ msg: 'created dummy user', counts:requestCount });

});

app.get('/requestCount', function(req, res) {

totalCount(requestCount)
  res.status(200).json({ requestCount });

});

app.use(function(err,req,res,next){
  res.status(400).send({})
  errorCount=errorCount+1
  next();
})
app.listen(3000)

module.exports = app;
