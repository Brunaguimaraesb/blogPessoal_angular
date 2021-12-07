import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class PostagemModel{
    public id: number
    public titulo: string
    public texto: string
    public data: string
    public usuario: Usuario
    public tema: Tema
}