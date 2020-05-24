import { AbtractVM } from "src/be-shared/view-models";
import { UserRoleVM } from "../base-view-models/user-role.view-model";

export class AuthGM extends AbtractVM {
    public UserName!: string;
    public PassWord!: string;
    constructor() {
        super();
    }
}

export class AuthVM extends AbtractVM {
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
