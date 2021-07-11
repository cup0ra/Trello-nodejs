import * as bcrypt from 'bcrypt';
import { User } from 'src/entity/user.entity';
import { getRepository } from 'typeorm';

export const addAdmin = async (): Promise<void> => {
  const repositiry = getRepository(User);
  const hashedPassword = await bcrypt.hash('admin', 10);
  await repositiry.save({
    login: 'admin',
    password: hashedPassword,
    name: 'admin',
  });
};
