const pool = require('../config/database');

const companies = {
  getCompanies: async () => {
    const res = await pool.query(
      `select entreprise.id, entreprise.denomination, entreprise.logo ,entreprise.stars, entreprise.activite_principale, ville.nom as city, entreprise.duree_intervention, entreprise.tarif_min, entreprise.tarif_max, entreprise.certification, entreprise.partenaire, TO_CHAR(entreprise.prochaine_disponibilite, 'DD TMMonth YYYY') AS prochaine_disponibilite, CASE
    WHEN entreprise.prochaine_disponibilite >= CURRENT_DATE THEN TO_CHAR(entreprise.prochaine_disponibilite, 'DD TMMonth YYYY')
    ELSE 'Aucune disponibilité'
  END AS disponibilite from entreprise inner join ville on entreprise.city = ville.id`,
    );
    return res.rows;
  },
};

module.exports = companies;
