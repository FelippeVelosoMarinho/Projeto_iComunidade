<?php
header("Access-Control-Allow-Origin: *");
require_once('api.php');

$id=$_POST['id'];

if(empty($id)){
    echo json_encode(["message"=>"Não foi passado nenhum id"]);
} else {
    $sql="DELETE FROM `aluno` WHERE `id` = $id";

    $response = $conn->query($sql);

    if($response){
        echo json_encode(["message"=>"Aluno deletado com sucesso"]);
    } else {
        echo json_encode(["message"=>"Erro ao deletar aluno"]);
    }
}