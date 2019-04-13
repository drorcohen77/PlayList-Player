<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include "conn.php";


if (isset($_POST['playlist'])) {
    
    $playlist = json_decode($_POST['playlist']);
    
    $name = $playlist->playlist_name;
    $image = $playlist->playlist_image;
    $songs = $playlist->songs;


    $add_playlist="INSERT INTO playlists (playlist_name,playlist_image) VALUES ('$name','$image')";
    $result=mysqli_query($conn,$add_playlist) or die (mysqli_error($conn));
    
    $sql = "SELECT id FROM playlists WHERE playlist_name='$name'";
    $result1 = mysqli_query($conn,$sql) or die (mysqli_error($conn));
    $row = mysqli_fetch_assoc($result1);
    $id = $row['id'];
    
    foreach($songs as $index => $song) {
        
        $song_name = $songs[$index]->song_name;
        $url = $songs[$index]->song_url;
        
        if($song_name!="" || $url!="") {
        
            $add_song="INSERT INTO songs (song_name,mp3,playlist_id) VALUES ('$song_name','$url','$id')";
            $result2=mysqli_query($conn,$add_song) or die (mysqli_error($conn));
        }
    }
    
    
    echo json_encode($id);
}

?>