// schema.js
import { decimal, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';

// Define a table for charging points
export const chargingPoints = pgTable('charging_points', {
  id: serial('id').primaryKey(),            // Auto-incremented ID
  name: text('name').notNull(),             // Charging point name
  latitude: decimal('latitude').notNull(),   // Latitude
  longitude: decimal('longitude').notNull(), // Longitude
  userId: uuid('user_id').notNull()         // User ID of the person who added it
});
