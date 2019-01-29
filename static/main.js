const socket = io("", { namespace: "/chat" });

const form = $("#message-form");
const chatRoom = $(".chat-room>ul");
const messageEl = $("#message");
let username = "";
const messageTemplate = d =>
  `<li class="list-group-item">${d.username && d.username}: ${d.message}</li>`;

form.submit(e => {
  e.preventDefault();
  sendMessage();
  return false;
});

$("#username").keyup(() => {
  username = $("#username").val();
});

const sendMessage = () => {
  const message = messageEl.val();
  if (message) {
    socket.emit("user_message", { username, message });
    messageEl.val("");
  } else {
    alert("type some message!");
  }
};

socket.on("user_message", data => {
  console.log("new message emitted -> ", data);
  chatRoom.append(messageTemplate(data));
});
