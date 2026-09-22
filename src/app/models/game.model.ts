export interface Game {
    id: string,
    name: string,
    code: string,
    description?: string,
    active?: boolean,
    createdAt: Date,
    email?: string
}