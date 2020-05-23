import { Column, CreatedAt, Default, HasMany, IsUUID, Model, PrimaryKey, Table, UpdatedAt, Unique, Length } from "sequelize-typescript";
import { UserRole } from "./user-role.model";
import uuid from "uuidv4";
@Table
export class User extends Model<User> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Unique
    @Column
    public UserName!: string;

    @Column
    public PassWordHash!: string;

    @Column
    public FullName!: string;

    @Column
    public Phone?: string;

    @Unique
    @Column
    public Email!: string;

    @Length({ min: 0, max: 10000 })
    @Column
    public Avatar?: string;

    @Default(true)
    @Column
    public Gender?: boolean;

    @Column
    public BirthDate?: Date;

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
