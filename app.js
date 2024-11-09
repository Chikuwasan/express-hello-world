const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//const socketIO = require('socket.io');

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

//const io = socketIO(server);

// グローバル変数
let iCountUser = 0; // ユーザー数

// // 接続時の処理
// io.on('connection', (socket) => {
//     console.log('connection');

//     // 切断時の処理
//     socket.on('disconnect', () => {
//         console.log('disconnect');
//     });

//     // 新しいメッセージ受信時の処理
//     socket.on('new message', (strMessage) => {
//         console.log('new message', strMessage);
//     });
// });

// body-parser
app.use(express.urlencoded({ extended: true }))
// static built-in middleware
app.use(express.static('public'))
// GET /foo
app.post('/foo', (req, res) => {
  console.log('--- post() /foo called ---')
  console.log(req.body)
  res.send('Done')
})


/*const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`*/

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>mychat</title>
</head>
<body>
  <h1>node.js を触ってみた</h1>
  <form method="POST" action="/foo">
    <input type="text" name="country" placeholder="country" />
    <input type="text" name="city" placeholder="city" />
    <input type="submit" value="Submit" />
  </form>
  <script src="/socket.io/socket.io.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="client.js"></script>
</body>
</html>

`;
