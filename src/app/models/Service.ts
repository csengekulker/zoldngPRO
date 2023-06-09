export default interface Service {
    id: number,
    name: string,
    description:string[],
    dos:string[],
    imagePath: string,
    process?: string[]
}