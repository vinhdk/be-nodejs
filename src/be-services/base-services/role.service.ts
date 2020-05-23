import { AbtractService } from "src/be-shared/services";
import { Role } from "src/be-models";
import { IRoleService } from "src/be-interfaces";
import { Sequelize } from "sequelize-typescript";

export class RoleService extends AbtractService<Role> implements IRoleService {
    constructor(sequelize: Sequelize) {
        super(Role, sequelize);
    }

}
