-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: דצמבר 14, 2018 בזמן 08:07 AM
-- גרסת שרת: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fullstack`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `playlist_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `playlist_image` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- הוצאת מידע עבור טבלה `playlists`
--

INSERT INTO `playlists` (`id`, `playlist_name`, `playlist_image`) VALUES
(1, 'Led Zeppelin', 'playlist_pic/led_zeppelin.jpeg'),
(118, 'black sabath', 'http://images2.fanpop.com/image/photos/12900000/Black-Sabbath-black-sabbath-12944133-800-634.jpg'),
(128, 'Deep Purple', 'https://overdrive-mag.com/wp-content/uploads/2017/10/Deep-Purple.jpg'),
(131, 'AC/DC', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGPCQt4WnFlFG0qJ-8cMcI303XiZGZwL_7NSSIt0RsmvfyDLWAA'),
(133, 'Iron Maiden', 'https://i.vimeocdn.com/portrait/4827895_300x300.jpg'),
(147, 'guns & roses', 'http://anband.spb.ru/images/200/DSC100285819.jpg');

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
