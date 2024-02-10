// models/product.model.js

import { DataTypes } from 'sequelize';

export default function ProductModel (sequelize) {
    const Product = sequelize.define(
        'Product',
        {
            prodId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            variable: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            wet: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            dry: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            tableName: 'Products', // Adjust the table name if necessary
            timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt fields
            underscored: true, // Set to true if you want Sequelize to use snake_case for column names
        }
    );

    return Product;
}
