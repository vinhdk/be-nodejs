import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Role } from "./role.model";
import { User } from "./user.model";
import uuid from "uuidv4";
@Table
export class UserRole extends Model<UserRole> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @IsUUID(4)
    @ForeignKey(() => User)
    @Column
    public UserId?: string;

    @IsUUID(4)
    @ForeignKey(() => Role)
    @Column
    public RoleId?: string;

    @BelongsTo(() => User, "UserId")
    public User!: User;

    @BelongsTo(() => Role, "RoleId")
    public Role!: Role;

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
