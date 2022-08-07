const element = document.querySelector('body');
element.classList.add('active', 'green'); // adiciona classe active
element.classList.remove('active'); // remove classe active
element.classList.toggle('active');
// se a classe existir ele tira,
//se nao existir ele adiciona
//nesse momento a linha de cima
//esta rmeovendo e o togle vai, portanto, adicionar
console.log(element.classList);
