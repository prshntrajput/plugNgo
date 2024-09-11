CREATE TABLE IF NOT EXISTS "charging_points" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"latitude" numeric NOT NULL,
	"longitude" numeric NOT NULL,
	"user_id" uuid NOT NULL
);
