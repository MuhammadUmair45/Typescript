function make_shirt(size:string='large', message:string='I love Polo Shirts!'){
    console.log("\nI'm going to make a " + size + " t-shirt.")
    console.log('It will say, "' + message + '"')
}
    

make_shirt();
make_shirt('medium');
make_shirt('small', 'I love Round neck shirts!!');