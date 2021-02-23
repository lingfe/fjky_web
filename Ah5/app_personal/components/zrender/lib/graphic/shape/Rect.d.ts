import Path, { PathProps } from '../Path';
declare class RectShape {
    r?: number | number[];
    x: number;
    y: number;
    width: number;
    height: number;
}
interface RectProps extends PathProps {
    shape?: Partial<RectShape>;
}
declare class Rect extends Path<RectProps> {
    shape: RectShape;
    constructor(opts?: RectProps);
    getDefaultShape(): RectShape;
    buildPath(ctx: CanvasRenderingContext2D, shape: RectShape): void;
    isZeroArea(): boolean;
}
export default Rect;
