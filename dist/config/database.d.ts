import { User } from '../api/models/User.js';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
declare const _default: {
    dbName: string;
    user: string;
    password: string;
    host: string;
    port: number;
    driver: typeof PostgreSqlDriver;
    entities: (typeof User)[];
    migrations: {
        tableName: string;
        path: string;
    };
};
export default _default;
