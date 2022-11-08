import { Modificador } from "./superclasse/modificador";

export class TamanhoBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("tamanho-bloco", "block-size");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
