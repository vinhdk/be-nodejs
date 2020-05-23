import { Sequelize } from "sequelize-typescript";
import { AbtractRepository } from "src/be-shared/repositories";
import { User } from "src/be-models";
import { IUserRepository } from "src/be-interfaces";

export class UserRepository extends AbtractRepository<User> implements IUserRepository {
    constructor(sequelize: Sequelize) {
        super(User, sequelize);
    }
}
