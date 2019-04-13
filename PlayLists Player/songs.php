<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
       
include "conn.php";

if(isset($_GET['id'])) {
    $id=$_GET['id'];
    
    $sql = "SELECT * FROM songs WHERE playlist_id='$id'";
    $result = mysqli_query($conn,$sql) or die (mysqli_error($conn));

    $songs=array();
    while($row = mysqli_fetch_assoc($result)) {
        $songs[] = $row;
    }   

    echo json_encode($songs);

}

?>