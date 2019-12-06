const socket: any = io.connect(window.location.href);

const msgInterface: any = document.querySelector("#msg");
let data: string = "";
const username = prompt("enter username here?");
socket.on("msg", (msg: any) => {
  data += "<p><b>" + msg.user + "</b>  " + msg.body + "</p>";
  msgInterface.innerHTML = data;
});

function send() {
  const inpInterface: any = document.querySelector("#Txtinput");
  socket.emit("data", {
    id: socket.id,
    user: username,
    date: Date.now(),
    body: inpInterface.value
  });
  inpInterface.value = "";
}
