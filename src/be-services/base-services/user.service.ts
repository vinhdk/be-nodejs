import { AbtractService } from "src/be-shared/services";
import { User } from "src/be-models";
import { IUserService } from "src/be-interfaces";
import { Sequelize } from "sequelize-typescript";

export class UserService extends AbtractService<User> implements IUserService {
    constructor(sequelize: Sequelize) {
        super(User, sequelize);
    }

}
