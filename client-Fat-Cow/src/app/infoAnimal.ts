import { Product } from "./product";

export class InfoAnimal {
    constructor(
        public name: string,
        public id: number | null,
        public season: string,
        public period: number | null,
        public quantity: number | null,
        public initialWeight: number | null,
        public priceProduct: number | null,
        public priceWeight: number | null
    ) { }
}