"use strict";
function make_album(artist, title, tracks = 0) {
    const obj = {
        artist: artist,
        title: title,
    };
    if (tracks > 0) {
        obj.tracks = tracks;
    }
    console.log(obj);
}
make_album('abc', 'abc abc abc');
make_album('def', 'def def def', 8);
make_album('xyz', 'xyz xyz xyz');
