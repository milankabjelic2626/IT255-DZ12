<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');  
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
	include("funkcije.php");
	if(isset($_POST['nazivJela']) && isset($_POST['cena'])){ 
		$ime = $_POST['ime'];
		$cena = $_POST['cena'];
		echo addJelo($ime, $cena);
	}
?>