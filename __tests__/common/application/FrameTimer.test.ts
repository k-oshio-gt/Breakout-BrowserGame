import { FrameTimer } from "../../../src/common/application/FrameTimer";

/**
 * タイマーの単体テスト
 */
describe("FrameTimer", () => {
    /**
     * 初期化処理
     */
    beforeEach(() => {
        jest.useFakeTimers(); // タイマーを偽装
    });

    /**
     * 終了処理
     */
    afterEach(() => {
        jest.useRealTimers(); // タイマーを元に戻す
    });

    /**
     * テスト
     */
    test("正常系1: start()1回とmeasure()1回で経過時間を取得できる", () => {
        // テスト対象
        const timer = new FrameTimer();
        timer.start();
        jest.advanceTimersByTime(100); // タイマーを100[ms]進める
        const elapsedTimeRange = timer.measure();
        // Assert
        expect(elapsedTimeRange).toBeCloseTo(0.1, 5);  // 5[us]未満の誤差を許容
    });
    test("正常系2: start()を2回呼んでも正しい経過時間を取得できる", () => {
        // テスト対象
        const timer = new FrameTimer();
        timer.start();
        jest.advanceTimersByTime(100); // タイマーを100[ms]進める
        timer.start(); // 再度start()を呼ぶ
        jest.advanceTimersByTime(200); // タイマーを200[ms]進める
        const elapsedTimeRange = timer.measure();
        // Assert
        expect(elapsedTimeRange).toBeCloseTo(0.2, 5);  // 5[us]未満の誤差を許容
    });
    test("正常系3: measure()を2回呼んでも正しい経過時間を取得できる", () => {
        // テスト対象
        const timer = new FrameTimer();
        timer.start();
        jest.advanceTimersByTime(100); // タイマーを100[ms]進める
        const elapsedTimeRange1 = timer.measure();
        jest.advanceTimersByTime(200); // タイマーを200[ms]進める
        const elapsedTimeRange2 = timer.measure();
        // Assert
        expect(elapsedTimeRange1).toBeCloseTo(0.1, 5);  // 5[us]未満の誤差を許容
        expect(elapsedTimeRange2).toBeCloseTo(0.3, 5);  // 5[us]未満の誤差を許容
    });
    test("異常系1: start()を呼ばずにmeasure()で例外が発生する", () => {
        // テスト対象
        const timer = new FrameTimer();
        const measureFunction = () => timer.measure();
        // Assert
        expect(measureFunction).toThrow(ReferenceError);
    });
});
