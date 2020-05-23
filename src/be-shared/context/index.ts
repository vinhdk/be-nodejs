import { Sequelize } from "sequelize-typescript";
import { environment } from "src/be-warehouse/environment";
import { BASEMODELS, EXTRAMODELS } from "src/be-models";

export class Context {
    public readonly sequelize: Sequelize;
    constructor() {
        const config: any = environment.database.config.development;
        this.sequelize = new Sequelize({
            models: [...BASEMODELS, ...EXTRAMODELS], ...config,
            dialect: config.dialect,
            host: config.host,
            name: config.database,
            password: config.password,
            pool: {
                // connectionLimit: 1000,
                // acquire: 300000000,
                // idle: 100000000,
                max: 1000,
                min: 0,
            },
            repositoryMode: true,
            username: config.username,
            validateOnly: false,
        });
    }
    public async connection() {
        await this.sequelize.sync();
    }
}
