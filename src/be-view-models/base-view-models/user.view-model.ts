import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";
import { UserRoleVM } from "./user-role.view-model";

export class UserCM extends AbtractCM {
    public UserName!: string;
    public FullName!: string;
    public PassWord!: string;
    public Email!: string;
    public Phone?: string;
    public Avatar?: string;
    public Gender?: boolean;
    public BirthDate?: Date;

    constructor() {
        super();
    }
}

export class UserUM extends AbtractUM {
    public Id!: string;
    public UserName!: string;
    public FullName!: string;
    public PassWord!: string;
    public Email!: string;
    public Phone?: string;
    public Avatar?: string;
    public Gender?: boolean;
    public BirthDate?: Date;
    constructor() {
        super();
    }
}

export class UserVM extends AbtractVM {
    public Id!: string;
    public UserName!: string;
    public FullName!: string;
    public PassWord!: string;
    public Email!: string;
    public Phone?: string;
    public Avatar?: string;
    public Gender?: boolean;
    public BirthDate?: Date;
    public Child?: UserRoleVM[];
    constructor() {
        super();
    }
}
