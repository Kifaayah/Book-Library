
//MODULE PATTERNS: The idea is to hide/shield some parts of the module/function from global scope
// IIFE- Immediately Invoked Function Expression (function () {})()
//the properties in module patterns can only be accessed or returned only when it is returned and not directly from the declared variable
//classes are constructor function

let bookLender= (function () {
    let libraryBooks = ["lifestyle", "sports", "fiction", "sci-fi"]
    
    
    return{
        borrowBook: function (nameOfBook){
            return libraryBooks.pop(nameOfBook)

        },
        
        viewAllBooks: function () {
            return libraryBooks
        },

        returnBook: function (nameOfBook){
            libraryBooks.push(nameOfBook)
            return libraryBooks
        }
    }
    


})()
// console.log(libraryBooks);

lendMeBook = bookLender.borrowBook()
console.log(lendMeBook);

viewBooks = bookLender.viewAllBooks()
console.log(viewBooks);

returnLibraryBook = bookLender.returnBook('health')
console.log(returnLibraryBook);




