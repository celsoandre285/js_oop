/*
  criando class em JS
  padrão camlCase
*/
function Person(){
  /*Atributos*/
  this.nome ='';
  this.idade='';
  this.corDosOlhos = '';
  this.body = '';

  /*Metodos*/
  this.andar = function(){
    console.log('partiu!');
  };
  this.falar = function(){
    console.log('Ola Mundo!');
  };
  this.ver = function(){
    console.log('eu vejo códigos');
  };

}

var celso = new Person();
celso.nome = "celso";
celso.idade = "31";
celso.corDosOlhos = "Castanhos";
celso.body = "gordo";
celso.andar();
celso.ver();

//console.log(typeof Person);
//console.log(typeof celso);



var andre = new Person();
andre.nome = "celso andre";
andre.idade = "32";
andre.corDosOlhos = "Castanhos";
andre.body = "bem gordo";
andre.andar();
andre.ver();

console.log(celso);
console.log(andre);
