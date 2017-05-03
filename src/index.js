import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'

const app = new Express()
const http = Http.Server(app)
const io = SocketIO(http)


// Static Files Middleware
app.use(Express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', function(socket){
  console.log('a user connected', socket.conn.id)
  socket.on('disconnect', function(){
    console.log('user disconnected', socket.conn.id)
  })

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})