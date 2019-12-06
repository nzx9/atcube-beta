"use strict";
var App = require("./app");
var Socket = require("socket.io");
var server = App.listen(process.env.PORT || 80, function () {
    console.log("Listen on: " + (process.env.PORT || 80));
});
var io = Socket(server);
io.on("connection", function (socket) {
    socket.on("data", function (msg) {
        console.log(msg);
        io.emit("msg", msg);
    });
    socket.on("disconnect", function (reason) {
        console.log(socket.id + " disconnected. reason : " + reason);
    });
});
