<?php
include "config.php";

$condition = "1";
if(isset($_GET['id'])){
   $condition = " id=".$_GET['id'];
}
$userData = mysqli_query($con,"SELECT * from users WHERE ".$condition);

$response = array();

while($row = mysqli_fetch_assoc($userData)){

   $response[] = $row;
}

echo json_encode($response);
exit;