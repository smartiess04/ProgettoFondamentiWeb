const mongoose= require('mongoose');

const refreshTokenSchema= new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Collegamento al modello Utente
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  isRevoked: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

// Il documento verrà eliminato automaticamente dal database quando 
// l'orario corrente supera il valore di 'expiresAt'.
refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports= mongoose.model("RefreshToken",refreshTokenSchema)