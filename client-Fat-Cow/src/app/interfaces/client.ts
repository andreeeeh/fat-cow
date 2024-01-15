export interface Client {
    id: number | null,
    name: string,
    phone: string,
    email: string,
    cep: number | null,
    street: string,
    num: number | null,
    orientation: string | null,
    neighborhood: string,
    city: string,
    state: string,
}