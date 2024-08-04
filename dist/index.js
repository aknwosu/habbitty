import dotenv from 'dotenv';
dotenv.config();
import { MikroORM } from '@mikro-orm/core';
import app from './app.js';
import config from './mikro-orm.config.js';
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        const orm = await MikroORM.init(config);
        console.log('Connected to the database', orm.isConnected());
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (err) {
        console.error('Failed sto start sersver', err);
        process.exit(1);
    }
};
startServer();
