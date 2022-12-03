<?php 

$hostname = 'localhost';
$user = 'root';
$psswd = '';
$db = 'phpJsCRUD';

/* Create (if not exists) and connect DB */
$conn = mysqli_connect($hostname,$user,$psswd);

$query = 'CREATE DATABASE IF NOT EXISTS crud_db';
mysqli_query($conn,$query);
$conn = mysqli_connect($hostname,$user,$psswd,$db);


$query = 'CREATE TABLE IF NOT EXISTS Catalogo (
    Id int AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    picUrl VARCHAR(255) NOT NULL,
    Industry VARCHAR(50) NOT NULL,
    Ambientation VARCHAR(50) NOT NULL,
    releaseDate int,
    Company TEXT,
    Director VARCHAR(50),
    PRIMARY KEY(Id)
)';

mysqli_query($conn,$query);



?>