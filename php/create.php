<?php

include('./conn.php');

    $title = $_POST["txtTitle"];
    $industry = $_POST["cbIndustria"];
    $img = $_POST["txtImage"];
    $company = $_POST["txtCompany"];
    $ambientation = $_POST["cbAmbientacion"];
    $release = $_POST["txtRelease"];
    $dir = $_POST["txtDirector"];

$query = "INSERT INTO Catalogo(Name,picUrl, Industry, Ambientation, releaseDate, Company, Director) VALUES (
    '$title',
    '$img',
    '$industry',
    '$ambientation',
    '$release',
    '$company',
    '$dir'
    )";

    
mysqli_query($conn,$query);


?>