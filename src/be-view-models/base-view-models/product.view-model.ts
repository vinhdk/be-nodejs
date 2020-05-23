import { AbtractCM, AbtractUM, AbtractVM } from "src/be-shared/view-models";

export class ProductCM extends AbtractCM {
    private Name!: string;
    private Price!: number;
    private Description?: string;
    constructor() {
        super();
    }
}

export class ProductUM extends AbtractUM {
    private Id!: string;
    private Name!: string;
    private Price!: number;
    private Description?: string;
    constructor() {
        super();
    }
}

export class ProductVM extends AbtractVM {
    private Id!: string;
    private Name!: string;
    private Price!: number;
    private Description?: string;
    constructor() {
        super();
    }
}
