//EDIT PLAYLIST BUTTON:

//EDIT PLAYLIST MODAL:

$("#edit_image_url").keyup(function () {
    if ($("#edit_image_url").val()) {
        $("#edit_playlist").html(img);
        $("#edit_playlist img").prop('src', this.value);
    }
});

$("#edit_image_url").mouseleave(function () {
    if ($("#edit_image_url").val()) {
        $("#edit_playlist").html(img);
        $("#edit_playlist img").prop('src', this.value);
    }
});

function edit_playlist(p) {

    $("#update").attr({
        onclick: "update_playlist(" + p + ")"
    });

    $("#edit_name").val(playlists[p].playlist_name);
    $("#edit_image_url").val(playlists[p].playlist_image);
    $("#edit_playlist img").prop('src', playlists[p].playlist_image);
}

//UPDATE BUTTON:

function update_playlist(p_id) {
    playlist_id = playlists[p_id].id;

    if (!$("#edit_name").val())
        add_edit_playlist_val();
    else if ($("#edit_name").val().length < 3) {
        var min = 1;
        add_edit_playlist_val(min);
    } else if (!$("#edit_image_url").val())
        url_playlist_val();
    else {

        var new_name = $("#edit_name").val();
        var new_image = $("#edit_image_url").val();

        //                if (new_image.endsWith(".jpg") || new_image.endsWith(".jpeg")) {
        if (regImag.test(playlists[p_id].playlist_image)) {

            playlists[p_id].playlist_name = new_name;
            playlists[p_id].playlist_image = new_image;
            var n_playlist = playlists[p_id];

            $.ajax({
                type: 'POST',
                datatype: 'json',
                url: 'http://localhost/PHP/JQUERY-AJAX_project/edit_playlist.php',
                data: {
                    n_playlist: JSON.stringify(n_playlist)
                },
                success: function (response2) {
                    console.log(response2);

                    $("#Modal-edit-playlist").modal("hide");
                    $("#Modal-edit-songs").modal("show");

                    print_playlists(playlists);
                    edit_songs(response2);
                    reset();

                },
                error: function (error) {
                    console.log("error : ", error);
                }
            })
        } else
            url_playlist_val();
    }
}

//EDIT SONGS MODAL:

function edit_songs(songs) { //bring songs to inputs

    let str1 = "";

    $.each(songs, function (x, song) {
        z = x;

        str1 += "<div class='group_add'>";
        str1 += "<div class='form-group'>";

        str1 += "<label for='song_url' class='lable_edit'>Song URL:</label>";
        str1 += "<input type='text' name='song_url' size='40' class='form-control url_input' id='song_url" + x + "' placeholder='Enter Song Url' value='" + songs[x].mp3 + "'>";

        str1 += "<label for='song_name' class='lable_edit_name'>Name:</label>";
        str1 += "<input type='text' name='song_name' class='form-control name_input' id='song_name" + x + "' placeholder='Enter Song Name' value='" + songs[x].song_name + "'>";

        str1 += "</div>";
        str1 += `<span class='s_name_massage' id='group${x}'></span>`;
        str1 += "</div>";

    });

    $("#edit_song").html(str1);
}


$("#edit-song").on('click', function () { //create new songs for playlist
    z++;

    var add = "";

    add += "<div class='group_add'>";
    add += "<div class='form-group'>";
    add += "<label for='song_url' class='lable_edit'>Song URL:</label>";
    add += "<input type='text' name='song_url' size='40' class='form-control url_input' id='song_url" + z + "' placeholder='Enter Song Url' value=''>";

    add += "<label for='song_name' class='lable_edit_name'>Name:</label>";
    add += "<input type='text' name='song_name' class='form-control name_input' id='song_name" + z + "' placeholder='Enter Song Name' value=''>";
    add += "</div>";

    add += "<span class='s_name_massage' id='group_s" + z + "'></span>";
    add += "</div>";

    $("#edit_song").append(add);
    console.log(z);

});


//FINISH &SAVE BUTTON FOR EDIT SONG MODAL:

$("#update_songs").on('click', function () {

    edit_song_validation();
    console.log(songs);

    if (!message) {

        $.ajax({
            type: 'POST',
            datatype: 'json',
            url: 'http://localhost/PHP/JQUERY-AJAX_project/edit_songs.php',
            data: {
                songs: JSON.stringify(songs)
            },
            success: function (response3) {
                console.log(response3);
                $("#Modal-edit-songs").modal("hide");

                print_playlists(playlists);
                reset_song();
            },
            error: function (error) {
                console.log("error : ", error);
            }
        });
    }

});


function edit_song_validation() {
    message = "";
    console.log(message);
    songs = [];
    var song = {};
    var song_name = "";
    var song_url = "";
    var song_id = "";
    var url_flag = 0;

    $("#edit_song .group_add .form-group").each(function () {
        console.log($(this).find("input[name='song_url']").val());

        if ($(this).find("input[name='song_url']").val())
            url_flag = 1;
    });

    if (url_flag == 0)
        alert("You Must Enter At Least One URL");
    else {
        $("#edit_song .group_add .form-group").each(function (el, item) {

            song_url = $(this).find("input[name='song_url']").val();

            //                    if (song_url.endsWith(".mp3") || song_url.endsWith(".flac")) {
            if (regAudio.test(song_url) || song_url == "") {

                if (!$(this).find("input[name='song_name']").val() && song_url != "") {
                    val_song_name(el);

                } else {
                    
                    song_name = $(this).find("input[name='song_name']").val();
                                        
                    song = {
                        song_name: song_name,
                        song_url: song_url,
                        playlist_id: playlist_id
                    };
                    songs.push(song);
                }

            } else{
                val_song_url(el);
            }
        });
    }
    return songs
}
