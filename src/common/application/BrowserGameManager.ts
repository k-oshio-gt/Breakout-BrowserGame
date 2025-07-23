import { IFrameUpdater } from "./IFrameUpdater";
import { IBrowserGame } from "./IBrowserGame";

/**
 * ブラウザゲーム管理クラス(エントリポイント)
 */
export class BrowserGameManager {
    /**
     * ゲーム停止フラグ
     */
    private stopFlag: boolean = null!;

    /**
     * フレーム更新器
     */
    private frameUpdater: IFrameUpdater = null!;

    /**
     * ブラウザゲームオブジェクト
     */
    private browserGame: IBrowserGame = null!;

    /**
     * コンストラクタ
     * @param gameName ブラウザゲーム名
     * @param canvas Canvas要素
     */
    public constructor(gameName: string, canvas: HTMLCanvasElement) {
        throw new Error("未実装");
    }

    /**
     * Canvas2Dコンテキストの取得
     * @param canvas Canvas要素
     * @returns Canvas2Dコンテキスト
     */
    private getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
        throw new Error("未実装");
    }

    /**
     * ゲームの開始
     */
    public start(): void {
        throw new Error("未実装");
    }

    /**
     * ゲームの更新
     * @param deltaTime 前回の更新からの経過時間
     */
    private update(deltaTime: number): void {
        throw new Error("未実装");
    }

    /**
     * ゲームの停止
     */
    public stop(): void {
        throw new Error("未実装");
    }
}
