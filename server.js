const express = require("express");
const app = express();

const connections = [],
  users = [];
app.set("view engine", "ejs");

app.use(express.static("static"));
app.use(express.static("node_modules"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const server = require("http").createServer(app);

server.listen(3000, () => console.log("SERVER RUNNING!"));

const io = require("socket.io")(server);

io.sockets.on("connection", client => {
  connections.push(client);
  console.log("Connected: %s sockets connected!", connections.length);
  client.on("disconnect", () => {
    connections.splice(connections.indexOf(client), 1);
    console.log("Disconnected: %s sockets-> ", connections.length);
  });

  client.on("user_message", data => {
    io.emit("user_message", data);
  });
});
