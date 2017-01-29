-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP DATABASE IF EXISTS `guideme`;

CREATE DATABASE `guideme`;

USE guideme;

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NULL DEFAULT NULL,
  `password` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Tours'
-- 
-- ---

DROP TABLE IF EXISTS `Tours`;
    
CREATE TABLE `Tours` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(200) NULL DEFAULT NULL,
  `title` VARCHAR(30) NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `rating` FLOAT NULL DEFAULT NULL,
  `numReviews` INTEGER NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `duration` VARCHAR(20) NULL DEFAULT NULL,
  `id_Guide` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Reviews'
-- 
-- ---

DROP TABLE IF EXISTS `Reviews`;
    
CREATE TABLE `Reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `content` MEDIUMTEXT NULL DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  `title` VARCHAR(50) NULL DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `id_Tours` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'travelers_tours'
-- 
-- ---

DROP TABLE IF EXISTS `travelers_tours`;
    
CREATE TABLE `travelers_tours` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `id_Tours` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Tours` ADD FOREIGN KEY (id_Guide) REFERENCES `Users` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `Reviews` ADD FOREIGN KEY (id_Tours) REFERENCES `Tours` (`id`);
ALTER TABLE `travelers_tours` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `travelers_tours` ADD FOREIGN KEY (id_Tours) REFERENCES `Tours` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Tours` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `travelers_tours` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `Users` (`username`,`password`) VALUES
('mark','mark');

INSERT INTO `Users` (`username`,`password`) VALUES
('alison','alison');


INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES
('https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg','Derping',125,3.2,0,'jdlafjdfad','afdd',1);

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES
('https://media-cdn.tripadvisor.com/media/photo-s/07/a1/76/6a/culture-and-cocktails.jpg','Larping',200,4.6,0,'dfadfdaf','adfd',2);

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES
('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8x_K4HtJY_cArGL5J9W8K_lp9wAkt0W1bk-8JZ_510IOjRdObdw','Durring',10,1.7,0,'durrrrrr','dfd',1);

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES

('https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg','Touring',500,4.1,0,'dfdaddaf','adadf',2);

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES
('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlgLESw2gqJmCdxhrITEvF0fsOnx-4MURivJHgE7BizCcvpeBeZA','Herping',10000,5.0,0,'dfadsfdskjfjaddaf','adsfad',1);

INSERT INTO `Tours` (`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES
('https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg','Visiting',999,0.7,0,'fadfdasfadsf','fdsafd',2);

-- INSERT INTO `Reviews` (`id`,`content`,`rating`,`title`,`id_Users`,`id_Tours`) VALUES
-- ('','','','','','');
-- INSERT INTO `travelers_tours` (`id`,`id_Users`,`id_Tours`) VALUES
-- ('','','');