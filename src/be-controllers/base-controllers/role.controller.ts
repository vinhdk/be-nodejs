import { Sequelize } from "sequelize-typescript";
import { AbtractHaveChildController } from "src/be-shared/controllers";
import { Role, UserRole } from "src/be-models";
import { RoleCM, RoleUM, RoleVM } from "src/be-view-models";

export class RoleController extends AbtractHaveChildController<Role, UserRole, RoleCM, RoleUM, RoleVM> {
    constructor(sequelize: Sequelize) {
        super(
            sequelize,
            Role,
            UserRole,
            RoleCM,
            RoleUM,
            RoleVM,
        );
    }
}
