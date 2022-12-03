<?php 

include('./conn.php');

$id = $_POST['idInput'];
$title = $_POST["txtTitle"];
$industry = $_POST["cbIndustria"];
$img = $_POST["txtImage"];
$company = $_POST["txtCompany"];
$ambientation = $_POST["cbAmbientacion"];
$release = $_POST["txtRelease"];
$dir = $_POST["txtDirector"];

$query = "UPDATE Catalogo SET 
`Name`='$title',
`picUrl`='$img',
`Industry`='$industry',
`Ambientation`='$ambientation',
`releaseDate`='$release',
`Company`='$company',
`Director`='$dir' 
WHERE Id = $id";

mysqli_query($conn,$query);

?>