let playlists = [];
let playlist = {};
let songs = [];
var playlist_id = null;
var new_playlist_id = null;
var message = "";
var str = "";
var st = "";
var img = "<img src='' class='add_edit_img'>";
var play = ""; //for buid the player div 
var indexS = 0; //for identify current song playing
var Splayed = 0; //for identify last song played
var j = 4; //for add another song button
var z = 0; //for add another song button
var regImag = new RegExp(/[\/.](gif|jpg|jpeg|tiff|png)$/i);
var regAudio = new RegExp(/\.(?:wav|mp3)$/i);
//var regAudio = new RegExp("(http://)?(www)?[-a-zA-Z0-9@:%_\+.~#?\/=]+\.mp3");
var indexS = 0;
var counter = 1;
