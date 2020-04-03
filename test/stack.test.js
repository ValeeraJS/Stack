import Stack from '../src/index';
import { expect, should } from 'chai';

describe('stack test', function () {

    let stackA = new Stack();
    let stackB = new Stack([1, 2, 3, 4, 5]);

    it('test constructor with params: ', function () {
        expect(stackA.size()).to.equal(0);
        expect(stackA.isEmpty()).to.equal(true);
        expect(stackB.size()).to.equal(5);
        expect(stackB.isEmpty()).to.equal(false);
    });

    it('test pop: ', function () {
        expect(stackA.pop().length).to.equal(0);
        expect(stackB.pop()[0]).to.equal(5);
        expect(stackB.pop(2)[1]).to.equal(3);
    });

    it('test peak: ', function () {
        expect(stackA.peek()).to.equal(undefined);
        expect(stackB.peek()).to.equal(2);
    });
    
    it('test clear: ', function () {
        expect(stackA.push(1).clear().size()).to.equal(0);
    });
    
    it('test toArray: ', function () {
        expect(stackA.push(1).toArray().length).to.equal(1);
    });
});