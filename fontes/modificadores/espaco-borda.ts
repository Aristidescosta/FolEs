import { Modificador } from "./superclasse/modificador";

export class EspacoBorda extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["espaco-borda", "espaço-borda"], "border-spacing");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
