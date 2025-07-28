// renomear-imagens.ts (ou .js)
import fs from 'fs';
import path from 'path';

const pasta = './public/products'; // caminho da pasta com as imagens

fs.readdir(pasta, (err, arquivos) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }

  arquivos.forEach((arquivo, index) => {
    const ext = path.extname(arquivo); // .jpeg, .png, etc.
    const novoNome = `sandalia${String(index + 1).padStart(2, '0')}${ext}`;

    const caminhoAntigo = path.join(pasta, arquivo);
    const caminhoNovo = path.join(pasta, novoNome);

    fs.rename(caminhoAntigo, caminhoNovo, (err) => {
      if (err) {
        console.error(`Erro ao renomear ${arquivo}:`, err);
      } else {
        console.log(`${arquivo} renomeado para ${novoNome}`);
      }
    });
  });
});
