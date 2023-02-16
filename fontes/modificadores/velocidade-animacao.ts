import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class VelocidadeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        "linear": "linear",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        "curva-cubica": "cubic-bezier",
        "curva-cúbica": "cubic-bezier",
        "passos": "steps"
    }

    termosSalto: { [valorFoles: string]: string } = {
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        "inicial": "start",
        "final": "end",
        "passo-inicial": "step-start",
        "passo-final": "step-start"
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["velocidade-animacao", "velocidade-animação"],
            "animation-timing-function"
        );

        // Além dos valores aceitos, o modificador também pode receber:

        // cubic-bezier(p1, p2, p3, p4) -> curva-cúbica, que recebe 4 números como parâmetro,
        // onde p1 e p3 devem estar na faixa de 0 a 1.
        // Ex.: curva-cúbica(1, 5, 0, 6);

        if (['curva-cubica', 'curva-cúbica'].includes(valor)){
            // Lógica para validar 4 parâmetros
        }

        // steps(n, <jumpterm>) -> passos, que recebe dois parâmetros: um número e um termo de salto.
        // O número indica quantas pausas terão entre os saltos. O termo deve ser um dos listados em termosSalto.
        // Ex.: passos(3, salto-inicial);

        if (['passos'].includes(valor)){
            // Lógica para validar 2 parâmetros
        }

        // TODO: Pensar em uma lógica para as duas condicionais acima.
        
        // Demais valores aceitos
        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Valor ${valor} inválido para 'velocidade-animação'. Valores aceitos:  
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
