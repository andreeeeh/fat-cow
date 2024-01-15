'use strict';

export default (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, phone: {
            type: DataTypes.STRING,
            allowNull: false
        }, CEP: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, Street: {
            type: DataTypes.STRING,
            allowNull: false
        }, Number: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, Orientation: {
            type: DataTypes.STRING,
            allowNull: true
        }, Neighborhood: {
            type: DataTypes.STRING,
            allowNull: true
        }, City: {
            type: DataTypes.STRING,
            allowNull: false
        }, State: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Client;
};