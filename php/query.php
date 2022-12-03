<?php 

include('./conn.php');

$query = "SELECT * FROM Catalogo";

$res = mysqli_query($conn,$query);

if ($res -> num_rows > 0) {
    echo json_encode(mysqli_fetch_all($res));
}

?>