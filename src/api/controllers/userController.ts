import { UserService } from '../services/userService.js';
import { MikroORM } from '@mikro-orm/core';
import config from '../../config/database.js';

const orm = await MikroORM.init(config);
const userService = new UserService(orm);

export const getUser = async (req, res) => {
  try {
    const user = await userService.findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userService.createUser(username, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};
