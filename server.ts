let App: any = require("./app");
let Socket = require("socket.io");

let server = App.listen(process.env.PORT || 80, () => {
  console.log("Listen on: " + (process.env.PORT || 80));
});

let io = Socket(server);
io.on("connection", (socket: any) => {
  socket.on("data", (msg: any) => {
    console.log(msg);
    io.emit("msg", msg);
  });

  socket.on("disconnect", (reason: any) => {
    console.log(socket.id + " disconnected. reason : " + reason);
  });
});
