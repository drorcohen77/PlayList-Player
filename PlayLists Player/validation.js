//VALIDATION:

$(".close").on("click", function () {
    message = "";
    $(".name_massage").html(message);
    $(".url_massage").html(message);
    reset();
});

function add_edit_playlist_val(min) {
    message = "";

    message += "<div class='alert alert-danger alert-dismissible fade in playlist_alert'>";
    message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";

    if (min) {
        message += "<strong>You Must Enter At Least 3 Characters!</strong>";
    } else {
        message += "<strong>You Must Enter Playlist Name!</strong>";
    }

    message += "</div>";

    $(".name_massage").html(message);
}

function url_playlist_val() {
    message = "";
    $(".name_massage").html(message);

    if (!$("#edit_image_url").val() && !$("#image_url").val()) {

        message += "<div class='alert alert-danger alert-dismissible fade in playlist_alert'>";
        message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
        message += "<strong>You Must Enter URL For Image!</strong>";
        message += "</div>";
    } else {
        message += "<div id='search_alert' class='alert alert-danger alert-dismissible fade in playlist_alert'>";
        message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
        message += "<strong>You Must Enter URL That Ends With .jpg/.avi/.jpeg!</strong>";
        message += "</div>";
    }

    $(".url_massage").html(message);

}

//EDIT SONGS VALIDATION

function val_song_name(el) {
    message = "";

    message += "<div class='alert alert-danger alert-dismissible fade in song_alert'>";
    message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    message += "<strong>You Must Enter Song Name!</strong>";
    message += "</div>";

    $(`#group${el}`).html(message);
    $(`#group_s${el}`).html(message);
}

function val_song_url(el) {
    message = "";

    message += "<div class='alert alert-danger alert-dismissible fade in song_alert'>";
    message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    message += "<strong>You Must Enter URL That Ends With .mp3/.flac!</strong>";
    message += "</div>";

    $(`#group${el}`).html(message);
    $(`#group_s${el}`).html(message);
}

//ADD SONGS VALIDATION

function add_val_song_name(el) {
    message = "";

    message += "<div class='alert alert-danger alert-dismissible fade in song_alert'>";
    message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    message += "<strong>You Must Enter Song Name!</strong>";
    message += "</div>";

    $(`#a_group${el}`).html(message);
}

function add_val_song_url(el) {
    message = "";

    message += "<div class='alert alert-danger alert-dismissible fade in song_alert'>";
    message += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    message += "<strong>You Must Enter URL That Ends With .mp3/.flac!</strong>";
    message += "</div>";

    $(`#a_group${el}`).html(message);
}
