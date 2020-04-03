/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var STACK_MAP = new WeakMap();
var data = [], tmp = [], i;
var Stack = /** @class */ (function () {
    function Stack(items) {
        if (items === void 0) { items = []; }
        STACK_MAP.set(this, []);
        this.push.apply(this, __spread(items));
    }
    Stack.prototype.clear = function () {
        STACK_MAP.set(this, []);
        return this;
    };
    Stack.prototype.push = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        data = STACK_MAP.get(this);
        elements.forEach(function (item) {
            data.push(item);
        });
        return this;
    };
    Stack.prototype.pop = function (count) {
        if (count === void 0) { count = 1; }
        data = [];
        tmp = STACK_MAP.get(this);
        count = Math.min(count, tmp.length);
        for (i = 0; i < count; i++) {
            data.push(tmp.splice(-1, 1)[0]);
        }
        return data;
    };
    Stack.prototype.peek = function () {
        data = STACK_MAP.get(this);
        return data[data.length - 1];
    };
    Stack.prototype.size = function () {
        return STACK_MAP.get(this).length;
    };
    Stack.prototype.isEmpty = function () {
        return STACK_MAP.get(this).length === 0;
    };
    Stack.prototype.toArray = function () {
        return __spread((STACK_MAP.get(this)));
    };
    return Stack;
}());

export default Stack;
