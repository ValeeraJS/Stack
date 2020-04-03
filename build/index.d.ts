import IStack from "./interfaces/IStack";
export default class Stack<T> implements IStack<T> {
    constructor(items?: T[]);
    clear(): this;
    push(...elements: T[]): this;
    pop(count?: number): T[];
    peek(): T;
    size(): number;
    isEmpty(): boolean;
    toArray(): T[];
}
