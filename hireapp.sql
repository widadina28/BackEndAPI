-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2020 at 12:29 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hireapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id_account` int(11) NOT NULL,
  `name_account` varchar(255) NOT NULL,
  `email_account` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `role` enum('company','engineer','','') NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id_account`, `name_account`, `email_account`, `password`, `role`, `createAt`, `updateAt`) VALUES
(1, 'jaya_maju', 'maju@gmail.com', '$2a$10$XCyybsT6DgYAifjcuL5.DOddX.HkzyhG3zGali2dUw3W2TpSxMW5e', 'company', '2020-09-24 14:28:42', '2020-09-24 14:28:42'),
(2, 'maju_mundurcantik', 'majucantik@gmail.com', '$2a$10$g74C0IlAia2mOAMV.9QRhuwMaGfTBPuT6.08nztSki44uFWMWkOSG', 'company', '2020-09-24 14:30:02', '2020-09-24 14:30:02'),
(3, 'rasyihijab', 'rasyidah@gmail.com', '$2a$10$FX8hfCmkpCqY7u2QwfiKp.G6yaEOnXEJd52weauwDqfwSmo0ocFcG', 'company', '2020-09-24 14:38:15', '2020-09-24 14:38:15'),
(4, 'rosyida', 'rosyida@gmail.com', '$2a$10$Tbg8oiHDS8kPSu2z/h4KAu7xrqSSuZiaOBaKQRgRG5GS8dKjrQpu6', 'engineer', '2020-09-24 14:43:36', '2020-09-24 14:43:36'),
(5, 'toko buku pahlawan', 'pahlawan@gmail.com', '$2a$10$FiIyeu3yFPRSijUaGb95bu684mK4oFhzAP1nKevsPfm3UBwajzBX6', 'company', '2020-09-25 02:24:40', '2020-09-25 02:24:40');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `name_company` char(255) NOT NULL,
  `field` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `id_loc` int(50) NOT NULL,
  `description_company` varchar(535) NOT NULL,
  `instagram_company` char(50) NOT NULL,
  `telp_company` int(11) NOT NULL,
  `linkedin_company` char(50) NOT NULL,
  `image` varchar(535) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_account` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id_company`, `name_company`, `field`, `position`, `id_loc`, `description_company`, `instagram_company`, `telp_company`, `linkedin_company`, `image`, `createAt`, `updateAt`, `id_account`) VALUES
(1, 'PT MAJU', 'FINANCE', '', 1, 'PT maju mundur kalau ga mundur maju siap', '@majukuyah', 855555599, 'kuymaju12345', 'https://www.w3schools.com/w3css/img_lights.jpg', '2020-08-31 17:00:00', '2020-08-31 17:00:00', 1),
(2, 'PT MAJU BERSAMA', 'FINANCE', '', 1, 'PT maju mundur kalau ga mundur maju siap', '@majukuyah', 855555599, 'kuymaju12345', 'https://www.w3schools.com/w3css/img_lights.jpg', '2020-08-31 17:00:00', '2020-08-31 17:00:00', 2),
(3, 'TB Pahlawan', 'EDUCATION', '', 1, 'PT maju mundur kalau ga mundur maju siap', '@majukuyah', 855555599, 'kuymaju12345', 'https://www.w3schools.com/w3css/img_lights.jpg', '2020-08-31 17:00:00', '2020-08-31 17:00:00', 5),
(4, 'Rasyidah hijab', 'Fashion', 'HRD', 2, 'perusahaan hijab', '@rasyidah', 855555599, 'rasyidah123', 'image-1601134795989-back1.png', '2020-09-26 15:39:56', '2020-09-26 15:39:56', 3);

-- --------------------------------------------------------

--
-- Table structure for table `engineer`
--

CREATE TABLE `engineer` (
  `id_engineer` int(11) NOT NULL,
  `name_engineer` char(255) NOT NULL,
  `id_freelance` int(11) NOT NULL,
  `id_loc` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `rate` decimal(10,0) NOT NULL,
  `description_engineer` varchar(535) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createAt` timestamp NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('Freelance','Fulltime','','') NOT NULL,
  `id_account` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`id_engineer`, `name_engineer`, `id_freelance`, `id_loc`, `cost`, `rate`, `description_engineer`, `image`, `createAt`, `updateAt`, `status`, `id_account`) VALUES
(1, 'DinaUlyaRosyida', 2, 1, 5000000, '5', 'Semangat bekerja huha', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Freelance', 4);

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id_experience` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `position` char(255) NOT NULL,
  `company_name` char(255) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `description` varchar(535) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id_experience`, `id_engineer`, `position`, `company_name`, `start`, `end`, `description`) VALUES
(1, 1, 'data scientist', 'Tokopedia', '2017-05-01 00:00:00', '2019-01-01 00:00:00', 'ya gitu seru lah hehew'),
(5, 1, 'data analyst', 'Blibli', '2018-01-01 00:00:00', '2020-01-01 00:00:00', 'ya gitu seru lah hehew');

-- --------------------------------------------------------

--
-- Table structure for table `expertise`
--

CREATE TABLE `expertise` (
  `id_expertise` int(11) NOT NULL,
  `id_skill` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `expertise`
--

INSERT INTO `expertise` (`id_expertise`, `id_skill`, `id_engineer`) VALUES
(1, 3, 1),
(2, 1, 1),
(3, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `freelance`
--

CREATE TABLE `freelance` (
  `id_freelance` int(11) NOT NULL,
  `name_freelance` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `freelance`
--

INSERT INTO `freelance` (`id_freelance`, `name_freelance`) VALUES
(1, 'Data Analyst'),
(2, 'android developer'),
(3, 'Devops');

-- --------------------------------------------------------

--
-- Table structure for table `hire`
--

CREATE TABLE `hire` (
  `id_hire` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `description` varchar(535) NOT NULL,
  `price` int(11) NOT NULL,
  `status` enum('Confirmed','Pending','Reject','') NOT NULL,
  `confirm_date` datetime NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hire`
--

INSERT INTO `hire` (`id_hire`, `id_project`, `id_engineer`, `description`, `price`, `status`, `confirm_date`, `createAt`, `updateAt`) VALUES
(1, 1, 1, 'membuat website', 672342243, 'Confirmed', '2020-09-21 10:35:51', '2020-09-21 03:35:51', '2020-09-21 03:35:51'),
(2, 2, 1, 'membuat website', 672342243, 'Confirmed', '2020-09-21 10:35:51', '2020-09-21 03:35:51', '2020-09-21 03:35:51');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id_loc` int(11) NOT NULL,
  `name_loc` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id_loc`, `name_loc`) VALUES
