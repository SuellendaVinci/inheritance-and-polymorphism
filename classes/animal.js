class Animal {
    constructor(especie= "", nome="", idade=0, fome=0, sono=0, saude=true ) {
      this.especie = especie;
      this.nome = nome;
      this.idade = idade;
      this.#fome = fome;
      this.#sono = sono;
      this.#saude = saude;
    }
  
    static MSG = {
      "FOME_MAX_MSG": "O bichinho atingiu a fome máxima. Alimente-o.",
      "SONO_MAX_MSG": "O bichinho atingiu o sono máximo. Coloque-o para dormir.",
      "COMER_MSG": "O bichinho foi alimentado",
      "DORMIR_MSG": "O bichinho já está sem soninho",
      "NÃO_CUIDAR_MSG": "Seu bichinho está doente e precisa de atenção",
      "CUIDAR_MSG": 'O bichinho foi medicado e agora está saudável novamente',
    };
  
    // props
    #fome
    #saude
    #sono
    
  
    get fome() {
      return this.#fome;
    }
  
    get saude() {
      return this.#saude;
    }
  
    get sono() {
      return this.#sono;
    }

    set fome(valor) {
      this.#fome = valor;
    }

    set sono(valor) {
      this.#sono = valor;
    }

    set saude(valor) {
      this.#saude = valor;
    }

    seMovimentar() {
      if(this.#fome === 10) {
        this.#fome = 10;
        return Animal.FOME_MAX_MSG;
      } 
      if(this.#sono === 10) {
        this.#sono = 10;
        return Animal.SONO_MAX_MSG;
      } 
      else {
        this.#fome += 1;
        this.#sono += 1;
        return ""
      }
    }
  
    comer() {
      this.#fome = 0;
      return Animal.MSG.COMER_MSG;
    }

    dormir() {
      this.#sono = 0;
      return Animal.MSG.DORMIR_MSG;
    }

    nao_cuidar() {
      this.#saude = false;
      return Animal.MSG.NÃO_CUIDAR_MSG;
    }
  
    cuidar() {
      this.#saude = true;
      return Animal.MSG.CUIDAR_MSG;
    }
  
  
    info() {
      return `Seu animal é um ${this.especie}, se chama ${this.nome}, tem ${this.idade} anos e encontra-se ${(this.#saude)? "saudável" : "doente"}`;
    }
  
  }
  
  export { Animal };
  