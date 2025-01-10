<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $isim = htmlspecialchars($_POST['isim']);
    $yorum = htmlspecialchars($_POST['yorum']);
    $araba_isim = htmlspecialchars($_POST['araba_isim']); // Araba ismini al

    // Parametrelerin dolu olup olmadığını kontrol et
    if (!empty($isim) && !empty($yorum) && !empty($araba_isim)) {
        try {
            // Yorumları arabaya özel ekle
            $sql = "INSERT INTO yorumlar (isim, yorum, araba_isim) VALUES (:isim, :yorum, :araba_isim)";
            $stmt = $conn->prepare($sql);
            $stmt->execute([':isim' => $isim, ':yorum' => $yorum, ':araba_isim' => $araba_isim]);

            echo "success";
        } catch (PDOException $e) {
            echo "Hata: " . $e->getMessage(); // Hata mesajını döndür
        }
    } else {
        echo "Hata: Lütfen tüm alanları doldurduğunuzdan emin olun."; // Hata mesajı
    }
}
?>