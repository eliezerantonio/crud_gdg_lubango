import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity/user.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
