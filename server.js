const express = require("express");
const app = express();
const registerRouter = require("./day2/routers/register");

app.listen(3000, function () {
  console.log("Ready to connect on port 3000");
}); 

app.use("/register", registerRouter);

app.use(express.json());
app.use(express.urlencoded({ 
  extended: true 
}));

app.get('/info', function(req, res) {
  res.send(JSON.stringify({name: "GDU", addr: "Quang Trung, Gò Vấp"}));
});




app.get('/', function(req, res) {
  res.send('Hello from ExpressJS');
});

app.post('/', function(req, res) {
  const body = req.body;
  console.log(JSON.parse(JSON.stringify(body)));
  res.send('POST request to the homepage');
});

app.put('/', function(req, res) {
  res.send('PUT request to the homepage');
});

app.patch('/', function(req, res) {
  res.send('PATCH request to the homepage');
});

app.delete('/', function(req, res) {
  res.send('DELETE request to the homepage');
});