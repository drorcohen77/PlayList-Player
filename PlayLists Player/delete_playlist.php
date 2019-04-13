<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include "conn.php";

if (isset($_POST['id'])) {
    $id=$_POST['id'];
   
    $delete="DELETE FROM playlists WHERE id='$id'";
    $result_delete=mysqli_query($conn,$delete) or die (mysqli_error($conn));
    
    $del_songs="DELETE FROM songs WHERE playlist_id='$id'";
    $result_del=mysqli_query($conn,$del_songs) or die (mysqli_error($conn));
    
    echo json_encode(true);
}

?>