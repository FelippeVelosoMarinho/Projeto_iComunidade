<?php
header('Access-Control-Allow-Origin: *');
// Conexão com o banco de dados
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'icomunidade';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

/*
if ($_GET['action'] === 'login') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM aluno WHERE nome = '$username' AND password = '$password'";
    $result = $conn->query($query);

    if ($result->num_rows === 1) {
        console_log("Login bem-sucedido");
        echo json_encode(['success' => true, 'message' => 'Login bem-sucedido']);
    } else {
        console_log("Nome de usuário ou senha incorretos");
        echo json_encode(['success' => false, 'message' => 'Nome de usuário ou senha incorretos']);
    }
}

// Endpoint para buscar dados
if ($_GET['action'] === 'get_data') {
    $result = $conn->query("SELECT * FROM aluno");
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
}

// Fechando a conexão
$conn->close();
*/
?>
