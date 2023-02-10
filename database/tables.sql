CREATE TABLE `User` (
  `user_id` varchar(50) not null,
  `user_name` varchar(50),
  `first_name` varchar(50),
  `last_name` varchar(50),
  `password` varchar(50),
  `user_type` varchar(10),
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `Customer` (
  `id` int not null auto_increment,
  `user_id` varchar(50),
  `national_id` varchar(50),
  `license_number` varchar(50),
  `address` varchar(255),
  `mobile_number` varchar(12),
  `residence_number` varchar(12),
  `image` Blob,
  PRIMARY KEY (`id`),
  FOREIGN KEY(`user_id`) references User(`user_id`)
);

CREATE TABLE `Customer_Agent` (
  `id` int not null auto_increment,
  `agent_id` varchar(50),
  `customer_id` varchar(50),
  PRIMARY KEY (`id`),
  FOREIGN KEY(`agent_id`) references User(`user_id`),
  FOREIGN KEY(`customer_id`) references User(`user_id`)
);


CREATE TABLE `Vehicle` (
  `id` varchar(50) not null,
  `model` varchar(50),
  `number` varchar(10) not null,
  `user_id` varchar(50) not null,
  `chassis_number` varchar(50),
  `description` varchar(255),
  `image` Blob,
  PRIMARY KEY (`id`),
  FOREIGN KEY(`user_id`) references User(`user_id`)
);


CREATE TABLE `Claim` (
  `claim_id` varchar(50) not null,
  `user_id` varchar(50),
  `vehicle_id` varchar(50),
  `description` varchar(255),
  `number_plate_image` Blob,
  `images` Blob,
  `status` varchar(10),
  PRIMARY KEY (`claim_id`),
  FOREIGN KEY(`user_id`) references User(`user_id`),
  FOREIGN KEY(`vehicle_id`) references Vehicle(`id`)
);


CREATE TABLE `Estimation` (
  `id` varchar(50) not null,
  `claim_id` varchar(50),
  `estimate_value` float,
  `estimate_image` Blob,
  `garage_id` varchar(50),
  PRIMARY KEY (`id`),
  FOREIGN KEY(`claim_id`) references Claim(`claim_id`),
  FOREIGN KEY(`claim_id`) references User(`user_id`)
);

