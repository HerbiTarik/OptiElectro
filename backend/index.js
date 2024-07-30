const express = require('express');
const bodyParser = require('body-parser'); //Analyse le corps des requêtes entrantes (exemple: requête 'POST')
const userRoutes = require('./routes/userRoutes');
require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json()); //Cela permet d'accéder aux données envoyées dans le corps des requêtes via 'req.body'.

//Routes
app.use('/api', userRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
