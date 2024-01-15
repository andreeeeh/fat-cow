'use strict';

export default (sequelize, DataTypes) => {
    const Result = sequelize.define('Result', {
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false, references: {
                model: 'Clients', // name of your Client model
                key: 'id',
            },
        }, name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prodId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        },
        period: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        initialWeight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        priceProduct: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        priceWeight: {
            type: DataTypes.FLOAT,
            allowNull: false
        }, DWG: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dailyPerHeadWeight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dailyTotalWeight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dailyTotalPack: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        periodTotalWeight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        periodTotalPack: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dailyCost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        monthlyCost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        periodCost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        monthlyWeightGain: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estimatedWeightGain: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        finalWeight: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dailyRecommendation: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        periodRecommendation: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estimatedProfitPerHead: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estimatedProfitTotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    });

    return Result;
}