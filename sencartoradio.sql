-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 30 avr. 2020 à 03:09
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sencartoradio`
--

-- --------------------------------------------------------

--
-- Structure de la table `sencarto`
--

CREATE TABLE `sencarto` (
  `site_ID` int(11) NOT NULL,
  `site_name` varchar(50) DEFAULT NULL,
  `site_geo_address` varchar(50) DEFAULT NULL,
  `site_geo_ville` varchar(50) DEFAULT NULL,
  `site_geo_region` varchar(50) DEFAULT NULL,
  `site_geo_latitude` varchar(50) DEFAULT NULL,
  `site_geo_longitude` varchar(50) DEFAULT NULL,
  `site_NGF` varchar(5) DEFAULT NULL,
  `site_support_height` int(4) DEFAULT NULL,
  `site_support_type` varchar(50) DEFAULT NULL,
  `site_techno` varchar(30) DEFAULT NULL,
  `site_OPP` varchar(20) DEFAULT NULL,
  `site_antenna` varchar(40) DEFAULT NULL,
  `site_antenna_height` int(4) DEFAULT NULL,
  `site_antenna_number` int(4) DEFAULT NULL,
  `site_antenna_azimut` varchar(40) DEFAULT NULL,
  `site_antenna_directivity` varchar(10) DEFAULT NULL,
  `site_antenna_tilt` varchar(30) DEFAULT NULL,
  `site_antenna_frequency` varchar(30) DEFAULT NULL,
  `site_anntena_Transmit_power` int(10) DEFAULT NULL,
  `site_antenna_gain` varchar(30) DEFAULT NULL,
  `site_antenna_modulation_type` varchar(20) DEFAULT NULL,
  `site_antenna_polarization` varchar(4) DEFAULT NULL,
  `site_antenna_sensibility` varchar(40) DEFAULT NULL,
  `site_antenna_bandwidth` varchar(30) DEFAULT NULL,
  `site_antenna_modulation_diversity` varchar(20) DEFAULT NULL,
  `site_techno_date` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sencarto`
--

INSERT INTO `sencarto` (`site_ID`, `site_name`, `site_geo_address`, `site_geo_ville`, `site_geo_region`, `site_geo_latitude`, `site_geo_longitude`, `site_NGF`, `site_support_height`, `site_support_type`, `site_techno`, `site_OPP`, `site_antenna`, `site_antenna_height`, `site_antenna_number`, `site_antenna_azimut`, `site_antenna_directivity`, `site_antenna_tilt`, `site_antenna_frequency`, `site_anntena_Transmit_power`, `site_antenna_gain`, `site_antenna_modulation_type`, `site_antenna_polarization`, `site_antenna_sensibility`, `site_antenna_bandwidth`, `site_antenna_modulation_diversity`, `site_techno_date`) VALUES
(1, '', '', 'Bakel', 'Matam', '15.65587', '-13.25544', '80', 28, 'Polyone', 'TNT', 'TDS', '', 100, 18, '0/90/180/270', 'D', '', '', 500, '', '', 'H', '', '', '', '0000-00-00'),
(2, NULL, '97 Avenue Place 52, Dakar, Sénégal', 'Dakar', 'Dakar', '14.6937', '-17.44406', '80', 39, 'Immeuble', 'TNT', 'TDS', NULL, 115, 18, '45/1352/315', 'D', NULL, NULL, 100, NULL, NULL, 'H', NULL, NULL, NULL, NULL),
(3, NULL, NULL, 'Goudiry', 'Tambacounda', '13.77073', '-13.66734', '50', 64, 'Polyone', 'TNT', 'TDS', NULL, 80, 81, '0/90/180/270', 'D', NULL, NULL, 500, NULL, NULL, 'H', NULL, NULL, NULL, NULL),
(4, NULL, NULL, 'Kaffrine', 'Kaffrine', '14.10594', '-15.5508', '50', 16, 'Polyone', 'TNT', 'TDS', NULL, 81, 24, ' 0/90/180/270', 'ND', NULL, NULL, 1000, NULL, NULL, 'H', NULL, NULL, NULL, NULL),
(5, NULL, NULL, 'Kaolack ', 'Kaolack ', '14.1825', '-16.25333', '50', 8, 'Polyone', 'TNT', 'TDS', NULL, 210, 24, '0/90/180/270', 'ND', NULL, NULL, 1000, NULL, NULL, 'H', NULL, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `sencarto`
--
ALTER TABLE `sencarto`
  ADD PRIMARY KEY (`site_ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `sencarto`
--
ALTER TABLE `sencarto`
  MODIFY `site_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
