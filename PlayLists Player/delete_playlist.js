//DELETE PLAYLIST BUTTON:

function modal(id) {
    console.log(id);
    console.log(playlists[id].playlist_name);
    $("#del_playlist").html(playlists[id].playlist_name);
    $("#delete").attr({
        onclick: "del_playlist(" + id + ")"
    });
}

//DELETE PLAYLIST MODAL:

function del_playlist(id) {

    var del_playlist_id = playlists[id].id;
    console.log(del_playlist_id);
    console.log(id);
    $.ajax({
        type: 'POST',
        datatype: 'json',
        url: 'http://localhost/PHP/JQUERY-AJAX_project/delete_playlist.php',
        data: 'id=' + del_playlist_id,
        success: function (response1) {
            console.log(response1);

            $("#Modal-delete").modal("hide");
            $("#playlist" + id).remove();
            console.log(playlists.length);
            playlists.splice(id, 1);
            print_playlists(playlists);
            console.log(playlists);
            console.log(playlists.length);
        },
        error: function (error) {
            console.log("error : ", error);
        }
    });

}
