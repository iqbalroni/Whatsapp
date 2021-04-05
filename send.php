<?php

if(isset($_POST['kirim'])){
    $nama = $_POST['nama'];
    $pesan = $_POST['pesan'];

    header("Location:https://api.whatsapp.com/send?phone=6281230859677&text=Nama%20ku%20$nama%20,$pesan");
}

?>