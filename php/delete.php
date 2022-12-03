<?php 

include('./conn.php');

$id = $_POST['id'];

$query = "DELETE FROM Catalogo WHERE Id = $id";

mysqli_query($conn,$query);


?>