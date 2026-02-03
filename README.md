# mini-message-board

A server-side rendered message board application built with Node.js and Express, featuring dynamic content delivery via EJS template. Use PostgreSQL for persistent storage and express-validator for secure, server-side data validation.

### Tech-stack
- **Runtime environment:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (via pg driver)
- **Template engine:** EJS
- **Validation:** Express-validator

### Features
- **Persistent Storage:** Messages are stored in a PostgreSQL database, ensuring data is saved even after server restarts.
- **Server-Side Rendering:** Utilizing EJS to dynamically generate HTML templates on the server.
- **Input Validation:** Robust server-side validation using express-validator to ensure message integrity and prevent empty submissions.
- **New Message Submission:** A "New Message" form that allows users to add message to the board in real-time.
- **Message Details:** Users can click on any message to view the message details.

### Getting started
1. *Clone and Install*
```
git clone git@github.com:navjotmaan/mini-message-board.git
cd mini-message-board
npm install
```
2. *Configure Environment Variables* Create a file named .env in the root directory and fill in your local PostgreSQL credentials:
```
DB_HOST=localhost
DB_USER=<your_postgres_username>
DB_PASSWORD=<your_postgres_password>
DB_DATABASE=<your_database_name>
DB_PORT=5432
```
3. *Initialize Database Schema* Run the following command to automatically create the messages table and seed initial data:
```
npm run setup
```

4. *Start the Server*
```
npm start
```