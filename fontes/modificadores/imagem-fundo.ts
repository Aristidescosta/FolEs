import { Modificador } from "./superclasse/modificador";

export class ImagemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("imagem-fundo", "background-image");

        // Valor deve ser um link URL ou 'nenhuma' (none)
        if(!(valor.includes('url(')) && !(valor in this.valoresAceitos)) {
            throw new Error(`Propriedade 'imagem-fundo' com valor ${valor} inválido. O valor deve ser uma URL ou um dos valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
