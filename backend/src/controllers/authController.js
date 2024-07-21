// Controladores de Autenticação

import User, { findOne, findById } from '../models/User.js';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export async function register(req, res) {
    const { name, email, password } = req.body;
    try {
        let user = await findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Usuário já existe' });
        }

        user = new User({ name, email, password });
        await user.save();

        const payload = { user: { id: user.id } };
        sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

export async function login(req, res) {
    const { email, password } = req.body;
    try {
        let user = await findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciais inválidas' });
        }

        const payload = { user: { id: user.id } };
        sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}

export async function getMe(req, res) {
    try {
        const user = await findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro de servidor');
    }
}
