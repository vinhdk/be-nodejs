import { App } from "src/app.express";
import { Context } from "src/be-shared/context";
(async () => {
    const context: Context = new Context();
    await context.connection();
    const app = new App(context.sequelize);
    await app.listen();
})();
