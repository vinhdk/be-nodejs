import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";

export class UserRoleCM extends AbtractCM {
    public UserId!: string;
    public RoleId!: string;
    constructor() {
        super();
    }
}

export class UserRoleUM extends AbtractUM {
    public Id!: string;
    public UserId!: string;
    public RoleId!: string;
    constructor() {
        super();
    }
}

export class UserRoleVM extends AbtractVM {
    public Id!: string;
    public UserId!: string;
    public RoleId!: string;
    constructor() {
        super();
    }
}
