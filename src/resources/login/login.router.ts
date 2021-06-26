import { Router } from 'express';
import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import { User } from '../../entity/user.entity';
import { JWT_SECRET_KEY } from '../../common/conctans-evn';
import { BaseError } from '../../common/errorHandler';
import { BAD_GATEWAY, FORBIDDEN } from '../../common/statusCodes';

const router = Router();

router.route('/').post(async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ login });
    if (!user) throw new BaseError(`User '${login}' not found`, FORBIDDEN);
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) throw new BaseError('Passwords do not match.', BAD_GATEWAY);
    const token = jwt.sign({ id: user.id, login }, JWT_SECRET_KEY!);
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

export default router;
