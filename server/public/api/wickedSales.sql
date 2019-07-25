-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 20, 2019 at 07:42 PM
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
(6, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '3837748274882847'),
(7, 'afsdgasdg', 'waefae', 'ca', 'AL', '32344', '3244444444444444'),
(8, 'atesitnia', 'afsknagkjdasng', 'cfadbjk', 'DE', '32444', '5323111111111111'),
(9, 'afdafdas', 'afdasdfa', 'afsdaf', 'AZ', '32422', '6666666666666666'),
(10, 'fasdfasd', 'afsdafdasf', 'fadsfa', 'AR', '32344', '4234423444444444'),
(11, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '2343444444444444'),
(12, 'Testing', '4329 Irvine', 'Irvine', 'CA', '37266', '3333333333333333'),
(13, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '1111111111111111'),
(14, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '3244234423442344'),
(15, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '9999999999999999'),
(16, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '4799879666666666'),
(17, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '4799879666666666'),
(18, 'Nick', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '1111111111111111'),
(26, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432092'),
(27, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432093'),
(28, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432093'),
(29, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432093'),
(30, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432093'),
(31, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432091'),
(32, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432092'),
(33, 'Testing', '4329 Irvine', 'Irvine', 'CA', '37266', '9384380182432098'),
(34, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432092'),
(35, 'Form', 'Testing Form Val', 'Woot', 'CA', '40293', '9384380182432091'),
(36, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432093'),
(37, 'Please work', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432090'),
(38, 'Please work', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432090'),
(39, 'Please work', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432090'),
(40, 'Please work', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432090'),
(41, 'Please work', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432090'),
(42, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432091'),
(43, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432092'),
(44, 'Testing Success', '123 Success Lane', '', 'AL', '84383', '9384380182432092'),
(45, 'Testing Success', '123 Success Lane', '', 'AL', '84383', '9384380182432092'),
(49, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432091'),
(50, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', ''),
(51, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432096'),
(52, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432096'),
(53, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '9384380182432033'),
(54, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432091'),
(55, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432093'),
(57, 'Testing', '4329 Irvine', 'Irvine', 'CA', '37266', '9384380182438885'),
(58, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432093'),
(59, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '9384380182432099'),
(60, 'Testing', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432055'),
(61, 'asdf', 'asdf', 'asdf', 'CA', '33444', '5555555555555555'),
(62, 'sdf', '333333333a', 'asdf', 'AR', '33333', '3333333333333333'),
(63, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432093'),
(64, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432093'),
(65, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432093'),
(66, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84383', '9384380182432092'),
(67, 'Testing Success', '123 Success Lane', 'Success', 'AL', '13344', '4345355543543444'),
(68, 'Testing Success', '123 Success Lane', 'Success', 'AL', '84385', '3334254532454254'),
(69, 'Testing', '9200 Irvine', 'Irvine', 'CA', '92655', '3333333333333333'),
(70, 'test', 'eafafawef', 'awfeaefwaf', 'AK', '44323', '9384380182432091');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `checkoutId` mediumint(8) UNSIGNED NOT NULL,
  `itemId` mediumint(8) UNSIGNED NOT NULL,
  `quantity` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `checkoutId`, `itemId`, `quantity`) VALUES
(14, 18, 6, 3),
(15, 19, 3, 4),
(16, 19, 6, 7),
(17, 20, 3, 4),
(18, 20, 6, 7),
(19, 21, 3, 4),
(20, 21, 6, 7),
(21, 22, 3, 4),
(22, 22, 6, 7),
(23, 23, 3, 4),
(24, 23, 6, 7),
(25, 24, 3, 2),
(26, 25, 3, 2),
(27, 26, 3, 1),
(28, 27, 3, 1),
(29, 28, 3, 1),
(30, 29, 3, 1),
(31, 30, 3, 1),
(32, 31, 3, 1),
(33, 32, 3, 1),
(34, 33, 3, 2),
(35, 34, 3, 4),
(36, 34, 6, 3),
(37, 35, 1, 2),
(38, 35, 3, 1),
(39, 35, 7, 4),
(40, 35, 8, 3),
(41, 36, 8, 2),
(42, 36, 9, 1),
(43, 37, 6, 2),
(44, 37, 3, 2),
(45, 38, 6, 2),
(46, 38, 3, 2),
(47, 39, 6, 2),
(48, 39, 3, 2),
(49, 40, 6, 2),
(50, 40, 3, 2),
(51, 41, 6, 2),
(52, 41, 3, 2),
(53, 42, 3, 1),
(54, 43, 8, 1),
(55, 44, 8, 1),
(56, 45, 8, 1),
(57, 46, 3, 2),
(58, 47, 3, 2),
(59, 48, 8, 3),
(60, 49, 8, 3),
(61, 50, 1, 2),
(62, 51, 1, 2),
(63, 52, 1, 2),
(64, 53, 3, 2),
(65, 54, 3, 3),
(66, 55, 8, 1),
(67, 56, 3, 1),
(68, 57, 3, 2),
(69, 57, 6, 3),
(70, 58, 6, 5),
(71, 58, 8, 250),
(72, 59, 6, 4),
(73, 59, 1, 200),
(74, 60, 1, 2),
(75, 60, 3, 400),
(76, 61, 6, 4),
(77, 62, 6, 1),
(78, 63, 3, 7),
(79, 63, 1, 1),
(80, 64, 3, 1),
(81, 65, 3, 1),
(82, 66, 7, 1),
(83, 67, 6, 100),
(84, 68, 3, 4),
(85, 68, 1, 100),
(86, 69, 6, 1),
(87, 70, 3, 1);

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
(1, 'Shake Weight', 2999, 'https://bit.ly/2JtVNE6', 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.', 'Shaking up the way you work out, the Shake Weight is a revolution in strength training. Boasting a legion of devotees who enthusiastically confirm the Shake Weight\'s claim that it shapes and tones the upper body, this product is hard to ignore. The way it works is this: a special pulsating dumbbell with dynamic inertia technology increases upper body muscle activity by 300 percent compared to traditional weights as you shake the 5-lb weight several different ways. This repetitive shaking stimulates muscle toning and adds shape to your upper arms, chest, and shoulders.The Upper Body Sculpting DVD shows you the proper way to use the Shake Weight so you see the most benefits. It works in only six minutes a day, though if you use it more often, you\'re likely to see results sooner.'),
(3, 'Ostrich Pillow', 9900, 'https://bit.ly/2VD80b8', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.', 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.'),
(6, 'Snuggie', 2900, 'https://bit.ly/2LVHYAk', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!', 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!'),
(7, 'Tater Mitts', 830, 'https://bit.ly/2w9EmzO', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.', '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.'),
(8, 'ShamWow', 2595, 'https://bit.ly/2w9C3Nm', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!', 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!'),
(9, 'Wax Vac', 999, 'https://bit.ly/2EjCU2a', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.', 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
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
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
--
-- AUTO_INCREMENT for table `product_details`
--
ALTER TABLE `product_details`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
