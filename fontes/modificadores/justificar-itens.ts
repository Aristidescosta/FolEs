import { valoresGlobais } from "./atributos/globais";
import { posicoes } from "./atributos/posicoes";
import { Modificador } from "./superclasse/modificador";

export class JustificarItens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "seguro": "safe",
        "inseguro": "unsafe",
        "legado": "legacy",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    }

    constructor(valor: string, quantificador?: string) {
        super("justificar-itens", "justify-items");
    
        // Além dos valores listados, aceita também todos os valores da Lista 
        // de Posições - exceto 'top' e 'bottom' - 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoes).filter((posicao) => 
            posicao !== 'superior' && posicao !== 'inferior'
        );

        if (!(valor in this.valoresAceitos) && 
            !(posicoesAceitas.includes(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'justificar-itens'. Valores aceitos:
            ${posicoesAceitas.reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
