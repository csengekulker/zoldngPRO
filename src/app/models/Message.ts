export interface Message {
    id?:number,
    email: string, 
    name: string, 
    subject: string, 
    body: string,
    short?:string
}