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
    private updateFunc: (deltaTime: number) => void = undefined!;

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
        this.elapsedTimeRange = 0.0;
        this.gameTime = 0.0;
        this.timer = new FrameTimer();
    }

    /**
     * 初期化
     * @param interval 更新間隔[s]
     * @param updateFunc 更新処理のコールバック関数
     */
    public initialize(interval: number, updateFunc: (deltaTime: number) => void): void {
        this.interval = interval;
        this.updateFunc = updateFunc;
        // ゲーム開始時刻を登録
        this.timer.start();
    }

    /**
     * フレーム更新の開始
     */
    public start(): void {
        window.requestAnimationFrame(this.update.bind(this));
    }

    /**
     * フレーム更新
     */
    private update(): void {
        throw new Error("未実装");
    }
}