<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$conn = new PDO('mysql:host=localhost; dbname=ReactCRUD', 'root', '');

$data = json_decode(file_get_contents('php://input'), true);