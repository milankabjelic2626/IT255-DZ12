<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET');
	header("Content-type: application/json");
	include("funkcije.php");
	$ret = getAllJela();
	echo json_encode($ret)
?>