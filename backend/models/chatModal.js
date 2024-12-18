const pool = require('../config/database');

const chat = {
  getChat: async (id1, id2) => {
    const res = await pool.query(
      `SELECT messages.id as id, entreprise.logo as logo, 
  CASE 
    WHEN messages.content_sender IS NOT NULL AND messages.content_sender != '' THEN messages.id_user
    WHEN messages.content_receiver IS NOT NULL AND messages.content_receiver != '' THEN messages.id_ent
    ELSE NULL
  END AS id_contact,
  CASE 
    WHEN messages.content_sender IS NOT NULL AND messages.content_sender != '' THEN messages.content_sender
    WHEN messages.content_receiver IS NOT NULL AND messages.content_receiver != '' THEN messages.content_receiver
    ELSE NULL
  END AS contact
FROM messages inner join entreprise on entreprise.id = messages.id_ent  
WHERE messages.id_user = $1 AND messages.id_ent = $2
ORDER BY temps DESC;
`,
      [id1, id2],
    );
    return res.rows;
  },
  setChat: async (id_user, id_ent, content_sender) => {
    const res = await pool.query(
      `INSERT INTO messages (id_user, id_ent, content_sender) values ($1, $2, $3) RETURNING *`,
      [id_user, id_ent, content_sender],
    );
    return res.rows;
  },
  getCompanyName: async id => {
    const res = await pool.query(
      `select entreprise.denomination from entreprise where id = $1`,
      [id],
    );
    return res.rows[0];
  },
};

module.exports = chat;
