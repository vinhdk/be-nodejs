import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";
import { ProductVM } from "./product.view-model";

export class CategoryCM extends AbtractCM {
    private Name!: string;
    private Description?: string;
    constructor() {
        super();
    }
}

export class CategoryUM extends AbtractUM {
    private Id!: string;
    private Name!: string;
    private Description?: string;
    constructor() {
        super();
    }
}

export class CategoryVM extends AbtractVM {
    private Id!: string;
    private Name!: string;
    private Description?: string;
    private Child?: ProductVM[];
    constructor() {
        super();
    }
}
