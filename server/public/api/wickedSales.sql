-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 27, 2019 at 10:12 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wickedSales`
--

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `fullName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `zip` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `card` varchar(16) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `checkout`
--

INSERT INTO `checkout` (`id`, `fullName`, `address`, `city`, `state`, `zip`, `card`) VALUES
(1, 'Nick Strebig', '123 Demo Lane', 'Laguna Beach', 'CA', '92677', '1234567891234567'),
(2, 'Testing', '4329 Irvine', 'Irvine', 'CA', '37266', '432837842'),
(3, 'Melissa D', '4300 Rancho', 'Mission Viejo', 'CA', '92588', '34285238922'),
(4, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '4444444444444444'),
(5, 'Form Validating', 'Testing Form Val', 'Woot', 'CA', '40293', '3543555534524213'),
(6, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '3837748274882847');

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` mediumint(9) NOT NULL,
  `image` varchar(30) NOT NULL,
  `shortDesc` text NOT NULL,
  `longDesc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`id`, `name`, `price`, `image`, `shortDesc`, `longDesc`) VALUES
(1, 'Shake Weight', 2999, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.'),
(3, 'Ostrich Pillow', 9900, 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.'),
(6, 'Snuggie', 2900, 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.'),
(7, 'Tater Mitts', 830, 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.'),
(8, 'ShamWow', 2595, 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.'),
(9, 'Wax Vac', 999, 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.'),
(10, 'Shake Weight', 2999, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checkout`
--
ALTER TABLE `checkout`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
