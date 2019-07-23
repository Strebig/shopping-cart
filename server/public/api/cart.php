<?php
require_once('mysql_credentials.php');

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$item = file_get_contents('php://input');

if ($method == 'GET') {
    //This is used for getting
} 
else if ($method == 'POST') {

  http_response_code(201);
  print($item);

} 
else if ($method == 'DELETE') {  

    $id = $_GET['id'];
    $sql = "DELETE FROM `product_details` WHERE id = $id" ;
    $retval = mysqli_query( $conn, $sql );

    if(! $retval ) {
       die('Could not delete data: ' . mysqli_error());
    }

    echo $retval;
    mysqli_close($conn);
}
else {

  http_response_code(404);
  print(json_encode([
    'error' => 'Not Found',
    'message' => "Cannot $method /api/cart.php"
  ]));

}

?>