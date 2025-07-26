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
        this.startTime = performance.now() / 1000;
    }

    /**
     * 計測
     * (計測誤差は5[us]程度)
     * @return 経過時間[s]
     * @throws {ReferenceError} start()が呼ばれていない場合にスローする例外
     */
    public measure(): number {
        if (this.startTime === undefined) {
            // TODO: エラーログが必要
            throw new ReferenceError("measure()の前にstart()が呼ばれていません");
        }
        let nowTime = performance.now() / 1000;
        return nowTime - this.startTime;
    }
}