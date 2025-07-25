/**
 * タイマー
 */
export class FrameTimer {
    /**
     * 計測開始時刻[s]
     */
    private startTime: number = undefined!;

    /**
     * 計測開始
     */
    public start(): void {
        throw new Error("未実装");
    }

    /**
     * 計測
     * @return 経過時間[s]
     */
    public measure(): number {
        throw new Error("未実装");
    }
}