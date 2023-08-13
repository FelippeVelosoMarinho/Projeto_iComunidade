<?php
$host = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$database = "icomunidade";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["username"];
    $password = $_POST["password"];

    $query = "SELECT * FROM aluno WHERE email = '$email' AND senha = '$password'";
    $result = $conn->query($query);

    if ($result->num_rows === 1) {
        $response = array("success" => true);
    } else {
        $response = array("success" => false);
    }

    echo json_encode($response);
}

$conn->close();
?>
