import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";
import { UserRoleVM } from "./user-role.view-model";

export class UserCM extends AbtractCM {
    private UserName!: string;
    private FullName!: string;
    private PassWord!: string;
    private Email!: string;
    private Phone?: string;
    private Avatar?: string;
    private Gender?: boolean;
    private BirthDate?: Date;

    constructor() {
        super();
    }
}

export class UserUM extends AbtractUM {
    private Id!: string;
    private UserName!: string;
    private FullName!: string;
    private PassWord!: string;
    private Email!: string;
    private Phone?: string;
    private Avatar?: string;
    private Gender?: boolean;
    private BirthDate?: Date;
    constructor() {
        super();
    }
}

export class UserVM extends AbtractVM {
    private Id!: string;
    private UserName!: string;
    private FullName!: string;
    private PassWord!: string;
    private Email!: string;
    private Phone?: string;
    private Avatar?: string;
    private Gender?: boolean;
    private BirthDate?: Date;
    private Child?: UserRoleVM[];
    constructor() {
        super();
    }
}
