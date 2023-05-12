import { cores } from "../modificadores/atributos/cores";
import { valoresGlobais } from "../modificadores/atributos/globais";
import { Pseudoclasse, PragmasPseudoclasse } from "./pseudoclasse";

export class Sobre extends Pseudoclasse {

    valoresAceitos: { [valorFoles: string]: string } = {
        "cor-fundo":"background-color",
        
        }
   
    constructor(valor: string, quantificador?: string, pragmas?: PragmasPseudoclasse) {
        super("sobre", "hover");
        const valorString = valor.toString();

        if (!(valor in cores) &&
        !(valor in this.valoresAceitos)&&
            !(valor in valoresGlobais) &&
            !(valorString.includes('rgb')) &&
            !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) &&
            !(valorString.startsWith('#') && valorString.length <= 7)
        ) {
            throw new Error(`Propriedade 'hover' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
    }
}