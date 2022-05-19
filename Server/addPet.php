<?php
    include 'db_connection.php';

    header( "Access-Control-Allow-Origin: * ");
    header( "Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents( 'php://input' );
    $data = json_decode( $request_body );

    $petName = $data->petName;
    $petSpecie = $data->petSpecie;
    $petGender = $data->petGender;
    $petAge = $data->petAge;
    $petMicroId = $data->petMicroId;
    $ownerName = $data->ownerName;
    $ownerId = $data->ownerId;
    $exOrigin = $data->exOrigin;
    $exDestination = $data->exDestination;

    $sql = "INSERT INTO `pets` (`id`, `pet_name`, `pet_specie`, `pet_gender`, `pet_age`, `pet_micro_id`, `owner_name`, `owner_id`, `ex_origin`, `ex_destination`) VALUES (NULL, '$petName', '$petSpecie', '$petGender', '$petAge', '$petMicroId', '$ownerName', '$ownerId', '$exOrigin', '$exDestination');";
    $result = mysqli_query( $conn, $sql );

    if( !$result ) {
        echo "Error Description: " . mysqli_error( $conn );
    } else {
        echo "All Good!";
    }
?>