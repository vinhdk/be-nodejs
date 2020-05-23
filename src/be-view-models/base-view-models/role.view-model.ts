import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";
import { UserRoleVM } from "./user-role.view-model";

export class RoleCM extends AbtractCM {
    private Name!: string;
    constructor() {
        super();
    }
}

export class RoleUM extends AbtractUM {
    private Id!: string;
    private Name!: string;
    constructor() {
        super();
    }
}

export class RoleVM extends AbtractVM {
    private Id!: string;
    private Name!: string;
    private Child?: UserRoleVM[];
    constructor() {
        super();
    }
}
