import { User } from '../models/User.js';
export class UserService {
    orm;
    constructor(orm) {
        this.orm = orm;
    }
    async createUser(username, email, password) {
        const user = new User(username, email, password);
        await this.orm.em.persistAndFlush(user);
        return user;
    }
    async findUserById(id) {
        return await this.orm.em.findOne(User, { id });
    }
}
