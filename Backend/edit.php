<?php

include 'db.php';

$id = $data['id'];
$newName = $data['newName'];
$newEmail = $data['newEmail'];

$stmt = $conn->prepare('UPDATE users SET name = :newName, email = :newEmail WHERE id = :id');
$stmt->bindParam(':newName', $newName);
$stmt->bindParam(':newEmail', $newEmail);
$stmt->bindParam(':id', $id);
$stmt->execute();