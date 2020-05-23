import { IAbtractRepository } from "../interfaces";
import { Model, Repository, Sequelize } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";

export class AbtractRepository<T extends Model> implements IAbtractRepository<T> {

    protected readonly repository: Repository<T>;
    constructor(
        protected readonly model: new () => T,
        protected readonly sequelize: Sequelize,
    ) {
        this.repository = sequelize.getRepository(model);
    }
    public readonly useCreate = (model: T): Promise<T> => {
        return this.repository.create(model);
    }
    public readonly useUpdate = (model: T, id: string | number): Promise<[number, T[]]> => {
        return this.repository.update(model, { where: { Id: id } });
    }
    public readonly useRemove = (id: string | number): Promise<number> => {
        return this.repository.destroy({ where: { Id: id } });
    }
    public readonly useGetOne = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T> => {
        return this.repository.findOne({ where: expression, include: models });
    }
    public readonly useGetAll = (expression: WhereOptions, models: Array<Repository<Model>>): Promise<T[]> => {
        return this.repository.findAll({ include: models, where: expression });
    }
}
