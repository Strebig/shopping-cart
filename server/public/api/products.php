<?php
require_once('mysql_credentials.php');


header('Content-Type: application/json');

if (empty($_GET['id'])) {
  // $query = 'SELECT * FROM product_details';
  // $results = $conn->query($query);
  // return $results;
  readfile('dummy-products-list.json');
} else {
  readfile('dummy-product-details.json');
}

?>
