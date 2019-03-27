<?php
/**
 * Created by PhpStorm.
 * User: stagiaire
 * Date: 17/09/2018
 * Time: 14:18
 */


$nom = isset($_POST['nom']) ? $_POST['nom'] : "";
$genre = isset($_POST['genre']) ? $_POST['genre'] : "";
$mail = isset($_POST['email']) ? $_POST['email'] : "";
$pays = isset($_POST['pays']) ? $_POST['pays'] : "";
$interet = isset($_POST['interet']) ? $_POST['interet'] : "";
$message = isset($_POST['mess']) ? $_POST['mess'] : "";

echo "
    <label>Nom: </label>\n".$nom."<br>
    <label>Genre: </label>\n".$genre."<br>
    <label>Email: </label>\n".$mail."<br>
    <label>Pays: </label>\n".$pays."<br>
    <label>Interet: </label>\n".$interet."<br>
    <label>Message: </label>\n".$message."<br>
";



$to      = 'kalidou2015@gmail.com';
$subject = 'php sendmail';
$message .= "
    <label>Nom: </label>\n".$nom."<br>
    <label>Genre: </label>\n".$genre."<br>
    <label>Email: </label>\n".$mail."<br>
    <label>Pays: </label>\n".$pays."<br>
    <label>Interet: </label>\n".$interet."<br>
    <label>Message: </label>\n".$message."<br>
";
$headers = 'From: acsDakar@gmail.com';

if (mail($to, $subject, $message, $headers)){
    echo "message envoyé";
} else {
    echo "message non envoyé";
}