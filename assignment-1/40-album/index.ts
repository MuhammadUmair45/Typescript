function make_album(artist:string, title:string, tracks:number = 0) {
    type Dict = {
        artist:string,
        title:string,
        tracks?: number
    }
    
    const obj: Dict = {
        artist: artist,
        title: title,
    };
    if (tracks > 0) {
        obj.tracks = tracks
    }
    console.log(obj);
}

make_album('abc', 'abc abc abc');
make_album('def', 'def def def', 8);
make_album('xyz', 'xyz xyz xyz');