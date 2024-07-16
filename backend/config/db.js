// Configuração do Banco de Dados

import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;

