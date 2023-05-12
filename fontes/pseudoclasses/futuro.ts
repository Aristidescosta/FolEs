import { valoresGlobais } from "../modificadores/atributos/globais";
import { estilos } from "../modificadores/atributos/estilo";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class  Futuro extends Modificador {

  

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("futuro", "future");

        if (!(valor in estilos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'futuro' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
    }
}
