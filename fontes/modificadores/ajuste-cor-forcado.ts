import { Modificador } from "./superclasse/modificador";

export class AjusteCorForcado extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["ajuste-cor-forcado", "ajuste-cor-forçado"], 
            "forced-color-adjust"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
