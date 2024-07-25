// server.js (ou auth.js, ou onde preferir)

// Importações
import jwt from 'jsonwebtoken';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from './models/User.js'; // Ajuste o caminho conforme necessário
import dotenv from 'dotenv';
import passport from 'passport';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Função para assinar um token
const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
};

// Função para verificar um token
const verifyToken = (token, callback) => {
  const secret = process.env.JWT_SECRET;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, decoded);
  });
};

// Configurar opções para a estratégia JWT
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET, // Certifique-se de que a variável está definida
};

// Configurar a estratégia JWT no Passport
passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => {
        console.log(err);
        return done(err, false);
      });
  })
);

export { generateToken, verifyToken, passport };
