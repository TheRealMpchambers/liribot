require("dotenv").config();

//Possible variables needed for project completion

var spotSpot = require("node-spotify-api");
var keys = require("./key.js");

//Spotify was chosen as project

var oneSpot = new spotSpot(keys.spotify);

function spotSong(song) {
    if(song == "") {
        song = "Never Gonna Give You Up"
    }
    oneSpot.search({type: 'track', query: song, limit: 1}, function(err, data) {
        if (err) {
            return console.log("Damage Critical: " + err);
        }
        //want to shorten this part up find a way to combine
        console.log("-------------------------------------\n" + "The Big Hit: "+data.tracks.items[0].name + "\n-------------------------------------\n" 
        + "The singer and the rest of them: " +data.tracks.items[0].artists[0].name 
        +"\n-------------------------------------\n" + "This bunch of songs is called: "
        + data.tracks.items[0].name);
    });
}
if (process.argv[2]==="spotify-this-song") {
    var song = process.argv.slice(3).join(" ");
    spotSong(song);
};
