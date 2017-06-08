<?php
include("config.php");
 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
}
 
function checkIfLoggedIn(){
    global $conn;
    if(isset($_SERVER['HTTP_TOKEN'])){
        $token = $_SERVER['HTTP_TOKEN'];
        $result = $conn->prepare("SELECT * FROM korisnici WHERE token=?");
        $result->bind_param("s",$token);
        $result->execute();
        $result->store_result();
        $num_rows = $result->num_rows;
        if($num_rows > 0)
        {
            return true;
        }
        else{   
            return false;
        }
    }
    else{
        return false;
    }
}
 
function login($korisnickoIme, $lozinka){
    global $conn;
    $rarray = array();
    if(checkLogin($korisnickoIme,$lozinka)){
        $id = sha1(uniqid());
        $result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE korisnickoIme=?");
        $result2->bind_param("ss",$id,$korisnickoIme);
        $result2->execute();
        $rarray['token'] = $id;
    } else{
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
}
 
function checkLogin($korisnickoIme, $lozinka){
    global $conn;
    $lozinka = md5($lozinka);
    $result = $conn->prepare("SELECT * FROM korisnici WHERE korisnickoIme=? AND lozinka=?");
    $result->bind_param("ss",$korisnickoIme,$lozinka);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{   
        return false;
    }
}
 
function register($korisnickoIme, $lozinka, $ime, $prezime){
    global $conn;
    $rarray = array();
    $errors = "";
    if(checkIfUserExists($korisnickoIme)){
        $errors .= "Username already exists\r\n";
    }
    if(strlen($korisnickoIme) < 3 || $korisnickoIme == ""){
        $errors .= "Username must have at least 3 characters and cannot be empty\r\n";
    }
    if(strlen($lozinka) < 3 || $lozinka == ""){
        $errors .= "Password must have at least 3 characters and cannot be empty\r\n";
    }
    if(strlen($ime) < 3 || $ime == ""){
        $errors .= "First name must have at least 3 characters and cannot be empty\r\n";
    }
    if(strlen($prezime) < 3 || $prezime == ""){
        $errors .= "Last name must have at least 3 characters and cannot be empty\r\n";
    }
    if($errors == ""){
        $stmt = $conn->prepare("INSERT INTO korisnici (ime, prezime, korisnickoIme, lozinka) VALUES (?, ?, ?, ?)");
        $lozinka =md5($lozinka);
        $stmt->bind_param("ssss", $ime, $prezime, $korisnickoIme, $lozinka);
        if($stmt->execute()){
            $id = sha1(uniqid());
            $result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE korisnickoIme=?");
            $result2->bind_param("ss",$id,$korisnickoIme);
            $result2->execute();
            $rarray['token'] = $id;
        }else{
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = "Database connection error";
        }
    } else{
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }
    
    return json_encode($rarray);
}
 
function checkIfUserExists($username){
    global $conn;
    $result = $conn->prepare("SELECT * FROM korisnici WHERE korisnickoIme=?");
    $result->bind_param("s",$korisnickoIme);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{   
        return false;
    }
}
function getAllJela(){
	global $conn;
	$nazivJela = "SELECT * FROM jela";
	if($stmt = $conn->prepare($nazivJela)){
    	$stmt->execute();
		if(!$stmt->execute()){ 
        	echo $stmt->error.' in query: '.$nazivJela; 
		} else {
        	$parameters = array();
        	$result = $stmt->get_result();
        	while ($row = $result->fetch_assoc()) {
          		array_push($parameters,$row);
        	}
        	$stmt->close(); 
        	return $parameters;
    	}
    	$stmt->close();
  	}
}
function addJelo($nazivJela, $cena){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
		$stmt = $conn->prepare("INSERT INTO jela (nazivJela, cena) VALUES (?, ?)");
		$stmt->bind_param("sd", $nazivJela, $cena);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}

function deleteJelo($id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $result = $conn->prepare("DELETE FROM jela WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "ok";
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}

function editJelo($id, $nazivJela, $cena){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
		$stmt = $conn->prepare("UPDATE jela SET nazivJela=?, cena=? WHERE id=?");
		$stmt->bind_param("ssi", $nazivJela, $cena, $id);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}
function getJednoJelo($id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $jelo = array();
        $result2 = $conn->query("SELECT * FROM jela WHERE id=".$id);
        while($row = $result2->fetch_assoc()) {
            $jela['id'] = $row['id'];
            $jela['nazivJela'] = $row['nazivJela'];
            $jela['cena'] = $row['cena'];
        }
        $rarray['data'] = $jela;
        return json_encode($rarray);
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
return json_encode($rarray);
    }
}
?>