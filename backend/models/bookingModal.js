const pool = require('../config/database');

const booking = {
  postBooking: async (
    id_user,
    id_activite,
    id_type_activite,
    id_ville,
    location,
  ) => {
    const res = await pool.query(
      'insert into booking (id_user, id_activite, id_type_activite, id_ville, location) values ($1, $2, $3, $4, $5) RETURNING *',
      [id_user, id_activite, id_type_activite, id_ville, location],
    );
    return res.rows[0];
  },

  updateCompany: async (id, id_entreprise) => {
    const res = await pool.query(
      `update booking set id_entreprise = ${id_entreprise} where id = ${id} RETURNING *`,
    );
    return res.rows[0];
  },
  deleteBookingtemp: async id => {
    const res = await pool.query(
      'delete from booking where id= $1 RETURNING *',
      [id],
    );
    return res.rows[0];
  },
  getReservation: async id => {
    const res = await pool.query(
      `select t1.id, t1.location, t2.nom as type_actives, t3.nom as activites, t4.nom as ville, t5.logo, t5.denomination, TO_CHAR(t5.prochaine_disponibilite, 'DD TMMonth YYYY') AS prochaine_disponibilite, t5.activite_principale from booking as t1 inner join type_activite as t2 on t1.id_activite = t2.id inner join activites as t3 on t1.id_type_activite = t3.id inner join ville as t4 on t1.id_ville = t4.id inner join entreprise as t5 on t1.id_entreprise = t5.id where t1.id_user = $1 AND t5.prochaine_disponibilite > CURRENT_DATE`,
      [id],
    );
    return res.rows;
  },
  getPastReservation: async id => {
    const res = await pool.query(
      `select t1.id, t1.location, t2.nom as type_actives, t3.nom as activites, t4.nom as ville, t5.logo, t5.denomination, TO_CHAR(t5.prochaine_disponibilite, 'DD TMMonth YYYY') AS prochaine_disponibilite, t5.activite_principale from booking as t1 inner join type_activite as t2 on t1.id_activite = t2.id inner join activites as t3 on t1.id_type_activite = t3.id inner join ville as t4 on t1.id_ville = t4.id inner join entreprise as t5 on t1.id_entreprise = t5.id where t1.id_user = $1 AND t5.prochaine_disponibilite < CURRENT_DATE`,
      [id],
    );
    return res.rows;
  },
};

module.exports = booking;
