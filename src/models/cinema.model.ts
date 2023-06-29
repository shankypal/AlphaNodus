import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey, HasOne 
} from "sequelize-typescript";
export interface cinemaAttributes {
    id: number;
    name: string;
    passport_id: number;
}
@Table({
	tableName: "cinema",
	timestamps: false 
})
export class Cinema extends Model<cinemaAttributes, cinemaAttributes> implements cinemaAttributes {
    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    @Index({
    	name: "PRIMARY",
    	using: "BTREE",
    	order: "ASC",
    	unique: true 
    })
    id!: number;
    @Column({
    	type: DataType.STRING(80) 
    })
    name!: string;
    @Column({
    	type: DataType.INTEGER 
    })
    passport_id!: number;

}