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
$cart = $_POST['cart'];

$query = "INSERT INTO `checkout` (`fullName`, `address`, `city`, `state`, `zip`, `card`)
VALUES ('$fullName', '$address', '$city', '$state', '$zip', '$card')";

$result = mysqli_query($conn, $query);

if(!$result){
    print(mysqli_error($conn));
    exit();
}

$checkoutId = mysqli_insert_id ( $conn );
print_r($checkoutId);

foreach ( $cart as $item ) {
    $itemId = $item['id'];
    print_r($itemId);
    $quantity = $item['quantity'];
    print_r($quantity);
    $query = "INSERT INTO `orders` (checkoutId, itemId, quantity) VALUES ($checkoutId, $itemId,  $quantity)";
    $result = mysqli_query($conn, $query);
    if(!$result){
        print(mysqli_error($conn));
        exit();
    }
}

print(json_encode(
    [
        'result' => true,
    ]
));