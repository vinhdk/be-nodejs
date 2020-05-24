import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";
import { ProductVM } from "./product.view-model";

export class CategoryCM extends AbtractCM {
    public Name!: string;
    public Description?: string;
    constructor() {
        super();
    }
}

export class CategoryUM extends AbtractUM {
    public Id!: string;
    public Name!: string;
    public Description?: string;
    constructor() {
        super();
    }
}

export class CategoryVM extends AbtractVM {
    public Id!: string;
    public Name!: string;
    public Description?: string;
    public Child?: ProductVM[];
    constructor() {
        super();
    }
}
