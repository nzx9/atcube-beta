"use strict";
var socket = io.connect(window.location.href);
var msgInterface = document.querySelector("#msg");
var data = "";
var username = prompt("enter username here?");
socket.on("msg", function (msg) {
    data += "<p><b>" + msg.user + "</b>  " + msg.body + "</p>";
    msgInterface.innerHTML = data;
});
function send() {
    var inpInterface = document.querySelector("#Txtinput");
    socket.emit("data", {
        id: socket.id,
        user: username,
        date: Date.now(),
        body: inpInterface.value
    });
}
