<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

$data = json_decode(file_get_contents('php://input'), true);
$offersFile = '../offers.json';
$currentOffers = json_decode(file_get_contents($offersFile), true);

$currentOffers['offers'][] = $data;

file_put_contents($offersFile, json_encode($currentOffers, JSON_PRETTY_PRINT));

echo json_encode(['success' => true]);
?>
