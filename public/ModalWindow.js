// ブラウザゲーム用モーダルウィンドウ
const modal = document.getElementsByClassName("modal")[0];

// 実行ボタンクリックイベント
const buttonRun = document.getElementById("run-button");
buttonRun.addEventListener("click", clickRunButton);
function clickRunButton() {
  modal.style.display = "block";;
}

// モーダルウィンドウの閉じるボタンクリックイベント
const buttonClose = document.getElementsByClassName("modal-close")[0];
buttonClose.addEventListener("click", clickCloseButton);
function clickCloseButton() {
  modal.style.display = "none";
}