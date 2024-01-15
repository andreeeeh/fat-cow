import conf from "../config.js"

const product = function (info) {
    let res = conf.product.filter(el => el.prodId == info.prodId)[0]
    console.log(res)
    return res
}

const dailyWeightGain = function (info) {
    let prod = product(info)
    if (info.season === "wet" && "category" && prod.prodId === info.prodId) return prod.wet
    if (info.season === "dry" && "category" && prod.prodId === info.prodId) return prod.dry
}

const result = function (info) {
    const DWG = dailyWeightGain(info)
    const dailyPerHeadWeight = (info.initialWeight + ((info.period * DWG) / 2)) * 0.001;
    const dailyTotalWeight = dailyPerHeadWeight * info.quantity;
    const dailyTotalPack = dailyTotalWeight / 30;
    const periodTotalWeight = dailyTotalWeight * info.period;
    const periodTotalPack = periodTotalWeight / 30;
    const dailyCost = info.priceProduct * dailyTotalPack;
    const monthlyCost = dailyCost * 30;
    const periodCost = dailyCost * info.period;
    const monthlyWeightGain = DWG * 30;
    const estimatedWeightGain = monthlyWeightGain * info.period / 30
    const finalWeight = estimatedWeightGain + info.initialWeight;
    const dailyRecommendation = dailyTotalPack
    const periodRecommendation = dailyRecommendation * 3.5
    const estimatedProfitPerHead = estimatedWeightGain / 30 * info.priceWeight
    const estimatedProfitTotal = estimatedProfitPerHead * info.quantity;
    const notifyClient = false;
    const expired = false;

    return {
        clientId: info.clientId,
        name: info.name,
        prodId: info.prodId,
        season: info.season,
        period: info.period,
        quantity: info.quantity,
        initialWeight: info.initialWeight,
        priceProduct: info.priceProduct,
        priceWeight: info.priceWeight,
        DWG,
        dailyPerHeadWeight,
        dailyTotalWeight,
        dailyTotalPack,
        periodTotalWeight,
        periodTotalPack,
        dailyCost,
        monthlyCost,
        periodCost,
        monthlyWeightGain,
        estimatedWeightGain,
        finalWeight,
        dailyRecommendation,
        periodRecommendation,
        estimatedProfitPerHead,
        estimatedProfitTotal
    }
}

export { result }