const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Atlas connecté'))
.catch(err => console.error('❌ Erreur MongoDB:', err));

// Route test
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Security Management API fonctionnelle',
    version: '1.0.0'
  });
});

// Routes d'authentification simulées
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Simulation (en production, vérifier dans MongoDB)
  if (email && password) {
    res.json({
      success: true,
      token: 'jwt-token-simulation',
      user: {
        name: 'Administrateur',
        email: email,
        role: 'ADMIN'
      }
    });
  } else {
    res.status(401).json({ success: false, message: 'Identifiants incorrects' });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('==========================================');
  console.log('🚀 Security Management API');
  console.log(`📡 Port: ${PORT}`);
  console.log(`🔗 MongoDB Atlas: Connecté`);
  console.log('==========================================');
});