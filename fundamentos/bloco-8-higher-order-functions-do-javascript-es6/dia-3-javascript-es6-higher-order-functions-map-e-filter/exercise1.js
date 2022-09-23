const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// function formatedBookNames() {
//   // escreva seu código aqui
//   return books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
// }
// console.log(formatedBookNames());

// function nameAndAge() {
//   // escreva seu código aqui
//   const newArray = books.map((element) => {
//     const newObject = {};
//     newObject.age = (element.releaseYear - element.author.birthYear);
//     newObject.author = element.author;
//     return newObject;
//   });
//   return newArray.sort((authorA, authorB) => authorA.age - authorB.age);
// }
// console.log(nameAndAge());

// function fantasyOrScienceFiction() {
//   // escreva seu código aqui
//   return books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
// }
// console.log(fantasyOrScienceFiction());

// function oldBooksOrdered() {
//   // escreva seu código aqui
//   const newArray = books.filter((book) => (2022 - book.releaseYear) >= 60);
//   return newArray.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
// }
// console.log(oldBooksOrdered());

// function fantasyOrScienceFictionAuthors() {
//   // escreva seu código aqui
//   return fantasyOrScienceFiction().map((authors) => authors.author.name).sort();
// }
// console.log(fantasyOrScienceFictionAuthors());

// function oldBooks() {
//   // escreva seu código aqui
//   return oldBooksOrdered().map((names) => names.name);
// }
// console.log(oldBooks());

function authorWith3DotsOnName() {
  return books.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;
}
console.log(authorWith3DotsOnName());
