import { FolEs } from './fontes/foles';
import { Command } from 'commander';

const principal = () => {
    const analisadorArgumentos = new Command();
    let nomeArquivo: string;

    analisadorArgumentos
        .argument('[arquivos...]', 'Nomes dos arquivos (opcional)')
        .action((arquivos) => {
            if (arquivos.length > 0) {
                nomeArquivo = arquivos[0];
            }
        });

    analisadorArgumentos.parse();
    const opcoes = analisadorArgumentos.opts();

    if (!nomeArquivo) {
        console.error('Favor informar nome do arquivo a ser traduzido.', 70);
        return;
    }

    const foles = new FolEs();
    foles.converterParaCss(nomeArquivo);
}

principal();