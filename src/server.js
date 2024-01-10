// Importer le module <link>Express</link>
const express = require('express');

// Créer une instance d'<link>Express</link>
const app = express();
const port = 3000; // Port sur lequel le serveur écoutera

// Définir une route
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur <link>Node.js</link> avec <link>Express</link> !');
});

// Démarrer le serveur et écouter le port spécifié
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});