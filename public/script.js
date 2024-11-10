function submit() {
  const inp = document.getElementById("textarea-1").value;
  // クライアント側
  fetch('/your-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: inp })
  })
    .then(response => response.json())
    .then(data => showData(data));
}

function showData(data) {
  console.log(data);
  document.getElementById("textarea-2").value += `${data["received"]}\n`;
}