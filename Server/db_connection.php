<?php

    $dbhost = 'localhost';
    $dbusername = 'root';
    $dbpassword = 'root';
    $dbname = 'formal_assessment_one';

    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);

    $conn_err = $mysqli->$connect_error;

    if( $conn_err ) {
        echo "Failed to connect to database: " . $conn_err;
        exit();
    }
?>