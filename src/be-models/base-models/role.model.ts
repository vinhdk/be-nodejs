import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import uuid from "uuidv4";
@Table
export class Role extends Model<Role> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @HasMany(() => UserRole)
    public Childs?: UserRole[];

    @Column
    public CreateBy!: string;

    @Column
    public UpdateBy!: string;

    @Default(false)
    @Column
    public IsDelete!: boolean;

    @UpdatedAt
    public UpdatedAt!: Date;

    @CreatedAt
    public CreatedAt!: Date;
}
