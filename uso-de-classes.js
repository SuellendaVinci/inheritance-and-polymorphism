// Importação do Módulo (ES Modules)
import { Animal } from "./classes/animal.js";
import { Cachorro } from "./classes/cachorro.js";
import { Gato } from "./classes/gato.js";
import { Papagaio } from "./classes/papagaio.js";


const cachorro = new Cachorro("cachorro","Ted", 2, 2, 1, true);

  console.log("INSTANCIANDO UM DOGUINHO");
  console.log(cachorro.info());
  cachorro.seMovimentar();
  cachorro.seMovimentar();
  console.log(cachorro.comer());
  console.log(cachorro.dormir());
  console.log(cachorro.não_cuidar());
  console.log(cachorro.info());
  console.log(cachorro.cuidar());
  console.log("--------------------------");

  const gato = new Gato("gato","Mingau", 3, 1, 0, true);

  console.log("INSTANCIANDO UM GATINHO");
  console.log(gato.info());
  gato.seMovimentar();
  gato.seMovimentar();
  console.log(gato.comer());
  console.log(gato.dormir());
  console.log(gato.não_cuidar());
  console.log(gato.info());
  console.log(gato.cuidar());
  console.log("--------------------------");

  const papagaio = new Papagaio("papagaio","Louro José", 10, 8, 2, true);

  console.log("INSTANCIANDO UM LOURO JOSEZINHO");
  console.log(papagaio.info());
  papagaio.seMovimentar();
  papagaio.seMovimentar();
  console.log(papagaio.comer());
  console.log(papagaio.dormir());
  console.log(papagaio.não_cuidar());
  console.log(papagaio.info());
  console.log(papagaio.cuidar());
  console.log("--------------------------");


