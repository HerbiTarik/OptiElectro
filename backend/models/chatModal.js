const pool = require('../config/database');

const chat = {
  getChat: async (id1, id2) => {
    const res = await pool.query(
      `SELECT 
  CASE 
    WHEN content_sender IS NOT NULL AND content_sender != '' THEN id_user
    WHEN content_receiver IS NOT NULL AND content_receiver != '' THEN id_ent
    ELSE NULL
  END AS id_contact,
  CASE 
    WHEN content_sender IS NOT NULL AND content_sender != '' THEN content_sender
    WHEN content_receiver IS NOT NULL AND content_receiver != '' THEN content_receiver
    ELSE NULL
  END AS contact
FROM messages 
WHERE id_user = $1 AND id_ent = $2
ORDER BY temps ASC 
`,
      [id1, id2],
    );
    return res.rows;
  },
};

module.exports = chat;
