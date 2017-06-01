<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');  
include("funkcije.php");
 
if(isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['korisnickoIme']) && isset($_POST['lozinka']))
{
    $ime = $_POST['ime'];
    $prezime = $_POST['prezime'];
    $korisnickoIme = $_POST['korisnickoIme'];
    $lozinka = $_POST['lozinka'];
    echo register($korisnickoIme,$lozinka,$ime,$prezime);
}
?>