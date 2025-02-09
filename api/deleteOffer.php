<?php
header('Content-Type: application/json');

$id = $_GET['id'];
$offers = json_decode(file_get_contents('../offers.json'), true);

$offers = array_filter($offers, function($offer) use ($id) {
    return $offer['id'] != $id;
});

file_put_contents('../offers.json', json_encode(array_values($offers), JSON_PRETTY_PRINT));

echo json_encode(['success' => true]);
?>
