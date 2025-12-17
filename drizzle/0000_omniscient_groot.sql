CREATE TABLE `presents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item` text NOT NULL,
	`fulfilled` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
