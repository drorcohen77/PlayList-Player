<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
       
include "conn.php";

$sql = "SELECT * FROM playlists ";
$result = mysqli_query($conn,$sql) or die (mysqli_error($conn));

$playlist=array();
while($row = mysqli_fetch_assoc($result)) {
    $playlist[] = $row;
}   

echo json_encode($playlist);

?>
