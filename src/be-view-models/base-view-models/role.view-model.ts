import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";
import { UserRoleVM } from "./user-role.view-model";

export class RoleCM extends AbtractCM {
    public Name!: string;
    constructor() {
        super();
    }
}

export class RoleUM extends AbtractUM {
    public Id!: string;
    public Name!: string;
    constructor() {
        super();
    }
}

export class RoleVM extends AbtractVM {
    public Id!: string;
    public Name!: string;
    public Child?: UserRoleVM[];
    constructor() {
        super();
    }
}
