// ブラウザゲーム用モーダルウィンドウ
const modal = document.getElementsByClassName("modal")[0];

// 実行ボタンクリックイベント
const buttonRun = document.getElementById("run-button");
buttonRun.addEventListener("click", clickBlockButton);
function clickBlockButton() {
  modal.style.display = "block";;
}

// モーダルウィンドウの閉じるボタンクリックイベント
const buttonClose = document.getElementsByClassName("modal-close")[0];
buttonClose.addEventListener("click", modalClose);
function modalClose() {
  modal.style.display = "none";
}