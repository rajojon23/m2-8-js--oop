// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
	constructor(title, genre, author, isRead){
		this.title = title;
		this.genre = genre;
		this.author = author;
		this.read = (!isRead) ? false : isRead;
	}
}

let book1 = new Book(
	"Call of the wild",
	"Fiction",
	"Jack London",
	true
);

let book2 = new Book(
	"Deep Work",
	"Non-Fiction , Self-Help",
	"Cal Newport",
	true
);

let book3 = new Book(
	"Gideon's Fall",
	"Comic Book, Horror",
	"Jeff Lemire",
	true
);



let book4 = new Book(
	"Handmaid's tale",
	"Dystopia",
	"Margaret Atwood",
	false
);


let book5 = new Book(
	"The Bible",
	"Scripture",
	"God..."
);




console.log(book1, book2, book3, book4, book5);
