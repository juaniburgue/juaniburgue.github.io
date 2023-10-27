
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $asunto = $_POST["asunto"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "radiodolores@hotmail.com";
    $asuntoCorreo = "Nuevo mensaje de contacto desde el sitio web de Radio Dolores";

    $mensajeCorreo = "Nombre: $nombre\n";
    $mensajeCorreo .= "Correo Electrónico: $email\n";
    $mensajeCorreo .= "Asunto: $asunto\n\n";
    $mensajeCorreo .= "Mensaje:\n$mensaje";

    // Enviar el correo electrónico
    mail($destinatario, $asuntoCorreo, $mensajeCorreo);

// Mostrar mensaje de confirmación
echo "<div class='alert alert-success' role='alert' style='text-align: center;'>
Mensaje enviado con éxito
</div>";
}
?>
