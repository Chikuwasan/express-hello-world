// // クライアントからサーバーへの接続要求
// const socket = io.connect();

// // 接続時の処理
// socket.on('connect', () => {
//     console.log('connect');
// });

// let inp;
// let but;
// window.onload = () => {
//   inp = document.getElementById("input_message");
//   but = document.getElementById("input_button");
//   but.addEventListener("click", () => {
//     const text = inp.value;

//     console.log('#input_message :', text);

//     if (text) {
//       // サーバーに、イベント名 'new message' で入力テキストを送信
//       socket.emit('new message', text);
//       // テキストボックスを空に
//       //$inp.val('');
//     }
//     // フォーム送信はしない?
//     return false;
//   });
// };

// // 「Send」ボタンを押したときの処理
// $('form').submit(() => {
//   const $inp = $('#input_message');
//   const text = $inp.val();

//   console.log('#input_message :', text);

//   // if (text) {
//   //     // サーバーに、イベント名 'new message' で入力テキストを送信
//   //     socket.emit('new message', text);
//   //     // テキストボックスを空に
//   //     $inp.val('');
//   // }
  
//   // フォーム送信はしない
//   return false;
// });
