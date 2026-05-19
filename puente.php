<?php
if(isset($_GET['uid'])) {
    $uid = $_GET['uid'];

    $url = "http://jseguro.gamer.gd/guardar.php?uid=" . $uid;

    $response = file_get_contents($url);

    echo "Reenviado: " . $response;
} else {
    echo "Sin UID";
}
?>