// Array to store all book objects
const library = [];

// Function to add a new book to the library
function addBook() {
  const title = prompt("Enter book title:");
  if (!title) {
    alert("Title cannot be empty.");
    return;
  }

  const author = prompt("Enter author name:");
  if (!author) {
    alert("Author cannot be empty.");
    return;
  }

  // Create a book object and push it to the library array
  const newBook = {
    title: title,
    author: author,
    isRead: false
  };

  library.push(newBook);
  alert(`"${title}" by ${author} was successfully added!`);
  console.log("Added book:", newBook);
}

// Function to list all books in the library
function listBooks() {
  if (library.length === 0) {
    alert("The library is currently empty.");
    console.log("The library is currently empty.");
    return;
  }

  console.log("--- Current Library ---");
  library.forEach((book, index) => {
    const status = book.isRead ? "Read" : "Unread";
    console.log(`${index + 1}. "${book.title}" by ${book.author} [Status: ${status}]`);
  });

  alert("Book list displayed in the console (press F12 to view).");
}

// Function to mark a book as read
function markAsRead(title) {
  if (!title) return;

  const foundBook = library.find(
    (book) => book.title.toLowerCase() === title.trim().toLowerCase()
  );

  if (foundBook) {
    foundBook.isRead = true;
    alert(`"${foundBook.title}" is now marked as read!`);
    console.log(`Marked as read: "${foundBook.title}"`);
  } else {
    alert(`Book titled "${title}" was not found.`);
    console.log(`Book titled "${title}" was not found.`);
  }
}

// Optional Bonus: Function to remove a book
function removeBook() {
  const title = prompt("Enter the title of the book to remove:");
  if (!title) return;

  const index = library.findIndex(
    (book) => book.title.toLowerCase() === title.trim().toLowerCase()
  );

  if (index !== -1) {
    const removed = library.splice(index, 1);
    alert(`"${removed[0].title}" was removed from the library.`);
    console.log("Removed book:", removed[0]);
  } else {
    alert(`Book titled "${title}" was not found.`);
  }
}

// Main menu loop using the teacher's structure
let running = true;

while (running) {
  const choice = prompt(
    "Book Tracker\n1. Add Book\n2. List Books\n3. Mark Book as Read\n4. Remove Book\n5. Exit\n\nEnter your choice:"
  );

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBooks();
      break;
    case "3":
      const titleToMark = prompt("Enter the title of the book to mark as read:");
      markAsRead(titleToMark);
      break;
    case "4":
      removeBook();
      break;
    case "5":
    case null:
      running = false;
      alert("Goodbye!");
      console.log("Book Tracker session ended.");
      break;
    default:
      alert("Invalid choice.");
      break;
  }
}