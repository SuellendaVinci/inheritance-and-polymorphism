import { Animal } from "./animal.js";

// Herança
class Papagaio extends Animal {

  // props estáticas
  static MSG = {
    "SOM": "FORA BOLSONARO!"
    //o papagaio fala o que a mãe ensina, meu papagaio tem consciência de classe.
  }

  //polimorfismo 

// Uma das maiores curiosidades quanto ao sono dos pássaros ocorre com uma constatação 
// surpreendente, relacionada à possibilidade de ocorrer sono durante seus voos!
// Pássaros que fazem grandes travessias acima de oceanos são aqueles que 
// possuem esta característica e isso se deve a utilizar um recurso de adormecimento 
// de uma parte do cérebro, mantendo a outra parte totalmente ativa.
// Esse processo permite um descanso à ave e que seu voo permaneça ocorrendo.

//fonte: https://www.portaldospassaros.com.br/qual-e-o-tempo-de-sono-dos-passaros/

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
      this.fome += 2;
      this.sono += 1;
      return ""
    }
  }

  // polimorfismo - reescrita do método
  info() {
    return `O seu papagaio se chama ${this.nome}, ele emite ${Papagaio.MSG.SOM}, tem ${this.idade} anos e encontra-se ${(this.saude)? "saudável" : "doente"}`
  };

}

export { Papagaio };