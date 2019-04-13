<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include "conn.php";

//$message="";
    
if (isset($_POST['n_playlist'])) {
    
    $playlist = json_decode($_POST['n_playlist']);
    
    $id = $playlist->id;
    $name = $playlist->playlist_name;
    $image = $playlist->playlist_image;
   
    
    $edit="UPDATE playlists SET playlist_name='$name',playlist_image='$image' WHERE id='$id'";
    $result_update=mysqli_query($conn,$edit) or die (mysqli_error($conn));
    
    $sql = "SELECT * FROM songs WHERE playlist_id='$id'";
    $result = mysqli_query($conn,$sql) or die (mysqli_error($conn));

    $songs=array();
        while($row = mysqli_fetch_assoc($result)) {
        $songs[] = $row;
    } 
    
    echo json_encode($songs);
}

?>
