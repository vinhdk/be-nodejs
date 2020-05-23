import { WhereOptions } from "sequelize/types";
import { IAbtractService, IAbtractRepository } from "../interfaces";
import { Repository, Model, Sequelize } from "sequelize-typescript";
import { AbtractRepository } from "../repositories";

export class AbtractService<T extends Model> implements IAbtractService<T> {

    protected readonly repository: IAbtractRepository<T>;
    constructor(
        protected readonly model: new () => T,
        protected readonly sequelize: Sequelize,
    ) {
        this.repository = new AbtractRepository<T>(model, sequelize);
    }
    public readonly useGetOne = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.repository.useGetOne(expression, models);
    }
    public readonly useGetAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.repository.useGetAll(expression, models);
    }
    public readonly useCreate = (model: T): Promise<T> => {
        return this.repository.useCreate(model);
    }
    public readonly useUpdate = (model: T, id: string | number): Promise<[number, T[]]> => {
        return this.repository.useUpdate(model, id);
    }
    public readonly useRemove = (id: string | number): Promise<number> => {
        return this.repository.useRemove(id);
    }
}
