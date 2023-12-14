<?php

include 'conexion_be.php';

$nombre_completo = $_POST("nombre_completo");
$correo = $_POST("correo");
$usuario = $POST("usuario");
$contraseña = $_POST("contraseña");

$query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contraseña) 
VALUES('$nombre_completo', '$correo', '$usuario','$contraseña')";

$ejecutar = mysqli_query($conexion, $query);

?>