const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY added DESC");
    return rows;
}

module.exports = { getAllMessages };