const addBtn = document.querySelector('#btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const books = JSON.parse(localStorage.getItem('books')) || [];

addBtn.addEventListener('click', () => {
  let size;
  if (books.length == null) {
    size = 0;
  } else {
    size = books.length;
  }

  books.push({ id: size, title: titleInput.value, author: authorInput.value });
  localStorage.setItem('books', JSON.stringify(books));
  location.reload();
});