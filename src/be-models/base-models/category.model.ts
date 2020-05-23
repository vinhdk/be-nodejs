import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Length, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Product } from "./product.model";
import uuid from "uuidv4";

@Table
export class Category extends Model<Category> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @Length({ max: 500, min: 0 })
    @Column
    public Description?: string;

    @HasMany(() => Product)
    public Childs?: Product[];

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
