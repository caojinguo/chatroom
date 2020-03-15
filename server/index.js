let express = require('express');
let http = require('http');
let socketIo = require('socket.io');
let cors = require('cors');

let app = express();
let server = http.Server(app);
let io = socketIo(server);

app.use(cors);

io.on('connection',socket => {
    let id = socket.id;
    socket.on('msg',msg=>{
        socket.emit('msg',{id,msg});
    })
});
 
server.listen(4000, () => console.log('Example app listening on port 3000'));
