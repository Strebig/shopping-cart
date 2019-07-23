<?php
function error_handler($error){
    http_response_code(500);
    $output = [
        "success" => false,
        "error" => $error -> getMessage()
    ];
    $json_output = json_encode($output);
    print($json_output);
}
set_exception_handler('error_handler');

function startup(){
    header('Content-Type: application/json');
}
?>