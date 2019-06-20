<?php
require_once('mysql_credentials.php');
require_once('functions.php');
startup();
$input = file_get_contents('php://input');
$_POST = json_decode($input, true);

$fullName = $_POST['fullName'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$card = $_POST['card'];

//Add items & total price into table

$query = "INSERT INTO `checkout` (`fullName`, `address`, `city`, `state`, `zip`, `card`)
VALUES ('$fullName', '$address', '$city', '$state', '$zip', '$card')";

$result = mysqli_query($conn, $query);

if(!$result){
    print(mysqli_error($conn));
    exit();
}

print(json_encode(
    [
        'result' => true,
    ]
));