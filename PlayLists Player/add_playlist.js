//ADD PLAYLIST BUTTON:

//ADD PLAYLIST MODAL:

$("#add_s").on('click', function () {
    reset();
});

$("#image_url").keyup(function () {
    if ($("#image_url").val()) {
        $("#add_playlist").html(img);
        $("#add_playlist img").prop('src', this.value);
        $("#edit_playlist").html(img);
        $("#edit_playlist img").prop('src', this.value);
    }
});

$("#image_url").mouseleave(function () {
    if ($("#image_url").val()) {
        $("#add_playlist").html(img);
        $("#add_playlist img").prop('src', this.value);
        $("#edit_playlist").html(img);
        $("#edit_playlist img").prop('src', this.value);
    }
});

$("#add").on('click', function () {

    if (!$("#name").val())
        add_edit_playlist_val();
    else if ($("#name").val().length < 3) {
        var min = 1;
        add_edit_playlist_val(min);
    } else if (!$("#image_url").val())
        url_playlist_val();
    else {
        playlist = {};
        playlist.playlist_name = $("#name").val();
        playlist.playlist_image = $("#image_url").val();

        //                if (playlist.playlist_image.endsWith(".jpg") || playlist.playlist_image.endsWith(".jpeg")) {
        if (regImag.test(playlist.playlist_image)) {
            $("#Modal-add-playlist").modal("hide");
            $("#Modal-add-songs").modal("show");
        } else
            url_playlist_val();
    }
});


$(".reset").on('click', function () {
    console.log("ok");
    reset();
});


//ADD SONGS MODAL: 


$("#add-song").on('click', function () {

    var add = "";

    add += "<div class='group_add'>";
    add += "<div class='form-group'>";
    add += "<label for='song_url' class='song_label'>Song URL:</label>";
    add += "<input type='text' name='song_url' size='40' class='form-control' id='song_url" + j + "' placeholder='Enter Song Url' value=''>";

    add += "<label for='song_name' class='song_label_n'>Name:</label>";
    add += "<input type='text' name='song_name' class='form-control name_input_n' id='song_name" + j + "' placeholder='Enter Song Name' value=''>";
    add += "</div>";

    add += "<span class='s_name_massage' id='group" + j + "'></span>";
    add += "</div>";

    $("#add_song").append(add);

    j++;
});



$("#finish").on('click', function () {

    add_song_validation();

    if (!message && songs.length != 0) {
        playlist.songs = songs;

        playlists.push(playlist);

        $.ajax({
            type: 'POST',
            datatype: 'json',
            url: 'http://localhost/PHP/JQUERY-AJAX_project/add_playlist.php',
            data: {
                playlist: JSON.stringify(playlist)
            },
            success: function (res) {

                $("#Modal-add-songs").modal("hide");
                new_playlist_id = res;
                playlists[playlists.length - 1].id = new_playlist_id;

                print_playlists(playlists);
                reset_song();
            },
            error: function (error) {
                console.log("error : ", error);
            }
        });
    }
});


$("#add_song .group_add .form-group").each(function (e, elem) {

    $(this).mouseleave(function () {
        $(`#a_group${e}`).html("");
        song_url = $(this).find("input[name='song_url']").val();

        if (regAudio.test(song_url) == false)
            add_val_song_url(e);
    });

    $(this).keyup(function () {
        $(`#a_group${e}`).html("");
        song_url = $(this).find("input[name='song_url']").val();

        if (regAudio.test(song_url) == false)
            add_val_song_url(e);
    });
});


function add_song_validation() {
    message = "";
    songs = [];
    var song = {};
    var song_name = "";
    var song_url = "";
    var url_flag = 0;

    $("#add_song .form-group").each(function () {

        if ($(this).find("input[name='song_url']").val())
            url_flag = 1;
    });

    if (url_flag == 0)
        alert("You Must Enter At Least One URL");
    else {
        $("#add_song .group_add .form-group").each(function (el, item) {

            song_url = $(this).find("input[name='song_url']").val();

            //                    if (song_url.endsWith(".mp3") || song_url.endsWith(".flac")) {
            if (regAudio.test(song_url) || song_url == "") {

                if (!$(this).find("input[name='song_name']").val() && song_url != "") {
                    add_val_song_name(el);
                    console.log("name" + el);
                } else {
                    song_name = $(this).find("input[name='song_name']").val();

                    song = {
                        song_name: song_name,
                        song_url: song_url
                    };
                    songs.push(song);
                }

            } else {
                console.log("url" + el);
                add_val_song_url(el);
            }
            //            return false;
        });
    }
    return songs
}
