export interface Client {
    id: number | null,
    name: string,
    phone: string,
    email: string,
    cep: number,
    street: string,
    num: number,
    orientation: string | null,
    neighborhood: string,
    city: string,
    state: string,
}