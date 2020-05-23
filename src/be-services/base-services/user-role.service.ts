import { AbtractService } from "src/be-shared/services";
import { UserRole } from "src/be-models";
import { IUserRoleService } from "src/be-interfaces";
import { Sequelize } from "sequelize-typescript";

export class UserRoleService extends AbtractService<UserRole> implements IUserRoleService {
    constructor(sequelize: Sequelize) {
        super(UserRole, sequelize);
    }

}
