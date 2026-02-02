const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
    return rows;
}

async function insertMessage(username, text) {
    await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, NOW())", [username, text]);
}

async function getMessageById(id) {
    return await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
}

module.exports = { 
    getAllMessages,
    insertMessage,
    getMessageById
};