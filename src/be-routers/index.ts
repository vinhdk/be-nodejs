import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { useCategoryRouter, useProductRouter, useRoleRouter, useUserRoleRouter, useUserRouter } from "./base-routers";
import { useAuthRouter } from "./extra-routers";

export const BASEROUTERS: Array<(app: Application, sequelize: Sequelize) => void> = [useCategoryRouter, useProductRouter, useRoleRouter, useUserRoleRouter, useUserRouter];
export const EXTRAROUTERS: Array<(app: Application, sequelize: Sequelize) => void> = [useAuthRouter];

export * from "./base-routers";
