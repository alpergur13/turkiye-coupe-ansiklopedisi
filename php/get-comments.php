<?php
include 'db.php';

// Hata raporlama için aktif et
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

// Araba ismini URL'den al
$car = isset($_GET['car']) ? $_GET['car'] : ''; // Eğer parametre yoksa boş string atanır

// Eğer geçerli bir araba ismi varsa, yorumları al
if ($car !== '') {
    try {
        $sql = "SELECT isim, yorum, tarih FROM yorumlar WHERE araba_isim = :car ORDER BY tarih DESC";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':car', $car, PDO::PARAM_STR);
        $stmt->execute();

        $yorumlar = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $yorumlar[] = $row;
        }

        // JSON formatında yorumları döndür
        echo json_encode($yorumlar);

    } catch (PDOException $e) {
        echo json_encode(["error" => "Veritabanı bağlantı hatası: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Geçersiz araba ismi"]);
}

// Veritabanı bağlantısını kapat
$conn = null;
?>