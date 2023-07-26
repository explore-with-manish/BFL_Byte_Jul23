export interface IPoint {
    getDistance(): number;
}

export class Point implements IPoint {
    constructor(private _x: number, private _y: number) { }

    getDistance(): number {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
}