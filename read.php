<?php
header("Access-Control-Allow-Origin: *");
require_once('api.php');
$sql = "SELECT * FROM `aluno` ORDER BY `id` ASC";

$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    foreach($resultado as $row) {
        echo "<tr>";
            echo "<td>" . $row['nome'] . "</td>";
            echo "<td>" . $row['turma'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>
                    <button type='button' class='btn btn-success' onclick=getId('".$row['id']."')>Editar</button>
                    <button type='button' class='btn btn-danger' onclick=remove('".$row['id']."')>Excluir</button>
            </td>";
        echo "</tr>";
    } 
}else {
    echo ("");
}
?> 