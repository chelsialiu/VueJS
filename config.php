<?php     
session_start();
//if (session_status() == PHP_SESSION_NONE) {
//if(!PHP_SESSION_ACTIVE){
//    session_start();
//}
//header('Content-Type: text/html; charset=utf-8');

//$dbhost = "localhost";
//$dbuser = "";
//$dbpass = "";
    
$dbhost = "localhost";
$dbuser = "dancetracku";
$dbpass = "Blu3b3rry3.14";
$dbname = "patrack";

//$pdo = new PDO('mysql:dbname=morgan;host=localhost', '', '',
//       array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
mysqli_set_charset($conn, 'utf8');
if(mysqli_connect_errno()) {
    die("Database connection failed: " . mysqli_connect_error() . " ( " . mysqli_connect_errno() . ")");
}

// $host = "localhost";
// $user = "root";
// $password = "";
// $dbname = "patrack";

// $con = mysqli_connect($host, $user, $password,$dbname);
// // Check connection
// if (!$con) {
//   die("Connection failed: " . mysqli_connect_error());
// }
?>