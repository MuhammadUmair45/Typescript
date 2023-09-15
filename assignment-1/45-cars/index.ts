function make_car({...items}) {
    return items
}
console.log(make_car(
    {
        manufacturer: 'Honda',
        model: '2023'
    }
));
console.log(make_car(
    {
        manufacturer: 'Honda',
        model: '2023',
        options: {
            handbrake: 'yes'
        }
    }
));