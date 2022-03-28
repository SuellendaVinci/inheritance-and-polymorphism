import { Animal } from "./animal.js";

// Herança
class Cachorro extends Animal {

  

  // props estáticas
  static MSG = {
    "SOM": "au au"
  }

  //polimorfismo - o cachorro gasta mais energia ao se movimentar, por isso sente mais fome e sono
  seMovimentar() {
    if(this.fome === 10) {
      this.fome = 10;
      return FOME_MAX;
    } 
    if(this.sono === 10) {
      this.sono = 10;
      return SONO_MAX;
    } 
    else {
      this.fome += 4;
      this.sono += 3;
      return ""
    }
  }

  // polimorfismo - reescrita do método
  info() {
    return `O seu cachorro se chama ${this.nome}, ele faz ${this.Cachorro.MSG.SOM}, tem ${this.idade} anos e encontra-se ${(this.saúde)? "saudável" : "doente"}`
  };
  
}


export { Cachorro };




