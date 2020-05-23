import { Sequelize } from "sequelize-typescript";
import { AbtractHaveChildController } from "src/be-shared/controllers";
import { User, UserRole } from "src/be-models";
import { UserCM, UserUM, UserVM } from "src/be-view-models";

export class UserController extends AbtractHaveChildController<User, UserRole, UserCM, UserUM, UserVM> {
    constructor(sequelize: Sequelize) {
        super(
            sequelize,
            User,
            UserRole,
            UserCM,
            UserUM,
            UserVM,
        );
    }
}
