<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include "conn.php";

   

if (isset($_POST['songs'])) {
    
    $songs = json_decode($_POST['songs']);
       
    $id = $songs[0]->playlist_id;
    
    foreach($songs as $index => $song) {
        $new_songs[]=$songs[$index];
    }
    
       
    $del_songs="DELETE FROM songs WHERE playlist_id='$id'";
    $result_del=mysqli_query($conn,$del_songs) or die (mysqli_error($conn));
       
    
    foreach($songs as $item => $new_song) {
        
        $song_name = $songs[$item]->song_name;
        $url = $songs[$item]->song_url;
        $playlist_id = $songs[$item]->playlist_id;
        
        if($song_name!="" || $url!="") {
        
            $add_song="INSERT INTO songs (song_name,mp3,playlist_id) VALUES ('$song_name','$url','$playlist_id')";
            $result2=mysqli_query($conn,$add_song) or die (mysqli_error($conn));
        }
    }

       
echo json_encode(true);

}

?>
