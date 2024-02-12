class Animal {
    constructor(nome, som) {     
      if (this.constructor === Animal) {        
        throw new Error("Não é possível instanciar uma classe abstrata");
      }      
      this.nome = nome;
      this.som = som;
    }  
    
    falar() {      
      throw new Error("Método abstrato deve ser implementado na subclasse");
    }
  }
    
  class Cachorro extends Animal {
    constructor(nome) {     
      super(nome, "au au");
    }
    
    falar() {      
      console.log(this.nome + " diz " + this.som);
    }
  }
    
  class Gato extends Animal {
    constructor(nome) {      
      super(nome, "miau");
    }
      
    falar() {      
      console.log(this.nome + " diz " + this.som);
    }
  }
  
   var rex = new Cachorro("Rex");
  var luna = new Cachorro("Luna");
  var tom = new Gato("Tom");
  
 
  rex.falar(); 
  luna.falar(); 
  tom.falar(); 
  