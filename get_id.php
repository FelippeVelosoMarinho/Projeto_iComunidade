<?php
header("Access-Control-Allow-Origin: *");
require_once('api.php');

$id = $_POST['id'];

if(empty($id)){
    echo json_encode(["message"=>"Sem id válido"];)
} else {
    $sql = "SELECT * FROM aluno WHERE id = $id";

    $result = $conn->query($sql);
    $rows = array();

    if($response->num_rows > 0){
        foreach($response as $r){
            $rows[] = $r;
        }

        echo json_encode($rows);
    } else {
        echo json_encode(["message"=>"Nenhum aluno encontrado"]);
    }
}

?>