<?php
$servername = "localhost";
$host = "localhost";
$dbname = "yorum-sistemi";
$username = "root"; // Varsayılan kullanıcı adı
$password = ""; // Varsayılan şifre (genelde boş bırakılır)
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Hata raporlama
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Veritabanı bağlantı hatası: " . $e->getMessage());
}
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Hata mesajını JSON olarak döndür
    echo json_encode(['error' => 'Veritabanı bağlantı hatası: ' . $e->getMessage()]);
    exit; // Hata sonrası devam etme
}
?>