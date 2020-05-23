import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";

export class UserRoleCM extends AbtractCM {
    private UserId!: string;
    private RoleId!: string;
    constructor() {
        super();
    }
}

export class UserRoleUM extends AbtractUM {
    private Id!: string;
    private UserId!: string;
    private RoleId!: string;
    constructor() {
        super();
    }
}

export class UserRoleVM extends AbtractVM {
    private Id!: string;
    private UserId!: string;
    private RoleId!: string;
    constructor() {
        super();
    }
}
