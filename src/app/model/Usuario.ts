import { PostagemModel } from "./PostagemModel"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public dataNascimento: Date
    public tipo: string
    public postagem: PostagemModel[]
}