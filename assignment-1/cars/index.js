"use strict";
function make_car(manufacturer, model, ...options) {
    const obj = {
        manufacturer: manufacturer,
        model: model,
    };
    // let car_dict = {
    //     'manufacturer': manufacturer,
    //     'model': model,
    // }
    // for (option, value of options.items()) {
    //     car_dict[option] = value
    // }
    return obj;
}
// console.log(make_car('subaru', 'outback', color='blue', tow_package=True));
// console.log(make_car('honda', 'accord', year=1991, color='white',headlights='popup'))
console.log(make_car('subaru', 'outback'));
console.log(make_car('honda', 'accord'));
