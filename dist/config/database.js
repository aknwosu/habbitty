import { User } from '../api/models/User.js';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
// const mikroOrmConfig = {
//   type: 'postgresql',
//   dbName: 'test',
//   host: 'localhost',
//   driver: PostgreSqlDriver,
//   port: 5432,
//   user: 'aknwosu',
//   password: '',
//   entities: [User],
//   debug: true,
// };
export default {
    dbName: "test",
    // type: 'postgresql',
    user: "aknwosu",
    password: "",
    host: 'localhost',
    port: 5432,
    driver: PostgreSqlDriver,
    entities: [User], // Adjust the path as needed
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: '../src/migrations',
    },
};
