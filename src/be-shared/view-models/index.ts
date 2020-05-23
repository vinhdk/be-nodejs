export class AbtractCM {
    public static readonly generateData = <T>(data: T, updatedBy: string, createdBy: string): any => {
        return { ...data, updatedBy, createdBy };
    }
}

export class AbtractUM {
    public static readonly generateData = <T>(data: T, updatedBy: string): any => {
        return { ...data, updatedBy };
    }
}

export class AbtractVM {
    public static readonly generateData = <T>(data: T): any => {
        return { ...data };
    }
}
