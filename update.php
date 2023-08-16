<?php

header('Access-Control-Allow-Origin: *');
require_once('api.php');

$id = $_POST['id'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$turma = $_POST['turma'];

if(empty($nome) || empty($email) || empty($senha) || empty($turma)){
    http_response_code(400);
    echo json_encode(["error" => "Preencha todos os campos"]);
} else {
    $str = "UPDATE aluno SET nome = '".$nome."', email = '".$email."', senha = '".$senha."', turma = '".$turma."' WHERE id = '".$id."'";

    $response = $conn->query($str);
    
    if ($response === TRUE) {
        echo json_encode(["message"=>"Email já cadastrado"]);
    } else {
        echo json_encode(["message"=>"Erro ao cadastrar"]);
        }
}

?>