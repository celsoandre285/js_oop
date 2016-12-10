/*
  criando class em JS
  padrão camlCase
*/
function Person(){
  /*Publico*/
  this.nome = '';
  this.idade = '';
  /*Privado*/
  var tattoo = '';

  this.mover = function(){}
  var nadar = function(){}
}

var celso = new Person();
/*Publico*/
celso.nome = "celso";
celso.idade = 32;
console.log(celso);
