import { cores } from "../atributos/cores";
import { estilos } from "../atributos/estilo";
import { valoresGlobais} from "../atributos/globais";
import { unidadesMedida } from "../atributos/quantificadores";
import { Modificador, PragmasModificador } from "../superclasse";

export class NFilho extends Modificador {

    valoresAceitos: { [valorFoles: string]: string } = {
       "impar":"odd",
       "ímpar":"odd",
       "par":"even"

    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("n-filho", "nth-child");
     
        if (Number.isNaN(parseInt(valor)) &&
           
            !(valor in estilos) &&
            !(valor in this.valoresAceitos) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'n-filho' com valor ${valor} inválido. Valores aceitos: 
            
            ${Object.keys(estilos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'n-filho' com quantificador inválido. Valores aceitos:
                número-quantificador, 
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}