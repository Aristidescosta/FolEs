import { Modificador } from "./superclasse/modificador";

export class ColunaEspacamento extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["coluna-espacamento", "coluna-espaçamento"], "column-gap");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
