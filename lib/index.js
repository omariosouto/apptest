import Express from 'express'

const app = new Express()

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));

app.get('/', function (req, res) {
  res.json({name: "Babel ES6 Node <3"})
})


app.listen(app.get('port'), err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${app.get('port')}`);
});