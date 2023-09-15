"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function make_car(_a) {
    var items = __rest(_a, []);
    return items;
}
console.log(make_car({
    manufacturer: 'Honda',
    model: '2023'
}));
console.log(make_car({
    manufacturer: 'Honda',
    model: '2023',
    options: {
        handbrake: 'yes'
    }
}));
