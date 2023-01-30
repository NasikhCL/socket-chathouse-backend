// const cors = require('cors');
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
// app.use(cors());
const io = new Server(httpServer,  {  
  cors: {
    origin: "*",
 
  }
});




io.on("connection", (socket) => {
  console.log(socket.id);
  
  socket.on("chat", (data)=>{
    console.log("chat data", data); 
    io.emit("recive_message", data);
  })
  
  socket.on("disconnect", ()=>{
    console.log("user disconnected", socket.id);
  })
 
});

httpServer.listen(5000, ()=> {
  console.log('server is running');
});