<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
if (empty($_POST['username']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
else{
// Define $username and $password
$username = $_POST['username'];
$password = $_POST['password'];
// mysqli_connect() function opens a new connection to the MySQL server.
$conn = mysqli_connect("localhost", "root", "", "fastag");
// SQL query to fetch information of registerd users and finds user match.
//$query = "SELECT username, password from login where username=? AND password=? LIMIT 1";
$query = "SELECT name, password from registration where name=? AND password=? LIMIT 1";
// To protect MySQL injection for Security purpose
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$stmt->bind_result($username, $password);
$stmt->store_result();
if($stmt->fetch()) //fetching the contents of the row {
$_SESSION['login_user'] = $username; // Initializing Session
header("location: index.php"); // Redirecting To Profile Page
}
mysqli_close($conn); // Closing Connection
}
?>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<title>Login </title>
	<link rel="stylesheet" a href="style1.css">
	<link rel="stylesheet" a href="css/fontAwesome.css">
</head>
<body >

	<div class="container">
			<form method="post" action="">
		<div class="form-input">
		<input type="text" name="username" placeholder="Enter the User Name"/>	
		</div>
		<div class="form-input">
		<input type="password" name="password" placeholder="password"/>
		</div>
	<input type="submit"  name="submit" type="submit" value="LOGIN" class="btn-login"/><br><br><br><br>
	<a href ="signup.php"input type="submit"  name="submit" type="submit" value="USER SIGNUP" class="btn-login"/>USER SIGNUP</a>
		</form>
	</div>
</body>
</html>
