import { cores } from "../modificadores/atributos/cores";
import { estilos } from "../modificadores/atributos/estilo";
import { valoresGlobais} from "../modificadores/atributos/globais";
import { unidadesMedida } from "../modificadores/atributos/quantificadores";
import { Modificador, PragmasModificador } from "../modificadores/superclasse";

export class UnicoTipo extends Modificador {

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("unico-tipo", "only-of-type");
     
        if (Number.isNaN(parseInt(valor)) &&
           
            !(valor in estilos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'unico-tipo' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;
    }
}
