let latestID = -1;
let room = "";

function submit() {
  const roomName = document.getElementById("textarea-0").value;
  if (roomName != room) {
    room = roomName;
    latestID = -1;
    document.getElementById("textarea-2").value = "";
  }
  const content = document.getElementById("textarea-1").value;
  transmit(content, showData);
}

function transmit(content, func) {
  // クライアント側
  fetch('/your-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "room": room,
      "content": content,
      "latestID": latestID
    })
  })
    .then(response => response.json())
    .then(data => func(data));
}

function showData(data) {
  console.log(data);
  if (data["type"] == "append") {
    if (latestID == -1) {
      document.getElementById("textarea-2").value = data["content"];
    } else {
      document.getElementById("textarea-2").value += "\n" + data["content"];
    }
  } else if (data["type"] == "set") {
    document.getElementById("textarea-2").value = data["content"];
  }
  latestID = data["latestID"];
  document.getElementById("textarea-1").value = "";
}