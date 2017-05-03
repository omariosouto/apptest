import Express from 'express'

const app = new Express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});