<?php
	define('DB_SERVER', 'localhost');
	define('DB_USERNAME', 'root');
	define('DB_PASSWORD', 'root');
	define('DB_DATABASE', 'it255-dz10');
	header('Access-Control-Allow-Origin: *'); 
	$conn = new mysqli(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
	if ($conn->connect_error) {
   		die("Greska: " . $conn->connect_error);
	}
	if(isset($_POST['nazivjela']) && isset($_POST['cena']))
	{
		$nazivjela = $_POST("nazivjela");
		$cena = $_POST("cena");
		$stmt = $conn->prepare("INSERT INTO meni (nazivjela, cena) VALUES (?, ?)");
		$stmt->bind_param("ss", $nazivjela, $cena);
		$stmt->execute();
		echo "ok";
	}
?>