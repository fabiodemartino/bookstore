var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({

    title: {
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    },
    genre:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    publisher:{
        type:String
    },
    pages:{
        type:String
    },
    image_url:{
        type:String
    },
    buy_url:{
        type:String
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get Books
module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
}

// Add Genre

module.exports.addBook = function(book,callback, limit){
    Book.create(book,callback);
}
// Update Book
module.exports.updateBook = function(id,book,options,callback){
    var query = {_id:id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        image_url: book.image_url,
        buy_url: book.buy_url,
        pages: book.pages
    };
    Book.findOneAndUpdate(query, update, options,callback);
}

// Delete Book
module.exports.deleteBook = function(id,callback){
    var query = {_id:id};
    Book.remove(query,callback);
}