import bcrypt from 'bcrypt';
import { Connection } from 'typeorm';
import { User } from '../entity/user.entity';

export const addAdmin = async (data: Connection): Promise<void> => {
  const repositiry = data.getRepository(User);
  const hashedPassword = await bcrypt.hash('admin', 10);
  await repositiry.save({ login: 'admin', password: hashedPassword, name: 'admin' });
};
