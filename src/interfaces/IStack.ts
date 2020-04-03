export default interface IStack<T> {
    isEmpty: () => boolean;
    size: () => number;
    pop: () => T[];
    peek: () => T;
    push: () => this;
    toArray: () => T[]; 
}