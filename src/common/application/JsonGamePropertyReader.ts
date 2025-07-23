import { IGamePropertyReader } from "./IGamePropertyReader";
import { IGameProperty } from "./IGameProperty";

/**
 * ブラウザゲーム設定のJsonファイル読み込みクラス
 */
export class JsonGamePropertyReader implements IGamePropertyReader {
    /**
     * ブラウザゲーム設定の読み込み
     * @return ブラウザゲーム設定
     */
    public read(): IGameProperty {
        throw new Error("未実装");
    }
}