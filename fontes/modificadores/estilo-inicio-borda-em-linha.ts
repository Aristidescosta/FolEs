import { Modificador } from "./superclasse/modificador";

export class EstiloInicioBordaEmLinha extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["estilo-inicio-borda-em-linha", "estilo-início-borda-em-linha"], 
            "border-inline-start-style"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
