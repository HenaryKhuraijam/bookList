const bookList = [
  {
    id: '1',
    title: 'Handook',
    author: 'Jemson',
  },
  {
    id: '2',
    title: 'To the hole',
    author: 'Jem',
  },
  {
    id: '3',
    title: 'Fly high',
    author: 'Jakson',
  },
  {
    id: '4',
    title: 'HWelcome to India',
    author: 'Ali khan',
  },
];

class AwesomeBook {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const id = Date.now().toString();
    this.books.push({ id, title, author });
    return Date;
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
const awesomeBook = new AwesomeBook();

const displayBooklist = (bookList) => {
  document.getElementById('booklist-content').innerHTML = bookList.map((book) => `
  <article id="book-${book.id}">
    <p><span class="title">"${book.title}"</span> by <span class="author">${book.author}</span></p>
    <button class="btn" onClick="removeBtnOnClick('${book.id}')" type="button" id="${book.id}">Remove</button>
  </article>
  `).join('');
};

// Local storage
const saveToLocalStorage = () => {
  localStorage.setItem('newBook', JSON.stringify(awesomeBook.books));
};

const localBooks = JSON.parse(localStorage.getItem('newBook'));

if (localBooks === null) {
  awesomeBook.books = bookList;
} else {
  awesomeBook.books = localBooks;
}

displayBooklist(awesomeBook.books);

const onSubmitHandlerAddForm = (e) => {
  e.preventDefault();
  awesomeBook.addBook(e.target[0].value, e.target[1].value);
  displayBooklist(awesomeBook.books);
  saveToLocalStorage();
  e.target.reset();
};
/* eslint-disable */
const removeBtnOnClick = (id) => {
  awesomeBook.removeBook(id);
  displayBooklist(awesomeBook.books);
  saveToLocalStorage();
};
/* eslint-enable */
document.getElementById('add-form').addEventListener('submit', onSubmitHandlerAddForm);
