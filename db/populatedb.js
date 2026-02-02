require('dotenv').config(); 
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Navjot', 'This is a mini message board project. It uses Express, EJS, and PostgreSQL.', NOW()),
  ('Brendan', 'Today is a good day.', NOW()),
  ('Amando', 'Hi there!', NOW()),
  ('Jason', 'Hi! How are you? What are you doing today? Have you seen any new movie, drama or series? Have you read any new books?', NOW()),
  ('Charles', 'Click me!', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Table created and seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();