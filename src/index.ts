import IStack from "./interfaces/IStack";

const STACK_MAP = new WeakMap();
let data: any[] = [];
let tmp: any[] = [];
let i: number;

export default class Stack<T> implements IStack<T> {
	public constructor(items: T[] = []) {
		STACK_MAP.set(this, []);
		this.push(...items);
	}

	public clear(): this {
		STACK_MAP.set(this, []);

		return this;
	}

	public push(...elements: T[]): this {
		data = STACK_MAP.get(this);
		elements.forEach((item: T) => {
			data.push(item);
		});

		return this;
	}

	public pop(count = 1): T[] {
		data = [];
		tmp = STACK_MAP.get(this);
		count = Math.min(count, tmp.length);
		for (i = 0; i < count; i++) {
			data.push(tmp.splice(-1, 1)[0]);
		}

		return data;
	}

	public peek(): T {
		data = STACK_MAP.get(this);

		return data[data.length - 1];
	}

	public size(): number {
		return STACK_MAP.get(this).length;
	}

	public isEmpty(): boolean {
		return STACK_MAP.get(this).length === 0;
	}

	public toArray(): T[] {
		return [...STACK_MAP.get(this)];
	}
}
