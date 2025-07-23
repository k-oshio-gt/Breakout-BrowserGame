import { IGameProperty } from "./IGameProperty";

/**
 * ブラウザゲーム設定の読み込みインターフェース
 */
export interface IGamePropertyReader {
    /**
     * ブラウザゲーム設定の読み込み
     * @return ブラウザゲーム設定
     */
    read(): IGameProperty;
}