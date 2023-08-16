<?php

header('Access-Control-Allow-Origin: *');

require_once('api.php');
session_start();

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$turma = $_POST['turma'];

<<<<<<< Updated upstream
$str = "SELECT * FROM aluno WHERE email = '$email'";

$response = $conn->query($str);

if ($response->num_rows > 0) {
    echo json_encode(["message"=>"Email já cadastrado"]);
} else {

        $sql = "INSERT INTO aluno(nome, email, senha, turma) VALUES('".$nome."', '".$email."', '".$senha."', '".$turma."')";

        $result = $conn->query($sql);

        if (!$result) {
            http_response_code(500);
            echo json_encode(["error" => "Erro ao cadastrar usuário"]);
        } else {
            http_response_code(200);
            echo json_encode(["success" => "Usuário cadastrado com sucesso"]);
        }
    }
=======
if(empty($nome) || empty($email) || empty($senha) || empty($turma)){
    http_response_code(400);
    echo json_encode(["error" => "Preencha todos os campos"]);
} else {
    $str = "SELECT * FROM aluno WHERE email = '$email'";

    $response = $conn->query($str);
    
    if ($response->num_rows > 0) {
        echo json_encode(["message"=>"Email já cadastrado"]);
    } else {
    
            $sql = "INSERT INTO aluno(nome, email, senha, turma) VALUES('".$nome."', '".$email."', '".$senha."', '".$turma."')";
    
            $result = $conn->query($sql);
    
            if (!$result) {
                http_response_code(500);
                echo json_encode(["error" => "Erro ao cadastrar usuário"]);
            } else {
                http_response_code(200);
                echo json_encode(["success" => "Usuário cadastrado com sucesso"]);
            }
        }
}

>>>>>>> Stashed changes
?>