//DISPLAY ALL PLAYLIST ON 'DOM':

$(document).ready(function () {

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: 'http://localhost/PHP/JQUERY-AJAX_project/playlists.php',
        //                data: playlist,
        success: function (response) {
            playlists = response;

            if (response != 0) {
                print_playlists(playlists);
            } else {
                var empty = "";

                empty += "<div class='no-playlists'>";
                empty += "<h1>There isn't any playlist</h1>";
                empty += "<h1>Please click the add new button on the menue bar to create your first playlist</h1>";
                empty += "</div>";

                $(".main").html(empty);
            }
        },
        error: function (error) {
            console.log("error : ", error);
        }
    })
});


//SEARCH BUTTON:

$('#search').on('click', function () {
    str = "";
    print_playlists(playlists);
    console.log("ok");
});


$("#find").on('input', function () {

    var obj = $("#find").val();
    message = "";
    $("#msearch").html(message);

    if (obj) {

        if (obj.length > 2) {
            str = "";
            $.each(playlists, function (index, item) {
                if (item.playlist_name.indexOf(obj) !== -1) {

                    build_playlists(index, item);
                }
            });

            $(".main").html(str);
            $('.title').arctext({
                radius: 120
            });

            $("#curved_title span").css("margin-right", "1px");
        } else {

            message += "<div id='search_alert' class='alert alert-danger alert-dismissible fade in'>";
            message += "<div class='close' id='close_search' data-dismiss='alert' aria-label='close'>&times;</div>";
            message += "<strong>You Must Enter At Least 3 Characters!</strong>";
            message += "</div>";

            $("#msearch").html(message);
        }

    } else {
        str = "";
        print_playlists(playlists);
    }


    $('#close_search').on('click', function () {
        $("#find").val('');
        console.log("ok");
    });
    //    $("#find").val('');
});



function build_playlists(index, item) {

    str += "<div class='playlist' onmouseover='show(" + index + ")' onmouseout='hide(" + index + ")' id='playlist" + index + "'>";

    str += "<p class='title' id='curved_title'>";
    for (i = 0; i < item.playlist_name.length; i++) {
        str += `<span id='w${i}' class='w'>${item.playlist_name[i]}</span>`;
    }
    str += "</p>";

    str += "<div class=playlist_image>";
    str += "<img src='" + item.playlist_image + "' >";

    str += "<a href='#' class='remove' data-toggle='modal' data-target='#Modal-delete'>";
    str += "<button class='btn btn-default p_buttons' id='delete" + index + "' onclick='modal(" + index + ")'>";
    str += "<span class='glyphicon glyphicon-remove'></span>";
    str += "</button>";
    str += "<a />";

    str += "<a href='#' class='pencil' data-toggle='modal' data-target='#Modal-edit-playlist'>";
    str += "<button class='btn btn-default p_buttons' onclick='edit_playlist(" + index + ")'>";
    str += "<span class='glyphicon glyphicon-pencil'></span>";
    str += "</button>";
    str += "<a />";

    str += "<button class='btn btn-default play' onclick='play_playlist(" + index + ")'>";
    str += "<span class='glyphicon glyphicon-play'></span>";
    str += "</button>";

    str += "</div>";
    str += "</div>";

    return (str);
}


function print_playlists(playlists) {
    console.log(playlists);

    str = "";
    $.each(playlists, function (i, playlist) {

        build_playlists(i, playlist);
    });

    $(".main").html(str);
    $('.title').arctext({
        radius: 120
    });

    $("#curved_title span").css("margin-right", "1px");
}

function show(p) {
    console.log("1");
    $(`#playlist${p} .remove`).css("visibility", "visible");
    $(`#playlist${p} .pencil`).css("visibility", "visible");
    $(`#playlist${p} .play`).css("visibility", "visible");
}

function hide(p) {
    $(`#playlist${p} .remove`).css("visibility", "hidden");
    $(`#playlist${p} .pencil`).css("visibility", "hidden");
    $(`#playlist${p} .play`).css("visibility", "hidden");
}
