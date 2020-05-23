import { Sequelize } from "sequelize-typescript";
import { AbtractNoChildController } from "src/be-shared/controllers";
import { UserRole } from "src/be-models";
import { UserRoleCM, UserRoleUM, UserRoleVM } from "src/be-view-models";

export class UserRoleController extends AbtractNoChildController<UserRole, UserRoleCM, UserRoleUM, UserRoleVM> {
    constructor(sequelize: Sequelize) {
        super(
            sequelize,
            UserRole,
            UserRoleCM,
            UserRoleUM,
            UserRoleVM,
        );
    }
}
