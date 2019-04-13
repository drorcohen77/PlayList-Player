        //PLAY PLAYLIST BUTTON:

        function play_playlist(num) {

            var pl_id = playlists[num].id;

            $.ajax({
                type: 'GET',
                datatype: 'json',
                url: 'http://localhost/PHP/JQUERY-AJAX_project/songs.php',
                data: 'id=' + pl_id,
                success: function (resp) {
                    songs = resp;

                    if (resp != 0) {
                        print_play_playlist(num);
                        $(document).prop('title', `${playlists[num].playlist_name}`);

                    } else {
                        alert(`there isn't any songs on playlist ${playlists[num].playlist_name}`);
                        $(document).prop('title', `${playlists[num].playlist_name}`);
                    }
                },
                error: function (error) {
                    console.log("error : ", error);
                }
            })
        }


        function print_play_playlist(id) {
            play = "";
            $(".audio").remove(play);

            play += "<div class='row audio'>";
            play += "<div class='col-lg-12'></div>";
            play += "<div class='col-lg-3'></div>";
            play += "<div class='col-lg-6' id='play'>";

            

            
play += "<div class='col-lg-1'></div>";
            play += "<div class='col-lg-10 main_play'>";
            play += `<p class='pl_name'>${playlists[id].playlist_name}</p>`;
            play += "<div class='col-lg-5 image'>";
            play += `<img id='player_img' src=${playlists[id].playlist_image}>`;
            play += "<button class='btn btn-default' id='play_playlist'>";
            play += "<span class='glyphicon glyphicon-pause'></span>";
            play += "</button>";
            play += "</div>";
            play += "<div class='col-lg-7 media'>";
            play += "<div class='col-lg-12 media_player'>";
            play += "<audio src='' controls id='audioplayer' crossOrigin='anonymous' onclick='play_pause()'>";

            play += "</audio>";
            play += "<p id='now_playing'>NOW PLAYING :<span id='song_name'></span></p>";

            play += "<ul class='list' style='list-style-type:none'>";

            $.each(songs, function (x, song) {

                play += `<li src='${songs[x].mp3}' class='song' id='song${x+1}' onclick='play_one_song(${x+1})' onmouseover='show_icon(${x+1})' onmouseout='show_num(${x+1})'><div class="btn" ><span class='num' id='inc${x+1}'>${x+1}. </span><span class='name' id='name${x+1}'> ${songs[x].song_name}</span></div></li>`;

            });

            play += "</ul>";
            play += "</div>";
            play += "</div>";
            play += "</div>";
            play += "<div class='col-lg-1 pl_buttons'>";
            
            play += "<button class='btn btn-default close' id='close_player' onclick='close_player()'>";
            play += "<span class='glyphicon glyphicon-remove'></span>";
            play += "</button>";
            
            play += "<a href='#' data-toggle='modal' data-target='#Modal-delete' id='del'>";
            play += "<button class='btn btn-default del' id='delete" + id + "' onclick='modal(" + id + ")' >";
            play += "<span class='glyphicon glyphicon-trash'></span>";
            play += "</button>";
            play += "<a/>";

            play += "<a href='#' data-toggle='modal' data-target='#Modal-edit-playlist' id='edit'>";
            play += "<button class='btn btn-default edit' onclick='edit_playlist(" + id + ")'>";
            play += "<span class='glyphicon glyphicon-pencil'></span>";
            play += "</button>";
            play += "<a/>";
            play += "</div>";
            play += "</div>";
            play += "<div class='col-lg-3'></div>";
            play += "</div>";
            play += "</div>";


            $("body").append(play);

            $(".main").css("top", "460px")

            $("#song_name").html(songs[0].song_name);

            $(`#song${1}`).css("opacity", "1.0");

            $(`#song${1} .btn`).append("<span class='glyphicon glyphicon-music'></span>");


            $("#play_playlist").on('click', function () {
                if (counter == songs.length) {
                    counter = 1;
                    console.log('ok');
                    indexS = 0;
                    $("#song_name").html(songs[indexS].song_name);
                    $(`#song${Splayed}`).css("opacity", "0.75");
                    $(`#song${indexS+1}`).css("opacity", "1.0");
                    $("#play_playlist").html("<span class='glyphicon glyphicon-pause'></span>");
                    $(`#song${Splayed} .btn .glyphicon-music`).remove();
                    $(`#song${indexS+1} .btn`).append("<span class='glyphicon glyphicon-music'></span>");


                    $("#audioplayer")[0].src = $(".list li")[indexS].getAttribute("src");
                    $("#audioplayer")[0].load();
                    $("#audioplayer")[0].play();

                    $("#player_img").css({
                        animation: "spin 2s linear infinite"
                    });

                } else {
                    console.log(counter);
                    if (!$("#audioplayer")[0].paused) {
                        $("#audioplayer")[0].pause();

                        $("#player_img").css({
                            "animation-play-state": "paused",
                            "-webkit-animation-play-state": "paused",
                            "-moz-animation-play-state": "paused",
                            "-o-animation-play-state": "paused"
                        });
                        var change = "<span class='glyphicon glyphicon-play'></span>";
                        $("#play_playlist").html(change);
                    } else {
                        $("#audioplayer")[0].play();
                        $("#player_img").css({
                            "animation-play-state": "running",
                            "-webkit-animation-play-state": "running",
                            "-moz-animation-play-state": "running",
                            "-o-animation-play-state": "running"
                        });
                        var change = "<span class='glyphicon glyphicon-pause'></span>";
                        $("#play_playlist").html(change);
                    }
                }
            });

            play_songs();
        }




        function close_player() {

            $(".audio").remove();
            $(".main").css("top", "140px")
        }


        function show_icon(icon) {

            if ($("#audioplayer")[0].src == $(".list li")[icon - 1].getAttribute("src")) {

                if ($("#audioplayer")[0].paused) {
                    console.log("pause");
                    $(`#inc${icon}`).html("<span class='glyphicon glyphicon-play'></span>");

                } else
                    $(`#inc${icon}`).html("<span class='glyphicon glyphicon-pause'></span>");
            } else
                $(`#inc${icon}`).html("<span class='glyphicon glyphicon-play'></span>");
        }


        function show_num(num) {
            $(`#inc${num}`).html(`<span class='num' id='inc${num}'>${num}.</span>`);
        }


        function play_pause() {

            if (!$("#audioplayer")[0].paused) {
                $("#player_img").css({
                    "animation-play-state": "paused",
                    "-webkit-animation-play-state": "paused",
                    "-moz-animation-play-state": "paused",
                    "-o-animation-play-state": "paused"
                });
                console.log("pause");
                $("#audioplayer")[0].play();
                var change = "<span class='glyphicon glyphicon-play'></span>";
                $("#play_playlist").html(change);
            } else {
                $("#audioplayer")[0].pause();
                $("#player_img").css({
                    "animation-play-state": "running",
                    "-webkit-animation-play-state": "running",
                    "-moz-animation-play-state": "running",
                    "-o-animation-play-state": "running"
                });
                console.log("play");
                var change = "<span class='glyphicon glyphicon-pause'></span>";
                $("#play_playlist").html(change);
            }
        }


        function play_songs() {

            Splayed = indexS;

            console.log(Splayed);
            $("#audioplayer")[0].src = $(".list li")[indexS].getAttribute("src");
            $("#audioplayer")[0].load();
            $("#audioplayer")[0].play();
            $("#audioplayer")[0].addEventListener("ended", function () {
                counter = indexS + 1;
                if (indexS + 1 < songs.length) {

                    indexS++
                    Splayed = indexS;
                    console.log(indexS);
                    $("#song_name").html(songs[indexS].song_name);
                    $(`#song${indexS}`).css("opacity", "0.75");
                    $(`#song${indexS+1}`).css("opacity", "1.0");
                    $(`#song${indexS} .btn .glyphicon-music`).remove();
                    $(`#song${indexS+1} .btn`).append("<span class='glyphicon glyphicon-music'></span>");

                    $("#audioplayer")[0].src = $(".list li")[indexS].getAttribute("src");
                    $("#audioplayer")[0].play();

                } else {
                    var change = "<span class='glyphicon glyphicon-play'></span>";
                    $("#play_playlist").html(change);
                    console.log("ok");
                    $("#player_img").css({
                        animation: "spin 0s"
                    });
                }
            });
        }


        function play_one_song(single) {

            $("#song_name").html(songs[single - 1].song_name);

            if ($("#audioplayer")[0].src != songs[single - 1].mp3) {
                $(`#song${single}`).css("opacity", "1.0");
                $(`#song${indexS+1}`).css("opacity", "0.5");
                $(`#song${indexS+1} .btn .glyphicon-music`).remove();
                $(`#song${single} .btn`).append("<span class='glyphicon glyphicon-music'></span>");
            }

            Splayed = single;
            indexS = single - 1;

            $("#audioplayer")[0].src = $(".list li")[single - 1].getAttribute("src");
            $("#audioplayer")[0].play();
            var change = "<span class='glyphicon glyphicon-pause'></span>";
            $("#play_playlist").html(change);
        }
