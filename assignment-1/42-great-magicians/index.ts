function show_magicians(magicians: string[]) {
    
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function great_magician(magicians: string[]) {

    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i]+ " the great!!!"
    }
        
}

let magicians = ['Michael', 'Donald', 'Baker']
show_magicians(magicians)
great_magician(magicians)
show_magicians(magicians)