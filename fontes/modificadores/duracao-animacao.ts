import { valoresGlobais } from "./atributos/globais";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class DuracaoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["duracao-animacao", "duração-animação"],
            "animation-duration"
        );

        if (Number.isNaN(parseInt(valor)) && !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'duração-animação' com valor ${valor} inválido. Valor deve ser um número ou um dos valores: 
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in valoresTemporais) || quantificador === undefined) {
                throw new Error(`Propriedade 'duração-animação' com quantificador inválido. Valores aceitos: 
                ${Object.keys(valoresTemporais).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
