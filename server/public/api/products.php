<?php
require_once('mysql_credentials.php');

header('Content-Type: application/json');

$query = 'SELECT * FROM product_details';
$results = mysqli_query($conn, $query);

if (!$results) {
  throw new Exception (mysqli_error($conn));
}
$output = [];

while ($row = mysqli_fetch_assoc($results)) {
  $output[] = $row;
}

$json_output = json_encode($output);

if (empty($_GET['id'])) {
  print($json_output);
  // readfile('dummy-products-list.json');
} else {
  readfile('dummy-product-details.json');
}



?>
