import { Modificador } from "./superclasse/modificador";

export class InicioMargemEmBloco extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["inicio-margem-em-bloco", "início-margem-em-bloco"], 
            "margin-block-start"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
