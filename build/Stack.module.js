const STACK_MAP = new WeakMap();
let data = [], tmp = [], i;
class Stack {
    constructor(items = []) {
        STACK_MAP.set(this, []);
        this.push(...items);
    }
    clear() {
        STACK_MAP.set(this, []);
        return this;
    }
    push(...elements) {
        data = STACK_MAP.get(this);
        elements.forEach(item => {
            data.push(item);
        });
        return this;
    }
    pop(count = 1) {
        data = [];
        tmp = STACK_MAP.get(this);
        count = Math.min(count, tmp.length);
        for (i = 0; i < count; i++) {
            data.push(tmp.splice(-1, 1)[0]);
        }
        return data;
    }
    peek() {
        data = STACK_MAP.get(this);
        return data[data.length - 1];
    }
    size() {
        return STACK_MAP.get(this).length;
    }
    isEmpty() {
        return STACK_MAP.get(this).length === 0;
    }
    toArray() {
        return [...(STACK_MAP.get(this))];
    }
}

export default Stack;
