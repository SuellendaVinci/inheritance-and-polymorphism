import { Animal } from "./animal.js";

// Herança
class Gato extends Animal {

  constructor(especie= "", nome="", idade=0, fome=0, sono=0, saude=true, cor="") {
    super(especie, nome, idade, fome, sono, saude);
    this.#cor = cor;
  }

  #cor

  get cor() {
    return this.#cor;
  }


  // props estáticas
  static MSG = {
    "SOM": "miau miau",
    "RONRONAR": "rrrrrr!rom-rom"
  }

  fazerCarinhoNaBarriguinha() {
    return Gato.MSG.RONRONAR;
  }

  //polimorfismo - o gato é um animal pequeno logo sente menos fome e por ser um felino tem
  //como característica sentir mais sono
  seMovimentar() {
    if(this.fome === 10) {
      this.fome = 10;
      return Animal.FOME_MAX_MSG;
    } 
    if(this.sono === 10) {
      this.sono = 10;
      return Animal.SONO_MAX_MSG;
    } 
    else {
      this.fome += 3;
      this.sono += 5;
      return ""
    }
  }

  // polimorfismo - reescrita do método
  info() {
    return `O seu gato se chama ${this.nome}, tem a cor ${this.#cor}, ele emite ${Gato.MSG.SOM}, tem ${this.idade} anos e encontra-se ${(this.saude)? "saudável" : "doente"}`
  };

}

export { Gato };