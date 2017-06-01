<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');  
include("funkcije.php");
 
if(isset($_POST['korisnickoIme']) && isset($_POST['lozinka'])){
    
$korisnickoIme = $_POST['korisnickoIme'];
$lozinka = $_POST['lozinka'];
echo login($korisnickoIme,$lozinka);
 
}
?>