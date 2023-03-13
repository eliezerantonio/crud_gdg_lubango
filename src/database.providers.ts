import { DataSource } from 'typeorm';
import { CreateUsersTable1678676253058 } from './migrations/1678676253058-CreateUsersTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'gdgdb',
        entities: [__dirname + '/../**/*.entity.js'],

        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gdgdb',
  entities: [__dirname + '/../**/*.entity.js'],

  synchronize: false,
  migrations: [CreateUsersTable1678676253058],
});
