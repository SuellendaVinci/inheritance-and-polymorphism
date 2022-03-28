import { Animal } from "./animal.js";

// Herança
class Gato extends Animal {

  // props estáticas
  static MSG = {
    "SOM": "miau miau"
  }

  //polimorfismo - o gato é um animal pequeno logo sente menos fome e por ser um felino tem
  //como característica sentir mais sono
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
      this.fome += 3;
      this.sono += 5;
      return ""
    }
  }

  // polimorfismo - reescrita do método
  info() {
    return `O seu gato se chama ${this.nome}, ele faz ${this.Gato.MSG.SOM}, tem ${this.idade} anos e encontra-se ${(this.saúde)? "saudável" : "doente"}`
  };

}

export { Gato };