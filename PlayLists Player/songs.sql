-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: דצמבר 14, 2018 בזמן 08:11 AM
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
-- מבנה טבלה עבור טבלה `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `song_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mp3` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `playlist_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- הוצאת מידע עבור טבלה `songs`
--

INSERT INTO `songs` (`id`, `song_name`, `mp3`, `playlist_id`) VALUES
(55, 'd', 'd.mp3', 108),
(56, 's', 'v.mp3', 109),
(57, 'r', 'f.mp3', 110),
(58, 'g', 'm.mp3', 111),
(65, 'blac', 'black.mp3', 118),
(75, 'affffs', 'aaa.mp3', 128),
(78, 'f', 'f.mp3', 131),
(80, 'ddd', 'sdgdsgsd.mp3', 133),
(112, 'ffff', 'https://ia601607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond1t02.mp3', 147),
(113, 'ttrfee', 'https://ia601607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond1t02.mp3', 147),
(116, 'Black Sabbath', 'https://ia601607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond1t02.mp3', 1),
(117, 'Paranoid.mp3', 'https://ia801607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond1t04.mp3', 1),
(118, 'war pigs', 'https://ia801607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond3t03.mp3', 1),
(119, 'avsavvas', 'https://ia601607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond3t06.mp3', 1),
(120, 'wdwdwqd', 'https://ia801607.us.archive.org/32/items/TheRockCollection2017-03-25.sbdstagemicmatrix.flac/TheRockCollectiond3t07.mp3', 1),
(121, 'aaaaaa', 'https://ia801601.us.archive.org/14/items/RC2017-03-24.RockCollection2017-03-24.flac16/RockCollection2017-03-24d1T01.mp3', 1),
(122, 'vvvvvvvvv', 'https://ia801609.us.archive.org/22/items/RC2017-03-25.TheRockCollection2017-03-25.flac16/RockCollection2017-03-25d1T02.mp3', 1);

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
