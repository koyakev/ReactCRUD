<?php

include 'db.php';

$id = $data['id'];

$stmt = $conn->prepare('DELETE FROM users WHERE id = :id');
$stmt->bindParam(':id', $id);
$stmt->execute();