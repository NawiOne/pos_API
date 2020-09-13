-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2020 at 04:58 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name_category` varchar(64) NOT NULL,
  `image_category` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name_category`, `image_category`) VALUES
(1, 'Appetizers', 'https://scrappygeek.com/wp-content/uploads/2016/07/Taco-Cup-Appetizers.jpg'),
(2, 'Main Dish', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2009%2F03%2Fst_916_fofish071196926_1-2000.jpg&q=85'),
(3, 'Dessert', 'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg'),
(4, 'Beverages', 'https://dev.rodpub.com/images/102/819_main.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `invoice` int(255) NOT NULL,
  `cashier` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `orders` varchar(255) NOT NULL,
  `amount` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`invoice`, `cashier`, `date`, `orders`, `amount`) VALUES
(1225, 'Ahmad Jazuli', '2020-08-01 14:34:34', 'ramen, cake', 120000),
(1229, 'Farhat Abis', '2020-08-01 14:36:02', 'ramen, sosis, mie ayam', 132000),
(1230, 'Joko Kuntjoro', '2020-08-02 01:04:21', 'choco rhum, nasi goreng, sushi, krabby patty', 120000);

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `level`) VALUES
(1, 'Admin'),
(2, 'Cashier');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `price` decimal(11,0) NOT NULL,
  `id_category` int(11) NOT NULL DEFAULT 45,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id_menu`, `name`, `picture`, `price`, `id_category`, `created_at`, `updated_at`) VALUES
(39, 'Sushi', 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20200702132805&q=80&rw=750&rh=536', '34000', 2, '2020-08-07 08:48:39', '2020-08-07 08:48:39'),
(40, 'Rendang', 'https://asset.kompas.com/crops/gi24VPQMhftubxYIWPJATjHrxTA=/0x0:1000x667/750x500/data/photo/2020/06/30/5efb0cb4a0226.jpg', '34000', 2, '2020-08-07 09:43:58', '2020-08-07 09:43:58'),
(45, 'Sosis ayam', 'https://asset-a.grid.id//crop/0x0:0x0/360x240/photo/2019/10/27/4214810606.jpg', '5000', 3, '2020-08-09 11:09:03', '2020-08-09 11:09:03'),
(48, 'Cake', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxZCUQ8CQ0tgkWIy6R6BpUxt8lzrj-tPqxcw&usqp=CAU', '76000', 2, '2020-08-09 11:21:46', '2020-08-09 11:21:46'),
(53, 'Pizza', 'https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg', '60000', 3, '2020-08-09 15:34:34', '2020-08-09 15:34:34'),
(54, 'Tempe mendoan', 'https://awsimages.detik.net.id/community/media/visual/2019/05/15/8fb58b7c-92e2-4905-8b44-983b669af652.jpeg?w=700&q=90', '1000', 3, '2020-08-09 16:03:42', '2020-08-09 16:03:42'),
(55, 'Mie Kebo', 'https://cdn.idntimes.com/content-images/community/2019/11/d7494f923183ca10d2c49a00d860be0c-f82befb2c444061a6debd5da8532d04b.jpg', '11000', 2, '2020-08-10 00:13:30', '2020-08-10 00:13:30'),
(56, 'Bakso', 'https://awsimages.detik.net.id/community/media/visual/2019/08/13/4d10c33e-c558-4c32-8b0a-baf65ba6f66a.jpeg?w=700&q=90', '10000', 2, '2020-08-10 08:54:50', '2020-08-10 08:54:50'),
(57, 'Kerupuk', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/08/03/3623507392.jpg', '2000', 3, '2020-08-10 09:30:48', '2020-08-10 09:30:48'),
(59, 'Krabby patty', 'https://loop.co.id/uploads/article/media_upload/20733/youtube.com.jpg', '12000', 2, '2020-08-10 11:40:48', '2020-08-10 11:40:48'),
(62, 'Martabak', 'http://localhost:8000/images/image-1597578943903.jpg', '17000', 4, '2020-08-16 18:55:44', '2020-08-16 18:55:44'),
(71, 'jeruk rebus', 'http://localhost:8000/images/image-1598806131177.jpg', '5000', 4, '2020-08-30 23:48:51', '2020-08-30 23:48:51'),
(72, 'jeruk rebus', 'http://localhost:8000/images/image-1598806308137.jpg', '5000', 4, '2020-08-30 23:51:48', '2020-08-30 23:51:48'),
(73, 'jeruk rebus', 'http://localhost:8000/images/image-1598806427842.jpg', '5000', 4, '2020-08-30 23:53:47', '2020-08-30 23:53:47'),
(74, 'nanas', 'http://localhost:8000/images/image-1598808712929.jpg', '1212', 2, '2020-08-31 00:31:52', '2020-08-31 00:31:52');

-- --------------------------------------------------------

--
-- Table structure for table `order_menu`
--

CREATE TABLE `order_menu` (
  `id_menu` int(255) DEFAULT NULL,
  `invoice` int(255) DEFAULT NULL,
  `quantity` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_menu`
--

INSERT INTO `order_menu` (`id_menu`, `invoice`, `quantity`) VALUES
(1, 1225, 5),
(4, 1229, 10),
(7, 1229, 12),
(9, 1230, 7);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(225) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_level` int(11) DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `id_level`) VALUES
(46, 'anna', '$2b$10$iYiy3.y.0YsuB.x3CytB7O7sZQdH38NGqtzs0xmRCdRRXNPv3JdmS', 2),
(47, 'nawirudin', '$2b$10$q4FQ1JhgAHp/CVK5We724.ToHHQxCpsrkqZ7N4CBs7vLV2vANqiwq', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_order`
--

CREATE TABLE `user_order` (
  `id` varchar(11) NOT NULL,
  `date` varchar(50) NOT NULL DEFAULT current_timestamp(),
  `name` varchar(244) NOT NULL,
  `orders` varchar(244) NOT NULL,
  `amount` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_order`
--

INSERT INTO `user_order` (`id`, `date`, `name`, `orders`, `amount`) VALUES
('1233', '2020-09-13 21:54:51', 'jazuli', 'jagung, keju', 12000),
('13213', '2020-09-13 21:54:51', 'nawi', 'dfdfd, nasi padang, vsdfkdf', 12000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`),
  ADD KEY `id_menu` (`id_menu`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`invoice`),
  ADD KEY `id_menu` (`cashier`(3072));

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_category_2` (`id_category`);

--
-- Indexes for table `order_menu`
--
ALTER TABLE `order_menu`
  ADD KEY `id_menu` (`id_menu`),
  ADD KEY `invoice` (`invoice`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_level` (`id_level`);

--
-- Indexes for table `user_order`
--
ALTER TABLE `user_order`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=413;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `invoice` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122346;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`);

--
-- Constraints for table `order_menu`
--
ALTER TABLE `order_menu`
  ADD CONSTRAINT `order_menu_ibfk_2` FOREIGN KEY (`invoice`) REFERENCES `history` (`invoice`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `level` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
