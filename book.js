
// String.prototype.sucks = function(){
//   return this + " sucks";
// }

// Object Constructors
function Book( options ) {
  this.title = options.title;
  this.author = options.author;
  this.publisher = options.publisher;
  this.releaseYear = options.releaseYear;
  this.calculateAlliteration = function() {
    // count the number of first letters that match...
    return [this.title[0]  == this.author[0],
     this.title[0]  == this.publisher[0],
     this.author[0] == this.publisher[0]
    ].filter(function(bool){ return bool; }).length
  }
}

Book.prototype.format = "paper";
// count the number of words in title
Book.prototype.wordCount = function() {
  return this.title.split(" ").length;
 // return this.title.match(/[^\W]+/g).length;
}

function EBook( ) {
  this.fileSize = arguments.pop();
  Book.apply(this,arguments[0]);
}
EBook.prototype = new Book();

var gameOfThrones = new Book( {
  author:      "George R. R. Martin",
  title:       "Game of Thrones", 
  publisher:   "Bantam Spectra",
  releaseYear: 1996});
console.log( gameOfThrones.author );
// var cuckoo = new Book("Ken Kesey", "One Flew Over the Cuckoo's Nest", "Viking Press", 1962);
// var dunces = new Book( "John Kennedy Toole", "A Confederacy of Dunces", "LSU Press", 1980);


function multiply2Nums(num1,num2) {
  return num1 * num2;
}
multiply2Nums(2,3);
multiply2Nums.call(this, 2,3);





