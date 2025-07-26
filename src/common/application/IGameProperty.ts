/**
 * ブラウザゲーム設定の構造体
 */
export interface IGameProperty {
    /**
     * 更新間隔[s]
     */
    interval: number;

    /**
     * フレーム更新モード
     */
    frameUpdateMode: boolean;
}