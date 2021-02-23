import Path, { PathProps } from '../Path';
declare class StarShape {
    cx: number;
    cy: number;
    n: number;
    r0: number;
    r: number;
}
interface StarProps extends PathProps {
    shape?: Partial<StarShape>;
}
declare class Star extends Path<StarProps> {
    shape: StarShape;
    constructor(opts?: StarProps);
    getDefaultShape(): StarShape;
    buildPath(ctx: CanvasRenderingContext2D, shape: StarShape): void;
}
export default Star;
