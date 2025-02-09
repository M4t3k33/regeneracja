<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$method = $_SERVER['REQUEST_METHOD'];
$offersFile = '../offers.json';

switch($method) {
    case 'GET':
        echo file_get_contents($offersFile);
        break;
        
    case 'POST':
        $offers = json_decode(file_get_contents($offersFile), true);
        $newOffer = json_decode(file_get_contents('php://input'), true);
        $newOffer['id'] = time();
        $offers['offers'][] = $newOffer;
        file_put_contents($offersFile, json_encode($offers, JSON_PRETTY_PRINT));
        echo json_encode($newOffer);
        break;
        
    case 'DELETE':
        $id = basename($_SERVER['REQUEST_URI']);
        $offers = json_decode(file_get_contents($offersFile), true);
        $offers['offers'] = array_filter($offers['offers'], 
            fn($offer) => $offer['id'] != $id
        );
        file_put_contents($offersFile, json_encode($offers, JSON_PRETTY_PRINT));
        echo json_encode(['success' => true]);
        break;
}
?>
