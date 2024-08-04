import { User } from '../models/User.js';
export declare class UserService {
    orm: any;
    constructor(orm: any);
    createUser(username: any, email: any, password: any): Promise<User>;
    findUserById(id: any): Promise<any>;
}
