import { BelongsTo, Column, CreatedAt, Default, ForeignKey, HasMany, IsUUID, Length, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Category } from "./category.model";
import uuid from "uuidv4";

@Table
export class Product extends Model<Product> {

    @IsUUID(4)
    @Default(uuid)
    @PrimaryKey
    @Column
    public Id!: string;

    @Column
    public Name!: string;

    @Column
    public Price!: number;

    @Length({ max: 500, min: 0 })
    @Column
    public Description?: string;

    @IsUUID(4)
    @ForeignKey(() => Category)
    @Column
    public CategoryId?: string;

    @BelongsTo(() => Category, "CategoryId")
    public Category!: Category;

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
