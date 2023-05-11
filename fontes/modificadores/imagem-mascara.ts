import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class ImagemMascara extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["imagem-mascara", "imagem-máscara"], "mask-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
