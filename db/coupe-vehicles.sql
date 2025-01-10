-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2025 at 07:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yorum-sistemi`
--

-- --------------------------------------------------------

--
-- Table structure for table `yorumlar`
--

CREATE TABLE `yorumlar` (
  `id` int(11) NOT NULL,
  `isim` varchar(255) NOT NULL,
  `yorum` text NOT NULL,
  `araba_isim` varchar(255) NOT NULL,
  `tarih` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `yorumlar`
--

INSERT INTO `yorumlar` (`id`, `isim`, `yorum`, `araba_isim`, `tarih`) VALUES
(3, 'ad', 'adddd', 'BMW 4 Coupe', '2025-01-07 13:23:32'),
(4, 'Elif Beller', 'Bu araçtan bende de var çok güzel bir araç.', 'Hyundai Coupe', '2025-01-07 13:30:33'),
(5, 'alper', 'Drago', 'Hyundai Coupe', '2025-01-07 13:31:14'),
(6, 'asd', 'ddddddddd', 'Hyundai Coupe', '2025-01-07 13:34:53'),
(7, 'Ahmet Gür', 'Bu tarz arabaların türkiyede tutmadığını düşünüyorum.', 'Hyundai Coupe', '2025-01-07 14:18:21'),
(8, 'Ahmet Gür', 'Bu tarz arabaların türkiyede tutmadığını düşünüyorum.', 'Hyundai Coupe', '2025-01-07 14:18:59'),
(9, 'asd', 'asd', 'Hyundai Coupe', '2025-01-07 14:22:42'),
(10, 'as', 'as', 'Hyundai Coupe', '2025-01-07 14:25:06'),
(11, 'Alper', 'Bu araçlar maalesef Türkiyede çok pahalı.', 'Mercedes-Benz C Coupe', '2025-01-07 16:11:19'),
(12, 'Hasan G.', 'Burada yazan fiyat maalesef doğru değil ama kaliteli araba.', 'Ford Mustang', '2025-01-10 12:22:49'),
(13, 'Elif Beller', 'Düz araba çok beğenmedim, keşke elektrikli olsaydı.', 'Audi A5 Coupe', '2025-01-10 14:13:09'),
(14, 'Elif Beller', 'Çok iyi\r\n', 'BMW 4 Coupe', '2025-01-10 15:06:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `yorumlar`
--
ALTER TABLE `yorumlar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `yorumlar`
--
ALTER TABLE `yorumlar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
