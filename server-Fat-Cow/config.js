const config = {
    port: 3000,
    product: [
        {
            id: 607860,
            name: "Proteinado 30",
            var1: 0.001,
            rainy: 0.5,
            dry: 0.3,

        },
        {
            id: 0,
            name: "Proteinado Plus",
            var1: 10 / 1000,
            rainy: 0.5,
            dry: 0.3,

        }
    ],
    nutriForm: {
        quantity: 33,
        season: "rainy",
        initialWeight: 300,
        period: 90,
        id: 607860,
        priceByProduct: 81,
        priceByWeight: 240
    }

};

export default config