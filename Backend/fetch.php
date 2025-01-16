<?php

include 'db.php';

$id = $data['id'];

if($id) {
    $stmt = $conn->prepare('SELECT * FROM users WHERE id = :id');
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
} else {    
    $stmt = $conn->prepare('SELECT * FROM users');
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
}


echo json_encode($data);