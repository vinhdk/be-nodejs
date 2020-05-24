import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";

export class ProductCM extends AbtractCM {
    public Name!: string;
    public Price!: number;
    public Description?: string;
    constructor() {
        super();
    }
}

export class ProductUM extends AbtractUM {
    public Id!: string;
    public Name!: string;
    public Price!: number;
    public Description?: string;
    constructor() {
        super();
    }
}

export class ProductVM extends AbtractVM {
    public Id!: string;
    public Name!: string;
    public Price!: number;
    public Description?: string;
    constructor() {
        super();
    }
}
