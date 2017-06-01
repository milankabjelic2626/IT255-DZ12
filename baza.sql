-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 01, 2017 at 06:05 PM
-- Server version: 5.6.34
-- PHP Version: 7.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `it255-dz12`
--

-- --------------------------------------------------------

--
-- Table structure for table `jela`
--

CREATE TABLE `jela` (
  `id` int(11) NOT NULL,
  `nazivJela` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `cena` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `jela`
--

INSERT INTO `jela` (`id`, `nazivJela`, `cena`) VALUES
(3, 'sarma', 400),
(4, 'beloMeso', 500),
(5, 'baklava', 300),
(6, 'supica', 150),
(9, 'rolnice sa sirom', 350),
(12, 'sufle', 250),
(13, 'kroasan', 70),
(14, 'puding', 100),
(15, 'pecenje', 600);

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE `korisnici` (
  `id` int(11) NOT NULL,
  `ime` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `prezime` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `korisnickoIme` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lozinka` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `ime`, `prezime`, `korisnickoIme`, `lozinka`, `token`) VALUES
(40, 'Milica', 'Milic', 'mica', '2ac8fad6f031fbd733007ff97b9ffcc7', 'fc59cd37e0e28ec0bab2336c2a435c5bed7006c9'),
(41, 'Jovana', 'Jovanovic', 'Joca', 'bc05c19c7af213c3b7dd95a7662a4e8a', 'bb3b49a881d036ad0f0dbc2a46ad3a0924130473');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jela`
--
ALTER TABLE `jela`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jela`
--
ALTER TABLE `jela`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;