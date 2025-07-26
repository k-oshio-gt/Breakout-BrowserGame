/**
 * ブラウザゲームインターフェース
 */
export interface IBrowserGame {
    /**
     * 初期化
     * @param ctx Canvas2Dコンテキスト
     */
    initialize(ctx: CanvasRenderingContext2D): void;

    /**
     * ゲーム処理
     * @param deltaTime 前回の更新からの経過時間
     */
    game(deltaTime: number): void;
}