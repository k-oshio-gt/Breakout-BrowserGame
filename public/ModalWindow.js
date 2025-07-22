import { BrowserGameManager } from "./dist/common/application/BrowserGameManager.js";

// ブラウザゲーム管理オブジェクト
const gameManager = new BrowserGameManager();

// ブラウザゲーム用モーダルウィンドウ
const modal = document.getElementsByClassName("modal")[0];

// 実行ボタンクリックイベント
const buttonRun = document.getElementById("run-button");
buttonRun.addEventListener("click", clickRunButton);
function clickRunButton() {
  // モーダルウィンドウを表示
  modal.style.display = "block";
  gameManager.start();
}

// モーダルウィンドウの閉じるボタンクリックイベント
const buttonClose = document.getElementsByClassName("modal-close")[0];
buttonClose.addEventListener("click", clickCloseButton);
function clickCloseButton() {
  // モーダルウィンドウを非表示
  modal.style.display = "none";
  gameManager.stop();
}