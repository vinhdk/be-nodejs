import { Model, Repository, Sequelize } from "sequelize-typescript";
import { NextFunction, Request, Response } from "express";
import { IAbtractController, IAbtractService } from "../interfaces";
import { AbtractService } from "../services";
import { AbtractCM, AbtractUM, AbtractVM } from "../view-models";

export class AbtractHaveChildController<F extends Model, C extends Model, CM, UM, VM> implements IAbtractController {
    protected readonly service: IAbtractService<F>;
    protected readonly childService: IAbtractService<C>;
    protected readonly childRepository: Repository<C>;

    constructor(
        protected readonly sequelize: Sequelize,
        protected readonly model: new () => F,
        protected readonly childModel: new () => C,
        protected readonly dataCM: new () => CM,
        protected readonly dataUM: new () => UM,
        protected readonly dataVM: new () => VM,
    ) {
        this.service = new AbtractService<F>(model, sequelize);
        this.childService = new AbtractService<C>(childModel, sequelize);
        this.childRepository = sequelize.getRepository(childModel);
    }
    public readonly useGetAll = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        return await this.service.useGetAll({ ...req.query }, [this.childRepository]).then((list) => {
            const result: VM[] = list.map((model) => AbtractVM.generateData<VM>(Object.assign(this.dataVM, model.get()) as any as VM));
            return res.status(200).json(result);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useGetById = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        return await this.service.useGetOne({ Id: req.params.id }, [this.childRepository])
            .then((model) => {
                return model != null ? res.status(200).json(AbtractVM.generateData<VM>(Object.assign(this.dataVM, model.get()) as any as VM))
                    : res.status(404).json({ message: "Không tìm thấy " + req.params.id });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useCreate = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = AbtractCM.generateData<CM>(Object.assign(this.dataCM, req.body) as any as CM, username, username);
        return await this.service.useCreate(data)
            .then((model) => res.status(201).json(model))
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useUpdate = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = AbtractUM.generateData<UM>(Object.assign(this.dataUM, req.body) as any as UM, username);
        return await this.service.useUpdate(data, data.Id)
            .then((model) => res.status(201).json(model))
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useRemove = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        return await this.service.useGetOne({ Id: req.params.id }, [this.childRepository]).then(
            async (model: any) => {
                if (model != null) {
                    model.Childs.forEach(async (child: any) => {
                        await this.childService.useRemove(child.Id);
                    });
                    return await this.service.useRemove(req.params.id)
                        .then(() => {
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
                } else {
                    return res.status(404).json({ message: "Không tìm thấy " + req.params.id });
                }
            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }

}

export class AbtractNoChildController<T extends Model, CM, UM, VM> implements IAbtractController {
    protected readonly service: IAbtractService<T>;

    constructor(
        protected readonly sequelize: Sequelize,
        protected readonly model: new () => T,
        protected readonly dataCM: new () => CM,
        protected readonly dataUM: new () => UM,
        protected readonly dataVM: new () => VM,
    ) {
        this.service = new AbtractService<T>(model, sequelize);
    }
    public readonly useGetAll = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        return await this.service.useGetAll({ ...req.query }, []).then((list) => {
            const result = list.map((model) => AbtractVM.generateData<VM>(Object.assign(this.dataVM, model.get()) as any as VM));
            return res.status(200).json(result);
        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useGetById = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        return await this.service.useGetOne({ Id: req.params.id }, [])
            .then((model) => {
                return model != null ? res.status(200).json(AbtractVM.generateData<VM>(Object.assign(this.dataVM, model.get()) as any as VM))
                    : res.status(404).json({ message: "Không tìm thấy " + req.params.id });
            }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useCreate = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = AbtractCM.generateData<CM>(Object.assign(this.dataCM, req.body) as any as CM, username, username);
        return await this.service.useCreate(data)
            .then((model) => res.status(201).json(model))
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useUpdate = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        const username = JSON.parse(req.headers.extra as string).UserName;
        const data = AbtractUM.generateData<UM>(Object.assign(this.dataUM, req.body) as any as UM, username);
        return await this.service.useUpdate(data, data.Id)
            .then((model) => res.status(201).json(model))
            .catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
    public readonly useRemove = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
        return await this.service.useGetOne({ Id: req.params.id }, []).then(
            async (model: any) => {
                return model != null
                    ? await this.service.useRemove(req.params.id)
                        .then(() => {
                            return res.status(200).json({ message: "Xóa thành công" });
                        }).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }))
                    : res.status(404).json({ message: "Không tìm thấy " + req.params.id });

            },

        ).catch((err) => res.status(400).json({ message: "Có lỗi xảy ra" }));
    }
}
