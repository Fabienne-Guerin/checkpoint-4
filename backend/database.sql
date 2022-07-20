-- phpMyAdmin SQL Dump

-- version 4.5.4.1deb2ubuntu2

-- http://www.phpmyadmin.net

--

-- Client :  localhost

-- Généré le :  Jeu 26 Octobre 2017 à 13:53

-- Version du serveur :  5.7.19-0ubuntu0.16.04.1

-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!40101 SET NAMES utf8mb4 */

;

--

-- Base de données :  `simple-mvc`

--

-- --------------------------------------------------------

--

-- Structure de la table `item`

CREATE DATABASE IF NOT EXISTS `coffeeshop`;

DROP TABLE IF EXISTS `product`;

DROP TABLE IF EXISTS `category`;

- -- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `category` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `label` VARCHAR(80) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `product`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `product` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(80) NOT NULL,
        `description` VARCHAR(200) NOT NULL,
        `price` INT NOT NULL,
        `category_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
    ) ENGINE = InnoDB;

insert into `category` (label)
VALUES ("boisson"), ("patisserie");

insert into
    `product` (
        name,
        description,
        price,
        category_id
    )
VALUES (
        "expresso",
        "café très corsé avec un fort arôme, obtenu par percolation sous haute pression",
        2,
        1
    ), (
        "cappuccino",
        "préparation, à base de café expresso, mélangé avec du lait et coiffé d'une mousse de lait crémeuse et sucré",
        4,
        1
    ), (
        "latte macchiatto",
        "boisson qui se compose de couches successives de lait tiède, de café espresso, et de mousse de lait",
        4,
        1
    ), (
        "café frappé",
        "le café frappé est préparé avec du café instantané et se boit frais avec une paille et des glaçons",
        4,
        1
    ), (
        "thé",
        "boisson aromatique préparée par infusion des feuilles séchées du théier",
        3,
        1
    ), (
        "chocolat chaud",
        "la boisson chaude est réalisée avec des carrés de chocolat et du lait chaud",
        4,
        1
    ), (
        "muffin",
        "l'incontournable gateau se décline en version chocolat, caramel ou myrtille",
        4,
        2
    ), (
        "donut",
        "beignet fourré (framboise ou chocolat) et recouvert d'un glaçage",
        4,
        2
    ), (
        "part de tarte",
        "tarte aux pommes, au citron, aux framboises ou la fameuse pecan pie",
        3,
        2
    ), (
        "fondant au chocolat",
        "gâteau au chocolat à la texture fondante",
        3,
        2
    ), (
        "viennoiserie",
        "croissant, pain au chocolat ou pain aux raisins",
        2,
        2
    );