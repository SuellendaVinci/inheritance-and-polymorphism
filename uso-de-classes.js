// Importação do Módulo (ES Modules)
import { Animal } from "./classes/animal.js";
import { Cachorro } from "./classes/cachorro.js";
import { Gato } from "./classes/gato.js";
import { Papagaio } from "./classes/papagaio.js";


const cachorro = new Cachorro(especie="cachorro", nome="Ted", idade=1, fome=2, sono=1, saude=true);

  console.log(cachorro);
  console.log(cachorro.info());
  cachorro.seMovimentar();
  cachorro.seMovimentar();
  console.log(cachorro.info());
  console.log(cachorro.comer());
  console.log(cachorro.dormir());
  console.log(cachorro.não_cuidar());
  console.log(cachorro.info());
  console.log(cachorro.cuidar());





