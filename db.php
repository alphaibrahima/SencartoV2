<?php

$server_name = "localhost";
$user        = "dich1637_alphasow";
$pass_word   = "cG9r7=)j@E1}";
$dbname      = "dich1637_sencartodb";

try{
$db = new PDO("mysql:host=$server_name; dbname=$dbname",$user,$pass_word);
// afficher les erreur
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
}catch(PDOExcetion $e){
    die("Echec connection ".$e->getMessage());
}

?>