"use strict";
let playlist = ["Jazz", "Blues", "Rock"];
playlist.push("Pop");
alert(playlist);

playlist.splice(1, 1, "Classic");
alert(playlist);

alert(playlist.includes("Rock", 0));
alert(playlist);
playlist.shift();
alert(playlist);
for (let index = 0; index < playlist.length; index++) {
  const element = playlist[index];
  alert(element);
}
alert(playlist);
