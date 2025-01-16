<?php

include 'db.php';

$name = $data['name'];
$email = $data['email'];

$stmt = $conn->prepare('INSERT INTO users (name, email) VALUES (:name, :email)');
$stmt->bindParam(':name', $name);
$stmt->bindParam(':email', $email);
$stmt->execute();