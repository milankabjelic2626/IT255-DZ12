<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');  
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("funkcije.php");
 
if(isset($_GET['id'])){
    echo getJednoJelo(intval($_GET['id']));
}
 
?>