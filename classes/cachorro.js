import { Animal } from "./animal.js";

// Herança
class Cachorro extends Animal {

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
    "SOM": "au au",
    "ELOGIO": "Bom garoto"
  }

  darAPatinha() {
    return Cachorro.MSG.ELOGIO;
  }

  //polimorfismo - o cachorro gasta mais energia ao se movimentar, por isso sente mais fome e sono
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
      this.fome += 4;
      this.sono += 3;
      return ""
    }
  }

  // polimorfismo - reescrita do método
  info() {
    return `O seu cachorro se chama ${this.nome}, tem a cor ${this.#cor}, ele emite ${Cachorro.MSG.SOM}, tem ${this.idade} anos e encontra-se ${(this.saude)? "saudável" : "doente"}`
  };
  
}


export { Cachorro };




