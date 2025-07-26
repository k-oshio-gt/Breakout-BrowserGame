import { IFrameUpdater } from "./IFrameUpdater";
import { FrameTimer } from "./FrameTimer";

/**
 * フレーム更新器(固定時間ステップ更新)
 */
export class FixedStepFrameUpdater implements IFrameUpdater {
    /**
     * 更新間隔[s]
     */
    private interval: number = undefined!;

    /**
     * 更新処理のコールバック関数
     */
    private updateFunc: Function = undefined!;

    /**
     * ゲーム開始からの経過時間[s]
     */
    private elapsedTimeRange: number = undefined!;

    /**
     * ゲーム内時刻[s]
     */
    private gameTime: number = undefined!;

    /**
     * タイマー
     */
    private timer: FrameTimer = undefined!;

    /**
     * コンストラクタ
     */
    public constructor() {
        throw new Error("未実装");
    }

    /**
     * 初期化
     * @param interval 更新間隔[s]
     * @param updateFunc 更新処理のコールバック関数
     */
    public initialize(interval: number, updateFunc: Function): void {
        throw new Error("未実装");
    }

    /**
     * フレーム更新の開始
     */
    public start(): void {
        throw new Error("未実装");
    }

    /**
     * フレーム更新
     */
    private update(): void {
        throw new Error("未実装");
    }
}