(1, 'karawang'),
(2, 'Ponorogo'),
(3, 'Semarang'),
(4, 'Yogyakarta'),
(5, 'Bandung');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id_portofolio` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `aplication_name` char(255) NOT NULL,
  `link_repo` varchar(535) NOT NULL,
  `image` varchar(535) NOT NULL,
  `type_porto` enum('Mobile','Web','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id_portofolio`, `id_engineer`, `aplication_name`, `link_repo`, `image`, `type_porto`) VALUES
(1, 1, 'hiringapp', 'https://github.com/widadina28/Hipartner_and_UI', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 'Mobile'),
(2, 1, 'hiringapp', 'https://github.com/widadina28/Hipartner_and_UI', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 'Mobile'),
(3, 1, 'hiringapp', 'https://github.com/widadina28/Hipartner_and_UI', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 'Web'),
(4, 1, 'hiringapp', 'https://github.com/widadina28/Hipartner_and_UI', 'image-1601137016950-back1.png', 'Mobile');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `project_name` char(255) NOT NULL,
  `description` varchar(535) NOT NULL,
  `deadline` datetime NOT NULL,
  `image` varchar(535) NOT NULL,
  `id_company` int(11) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_project`, `project_name`, `description`, `deadline`, `image`, `id_company`, `createAt`, `updateAt`, `price`) VALUES
(1, 'Membuat website SD Mekar Jaya', 'website sekolah', '2020-09-28 10:06:37', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 1, '2020-09-28 03:06:37', '2020-09-28 03:06:37', 5000000),
(2, 'Membuat website SD Mekar Merona', 'website sekolah', '2020-09-28 10:06:37', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 2, '2020-09-28 03:06:37', '2020-09-28 03:06:37', 5000000),
(3, 'Membuat website SD Maju Mundur', 'website sekolah', '2020-09-28 10:06:37', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 3, '2020-09-28 03:06:37', '2020-09-28 03:06:37', 5000000),
(4, 'Membuat website SD Maju Lalala', 'website sekolah', '2020-09-28 10:06:37', 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/05/14/2533869461.jpg', 4, '2020-09-28 03:06:37', '2020-09-28 03:06:37', 5000000),
(5, 'Membuat website SD Maju Oke', 'website sekolah', '2020-09-28 10:06:37', 'image-1601137423395-back1.png', 4, '2020-09-26 16:23:43', '2020-09-26 16:23:43', 5000000);

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `name_skill` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id_skill`, `name_skill`) VALUES
(1, 'MYSQL'),
(2, 'C++'),
(3, 'Kotlin'),
(4, 'Javascript');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id_account`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`),
  ADD KEY `id_loc` (`id_loc`),
  ADD KEY `id_account` (`id_account`);

--
-- Indexes for table `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id_engineer`),
  ADD KEY `id_freelance` (`id_freelance`),
  ADD KEY `id_location` (`id_loc`),
  ADD KEY `id_account` (`id_account`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id_experience`),
  ADD KEY `id_engineer` (`id_engineer`);

--
-- Indexes for table `expertise`
--
ALTER TABLE `expertise`
  ADD PRIMARY KEY (`id_expertise`),
  ADD KEY `id_engineer` (`id_engineer`),
  ADD KEY `id_skill` (`id_skill`);

--
-- Indexes for table `freelance`
--
ALTER TABLE `freelance`
  ADD PRIMARY KEY (`id_freelance`);

--
-- Indexes for table `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`id_hire`),
  ADD KEY `id_project` (`id_project`),
  ADD KEY `id_engineer` (`id_engineer`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id_loc`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id_portofolio`),
  ADD KEY `id_engineer` (`id_engineer`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `id_company` (`id_company`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id_account` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `id_engineer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id_experience` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `expertise`
--
ALTER TABLE `expertise`
  MODIFY `id_expertise` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `freelance`
--
ALTER TABLE `freelance`
  MODIFY `id_freelance` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `hire`
--
ALTER TABLE `hire`
  MODIFY `id_hire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id_loc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id_portofolio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
