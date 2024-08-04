import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from './api/models/User.js';

const mikroOrmConfig: Options = {
  dbName: 'test',
  // type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'aknwosu',
  password: '',
  driver: PostgreSqlDriver,
  entities: [User],
  migrations: {
    tableName: 'mikro_orm_migrations',
    path: './migrations', // Ensure this path matches where you want migrations to be stored
    transactional: true,
    allOrNothing: true,
    dropTables: true,
    safe: true,
    emit: 'ts', // Make sure we emit TypeScript migration files
  },
  debug: true,
};

export default mikroOrmConfig;
