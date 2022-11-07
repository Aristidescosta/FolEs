import { Modificador } from "./superclasse/modificador";

export class IndentacaoTexto extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["indentacao-texto", "indentação-texto"], "text-indent");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
