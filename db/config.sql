-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

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

-- INSERT INTO `Users` (`id`,`username`,`password`) VALUES
-- ('','','');
-- INSERT INTO `Tours` (`id`,`image`,`title`,`price`,`rating`,`numReviews`,`description`,`duration`,`id_Guide`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Reviews` (`id`,`content`,`rating`,`title`,`id_Users`,`id_Tours`) VALUES
-- ('','','','','','');
-- INSERT INTO `travelers_tours` (`id`,`id_Users`,`id_Tours`) VALUES
-- ('','','');