/**
 * フレーム更新器インターフェース
 */
export interface IFrameUpdater {
    /**
     * 初期化
     * @param interval 更新間隔[s]
     * @param updateFunc 更新処理のコールバック関数
     */
    initialize(interval: number, updateFunc: Function): void;

    /**
     * フレーム更新の開始
     */
    start(): void;
}