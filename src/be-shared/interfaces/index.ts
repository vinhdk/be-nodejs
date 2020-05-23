import { NextFunction, Request, Response } from "express";
import { Model, Repository } from "sequelize-typescript";
import { WhereOptions } from "sequelize/types";

export interface IAbtractRepository<T extends Model> {
    useGetAll: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T[]>;
    useGetOne: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T>;
    useCreate: (model: T) => Promise<T>;
    useUpdate: (model: T, id: string | number) => Promise<[number, T[]]>;
    useRemove: (id: string | number) => Promise<number>;
}

export interface IAbtractService<T extends Model> {
    useGetAll: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T[]>;
    useGetOne: (expression: WhereOptions, models: Array<Repository<Model>>) => Promise<T>;
    useCreate: (model: T) => Promise<T>;
    useUpdate: (model: T, id: string | number) => Promise<[number, T[]]>;
    useRemove: (id: string | number) => Promise<number>;
}

export interface IAbtractController {
    useGetAll: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
    useGetById: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
    useCreate: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
    useUpdate: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
    useRemove: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;
}
