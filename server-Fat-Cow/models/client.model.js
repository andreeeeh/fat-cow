'use strict';

export default (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, phone: {
            type: DataTypes.STRING,
            allowNull: false
        }, email: {
            type: DataTypes.STRING,
            allowNull: false
        }, cep: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, street: {
            type: DataTypes.STRING,
            allowNull: false
        }, num: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, orientation: {
            type: DataTypes.STRING,
            allowNull: true
        }, neighborhood: {
            type: DataTypes.STRING,
            allowNull: true
        }, city: {
            type: DataTypes.STRING,
            allowNull: false
        }, state: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Client;
};