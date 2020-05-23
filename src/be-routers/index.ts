import { Application } from "express";
import { Sequelize } from "sequelize-typescript";
import { useCategoryRouter, useProductRouter, useRoleRouter, useUserRoleRouter, useUserRouter } from "./base-routers";

export const BASEROUTERS: Array<(app: Application, sequelize: Sequelize) => void> = [useCategoryRouter, useProductRouter, useRoleRouter, useUserRoleRouter, useUserRouter];
export const EXTRAROUTERS: Array<(app: Application, sequelize: Sequelize) => void> = [];

export * from "./base-routers";
