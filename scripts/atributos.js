const header = document.querySelector('header');
header.setAttribute('id', 'header');

const headerID = document.querySelector('#header');
//console.log(headerID);
console.log(headerID.getAttribute('id')); //pegando apenas o atributo
console.log(headerID.getAttribute('class')); // pegando classe do header
header.removeAttribute('id'); // removendo id do html
header.removeAttribute('class'); // removendo classe do html
header.setAttribute('class', 'bg header'); //adicionando classe no html
// nesse caso consigo colocar id
// no header => h1 onde nao havia id
